"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FiGithub, FiLinkedin, FiInstagram, FiDownload } from "react-icons/fi";
import { useLanguage } from "../../../LanguageContext";

// ─── Asset Imports ────────────────────────────────────────────────────────────
import Profile  from "../../../assets/graduated.jpg";
import js       from "../../../assets/js.png";
import ts       from "../../../assets/typescript.png";
import reactImg from "../../../assets/react.png";
import css      from "../../../assets/css.png";
import figma    from "../../../assets/figma.png";
import cisco2   from "../../../assets/image.png";
import html     from "../../../assets/html .png";
import tailwind from "../../../assets/tailwind.png";
import git      from "../../../assets/git.png";
import laravel  from "../../../assets/laravel.png";
import angular  from "../../../assets/angular.png";
import docker   from "../../../assets/docker.png";
import php      from "../../../assets/php.png";
import python   from "../../../assets/python.png";
import next     from "../../../assets/next.png";

// ─── Data ─────────────────────────────────────────────────────────────────────

const TECH_STACK = [
  { src: js,       label: "JavaScript" },
  { src: ts,       label: "TypeScript" },
  { src: css,      label: "CSS3"        },
  { src: html,     label: "HTML5"       },
  { src: php,      label: "PHP"         },
  { src: laravel,  label: "Laravel"     },
  { src: python,   label: "Python"      },
  { src: figma,    label: "Figma"       },
  { src: reactImg, label: "React"       },
  { src: next,     label: "Next.js"     },
  { src: angular,  label: "Angular"     },
  { src: tailwind, label: "Tailwind"    },
  { src: git,      label: "Git"         },
  { src: cisco2,   label: "Cisco"       },
  { src: docker,   label: "Docker"      },
];

const SOCIAL_LINKS = [
  {
    id: "instagram",
    Icon: FiInstagram,
    href: "https://www.instagram.com/hafizh.zikry/",
    label: "Instagram Hafizh Zikry",
  },
  {
    id: "linkedin",
    Icon: FiLinkedin,
    href: "https://www.linkedin.com/in/muhammad-hafizh-zikry/",
    label: "LinkedIn Muhammad Hafizh Zikry",
  },
  {
    id: "github",
    Icon: FiGithub,
    href: "https://github.com/hafizhzikry24/",
    label: "GitHub Hafizh Zikry",
  },
];

// ─── Motion Variants ──────────────────────────────────────────────────────────

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
  },
};

const slideLeft = {
  hidden: { opacity: 0, x: -32 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { type: "spring", damping: 18, stiffness: 90 },
  },
};

const slideRight = {
  hidden: { opacity: 0, x: 32 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { type: "spring", damping: 18, stiffness: 90 },
  },
};

const slideUp = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", damping: 18, stiffness: 90 },
  },
};

// ─── Sub-components ───────────────────────────────────────────────────────────

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

const GridTexture = () => (
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
);

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

const TechCard = ({ src, label }) => (
  <motion.div
    whileHover={{ y: -4 }}
    transition={{ type: "spring", damping: 20, stiffness: 300 }}
    className="group flex flex-col items-center gap-1.5 border border-zinc-800/60 bg-zinc-900/30 px-3 py-3 transition-colors duration-200 hover:border-purple-400/35 flex-shrink-0"
  >
    <img
      src={src}
      alt={label}
      className="h-8 w-8 object-contain grayscale transition-all duration-300 group-hover:grayscale-0"
    />
    <span className="font-mono text-[9px] uppercase tracking-widest text-zinc-700 transition-colors duration-200 group-hover:text-purple-400/70">
      {label}
    </span>
  </motion.div>
);

// ─── Main Component ───────────────────────────────────────────────────────────

