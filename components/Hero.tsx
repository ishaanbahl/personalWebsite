"use client";

import { useRef, useEffect, useState, type CSSProperties } from "react";
import Image from "next/image";
import NavLinks from "./NavLinks";

export default function Hero() {
  const textRef = useRef<HTMLSpanElement>(null);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    function updateWidth() {
      if (textRef.current) setWidth(textRef.current.offsetWidth);
    }
    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  return (
    <section id="hero" className="flex flex-col items-center text-center px-6 md:px-16 pt-16 md:pt-24 pb-10 gap-6">
      {/* Nav links — below hero text */}
      <NavLinks/>
      {/* Hero text */}
      <p className="text-2xl md:text-4xl leading-snug text-gray-400 font-normal max-w-3xl">
        <span
          ref={textRef}
          className="relative inline-block"
          style={{ "--select-width": `${width}px` } as CSSProperties}
        >
          {width > 0 && (
            <>
              <span className="animate-cursor-drag absolute -top-4 left-0 pointer-events-none z-20">
                <Image
                  src="/cursor.png"
                  alt=""
                  width={45}
                  height={38}
                  priority
                  className="w-7 md:w-[35px] h-auto"
                />
              </span>
              {/* Selection highlight */}
              <span className="animate-text-select absolute inset-y-0 left-0 right-0 bg-gray-200 rounded-sm z-0" />
            </>
          )}
          {/* Text */}
          <span className="relative z-10 text-gray-500 font-medium px-1">Hi! I&apos;m</span>
          <span className="relative z-10 text-gray-900 font-medium px-1">Ishaan Bahl</span>
        </span>
        <span className="text-gray-500 font-medium">, a software engineer who loves to build </span>
        <span className="text-gray-900 font-medium">beautiful, high quality </span>
        <span className="text-gray-500 font-medium">tech products.</span>
      </p>
      {/* Tagline — below hero text */}
      <p className="text-xs tracking-widest uppercase text-gray-500">
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
    </section>
  );
}
