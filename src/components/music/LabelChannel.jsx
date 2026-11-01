"use client";

import { useEffect, useRef, useState } from "react";
import SITE from "@/data/site";

// ---- Content (edit here only) ----
const TITLE = "Sagor Music Cassette Company";
const SUBTITLE = "Our label's most popular songs";
const BUTTON_TEXT = "Watch more on YouTube";

// Featured video (published on another channel)
const FEATURED = {
  id: "FMgsi_KvFFw",
  badge: "Featured",
  title: "Mon Karapera",
  artists: "Kazi Shakib · Rafiul Islam",
  note: "Published on Bonfire Bangladesh",
};

// Label channel video IDs, ordered from most popular to least popular
const VIDEO_IDS = [
  "SwmWmV6I2PQ",
  "MbKvQfjW-Go",
  "oX56NVUUvoo",
  "lXuRGBzsvRk",
  "PF5km6QUoic",
  "f74l0TghCRw",
  "fdxI3kLaohE",
  "n7c4u7jvxNs",
  "cjoHodzYswA",
  "kbTZMQWA4wU",
];

// One video card: thumbnail first, the real player loads only after a tap
function VideoCard({ id, badge, delay = 0, large = false, children }) {
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
      className={`lc-card ${visible ? "lc-in" : ""} ${
        large ? "sm:col-span-2" : ""
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div
        className={`relative overflow-hidden rounded-2xl border border-white/10 bg-neutral-950 shadow-lg shadow-red-950/20 ${
          large ? "lg:mx-auto lg:max-w-3xl" : ""
        }`}
      >
        <div className="relative aspect-video w-full bg-black">
          {playing ? (
            <iframe
              className="absolute inset-0 h-full w-full"
              src={`https://www.youtube.com/embed/${id}?autoplay=1&rel=0`}
              title={`Sagor Music video ${badge}`}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          ) : (
            <button
              type="button"
              onClick={() => setPlaying(true)}
              aria-label={`Play ${badge}`}
              className="absolute inset-0 block h-full w-full"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={`https://img.youtube.com/vi/${id}/hqdefault.jpg`}
                alt=""
                loading="lazy"
                className="h-full w-full object-cover"
              />
              <span className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-black/30" />

              {/* Badge */}
              <span className="absolute left-3 top-3 rounded-full bg-red-600 px-3 py-1 text-xs font-bold tracking-wide text-white shadow-md">
                {badge}
              </span>

              {/* Play button with spinning ring */}
              <span className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 items-center justify-center">
                <span className="lc-pulse absolute h-20 w-20 rounded-full bg-red-600/40 sm:h-24 sm:w-24" />
                <span className="lc-spin absolute h-16 w-16 rounded-full border-2 border-dashed border-white/70 sm:h-20 sm:w-20" />
                <span className="relative flex h-12 w-12 items-center justify-center rounded-full bg-red-600 text-white shadow-lg sm:h-14 sm:w-14">
                  <svg viewBox="0 0 24 24" className="ml-0.5 h-6 w-6 fill-current">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </span>
              </span>
            </button>
          )}
        </div>
        {children}
      </div>
    </div>
  );
}

export default function LabelChannel() {
  return (
    <section className="relative overflow-hidden px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
      {/* Keyframes live in this file */}
      <style>{`
        .lc-card { opacity: 0; transform: translateY(28px); transition: opacity .7s ease, transform .7s ease; }
        .lc-card.lc-in { opacity: 1; transform: translateY(0); }
        @keyframes lc-spin { to { transform: rotate(360deg); } }
        @keyframes lc-pulse { 0%,100% { transform: scale(.85); opacity: .7; } 50% { transform: scale(1.15); opacity: .2; } }
        @keyframes lc-wave { 0%,100% { transform: scaleY(.3); } 50% { transform: scaleY(1); } }
        .lc-spin { animation: lc-spin 6s linear infinite; }
        .lc-pulse { animation: lc-pulse 2.4s ease-in-out infinite; }
        .lc-bar { transform-origin: bottom; animation: lc-wave 1.1s ease-in-out infinite; }
        @media (prefers-reduced-motion: reduce) {
          .lc-card { opacity: 1; transform: none; transition: none; }
          .lc-spin, .lc-pulse, .lc-bar { animation: none; }
        }
      `}</style>

      {/* Red glow behind the header */}
      <div className="pointer-events-none absolute left-1/2 top-0 h-64 w-64 -translate-x-1/2 rounded-full bg-red-700/20 blur-3xl sm:h-96 sm:w-96" />

      <div className="relative mx-auto max-w-5xl">
        {/* Header */}
        <div className="mb-8 text-center sm:mb-12">
          <div className="mx-auto mb-4 flex h-8 items-end justify-center gap-1" aria-hidden="true">
            {[0, 0.2, 0.4, 0.1, 0.3, 0.5, 0.15].map((d, i) => (
              <span
                key={i}
                className="lc-bar h-full w-1.5 rounded-full bg-red-600"
                style={{ animationDelay: `${d}s` }}
              />
            ))}
          </div>
          <h1 className="text-4xl font-bold sm:text-5xl lg:text-6xl">{TITLE}</h1>
          <p className="mx-auto mt-3 max-w-xl text-sm text-white/70 sm:text-base">
            {SUBTITLE}
          </p>
        </div>

        {/* Video grid: featured first, then the label's own videos */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6">
          <VideoCard id={FEATURED.id} badge={FEATURED.badge} large>
            <div className="border-t border-white/10 px-4 py-3 text-center">
              <p className="font-[family-name:var(--font-heading)] text-xl font-bold sm:text-2xl">
                {FEATURED.title}
              </p>
              <p className="mt-1 text-xs text-white/70 sm:text-sm">
                {FEATURED.artists}
              </p>
              <p className="mt-1 text-xs text-red-400">{FEATURED.note}</p>
            </div>
          </VideoCard>

          {VIDEO_IDS.map((id, i) => (
            <VideoCard
              key={id}
              id={id}
              badge={`#${i + 1}`}
              delay={(i % 2) * 90}
            />
          ))}
        </div>

        {/* Channel button */}
        {SITE.social.youtubeLabel && (
          <div className="mt-10 text-center sm:mt-14">
            <a
              href={SITE.social.youtubeLabel}
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
