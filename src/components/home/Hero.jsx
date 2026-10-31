import Image from "next/image";
import SITE from "@/data/site";

// ---------- Content (edit here only) ----------
const TITLE = "Sagor Music Cassette Company";
const TAGLINE = "An independent Bangladeshi music label.";
const DESCRIPTION =
  "We discover talent, create beautiful music, and bring artists and music lovers together. Founded and owned by Rafiul Islam.";

// Logo file placed inside the /public folder
const LOGO_SRC = "/logo.jpeg";

// Buttons (links come from the shared site data)
const PRIMARY_BUTTON = { label: "Watch on YouTube", href: SITE.social.youtubeLabel };
const SECONDARY_BUTTON = { label: "Order Now", href: SITE.shopUrl };
const THIRD_BUTTON = { label: "Explore Music", href: "/music" };

// ---------- Styles and animations (kept inside this file) ----------
// No hover reliance: everything below runs on its own, which matters on phones.
const CSS = `
  /* Page-load sequence: text rises in one after another */
  @keyframes hero-rise {
    from { opacity: 0; transform: translateY(24px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  .hero-rise { opacity: 0; animation: hero-rise 0.8s cubic-bezier(0.22, 1, 0.36, 1) forwards; }
  .hero-d1 { animation-delay: 0.1s; }
  .hero-d2 { animation-delay: 0.25s; }
  .hero-d3 { animation-delay: 0.4s; }
  .hero-d4 { animation-delay: 0.55s; }

  /* Disc entrance: scales in, then keeps spinning */
  @keyframes hero-disc-in {
    from { opacity: 0; transform: scale(0.7) rotate(-90deg); }
    to   { opacity: 1; transform: scale(1) rotate(0deg); }
  }
  @keyframes hero-spin {
    to { transform: rotate(360deg); }
  }
  .hero-disc-in { opacity: 0; animation: hero-disc-in 1.1s cubic-bezier(0.22, 1, 0.36, 1) 0.1s forwards; }
  .hero-spin { animation: hero-spin 14s linear infinite; }

  /* Sound-wave rings leaving the disc */
  @keyframes hero-ring {
    0%   { transform: scale(0.95); opacity: 0.55; }
    100% { transform: scale(1.45); opacity: 0; }
  }
  .hero-ring { animation: hero-ring 4.5s ease-out infinite; }
  .hero-ring-2 { animation-delay: 1.5s; }
  .hero-ring-3 { animation-delay: 3s; }

  /* Red glow behind the disc breathes slowly */
  @keyframes hero-breathe {
    0%, 100% { opacity: 0.55; transform: translateY(-50%) scale(1); }
    50%      { opacity: 0.9;  transform: translateY(-50%) scale(1.08); }
  }
  .hero-breathe { animation: hero-breathe 6s ease-in-out infinite; }

  /* Tonearm swings onto the record once, then rests with a tiny sway */
  @keyframes hero-arm-in {
    from { transform: rotate(-32deg); }
    to   { transform: rotate(0deg); }
  }
  @keyframes hero-arm-sway {
    0%, 100% { transform: rotate(0deg); }
    50%      { transform: rotate(-1.2deg); }
  }
  .hero-arm {
    transform-origin: 80% 14%;
    animation:
      hero-arm-in 1.6s cubic-bezier(0.22, 1, 0.36, 1) 0.9s both,
      hero-arm-sway 5s ease-in-out 2.5s infinite;
  }

  /* Primary button: constant soft pulse so it draws the eye on touch screens */
  @keyframes hero-pulse {
    0%   { box-shadow: 0 0 0 0 rgba(220, 38, 38, 0.55); }
    70%  { box-shadow: 0 0 0 14px rgba(220, 38, 38, 0); }
    100% { box-shadow: 0 0 0 0 rgba(220, 38, 38, 0); }
  }
  .hero-pulse { animation: hero-pulse 2.4s ease-out infinite; }

  /* Vinyl grooves and light sheen (fixed overlays, only the label area is left clear) */
  .hero-grooves {
    background: repeating-radial-gradient(circle, rgba(255,255,255,0.07) 0 1px, transparent 1px 5px);
    -webkit-mask-image: radial-gradient(circle, transparent 38%, #000 39%);
            mask-image: radial-gradient(circle, transparent 38%, #000 39%);
  }
  .hero-sheen {
    background: conic-gradient(from 20deg, transparent 0deg, rgba(255,255,255,0.22) 25deg, transparent 70deg, transparent 180deg, rgba(255,255,255,0.14) 205deg, transparent 250deg);
    -webkit-mask-image: radial-gradient(circle, transparent 38%, #000 39%);
            mask-image: radial-gradient(circle, transparent 38%, #000 39%);
  }

  @media (prefers-reduced-motion: reduce) {
    .hero-rise, .hero-disc-in { opacity: 1; animation: none; }
    .hero-spin, .hero-ring, .hero-breathe, .hero-arm, .hero-pulse { animation: none; }
  }
`;

