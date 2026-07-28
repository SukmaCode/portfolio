import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import Scene from "@/components/models/Scene";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Portfolio | Creative Full Stack Developer",
  description:
    "A passionate full stack developer specializing in web development, UI/UX design, and immersive 3D experiences.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${spaceGrotesk.variable} ${inter.variable}`}
    >
      <body className="min-h-screen bg-base text-text-primary antialiased">
        <div className="noise-overlay" />
        {children}
      </body>
    </html>
  );
}
