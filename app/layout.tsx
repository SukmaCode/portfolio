import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
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

const siteUrl = "https://sukmacode-portfolio.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default: "Galang | Creative Full Stack Developer",
    template: "%s | Galang",
  },
  description:
    "Portofolio Galang — full stack developer spesialis Laravel, React, dan Next.js. Membangun web aplikasi modern dengan performa tinggi dan pengalaman 3D interaktif.",

  keywords: [
    "full stack developer",
    "web developer",
    "Laravel",
    "React",
    "Next.js",
    "TypeScript",
    "Three.js",
    "portfolio",
    "Galang",
    "SukmaCode",
  ],
  authors: [{ name: "Galang", url: "https://github.com/SukmaCode" }],
  creator: "Galang",
  publisher: "Galang",

  openGraph: {
    type: "website",
    locale: "id_ID",
    url: siteUrl,
    siteName: "Galang Portfolio",
    title: "Galang | Creative Full Stack Developer",
    description:
      "Portofolio Galang — full stack developer spesialis Laravel, React, dan Next.js.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Galang Portfolio",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Galang | Creative Full Stack Developer",
    description:
      "Portofolio Galang — full stack developer spesialis Laravel, React, dan Next.js.",
    images: ["/og-image.png"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  alternates: {
    canonical: siteUrl,
  },

  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="id"
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
