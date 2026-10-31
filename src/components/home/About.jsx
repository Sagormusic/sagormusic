// ---------- Content (edit here only) ----------
const TITLE = "Sagor Music Cassette Company";
const PARAGRAPHS = [
  "Welcome to Sagor Music Cassette Company — a creative music label dedicated to discovering talent, creating beautiful music, and bringing artists and music lovers together.",
  "Founded and owned by Rafiul Islam, Sagor Music Cassette Company is a platform where talented artists, musicians, singers, composers, and creative minds work together to create memorable musical experiences.",
];

const WHAT_WE_DO_TITLE = "What we do";
const WHAT_WE_DO = [
  "Original Songs & Music Production",
  "Music Composition & Arrangement",
  "Cover Songs & Instrumental Music",
  "Epic & Cinematic Music",
  "Artist Collaboration & Creative Projects",
  "Music Releases & Digital Distribution",
];

const MISSION_TITLE = "Our mission";
const MISSION =
  "Our mission is to support talented artists, promote creativity, and deliver quality music to audiences around the world. We believe that music connects people and expresses emotions.";

export default function About() {
  return (
    <section className="px-5 py-16 sm:px-8 md:py-24 lg:px-16">
      <div className="mx-auto w-full max-w-7xl">
        {/* Intro: title on the left, description on the right (stacked on mobile) */}
        <div className="grid gap-8 md:grid-cols-2 md:gap-14 lg:gap-20">
          <h2 className="text-center text-4xl font-bold leading-tight sm:text-5xl md:text-left lg:text-6xl">
            {TITLE}
          </h2>
          <div className="mx-auto max-w-prose space-y-4 text-center text-base leading-relaxed text-white/70 md:mx-0 md:text-left lg:text-lg">
            {PARAGRAPHS.map((text) => (
              <p key={text}>{text}</p>
            ))}
          </div>
        </div>

        {/* What we do: plain divided list, 1 column on mobile, 2 columns on sm+ */}
        <div className="mt-14 md:mt-20">
          <h3 className="text-center text-2xl font-semibold sm:text-3xl md:text-left">
            {WHAT_WE_DO_TITLE}
          </h3>
          <ul className="mt-6 grid border-t border-white/10 sm:grid-cols-2 sm:gap-x-14 lg:gap-x-20">
            {WHAT_WE_DO.map((item) => (
              <li
                key={item}
                className="flex items-center gap-4 border-b border-white/10 py-4 text-base text-white/85 sm:py-5 sm:text-lg"
              >
                <span
                  aria-hidden="true"
                  className="h-2.5 w-2.5 shrink-0 rounded-full bg-red-600 shadow-[0_0_12px_rgba(220,38,38,0.8)]"
                />
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Mission: one large quote-style block */}
        <div className="mt-14 border-l-2 border-red-600 pl-5 sm:pl-8 md:mt-20">
          <h3 className="text-xl font-semibold text-red-500 sm:text-2xl">
            {MISSION_TITLE}
          </h3>
          <p className="mt-3 max-w-3xl font-[family-name:var(--font-heading)] text-2xl leading-snug text-white sm:text-3xl lg:text-4xl">
            {MISSION}
          </p>
        </div>
      </div>
    </section>
  );
}
