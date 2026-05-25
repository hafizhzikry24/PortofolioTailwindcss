"use client";

import React, { useEffect, useState } from "react";
import { motion, Variants } from "framer-motion";
import { FiChevronDown } from "react-icons/fi";

// ─── Constants ───────────────────────────────────────────────────────────────

const BOOT_LINES = [
  "> SYS.INIT :: ZIKKDEV.DEV",
  "> LOADING PROJECT MANIFESTS...",
  "> STATUS: [OK] — 03 SYSTEMS FOUND",
] as const;

const STAT_TAGS = ["03 PROJECTS", "OPEN FOR COLLAB", "2024 – 2025"] as const;

// ─── Variants ────────────────────────────────────────────────────────────────

const bootContainerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.4, delayChildren: 0.2 } },
};

const bootLineVariants: Variants = {
  hidden: { opacity: 0, x: -14 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { type: "spring", damping: 20, stiffness: 120 },
  },
};

const headingContainerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 1.5 } },
};

const headingWordVariants: Variants = {
  hidden: { opacity: 0, y: 48 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", damping: 20, stiffness: 100 },
  },
};

// ─── Sub-components ──────────────────────────────────────────────────────────

const Scanlines: React.FC = () => (
  <div
    aria-hidden="true"
    className="pointer-events-none absolute inset-0 z-10"
    style={{
      backgroundImage:
        "repeating-linear-gradient(0deg, rgba(0,0,0,0.07) 0px, rgba(0,0,0,0.07) 1px, transparent 1px, transparent 4px)",
    }}
  />
);

const GridTexture: React.FC = () => (
  <div
    aria-hidden="true"
    className="pointer-events-none absolute inset-0 opacity-[0.022]"
    style={{
      backgroundImage: `
        linear-gradient(rgba(255,255,255,0.18) 1px, transparent 1px),
        linear-gradient(90deg, rgba(255,255,255,0.18) 1px, transparent 1px)
      `,
      backgroundSize: "52px 52px",
    }}
  />
);

const VignetteMask: React.FC = () => (
  <div
    aria-hidden="true"
    className="pointer-events-none absolute inset-0 z-10"
    style={{
      background:
        "radial-gradient(ellipse 88% 82% at 50% 50%, transparent 42%, rgba(0,0,0,0.8) 100%)",
    }}
  />
);

const BlinkingCursor: React.FC = () => {
  const [on, setOn] = useState(true);

  useEffect(() => {
    const id = setInterval(() => setOn((v) => !v), 540);
    return () => clearInterval(id);
  }, []);

  return (
    <span
      aria-hidden="true"
      className="inline-block w-[7px] h-[13px] bg-green-400 ml-1 align-middle"
      style={{ opacity: on ? 1 : 0, transition: "opacity 0.06s" }}
    />
  );
};

// ─── Main Component ──────────────────────────────────────────────────────────

const ProductIntro: React.FC = () => {
  const scrollToCatalog = () => {
    document.getElementById("product-catalog")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <section
      aria-label="Products introduction"
      className="relative flex min-h-[92vh] flex-col items-start justify-center overflow-hidden bg-[#0a0a0a] px-4 sm:px-6 lg:px-8"
    >
      <Scanlines />
      <GridTexture />
      <VignetteMask />

      <div className="relative z-20 mx-auto w-full max-w-5xl">
        {/* Boot sequence */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={bootContainerVariants}
          className="mb-8 space-y-1 font-mono"
        >
          {BOOT_LINES.map((line, i) => (
            <motion.p
              key={line}
              variants={bootLineVariants}
              className="text-xs tracking-wide text-green-400 sm:text-sm"
            >
              {line}
              {i === BOOT_LINES.length - 1 && <BlinkingCursor />}
            </motion.p>
          ))}
        </motion.div>

        {/* Divider */}
        <motion.hr
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ delay: 1.35, duration: 0.55, ease: "easeOut" }}
          style={{ transformOrigin: "left" }}
          className="mb-10 h-px border-none bg-neutral-800"
        />

        {/* Main heading */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={headingContainerVariants}
          className="mb-8 leading-none"
        >
          {(["OUR", "PRODUCTS"] as const).map((word, i) => (
            <motion.h1
              key={word}
              variants={headingWordVariants}
              className="select-none font-black uppercase tracking-tighter text-white"
              style={{ fontSize: "clamp(2.9rem, 11vw, 8rem)", lineHeight: 0.92 }}
            >
              {i === 0 ? (
                word
              ) : (
                <>
                  {word}
                  <span className="text-purple-400">_01</span>
                </>
              )}
            </motion.h1>
          ))}
        </motion.div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 1.95,
            type: "spring",
            damping: 20,
            stiffness: 100,
          }}
          className="mb-10 max-w-lg font-mono text-sm leading-relaxed text-neutral-500 sm:text-base"
        >
          Real-world systems designed and built from scratch — functional
          engineering meets deliberate UI.
        </motion.p>

        {/* Stat tags */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 2.15,
            type: "spring",
            damping: 20,
            stiffness: 100,
          }}
          className="mb-12 flex flex-wrap gap-2"
        >
          {STAT_TAGS.map((tag) => (
            <span
              key={tag}
              className="border-2 border-neutral-800 bg-neutral-900/50 px-3 py-1.5 font-mono text-xs font-bold tracking-widest text-neutral-600"
            >
              {tag}
            </span>
          ))}
        </motion.div>

        {/* CTA button */}
        <motion.button
          type="button"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.4 }}
          whileHover={{
            backgroundColor: "#f59e0b",
            color: "#0a0a0a",
            borderColor: "#f59e0b",
          }}
          whileTap={{ scale: 0.97, y: 2 }}
          onClick={scrollToCatalog}
          style={{ boxShadow: "4px 4px 0px 0px #1a1a1a" }}
          className="flex cursor-pointer items-center gap-3 border-2 border-neutral-700 bg-transparent px-6 py-3 font-mono text-xs font-bold uppercase tracking-widest text-neutral-400 transition-colors duration-200 sm:text-sm"
        >
          BROWSE CATALOG
          <motion.span
            animate={{ y: [0, 5, 0] }}
            transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
            className="flex items-center"
          >
            <FiChevronDown size={15} aria-hidden="true" />
          </motion.span>
        </motion.button>
      </div>
    </section>
  );
};

export default ProductIntro;
