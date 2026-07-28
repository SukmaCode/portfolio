'use client'

import { motion } from "framer-motion";
import { socialLinks } from "@/data";

export default function Contact() {
  return (
    <section id="contact" className="relative py-32">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <p className="mb-3 text-sm font-medium tracking-widest uppercase text-neon-cyan">
            Contact
          </p>
          <h2 className="font-display text-4xl font-bold md:text-5xl">
            Let's <span className="text-gradient">Connect</span>
          </h2>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="glass rounded-[24px] p-8 md:p-10"
          >
            <h3 className="font-display mb-6 text-2xl font-semibold">
              Send a Message
            </h3>
            <form className="space-y-5">
              <div>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full rounded-xl bg-surface-light px-4 py-3 text-sm text-text-primary placeholder-text-muted outline-none ring-1 ring-glass-border transition-all focus:ring-neon-cyan/50"
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full rounded-xl bg-surface-light px-4 py-3 text-sm text-text-primary placeholder-text-muted outline-none ring-1 ring-glass-border transition-all focus:ring-neon-cyan/50"
                />
              </div>
              <div>
                <textarea
                  rows={4}
                  placeholder="Your Message"
                  className="w-full resize-none rounded-xl bg-surface-light px-4 py-3 text-sm text-text-primary placeholder-text-muted outline-none ring-1 ring-glass-border transition-all focus:ring-neon-cyan/50"
                />
              </div>
              <button
                type="submit"
                className="inline-flex h-11 w-full items-center justify-center rounded-full bg-neon-cyan px-8 text-sm font-medium text-base transition-all hover:bg-neon-cyan/90"
                onClick={(e) => e.preventDefault()}
              >
                Send Message
              </button>
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="flex flex-col justify-center gap-6"
          >
            <div className="glass rounded-[24px] p-8 md:p-10">
              <h3 className="font-display mb-4 text-2xl font-semibold">
                Find Me On
              </h3>
              <div className="flex flex-wrap gap-3">
                {socialLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="glass-hover rounded-xl px-5 py-3 text-sm font-medium text-text-secondary transition-colors hover:text-neon-cyan"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
            <div className="glass rounded-[24px] p-8 md:p-10">
              <h3 className="font-display mb-2 text-2xl font-semibold">
                Let's Talk
              </h3>
              <p className="text-text-secondary">
                Have a project in mind or just want to say hi? I'd love to hear
                from you.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
