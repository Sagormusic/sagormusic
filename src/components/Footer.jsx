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
  { label: "About", href: "/#about" },
  { label: "Music", href: "/music" },
  { label: "Shop", href: SITE.shopUrl, external: true },
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
  // Net TV News: placeholder TV badge. Replace with the official logo if you have the file.
  nettv: (
    <svg viewBox="0 0 24 24" className="h-6 w-6">
      <path d="M8 2.5l4 3.5 4-3.5" fill="none" stroke="#D71920" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      <rect x="2" y="6" width="20" height="14" rx="3" fill="#D71920" />
      <path d="M7.5 16.5v-6l4.5 6v-6" fill="none" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M15.5 10.5h3M17 10.5v6" fill="none" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
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

// ---------- Payment logos (official, inline SVG, no files needed in public/) ----------
const PAY_LOGOS = {
  bkash: (
    <svg viewBox="-37.062 -28.3525 321.204 170.115" width={83} height={44} className="h-11 w-auto" aria-hidden="true">
      <g fill="none"><path fill="#D12053" d="M223.65 62.45l-53.03-8.31 7.03 31.6z"/><path fill="#E2136E" d="M223.65 62.45L183.69 6.93l-13.06 47.22z"/><path fill="#D12053" d="M169.39 53.51L127.52 0l54.83 6.55z"/><path fill="#9E1638" d="M150.32 31.15L127.07 9.24h6.12z"/><path fill="#D12053" d="M234.96 35.46l-9.84 26.69-15.95-22.06z"/><path fill="#E2136E" d="M183.84 84.14l38.61-15.51 1.62-4.93z"/><path fill="#9E1638" d="M152.96 113.41l16.54-58.02 8.39 37.75z"/><path fill="#E2136E" d="M236.5 35.67l-4.06 11.02 14.64-.24zM0 40.09c.71.06 1.43.19 2.19.19s1.38-.13 2.19-.19v23.47c2.31-3.93 5.22-6.52 9.5-6.52 7.74 0 11.06 7.66 11.06 14.7 0 8.43-4.5 16.5-12.39 16.5a8.66 8.66 0 01-7.77-4.47c-1.32 1.16-2.49 2.55-3.74 3.81h-1zm4.28 34.52c0 6.84 2.9 11.61 7.67 11.61 6.19 0 8.18-8.32 8.18-14.22 0-6.85-2.26-12.24-7.62-12.3-6.26-.05-8.23 7.36-8.23 14.92z"/><path fill="#231F20" d="M45.13 55.27l-4.66 6c4.38 6.4 8.92 12.67 13.32 19.15l4.44 7v.35c-1.09-.07-2.08-.21-3-.21-.92 0-2.08.14-3.06.21-1.21-2.24-2.41-4.31-3.78-6.34l-12-17.75c-.27-.28-.92-.5-.92-.21v24.3c-.88-.07-1.65-.21-2.41-.21-.76 0-1.64.14-2.41.21V40.09c.77.06 1.6.21 2.41.21s1.53-.15 2.41-.21v21.52c0 .42.82.14 1.36-.42a37.1 37.1 0 002.92-3.42l13.49-17.7c.71.06 1.42.21 2.19.21s1.36-.15 2.14-.21zM81.42 82.4c0 2.48-.16 3.74 3.07 2.92v1.39a8.87 8.87 0 01-1.65.63c-2.85.57-5.21.06-5.65-3.67l-.49.55a10.17 10.17 0 01-8.12 4c-3.88 0-7.28-3.06-7.28-7.75 0-7.23 5-8.18 10.13-9.13 4.34-.82 5.82-1.2 5.82-4.25 0-4.7-2.3-7.42-6.41-7.42a6.85 6.85 0 00-6.52 4.37h-.6v-3.52a14.2 14.2 0 018.87-3.48c5.75 0 8.88 3.48 8.88 10.65zm-4.38-10.47l-1.93.44c-3.73.82-9.32 1.45-9.32 7.24 0 4 2 6 5.36 6a6.83 6.83 0 004.44-2.44c.4-.46 1.5-1.54 1.5-2zm14.15 9.63c1.3 2.49 3.72 4.72 6.3 4.72a5.67 5.67 0 005.38-5.78c0-8.56-12.95-3-12.95-14.08 0-6.08 4-9.37 8.93-9.37 2.18-.048 4.33.52 6.2 1.64a32.791 32.791 0 00-1.3 4.5h-.5c-.72-2.09-2.63-4.19-4.66-4.19-2.74 0-5 1.85-5 5.28 0 8.11 12.95 3.79 12.95 13.94 0 6.79-5.26 10-10.1 10a12.73 12.73 0 01-6.84-2 34.42 34.42 0 001.15-4.65zm22.73-41.47c.73.06 1.44.19 2.2.19.76 0 1.38-.13 2.2-.19v23.09c1.92-3.87 4.93-6.14 8.83-6.14 6.36 0 8.83 4.36 8.83 12.36v18.37c-.83-.07-1.47-.19-2.2-.19-.73 0-1.48.13-2.2.19V70.85c0-7-1.41-10.53-6.08-10.53-4.94 0-7.18 3.56-7.18 10.15v17.3c-.82-.07-1.47-.19-2.2-.19-.73 0-1.46.13-2.2.19z"/></g>
    </svg>
  ),
  nagad: (
    <svg viewBox="-45 -32.75825 390 196.5495" width={87} height={44} className="h-11 w-auto" aria-hidden="true">
      <g transform="translate(-1266.194 -110.295) scale(2.59472)"><g transform="translate(481.988 41.407)"><g><path d="M80.6 20.7H60.4c-.4 0-.6.3-.6.6v1.6c0 .4.3.6.6.6h15.1v8.4c-.4-.6-.9-1.2-1.4-1.8-1.8-1.8-3.7-2.7-5.7-2.7-1.6 0-2.9.8-4 2.2-.9 1.2-1.4 2.6-1.4 3.9 0 1.3.2 3 1.2 4.6 1.2 1.9 3.2 2.5 5 2.5 2.3 0 4.2-1.6 4.2-3.7 0-1.2-.6-2.2-1.7-2.9l-1.1-.6v1.8c-.1.5-.9 1.2-1.8 1.2-.8 0-1.5-.3-2-.8-.3-.3-.5-.9-.4-1.3 0-.6.2-1.1.6-1.6.5-.6 1-.9 1.8-.9 2 0 3.7.9 5.1 2.9 1.1 1.7 1.7 3.3 1.7 5.1V44l3 1.8c.1.1.2.1.3.1.4 0 .6-.3.6-.6V23.6h1.2c.4 0 .6-.3.6-.6v-1.6c0-.4-.3-.7-.7-.7z" fill="#ed1c24"/><path d="M121 20.7H95.4c-.4 0-.6.3-.6.6v2.8c-2.5-2.6-4.7-3.9-6.7-3.9-1.9 0-3.5.4-4.9 1.5-1.3 1-2.1 2.3-2.1 3.8 0 4.5 5 4.4 6.3 3.8.2-.1.5-.3.8-.3 1 0 1.4.8 1.4 1.5 0 1-1.5 1.9-3.3 1.9-1 0-1.6-.3-2-.9l-.8-1.2-.5 1.4c-.1.3-.3.7-.3 1.2 0 1 .5 2 1.5 2.9.9.8 2 1.2 3.2 1.2 1.9 0 3.5-.7 4.5-2.1.9-1.1 1.3-2.4 1.3-3.9 0-.8-.3-1.7-1-2.7-.8-1.2-1.8-1.8-2.9-1.8-.4 0-.9.1-1.4.3-.2.1-.6.2-.7.2-.2 0-.5-.1-.7-.4-.2-.2-.4-.5-.4-1 0-1.1 1-2.2 2.8-2.2h.1c1.2 0 2.4.6 3.5 1.7.9.9 1.6 1.8 2.2 2.8v15.9l3 1.8c.1.1.2.1.3.1.4 0 .6-.3.6-.6V23.6h4.6v13.9l3.6 1.5h.2c.3 0 .6-.2.6-.6v-.1c.6-4.1 2.4-6.9 5.4-8.6v.8c0 .6 0 2.1.1 2.9 0 .5 0 .8.1 1.1 0 1.6.2 4 .7 5.8 1 3.4 2.7 4.2 3.9 4.2h.1c.7 0 1.3-.2 1.7-.6.2-.2.5-.6.5-1.3 0-.6-.1-1.1-.3-1.5l-.3-.5-.6.1c-.6.2-.9.2-.9.1h-.1c-.2 0-.2 0-.3-.1-.2-.1-.6-.4-.9-1.5-.2-.8-.3-1.9-.3-2.5 0-4.5.9-7.9 2.4-8.6h.1c.2-.1.4-.3.4-.6 0-.1 0-.2-.1-.3v-.1c-.7-1.4-2.2-2.4-4.2-2.9h-.4c-1.6.3-3.5 1.4-5.9 3.4-.6.5-1.2 1-1.7 1.5v-5.5h14c.4 0 .6-.3.6-.6v-1.6c.1-.4-.2-.7-.6-.7z" fill="#ed1c24"/></g><path d="M53.2 28.1c0 .7 0 1.3-.1 1.9-.2 2.8-.9 5.4-2 7.8-.4 1-.9 1.9-1.5 2.8-4.2 6.6-11.6 11-20 11-3.6 0-7-.8-10-2.2C11.6 45.7 6 37.5 6 28.1 6 18.8 11.4 10.8 19.1 7c-.6.8-1.2 1.6-1.7 2.5 0 .1-.1.1-.1.2-.3.3-.6.5-.9.8-.4.3-.7.7-1.1 1l-.2.2-.2.2c-.1.1-.2.3-.4.4-.2.3-.5.6-.7.9-1 1.3-1.8 2.7-2.4 4.2-.1.1-.1.3-.2.4-.1.2-.1.4-.2.5 0 .1-.1.2-.1.3-.1.3-.2.5-.3.8-.1.2-.1.4-.2.5 0 .1-.1.2-.1.3 0 .2-.1.4-.1.6l-.3 1.8c0 .2 0 .3-.1.5v2.4c0 6.4 2.9 12.2 7.6 15.9 3.6 2.9 8.1 4.7 13 4.7 4.5 0 8.6-1.4 12-3.9 2.5-1.8 4.5-4.1 6-6.8.2-.4.4-.7.6-1.1 1.2-2.5 1.9-5.2 1.9-8.1v-.7c0-.7 0-1.3-.1-2l.1.1c.3.3.6.5.9.8.3-.5.6-.9.9-1.4.2.9.3 1.8.4 2.8.1.9.1 1.6.1 2.3z" fill="#ed1c24"/><path d="M32.4 9.2L28 1.1c-7.3 3.3-12.3 10.6-12.3 19.1 0 4.3 1.3 8.3 3.5 11.6-.2-1.1-.2-2.2-.2-3.4.1-8.7 5.6-16.1 13.4-19.2z" fill="#f7941d"/><path d="M35.9 13.2c1.8-.5 3.8-.7 5.7-.7 1.2 0 2.5.1 3.6.3l-.1-3.6-.2-7.2c-.8-.1-1.7-.2-2.6-.2-4 0-7.7 1.3-10.7 3.4L34 9.6c-4.3 1.5-7.8 4.5-10 8.4-1.1 1.9-1.9 4.1-2.2 6.4.6-1.2 1.3-2.3 2.1-3.3 2.9-3.8 7.1-6.7 12-7.9z" fill="#ed1c24"/><path d="M46.4 9.1l.2 5.1c-1.7-.5-3.4-.8-5.3-.8-3.5 0-6.8 1-9.7 2.7-3.6 2.2-6.4 5.7-7.8 9.8 1.4-1.9 3.1-3.6 5.1-4.9 2.9-1.9 6.4-3 10.1-3 2.8 0 5.4.6 7.8 1.7 1.8.8 3.4 1.9 4.8 3.3l2.8-4.2 3.6-5.5c-3.2-2.6-7.2-4.2-11.6-4.2z" fill="#f7941d"/><path d="M50.9 25.7v.7c0 4.2-1.7 7.7-1.9 8.1-.2.4-.4.7-.6 1.1-1.5 2.7-3.5 5-6 6.8-3.4 2.4-7.5 3.9-12 3.9-4.9 0-9.5-1.7-13-4.7-4.6-3.8-7.6-9.5-7.6-15.9v-2.4c0-.2 0-.3.1-.5l.3-1.8c0-.2.1-.4.1-.6 0-.1.1-.2.1-.3.1-.2.1-.4.2-.5.1-.3.2-.6.3-.8 0-.1.1-.2.1-.3.1-.2.1-.4.2-.5.1-.1.1-.3.2-.4.6-1.5 1.5-2.9 2.4-4.2.2-.3.5-.6.7-.9.1-.1.2-.3.4-.4.1-.1.1-.2.2-.2.1-.1.1-.2.2-.2.3-.4.7-.7 1.1-1 .3-.3.6-.5.9-.8 0 .1-.1.1-.1.2s-.1.2-.1.2c-1.2 2.4-2 5.3-2.3 8.3-.1.8-.1 1.6-.1 2.5 0 10.8 6.3 19.5 14.1 19.5h.8c1.1 0 2.2-.2 3.3-.4 5.3-1.4 9.2-6.3 9.2-12v-.3c-.1-3.4-1.5-6.5-3.8-8.6 1.6 0 3.2.3 4.7.7 2.9.7 5.5 2.1 7.8 3.9l.1.1c-.1.4 0 1.1 0 1.7z" fill="#f7941d"/><g><path d="M50.9 25.7v.7c0 4.4-2 8.2-2 8.2-.2.4-.4.7-.6 1.1-1.5 2.7-3.6 5-6.1 6.8-3.5 2.6-7.7 3.9-12.1 3.9-4.8 0-9.4-1.7-13.1-4.7-4.8-3.9-7.6-9.8-7.6-16 0-6.2 2.8-12.1 7.6-16l.2-.2c0 .1-.1.1-.1.2s-.1.1-.1.2c-4.7 3.9-7.4 9.6-7.4 15.8 0 6.2 2.7 11.9 7.5 15.9 3.6 3 8.3 4.6 13 4.6 4.3 0 8.5-1.3 12-3.9 2.5-1.8 4.5-4.1 6-6.8.2-.4.4-.7.5-1.1 0 0 2-3.7 2-8.1v-.7c0-.7 0-1.3-.1-2v-.1l.1.1.1.1c.2.8.2 1.4.2 2z" fill="#f7941d"/></g></g></g>
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
  { label: "Net TV News", icon: "nettv", href: SITE.social.nettv },
].filter((s) => s.href);

const CONTACT = [
  { label: "WhatsApp", text: SITE.whatsapp, href: whatsappLink, icon: "chat" },
  { label: "Messenger", text: SITE.messenger && "Chat with us", href: SITE.messenger, icon: "chat" },
  { label: "Email", text: SITE.email, href: SITE.email && `mailto:${SITE.email}`, icon: "mail" },
  { label: "Phone", text: SITE.phone, href: SITE.phone && `tel:${SITE.phone}`, icon: "phone" },
].filter((c) => c.text && c.href);

// Payment methods: official logo links only, no numbers shown in the footer.
// - href: where the logo links to (change here if you want another page).
// - logo: key of the inline official logo in PAY_LOGOS above.
// - Hidden automatically when the number in site.js is empty.
const PAYMENTS = [
  {
    label: "bKash",
    href: "https://www.bkash.com",
    logo: "bkash",
    enabled: SITE.bkash,
  },
  {
    label: "Nagad",
    href: "https://nagad.com.bd",
    logo: "nagad",
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
                <li key={p.label}>
                  {p.external ? (
                    <a
                      href={p.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm text-white/65"
                    >
                      <span className="h-1 w-1 rounded-full bg-red-500" />
                      {p.label}
                    </a>
                  ) : (
                    <Link
                      href={p.href}
                      className="flex items-center gap-2 text-sm text-white/65"
                    >
                      <span className="h-1 w-1 rounded-full bg-red-500" />
                      {p.label}
                    </Link>
                  )}
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
                    className="flex h-14 items-center justify-center rounded-xl bg-white px-3"
                  >
                    {PAY_LOGOS[p.logo]}
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Big watermark text: in normal flow so it always fits fully on phones */}
        <div
          aria-hidden="true"
          className="w-full select-none text-center font-[family-name:var(--font-heading)] text-[23vw] font-bold uppercase leading-[0.9] tracking-wide text-white/[0.16] sm:text-[10vw] sm:leading-none lg:text-[8rem]"
          style={{
            WebkitMaskImage: "linear-gradient(to bottom, #000 55%, transparent)",
            maskImage: "linear-gradient(to bottom, #000 55%, transparent)",
          }}
        >
          {/* Mobile: two full-width lines. sm and up: one line. */}
          <span className="block whitespace-nowrap sm:inline">Sagor</span>{" "}
          <span className="block whitespace-nowrap sm:inline">Music</span>
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
