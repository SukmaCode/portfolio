'use client'

import { motion } from "framer-motion";
import Scene from "@/components/models/Scene";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center justify-center overflow-hidden"
    >
      {/* <Scene /> */}
      <div className="absolute inset-0 bg-linear-to-b from-transparent via-base/50 to-base pointer-events-none" />
      <div className="relative z-10 mx-auto max-w-5xl px-6 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-4 text-sm font-medium tracking-widest uppercase text-neon-cyan"
        >
          Full Stack Developer
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="font-display mb-6 text-5xl font-bold leading-tight tracking-tight md:text-7xl lg:text-8xl"
        >
          Creative{" "}
          <span className="text-gradient">Full Stack</span>
          <br />
          Developer
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mx-auto mb-10 max-w-2xl text-lg text-text-secondary"
        >
          I craft elegant, high-performance web applications with stunning 3D
          experiences. Passionate about UI/UX, design systems, and pushing the
          boundaries of what's possible on the web.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <a
            href="#projects"
            className="group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-full bg-neon-cyan px-8 text-sm font-medium text-base transition-all hover:bg-neon-cyan/90"
          >
            <span className="relative z-10">View Projects</span>
            <div className="absolute inset-0 -translate-x-full transition-transform duration-300 group-hover:translate-x-0 bg-linear-to-r from-neon-cyan to-neon-blue" />
          </a>
          <a
            href="#contact"
            className="glass-hover inline-flex h-12 items-center justify-center rounded-full px-8 text-sm font-medium text-text-primary transition-all hover:text-neon-cyan"
          >
            Contact Me
          </a>
        </motion.div>
      </div>
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          className="text-text-muted"
        >
          <path d="M7 13l5 5 5-5M7 6l5 5 5-5" />
        </svg>
      </div>
    </section>
  );
}
