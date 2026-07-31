export const navLinks = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
] as const;

export const skillCategories = [
  {
    title: "Frontend",
    skills: [
      { name: "React / Next.js", level: 75 },
      { name: "TypeScript", level: 50 },
      { name: "Tailwind CSS", level: 80 },
      { name: "Three.js / R3F", level: 30 },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Laravel", level: 88 },
      { name: "Express", level: 50 },
      { name: "PHP", level: 50 },
      { name: "REST API", level: 70 },
    ],
  },
  {
    title: "Database",
    skills: [
      { name: "PostgreSQL", level: 50 },
      { name: "MongoDB", level: 30 },
      { name: "MariaDB", level: 88 },
      { name: "Redis", level: 50 },
    ],
  },
] as const;

export const projects = [
  {
    title: "Project One",
    description: "A full-stack web application built with Next.js and PostgreSQL.",
    tech: ["Next.js", "TypeScript", "PostgreSQL", "Tailwind"],
    image: "/project-1.jpg",
    alt: "Project One — full-stack Next.js dan PostgreSQL",
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/username/project-1",
  },
  {
    title: "Project Two",
    description: "Real-time dashboard with data visualization and analytics.",
    tech: ["React", "D3.js", "WebSocket", "Node.js"],
    image: "/project-2.jpg",
    alt: "Project Two — dashboard real-time dengan D3.js dan WebSocket",
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/username/project-2",
  },
] as const;

export const experiences = [
  {
    role: "Junior Developer",
    company: "Freelance",
    period: "2023 - 2026",
    description:
      "Built websites and web applications for various clients worldwide.",
  },
] as const;

export const socialLinks = [
  { label: "GitHub", href: "https://github.com/SukmaCode" },
  { label: "LinkedIn", href: "https://linkedin.com/in/username" },
  { label: "Twitter", href: "https://twitter.com/username" },
  { label: "Email", href: "mailto:hello@example.com" },
] as const;


export const aboutMe =[
  {
    desc1: "Hello, I'm Galang, a full-stack developer with a passion for building innovative web applications.",
    desc2: "I specialize in Laravel, React, and I'm always looking for new challenges to grow my skills.",
    desc3: "I'm a team player and a quick learner, and I'm confident I can bring value to any project.",
  }
]