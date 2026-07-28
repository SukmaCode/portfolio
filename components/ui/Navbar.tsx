import { navLinks } from "@/data";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50">
      <div className="glass mx-auto mt-4 flex max-w-5xl items-center justify-between rounded-full px-8 py-3">
        <a href="#hero" className="text-lg font-bold tracking-tight text-text-primary">
          Portfolio
        </a>
        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-text-secondary transition-colors hover:text-neon-cyan"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
