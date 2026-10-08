// Contact v1.0 — Digital Terminal Contact

"use client";

import { motion } from "framer-motion";

const interests = [
  "Data Analytics",
  "Technology",
  "Economic Research",
  "Interactive Web",
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="
        relative
        flex
        min-h-screen
        items-center
        overflow-hidden
        px-8
        py-32
        md:px-16
        lg:px-24
      "
    >
      {/* Background glow */}
      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-1/2
          h-[700px]
          w-[700px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-cyan-400/[0.04]
          blur-[200px]
        "
      />

      <div className="relative z-10 w-full">
        <p className="text-sm uppercase tracking-[0.35em] text-cyan-400">
          05 / Contact
        </p>

        <div className="mt-10 grid gap-16 lg:grid-cols-[1.1fr_0.9fr]">
          {/* Left */}
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="
                max-w-4xl
                text-5xl
                font-semibold
                leading-[0.95]
                tracking-[-0.04em]
                md:text-7xl
                xl:text-8xl
              "
            >
              Let&apos;s build
              <br />
              something
              <br />
              <span className="text-white/35">
                meaningful.
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 }}
              className="mt-8 max-w-xl leading-8 text-white/40"
            >
              I&apos;m interested in opportunities where data,
              economics, technology, and problem-solving come together.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.25 }}
              className="mt-10 flex flex-wrap gap-3"
            >
              {interests.map((interest) => (
                <span
                  key={interest}
                  className="
                    rounded-full
                    border
                    border-white/10
                    bg-white/[0.025]
                    px-4
                    py-2
                    text-sm
                    text-white/45
                  "
                >
                  {interest}
                </span>
              ))}
            </motion.div>
          </div>

          {/* Right terminal */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="
              self-center
              overflow-hidden
              rounded-3xl
              border
              border-white/[0.08]
              bg-black/40
              backdrop-blur-xl
            "
          >
            {/* Window top */}
            <div
              className="
                flex
                items-center
                gap-2
                border-b
                border-white/[0.06]
                px-5
                py-4
              "
            >
              <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
              <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
              <span className="h-2.5 w-2.5 rounded-full bg-white/15" />

              <span className="ml-3 font-mono text-xs text-white/20">
                contact.ts
              </span>
            </div>

            <div className="space-y-6 p-7 font-mono text-sm md:p-9">
              <div>
                <span className="text-cyan-300">&gt;</span>
                <span className="ml-3 text-white/35">
                  whoami
                </span>

                <p className="mt-2 pl-6 text-white/65">
                  Leo Chan
                </p>
              </div>

              <div>
                <span className="text-cyan-300">&gt;</span>
                <span className="ml-3 text-white/35">
                  current_focus
                </span>

                <p className="mt-2 pl-6 leading-7 text-white/60">
                  Data · Economics · Technology
                </p>
              </div>

              <div>
                <span className="text-cyan-300">&gt;</span>
                <span className="ml-3 text-white/35">
                  connect
                </span>

                <div className="mt-4 grid gap-3 pl-6">
                  <a
                    href="mailto:leo12sagi@gmail.com"
                    className="
                      flex
                      items-center
                      justify-between
                      border-b
                      border-white/[0.06]
                      pb-3
                      text-white/50
                      transition
                      hover:text-cyan-300
                    "
                  >
                    <span>Email</span>
                    <span>↗</span>
                  </a>

                  <a
                    href="https://www.linkedin.com/in/leochan121303/"
                    target="_blank"
                    rel="noreferrer"
                    className="
                      flex
                      items-center
                      justify-between
                      border-b
                      border-white/[0.06]
                      pb-3
                      text-white/50
                      transition
                      hover:text-cyan-300
                    "
                  >
                    <span>LinkedIn</span>
                    <span>↗</span>
                  </a>

                  <a
                    href="https://github.com/HackerLion03"
                    target="_blank"
                    rel="noreferrer"
                    className="
                      flex
                      items-center
                      justify-between
                      text-white/50
                      transition
                      hover:text-cyan-300
                    "
                  >
                    <span>GitHub</span>
                    <span>↗</span>
                  </a>
                </div>
              </div>

              <div className="pt-4 text-white/20">
                <span className="text-cyan-300">&gt;</span>
                <span className="ml-3 animate-pulse">_</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Footer */}
        <div
          className="
            mt-24
            flex
            flex-col
            gap-4
            border-t
            border-white/[0.06]
            pt-8
            text-xs
            uppercase
            tracking-[0.25em]
            text-white/20
            md:flex-row
            md:items-center
            md:justify-between
          "
        >
          <span>LEO.C / 2026</span>

          <a
            href="#home"
            className="transition hover:text-cyan-300"
          >
            Back to top ↑
          </a>
        </div>
      </div>
    </section>
  );
}