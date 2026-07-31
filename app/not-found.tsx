import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-4 text-center px-4">
      <h1 className="font-display text-7xl font-bold text-neon-cyan">404</h1>
      <p className="text-lg text-text-secondary">
        Halaman yang kamu cari tidak ditemukan
      </p>
      <Link
        href="/"
        className="inline-flex h-10 items-center rounded-full bg-neon-cyan px-6 text-sm font-medium text-base transition-colors hover:bg-neon-cyan/90"
      >
        Kembali ke Beranda
      </Link>
    </div>
  );
}
