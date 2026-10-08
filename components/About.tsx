// About v1.1 — Responsive Cards

"use client";

import { motion } from "framer-motion";

const cards = [
  {
    title: "Economics",
    description:
      "Econometrics, quantitative analysis, public finance, and economic reasoning.",
  },
  {
    title: "Data",
    description:
      "Python, R, SQL, Excel, statistical modeling, and data analysis.",
  },
  {
    title: "Technology",
    description:
      "Web development, visualization, programming, and interactive experiences.",
  },
];

export default function About() {
  return (
    <section
      id="about"
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
        01 / About
      </p>

      <div className="mt-8 grid gap-12 lg:grid-cols-2 lg:gap-16">
        <div>
          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="
              text-4xl
              font-semibold
              sm:text-5xl
              md:text-6xl
            "
          >
            Who am I?
          </motion.h2>

          <p className="mt-7 max-w-xl text-base leading-8 text-white/45 sm:text-lg">
            I&apos;m Leo Chan, an Economics graduate from Stony Brook
            University with interests in data, technology, and
            problem-solving.
          </p>

          <p className="mt-5 max-w-xl leading-8 text-white/35">
            I enjoy understanding complex problems through data,
            identifying meaningful patterns, and building tools that
            make information easier to understand.
          </p>
        </div>

        <div className="space-y-4">
          {cards.map((card, index) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, x: 25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ x: 6 }}
              className="
                rounded-3xl
                border
                border-white/10
                bg-white/[0.03]
                p-5
                backdrop-blur-xl
                sm:p-7
              "
            >
              <h3 className="text-lg font-medium sm:text-xl">
                {card.title}
              </h3>

              <p className="mt-3 text-sm leading-7 text-white/40 sm:text-base">
                {card.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}