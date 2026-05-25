"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { ArrowDown, Sparkles } from "lucide-react";
import { FlipWords } from "../../ui/flip-words";
import { useLanguage } from "../../../LanguageContext";

const COPY = {
  en: {
    eyebrow: "",
    leading: "We build",
    trailing: "websites with ZikkDev",
    description:
      "Tailored digital products combining strategic design, performant engineering, and measurable outcomes for ambitious teams.",
    cta: "Explore our services",
    words: ["professional", "responsive", "beautiful", "modern"],
  },
  id: {
    eyebrow: "",
    leading: "Kami membangun",
    trailing: "website bersama ZikkDev",
    description:
      "Produk digital khusus yang memadukan desain strategis, rekayasa berkinerja tinggi, dan hasil yang terukur untuk tim ambisius.",
    cta: "Jelajahi layanan kami",
    words: ["profesional", "responsif", "indah", "modern"],
  },
};

export function HeroService() {
  const { language } = useLanguage();
  const copy = COPY[language] ?? COPY.en;

  const ref = useRef(null);
  const controls = useAnimation();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        const visible = entry.isIntersecting;
        setIsVisible(visible);
        controls.start({
          opacity: visible ? 1 : 0,
          y: visible ? 0 : 16,
        });
      },
      { threshold: 0.35 }
    );

    observer.observe(node);
    return () => observer.unobserve(node);
  }, [controls]);

  const handleScrollToServices = () => {
    const target = document.getElementById("services");
    if (target) target.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section
      aria-labelledby="hero-service-title"
      className="relative flex min-h-[88vh] items-center overflow-hidden bg-black"
    >
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute -top-40 left-1/2 h-[36rem] w-[36rem] -translate-x-1/2 rounded-full bg-emerald-500/10 blur-3xl" />
        <div className="absolute bottom-[-10rem] right-[-6rem] h-[28rem] w-[28rem] rounded-full bg-indigo-500/10 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(15,23,42,0)_0%,rgba(0,0,0,1)_70%)]" />
      </div>

      <div className="relative mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 16 }}
          animate={controls}
          transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
          className="mx-auto flex max-w-4xl flex-col items-center gap-6 text-center sm:gap-8"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-medium text-slate-300 backdrop-blur sm:text-sm">
            <Sparkles className="h-3.5 w-3.5 text-emerald-400" aria-hidden="true" />
            {copy.eyebrow}
          </span>

          <h1
            id="hero-service-title"
            className="text-balance text-4xl font-semibold leading-[1.1] tracking-tight text-neutral-100 sm:text-5xl lg:text-6xl xl:text-7xl"
          >
            {copy.leading}{" "}
            <FlipWords words={copy.words} isVisible={isVisible} />
            <br className="hidden sm:block" />
            <span className="text-neutral-400">{copy.trailing}</span>
          </h1>

          <p className="max-w-2xl text-pretty text-base leading-relaxed text-slate-400 sm:text-lg">
            {copy.description}
          </p>

          <button
            type="button"
            onClick={handleScrollToServices}
            className="group mt-2 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-medium text-neutral-100 backdrop-blur transition-all duration-300 hover:border-white/30 hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400/60 sm:text-base"
          >
            {copy.cta}
            <ArrowDown
              className="h-4 w-4 transition-transform duration-300 group-hover:translate-y-0.5"
              aria-hidden="true"
            />
          </button>
        </motion.div>
      </div>
    </section>
  );
}

export default HeroService;
