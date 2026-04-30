"use client";

import { useRef, useEffect } from "react";

export default function Hero() {
  const textRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (textRef.current) {
      const width = textRef.current.offsetWidth;
      document.documentElement.style.setProperty("--select-width", `${width}px`);
    }
  }, []);

  return (
    <section id="hero" className="flex flex-col md:flex-row md:items-start md:justify-between px-6 md:px-16 pt-16 md:pt-24 pb-10 gap-6">
      {/* Mobile-only nav — centered above hero text */}
      <nav className="flex md:hidden flex-row flex-wrap justify-center gap-6">
        <a href="/IshaanBahl_Resume2026.pdf" target="_blank" rel="noopener noreferrer" className="text-sm text-gray-500 hover:text-gray-900 transition-colors uppercase">cv</a>
        <a href="https://x.com/IshaanBahll" target="_blank" rel="noopener noreferrer" className="text-sm text-gray-500 hover:text-gray-900 transition-colors uppercase">x</a>
        <a href="https://www.linkedin.com/in/ishaan-bahl-87140a351/" target="_blank" rel="noopener noreferrer" className="text-sm text-gray-500 hover:text-gray-900 transition-colors uppercase">linkedin</a>
        <a href="https://github.com/ishaanbahl" target="_blank" rel="noopener noreferrer" className="text-sm text-gray-500 hover:text-gray-900 transition-colors uppercase">github</a>
      </nav>

      <div className="max-w-3xl">
        <p className="text-2xl md:text-4xl leading-snug text-gray-400 font-normal">
          <span className="relative inline-block">
            {/* Cursor arrow */}
            <span className="animate-cursor-drag absolute -top-5 left-0 pointer-events-none z-20">
              <svg width="26" height="32" viewBox="0 0 26 32" fill="none">
                <path
                  d="M4 2L4 26L9.5 19L13 28L17 26.5L13.5 17.5L21 17.5Z"
                  fill="#EAB308"
                />
                <path
                  d="M4 2L4 26L9.5 19L13 28L17 26.5L13.5 17.5L21 17.5Z"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  fill="none"
                />
              </svg>
            </span>

            {/* Selection highlight */}
            <span className="animate-text-select absolute inset-y-0 left-0 right-0 bg-gray-200 rounded-sm z-0" />

            {/* Text */}
            <span ref={textRef} className="relative z-10 text-gray-500 font-medium px-1">
              Hi! I&apos;m
            </span>
            <span ref={textRef} className="relative z-10 text-gray-900 font-medium px-1">
              Ishaan Bahl
            </span>
          </span>
          <span ref={textRef} className="relative z-10 text-gray-500 font-medium px-1">
            , a software engineer who loves to build
          </span>
          <span ref={textRef} className="relative z-10 text-gray-900 font-medium px-1">
            high quality, beautiful
          </span>
          <span ref={textRef} className="relative z-10 text-gray-500 font-medium px-1">
            tech products.
          </span>
        </p>

        <p className="text-xs tracking-widest uppercase text-gray-500 mt-8">
          SWE Intern at{" "}
          <span className="font-bold text-black underline">
            <a href="https://www.shopify.com/ca" target="_blank" rel="noopener noreferrer">Shopify</a>
          </span>
          {" // "}
          Computer Science at{" "}
          <span className="font-semibold text-gray-900 underline">
            <a href="https://carleton.ca/" target="_blank" rel="noopener noreferrer">Carleton University</a>
          </span>
        </p>
      </div>

      {/* Desktop nav — right side */}
      <nav className="hidden md:flex flex-row items-start gap-6 shrink-0">
        <a href="/IshaanBahl_Resume2026.pdf" target="_blank" rel="noopener noreferrer" className="text-sm text-gray-500 hover:text-gray-900 transition-colors uppercase">cv</a>
        <a href="https://x.com/IshaanBahll" target="_blank" rel="noopener noreferrer" className="text-sm text-gray-500 hover:text-gray-900 transition-colors uppercase">x</a>
        <a href="https://www.linkedin.com/in/ishaan-bahl-87140a351/" target="_blank" rel="noopener noreferrer" className="text-sm text-gray-500 hover:text-gray-900 transition-colors uppercase">linkedin</a>
        <a href="https://github.com/ishaanbahl" target="_blank" rel="noopener noreferrer" className="text-sm text-gray-500 hover:text-gray-900 transition-colors uppercase">github</a>
      </nav>
    </section>
  );
}
