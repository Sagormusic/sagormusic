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
    style: "bg-[#FF0000] hover:bg-[#e60000]",
  },
  {
    label: "Facebook",
    href: SITE.social.facebook,
    Logo: FacebookLogo,
    wide: false,
    style: "bg-[#1877F2] hover:bg-[#1468d6]",
  },
  {
    label: "Instagram",
    href: SITE.social.instagram,
    Logo: InstagramLogo,
    wide: false,
    style:
      "bg-[linear-gradient(45deg,#f09433,#e6683c,#dc2743,#cc2366,#bc1888)] hover:brightness-110",
  },
].filter((b) => b.href);

export default function Bio() {
  return (
    <section className="px-5 py-16 sm:px-8 md:py-24 lg:px-16">
      <div className="mx-auto flex w-full max-w-7xl flex-col items-center gap-10 md:flex-row md:gap-14 lg:gap-20">
        {/* Photo side (hidden when PHOTO_SRC is empty) */}
        {PHOTO_SRC && (
          <div className="relative aspect-[4/5] w-56 shrink-0 overflow-hidden rounded-3xl border border-white/10 shadow-[0_0_50px_rgba(220,38,38,0.25)] sm:w-64 md:w-72 lg:w-96">
            <Image
              src={PHOTO_SRC}
              alt={NAME}
              fill
              sizes="(min-width: 1024px) 24rem, (min-width: 768px) 18rem, (min-width: 640px) 16rem, 14rem"
              className="object-cover"
            />
          </div>
        )}

        {/* Text side */}
        <div className="w-full text-center md:text-left">
          <p className="text-sm font-semibold uppercase tracking-widest text-red-500">
            {EYEBROW}
          </p>

          <h2 className="mt-3 text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
            {NAME}
          </h2>

          {/* Role chips */}
          <ul className="mt-5 flex flex-wrap justify-center gap-2 md:justify-start">
            {ROLES.map((role) => (
              <li
                key={role}
                className="rounded-full border border-white/20 px-4 py-1.5 text-xs font-medium text-white/80 sm:text-sm"
              >
                {role}
              </li>
            ))}
          </ul>

          <div className="mx-auto mt-6 max-w-prose space-y-4 text-base leading-relaxed text-white/70 md:mx-0 lg:text-lg">
            {PARAGRAPHS.map((text) => (
              <p key={text}>{text}</p>
            ))}
          </div>

          {/* Quick facts */}
          <dl className="mt-8 grid grid-cols-2 gap-3 sm:max-w-md md:mx-0">
            {FACTS.map((f) => (
              <div
                key={f.label}
                className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-left"
              >
                <dt className="text-xs uppercase tracking-widest text-white/40">
                  {f.label}
                </dt>
                <dd className="mt-1 text-sm font-medium text-white sm:text-base">
                  {f.value}
                </dd>
              </div>
            ))}
          </dl>

          {/* Social buttons: mobile = YouTube full row, Facebook + Instagram side by side */}
          {BUTTONS.length > 0 && (
            <div className="mt-8 grid grid-cols-2 gap-3 sm:flex sm:flex-wrap sm:justify-center md:justify-start">
              {BUTTONS.map(({ label, href, Logo, wide, style }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className={`flex min-w-0 items-center justify-center gap-2 rounded-full px-4 py-3 text-sm font-semibold text-white transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:px-7 ${
                    wide ? "col-span-2 sm:col-auto" : ""
                  } ${style}`}
                >
                  <Logo />
                  <span className="truncate">{label}</span>
                </a>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
