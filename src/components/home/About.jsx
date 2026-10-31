"use client";

import { useEffect, useRef, useState } from "react";

// ---------- Content (edit here only) ----------
const TITLE = "Sagor Music Cassette Company";
const PARAGRAPHS = [
  "Welcome to Sagor Music Cassette Company — a creative music label dedicated to discovering talent, creating beautiful music, and bringing artists and music lovers together.",
  "Founded and owned by Rafiul Islam, Sagor Music Cassette Company is a platform where talented artists, musicians, singers, composers, and creative minds work together to create memorable musical experiences.",
];

const WHAT_WE_DO_TITLE = "What we do";
const WHAT_WE_DO = [
  "Original Songs & Music Production",
  "Music Composition & Arrangement",
  "Cover Songs & Instrumental Music",
  "Epic & Cinematic Music",
  "Artist Collaboration & Creative Projects",
  "Music Releases & Digital Distribution",
];

const MISSION_TITLE = "Our mission";
const MISSION =
  "Our mission is to support talented artists, promote creativity, and deliver quality music to audiences around the world. We believe that music connects people and expresses emotions.";

// ---------- Waveform strip (decoration) ----------
// Bar heights are computed, not random, so server and browser render the same thing.
const BAR_COUNT = 60;
const BAR_STEP = 8;
const BARS = Array.from({ length: BAR_COUNT }, (_, i) => {
  const h = 6 + 26 * Math.abs(Math.sin(i * 0.65) * Math.cos(i * 0.21 + 1));
  return Math.round(h);
});

function WaveSvg() {
  return (
    <svg
      viewBox={`0 0 ${BAR_COUNT * BAR_STEP} 40`}
      preserveAspectRatio="none"
      aria-hidden="true"
      className="h-full w-1/2 shrink-0"
    >
      {BARS.map((h, i) => (
        <rect
          key={i}
          x={i * BAR_STEP + 2}
          y={20 - h / 2}
          width="3.5"
          height={h}
          rx="1.75"
          fill="#dc2626"
        />
      ))}
    </svg>
  );
}

// ---------- Styles and animations (kept inside this file) ----------
// No hover reliance: everything runs on its own or on scroll, which matters on phones.
const CSS = `
  /* Scroll reveal */
  .about-r {
    opacity: 0;
    transform: translateY(24px);
    transition: opacity 0.7s ease, transform 0.7s cubic-bezier(0.22, 1, 0.36, 1);
    transition-delay: var(--d, 0s);
  }
  .about-show .about-r { opacity: 1; transform: none; }

  /* Waveform strip scrolls sideways forever, edges fade out */
  @keyframes about-wave { to { transform: translateX(-50%); } }
  .about-wave-track { display: flex; width: 200%; height: 100%; animation: about-wave 22s linear infinite; }
  .about-wave-mask {
    -webkit-mask-image: linear-gradient(90deg, transparent, #000 15%, #000 85%, transparent);
            mask-image: linear-gradient(90deg, transparent, #000 15%, #000 85%, transparent);
  }

  /* "Now playing" highlight travels down the list, one row at a time */
  @keyframes about-now {
    0%        { background-color: rgba(220, 38, 38, 0); }
    3%, 13%   { background-color: rgba(220, 38, 38, 0.16); }
    18%, 100% { background-color: rgba(220, 38, 38, 0); }
  }
  @keyframes about-now-icon {
    0%        { transform: scale(1);   background-color: rgba(220, 38, 38, 0.15); color: #ef4444; }
    3%, 13%   { transform: scale(1.12); background-color: #dc2626; color: #ffffff; }
    18%, 100% { transform: scale(1);   background-color: rgba(220, 38, 38, 0.15); color: #ef4444; }
  }
  .about-now { animation: about-now 12s ease-in-out infinite; animation-delay: var(--nd, 0s); }
  .about-now-icon { animation: about-now-icon 12s ease-in-out infinite; animation-delay: var(--nd, 0s); }

  /* Red glow behind the mission breathes */
  @keyframes about-glow {
    0%, 100% { opacity: 0.45; transform: scale(1); }
    50%      { opacity: 0.8;  transform: scale(1.1); }
  }
  .about-glow { animation: about-glow 6s ease-in-out infinite; }

  /* Mission quote mark drifts slowly */
  @keyframes about-quote {
    0%, 100% { transform: translateY(0); }
    50%      { transform: translateY(-8px); }
  }
  .about-quote { animation: about-quote 5s ease-in-out infinite; }

  @media (prefers-reduced-motion: reduce) {
    .about-r { opacity: 1; transform: none; transition: none; }
    .about-wave-track, .about-now, .about-now-icon, .about-glow, .about-quote { animation: none; }
  }
`;