export default function Hero() {
  return (
    <section className="relative isolate flex min-h-[calc(100svh-3.5rem)] items-center overflow-hidden px-5 py-12 sm:px-8 md:min-h-[calc(100svh-4rem)] lg:px-16">
      <style>{CSS}</style>

      {/* Soft red glow behind the disc (decoration only) */}
      <div
        aria-hidden="true"
        className="hero-breathe pointer-events-none absolute -right-24 top-1/2 -z-10 h-[28rem] w-[28rem] rounded-full bg-red-600/25 blur-3xl md:h-[40rem] md:w-[40rem]"
      />

      <div className="mx-auto flex w-full max-w-7xl flex-col-reverse items-center gap-12 md:flex-row md:justify-between md:gap-12">
        {/* Text side */}
        <div className="w-full text-center md:max-w-xl md:text-left lg:max-w-2xl">
          <h1 className="hero-rise hero-d1 text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-5xl lg:text-7xl">
            {TITLE}
          </h1>

          <p className="hero-rise hero-d2 mt-4 text-lg font-medium text-red-500 sm:text-xl">
            {TAGLINE}
          </p>

          <p className="hero-rise hero-d3 mx-auto mt-4 max-w-prose text-base leading-relaxed text-white/70 md:mx-0 lg:text-lg">
            {DESCRIPTION}
          </p>

          <div className="hero-rise hero-d4 mt-8 flex flex-col items-stretch gap-3 sm:flex-row sm:flex-wrap sm:justify-center md:justify-start">
            <a
              href={PRIMARY_BUTTON.href}
              target="_blank"
              rel="noopener noreferrer"
              className="hero-pulse rounded-full bg-red-600 px-7 py-3 text-center text-sm font-semibold text-white transition active:scale-95 hover:bg-red-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              {PRIMARY_BUTTON.label}
            </a>
            <a
              href={SECONDARY_BUTTON.href}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-white/30 bg-white/5 px-7 py-3 text-center text-sm font-semibold text-white backdrop-blur transition active:scale-95 hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              {SECONDARY_BUTTON.label}
            </a>
            <a
              href={THIRD_BUTTON.href}
              className="rounded-full border border-red-500/40 px-7 py-3 text-center text-sm font-semibold text-red-400 transition active:scale-95 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              {THIRD_BUTTON.label}
            </a>
          </div>
        </div>

        {/* Record side: spinning disc, sound-wave rings and a tonearm */}
        <div className="relative aspect-square w-56 shrink-0 sm:w-72 md:w-80 lg:w-[26rem] xl:w-[30rem]">
          {/* Sound-wave rings */}
          <span
            aria-hidden="true"
            className="hero-ring pointer-events-none absolute inset-0 rounded-full border border-red-500/60"
          />
          <span
            aria-hidden="true"
            className="hero-ring hero-ring-2 pointer-events-none absolute inset-0 rounded-full border border-red-500/60"
          />
          <span
            aria-hidden="true"
            className="hero-ring hero-ring-3 pointer-events-none absolute inset-0 rounded-full border border-red-500/60"
          />

          {/* Disc (enters once, then spins forever) */}
          <div className="hero-disc-in absolute inset-0">
            <div className="hero-spin relative h-full w-full rounded-full shadow-[0_0_70px_rgba(220,38,38,0.4)]">
              <Image
                src={LOGO_SRC}
                alt={TITLE}
                width={800}
                height={800}
                priority
                sizes="(min-width: 1280px) 30rem, (min-width: 1024px) 26rem, (min-width: 768px) 20rem, (min-width: 640px) 18rem, 14rem"
                className="h-full w-full rounded-full object-cover"
              />
              <div aria-hidden="true" className="hero-grooves absolute inset-0 rounded-full" />
            </div>
            {/* Light sheen stays still while the disc spins under it */}
            <div aria-hidden="true" className="hero-sheen pointer-events-none absolute inset-0 rounded-full" />
          </div>

          {/* Tonearm */}
          <svg
            aria-hidden="true"
            viewBox="0 0 100 100"
            className="hero-arm pointer-events-none absolute -right-[6%] -top-[8%] z-10 h-[62%] w-[62%] drop-shadow-[0_4px_8px_rgba(0,0,0,0.6)]"
          >
            <circle cx="80" cy="14" r="8" fill="#1a1a1a" stroke="#dc2626" strokeWidth="1.5" />
            <circle cx="80" cy="14" r="3" fill="#dc2626" />
            <line x1="80" y1="14" x2="38" y2="68" stroke="#e5e5e5" strokeWidth="2.5" strokeLinecap="round" />
            <rect
              x="30"
              y="64"
              width="14"
              height="8"
              rx="2"
              fill="#dc2626"
              transform="rotate(-38 37 68)"
            />
          </svg>
        </div>
      </div>
    </section>
  );
}
