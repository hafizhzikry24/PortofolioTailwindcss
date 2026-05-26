"use client";

import { useState, useEffect, useRef } from "react";
import { createClient } from "@supabase/supabase-js";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { Send, MessageSquare, User, Calendar } from "lucide-react";
import { useLanguage } from "../../../LanguageContext";
import Swal from "sweetalert2";

// ─── Supabase ─────────────────────────────────────────────────────────────────
const supabaseUrl = import.meta.env.VITE_SUPABASE_API;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_KEY;
const supabase = createClient(supabaseUrl, supabaseAnonKey);

// ─── Profanity Filter ─────────────────────────────────────────────────────────
const FORBIDDEN_WORDS = [
  "gay", "pantek", "bodoh", "kontol", "bajingan", "bangsat", "homo",
  "aku suka cowo", "lesbian", "biseksual", "lgbt", "p gay", "homoseksual",
  "cinta sesama jenis", "cinta gay", "hubungan sesama jenis", "cinta homo",
  "hubungan homo", "tolol", "anjing", "goblok", "brengsek", "sialan",
  "monyet", "setan", "iblis", "jahanam", "laknat", "kasar", "perek",
  "lonte", "sundal", "janda", "cabul", "mesum", "bejad", "porno",
  "maksiat", "seks", "pornoaksi", "esek-esek", "jijik", "teler",
  "pemabuk", "mabuk", "narkoba", "sabu", "ganja", "heroin", "kecanduan",
  "melacur", "pelacur", "gila", "banci", "otak mesum", "masturbasi",
  "stupid", "idiot", "moron", "bastard", "dumb", "slut", "whore",
  "bitch", "jerk", "damn", "crap", "hell", "suck", "loser", "trash",
  "pervert", "freak", "sicko", "degenerate", "creep", "gross", "nasty",
  "dirty", "drunk", "druggie", "addict", "high", "pothead", "stoned",
  "weed", "cocaine", "meth", "sex", "porn", "masturbate", "obscene", "vulgar",
];

const containsForbiddenWords = (text) => {
  const regex = new RegExp(FORBIDDEN_WORDS.join("|"), "i");
  return regex.test(text);
};

// ─── Motion Variants ──────────────────────────────────────────────────────────
const sectionVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.08 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", damping: 18, stiffness: 90 },
  },
};

const cardEntryVariants = {
  initial: { opacity: 0, y: -18, scale: 0.97 },
  animate: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring", damping: 20, stiffness: 100 },
  },
  exit: { opacity: 0, scale: 0.95, transition: { duration: 0.15 } },
};

// ─── Background Dot Grid ──────────────────────────────────────────────────────
const DotGrid = () => (
  <div
    aria-hidden="true"
    className="pointer-events-none absolute inset-0 opacity-[0.055]"
    style={{
      backgroundImage: "radial-gradient(circle, #52525b 1.2px, transparent 1.2px)",
      backgroundSize: "22px 22px",
    }}
  />
);

// ─── Comment Card ─────────────────────────────────────────────────────────────
const CommentCard = ({ feedback, index }) => (
  <motion.article
    layout
    variants={cardEntryVariants}
    initial="initial"
    animate="animate"
    exit="exit"
    whileHover={{
      x: -2,
      y: -2,
      boxShadow: "5px 5px 0px 0px #18181b",
      transition: { type: "spring", damping: 22, stiffness: 300 },
    }}
    whileTap={{ scale: 0.99 }}
    style={{ boxShadow: "4px 4px 0px 0px #18181b" }}
    className="border-2 border-zinc-900 bg-white p-5"
    aria-label={`Comment from ${feedback.name}`}
  >
    <div className="mb-3 flex items-start justify-between gap-3">
      <div>
        <span className="font-mono text-[10px] font-bold tracking-widest text-purple-500">
          {String(index + 1).padStart(2, "0")} / GUEST
        </span>
        <h3 className="mt-0.5 font-mono text-base font-black uppercase leading-tight tracking-tight text-zinc-900 sm:text-lg">
          {feedback.name}
        </h3>
      </div>
      <span className="flex-shrink-0 border border-purple-400 bg-purple-50 px-2 py-0.5 font-mono text-[9px] uppercase tracking-widest text-purple-600">
        MSG
      </span>
    </div>

    <p className="border-l-2 border-purple-400 pl-3 text-sm leading-relaxed text-zinc-700">
      {feedback.messages}
    </p>

    <div className="mt-4 flex items-center gap-1.5 font-mono text-[10px] text-zinc-400">
      <Calendar size={10} aria-hidden="true" />
      <span>{feedback.created_at}</span>
    </div>
  </motion.article>
);

