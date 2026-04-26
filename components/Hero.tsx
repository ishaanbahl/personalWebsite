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
            <span ref={textRef} className="relative z-10 text-gray-900 font-medium px-1">
              Hi! I&apos;m Ishaan Bahl
            </span>
          </span>
          , a software engineer who loves to build high quality, beautiful
          consumer products.
        </p>

        <p className="text-xs tracking-widest uppercase text-gray-400 mt-8">
          SWE Intern at{" "}
          <span className="font-bold text-black">Shopify</span>
          {" · "}
          Computer Science at{" "}
          <span className="font-semibold text-gray-900">Carleton University</span>
        </p>
      </div>

      {/* Top-right nav — hidden on mobile */}
      <nav className="hidden md:flex flex-row items-start gap-6 shrink-0">
        <a href="#" className="text-sm text-gray-500 hover:text-gray-900 transition-colors uppercase">cv</a>
        <a href="#" className="text-sm text-gray-500 hover:text-gray-900 transition-colors uppercase">x</a>
        <a href="#" className="text-sm text-gray-500 hover:text-gray-900 transition-colors uppercase">linkedin</a>
        <a href="#" className="text-sm text-gray-500 hover:text-gray-900 transition-colors uppercase">github</a>
      </nav>
    </section>
  );
}
