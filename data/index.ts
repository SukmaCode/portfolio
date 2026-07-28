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
    icon: "⚛️",
    skills: [
      { name: "React / Next.js", level: 95 },
      { name: "TypeScript", level: 90 },
      { name: "Tailwind CSS", level: 92 },
      { name: "Three.js / R3F", level: 80 },
    ],
  },
  {
    title: "Backend",
    icon: "⚙️",
    skills: [
      { name: "Node.js", level: 88 },
      { name: "Express / NestJS", level: 85 },
      { name: "GraphQL", level: 78 },
      { name: "REST API", level: 90 },
    ],
  },
  {
    title: "Database",
    icon: "🗄️",
    skills: [
      { name: "PostgreSQL", level: 85 },
      { name: "MongoDB", level: 80 },
      { name: "Prisma", level: 88 },
      { name: "Redis", level: 72 },
    ],
  },
  {
    title: "DevOps",
    icon: "🚀",
    skills: [
      { name: "Docker", level: 82 },
      { name: "AWS / GCP", level: 75 },
      { name: "CI / CD", level: 80 },
      { name: "Linux", level: 78 },
    ],
  },
  {
    title: "UI / UX",
    icon: "🎨",
    skills: [
      { name: "Figma", level: 85 },
      { name: "Design Systems", level: 82 },
      { name: "Prototyping", level: 78 },
      { name: "Accessibility", level: 80 },
    ],
  },
] as const;

export const projects = [
  {
    title: "Project One",
    description: "A full-stack web application built with Next.js and PostgreSQL.",
    tech: ["Next.js", "TypeScript", "PostgreSQL", "Tailwind"],
    image: "/project-1.jpg",
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/username/project-1",
  },
  {
    title: "Project Two",
    description: "Real-time dashboard with data visualization and analytics.",
    tech: ["React", "D3.js", "WebSocket", "Node.js"],
    image: "/project-2.jpg",
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/username/project-2",
  },
  {
    title: "Project Three",
    description: "E-commerce platform with 3D product viewer.",
    tech: ["Next.js", "Three.js", "Stripe", "Prisma"],
    image: "/project-3.jpg",
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/username/project-3",
  },
  {
    title: "Project Four",
    description: "Mobile-first social media analytics tool.",
    tech: ["React Native", "GraphQL", "AWS", "TensorFlow"],
    image: "/project-4.jpg",
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/username/project-4",
  },
] as const;

export const experiences = [
  {
    role: "Senior Full Stack Developer",
    company: "Tech Company",
    period: "2024 - Present",
    description:
      "Leading development of microservices architecture and mentoring junior developers.",
  },
  {
    role: "Full Stack Developer",
    company: "Startup Inc.",
    period: "2022 - 2024",
    description:
      "Built and deployed scalable web applications serving 100k+ users.",
  },
  {
    role: "Frontend Developer",
    company: "Digital Agency",
    period: "2020 - 2022",
    description:
      "Developed interactive UIs and design systems for enterprise clients.",
  },
  {
    role: "Junior Developer",
    company: "Freelance",
    period: "2018 - 2020",
    description:
      "Built websites and web applications for various clients worldwide.",
  },
] as const;

export const socialLinks = [
  { label: "GitHub", href: "https://github.com/username" },
  { label: "LinkedIn", href: "https://linkedin.com/in/username" },
  { label: "Twitter", href: "https://twitter.com/username" },
  { label: "Email", href: "mailto:hello@example.com" },
] as const;
