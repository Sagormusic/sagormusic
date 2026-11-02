"use client";

import { useEffect, useRef, useState } from "react";
import SITE, { whatsappLink } from "@/data/site";

// ---------- Content (edit here) ----------
const TITLE = "Contact details";
const TEXT = "Open any option, or copy the detail and reach out your own way.";

// Local number -> international format for tel: links (Bangladesh +880)
const phoneHref = SITE.phone
  ? `tel:+880${SITE.phone.replace(/^0/, "")}`
  : "";

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

function CopyIcon({ className }) {
  return (
    <Stroke className={className}>
      <rect x="9" y="9" width="13" height="13" rx="2" />
      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
    </Stroke>
  );
}

function CheckIcon({ className }) {
  return (
    <Stroke className={className}>
      <path d="M20 6 9 17l-5-5" />
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

// On a computer mailto: often opens nothing, so open Gmail instead. On a phone use the mail app.
function isMobile() {
  return (
    typeof navigator !== "undefined" &&
    /Android|iPhone|iPad|iPod/i.test(navigator.userAgent)
  );
}

function gmailCompose() {
  return `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
    SITE.email
  )}`;
}

// ---------- Rows (items with an empty value in site.js are hidden) ----------
const ROWS = [
  {
    key: "whatsapp",
    label: "WhatsApp",
    value: SITE.whatsapp,
    copy: SITE.whatsapp,
    href: whatsappLink,
    openLabel: "Open WhatsApp",
    Logo: WhatsAppIcon,
    OpenButtonIcon: OpenIcon,
    circle: "bg-white",
    external: true,
  },
  {
    key: "messenger",
    label: "Messenger",
    value: (SITE.messenger || "").replace(/^https?:\/\//, ""),
    copy: SITE.messenger,
    href: SITE.messenger,
    openLabel: "Open Messenger",
    Logo: MessengerIcon,
    OpenButtonIcon: OpenIcon,
    circle: "bg-white",
    external: true,
  },
  {
    key: "phone",
    label: "Phone",
    value: SITE.phone,
    copy: SITE.phone,
    href: phoneHref,
    openLabel: "Call",
    Logo: PhoneIcon,
    OpenButtonIcon: PhoneIcon,
    circle: "bg-red-600 text-white",
    external: false,
  },
  {
    key: "email",
    label: "Email",
    value: SITE.email,
    copy: SITE.email,
    href: SITE.email ? `mailto:${SITE.email}` : "",
    openLabel: "Send email",
    Logo: MailIcon,
    OpenButtonIcon: OpenIcon,
    circle: "bg-white text-black",
    external: false,
    isEmail: true,
  },
].filter((row) => row.value && row.href);

const iconBtn =
  "inline-flex h-11 w-11 items-center justify-center rounded-xl transition active:scale-95 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#E8C27A]";

export default function Links() {
  const ref = useRef(null);
  const timer = useRef(null);
  const [shown, setShown] = useState(false);
  const [copiedKey, setCopiedKey] = useState(null);
  const [announce, setAnnounce] = useState("");

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

  useEffect(() => () => clearTimeout(timer.current), []);

  if (ROWS.length === 0) return null;

  async function handleCopy(row) {
    const ok = await copyText(row.copy);
    clearTimeout(timer.current);
    if (ok) {
      setCopiedKey(row.key);
      setAnnounce(`${row.label} copied`);
      timer.current = setTimeout(() => setCopiedKey(null), 1800);
    } else {
      setAnnounce("Could not copy automatically. Please select and copy it by hand.");
    }
  }

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 motion-reduce:transition-none ${
        shown ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
      }`}
    >
      {/* Glass card */}
      <div className="relative rounded-3xl border border-white/15 bg-white/[0.07] p-5 shadow-[0_8px_40px_rgba(0,0,0,0.35)] ring-1 ring-inset ring-white/10 backdrop-blur-2xl sm:p-7">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-br from-white/15 via-transparent to-transparent"
        ></div>

        <div className="relative">
          <h2 className="text-2xl font-medium">{TITLE}</h2>
          <p className="mt-1 text-sm text-white/60">{TEXT}</p>

          <div className="mt-5 space-y-3">
            {ROWS.map((row, i) => (
              <div
                key={row.key}
                style={{ transitionDelay: `${150 + i * 100}ms` }}
                className={`flex flex-wrap items-center gap-x-3.5 gap-y-3 rounded-2xl border border-white/10 bg-white/[0.05] p-3.5 transition-all duration-700 motion-reduce:transition-none sm:p-4 ${
                  shown ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
                }`}
              >
                <span
                  className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-full ${row.circle}`}
                >
                  <row.Logo className="h-6 w-6"></row.Logo>
                </span>

                <div className="min-w-0 flex-1 basis-40">
                  <p className="text-xs text-white/55">{row.label}</p>
                  <p className="break-all text-base font-medium sm:text-lg">
                    {row.value}
                  </p>
                </div>

                <div className="ml-auto flex shrink-0 gap-2">
                  <button
                    type="button"
                    onClick={() => handleCopy(row)}
                    aria-label={`Copy ${row.label}`}
                    title={copiedKey === row.key ? "Copied" : "Copy"}
                    className={`${iconBtn} ${
                      copiedKey === row.key
                        ? "bg-[#E8C27A] text-black"
                        : "bg-white/10 text-white"
                    }`}
                  >
                    {copiedKey === row.key ? (
                      <CheckIcon className="h-[18px] w-[18px]"></CheckIcon>
                    ) : (
                      <CopyIcon className="h-[18px] w-[18px]"></CopyIcon>
                    )}
                  </button>

                  <a
                    href={row.href}
                    {...(row.external
                      ? { target: "_blank", rel: "noopener noreferrer" }
                      : {})}
                    onClick={
                      row.isEmail
                        ? (e) => {
                            if (!isMobile()) {
                              e.preventDefault();
                              window.open(gmailCompose(), "_blank", "noopener,noreferrer");
                            }
                          }
                        : undefined
                    }
                    aria-label={row.openLabel}
                    title={row.openLabel}
                    className={`${iconBtn} bg-[#E8C27A] text-black`}
                  >
                    <row.OpenButtonIcon className="h-[18px] w-[18px]"></row.OpenButtonIcon>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <p className="sr-only" aria-live="polite">
        {announce}
      </p>
    </div>
  );
}
