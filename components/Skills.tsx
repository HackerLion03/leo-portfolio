// Skills v1.1 — Responsive Skill Explorer

"use client";

import dynamic from "next/dynamic";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

import type { Skill } from "./SkillUniverse";

type SkillUniverseProps = {
  onSelect: (skill: Skill) => void;
};

const SkillUniverse = dynamic<SkillUniverseProps>(
  () => import("./SkillUniverse"),
  {
    ssr: false,
  }
);

export default function Skills() {
  const [selectedSkill, setSelectedSkill] =
    useState<Skill | null>(null);

  return (
    <section
      id="skills"
      className="
        relative
        min-h-screen
        overflow-hidden
        px-5
        py-24
        sm:px-8
        md:px-12
        md:py-28
        lg:px-24
      "
    >
      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-1/2
          h-[500px]
          w-[500px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-cyan-500/[0.05]
          blur-[160px]
        "
      />

      <div className="relative z-10">
        <p className="text-xs uppercase tracking-[0.35em] text-cyan-400 sm:text-sm">
          02 / Skills
        </p>

        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="
            mt-6
            text-3xl
            font-semibold
            sm:text-4xl
            md:text-6xl
          "
        >
          My skill universe.
        </motion.h2>

        <p className="mt-5 max-w-xl text-sm leading-7 text-white/40 sm:text-base sm:leading-8">
          Explore the technologies and analytical tools I use across
          data, economics, and development.
        </p>
      </div>

      <div
        className="
          relative
          mt-8
          h-[420px]
          w-full
          sm:h-[500px]
          md:h-[580px]
          lg:h-[650px]
        "
      >
        <SkillUniverse
          onSelect={(skill) => setSelectedSkill(skill)}
        />

        <AnimatePresence mode="wait">
          {selectedSkill && (
            <motion.div
              key={selectedSkill.name}
              initial={{
                opacity: 0,
                y: 20,
                scale: 0.96,
              }}
              animate={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}
              exit={{
                opacity: 0,
                y: 15,
              }}
              className="
                absolute
                bottom-2
                left-1/2
                z-20
                w-[calc(100%-1rem)]
                max-w-sm
                -translate-x-1/2
                rounded-3xl
                border
                border-white/10
                bg-black/85
                p-5
                shadow-2xl
                backdrop-blur-xl
                sm:p-6

                md:bottom-8
                md:left-auto
                md:right-8
                md:w-full
                md:translate-x-0
              "
            >
              <button
                type="button"
                aria-label="Close skill details"
                onClick={() => setSelectedSkill(null)}
                className="
                  absolute
                  right-5
                  top-4
                  text-xl
                  text-white/30
                  transition
                  hover:text-white
                "
              >
                ×
              </button>

              <p className="text-xs uppercase tracking-[0.3em] text-cyan-400">
                Skill
              </p>

              <h3 className="mt-3 text-2xl font-medium sm:text-3xl">
                {selectedSkill.name}
              </h3>

              <p className="mt-4 text-sm leading-7 text-white/45 sm:text-base">
                {selectedSkill.description}
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                {selectedSkill.tools.map((tool) => (
                  <span
                    key={tool}
                    className="
                      rounded-full
                      border
                      border-white/10
                      bg-white/[0.05]
                      px-3
                      py-1.5
                      text-xs
                      text-white/60
                      sm:text-sm
                    "
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <p className="relative z-10 text-center text-[9px] uppercase tracking-[0.2em] text-white/20 sm:text-xs sm:tracking-[0.25em]">
        Drag to rotate · Click a skill to explore
      </p>
    </section>
  );
}