function Content() {
  const { language } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  const isEn = language === "en";

  const statTags = isEn
    ? ["FRESH GRADUATE", "FULL-STACK DEV", "AVAILABLE"]
    : ["LULUSAN BARU", "FULL-STACK DEV", "TERSEDIA"];

  const bioCopy = isEn
    ? "Fresh graduate in Computer Engineering from Diponegoro University, passionate about backend and frontend development. Dedicated to mastering new technologies and delivering impactful digital solutions."
    : "Lulusan baru Teknik Komputer Universitas Diponegoro, bersemangat dalam pengembangan backend dan frontend. Berdedikasi menguasai teknologi terkini dan menghadirkan solusi digital yang berdampak.";

  return (
    <section
      id="profile"
      aria-labelledby="profile-name"
      className="relative overflow-hidden bg-zinc-950"
    >
      <Scanlines />
      <GridTexture />

      {/* ── Label bar ─────────────────────────────────────────────────────── */}
      <div className="relative z-10 border-b-2 border-zinc-800 bg-zinc-950/80 px-4 py-3 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-6xl items-center justify-between">
          <p className="font-mono text-[10px] uppercase tracking-widest text-zinc-700">
            ABOUT_ME :: ZIKKDEV.DEV
          </p>
          <span className="flex items-center gap-1.5 font-mono text-[10px] text-green-400">
            <span
              aria-hidden="true"
              className="h-1.5 w-1.5 animate-pulse rounded-full bg-green-400"
            />
            PROFILE_LOADED
          </span>
        </div>
      </div>

      {/* ── Main content grid ─────────────────────────────────────────────── */}
      <motion.div
        ref={ref}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={containerVariants}
        className="relative z-10 mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8"
      >
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">

          {/* Left: text ─────────────────────────────────────────────────── */}
          <div className="order-2 space-y-8 lg:order-1">

            {/* Boot line + divider */}
            <motion.div variants={slideLeft} className="space-y-3">
              <p className="font-mono text-xs tracking-wide text-green-400">
                &gt; SYS.PROFILE :: LOADED_
              </p>
              <motion.div
                initial={{ scaleX: 0 }}
                animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
                transition={{ delay: 0.35, duration: 0.55, ease: "easeOut" }}
                style={{ transformOrigin: "left" }}
                className="h-px bg-zinc-800"
              />
            </motion.div>

            {/* Name heading */}
            <motion.div variants={slideLeft} className="space-y-1">
              <p className="font-mono text-[10px] uppercase tracking-widest text-zinc-600">
                {isEn ? "HELLO, I AM" : "HALO, NAMA SAYA"}
              </p>
              <h1
                id="profile-name"
                className="font-black uppercase leading-[0.9] tracking-tighter text-zinc-100"
                style={{ fontSize: "clamp(2.6rem, 7.5vw, 5.2rem)" }}
              >
                MUHAMMAD
                <br />
                <span className="text-purple-400">HAFIZH</span> ZIKRY
              </h1>
            </motion.div>

            {/* Bio */}
            <motion.div
              variants={slideUp}
              className="border-l-2 border-purple-400/35 pl-4"
            >
              <p className="font-mono text-sm leading-relaxed text-zinc-500 sm:text-base">
                {bioCopy}
              </p>
            </motion.div>

            {/* Stat tags */}
            <motion.div variants={slideUp} className="flex flex-wrap gap-2">
              {statTags.map((tag) => (
                <span
                  key={tag}
                  className="border border-zinc-800 bg-zinc-900/50 px-3 py-1 font-mono text-[10px] font-bold uppercase tracking-widest text-zinc-600"
                >
                  {tag}
                </span>
              ))}
            </motion.div>

            {/* Social links + CV button */}
            <motion.div
              variants={slideUp}
              className="flex flex-wrap items-center gap-3"
            >
              {SOCIAL_LINKS.map((link) => (
                <SocialButton key={link.id} {...link} />
              ))}

              <div
                aria-hidden="true"
                className="h-6 w-px bg-zinc-800"
              />

              <motion.a
                href="https://www.papermark.io/view/cm3zuc1h70004je9d9eib4hkw"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Open Resume PDF"
                whileHover={{
                  x: -2,
                  y: -2,
                  boxShadow: "4px 4px 0px 0px rgba(245,158,11,0.5)",
                }}
                whileTap={{
                  scale: 0.97,
                  y: 2,
                  boxShadow: "2px 2px 0px 0px rgba(245,158,11,0.3)",
                }}
                style={{ boxShadow: "4px 4px 0px 0px rgba(245,158,11,0.28)" }}
                className="inline-flex items-center gap-2 border-2 border-purple-400/60 px-4 py-2 font-mono text-xs font-bold uppercase tracking-widest text-purple-400 transition-colors duration-150 hover:bg-purple-400/10"
              >
                <FiDownload size={11} aria-hidden="true" />
                RESUME.PDF
              </motion.a>
            </motion.div>
          </div>

          {/* Right: profile image ────────────────────────────────────────── */}
          <motion.div
            variants={slideRight}
            className="order-1 flex justify-center lg:order-2 lg:justify-end"
          >
            <motion.div
              whileHover={{
                scale: 1.02,
                boxShadow: "10px 10px 0px 0px rgba(245,158,11,0.35)",
              }}
              transition={{ type: "spring", damping: 20, stiffness: 180 }}
              style={{ boxShadow: "8px 8px 0px 0px rgba(245,158,11,0.25)" }}
              className="group relative w-full max-w-[300px] sm:max-w-sm lg:max-w-xs xl:max-w-sm"
            >
              {/* Corner bracket decorations */}
              <span
                aria-hidden="true"
                className="absolute -left-2 -top-2 z-20 h-6 w-6 border-l-2 border-t-2 border-purple-400"
              />
              <span
                aria-hidden="true"
                className="absolute -right-2 -top-2 z-20 h-6 w-6 border-r-2 border-t-2 border-purple-400"
              />
              <span
                aria-hidden="true"
                className="absolute -bottom-2 -left-2 z-20 h-6 w-6 border-b-2 border-l-2 border-purple-400"
              />
              <span
                aria-hidden="true"
                className="absolute -bottom-2 -right-2 z-20 h-6 w-6 border-b-2 border-r-2 border-purple-400"
              />

              {/* Image */}
              <div className="relative overflow-hidden border-2 border-zinc-700">
                <img
                  src={Profile}
                  alt="Muhammad Hafizh Zikry"
                  className="block h-auto w-full object-cover object-top"
                />

                {/* CRT scan overlay on hover */}
                <div className="pointer-events-none absolute inset-0 overflow-hidden opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <motion.div
                    animate={{ y: ["-100%", "200%"] }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    className="absolute h-12 w-full bg-gradient-to-b from-transparent via-purple-400/10 to-transparent"
                  />
                </div>

                {/* Scanline vignette */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 opacity-[0.04]"
                  style={{
                    backgroundImage:
                      "repeating-linear-gradient(0deg, rgba(0,0,0,0.6) 0px, rgba(0,0,0,0.6) 1px, transparent 1px, transparent 3px)",
                  }}
                />
              </div>

              {/* Name plate */}
              <div className="flex items-center justify-between border-2 border-t-0 border-zinc-700 bg-zinc-900/70 px-4 py-2">
                <span className="font-mono text-[10px] uppercase tracking-widest text-zinc-600">
                  ZIKKDEV.DEV
                </span>
                <span className="flex items-center gap-1.5 font-mono text-[10px] text-green-400">
                  <span
                    aria-hidden="true"
                    className="h-1.5 w-1.5 animate-pulse rounded-full bg-green-400"
                  />
                  ACTIVE
                </span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      {/* ── Tech stack marquee ─────────────────────────────────────────────── */}
      <div className="relative z-10 border-t-2 border-zinc-800">

        {/* Section label */}
        <div className="border-b border-zinc-800/50 px-4 py-2.5 sm:px-6 lg:px-8">
          <p className="font-mono text-[10px] uppercase tracking-widest text-zinc-700">
            TECH_STACK :: {TECH_STACK.length} TOOLS
          </p>
        </div>

        {/* Marquee track with edge fades */}
        <div className="relative overflow-hidden py-4">
          {/* Left fade mask */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute left-0 top-0 bottom-0 z-10 w-16 bg-gradient-to-r from-zinc-950 to-transparent"
          />
          {/* Right fade mask */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute right-0 top-0 bottom-0 z-10 w-16 bg-gradient-to-l from-zinc-950 to-transparent"
          />

          <div
            className="flex gap-3"
            style={{
              animation: "retro-scroll 32s linear infinite",
              width: "max-content",
            }}
          >
            {[...TECH_STACK, ...TECH_STACK].map((tech, i) => (
              <TechCard
                key={`${tech.label}-${i}`}
                src={tech.src}
                label={tech.label}
              />
            ))}
          </div>
        </div>
      </div>

      {/* ── Inline keyframe for seamless marquee ──────────────────────────── */}
      <style>{`
        @keyframes retro-scroll {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
}

export default Content;
