'use client'

import { motion } from "framer-motion";
import { experiences } from "@/data";

export default function Experience() {
  return (
    <section id="experience" className="relative py-32">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <p className="mb-3 text-sm font-medium tracking-widest uppercase text-neon-cyan">
            Experience
          </p>
          <h2 className="font-display text-4xl font-bold md:text-5xl">
            Career <span className="text-gradient">Journey</span>
          </h2>
        </motion.div>

        <div className="relative mx-auto max-w-3xl">
          <div className="absolute left-4.75 top-0 h-full w-px bg-linear-to-b from-neon-cyan via-neon-purple to-transparent" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.role}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="relative flex gap-8 pl-12"
              >
                <div className="absolute left-3.25 top-1 h-3 w-3 rounded-full bg-neon-cyan shadow-[0_0_12px_rgba(34,211,238,0.5)]" />

                <div className="glass flex-1 rounded-[24px] p-6">
                  <div className="mb-1 flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                    <h3 className="font-display text-lg font-semibold">
                      {exp.role}
                    </h3>
                    <span className="text-xs font-medium text-neon-cyan">
                      {exp.period}
                    </span>
                  </div>
                  <p className="mb-2 text-sm font-medium text-text-muted">
                    {exp.company}
                  </p>
                  <p className="text-sm leading-relaxed text-text-secondary">
                    {exp.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
