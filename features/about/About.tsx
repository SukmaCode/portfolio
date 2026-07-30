'use client'

import { motion } from "framer-motion";
import { aboutMe } from "@/data";

const stats = [
  { label: "Years Experience", value: "3+" },
  { label: "Projects Completed", value: "10" },
  { label: "Happy Clients", value: "1" },
  { label: "Technologies", value: "10+" },
];

const timeline = [
  { year: "2023", event: "I start to learn HTML, CSS, JavaScript" },
  { year: "2024", event: "I start to learn PHP, Laravel, MySQL in Campus" },
  { year: "2025", event: "I start to learn React, Next.js, TypeScript" },
  { year: "2026", event: "I start to freelance" },
];

export default function About() {
  return (
    <section id="about" className="relative py-32">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <p className="mb-3 text-sm font-medium tracking-widest uppercase text-neon-cyan">
            About Me
          </p>
          <h2 className="font-display text-4xl font-bold md:text-5xl">
            Passionate About{" "}
            <span>Great Code</span>
          </h2>
        </motion.div>

        <div className="grid gap-12 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="glass rounded-md p-8 md:p-10"
          >
            <h3 className="font-display mb-4 text-2xl font-semibold">
              Who I Am
            </h3>
            {aboutMe.map((item) => (
              <p key={item.desc1} className="leading-relaxed text-white">
                {item.desc1}
              </p>
            ))}
            {aboutMe.map((item) => (
              <p key={item.desc2} className="mt-4 leading-relaxed text-white">
                {item.desc2}
              </p>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="glass rounded-md p-8 md:p-10"
          >
            <h3 className="font-display mb-6 text-2xl font-semibold">
              Timeline
            </h3>
            <div className="space-y-6">
              {timeline.map((item) => (
                <div key={item.year} className="flex items-start gap-4">
                  <div className="flex flex-col items-center">
                    <div className="h-3 w-3 rounded-full bg-neon-cyan" />
                    <div className="mt-1 h-full w-px bg-neon-cyan/30" />
                  </div>
                  <div>
                    <span className="text-sm font-medium text-neon-cyan">
                      {item.year}
                    </span>
                    <p className="text-white">{item.event}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-4"
        >
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="glass rounded-md p-6 text-center"
            >
              <div className="font-display text-3xl font-bold text-gradient">
                {stat.value}
              </div>
              <div className="mt-2 text-sm text-white">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
