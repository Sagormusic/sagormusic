"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import SITE from "@/data/site";

// ---------- Content (edit here) ----------
// Image file lives in the /public folder
const IMAGE_SRC = "/sagor2.jpg";
const IMAGE_ALT = "Rafiul Islam Sagor";

// Local number -> international format for the tel: link (Bangladesh +880)
const phoneHref = SITE.phone
  ? `tel:+880${SITE.phone.replace(/^0/, "")}`
  : "";

function PhoneIcon({ className = "h-5 w-5" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

export default function Portrait() {
  const ref = useRef(null);
  const [shown, setShown] = useState(false);

  // Reveal once, when the card scrolls into view
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`mx-auto w-full max-w-md transition-all duration-700 motion-reduce:transition-none ${
        shown ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
      }`}
    >
      {/* Image frame: gold hairline + soft glow, same as the map frame */}
      <div className="relative aspect-[3/4] overflow-hidden rounded-3xl border border-[#E8C27A]/40 bg-black/40 shadow-[0_0_40px_rgba(232,194,122,0.12)] ring-1 ring-inset ring-white/10">
        <Image
          src={IMAGE_SRC}
          alt={IMAGE_ALT}
          fill
          sizes="(min-width: 448px) 448px, 100vw"
          className="object-cover"
        />

        {/* Soft dark fade at the bottom so the glass bar stays readable on the bright floor */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/45 to-transparent"
        ></div>

        {/* Phone number: glass bar placed on top of the image, at the bottom */}
        {SITE.phone && (
          <a
            href={phoneHref}
            aria-label={`Call ${SITE.phone}`}
            className="absolute inset-x-4 bottom-4 flex items-center justify-center gap-3 rounded-2xl border border-white/25 bg-white/10 px-4 py-3 shadow-[0_8px_30px_rgba(0,0,0,0.35)] ring-1 ring-inset ring-white/10 backdrop-blur-xl transition active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#E8C27A] sm:inset-x-5 sm:bottom-5"
          >
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-red-600 text-white">
              <PhoneIcon className="h-[18px] w-[18px]"></PhoneIcon>
            </span>
            <span className="text-lg font-semibold tracking-wide text-white sm:text-xl">
              {SITE.phone}
            </span>
          </a>
        )}
      </div>
    </div>
  );
}
