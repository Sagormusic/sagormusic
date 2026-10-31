"use client";

import { useEffect, useRef, useState } from "react";
import SITE, { whatsappLink } from "@/data/site";

// ---------- Content (edit here only) ----------
const TITLE = "Order your music";
const DESCRIPTION =
  "Send us a message with what you want, then pay by bKash or Nagad. Orders are handled directly, no account or checkout needed.";

const STEPS = [
  { title: "Message us", text: "Tell us which album or music you want." },
  { title: "Pay", text: "Send the payment by bKash or Nagad." },
];

const CONTACT_TITLE = "Message us";
const PAYMENT_TITLE = "Pay with";
const SHOP_BUTTON_LABEL = "Visit our shop";
const COPY_LABEL = "Copy";
const COPIED_LABEL = "Copied";

// ---------- Simple icons (inline SVG) ----------
function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="h-6 w-6">
      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
      <path d="M9.5 8.5c0 3 2 5 5 5l1-1.5-1.8-1-.7.7a3 3 0 0 1-1.7-1.7l.7-.7-1-1.8z" fill="currentColor" stroke="none" />
    </svg>
  );
}

function MessengerIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-6 w-6">
      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" fill="currentColor" />
      <path d="M7 13.5 10.5 10l2.5 2.5L17 9" fill="none" stroke="#1877F2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="h-6 w-6">
      <rect x="2" y="4" width="20" height="16" rx="3" />
      <polyline points="22,6 12,13 2,6" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="h-6 w-6">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

// ---------- Data built from the shared site data (empty values are hidden) ----------
const CONTACTS = [
  { label: "WhatsApp", sub: SITE.whatsapp, href: whatsappLink, Icon: WhatsAppIcon, style: "bg-[#25D366] text-black", external: true },
  { label: "Messenger", sub: "Chat on Messenger", href: SITE.messenger, Icon: MessengerIcon, style: "bg-[#1877F2] text-white", external: true },
  { label: "Email", sub: SITE.email, href: SITE.email ? `mailto:${SITE.email}` : "", Icon: MailIcon, style: "bg-white text-black", external: false },
  { label: "Phone", sub: SITE.phone, href: SITE.phone ? `tel:${SITE.phone}` : "", Icon: PhoneIcon, style: "bg-red-600 text-white", external: false },
].filter((c) => c.href);

const PAYMENTS = [
  { name: "bKash", number: SITE.bkash, style: "border-[#E2136E]/60 bg-[#E2136E]/10", dot: "bg-[#E2136E]", btn: "bg-[#E2136E] text-white" },
  { name: "Nagad", number: SITE.nagad, style: "border-[#F6921E]/60 bg-[#F6921E]/10", dot: "bg-[#F6921E]", btn: "bg-[#F6921E] text-black" },
].filter((p) => p.number);

// ---------- Styles and animations (kept inside this file) ----------
// No hover reliance: everything runs on its own or on scroll, which matters on phones.
const CSS = `
  /* Scroll reveal */
  .order-r {
    opacity: 0;
    transform: translateY(24px);
    transition: opacity 0.7s ease, transform 0.7s cubic-bezier(0.22, 1, 0.36, 1);
    transition-delay: var(--d, 0s);
  }
  .order-show .order-r { opacity: 1; transform: none; }

  /* Ripple rings spreading from each contact icon, like a call ringing */
  @keyframes order-ripple {
    0%   { transform: scale(1);   opacity: 0.55; }
    100% { transform: scale(2.1); opacity: 0; }
  }
  .order-ripple { animation: order-ripple 2.4s ease-out infinite; animation-delay: var(--rd, 0s); }

  /* Light sweep across the contact buttons */
  @keyframes order-shine {
    0%   { transform: translateX(-130%) skewX(-20deg); }
    60%, 100% { transform: translateX(380%) skewX(-20deg); }
  }
  .order-shine::after {
    content: "";
    position: absolute;
    inset: 0;
    width: 30%;
    background: linear-gradient(90deg, transparent, rgba(255,255,255,0.45), transparent);
    animation: order-shine 3.8s ease-in-out infinite;
    animation-delay: var(--sd, 0s);
    pointer-events: none;
  }

  /* Dashed line joining the two steps keeps moving */
  @keyframes order-dash { to { background-position: 24px 0; } }
  .order-dash {
    background-image: repeating-linear-gradient(90deg, #dc2626 0 8px, transparent 8px 16px);
    animation: order-dash 1s linear infinite;
  }
  @keyframes order-dash-v { to { background-position: 0 24px; } }
  .order-dash-v {
    background-image: repeating-linear-gradient(180deg, #dc2626 0 8px, transparent 8px 16px);
    animation: order-dash-v 1s linear infinite;
  }

  /* Red glow behind the section breathes */
  @keyframes order-glow {
    0%, 100% { opacity: 0.4; transform: translate(-50%, -50%) scale(1); }
    50%      { opacity: 0.8; transform: translate(-50%, -50%) scale(1.1); }
  }
  .order-glow { animation: order-glow 6s ease-in-out infinite; }

  /* Shop button pulse */
  @keyframes order-pulse {
    0%   { box-shadow: 0 0 0 0 rgba(220, 38, 38, 0.55); }
    70%  { box-shadow: 0 0 0 14px rgba(220, 38, 38, 0); }
    100% { box-shadow: 0 0 0 0 rgba(220, 38, 38, 0); }
  }
  .order-pulse { animation: order-pulse 2.4s ease-out infinite; }

  @media (prefers-reduced-motion: reduce) {
    .order-r { opacity: 1; transform: none; transition: none; }
    .order-ripple, .order-shine::after, .order-dash, .order-dash-v, .order-glow, .order-pulse { animation: none; }
  }
`;

