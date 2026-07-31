'use client'

import Image from "next/image";
import { motion } from "framer-motion";

interface ProjectCardProps {
  title: string;
  description: string;
  tech: readonly string[];
  image: string;
  alt: string;
  liveUrl: string;
  githubUrl: string;
  index: number;
}

export default function ProjectCard({
  title,
  description,
  tech,
  image,
  alt,
  liveUrl,
  githubUrl,
  index,
}: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      whileHover={{ y: -8 }}
      className="glass-hover group rounded-md overflow-hidden"
    >
      <div className="relative aspect-video bg-surface-light flex items-center justify-center overflow-hidden">
        <Image
          src={image}
          alt={alt}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-500"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>
      <div className="p-6">
        <h3 className="font-display mb-2 text-xl font-semibold">{title}</h3>
        <p className="mb-4 text-sm leading-relaxed text-text-secondary">
          {description}
        </p>
        <div className="mb-5 flex flex-wrap gap-2">
          {tech.map((t) => (
            <span
              key={t}
              className="rounded-full bg-neon-cyan/10 px-3 py-1 text-xs font-medium text-neon-cyan"
            >
              {t}
            </span>
          ))}
        </div>
        <div className="flex gap-3">
          <a
            href={liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-9 items-center rounded-full bg-neon-cyan px-5 text-xs font-medium text-base transition-colors hover:bg-neon-cyan/90"
          >
            Live Demo
          </a>
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="glass-hover inline-flex h-9 items-center rounded-full px-5 text-xs font-medium text-text-primary transition-colors hover:text-neon-cyan"
          >
            GitHub
          </a>
        </div>
      </div>
    </motion.div>
  );
}
