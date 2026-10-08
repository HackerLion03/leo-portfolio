// Projects v1.1 — Responsive Gallery

"use client";

import { motion } from "framer-motion";

const projects = [
  {
    number: "01",
    title: "Regression & Data Recovery",
    subtitle: "Statistical Analysis Project",
    description:
      "Applied regression analysis and data recovery techniques to improve dataset completeness using R and Excel.",
    technologies: ["R", "Excel", "Regression", "Statistics"],
    metric: "74.16% → 97.72%",
  },
  {
    number: "02",
    title: "Finance Dashboard",
    subtitle: "Financial Data Interface",
    description:
      "Designed an interactive dashboard for accounts, transactions, subscriptions, and financial information.",
    technologies: ["React", "JavaScript", "Dashboard", "Visualization"],
  },
  {
    number: "03",
    title: "HSR Panel",
    subtitle: "Web Application",
    description:
      "Built a multi-page web application with authentication, dashboards, sharing tools, and Supabase integration.",
    technologies: ["HTML", "CSS", "JavaScript", "Supabase"],
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="
        relative
        px-5
        py-24
        sm:px-8
        md:px-12
        md:py-32
        lg:px-24
      "
    >
      <p className="text-xs uppercase tracking-[0.35em] text-cyan-400 sm:text-sm">
        04 / Projects
      </p>

      <h2 className="mt-6 text-4xl font-semibold sm:text-5xl md:text-6xl">
        Selected work.
      </h2>

      <div className="mt-14 space-y-6 md:mt-20 md:space-y-8">
        {projects.map((project, index) => (
          <motion.article
            key={project.title}
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.6,
              delay: index * 0.08,
            }}
            whileHover={{
              y: -4,
            }}
            className="
              rounded-[1.75rem]
              border
              border-white/[0.08]
              bg-white/[0.025]
              p-5
              sm:p-7
              md:p-10
              lg:p-12
            "
          >
            <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:gap-12">
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-cyan-300">
                  {project.number} / {project.subtitle}
                </p>

                <h3 className="mt-5 text-2xl font-medium sm:text-3xl md:text-5xl">
                  {project.title}
                </h3>

                <p className="mt-5 max-w-2xl text-sm leading-7 text-white/45 sm:text-base">
                  {project.description}
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {project.technologies.map((technology) => (
                    <span
                      key={technology}
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
                      {technology}
                    </span>
                  ))}
                </div>
              </div>

              <div
                className="
                  flex
                  min-h-[160px]
                  flex-col
                  justify-center
                  rounded-3xl
                  border
                  border-white/[0.06]
                  bg-black/20
                  p-5
                  sm:p-7
                "
              >
                {project.metric ? (
                  <>
                    <p className="text-xs uppercase tracking-[0.2em] text-white/25">
                      Dataset completeness
                    </p>

                    <p className="mt-4 text-3xl font-medium text-cyan-300 sm:text-4xl">
                      {project.metric}
                    </p>
                  </>
                ) : (
                  <>
                    <p className="text-xs uppercase tracking-[0.2em] text-white/25">
                      Project focus
                    </p>

                    <p className="mt-4 text-xl text-white/70 sm:text-2xl">
                      Data × Technology
                    </p>
                  </>
                )}
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}