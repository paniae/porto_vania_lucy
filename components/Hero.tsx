"use client";

import { useState, useEffect } from "react";
import { SocialLink } from "@/types/portfolio";

interface HeroProps {
  socials: SocialLink[];
  onOpenContact: () => void;
}

const ROLES = [
  "Full Stack Developer",
  "Web Developer",
  "Informatics Engineer",
];

export default function Hero({ socials, onOpenContact }: HeroProps) {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = ROLES[currentRoleIndex];
    const typingSpeed = isDeleting ? 45 : 90;
    const pauseTime = isDeleting ? 300 : 2200;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        if (displayText.length < currentRole.length) {
          setDisplayText(currentRole.slice(0, displayText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), pauseTime);
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(currentRole.slice(0, displayText.length - 1));
        } else {
          setIsDeleting(false);
          setCurrentRoleIndex((prev) => (prev + 1) % ROLES.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, currentRoleIndex]);

  return (
    <section
      className="w-full bg-white text-neutral-900 pt-28 pb-16 md:pt-36 md:pb-24 px-6 relative overflow-hidden"
      id="home"
    >
      <div className="max-w-6xl mx-auto flex flex-col items-start text-left">
        {/* Subtle Pill Indicator */}
        <div className="w-8 h-2.5 rounded-full bg-neutral-200 mb-6" />

        {/* Heading */}
        <h1 className="font-headline text-4xl sm:text-6xl lg:text-7xl font-bold text-neutral-900 tracking-tight mb-4">
          Hi, I&apos;m Vania.
        </h1>

        {/* Typewriter Subheading with Blinking Cursor */}
        <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-normal text-neutral-900 mb-5 min-h-[40px] flex items-center">
          <span>{displayText}</span>
          <span className="inline-block w-[2px] h-[1.1em] bg-neutral-900 ml-1 animate-pulse"></span>
        </h2>

        {/* Bio Copy */}
        <div className="space-y-2 text-sm sm:text-base text-neutral-600 font-normal leading-relaxed max-w-xl mb-6">
          <p>
            I build clean, scalable, and user-centric web applications.
          </p>
          <p className="text-neutral-500 text-xs sm:text-sm">
            With an Informatics background, I specialize in full stack &amp; modern web development, turning complex requirements into robust digital products.
          </p>
        </div>

        {/* Location & Availability */}
        <div className="flex flex-wrap items-center gap-5 text-xs sm:text-sm text-neutral-700 font-medium mb-8">
          <div className="flex items-center gap-1.5">
            <svg className="w-4 h-4 text-neutral-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <span>Indonesia</span>
          </div>

          <div className="flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span>Available Now</span>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-wrap items-center gap-3.5 mb-7">
          <button
            onClick={onOpenContact}
            className="bg-black hover:bg-neutral-800 text-white rounded-full px-6 py-2.5 text-sm font-medium flex items-center gap-2 shadow-sm transition-all hover:scale-[1.02] active:scale-95 cursor-pointer"
          >
            <span>&rarr;</span>
            <span>Hire Me</span>
          </button>

          <a
            href="/CV_Vania_Lucy_Syntya.pdf"
            download="CV_Vania_Lucy_Syntya.pdf"
            className="bg-white hover:bg-neutral-50 text-neutral-900 border border-neutral-300 hover:border-neutral-900 rounded-full px-6 py-2.5 text-sm font-medium flex items-center gap-2 transition-all cursor-pointer"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
            <span>Download CV</span>
          </a>
        </div>

        {/* Horizontal Divider */}
        <div className="w-full max-w-lg border-t border-neutral-200 mb-6" />

        {/* Social Links */}
        <div className="flex items-center gap-4 text-xs sm:text-sm text-neutral-700">
          <span className="font-medium text-neutral-900">Follow me:</span>
          <div className="flex items-center gap-3.5">
            {socials.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noreferrer"
                title={social.name}
                className="hover:text-black transition-colors p-1"
                aria-label={social.name}
              >
                {social.icon === "github" && (
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.1-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2Z" />
                  </svg>
                )}
                {social.icon === "linkedin" && (
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                )}
                {social.icon === "instagram" && (
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                )}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