export default function About() {
  const ref = useRef(null);
  const [show, setShow] = useState(false);

  // Reveal everything once the section scrolls into view
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShow(true);
          io.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      className={`relative isolate overflow-hidden px-5 py-16 sm:px-8 md:py-24 lg:px-16 ${show ? "about-show" : ""}`}
    >
      <style>{CSS}</style>

      <div className="mx-auto w-full max-w-7xl">
        {/* Intro: title on the left, description on the right (stacked on mobile) */}
        <div className="grid gap-8 md:grid-cols-2 md:gap-14 lg:gap-20">
          <h2
            className="about-r text-center text-4xl font-bold leading-tight sm:text-5xl md:text-left lg:text-6xl"
            style={{ "--d": "0.05s" }}
          >
            {TITLE}
          </h2>
          <div className="mx-auto max-w-prose space-y-4 text-center text-base leading-relaxed text-white/70 md:mx-0 md:text-left lg:text-lg">
            {PARAGRAPHS.map((text, i) => (
              <p key={text} className="about-r" style={{ "--d": `${0.2 + i * 0.15}s` }}>
                {text}
              </p>
            ))}
          </div>
        </div>

        {/* Moving waveform strip */}
        <div
          aria-hidden="true"
          className="about-r about-wave-mask mt-12 h-10 w-full overflow-hidden sm:h-12 md:mt-16"
          style={{ "--d": "0.2s" }}
        >
          <div className="about-wave-track">
            <WaveSvg />
            <WaveSvg />
          </div>
        </div>

        {/* What we do: a playlist where the highlight keeps moving down the rows */}
        <div className="mt-12 md:mt-16">
          <h3
            className="about-r text-center text-2xl font-semibold sm:text-3xl md:text-left"
            style={{ "--d": "0.1s" }}
          >
            {WHAT_WE_DO_TITLE}
          </h3>
          <ul className="mt-6 grid gap-2 sm:grid-cols-2 sm:gap-x-6 lg:gap-x-10">
            {WHAT_WE_DO.map((item, i) => (
              <li
                key={item}
                className="about-r"
                style={{ "--d": `${0.15 + i * 0.08}s` }}
              >
                <div
                  className="about-now flex items-center gap-4 rounded-2xl border border-white/10 px-4 py-4 text-base text-white/90 sm:text-lg"
                  style={{ "--nd": `${i * 2}s` }}
                >
                  <span
                    aria-hidden="true"
                    className="about-now-icon flex h-9 w-9 shrink-0 items-center justify-center rounded-full"
                    style={{ "--nd": `${i * 2}s` }}
                  >
                    <svg viewBox="0 0 24 24" fill="currentColor" className="ml-0.5 h-4 w-4">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </span>
                  {item}
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Mission: big quote with a breathing red glow */}
        <div className="about-r relative mt-14 md:mt-20" style={{ "--d": "0.1s" }}>
          <div
            aria-hidden="true"
            className="about-glow pointer-events-none absolute -left-10 top-1/2 -z-10 h-64 w-64 -translate-y-1/2 rounded-full bg-red-600/25 blur-3xl md:h-96 md:w-96"
          />
          <div className="rounded-3xl border border-white/10 bg-white/[0.03] px-6 py-10 text-center sm:px-10 md:px-14 md:py-14 md:text-left">
            <span
              aria-hidden="true"
              className="about-quote block font-[family-name:var(--font-heading)] text-7xl font-bold leading-none text-red-600 sm:text-8xl"
            >
              “
            </span>
            <h3 className="-mt-2 text-xl font-semibold text-red-500 sm:text-2xl">
              {MISSION_TITLE}
            </h3>
            <p className="mt-3 max-w-3xl font-[family-name:var(--font-heading)] text-2xl leading-snug text-white sm:text-3xl lg:text-4xl">
              {MISSION}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
