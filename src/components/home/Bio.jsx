"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import SITE from "@/data/site";

// ---------- Content (edit here only) ----------
const EYEBROW = "Meet the founder";
const NAME = "Rafiul Islam";
const ROLES = ["Music Composer", "Music Producer", "Artist"];
const PARAGRAPHS = [
  "Rafiul Islam, also known as Rafiul Islam Sagor, is a Bangladeshi musician, singer, composer and playback artist.",
  "Follow his journey to discover his latest music, original compositions, instrumental tracks, epic music and upcoming projects.",
];

// Quick facts (label + value)
const FACTS = [
  { label: "Born", value: "March 4, 2004" },
  { label: "Birthplace", value: "Dhaka, Bangladesh" },
];

// Photo placed inside the /public folder. Leave "" to hide the photo.
const PHOTO_SRC = "/sagor1.jpg";

// Small text on the cassette label
const CASSETTE_SIDE = "Side A";

// ---------- Official brand logos (inline SVG, white glyphs) ----------
function YouTubeLogo() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="h-5 w-5 shrink-0 sm:h-6 sm:w-6">
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  );
}

function FacebookLogo() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="h-5 w-5 shrink-0 sm:h-6 sm:w-6">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}

function InstagramLogo() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      aria-hidden="true"
      className="h-5 w-5 shrink-0 sm:h-6 sm:w-6"
    >
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

// Buttons (links come from the shared site data; empty links are hidden)
// `wide` = full row on mobile (YouTube), Facebook + Instagram sit side by side below it
const BUTTONS = [
  {
    label: "YouTube Channel",
    href: SITE.social.youtubeRafiul,
    Logo: YouTubeLogo,
    wide: true,
    style: "bg-[#FF0000]",
  },
  {
    label: "Facebook",
    href: SITE.social.facebook,
    Logo: FacebookLogo,
    wide: false,
    style: "bg-[#1877F2]",
  },
  {
    label: "Instagram",
    href: SITE.social.instagram,
    Logo: InstagramLogo,
    wide: false,
    style: "bg-[linear-gradient(45deg,#f09433,#e6683c,#dc2743,#cc2366,#bc1888)]",
  },
].filter((b) => b.href);

// ---------- Styles and animations (kept inside this file) ----------
// No hover reliance: everything runs on its own or on scroll, which matters on phones.
const CSS = `
  /* Scroll reveal: items start hidden and settle in when the section is visible */
  .bio-r {
    opacity: 0;
    transform: translateY(22px);
    transition: opacity 0.7s ease, transform 0.7s cubic-bezier(0.22, 1, 0.36, 1);
    transition-delay: var(--d, 0s);
  }
  .bio-l {
    opacity: 0;
    transform: translateX(-48px) rotate(-6deg);
    transition: opacity 0.9s ease, transform 1s cubic-bezier(0.22, 1, 0.36, 1);
  }
  .bio-show .bio-r { opacity: 1; transform: none; }
  .bio-show .bio-l { opacity: 1; transform: rotate(-2deg); }

  /* Cassette card floats gently */
  @keyframes bio-float {
    0%, 100% { transform: translateY(0); }
    50%      { transform: translateY(-8px); }
  }
  .bio-float { animation: bio-float 6s ease-in-out infinite; }

  /* Tape reels spin forever */
  @keyframes bio-spin { to { transform: rotate(360deg); } }
  .bio-spin { animation: bio-spin 3s linear infinite; }
  .bio-spokes {
    background: repeating-conic-gradient(#ffffff 0deg 14deg, transparent 14deg 60deg);
    -webkit-mask-image: radial-gradient(circle, transparent 30%, #000 31%);
            mask-image: radial-gradient(circle, transparent 30%, #000 31%);
  }

  /* Tape line between the reels slides */
  @keyframes bio-tape {
    from { background-position: 0 0; }
    to   { background-position: 16px 0; }
  }
  .bio-tape {
    background-image: repeating-linear-gradient(90deg, rgba(255,255,255,0.35) 0 4px, transparent 4px 8px);
    animation: bio-tape 0.6s linear infinite;
  }

  /* Red glow behind the card breathes */
  @keyframes bio-glow {
    0%, 100% { opacity: 0.5; transform: scale(1); }
    50%      { opacity: 0.9; transform: scale(1.1); }
  }
  .bio-glow { animation: bio-glow 5s ease-in-out infinite; }

  /* Role dot pulses */
  @keyframes bio-dot {
    0%, 100% { transform: scale(1); opacity: 1; }
    50%      { transform: scale(1.6); opacity: 0.5; }
  }
  .bio-dot { animation: bio-dot 1.8s ease-in-out infinite; }

  /* Short red line before the intro text grows in */
  .bio-line { width: 0; transition: width 0.9s cubic-bezier(0.22, 1, 0.36, 1) 0.2s; }
  .bio-show .bio-line { width: 2.5rem; }

  /* Light sweep that keeps crossing the social buttons */
  @keyframes bio-shine {
    0%   { transform: translateX(-130%) skewX(-20deg); }
    60%, 100% { transform: translateX(330%) skewX(-20deg); }
  }
  .bio-shine::after {
    content: "";
    position: absolute;
    inset: 0;
    width: 35%;
    background: linear-gradient(90deg, transparent, rgba(255,255,255,0.35), transparent);
    animation: bio-shine 3.6s ease-in-out infinite;
    animation-delay: var(--sd, 0s);
    pointer-events: none;
  }

  @media (prefers-reduced-motion: reduce) {
    .bio-r, .bio-l { opacity: 1; transform: none; transition: none; }
    .bio-show .bio-l { transform: none; }
    .bio-line { width: 2.5rem; transition: none; }
    .bio-float, .bio-spin, .bio-tape, .bio-glow, .bio-dot, .bio-shine::after { animation: none; }
  }
`;

