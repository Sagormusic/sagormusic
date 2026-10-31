"use client";

import { useEffect, useRef, useState } from "react";
import SITE from "@/data/site";

// ---------- Content (edit here only) ----------
const TITLE = "Watch on YouTube";
const INTRO = "New music, compositions and releases are uploaded on both channels.";

// Label channel first, Rafiul's own channel second. Empty links are hidden.
const CHANNELS = [
  {
    name: "Sagor Music Cassette Company",
    handle: "@sagormusiccassettecompany",
    description: "The official channel of the label.",
    href: SITE.social.youtubeLabel,
  },
  {
    name: "Rafiul Islam",
    handle: "@RafiulislamBGM",
    description: "The personal channel of Rafiul Islam.",
    href: SITE.social.youtubeRafiul,
  },
].filter((c) => c.href);

// Equalizer bar timings (seconds): each bar moves a little differently
const BARS = [
  { delay: "0s", duration: "0.9s" },
  { delay: "0.2s", duration: "1.1s" },
  { delay: "0.4s", duration: "0.8s" },
  { delay: "0.1s", duration: "1.2s" },
  { delay: "0.3s", duration: "1s" },
];

// Animations live here so this file stays independent (no globals.css change)
const KEYFRAMES = `
@keyframes ch-spin { to { transform: rotate(360deg); } }
@keyframes ch-eq { 0%,100% { transform: scaleY(0.25); } 50% { transform: scaleY(1); } }
@keyframes ch-pulse { 0%,100% { opacity: 0.35; transform: scale(1); } 50% { opacity: 0.7; transform: scale(1.15); } }
@media (prefers-reduced-motion: reduce) {
  .ch-anim { animation: none !important; }
}
`;

function PlayIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="h-5 w-5 shrink-0">
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  );
}

// Spinning vinyl disc with a red play label in the middle
function Disc() {
  return (
    <div className="relative h-28 w-28 shrink-0 sm:h-36 sm:w-36">
      <span className="ch-anim absolute -inset-3 rounded-full bg-red-600/40 blur-2xl [animation:ch-pulse_3s_ease-in-out_infinite]" />
      <div className="ch-anim relative h-full w-full rounded-full border border-white/10 bg-[repeating-radial-gradient(circle_at_center,#0a0a0a_0px,#0a0a0a_3px,#1c1c1c_4px,#0a0a0a_5px)] shadow-[0_0_40px_rgba(220,38,38,0.35)] [animation:ch-spin_8s_linear_infinite]">
        <span className="absolute left-1/2 top-1/2 flex h-1/2 w-1/2 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-red-600 text-white">
          <PlayIcon />
        </span>
        {/* Small shine so the spin is visible */}
        <span className="absolute left-[12%] top-[12%] h-[22%] w-[22%] rounded-full bg-white/15 blur-md" />
      </div>
    </div>
  );
}

function Equalizer() {
  return (
    <div className="flex h-8 items-end gap-1" aria-hidden="true">
      {BARS.map((b, i) => (
        <span
          key={i}
          style={{ animationDelay: b.delay, animationDuration: b.duration }}
          className="ch-anim h-full w-1.5 origin-bottom rounded-full bg-red-500 [animation-iteration-count:infinite] [animation-name:ch-eq] [animation-timing-function:ease-in-out]"
        />
      ))}
    </div>
  );
}

function ChannelCard({ channel, index }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  const isLeft = index % 2 === 0;

  // Reveal the card when it scrolls into view (works on touch screens, no hover needed)
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
      className={`w-[94%] transition-all duration-700 ease-out motion-reduce:transition-none md:w-[78%] lg:w-[68%] ${
        isLeft ? "self-start" : "self-end"
      } ${
        visible
          ? "translate-x-0 opacity-100"
          : `opacity-0 motion-reduce:opacity-100 ${
              isLeft ? "-translate-x-12" : "translate-x-12"
            } motion-reduce:translate-x-0`
      }`}
    >
      <a
        href={channel.href}
        target="_blank"
        rel="noopener noreferrer"
        className={`relative block overflow-hidden border border-white/10 bg-gradient-to-br from-red-950/60 via-neutral-950 to-black p-6 shadow-[0_20px_60px_rgba(0,0,0,0.6)] active:scale-[0.98] sm:p-8 ${
          isLeft
            ? "rounded-br-[3.5rem] rounded-tl-[3.5rem] rounded-bl-2xl rounded-tr-2xl"
            : "rounded-bl-[3.5rem] rounded-tr-[3.5rem] rounded-br-2xl rounded-tl-2xl"
        }`}
      >
        <div
          className={`flex items-center gap-5 sm:gap-8 ${
            isLeft ? "flex-row" : "flex-row-reverse"
          }`}
        >
          <Disc />
          <div className="min-w-0 flex-1">
            <Equalizer />
            <h3 className="mt-3 text-2xl font-semibold leading-tight sm:text-3xl">
              {channel.name}
            </h3>
            <p className="mt-1 truncate text-sm text-red-400">{channel.handle}</p>
          </div>
        </div>

        <p className="mt-6 text-base text-white/70">{channel.description}</p>

        <span className="mt-6 flex w-full items-center justify-center gap-2 rounded-full bg-[#FF0000] px-6 py-3.5 text-sm font-semibold text-white shadow-[0_8px_30px_rgba(255,0,0,0.35)] sm:w-fit">
          <PlayIcon />
          Visit channel
        </span>
      </a>
    </div>
  );
}

export default function Channels() {
  if (CHANNELS.length === 0) return null;

  return (
    <section className="relative overflow-hidden px-5 pb-20 pt-24 sm:px-8 md:pb-28 md:pt-32 lg:px-16">
      <style>{KEYFRAMES}</style>

      {/* Wavy divider at the top */}
      <svg
        viewBox="0 0 1440 80"
        preserveAspectRatio="none"
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-12 w-full sm:h-20"
      >
        <path
          d="M0 40 C 180 0, 360 80, 540 40 S 900 0, 1080 40 S 1300 70, 1440 30 L1440 0 L0 0 Z"
          fill="rgba(220,38,38,0.18)"
        />
        <path
          d="M0 40 C 180 0, 360 80, 540 40 S 900 0, 1080 40 S 1300 70, 1440 30"
          fill="none"
          stroke="#dc2626"
          strokeWidth="2"
        />
      </svg>

      {/* Soft red glows behind the cards */}
      <span aria-hidden="true" className="pointer-events-none absolute -left-24 top-1/3 h-72 w-72 rounded-full bg-red-700/20 blur-3xl" />
      <span aria-hidden="true" className="pointer-events-none absolute -right-24 bottom-10 h-72 w-72 rounded-full bg-red-600/20 blur-3xl" />

      <div className="relative mx-auto w-full max-w-7xl">
        <div className="text-center">
          <h2 className="text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
            {TITLE}
          </h2>
          <p className="mx-auto mt-4 max-w-prose text-base text-white/70 lg:text-lg">
            {INTRO}
          </p>
        </div>

        {/* Zigzag: first card leans left, second leans right (also on mobile) */}
        <div className="mt-12 flex flex-col gap-8 md:mt-16 md:gap-12">
          {CHANNELS.map((channel, i) => (
            <ChannelCard key={channel.name} channel={channel} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
