"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const NAV_LINKS = [
  { id: "home", label: "Home", href: "#home" },
  { id: "about", label: "About", href: "#about" },
  { id: "experience", label: "Experience", href: "#experience" },
  { id: "services", label: "Skills", href: "#services" },
  { id: "portfolio", label: "Portfolio", href: "#portfolio" },
  { id: "projects", label: "Projects", href: "#projects" },
  { id: "testimonials", label: "Testimonials", href: "#testimonials" },
  { id: "blog", label: "Blog", href: "#blog" },
  { id: "contact", label: "Contact", href: "#contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeId, setActiveId] = useState("home");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
      const sections = NAV_LINKS.map((l) => l.id);
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120) {
            setActiveId(sections[i]);
            break;
          }
        }
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 backdrop-blur-md shadow-lg shadow-slate-200/50 py-2"
          : "py-3 sm:py-4 md:bg-transparent bg-white/80 sm:bg-white/60 backdrop-blur-sm"
      }`}
    >
      <nav className="container mx-auto px-4 sm:px-5 md:px-6 flex items-center justify-between max-w-6xl gap-2">
        <Link
          href="#home"
          className="text-lg sm:text-xl font-bold text-slate-900 hover:text-primary-600 transition-colors min-h-[44px] flex items-center"
        >
          AMK
        </Link>
        <ul className="hidden lg:flex items-center gap-1">
          {NAV_LINKS.map((link) => (
            <li key={link.id}>
              <Link
                href={link.href}
                className={`relative px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                  activeId === link.id ? "text-primary-600 bg-primary-50" : "text-slate-600 hover:text-primary-600 hover:bg-slate-100"
                }`}
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
                {activeId === link.id && (
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-primary-600" />
                )}
              </Link>
            </li>
          ))}
        </ul>
        <a
          href="/cv.pdf"
          download="Abdul-Moiz-Khan-CV.pdf"
          className="hidden lg:inline-flex items-center gap-2 min-h-[44px] px-4 py-2 rounded-lg bg-primary-600 text-white text-sm font-semibold hover:bg-primary-700 transition-colors"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
          Download CV
        </a>
        <button
          type="button"
          className="lg:hidden min-h-[44px] min-w-[44px] p-2 text-slate-700 rounded-lg hover:bg-slate-100 flex items-center justify-center"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {mobileOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </nav>
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-slate-200 shadow-xl">
          <ul className="container mx-auto px-4 py-3 flex flex-col gap-0.5 max-w-6xl">
            {NAV_LINKS.map((link) => (
              <li key={link.id}>
                <Link
                  href={link.href}
                  className={`block py-3.5 px-4 rounded-lg text-sm font-medium min-h-[44px] flex items-center ${activeId === link.id ? "text-primary-600 bg-primary-50" : "text-slate-700"}`}
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <a
                href="/cv.pdf"
                download="Abdul-Moiz-Khan-CV.pdf"
                className="flex items-center gap-2 py-3.5 px-4 rounded-lg text-sm font-semibold text-primary-600 bg-primary-50 min-h-[44px]"
                onClick={() => setMobileOpen(false)}
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
                Download CV
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
