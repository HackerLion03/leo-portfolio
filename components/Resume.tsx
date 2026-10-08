// Resume v1.1 — Responsive Timeline

"use client";

import { motion } from "framer-motion";

const items = [
  {
    year: "2025",
    title: "Teaching Assistant",
    organization: "Stony Brook University",
    description:
      "Supported more than 20 students per class, provided individualized feedback, and used Excel to organize academic performance data.",
    tags: ["Teaching", "Excel", "Communication"],
  },
  {
    year: "2025",
    title: "Data Analysis Project",
    organization: "Regression & Data Recovery",
    description:
      "Applied statistical analysis and data recovery techniques using R and Excel, improving dataset completeness from 74.16% to 97.72%.",
    tags: ["R", "Regression", "Excel", "Statistics"],
  },
  {
    year: "2025",
    title: "B.A. Economics",
    organization: "Stony Brook University",
    description:
      "Focused on economics, econometrics, statistics, data analysis, and Chinese Studies.",
    tags: ["Economics", "Econometrics", "Data Analysis"],
  },
];

export default function Resume() {
  return (
    <section
      id="resume"
      className="
        relative
        min-h-screen
        px-5
        py-24
        sm:px-8
        md:px-12
        md:py-32
        lg:px-24
      "
    >
      <p className="text-xs uppercase tracking-[0.35em] text-cyan-400 sm:text-sm">
        03 / Resume
      </p>

      <h2 className="mt-6 text-4xl font-semibold sm:text-5xl md:text-6xl">
        Experience &
        <br />
        education.
      </h2>

      <div className="relative mt-16 max-w-5xl md:mt-20">
        <div
          className="
            absolute
            left-[7px]
            top-0
            h-full
            w-px
            bg-gradient-to-b
            from-cyan-400/50
            via-white/10
            to-transparent
            md:left-[170px]
          "
        />

        <div className="space-y-12 md:space-y-16">
          {items.map((item, index) => (
            <motion.div
              key={`${item.year}-${item.title}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.08,
              }}
              className="
                relative
                grid
                gap-5
                pl-8
                md:grid-cols-[130px_1fr]
                md:gap-10
                md:pl-0
              "
            >
              <p className="text-sm tracking-[0.2em] text-cyan-300 md:text-right">
                {item.year}
              </p>

              <div
                className="
                  absolute
                  left-[2px]
                  top-[6px]
                  h-[11px]
                  w-[11px]
                  rounded-full
                  border
                  border-cyan-300/50
                  bg-[#050505]
                  md:left-[165px]
                "
              />

              <div
                className="
                  rounded-3xl
                  border
                  border-white/[0.08]
                  bg-white/[0.025]
                  p-5
                  backdrop-blur-xl
                  sm:p-7
                  md:p-9
                "
              >
                <p className="text-xs uppercase tracking-[0.2em] text-white/30">
                  {item.organization}
                </p>

                <h3 className="mt-3 text-xl font-medium sm:text-2xl md:text-3xl">
                  {item.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-white/45 sm:text-base">
                  {item.description}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="
                        rounded-full
                        border
                        border-white/[0.08]
                        px-3
                        py-1.5
                        text-xs
                        text-white/45
                      "
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}