"use client";

import { useEffect, useRef, useState } from "react";

// ---------- Content (edit here) ----------
const TITLE = "Our location";
const TEXT = "Tap the map to explore it, or open it in Google Maps for directions.";
const PLACE_NAME = "KHALEK STORE-ABDUL KHALEK MOLLAH";

// Coordinates are taken from the embed link below (used for the Open / Directions buttons)
const LAT = "23.71876";
const LNG = "90.50529";
const OPEN_URL = `https://www.google.com/maps/search/?api=1&query=${LAT},${LNG}`;
const DIRECTIONS_URL = `https://www.google.com/maps/dir/?api=1&destination=${LAT},${LNG}`;

// Google Maps embed link (the src of the iframe Saiful gave)
const MAP_SRC =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d178.65673851794406!2d90.50529508516766!3d23.71876370530184!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b7a2778a1791%3A0xd0f8145110abb6e1!2sKHALEK%20STORE-ABDUL%20KHALEK%20MOLLAH!5e1!3m2!1sen!2sbd!4v1793625698749!5m2!1sen!2sbd";

// Optional colour treatment for the map. "none" = normal Google colours.
// For a dark look on a normal (road) map you can use: "invert(90%) hue-rotate(180deg) contrast(0.95) saturate(0.8)"
// Do not use it on satellite view (the current embed is satellite), it would make the photo look wrong.
const MAP_FILTER = "none";

// ---------- Icons ----------
function Stroke({ className, children }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {children}
    </svg>
  );
}

function PinIcon({ className }) {
  return (
    <Stroke className={className}>
      <path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 0 1 16 0z" />
      <circle cx="12" cy="10" r="3" />
    </Stroke>
  );
}

function OpenIcon({ className }) {
  return (
    <Stroke className={className}>
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      <path d="M15 3h6v6" />
      <path d="M10 14 21 3" />
    </Stroke>
  );
}

function RouteIcon({ className }) {
  return (
    <Stroke className={className}>
      <path d="M3 11 22 2l-9 19-2-8-8-2z" />
    </Stroke>
  );
}

function TouchIcon({ className }) {
  return (
    <Stroke className={className}>
      <path d="M9 11V5a2 2 0 1 1 4 0v6" />
      <path d="M13 10a2 2 0 0 1 4 0v1a2 2 0 0 1 4 0v4a7 7 0 0 1-7 7h-1a7 7 0 0 1-6-3.5L3.5 14a2 2 0 0 1 3-2.6L9 13" />
    </Stroke>
  );
}

const actionBtn =
  "inline-flex min-h-11 items-center justify-center gap-2 rounded-xl px-5 text-sm font-medium transition active:scale-95 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#E8C27A]";

export default function Address() {
  const ref = useRef(null);
  const [shown, setShown] = useState(false);
  // The map is locked until the visitor taps it, so it never traps page scrolling on phones
  const [active, setActive] = useState(false);

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
      className={`transition-all duration-700 motion-reduce:transition-none ${
        shown ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
      }`}
    >
      {/* Glass card, same style as Links and Form */}
      <div className="relative rounded-3xl border border-white/15 bg-white/[0.07] p-5 shadow-[0_8px_40px_rgba(0,0,0,0.35)] ring-1 ring-inset ring-white/10 backdrop-blur-2xl sm:p-7">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-br from-white/15 via-transparent to-transparent"
        ></div>

        <div className="relative">
          <div className="flex flex-wrap items-end justify-between gap-x-6 gap-y-3">
            <div className="min-w-0">
              <h2 className="text-2xl font-medium">{TITLE}</h2>
              <p className="mt-1 text-sm text-white/60">{TEXT}</p>
            </div>

            <p className="inline-flex max-w-full items-center gap-2 rounded-full border border-[#E8C27A]/30 bg-[#E8C27A]/10 px-3.5 py-1.5 text-sm text-[#E8C27A]">
              <PinIcon className="h-4 w-4 shrink-0"></PinIcon>
              <span className="truncate">{PLACE_NAME}</span>
            </p>
          </div>

          {/* Map frame: gold hairline + soft glow */}
          <div className="relative mt-5 overflow-hidden rounded-2xl border border-[#E8C27A]/40 bg-black/40 shadow-[0_0_40px_rgba(232,194,122,0.12)] ring-1 ring-inset ring-white/10">
            <iframe
              src={MAP_SRC}
              title={`Map: ${PLACE_NAME}`}
              loading="lazy"
              allowFullScreen
              referrerPolicy="strict-origin-when-cross-origin"
              className="block h-72 w-full border-0 sm:h-96 lg:h-[26rem]"
              style={{
                filter: MAP_FILTER,
                // Locked state: touches pass through to the page so scrolling still works
                pointerEvents: active ? "auto" : "none",
              }}
            ></iframe>

            {/* Lock layer: tap once to unlock the map */}
            {!active && (
              <button
                type="button"
                onClick={() => setActive(true)}
                aria-label="Tap to explore the map"
                className="absolute inset-0 flex items-end justify-center bg-gradient-to-t from-black/55 via-transparent to-transparent pb-5 focus-visible:outline-2 focus-visible:outline-offset-[-4px] focus-visible:outline-[#E8C27A]"
              >
                <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-black/55 px-4 py-2 text-sm font-medium text-white backdrop-blur-md">
                  <TouchIcon className="h-4 w-4"></TouchIcon>
                  Tap to explore the map
                </span>
              </button>
            )}

            {/* Unlocked state: button to lock again so the page can scroll freely */}
            {active && (
              <button
                type="button"
                onClick={() => setActive(false)}
                className="absolute right-3 top-3 inline-flex min-h-10 items-center rounded-full border border-white/20 bg-black/65 px-4 text-sm font-medium text-white backdrop-blur-md transition active:scale-95 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#E8C27A]"
              >
                Done
              </button>
            )}
          </div>

          <div className="mt-5 flex flex-col gap-3 sm:flex-row">
            <a
              href={OPEN_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={`${actionBtn} bg-[#E8C27A] text-black`}
            >
              <OpenIcon className="h-[18px] w-[18px]"></OpenIcon>
              Open in Google Maps
            </a>
            <a
              href={DIRECTIONS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={`${actionBtn} border border-white/15 bg-white/10 text-white`}
            >
              <RouteIcon className="h-[18px] w-[18px]"></RouteIcon>
              Get directions
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
