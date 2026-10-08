// Hero v1.2 — Responsive Data Core

"use client";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";

const DataSphere = dynamic(
  () => import("./DataSphere"),
  {
    ssr: false,
  }
);

export default function Hero() {
  return (
    <section
      id="home"
      className="
        relative
        flex
        min-h-screen
        items-center
        overflow-hidden
        px-5
        pb-16
        pt-24
        sm:px-8
        md:px-12
        lg:px-24
      "
    >
      <div
        className="
          pointer-events-none
          absolute
          inset-0
          opacity-[0.06]
          [background-image:linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)]
          [background-size:60px_60px]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          right-[5%]
          top-[20%]
          h-[450px]
          w-[450px]
          rounded-full
          bg-cyan-400/[0.06]
          blur-[150px]
          md:h-[600px]
          md:w-[600px]
        "
      />

      <div
        className="
          relative
          z-10
          grid
          w-full
          grid-cols-1
          items-center
          gap-4
          lg:grid-cols-[0.9fr_1.1fr]
          lg:gap-10
        "
      >
        <div>
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-5 flex items-center gap-3"
          >
            <span className="h-px w-7 bg-cyan-400/60" />

            <p className="text-[10px] uppercase tracking-[0.4em] text-cyan-300 sm:text-xs">
              Hello, I&apos;m
            </p>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.1,
            }}
            className="
              text-5xl
              font-semibold
              leading-[0.92]
              tracking-[-0.05em]
              sm:text-6xl
              md:text-8xl
              xl:text-9xl
            "
          >
            Leo
            <br />
            <span className="text-white/45">
              Chan.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.35 }}
            className="
              mt-7
              text-base
              font-light
              text-white/60
              sm:text-lg
              md:text-xl
            "
          >
            Economics
            <span className="mx-2 text-cyan-400/50">×</span>
            Data
            <span className="mx-2 text-cyan-400/50">×</span>
            Technology
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="
              mt-6
              max-w-xl
              text-sm
              leading-7
              text-white/40
              sm:text-base
              sm:leading-8
            "
          >
            I explore how data, economics, and technology can
            transform complex information into meaningful insights
            and practical solutions.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="mt-8 flex flex-wrap gap-3"
          >
            <a
              href="#skills"
              className="
                rounded-full
                bg-white
                px-5
                py-3
                text-sm
                font-medium
                text-black
                transition
                hover:scale-[1.03]
              "
            >
              Explore my skills →
            </a>

            <a
              href="/resume.pdf"
              target="_blank"
              className="
                rounded-full
                border
                border-white/10
                bg-white/[0.03]
                px-5
                py-3
                text-sm
                text-white/60
                transition
                hover:border-cyan-300/30
                hover:text-white
              "
            >
              View resume
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 1,
            delay: 0.2,
          }}
          className="
            relative
            h-[330px]
            w-full
            sm:h-[420px]
            md:h-[520px]
            lg:h-[680px]
          "
        >
          <DataSphere />
        </motion.div>
      </div>
    </section>
  );
}