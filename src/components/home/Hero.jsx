import Image from "next/image";
import SITE from "../../data/site";

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

export default function Hero() {
  return (
    <section className="relative isolate flex min-h-[calc(100svh-3.5rem)] items-center overflow-hidden px-5 py-12 sm:px-8 md:min-h-[calc(100svh-4rem)] lg:px-16">
      {/* Soft red glow behind the disc (decoration only) */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 top-1/2 -z-10 h-[28rem] w-[28rem] -translate-y-1/2 rounded-full bg-red-600/25 blur-3xl md:h-[40rem] md:w-[40rem]"
      />

      <div className="mx-auto flex w-full max-w-7xl flex-col-reverse items-center gap-10 md:flex-row md:justify-between md:gap-12">
        {/* Text side */}
        <div className="w-full text-center md:max-w-xl md:text-left lg:max-w-2xl">
          <h1 className="text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-5xl lg:text-7xl">
            {TITLE}
          </h1>

          <p className="mt-4 text-lg font-medium text-red-500 sm:text-xl">
            {TAGLINE}
          </p>

          <p className="mx-auto mt-4 max-w-prose text-base leading-relaxed text-white/70 md:mx-0 lg:text-lg">
            {DESCRIPTION}
          </p>

          <div className="mt-8 flex flex-col items-stretch gap-3 sm:flex-row sm:flex-wrap sm:justify-center md:justify-start">
            <a
              href={PRIMARY_BUTTON.href}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-red-600 px-7 py-3 text-center text-sm font-semibold text-white transition hover:bg-red-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              {PRIMARY_BUTTON.label}
            </a>
            <a
              href={SECONDARY_BUTTON.href}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-white/25 px-7 py-3 text-center text-sm font-semibold text-white transition hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              {SECONDARY_BUTTON.label}
            </a>
            <a
              href={THIRD_BUTTON.href}
              className="rounded-full px-7 py-3 text-center text-sm font-semibold text-white/70 transition hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              {THIRD_BUTTON.label}
            </a>
          </div>
        </div>

        {/* Disc side: the logo is a disc, so it slowly spins like a record */}
        <div className="relative aspect-square w-56 shrink-0 sm:w-72 md:w-80 lg:w-[26rem] xl:w-[30rem]">
          <Image
            src={LOGO_SRC}
            alt={TITLE}
            width={800}
            height={800}
            priority
            sizes="(min-width: 1280px) 30rem, (min-width: 1024px) 26rem, (min-width: 768px) 20rem, (min-width: 640px) 18rem, 14rem"
            className="h-full w-full animate-[spin_24s_linear_infinite] rounded-full object-cover shadow-[0_0_60px_rgba(220,38,38,0.35)] motion-reduce:animate-none"
          />
        </div>
      </div>
    </section>
  );
}
