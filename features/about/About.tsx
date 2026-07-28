'use client'

import { motion } from "framer-motion";

const stats = [
  { label: "Years Experience", value: "6+" },
  { label: "Projects Completed", value: "50+" },
  { label: "Happy Clients", value: "30+" },
  { label: "Technologies", value: "20+" },
];

const timeline = [
  { year: "2024", event: "Senior Developer at Tech Co" },
  { year: "2022", event: "Started Full Stack Role" },
  { year: "2020", event: "Began Frontend Career" },
  { year: "2018", event: "Started Coding Journey" },
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
            <span className="text-gradient">Great Code</span>
          </h2>
        </motion.div>

        <div className="grid gap-12 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="glass rounded-[24px] p-8 md:p-10"
          >
            <h3 className="font-display mb-4 text-2xl font-semibold">
              Who I Am
            </h3>
            <p className="leading-relaxed text-text-secondary">
              I'm a full stack developer with a passion for building beautiful,
              performant web applications. With years of experience across the
              entire tech stack, I bring ideas to life through clean code and
              thoughtful design.
            </p>
            <p className="mt-4 leading-relaxed text-text-secondary">
              When I'm not coding, you'll find me exploring new technologies,
              contributing to open source, or experimenting with 3D graphics and
              creative coding.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="glass rounded-[24px] p-8 md:p-10"
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
                    <p className="text-text-secondary">{item.event}</p>
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
              className="glass rounded-[24px] p-6 text-center"
            >
              <div className="font-display text-3xl font-bold text-gradient">
                {stat.value}
              </div>
              <div className="mt-2 text-sm text-text-muted">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
