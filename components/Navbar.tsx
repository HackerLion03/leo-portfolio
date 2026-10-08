// Navbar v1.1 — Responsive Glass Navigation

"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

const links = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Resume", href: "#resume" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <motion.nav
        initial={{ opacity: 0, y: -15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="
          fixed
          left-0
          top-0
          z-[100]
          flex
          w-full
          items-center
          justify-between
          border-b
          border-white/[0.05]
          bg-black/55
          px-5
          py-4
          backdrop-blur-xl
          sm:px-8
          md:px-12
          lg:px-24
        "
      >
        <a
          href="#home"
          className="
            text-xs
            font-semibold
            tracking-[0.35em]
            text-white
            transition
            hover:text-cyan-300
            sm:text-sm
          "
        >
          LEO.C
        </a>

        <div className="hidden items-center gap-7 md:flex">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="
                text-sm
                text-white/45
                transition
                duration-300
                hover:text-white
              "
            >
              {link.name}
            </a>
          ))}
        </div>

        <button
          type="button"
          aria-label="Open navigation"
          onClick={() => setOpen((value) => !value)}
          className="
            flex
            h-9
            w-9
            items-center
            justify-center
            rounded-full
            border
            border-white/10
            text-white/70
            md:hidden
          "
        >
          <span className="text-lg">
            {open ? "×" : "☰"}
          </span>
        </button>
      </motion.nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            className="
              fixed
              left-0
              top-[66px]
              z-[90]
              w-full
              border-b
              border-white/[0.06]
              bg-black/90
              px-5
              py-6
              backdrop-blur-xl
              md:hidden
            "
          >
            <div className="flex flex-col gap-5">
              {links.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="
                    border-b
                    border-white/[0.05]
                    pb-4
                    text-sm
                    text-white/55
                    transition
                    hover:text-cyan-300
                  "
                >
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}