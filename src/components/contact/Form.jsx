"use client";

import { useEffect, useRef, useState } from "react";
import SITE, { whatsappLink } from "@/data/site";

// ---------- Content (edit here) ----------
const TITLE = "Send a message";
const TEXT = "Pick where you want to send it.";
const NAME_LABEL = "Your name";
const NAME_OPTIONAL = "(optional)";
const NAME_PLACEHOLDER = "Your name";
const MESSAGE_LABEL = "Message";
const MESSAGE_PLACEHOLDER = "Write your message here...";
const NAME_MAX = 60;
const MESSAGE_MAX = 1000;

// ---------- Icons (official WhatsApp and Messenger logos, same as the Order section) ----------
function WhatsAppIcon({ className = "h-6 w-6" }) {
  return (
    <svg viewBox="0 0 24 24" fill="#25D366" aria-hidden="true" className={className}>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

function MessengerIcon({ className = "h-6 w-6" }) {
  return (
    <svg viewBox="0 0 24 24" fill="#1877F2" aria-hidden="true" className={className}>
      <path d="M12 0C5.373 0 0 4.974 0 11.111c0 3.498 1.744 6.614 4.469 8.654V24l4.088-2.242c1.092.3 2.246.464 3.443.464 6.627 0 12-4.974 12-11.111C24 4.974 18.627 0 12 0zm1.191 14.963l-3.055-3.26-5.963 3.26L10.732 8l3.131 3.259L19.752 8l-6.561 6.963z" />
    </svg>
  );
}

function MailIcon({ className = "h-6 w-6" }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className={className}>
      <rect x="2" y="4" width="20" height="16" rx="3" />
      <polyline points="22,6 12,13 2,6" />
    </svg>
  );
}

function PhoneIcon({ className = "h-6 w-6" }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className={className}>
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

function SendIcon({ className = "h-5 w-5" }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className={className}>
      <path d="m22 2-7 20-4-9-9-4z" />
      <path d="M22 2 11 13" />
    </svg>
  );
}

// Channels without data in site.js are hidden automatically
const CHANNELS = [
  {
    id: "whatsapp",
    label: "WhatsApp",
    Icon: WhatsAppIcon,
    cta: "Send on WhatsApp",
    hint: "Opens WhatsApp with your message ready to send.",
    available: Boolean(whatsappLink),
  },
  {
    id: "messenger",
    label: "Messenger",
    Icon: MessengerIcon,
    cta: "Copy & open Messenger",
    hint: "Messenger can't pre-fill text, so your message is copied. Just paste it in the chat.",
    available: Boolean(SITE.messenger),
  },
  {
    id: "email",
    label: "Email",
    Icon: MailIcon,
    cta: "Open email",
    hint: "Opens Gmail on a computer, or your email app on a phone, with the message filled in.",
    available: Boolean(SITE.email),
  },
].filter((channel) => channel.available);

// ---------- Helpers ----------
async function copyText(text) {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch {
    try {
      const ta = document.createElement("textarea");
      ta.value = text;
      ta.style.position = "fixed";
      ta.style.opacity = "0";
      document.body.appendChild(ta);
      ta.select();
      const ok = document.execCommand("copy");
      document.body.removeChild(ta);
      return ok;
    } catch {
      return false;
    }
  }
}

function isMobile() {
  return (
    typeof navigator !== "undefined" &&
    /Android|iPhone|iPad|iPod/i.test(navigator.userAgent)
  );
}

function gmailCompose(subject, body) {
  return `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
    SITE.email
  )}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

const inputClass =
  "w-full rounded-2xl border border-white/15 bg-white/5 px-4 py-3 text-base text-white placeholder-white/35 outline-none transition focus:border-[#E8C27A]/60 focus:bg-white/10";

export default function Form() {
  const ref = useRef(null);
  const [shown, setShown] = useState(false);
  const [channelId, setChannelId] = useState(CHANNELS[0]?.id);
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");

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

  if (CHANNELS.length === 0) return null;

  const current = CHANNELS.find((c) => c.id === channelId) || CHANNELS[0];

  async function handleSend(event) {
    event.preventDefault();
    if (!message.trim()) return;

    const cleanName = name.trim();
    const who = cleanName
      ? `Hi ${SITE.shortName}, I'm ${cleanName}.`
      : `Hi ${SITE.shortName},`;
    const text = `${who}\n\n${message.trim()}`;

    if (current.id === "whatsapp") {
      window.open(
        `${whatsappLink}?text=${encodeURIComponent(text)}`,
        "_blank",
        "noopener,noreferrer"
      );
      setStatus("WhatsApp opened in a new tab.");
    } else if (current.id === "email") {
      const subject = `Message for ${SITE.shortName}`;
      if (isMobile()) {
        window.location.href = `mailto:${SITE.email}?subject=${encodeURIComponent(
          subject
        )}&body=${encodeURIComponent(text)}`;
        setStatus("Your email app should open now.");
      } else {
        window.open(gmailCompose(subject, text), "_blank", "noopener,noreferrer");
        setStatus("Gmail opened in a new tab.");
      }
    } else {
      // Do not await before window.open, or the browser may block the new tab
      const copied = copyText(text);
      window.open(SITE.messenger, "_blank", "noopener,noreferrer");
      setStatus(
        (await copied)
          ? "Message copied. Paste it in Messenger."
          : "Messenger opened. Please type your message there."
      );
    }
  }

  return (
    <div
      ref={ref}
      style={{ transitionDelay: "150ms" }}
      className={`relative rounded-3xl border border-white/15 bg-white/[0.07] p-5 shadow-[0_8px_40px_rgba(0,0,0,0.35)] ring-1 ring-inset ring-white/10 backdrop-blur-2xl transition-all duration-700 motion-reduce:transition-none sm:p-7 ${
        shown ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
      }`}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-br from-white/15 via-transparent to-transparent"
      ></div>

      <div className="relative">
        <h2 className="text-2xl font-medium">{TITLE}</h2>
        <p className="mt-1 text-sm text-white/60">{TEXT}</p>

        {/* Channel choice */}
        <div
          className="mt-5 grid gap-1 rounded-full bg-white/10 p-1"
          style={{
            gridTemplateColumns: `repeat(${CHANNELS.length}, minmax(0, 1fr))`,
          }}
        >
          {CHANNELS.map(({ id, label, Icon }) => (
            <button
              key={id}
              type="button"
              onClick={() => {
                setChannelId(id);
                setStatus("");
              }}
              aria-pressed={current.id === id}
              className={`flex items-center justify-center gap-2 rounded-full px-2 py-2.5 text-sm font-medium transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#E8C27A] ${
                current.id === id ? "bg-white text-black" : "text-white/70"
              }`}
            >
              <Icon className="h-4 w-4 shrink-0"></Icon>
              <span className="truncate">{label}</span>
            </button>
          ))}
        </div>

        <form onSubmit={handleSend} className="mt-6 space-y-4">
          <div>
            <label htmlFor="contact-name" className="mb-1.5 block text-sm text-white/70">
              {NAME_LABEL} <span className="text-white/40">{NAME_OPTIONAL}</span>
            </label>
            <input
              id="contact-name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              maxLength={NAME_MAX}
              autoComplete="name"
              placeholder={NAME_PLACEHOLDER}
              className={inputClass}
            />
          </div>

          <div>
            <label htmlFor="contact-message" className="mb-1.5 block text-sm text-white/70">
              {MESSAGE_LABEL}
            </label>
            <textarea
              id="contact-message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              maxLength={MESSAGE_MAX}
              rows={5}
              placeholder={MESSAGE_PLACEHOLDER}
              className={`${inputClass} resize-none`}
            />
          </div>

          <button
            type="submit"
            disabled={!message.trim()}
            className="flex w-full items-center justify-center gap-2.5 rounded-full bg-gradient-to-r from-[#F3D9A0] to-[#D9A441] px-6 py-3.5 text-base font-semibold text-[#1b1406] transition active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#E8C27A] disabled:cursor-not-allowed disabled:opacity-50"
          >
            <SendIcon></SendIcon>
            {current.cta}
          </button>

          <p className="text-sm text-white/55">{current.hint}</p>
          {status && (
            <p role="status" className="text-sm font-medium text-[#E8C27A]">
              {status}
            </p>
          )}
        </form>
      </div>
    </div>
  );
}
