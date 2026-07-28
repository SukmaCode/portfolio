import { socialLinks } from "@/data";

export default function Footer() {
  return (
    <footer className="border-t border-glass-border">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-6 py-10 md:flex-row">
        <p className="text-sm text-text-muted">
          &copy; {new Date().getFullYear()} Portfolio. All rights reserved.
        </p>
        <div className="flex gap-6">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-text-muted transition-colors hover:text-neon-cyan"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
