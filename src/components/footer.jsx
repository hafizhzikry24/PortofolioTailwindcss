"use client";

import { useEffect, useRef, useState } from "react";
import { FiGithub, FiLinkedin, FiInstagram } from "react-icons/fi";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { useLanguage } from "../LanguageContext";
import {
  Send,
  User,
  Mail,
  Phone,
  MessageSquare,
  ChevronUp,
} from "lucide-react";
import MyLogo from "../assets/mylogo.png";

// ─── Data ─────────────────────────────────────────────────────────────────────

const SOCIAL_LINKS = [
  {
    id: "github",
    Icon: FiGithub,
    href: "https://github.com/hafizhzikry24",
    label: "GitHub",
  },
  {
    id: "linkedin",
    Icon: FiLinkedin,
    href: "https://www.linkedin.com/in/hafizhzikry",
    label: "LinkedIn",
  },
  {
    id: "instagram",
    Icon: FiInstagram,
    href: "https://instagram.com/hafizh.zikry",
    label: "Instagram",
  },
];

const FORM_FIELDS = [
  {
    id: "name",
    name: "name",
    type: "text",
    labelEn: "NAME",
    labelId: "NAMA",
    Icon: User,
    placeholderEn: "Your full name",
    placeholderId: "Nama lengkap",
  },
  {
    id: "email",
    name: "email",
    type: "email",
    labelEn: "EMAIL",
    labelId: "EMAIL",
    Icon: Mail,
    placeholderEn: "Email address",
    placeholderId: "Alamat email",
  },
  {
    id: "phone",
    name: "phone",
    type: "text",
    labelEn: "PHONE",
    labelId: "TELEPON",
    Icon: Phone,
    placeholderEn: "Phone number",
    placeholderId: "Nomor telepon",
  },
];

// ─── Motion Variants ──────────────────────────────────────────────────────────

const sectionVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.14,
      delayChildren: 0.05,
    },
  },
};

const columnVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", damping: 20, stiffness: 100 },
  },
};

// ─── Scanlines ────────────────────────────────────────────────────────────────

const Scanlines = () => (
  <div
    aria-hidden="true"
    className="pointer-events-none absolute inset-0 z-10 opacity-[0.025]"
    style={{
      backgroundImage:
        "repeating-linear-gradient(0deg, rgba(255,255,255,0.2) 0px, rgba(255,255,255,0.2) 1px, transparent 1px, transparent 4px)",
    }}
  />
);

// ─── SocialButton ─────────────────────────────────────────────────────────────

const SocialButton = ({ Icon, href, label }) => (
  <motion.a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={label}
    whileHover={{
      x: -2,
      y: -2,
      boxShadow: "3px 3px 0px 0px rgba(245,158,11,0.5)",
    }}
    whileTap={{ scale: 0.93, y: 2, boxShadow: "1px 1px 0px 0px rgba(245,158,11,0.3)" }}
    style={{ boxShadow: "3px 3px 0px 0px rgba(0,0,0,0.7)" }}
    className="flex h-9 w-9 items-center justify-center border-2 border-zinc-700 text-zinc-500 transition-colors duration-200 hover:border-purple-400/60 hover:text-purple-400"
  >
    <Icon size={14} aria-hidden="true" />
  </motion.a>
);

// ─── ContactForm ──────────────────────────────────────────────────────────────

