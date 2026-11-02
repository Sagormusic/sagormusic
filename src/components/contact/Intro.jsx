// ---------- Content (edit here) ----------
const LABEL = "Contact";
const TITLE = "Get in touch";
const TEXT =
  "Choose whatever way feels easiest for you. Message us, call, or copy any detail and reach out in your own way.";

export default function Intro() {
  return (
    <header className="mx-auto max-w-2xl text-center">
      <style>{`
        @keyframes ct-rise {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .ct-rise { opacity: 0; animation: ct-rise 0.8s cubic-bezier(0.22, 1, 0.36, 1) forwards; }
        @media (prefers-reduced-motion: reduce) {
          .ct-rise { opacity: 1; animation: none; }
        }
      `}</style>

      <p
        className="ct-rise text-xs font-semibold uppercase tracking-[0.35em] text-[#E8C27A]"
        style={{ animationDelay: "0.05s" }}
      >
        {LABEL}
      </p>
      <h1
        className="ct-rise mt-3 text-5xl font-medium tracking-tight sm:text-6xl lg:text-7xl"
        style={{ animationDelay: "0.15s" }}
      >
        {TITLE}
      </h1>
      <div
        className="ct-rise mx-auto mt-5 h-px w-24 bg-gradient-to-r from-transparent via-[#E8C27A] to-transparent"
        style={{ animationDelay: "0.25s" }}
      ></div>
      <p
        className="ct-rise mt-5 text-base leading-relaxed text-white/70 sm:text-lg"
        style={{ animationDelay: "0.35s" }}
      >
        {TEXT}
      </p>
    </header>
  );
}
