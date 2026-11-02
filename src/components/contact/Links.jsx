"use client";

import { useEffect, useRef, useState } from "react";
import SITE, { whatsappLink } from "@/data/site";

// ---------- Content (edit here) ----------
const LABEL = "Contact";
const TITLE = "Get in touch";
const TEXT =
  "Questions, orders or music collaborations? Tap any button below and the chat opens right away.";

// Local number -> international format for tel: links (Bangladesh +880)
const phoneHref = SITE.phone
  ? `tel:+880${SITE.phone.replace(/^0/, "")}`
  : "";

// Items with an empty link are hidden automatically
const ITEMS = [
  {
    id: "whatsapp",
    label: "WhatsApp",
    detail: SITE.whatsapp,
    href: whatsappLink,
    external: true,
    color: "#25D366",
  },
  {
    id: "messenger",
    label: "Messenger",
    detail: "Chat with us",
    href: SITE.messenger,
    external: true,
    color: "#0A84FF",
  },
  {
    id: "email",
    label: "Email",
    detail: SITE.email,
    href: SITE.email ? `mailto:${SITE.email}` : "",
    external: false,
    color: "#E11D2E",
  },
  {
    id: "phone",
    label: "Phone",
    detail: SITE.phone,
    href: phoneHref,
    external: false,
    color: "#F59E0B",
  },
].filter((item) => item.href);

// ---------- Scroll reveal (runs once when the element enters the screen) ----------
function useReveal() {
  const ref = useRef(null);
  const [shown, setShown] = useState(false);

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
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return [ref, shown];
}

// ---------- Icons ----------
const PHONE_PATH =
  "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z";
const BUBBLE_PATH =
  "M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z";

function Icon({ name }) {
  const common = {
    width: 26,
    height: 26,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": true,
  };

  if (name === "whatsapp") {
    return (
      <svg {...common}>
        <path d={BUBBLE_PATH} />
        <g transform="translate(7.6 7.6) scale(0.38)" strokeWidth="4">
          <path d={PHONE_PATH} />
        </g>
      </svg>
    );
  }
  if (name === "messenger") {
    return (
      <svg {...common}>
        <path d={BUBBLE_PATH} />
        <g transform="translate(8 7.6) scale(0.35)" strokeWidth="4">
          <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
        </g>
      </svg>
    );
  }
  if (name === "email") {
    return (
      <svg {...common}>
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <polyline points="22,6 12,13 2,6" />
      </svg>
    );
  }
  return (
    <svg {...common}>
      <path d={PHONE_PATH} />
    </svg>
  );
}

export default function Links() {
  const [ref, shown] = useReveal();

  if (ITEMS.length === 0) return null;

  return (
    <section className="relative overflow-hidden px-4 pb-8 pt-14 sm:pt-20">
      <style>{`
        @keyframes cl-ring {
          0% { transform: scale(1); opacity: 0.55; }
          100% { transform: scale(1.8); opacity: 0; }
        }
        @keyframes cl-sweep {
          0% { transform: translateX(-20%); }
          60%, 100% { transform: translateX(420%); }
        }
        @keyframes cl-nudge {
          0%, 100% { transform: translateX(0); }
          50% { transform: translateX(5px); }
        }
        @keyframes cl-glow {
          0%, 100% { opacity: 0.55; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.15); }
        }
        .cl-ring { animation: cl-ring 2.4s ease-out infinite; }
        .cl-sweep { animation: cl-sweep 6s ease-in-out infinite; }
        .cl-nudge { animation: cl-nudge 1.6s ease-in-out infinite; }
        .cl-glow { animation: cl-glow 6s ease-in-out infinite; }
        @media (prefers-reduced-motion: reduce) {
          .cl-ring, .cl-sweep, .cl-nudge, .cl-glow { animation: none !important; }
          .cl-reveal { transition: none !important; }
        }
      `}</style>

      {/* Soft red glow behind the title */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2"
      >
        <div className="cl-glow h-72 w-72 rounded-full bg-red-600/25 blur-3xl"></div>
      </div>

      <div ref={ref} className="relative mx-auto max-w-5xl">
        {/* Header */}
        <div
          className={`cl-reveal mx-auto max-w-2xl text-center transition-all duration-700 ${
            shown ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
          }`}
        >
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-red-500">
            {LABEL}
          </p>
          <h1 className="mt-3 text-5xl font-semibold sm:text-6xl">{TITLE}</h1>
          <div className="mx-auto mt-5 h-px w-24 bg-gradient-to-r from-transparent via-red-500 to-transparent"></div>
          <p className="mt-5 text-base leading-relaxed text-white/70 sm:text-lg">
            {TEXT}
          </p>
        </div>

        {/* Contact cards */}
        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {ITEMS.map((item, i) => (
            <a
              key={item.id}
              href={item.href}
              target={item.external ? "_blank" : undefined}
              rel={item.external ? "noopener noreferrer" : undefined}
              style={{ transitionDelay: `${150 + i * 120}ms` }}
              className={`cl-reveal relative flex items-center gap-4 overflow-hidden rounded-bl-xl rounded-br-[2rem] rounded-tl-[2rem] rounded-tr-xl border border-white/10 bg-white/[0.04] p-5 transition-all duration-700 active:scale-[0.98] ${
                shown ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
              }`}
            >
              {/* Light sweep (always on, no hover needed) */}
              <span
                aria-hidden="true"
                className="cl-sweep pointer-events-none absolute inset-y-0 -left-1/2 w-1/2 bg-gradient-to-r from-transparent via-white/10 to-transparent"
                style={{ animationDelay: `${i * 0.9}s` }}
              ></span>

              {/* Icon with pulsing ring */}
              <span
                className="relative flex h-14 w-14 shrink-0 items-center justify-center rounded-full text-white"
                style={{ background: item.color }}
              >
                <span
                  aria-hidden="true"
                  className="cl-ring absolute inset-0 rounded-full"
                  style={{ background: item.color, animationDelay: `${i * 0.5}s` }}
                ></span>
                <span className="relative">
                  <Icon name={item.id}></Icon>
                </span>
              </span>

              <span className="relative min-w-0 flex-1">
                <span className="block text-lg font-semibold">{item.label}</span>
                <span className="mt-0.5 block break-all text-sm text-white/60">
                  {item.detail}
                </span>
              </span>

              <svg
                className="cl-nudge relative h-5 w-5 shrink-0 text-white/50"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