const ContactForm = ({ language }) => {
  const formRef = useRef(null);
  const [status, setStatus] = useState("idle"); // 'idle' | 'loading' | 'success' | 'error'
  const [statusMessage, setStatusMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");
    setStatusMessage(language === "en" ? "TRANSMITTING..." : "MENGIRIM...");

    const formData = new FormData(e.target);
    const json = JSON.stringify(Object.fromEntries(formData));

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: json,
      });
      const data = await res.json();

      if (res.ok) {
        setStatus("success");
        setStatusMessage(
          data.message ||
            (language === "en" ? "[OK] Message sent!" : "[OK] Pesan terkirim!")
        );
        formRef.current?.reset();
      } else {
        setStatus("error");
        setStatusMessage(
          data.message ||
            (language === "en" ? "[ERR] Try again." : "[ERR] Coba lagi.")
        );
      }
    } catch {
      setStatus("error");
      setStatusMessage(
        language === "en"
          ? "[ERR] TRANSMISSION FAILED."
          : "[ERR] GAGAL MENGIRIM."
      );
    } finally {
      setTimeout(() => {
        setStatus("idle");
        setStatusMessage("");
      }, 3500);
    }
  };

  const inputBase =
    "w-full border-2 border-zinc-800 bg-zinc-900/50 px-3 py-2.5 font-mono text-sm text-zinc-200 placeholder:text-zinc-700 focus:border-purple-400/50 focus:outline-none transition-colors duration-200";

  return (
    <form ref={formRef} onSubmit={handleSubmit} noValidate>
      <input
        type="hidden"
        name="access_key"
        value="3fb4d7f3-81ab-42e0-b266-7a2aa397b69e"
      />
      <input type="hidden" name="subject" value="ZikkDev Contact" />
      <input type="checkbox" name="botcheck" className="hidden" />

      <div className="space-y-4">
        {FORM_FIELDS.map((field) => (
          <div key={field.id}>
            <label
              htmlFor={`footer-${field.id}`}
              className="mb-1.5 block font-mono text-[10px] uppercase tracking-widest text-zinc-600"
            >
              &gt;{" "}
              {language === "en" ? field.labelEn : field.labelId}:
            </label>
            <div className="relative">
              <field.Icon
                size={13}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-600"
                aria-hidden="true"
              />
              <input
                id={`footer-${field.id}`}
                type={field.type}
                name={field.name}
                placeholder={
                  language === "en"
                    ? field.placeholderEn
                    : field.placeholderId
                }
                required
                className={`${inputBase} pl-8`}
              />
            </div>
          </div>
        ))}

        {/* Textarea */}
        <div>
          <label
            htmlFor="footer-message"
            className="mb-1.5 block font-mono text-[10px] uppercase tracking-widest text-zinc-600"
          >
            &gt; {language === "en" ? "MESSAGE" : "PESAN"}:
          </label>
          <textarea
            id="footer-message"
            name="message"
            rows={4}
            placeholder={
              language === "en" ? "Your message..." : "Pesan kamu..."
            }
            required
            className={`${inputBase} resize-none`}
          />
        </div>

        {/* Submit */}
        <motion.button
          type="submit"
          disabled={status === "loading"}
          whileHover={
            status !== "loading"
              ? {
                  x: -2,
                  y: -2,
                  boxShadow: "5px 5px 0px 0px rgba(245,158,11,0.5)",
                }
              : {}
          }
          whileTap={
            status !== "loading"
              ? {
                  scale: 0.97,
                  y: 2,
                  boxShadow: "2px 2px 0px 0px rgba(245,158,11,0.3)",
                }
              : {}
          }
          style={{ boxShadow: "4px 4px 0px 0px rgba(245,158,11,0.3)" }}
          className="flex w-full items-center justify-center gap-2 border-2 border-purple-400/60 py-3 font-mono text-xs font-bold uppercase tracking-widest text-purple-400 transition-colors duration-200 hover:bg-purple-400/10 disabled:cursor-not-allowed disabled:opacity-50"
        >
          {status === "loading" ? (
            <>
              <motion.span
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                className="inline-block h-3 w-3 border border-purple-400 border-t-transparent"
                aria-hidden="true"
              />
              {language === "en" ? "TRANSMITTING..." : "MENGIRIM..."}
            </>
          ) : (
            <>
              <Send size={12} aria-hidden="true" />
              {language === "en" ? "SEND_MESSAGE.EXE" : "KIRIM_PESAN.EXE"}
            </>
          )}
        </motion.button>
      </div>

      {/* Status feedback */}
      <AnimatePresence>
        {statusMessage && (
          <motion.p
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className={`mt-4 text-center font-mono text-xs ${
              status === "success"
                ? "text-green-400"
                : status === "error"
                ? "text-red-400"
                : "text-zinc-500"
            }`}
          >
            {statusMessage}
          </motion.p>
        )}
      </AnimatePresence>
    </form>
  );
};

// ─── Footer ───────────────────────────────────────────────────────────────────

