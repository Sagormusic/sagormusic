import Image from "next/image";
import Link from "next/link";
import SITE, { whatsappLink } from "@/data/site";

// ---------- Content (edit here only) ----------
const LOGO_SRC = "/logo.jpeg";

const ABOUT_TEXT =
  "A creative music label dedicated to discovering talent, creating beautiful music, and bringing artists and music lovers together.";

const CTA_TITLE = "Want an album or a custom track?";
const CTA_TEXT = "Message us on WhatsApp or order from the shop.";

const PAGES = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Music", href: "/music" },
  { label: "Artists", href: "/artists" },
  { label: "Shop", href: "/shop" },
  { label: "Services", href: "/services" },
  { label: "Contact", href: "/contact" },
];

// ---------- Icons (inline SVG) ----------
const line = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

const ICONS = {
  youtube: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-[18px] w-[18px]">
      <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.6 12 3.6 12 3.6s-7.5 0-9.4.5A3 3 0 0 0 .5 6.2C0 8.1 0 12 0 12s0 3.9.5 5.8a3 3 0 0 0 2.1 2.1c1.9.5 9.4.5 9.4.5s7.5 0 9.4-.5a3 3 0 0 0 2.1-2.1c.5-1.9.5-5.8.5-5.8s0-3.9-.5-5.8zM9.6 15.6V8.4l6.2 3.6-6.2 3.6z" />
    </svg>
  ),
  facebook: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-[18px] w-[18px]">
      <path d="M24 12a12 12 0 1 0-13.9 11.9v-8.4H7.1V12h3V9.4c0-3 1.8-4.7 4.5-4.7 1.3 0 2.7.2 2.7.2v3h-1.5c-1.5 0-2 .9-2 1.9V12h3.4l-.5 3.5h-2.9v8.4A12 12 0 0 0 24 12z" />
    </svg>
  ),
  instagram: (
    <svg viewBox="0 0 24 24" {...line} className="h-[18px] w-[18px]">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
    </svg>
  ),
  spotify: (
    <svg viewBox="0 0 24 24" {...line} className="h-[18px] w-[18px]">
      <circle cx="12" cy="12" r="10" />
      <path d="M7 9.5c3.5-1 7-.7 10 1" />
      <path d="M7.5 12.5c3-.8 6-.5 8.5 1" />
      <path d="M8 15.5c2.5-.6 5-.4 7 .8" />
    </svg>
  ),
  chat: (
    <svg viewBox="0 0 24 24" {...line} className="h-[18px] w-[18px]">
      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
    </svg>
  ),
  mail: (
    <svg viewBox="0 0 24 24" {...line} className="h-[18px] w-[18px]">
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m22 7-10 5L2 7" />
    </svg>
  ),
  phone: (
    <svg viewBox="0 0 24 24" {...line} className="h-[18px] w-[18px]">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  ),
};

// Items with an empty value are hidden automatically
const SOCIAL = [
  { label: "YouTube (Label)", icon: "youtube", href: SITE.social.youtubeLabel },
  { label: "YouTube (Rafiul Islam)", icon: "youtube", href: SITE.social.youtubeRafiul },
  { label: "Facebook", icon: "facebook", href: SITE.social.facebook },
  { label: "Instagram", icon: "instagram", href: SITE.social.instagram },
  { label: "Spotify", icon: "spotify", href: SITE.social.spotify },
].filter((s) => s.href);

const CONTACT = [
  { label: "WhatsApp", text: SITE.whatsapp, href: whatsappLink, icon: "chat" },
  { label: "Messenger", text: SITE.messenger && "Chat with us", href: SITE.messenger, icon: "chat" },
  { label: "Email", text: SITE.email, href: SITE.email && `mailto:${SITE.email}`, icon: "mail" },
  { label: "Phone", text: SITE.phone, href: SITE.phone && `tel:${SITE.phone}`, icon: "phone" },
].filter((c) => c.text && c.href);

const PAYMENTS = [
  { label: "bKash", number: SITE.bkash },
  { label: "Nagad", number: SITE.nagad },
].filter((p) => p.number);

const HEADING =
  "mb-5 text-sm font-semibold uppercase tracking-[0.2em] text-white";