// One tape reel (spokes spin, centre hub stays still)
function Reel() {
  return (
    <div className="relative h-9 w-9 shrink-0 rounded-full border-2 border-white/60 bg-black sm:h-10 sm:w-10">
      <div aria-hidden="true" className="bio-spin bio-spokes absolute inset-0.5 rounded-full" />
      <div aria-hidden="true" className="absolute left-1/2 top-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-red-600" />
    </div>
  );
}

export default function Bio() {
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
      { threshold: 0.15 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      className={`relative isolate overflow-hidden px-5 py-16 sm:px-8 md:py-24 lg:px-16 ${show ? "bio-show" : ""}`}
    >
      <style>{CSS}</style>

      <div className="mx-auto flex w-full max-w-7xl flex-col items-center gap-12 md:flex-row md:gap-14 lg:gap-20">
        {/* Cassette-style photo card (hidden when PHOTO_SRC is empty) */}
        {PHOTO_SRC && (
          <div className="relative w-56 shrink-0 sm:w-64 md:w-72 lg:w-96">
            <div
              aria-hidden="true"
              className="bio-glow pointer-events-none absolute -inset-8 -z-10 rounded-full bg-red-600/30 blur-3xl"
            />
            <div className="bio-l">
              <div className="bio-float">
                <div className="rounded-3xl border border-white/15 bg-neutral-900 p-2.5 shadow-[0_0_50px_rgba(220,38,38,0.3)]">
                  {/* Cassette label */}
                  <div className="overflow-hidden rounded-xl bg-white">
                    <div className="flex items-center justify-between px-3 py-1.5">
                      <span className="font-[family-name:var(--font-heading)] text-lg font-bold text-black">
                        {NAME}
                      </span>
                      <span className="text-xs font-semibold text-red-600">{CASSETTE_SIDE}</span>
                    </div>
                    <div className="h-1.5 bg-red-600" />
                  </div>

                  {/* Photo window */}
                  <div className="relative mt-2.5 aspect-[4/5] overflow-hidden rounded-xl">
                    <Image
                      src={PHOTO_SRC}
                      alt={NAME}
                      fill
                      sizes="(min-width: 1024px) 24rem, (min-width: 768px) 18rem, (min-width: 640px) 16rem, 14rem"
                      className="object-cover"
                    />
                  </div>

                  {/* Tape deck: two spinning reels with moving tape */}
                  <div className="mt-2.5 flex items-center justify-between gap-3 rounded-xl bg-black/70 px-4 py-3">
                    <Reel />
                    <div aria-hidden="true" className="bio-tape h-1.5 flex-1 rounded-full" />
                    <Reel />
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Text side */}
        <div className="w-full text-center md:text-left">
          <p
            className="bio-r flex items-center justify-center gap-3 text-sm font-semibold text-red-500 md:justify-start"
            style={{ "--d": "0.1s" }}
          >
            <span aria-hidden="true" className="bio-line h-0.5 bg-red-500" />
            {EYEBROW}
          </p>

          <h2
            className="bio-r mt-3 text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl"
            style={{ "--d": "0.2s" }}
          >
            {NAME}
          </h2>

          {/* Role chips */}
          <ul className="mt-5 flex flex-wrap justify-center gap-2 md:justify-start">
            {ROLES.map((role, i) => (
              <li
                key={role}
                className="bio-r flex items-center gap-2 rounded-full border border-red-500/40 bg-red-500/10 px-4 py-1.5 text-xs font-medium text-white/90 sm:text-sm"
                style={{ "--d": `${0.3 + i * 0.1}s` }}
              >
                <span aria-hidden="true" className="bio-dot h-1.5 w-1.5 rounded-full bg-red-500" />
                {role}
              </li>
            ))}
          </ul>

          <div
            className="bio-r mx-auto mt-6 max-w-prose space-y-4 text-base leading-relaxed text-white/70 md:mx-0 lg:text-lg"
            style={{ "--d": "0.55s" }}
          >
            {PARAGRAPHS.map((text) => (
              <p key={text}>{text}</p>
            ))}
          </div>

          {/* Quick facts */}
          <dl className="mt-8 grid grid-cols-2 gap-3 sm:max-w-md md:mx-0">
            {FACTS.map((f, i) => (
              <div
                key={f.label}
                className="bio-r rounded-2xl border border-white/10 border-l-4 border-l-red-600 bg-white/5 px-4 py-3 text-left"
                style={{ "--d": `${0.65 + i * 0.1}s` }}
              >
                <dt className="text-xs text-white/50">{f.label}</dt>
                <dd className="mt-1 text-sm font-medium text-white sm:text-base">{f.value}</dd>
              </div>
            ))}
          </dl>

          {/* Social buttons: mobile = YouTube full row, Facebook + Instagram side by side */}
          {BUTTONS.length > 0 && (
            <div className="mt-8 grid grid-cols-2 gap-3 sm:flex sm:flex-wrap sm:justify-center md:justify-start">
              {BUTTONS.map(({ label, href, Logo, wide, style }, i) => (
                <div
                  key={label}
                  className={`bio-r ${wide ? "col-span-2 sm:col-auto" : ""}`}
                  style={{ "--d": `${0.85 + i * 0.1}s` }}
                >
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    style={{ "--sd": `${i * 1.2}s` }}
                    className={`bio-shine relative flex min-w-0 items-center justify-center gap-2 overflow-hidden rounded-full px-4 py-3 text-sm font-semibold text-white transition active:scale-95 hover:brightness-110 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:px-7 ${style}`}
                  >
                    <Logo />
                    <span className="truncate">{label}</span>
                  </a>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