// ─── Main Component ────────────────────────────────────────────────────────────
function Comment() {
  const { language } = useLanguage();
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [feedbackList, setFeedbackList] = useState([]);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.08 });

  const isEn = language === "en";

  useEffect(() => {
    fetchFeedbackList();
  }, []);

  const fetchFeedbackList = async () => {
    try {
      const { data, error } = await supabase
        .from("feedback")
        .select("name, messages, created_at")
        .order("created_at", { ascending: false });

      if (error) {
        console.error("Error fetching feedback:", error);
        return;
      }

      setFeedbackList(
        data.map((f) => ({
          ...f,
          created_at: new Date(f.created_at).toLocaleDateString("en-US", {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric",
          }),
        }))
      );
    } catch (err) {
      console.error("Unexpected error fetching feedback:", err);
    }
  };

  const handleSubmit = async () => {
    if (!name || !message) {
      await Swal.fire({
        icon: "warning",
        title: isEn ? "Missing Information" : "Informasi Tidak Lengkap",
        text: isEn
          ? "Please provide both name and message."
          : "Mohon isi nama dan pesan.",
        confirmButtonText: isEn ? "Okay" : "Baik",
        confirmButtonColor: "#6366f1",
      });
      return;
    }

    if (containsForbiddenWords(message)) {
      await Swal.fire({
        icon: "error",
        title: isEn ? "Oops..." : "Ups...",
        text: isEn
          ? "Your message contains inappropriate content."
          : "Pesan Anda mengandung konten yang tidak pantas.",
        confirmButtonText: isEn ? "Okay" : "Baik",
        confirmButtonColor: "#6366f1",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const createdAt = new Date().toISOString();
      const { error } = await supabase
        .from("feedback")
        .insert([{ name, messages: message, created_at: createdAt }]);

      if (error) {
        console.error("Error submitting feedback:", error);
        return;
      }

      const formattedDate = new Date(createdAt).toLocaleDateString("en-US", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
      });

      setFeedbackList([
        { name, messages: message, created_at: formattedDate },
        ...feedbackList,
      ]);

      await Swal.fire({
        icon: "success",
        title: isEn ? "Thank You!" : "Terima Kasih!",
        text: isEn
          ? "Your feedback has been submitted successfully."
          : "Feedback Anda telah berhasil dikirim.",
        confirmButtonText: isEn ? "Great!" : "Bagus!",
        confirmButtonColor: "#6366f1",
        timer: 2000,
        timerProgressBar: true,
      });

      setName("");
      setMessage("");
    } catch (err) {
      console.error("Unexpected error submitting feedback:", err);
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputClass =
    "w-full border-2 border-zinc-300 bg-zinc-50 px-3 py-2.5 font-mono text-sm text-zinc-900 placeholder:text-zinc-400 focus:border-purple-500 focus:bg-white focus:outline-none transition-colors duration-150";

  return (
    <section
      id="comment"
      aria-labelledby="comment-heading"
      className="relative overflow-hidden bg-zinc-50"
    >
      <DotGrid />

      {/* ── Label bar ── */}
      <div className="relative z-10 border-b-2 border-zinc-900 bg-white px-4 py-3 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-6xl items-center justify-between">
          <p className="font-mono text-[10px] font-bold uppercase tracking-widest text-zinc-900">
            GUEST_BOOK :: ZIKKDEV.DEV
          </p>
          <span className="flex items-center gap-1.5 font-mono text-[10px] font-bold text-purple-600">
            <span
              className="h-1.5 w-1.5 animate-pulse rounded-full bg-purple-500"
              aria-hidden="true"
            />
            {feedbackList.length} MESSAGES
          </span>
        </div>
      </div>

      {/* ── Main content ── */}
      <motion.div
        ref={ref}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={sectionVariants}
        className="relative z-10 mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8"
      >
        {/* Section heading */}
        <motion.div variants={itemVariants} className="mb-10 sm:mb-12">
          <p className="mb-3 font-mono text-xs tracking-wide text-purple-600">
            &gt; COMMENT_SYS :: OPEN_LOG_
          </p>
          <h2
            id="comment-heading"
            className="font-black uppercase leading-[0.9] tracking-tighter text-zinc-900"
            style={{ fontSize: "clamp(2.4rem, 7vw, 4rem)" }}
          >
            {isEn ? "GREET" : "SAPA"}
            <br />
            <span className="text-purple-500">{isEn ? "ME." : "SAYA."}</span>
          </h2>
          <p className="mt-5 max-w-lg font-mono text-sm leading-relaxed text-zinc-500">
            {isEn
              ? "Leave a comment or share your thoughts about my work. All feedback is welcome."
              : "Tinggalkan komentar atau bagikan pendapatmu. Semua masukan sangat berarti."}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12">

          {/* ── Left: Form panel ── */}
          <motion.div variants={itemVariants}>
            <motion.div
              whileHover={{
                boxShadow: "6px 6px 0px 0px #18181b",
                transition: { type: "spring", damping: 22, stiffness: 300 },
              }}
              style={{ boxShadow: "5px 5px 0px 0px #18181b" }}
              className="border-2 border-zinc-900 bg-white"
            >
              {/* Window title bar */}
              <div className="flex items-center justify-between border-b-2 border-zinc-900 bg-zinc-900 px-4 py-2.5">
                <div className="flex items-center gap-2">
                  <MessageSquare size={12} className="text-purple-400" aria-hidden="true" />
                  <span className="font-mono text-xs font-bold uppercase tracking-widest text-zinc-100">
                    {isEn ? "SUBMIT_COMMENT.EXE" : "KIRIM_KOMENTAR.EXE"}
                  </span>
                </div>
                <div className="flex gap-1.5" aria-hidden="true">
                  <span className="h-2.5 w-2.5 border border-zinc-600 bg-zinc-800" />
                  <span className="h-2.5 w-2.5 border border-zinc-600 bg-zinc-800" />
                  <span className="h-2.5 w-2.5 border border-purple-400/60 bg-purple-400/20" />
                </div>
              </div>

              <div className="space-y-5 p-5 sm:p-6">
                {/* Name field */}
                <div>
                  <label
                    htmlFor="comment-name"
                    className="mb-1.5 block font-mono text-[10px] font-bold uppercase tracking-widest text-zinc-500"
                  >
                    &gt; {isEn ? "ALIAS" : "NAMA"}:
                  </label>
                  <div className="relative">
                    <User
                      size={13}
                      className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400"
                      aria-hidden="true"
                    />
                    <input
                      id="comment-name"
                      type="text"
                      placeholder={
                        isEn
                          ? "Feel free to use a pseudonym"
                          : "Boleh pakai nama samaran"
                      }
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className={`${inputClass} pl-8`}
                    />
                  </div>
                </div>

                {/* Message field */}
                <div>
                  <label
                    htmlFor="comment-message"
                    className="mb-1.5 block font-mono text-[10px] font-bold uppercase tracking-widest text-zinc-500"
                  >
                    &gt; {isEn ? "MESSAGE" : "PESAN"}:
                  </label>
                  <textarea
                    id="comment-message"
                    rows={4}
                    placeholder={isEn ? "Your thoughts..." : "Pikiran kamu..."}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className={`${inputClass} resize-none`}
                  />
                </div>

                {/* Submit button */}
                <motion.button
                  type="button"
                  onClick={handleSubmit}
                  disabled={isSubmitting}
                  whileHover={
                    !isSubmitting
                      ? {
                          x: -2,
                          y: -2,
                          boxShadow: "5px 5px 0px 0px #18181b",
                          transition: { type: "spring", damping: 22, stiffness: 300 },
                        }
                      : {}
                  }
                  whileTap={
                    !isSubmitting
                      ? {
                          scale: 0.97,
                          y: 2,
                          boxShadow: "2px 2px 0px 0px #18181b",
                          transition: { type: "spring", damping: 22, stiffness: 300 },
                        }
                      : {}
                  }
                  style={{ boxShadow: "4px 4px 0px 0px #18181b" }}
                  className="flex w-full items-center justify-center gap-2 border-2 border-zinc-900 bg-purple-400 py-3 font-mono text-xs font-black uppercase tracking-widest text-zinc-900 transition-colors duration-150 hover:bg-purple-300 disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {isSubmitting ? (
                    <>
                      <motion.span
                        animate={{ rotate: 360 }}
                        transition={{ repeat: Infinity, duration: 0.8, ease: "linear" }}
                        className="inline-block h-3 w-3 border-2 border-zinc-900 border-t-transparent"
                        aria-hidden="true"
                      />
                      {isEn ? "TRANSMITTING..." : "MENGIRIM..."}
                    </>
                  ) : (
                    <>
                      <Send size={12} aria-hidden="true" />
                      {isEn ? "SEND_MESSAGE.EXE" : "KIRIM_PESAN.EXE"}
                    </>
                  )}
                </motion.button>
              </div>
            </motion.div>
          </motion.div>

          {/* ── Right: Comments list ── */}
          <motion.div variants={itemVariants} className="flex flex-col">
            <div className="mb-4 flex items-center justify-between border-b-2 border-zinc-200 pb-3">
              <p className="font-mono text-[10px] font-bold uppercase tracking-widest text-zinc-500">
                COMMENT_LOG :: {feedbackList.length} ENTRIES
              </p>
              <span className="font-mono text-[9px] uppercase tracking-widest text-zinc-400">
                SORTED BY DATE ↓
              </span>
            </div>

            <div className="max-h-[600px] space-y-4 overflow-y-auto pr-0.5 lg:max-h-[640px]">
              <AnimatePresence initial={false}>
                {feedbackList.length > 0 ? (
                  feedbackList.map((feedback, index) => (
                    <CommentCard
                      key={`${feedback.name}-${feedback.created_at}-${index}`}
                      feedback={feedback}
                      index={index}
                    />
                  ))
                ) : (
                  <motion.div
                    key="empty-state"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    transition={{ type: "spring", damping: 20, stiffness: 100 }}
                    className="border-2 border-dashed border-zinc-300 bg-white p-10 text-center"
                  >
                    <p className="mb-2 font-mono text-xs font-bold uppercase tracking-widest text-zinc-500">
                      NO_MESSAGES :: EMPTY_LOG
                    </p>
                    <p className="font-mono text-xs text-zinc-400">
                      &gt;{" "}
                      {isEn
                        ? "Be the first to leave a message"
                        : "Jadilah yang pertama meninggalkan pesan"}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

export default Comment;