const ext = (href) =>
  href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {};

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-red-600/40 bg-neutral-950">
      {/* Top red accent line */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-red-500 to-transparent" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Call to action bar */}
        <div className="flex flex-col gap-5 border-b border-white/10 py-10 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="text-2xl font-semibold sm:text-3xl">{CTA_TITLE}</h2>
            <p className="mt-1 text-sm text-white/60">{CTA_TEXT}</p>
          </div>
          <div className="flex flex-wrap gap-3">
            {whatsappLink && (
              <a
                href={whatsappLink}
                {...ext(whatsappLink)}
                className="rounded-full bg-red-600 px-6 py-3 text-sm font-semibold text-white"
              >
                WhatsApp Us
              </a>
            )}
            <a
              href={SITE.shopUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-white/25 px-6 py-3 text-sm font-semibold text-white"
            >
              Visit Shop
            </a>
          </div>
        </div>

        {/* Main columns */}
        <div className="grid gap-10 py-12 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1.3fr_1fr]">
          {/* Brand */}
          <div>
            <Link href="/" className="inline-flex items-center gap-3">
              <Image
                src={LOGO_SRC}
                alt={SITE.shortName}
                width={48}
                height={48}
                className="h-12 w-12 rounded-full border border-white/20 object-cover"
              />
              <span className="font-[family-name:var(--font-heading)] text-2xl font-semibold">
                {SITE.shortName}
              </span>
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/60">
              {ABOUT_TEXT}
            </p>
            <div className="mt-5 flex flex-wrap gap-2.5">
              {SOCIAL.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  {...ext(s.href)}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white/80"
                >
                  {ICONS[s.icon]}
                </a>
              ))}
            </div>
          </div>

          {/* Pages */}
          <div>
            <h3 className={HEADING}>Pages</h3>
            <ul className="grid grid-cols-2 gap-x-4 gap-y-3 sm:grid-cols-1">
              {PAGES.map((p) => (
                <li key={p.href}>
                  <Link
                    href={p.href}
                    className="flex items-center gap-2 text-sm text-white/65"
                  >
                    <span className="h-1 w-1 rounded-full bg-red-500" />
                    {p.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className={HEADING}>Contact</h3>
            <ul className="space-y-4">
              {CONTACT.map((c) => (
                <li key={c.label}>
                  <a
                    href={c.href}
                    {...ext(c.href)}
                    className="flex items-start gap-3"
                  >
                    <span className="mt-0.5 text-red-500">{ICONS[c.icon]}</span>
                    <span className="min-w-0">
                      <span className="block text-xs text-white/40">
                        {c.label}
                      </span>
                      <span className="block break-all text-sm text-white/80">
                        {c.text}
                      </span>
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Payment */}
          {PAYMENTS.length > 0 && (
            <div>
              <h3 className={HEADING}>We Accept</h3>
              <ul className="space-y-3">
                {PAYMENTS.map((p) => (
                  <li
                    key={p.label}
                    className="rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3"
                  >
                    <span className="block text-sm font-semibold text-white">
                      {p.label}
                    </span>
                    <span className="block text-sm text-white/60">
                      {p.number}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Big watermark text: in normal flow so it always fits fully on phones */}
        <div
          aria-hidden="true"
          className="select-none pb-2 text-center font-[family-name:var(--font-heading)] text-[13vw] font-bold uppercase leading-none tracking-wide text-white/[0.07] sm:text-[10vw] lg:text-[8rem]"
          style={{
            WebkitMaskImage: "linear-gradient(to bottom, #000 30%, transparent)",
            maskImage: "linear-gradient(to bottom, #000 30%, transparent)",
          }}
        >
          Sagor Music
        </div>

        {/* Bottom bar (extra space on mobile for the bottom tab bar) */}
        <div className="flex flex-col items-center justify-between gap-2 border-t border-white/10 py-6 pb-24 text-xs text-white/40 sm:flex-row md:pb-6">
          <p>
            © {new Date().getFullYear()} {SITE.name}. All rights reserved.
          </p>
          <p>Made with love for music</p>
        </div>
      </div>
    </footer>
  );
}