export default function Order() {
  const ref = useRef(null);
  const [show, setShow] = useState(false);
  const [copied, setCopied] = useState("");

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

  // Copy a payment number and show "Copied" for two seconds
  async function copyNumber(name, number) {
    try {
      await navigator.clipboard.writeText(number);
      setCopied(name);
      setTimeout(() => setCopied(""), 2000);
    } catch {
      // Clipboard not available: the number is still visible to copy by hand
    }
  }

  return (
    <section
      ref={ref}
      className={`relative isolate overflow-hidden px-5 py-16 sm:px-8 md:py-24 lg:px-16 ${show ? "order-show" : ""}`}
    >
      <style>{CSS}</style>

      {/* Soft red glow behind the section (decoration only) */}
      <div
        aria-hidden="true"
        className="order-glow pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[24rem] w-[24rem] rounded-full bg-red-600/25 blur-3xl md:h-[36rem] md:w-[36rem]"
      />

      <div className="mx-auto w-full max-w-5xl">
        {/* Heading */}
        <div className="text-center">
          <h2 className="order-r text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl" style={{ "--d": "0.05s" }}>
            {TITLE}
          </h2>
          <p
            className="order-r mx-auto mt-4 max-w-prose text-base leading-relaxed text-white/70 lg:text-lg"
            style={{ "--d": "0.15s" }}
          >
            {DESCRIPTION}
          </p>
        </div>

        {/* Steps: a real sequence, joined by a moving dashed line */}
        <div className="mx-auto mt-10 flex max-w-2xl flex-col items-stretch sm:flex-row sm:items-center">
          {STEPS.map((step, i) => (
            <div key={step.title} className="contents">
              <div
                className="order-r flex flex-1 items-center gap-4 rounded-2xl border border-white/10 bg-white/5 px-5 py-4"
                style={{ "--d": `${0.25 + i * 0.15}s` }}
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-red-600 font-[family-name:var(--font-heading)] text-xl font-bold">
                  {i + 1}
                </span>
                <div className="text-left">
                  <p className="font-semibold">{step.title}</p>
                  <p className="text-sm text-white/60">{step.text}</p>
                </div>
              </div>
              {i < STEPS.length - 1 && (
                <>
                  <span aria-hidden="true" className="order-dash-v mx-auto h-6 w-0.5 sm:hidden" />
                  <span aria-hidden="true" className="order-dash mx-2 hidden h-0.5 w-10 shrink-0 sm:block" />
                </>
              )}
            </div>
          ))}
        </div>

        {/* Contact buttons (hidden when no value is set in site.js) */}
        {CONTACTS.length > 0 && (
          <div className="mt-14">
            <h3 className="order-r text-center text-2xl font-semibold sm:text-3xl" style={{ "--d": "0.1s" }}>
              {CONTACT_TITLE}
            </h3>
            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {CONTACTS.map(({ label, sub, href, Icon, style, external }, i) => (
                <div key={label} className="order-r" style={{ "--d": `${0.15 + i * 0.1}s` }}>
                  <a
                    href={href}
                    {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                    style={{ "--sd": `${i * 0.9}s` }}
                    className={`order-shine relative flex items-center gap-4 overflow-hidden rounded-2xl px-5 py-4 font-semibold transition active:scale-95 hover:brightness-110 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white ${style}`}
                  >
                    <span className="relative flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-black/15">
                      <span
                        aria-hidden="true"
                        className="order-ripple absolute inset-0 rounded-full border-2 border-current"
                        style={{ "--rd": `${i * 0.6}s` }}
                      />
                      <Icon />
                    </span>
                    <span className="min-w-0">
                      <span className="block text-base">{label}</span>
                      {sub && <span className="block truncate text-sm font-normal opacity-75">{sub}</span>}
                    </span>
                  </a>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Payment numbers (hidden until bKash / Nagad numbers are filled in site.js) */}
        {PAYMENTS.length > 0 && (
          <div className="mt-14">
            <h3 className="order-r text-center text-2xl font-semibold sm:text-3xl" style={{ "--d": "0.1s" }}>
              {PAYMENT_TITLE}
            </h3>
            <div className="mx-auto mt-6 grid max-w-3xl gap-4 sm:grid-cols-2">
              {PAYMENTS.map((p, i) => (
                <div
                  key={p.name}
                  className={`order-r flex items-center justify-between gap-3 rounded-2xl border px-5 py-4 ${p.style}`}
                  style={{ "--d": `${0.15 + i * 0.1}s` }}
                >
                  <div className="min-w-0">
                    <p className="flex items-center gap-2 font-semibold">
                      <span aria-hidden="true" className={`h-2.5 w-2.5 rounded-full ${p.dot}`} />
                      {p.name}
                    </p>
                    <p className="mt-1 truncate text-lg tracking-wide text-white">{p.number}</p>
                  </div>
                  <button
                    type="button"
                    onClick={() => copyNumber(p.name, p.number)}
                    className={`shrink-0 rounded-full px-4 py-2 text-sm font-semibold transition active:scale-95 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white ${p.btn}`}
                  >
                    {copied === p.name ? COPIED_LABEL : COPY_LABEL}
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Existing Fourthwall shop */}
        {SITE.shopUrl && (
          <div className="order-r mt-12 text-center" style={{ "--d": "0.2s" }}>
            <a
              href={SITE.shopUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="order-pulse inline-block rounded-full bg-red-600 px-8 py-3 text-sm font-semibold text-white transition active:scale-95 hover:bg-red-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              {SHOP_BUTTON_LABEL}
            </a>
          </div>
        )}
      </div>
    </section>
  );
}
