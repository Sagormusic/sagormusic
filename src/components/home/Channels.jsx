import SITE from "@/data/site";

// ---------- Content (edit here only) ----------
const TITLE = "Watch on YouTube";
const INTRO = "New music, compositions and releases are uploaded on both channels.";

// Label channel first, Rafiul's own channel second. Empty links are hidden.
const CHANNELS = [
  {
    name: "Sagor Music Cassette Company",
    handle: "@sagormusiccassettecompany",
    description: "The official channel of the label.",
    href: SITE.social.youtubeLabel,
  },
  {
    name: "Rafiul Islam",
    handle: "@RafiulislamBGM",
    description: "The personal channel of Rafiul Islam.",
    href: SITE.social.youtubeRafiul,
  },
].filter((c) => c.href);

function YouTubeLogo() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="h-5 w-5 shrink-0">
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  );
}

export default function Channels() {
  if (CHANNELS.length === 0) return null;

  return (
    <section className="px-5 py-16 sm:px-8 md:py-24 lg:px-16">
      <div className="mx-auto w-full max-w-7xl">
        <div className="text-center">
          <h2 className="text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
            {TITLE}
          </h2>
          <p className="mx-auto mt-4 max-w-prose text-base text-white/70 lg:text-lg">
            {INTRO}
          </p>
        </div>

        {/* 1 column on mobile, 2 columns on md+ */}
        <div className="mt-10 grid gap-5 md:mt-14 md:grid-cols-2 md:gap-8">
          {CHANNELS.map(({ name, handle, description, href }) => (
            <a
              key={name}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex min-w-0 flex-col rounded-3xl border border-white/10 bg-white/5 p-6 transition hover:border-red-600/60 hover:bg-white/[0.07] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:p-8"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[#FF0000] text-white shadow-[0_0_30px_rgba(255,0,0,0.35)]">
                <YouTubeLogo />
              </span>
              <h3 className="mt-6 text-2xl font-semibold sm:text-3xl">{name}</h3>
              <p className="mt-1 truncate text-sm text-white/50">{handle}</p>
              <p className="mt-4 text-base text-white/70">{description}</p>
              <span className="mt-8 inline-flex w-fit items-center rounded-full bg-[#FF0000] px-6 py-3 text-sm font-semibold text-white transition group-hover:bg-[#e60000]">
                Visit channel
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
