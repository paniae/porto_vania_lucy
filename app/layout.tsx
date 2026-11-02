import type { Metadata, Viewport } from "next";
import { Syne, Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  weight: ["500", "600", "700", "800"],
  display: "swap",
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400", "500", "600"],
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1.0,
};

export const metadata: Metadata = {
  title: "Vania Lucy Syntya — Full Stack & Web Developer",
  description: "Portfolio of Vania Lucy Syntya (Vania) — Informatics graduate specializing in Full Stack and Modern Web Development.",
  keywords: [
    "Vania Lucy Syntya",
    "Vania",
    "Informatics",
    "Full Stack Developer",
    "Web Developer",
    "Next.js",
    "React",
    "Node.js",
    "TypeScript",
    "Tailwind CSS",
    "Portfolio"
  ],
  authors: [{ name: "Vania Lucy Syntya" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${syne.variable} ${plusJakartaSans.variable} ${jetbrainsMono.variable} scroll-smooth`}
    >
      <body className="bg-white text-neutral-900 antialiased min-h-screen relative overflow-x-hidden selection:bg-neutral-900 selection:text-white">
        {children}
      </body>
    </html>
  );
}
