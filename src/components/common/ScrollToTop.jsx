"use client";

import { useState, useEffect } from "react";

// How far (in px) the page must be scrolled before the button appears.
const SHOW_AFTER = 300;

export default function ScrollToTop() {
  // The server has no `window`, so the state must start as false.
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Named handler so the exact same function can be removed in the cleanup.
    const handleScroll = () => {
      setIsVisible(window.scrollY > SHOW_AFTER);
    };

    // Run once on mount so a refresh while scrolled down shows the button immediately.
    handleScroll();

    // "passive: true" keeps scrolling smooth on phones.
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    // Position:
    // - Mobile: sits above the fixed bottom tab bar (h-16 = 4rem) plus the device safe area.
    // - From md (768px up): the tab bar is hidden, so the button sits near the bottom corner.
    // - z-40: above page content, below the fixed navbar (z-50).
    // Look: dark glass with a thin white border, red on hover (matches the site theme).
    // The button is always mounted so it can fade in/out; when hidden it is not clickable
    // and not focusable (tabIndex -1).
    <button
      type="button"
      aria-label="Scroll to top"
      tabIndex={isVisible ? 0 : -1}
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className={`fixed right-4 bottom-[calc(5rem_+_env(safe-area-inset-bottom))] z-40 flex h-11 w-11 items-center justify-center rounded-full border border-white/40 bg-black/50 shadow-2xl backdrop-blur-sm transition-all duration-300 hover:border-red-500 hover:bg-red-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white md:right-6 md:bottom-6 ${
        isVisible
          ? "translate-y-0 opacity-100"
          : "pointer-events-none translate-y-3 opacity-0"
      }`}
    >
      <svg
        className="h-5 w-5 text-white"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M6 15l6-6 6 6" />
      </svg>
    </button>
  );
}
