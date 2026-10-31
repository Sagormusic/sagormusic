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

// Buttons (links come from the shared site data; empty links are hidden)
const BUTTONS = [
  { label: "YouTube Channel", href: SITE.social.youtubeRafiul },
  { label: "Instagram", href: SITE.social.instagram },
  { label: "Facebook", href: SITE.social.facebook },
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

          {/* Buttons */}
          {BUTTONS.length > 0 && (
            <div className="mt-8 flex flex-col items-stretch gap-3 sm:flex-row sm:flex-wrap sm:justify-center md:justify-start">
              {BUTTONS.map((b, i) => (
                <a
                  key={b.label}
                  href={b.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`rounded-full px-7 py-3 text-center text-sm font-semibold transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white ${
                    i === 0
                      ? "bg-red-600 text-white hover:bg-red-500"
                      : "border border-white/25 text-white hover:bg-white/10"
                  }`}
                >
                  {b.label}
                </a>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