const Footer = () => {
  const { language } = useLanguage();
  const [showScrollTop, setShowScrollTop] = useState(false);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.08 });

  useEffect(() => {
    const handler = () => setShowScrollTop(window.scrollY > 400);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer
      id="contacts"
      className="relative overflow-hidden border-t-2 border-zinc-800 bg-zinc-950"
      aria-label="Footer"
    >
      <Scanlines />

      {/* Grid texture */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.018]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)
          `,
          backgroundSize: "48px 48px",
        }}
      />

      {/* Label bar */}
      <div className="relative z-10 border-b-2 border-zinc-800 bg-zinc-950/70 px-4 py-3 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-6xl items-center justify-between">
          <p className="font-mono text-[10px] uppercase tracking-widest text-zinc-700">
            CONTACT_SYS :: ZIKKDEV.DEV
          </p>
          <span className="flex items-center gap-1.5 font-mono text-[10px] text-green-400">
            <span
              aria-hidden="true"
              className="h-1.5 w-1.5 animate-pulse rounded-full bg-green-400"
            />
            ONLINE
          </span>
        </div>
      </div>

      {/* Main grid */}
      <motion.div
        ref={sectionRef}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={sectionVariants}
        className="relative z-10 mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-16 lg:px-8"
      >
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:gap-16">

          {/* Left: Brand + info */}
          <motion.div variants={columnVariants} className="space-y-8">
            {/* Logo + name */}
            <div className="flex items-start gap-4">
              <img
                src={MyLogo}
                alt="ZikkDev logo"
                className="h-6 w-auto opacity-75"
              />
              <div>
                <h2 className="font-mono text-sm font-black uppercase tracking-widest text-zinc-100">
                  Muhammad Hafizh Zikry
                </h2>
                <p className="mt-0.5 font-mono text-[10px] uppercase tracking-widest text-zinc-700">
                  &copy; {new Date().getFullYear()} All rights reserved
                </p>
              </div>
            </div>

            {/* Tagline */}
            <div className="border-l-2 border-purple-400/35 pl-4">
              <p className="whitespace-pre-line font-mono text-xs leading-relaxed text-zinc-600">
                {language === "en"
                  ? "> Software Engineer building real-world\n> systems with clean UI and solid engineering."
                  : "> Software Engineer yang membangun sistem\n> nyata dengan UI bersih & rekayasa yang solid."}
              </p>
            </div>

            {/* Socials */}
            <div>
              <p className="mb-3 font-mono text-[10px] uppercase tracking-widest text-zinc-700">
                &gt;{" "}
                {language === "en" ? "CONNECT:" : "TERHUBUNG:"}
              </p>
              <div className="flex gap-3">
                {SOCIAL_LINKS.map((link) => (
                  <SocialButton key={link.id} {...link} />
                ))}
              </div>
            </div>

            {/* System info block */}
            <div
              className="border-2 border-zinc-800 bg-zinc-900/30 p-4"
              style={{ boxShadow: "4px 4px 0px 0px rgba(0,0,0,0.6)" }}
            >
              <p className="mb-3 font-mono text-[10px] uppercase tracking-widest text-zinc-700">
                SYSTEM_INFO
              </p>
              <div className="space-y-2">
                <p className="font-mono text-xs text-zinc-600">
                  &gt; STATUS:{" "}
                  <span className="text-green-400">AVAILABLE FOR PROJECTS</span>
                </p>
                <p className="font-mono text-xs text-zinc-600">
                  &gt; LOCATION:{" "}
                  <span className="text-zinc-400">Indonesia</span>
                </p>
                {/* <p className="font-mono text-xs text-zinc-600">
                  &gt; STACK:{" "}
                  <span className="text-zinc-400">
                    React · Laravel · Mobile
                  </span>
                </p> */}
              </div>
            </div>
          </motion.div>

          {/* Right: Contact form */}
          <motion.div variants={columnVariants}>
            <div
              className="border-2 border-zinc-800 bg-zinc-900/20"
              style={{ boxShadow: "5px 5px 0px 0px rgba(0,0,0,0.6)" }}
            >
              {/* Form title bar */}
              <div className="flex items-center gap-2.5 border-b-2 border-zinc-800 bg-zinc-900/40 px-5 py-3">
                <MessageSquare
                  size={12}
                  className="text-purple-400"
                  aria-hidden="true"
                />
                <h3 className="font-mono text-xs font-bold uppercase tracking-widest text-zinc-300">
                  {language === "en"
                    ? "GET_IN_TOUCH.EXE"
                    : "HUBUNGI_KAMI.EXE"}
                </h3>
                {/* Window buttons (decorative) */}
                <div className="ml-auto flex gap-1.5" aria-hidden="true">
                  <span className="h-2.5 w-2.5 border border-zinc-700 bg-zinc-800" />
                  <span className="h-2.5 w-2.5 border border-zinc-700 bg-zinc-800" />
                  <span className="h-2.5 w-2.5 border border-purple-400/40 bg-purple-400/10" />
                </div>
              </div>

              <div className="p-5 sm:p-6">
                <ContactForm language={language} />
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Bottom bar */}
      <div className="relative z-10 border-t-2 border-zinc-800/60 px-4 py-4 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 sm:flex-row">
          <p className="font-mono text-[10px] uppercase tracking-widest text-zinc-700">
            ZIKKDEV.DEV &nbsp;::&nbsp; {new Date().getFullYear()}
          </p>
          <p className="font-mono text-[10px] uppercase tracking-widest text-zinc-700">
            BUILT WITH REACT + TAILWIND + FRAMER
          </p>
        </div>
      </div>

      {/* Scroll to top */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            key="scroll-top"
            type="button"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 12 }}
            transition={{ type: "spring", damping: 22, stiffness: 200 }}
            whileHover={{
              x: -2,
              y: -2,
              boxShadow: "4px 4px 0px 0px rgba(245,158,11,0.5)",
            }}
            whileTap={{ scale: 0.93, y: 2 }}
            style={{ boxShadow: "4px 4px 0px 0px rgba(245,158,11,0.25)" }}
            onClick={scrollToTop}
            aria-label="Scroll to top"
            className="fixed bottom-6 right-6 z-50 flex h-10 w-10 items-center justify-center border-2 border-purple-400/60 bg-zinc-950 text-purple-400 transition-colors duration-200 hover:bg-purple-400/10"
          >
            <ChevronUp size={16} aria-hidden="true" />
          </motion.button>
        )}
      </AnimatePresence>
    </footer>
  );
};

export default Footer;
