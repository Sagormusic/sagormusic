import Image from "next/image";
import Link from "next/link";
import SITE, { whatsappLink } from "@/data/site";

// ---------- Content (edit here only) ----------
const LOGO_SRC = "/logo.jpeg";

const ABOUT_TEXT =
  "A creative music label dedicated to discovering talent, creating beautiful music, and bringing artists and music lovers together.";

const CTA_TITLE = "Want an album or a custom track?";
const CTA_TEXT = "Message us on WhatsApp or order from the shop.";

// Developer credit
const DEV_NAME = "Saiful Islam";
const DEV_SITE = "https://saiful-developer.vercel.app/";
const DEV_GITHUB = "https://github.com/saiful-global";

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
  // Social icons use official brand colors (they sit on a white circle).
  youtube: (
    <svg viewBox="0 0 24 24" fill="#FF0000" className="h-6 w-6">
      <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.6 12 3.6 12 3.6s-7.5 0-9.4.5A3 3 0 0 0 .5 6.2C0 8.1 0 12 0 12s0 3.9.5 5.8a3 3 0 0 0 2.1 2.1c1.9.5 9.4.5 9.4.5s7.5 0 9.4-.5a3 3 0 0 0 2.1-2.1c.5-1.9.5-5.8.5-5.8s0-3.9-.5-5.8zM9.6 15.6V8.4l6.2 3.6-6.2 3.6z" />
    </svg>
  ),
  facebook: (
    <svg viewBox="0 0 24 24" fill="#1877F2" className="h-6 w-6">
      <path d="M24 12a12 12 0 1 0-13.9 11.9v-8.4H7.1V12h3V9.4c0-3 1.8-4.7 4.5-4.7 1.3 0 2.7.2 2.7.2v3h-1.5c-1.5 0-2 .9-2 1.9V12h3.4l-.5 3.5h-2.9v8.4A12 12 0 0 0 24 12z" />
    </svg>
  ),
  instagram: (
    <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6">
      <defs>
        {/* Instagram brand gradient */}
        <linearGradient
          id="footer-ig-grad"
          gradientUnits="userSpaceOnUse"
          x1="3"
          y1="21"
          x2="21"
          y2="3"
        >
          <stop offset="0" stopColor="#FEDA75" />
          <stop offset="0.3" stopColor="#FA7E1E" />
          <stop offset="0.55" stopColor="#D62976" />
          <stop offset="0.8" stopColor="#962FBF" />
          <stop offset="1" stopColor="#4F5BD5" />
        </linearGradient>
      </defs>
      <rect
        x="3"
        y="3"
        width="18"
        height="18"
        rx="5"
        stroke="url(#footer-ig-grad)"
        strokeWidth="2"
      />
      <circle
        cx="12"
        cy="12"
        r="4"
        stroke="url(#footer-ig-grad)"
        strokeWidth="2"
      />
      <circle cx="17.5" cy="6.5" r="1.2" fill="url(#footer-ig-grad)" />
    </svg>
  ),
  spotify: (
    <svg viewBox="0 0 24 24" className="h-6 w-6">
      <circle cx="12" cy="12" r="12" fill="#1DB954" />
      <g
        fill="none"
        stroke="#fff"
        strokeWidth="1.9"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M5.8 8.6c4.2-1.2 8.6-.8 12.2 1.2" />
        <path d="M6.6 12.2c3.5-.9 7-.5 10 1.2" />
        <path d="M7.4 15.7c2.8-.7 5.5-.4 8 1" />
      </g>
    </svg>
  ),
  github: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-[18px] w-[18px]">
      <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.1.79-.25.79-.56v-2c-3.2.7-3.87-1.37-3.87-1.37-.52-1.33-1.28-1.69-1.28-1.69-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.03 1.76 2.69 1.25 3.34.96.1-.74.4-1.25.73-1.54-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.28 1.18-3.09-.12-.29-.51-1.46.11-3.05 0 0 .97-.31 3.17 1.18a11 11 0 0 1 5.77 0c2.2-1.49 3.17-1.18 3.17-1.18.62 1.59.23 2.76.11 3.05.74.81 1.18 1.83 1.18 3.09 0 4.42-2.69 5.4-5.26 5.68.41.36.78 1.06.78 2.14v3.17c0 .31.21.67.8.56A11.5 11.5 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5z" />
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

