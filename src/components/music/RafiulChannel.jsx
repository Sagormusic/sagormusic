"use client";

import { useEffect, useRef, useState } from "react";
import SITE from "@/data/site";

// ---- Content (edit here only) ----
const TITLE = "Rafiul Islam";
const SUBTITLE = "Most popular songs from my YouTube channel";
const BUTTON_TEXT = "Watch more on YouTube";

// YouTube video IDs, ordered from most popular to least popular
const VIDEO_IDS = [
  "8j2pIh4B8eg",
  "vw7WLQfGUBs",
  "6KZMzXMx4AI",
  "f-C8FUomKMg",
  "7ZVtndmQcxM",
  "lySs63eR11s",
  "zbwZ5RaCZHA",
  "456M6tH3VIA",
  "HDcIo9OirCc",
  "DvxuGSedGFI",
  "cmwJkRAvzj8",
  "ZIZ-BuVNBEE",
  "LlqXCC4D8lY",
  "72tZ5CN3GkQ",
  "l81PIHt3PF0",
  "27bVa37XEAw",
];

// One video card: thumbnail first, the real player loads only after a tap
function VideoCard({ id, rank, featured }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  const [playing, setPlaying] = useState(false);

  // Scroll reveal
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          io.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`rc-card ${visible ? "rc-in" : ""} ${
        featured ? "sm:col-span-2 lg:col-span-3" : ""
      }`}
      style={{ transitionDelay: featured ? "0ms" : `${(rank % 3) * 90}ms` }}
    >
      <div
        className={`relative overflow-hidden rounded-2xl border border-white/10 bg-neutral-950 shadow-lg shadow-red-950/20 ${
          featured ? "lg:mx-auto lg:max-w-3xl" : ""
        }`}
      >
        <div className="relative aspect-video w-full bg-black">
          {playing ? (
            <iframe
              className="absolute inset-0 h-full w-full"
              src={`https://www.youtube.com/embed/${id}?autoplay=1&rel=0`}
              title={`Rafiul Islam song ${rank}`}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          ) : (
            <button
              type="button"
              onClick={() => setPlaying(true)}
              aria-label={`Play song ${rank}`}
              className="group absolute inset-0 block h-full w-full"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={`https://img.youtube.com/vi/${id}/hqdefault.jpg`}
                alt=""
                loading="lazy"
                className="h-full w-full object-cover"
              />
              <span className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-black/30" />

              {/* Rank badge */}
              <span className="absolute left-3 top-3 rounded-full bg-red-600 px-3 py-1 text-xs font-bold tracking-wide text-white shadow-md">
                {featured ? "#1 Most Popular" : `#${rank}`}
              </span>

              {/* Play button with spinning vinyl ring */}
              <span className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 items-center justify-center">
                <span className="rc-pulse absolute h-20 w-20 rounded-full bg-red-600/40 sm:h-24 sm:w-24" />
                <span className="rc-spin absolute h-16 w-16 rounded-full border-2 border-dashed border-white/70 sm:h-20 sm:w-20" />
                <span className="relative flex h-12 w-12 items-center justify-center rounded-full bg-red-600 text-white shadow-lg sm:h-14 sm:w-14">
                  <svg viewBox="0 0 24 24" className="ml-0.5 h-6 w-6 fill-current">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </span>
              </span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default function RafiulChannel() {
  return (
    <section className="relative overflow-hidden px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
      {/* Keyframes live in this file */}
      <style>{`
        .rc-card { opacity: 0; transform: translateY(28px); transition: opacity .7s ease, transform .7s ease; }
        .rc-card.rc-in { opacity: 1; transform: translateY(0); }
        @keyframes rc-spin { to { transform: rotate(360deg); } }
        @keyframes rc-pulse { 0%,100% { transform: scale(.85); opacity: .7; } 50% { transform: scale(1.15); opacity: .2; } }
        @keyframes rc-wave { 0%,100% { transform: scaleY(.3); } 50% { transform: scaleY(1); } }
        .rc-spin { animation: rc-spin 6s linear infinite; }
        .rc-pulse { animation: rc-pulse 2.4s ease-in-out infinite; }
        .rc-bar { transform-origin: bottom; animation: rc-wave 1.1s ease-in-out infinite; }
        @media (prefers-reduced-motion: reduce) {
          .rc-card { opacity: 1; transform: none; transition: none; }
          .rc-spin, .rc-pulse, .rc-bar { animation: none; }
        }
      `}</style>

      {/* Red glow behind the header */}
      <div className="pointer-events-none absolute left-1/2 top-0 h-64 w-64 -translate-x-1/2 rounded-full bg-red-700/20 blur-3xl sm:h-96 sm:w-96" />

      <div className="relative mx-auto max-w-6xl">
        {/* Header */}
        <div className="mb-8 text-center sm:mb-12">
          <div className="mx-auto mb-4 flex h-8 items-end justify-center gap-1" aria-hidden="true">
            {[0, 0.2, 0.4, 0.1, 0.3, 0.5, 0.15].map((d, i) => (
              <span
                key={i}
                className="rc-bar h-full w-1.5 rounded-full bg-red-600"
                style={{ animationDelay: `${d}s` }}
              />
            ))}
          </div>
          <h1 className="text-4xl font-bold sm:text-5xl lg:text-6xl">{TITLE}</h1>
          <p className="mx-auto mt-3 max-w-xl text-sm text-white/70 sm:text-base">
            {SUBTITLE}
          </p>
        </div>

        {/* Video grid */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
          {VIDEO_IDS.map((id, i) => (
            <VideoCard key={id} id={id} rank={i + 1} featured={i === 0} />
          ))}
        </div>

        {/* Channel button */}
        {SITE.social.youtubeRafiul && (
          <div className="mt-10 text-center sm:mt-14">
            <a
              href={SITE.social.youtubeRafiul}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-red-600 px-7 py-3 text-sm font-semibold text-white shadow-lg shadow-red-900/40 sm:text-base"
            >
              <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current">
                <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.6 12 3.6 12 3.6s-7.5 0-9.4.5A3 3 0 0 0 .5 6.2C0 8.1 0 12 0 12s0 3.9.5 5.8a3 3 0 0 0 2.1 2.1c1.9.5 9.4.5 9.4.5s7.5 0 9.4-.5a3 3 0 0 0 2.1-2.1c.5-1.9.5-5.8.5-5.8s0-3.9-.5-5.8zM9.6 15.6V8.4l6.2 3.6-6.2 3.6z" />
              </svg>
              {BUTTON_TEXT}
            </a>
          </div>
        )}
      </div>
    </section>
  );
}
