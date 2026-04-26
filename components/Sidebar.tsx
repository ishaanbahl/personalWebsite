"use client";

import { useEffect, useState } from "react";
import { Home, Briefcase, Folder, ExternalLink, Menu, X } from "lucide-react";

const navLinks = [
  { label: "Home", icon: Home, href: "hero" },
  { label: "Experience", icon: Briefcase, href: "experience" },
  { label: "Projects", icon: Folder, href: "projects" },
];

const socialLinks = [
  {
    label: "Resume",
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5 shrink-0">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8zm-1 1.5L18.5 9H13zM6 20V4h5v7h7v9zm2-5h8v1.5H8zm0-3h5v1.5H8z"/>
      </svg>
    ),
  },
  {
    label: "X (Twitter)",
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5 shrink-0">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.747l7.73-8.835L1.254 2.25H8.08l4.261 5.638 5.903-5.638zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5 shrink-0">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    label: "Github",
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5 shrink-0">
        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
      </svg>
    ),
  },
];

function NavContent({
  active,
  onNav,
}: {
  active: string;
  onNav: (id: string) => void;
}) {
  return (
    <>
      <div className="flex items-center gap-2.5 px-2 mb-6">
        <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center shrink-0 text-xs font-semibold text-gray-600">
          IB
        </div>
        <div>
          <p className="text-sm font-semibold text-gray-900 leading-tight">Ishaan</p>
          <p className="text-xs text-gray-400 leading-tight">
            Developer<span className="animate-blink">|</span>
          </p>
        </div>
      </div>

      <nav className="flex flex-col gap-0.5 flex-1">
        {navLinks.map(({ label, icon: Icon, href }) => (
          <button
            key={label}
            onClick={() => onNav(href)}
            className={`flex items-center gap-2.5 px-2 py-1.5 rounded-md text-sm transition-all duration-200 w-full text-left ${
              active === href
                ? "bg-gray-900 text-white"
                : "text-gray-500 hover:text-gray-900 hover:bg-gray-100"
            }`}
          >
            <Icon size={14} />
            {label}
          </button>
        ))}
      </nav>

      <div className="flex flex-col gap-0.5 pt-4 border-t border-gray-100">
        <p className="text-xs text-gray-400 px-2 mb-1">Connect</p>
        {socialLinks.map(({ label, icon, href }) => (
          <a
            key={label}
            href={href}
            className="flex items-center gap-2.5 px-2 py-1.5 rounded-md text-sm text-gray-500 hover:text-gray-900 hover:bg-gray-100 transition-colors"
          >
            {icon}
            <span className="flex-1 text-xs">{label}</span>
            <ExternalLink size={10} className="shrink-0 opacity-50" />
          </a>
        ))}
      </div>
    </>
  );
}

export default function Sidebar() {
  const [active, setActive] = useState("hero");
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    navLinks.forEach(({ href: id }) => {
      const el = document.getElementById(id);
      if (!el) return;
      const observer = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActive(id); },
        { threshold: 0.4 }
      );
      observer.observe(el);
      observers.push(observer);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, []);

  function scrollTo(id: string) {
    setActive(id);
    setMobileOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <>
      {/* Desktop sidebar */}
      <aside className="hidden md:flex fixed top-0 left-0 h-screen w-48 flex-col px-3 py-5 z-10 border-r border-gray-100 bg-white/80 backdrop-blur-sm">
        <NavContent active={active} onNav={scrollTo} />
      </aside>

      {/* Mobile hamburger button */}
      <button
        onClick={() => setMobileOpen(true)}
        className="md:hidden fixed top-4 right-4 z-30 p-2 rounded-md bg-white/80 backdrop-blur-sm border border-gray-200 text-gray-600"
        aria-label="Open menu"
      >
        <Menu size={18} />
      </button>

      {/* Mobile overlay */}
      {mobileOpen && (
        <div
          className="md:hidden fixed inset-0 z-20 bg-black/30 backdrop-blur-sm"
          onClick={() => setMobileOpen(false)}
        />
      )}

      {/* Mobile drawer */}
      <aside
        className={`md:hidden fixed top-0 left-0 h-screen w-64 flex flex-col px-3 py-5 z-30 border-r border-gray-100 bg-white transition-transform duration-300 ${
          mobileOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <button
          onClick={() => setMobileOpen(false)}
          className="self-end mb-4 p-1 text-gray-400 hover:text-gray-900"
          aria-label="Close menu"
        >
          <X size={18} />
        </button>
        <NavContent active={active} onNav={scrollTo} />
      </aside>
    </>
  );
}