// Items with an empty value are hidden automatically.
// "badge" = small number shown on the icon corner (used to tell the 2 YouTube channels apart).
const SOCIAL = [
  { label: "YouTube (Label)", icon: "youtube", href: SITE.social.youtubeLabel },
  {
    label: "YouTube (Rafiul Islam)",
    icon: "youtube",
    href: SITE.social.youtubeRafiul,
    badge: "2",
  },
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

// Payment methods: logo link only, no numbers shown in the footer.
// - href: where the logo links to (change here if you want another page).
// - logo: optional path of the official logo image placed in `public/`
//   (e.g. "/bkash.png"). While empty, a brand-colored wordmark is shown instead.
// - Hidden automatically when the number in site.js is empty.
const PAYMENTS = [
  {
    label: "bKash",
    href: "https://www.bkash.com",
    logo: "",
    color: "#E2136E",
    enabled: SITE.bkash,
  },
  {
    label: "Nagad",
    href: "https://nagad.com.bd",
    logo: "",
    color: "#F6921E",
    enabled: SITE.nagad,
  },
].filter((p) => p.enabled);

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
        <div className="flex flex-col gap-5 border-b border-white/10 py-8 sm:flex-row sm:items-center sm:justify-between sm:py-10">
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
        <div className="grid gap-8 py-8 sm:grid-cols-2 sm:gap-10 sm:py-10 lg:grid-cols-[1.4fr_1fr_1.3fr_1fr]">
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
            <div className="mt-5 flex flex-wrap gap-3">
              {SOCIAL.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  title={s.label}
                  {...ext(s.href)}
                  className="relative flex h-10 w-10 items-center justify-center rounded-full bg-white"
                >
                  {ICONS[s.icon]}
                  {/* Small number badge on the corner */}
                  {s.badge && (
                    <span
                      aria-hidden="true"
                      className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-red-600 text-[9px] font-bold leading-none text-white ring-2 ring-neutral-950"
                    >
                      {s.badge}
                    </span>
                  )}
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

          {/* Payment: official-style logo links only, no numbers */}
          {PAYMENTS.length > 0 && (
            <div>
              <h3 className={HEADING}>We Accept</h3>
              <div className="flex flex-wrap gap-3">
                {PAYMENTS.map((p) => (
                  <a
                    key={p.label}
                    href={p.href}
                    aria-label={p.label}
                    title={p.label}
                    {...ext(p.href)}
                    className="flex h-11 min-w-[5.5rem] items-center justify-center rounded-xl bg-white px-4"
                  >
                    {p.logo ? (
                      <Image
                        src={p.logo}
                        alt={p.label}
                        width={80}
                        height={28}
                        className="h-6 w-auto object-contain"
                      />
                    ) : (
                      <span
                        className="text-base font-extrabold tracking-tight"
                        style={{ color: p.color }}
                      >
                        {p.label}
                      </span>
                    )}
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Big watermark text: in normal flow so it always fits fully on phones */}
        <div
          aria-hidden="true"
          className="select-none text-center font-[family-name:var(--font-heading)] text-[13vw] font-bold uppercase leading-none tracking-wide text-white/[0.16] sm:text-[10vw] lg:text-[8rem]"
          style={{
            WebkitMaskImage: "linear-gradient(to bottom, #000 55%, transparent)",
            maskImage: "linear-gradient(to bottom, #000 55%, transparent)",
          }}
        >
          Sagor Music
        </div>

        {/* Bottom bar.
            - Mobile: bottom padding = fixed tab bar (4rem) + device safe area + a small gap, so no extra empty space.
            - Desktop (md+): extra right padding keeps the developer credit clear of the fixed
              scroll-to-top button; it is removed on very wide screens where the button
              already sits outside the content. */}
        <div className="flex flex-col items-center gap-3 border-t border-white/10 pb-[calc(4.25rem_+_env(safe-area-inset-bottom))] pt-4 text-xs text-white/40 md:flex-row md:justify-between md:pb-5 md:pr-16 md:pt-5 min-[1400px]:pr-0">
          <p>
            © {new Date().getFullYear()} {SITE.name}. All rights reserved.
          </p>

          {/* Developer credit */}
          <div className="flex items-center gap-2">
            <a
              href={DEV_SITE}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-full border border-red-500/40 bg-red-500/10 py-1.5 pl-4 pr-4 text-sm text-white/80"
            >
              <span className="text-white/50">Website by</span>
              <span className="font-semibold text-white">{DEV_NAME}</span>
              <span className="text-red-400">↗</span>
            </a>
            <a
              href={DEV_GITHUB}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-white/5 text-white"
            >
              {ICONS.github}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
