"use client";

import { useEffect, useRef, useState } from "react";
import SITE, { whatsappLink } from "@/data/site";

// ---------- Content (edit here) ----------
const LABEL = "Message";
const TITLE = "Send a message";
const TEXT =
  "Write your message, choose where to send it, and tap send. Nothing is stored on this website.";
const NAME_LABEL = "Your name";
const MESSAGE_LABEL = "Your message";
const FILL_ERROR = "Please write your name and your message first.";
const NAME_MAX = 60;
const MESSAGE_MAX = 1000;

// Channels without data in site.js are hidden automatically
const CHANNELS = [
  {
    id: "whatsapp",
    label: "WhatsApp",
    color: "#25D366",
    hint: "Opens WhatsApp with your message ready to send.",
    available: Boolean(whatsappLink),
  },
  {
    id: "messenger",
    label: "Messenger",
    color: "#0A84FF",
    hint: "Opens Messenger. Your message is copied, just paste it in the chat.",
    available: Boolean(SITE.messenger),
  },
  {
    id: "email",
    label: "Email",
    color: "#E11D2E",
    hint: "Opens your email app with the message filled in.",
    available: Boolean(SITE.email),
  },
].filter((channel) => channel.available);

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
      { threshold: 0.1 }
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

function Icon({ name, size = 22 }) {
  const common = {
    width: size,
    height: size,
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
  // send (paper plane)
  return (
    <svg {...common}>
      <path d="M22 2 11 13" />
      <path d="M22 2 15 22 11 13 2 9 22 2z" />
    </svg>
  );
}

export default function Form() {
  const [ref, shown] = useReveal();
  const [channelId, setChannelId] = useState(CHANNELS[0]?.id);
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [note, setNote] = useState({ type: "", text: "" });

  if (CHANNELS.length === 0) return null;

  const channel = CHANNELS.find((c) => c.id === channelId) || CHANNELS[0];

  function handleSubmit(event) {
    event.preventDefault();

    const cleanName = name.trim();
    const cleanMessage = message.trim();

    if (!cleanName || !cleanMessage) {
      setNote({ type: "error", text: FILL_ERROR });
      return;
    }

    const text = `Hi, I'm ${cleanName}.\n\n${cleanMessage}`;

    if (channel.id === "whatsapp") {
      window.open(
        `${whatsappLink}?text=${encodeURIComponent(text)}`,
        "_blank",
        "noopener,noreferrer"
      );
      setNote({ type: "info", text: "Opening WhatsApp..." });
      return;
    }

    if (channel.id === "email") {
      const subject = `Message from ${cleanName}`;
      window.location.href = `mailto:${SITE.email}?subject=${encodeURIComponent(
        subject
      )}&body=${encodeURIComponent(text)}`;
      setNote({ type: "info", text: "Opening your email app..." });
      return;
    }

    // Messenger links cannot carry text, so copy the message first, then open the chat.
    // Copy starts before window.open so it still counts as part of the tap.
    let copyPromise;
    try {
      copyPromise = navigator.clipboard.writeText(text);
    } catch {
      copyPromise = Promise.reject();
    }
    window.open(SITE.messenger, "_blank", "noopener,noreferrer");
    copyPromise
      .then(() =>
        setNote({
          type: "info",
          text: "Message copied. Paste it in the Messenger chat.",
        })
      )
      .catch(() =>
        setNote({
          type: "info",
          text: "Messenger cannot receive text automatically. Copy your message and paste it in the chat.",
        })
      );
  }

  const inputClass =
    "w-full rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3.5 text-base text-white placeholder:text-white/35 outline-none transition-colors focus:border-red-500/70";

  return (
    <section className="relative px-4 pb-16 pt-6 sm:pb-24">
      <style>{`
        @keyframes cf-flow {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        @keyframes cf-pulse {
          0% { box-shadow: 0 0 0 0 color-mix(in srgb, var(--c) 45%, transparent); }
          70%, 100% { box-shadow: 0 0 0 12px transparent; }
        }
        @keyframes cf-sweep {
          0% { transform: translateX(-120%); }
          55%, 100% { transform: translateX(520%); }
        }
        .cf-flow {
          background: linear-gradient(120deg, rgba(225,29,46,0.85), rgba(255,255,255,0.08), rgba(225,29,46,0.85));
          background-size: 300% 300%;
          animation: cf-flow 8s ease-in-out infinite;
        }
        .cf-pulse { animation: cf-pulse 2.4s ease-out infinite; }
        .cf-sweep { animation: cf-sweep 4.5s ease-in-out infinite; }
        @media (prefers-reduced-motion: reduce) {
          .cf-flow, .cf-pulse, .cf-sweep { animation: none !important; }
          .cf-reveal { transition: none !important; }
        }
      `}</style>

      <div
        ref={ref}
        className={`cf-reveal mx-auto max-w-2xl transition-all duration-700 ${
          shown ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
        }`}
      >
        {/* Header */}
        <div className="mb-8 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-red-500">
            {LABEL}
          </p>
          <h2 className="mt-3 text-4xl font-semibold sm:text-5xl">{TITLE}</h2>
          <p className="mt-4 text-base leading-relaxed text-white/70">{TEXT}</p>
        </div>

        {/* Card with slowly moving red border */}
        <div className="cf-flow rounded-bl-2xl rounded-br-[2.5rem] rounded-tl-[2.5rem] rounded-tr-2xl p-px">
          <form
            onSubmit={handleSubmit}
            className="rounded-bl-2xl rounded-br-[2.5rem] rounded-tl-[2.5rem] rounded-tr-2xl bg-neutral-950 p-5 sm:p-8"
          >
            {/* Channel choice */}
            <p className="text-sm font-medium text-white/70">Send via</p>
            <div
              role="radiogroup"
              aria-label="Send via"
              className="mt-3 grid gap-2"
              style={{
                gridTemplateColumns: `repeat(${CHANNELS.length}, minmax(0, 1fr))`,
              }}
            >
              {CHANNELS.map((c) => {
                const active = c.id === channel.id;
                return (
                  <button
                    key={c.id}
                    type="button"
                    role="radio"
                    aria-checked={active}
                    onClick={() => {
                      setChannelId(c.id);
                      setNote({ type: "", text: "" });
                    }}
                    className={`flex flex-col items-center justify-center gap-1.5 rounded-2xl border px-2 py-3 text-xs font-semibold transition-colors sm:flex-row sm:gap-2 sm:text-sm ${
                      active
                        ? "cf-pulse text-white"
                        : "border-white/10 bg-white/[0.03] text-white/60"
                    }`}
                    style={
                      active
                        ? {
                            "--c": c.color,
                            borderColor: c.color,
                            background: `${c.color}26`,
                          }
                        : undefined
                    }
                  >
                    <Icon name={c.id}></Icon>
                    {c.label}
                  </button>
                );
              })}
            </div>
            <p className="mt-3 text-sm text-white/55">{channel.hint}</p>

            {/* Fields */}
            <div className="mt-6">
              <label
                htmlFor="contact-name"
                className="mb-2 block text-sm font-medium text-white/70"
              >
                {NAME_LABEL}
              </label>
              <input
                id="contact-name"
                type="text"
                value={name}
                maxLength={NAME_MAX}
                autoComplete="name"
                required
                onChange={(e) => setName(e.target.value)}
                className={inputClass}
              />
            </div>

            <div className="mt-5">
              <label
                htmlFor="contact-message"
                className="mb-2 block text-sm font-medium text-white/70"
              >
                {MESSAGE_LABEL}
              </label>
              <textarea
                id="contact-message"
                rows={5}
                value={message}
                maxLength={MESSAGE_MAX}
                required
                onChange={(e) => setMessage(e.target.value)}
                className={`${inputClass} resize-none`}
              />
            </div>

            {/* Send button */}
            <button
              type="submit"
              className="cf-pulse relative mt-6 flex w-full items-center justify-center gap-2 overflow-hidden rounded-full bg-red-600 px-6 py-4 text-base font-semibold text-white active:scale-[0.98]"
              style={{ "--c": "#E11D2E" }}
            >
              <span
                aria-hidden="true"
                className="cf-sweep pointer-events-none absolute inset-y-0 left-0 w-1/5 bg-gradient-to-r from-transparent via-white/25 to-transparent"
              ></span>
              <span className="relative">Send on {channel.label}</span>
              <span className="relative">
                <Icon name="send" size={20}></Icon>
              </span>
            </button>

            <p
              role="status"
              aria-live="polite"
              className={`mt-4 min-h-[1.25rem] text-center text-sm ${
                note.type === "error" ? "text-red-400" : "text-white/70"
              }`}
            >
              {note.text}
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
