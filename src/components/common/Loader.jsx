// Loader: spinning record with red glow, shown while a page is loading.
// Server component (no hooks). Keyframes live inside this file.

const LOGO_SRC = "/logo.jpeg";
const LABEL = "Loading";

export default function Loader() {
  return (
    <div
      role="status"
      aria-live="polite"
      className="flex min-h-[70vh] w-full flex-col items-center justify-center gap-6 px-4"
    >
      <div className="relative flex h-32 w-32 items-center justify-center sm:h-40 sm:w-40">
        {/* Breathing red glow */}
        <span className="loader-glow absolute inset-0 rounded-full bg-red-600/40 blur-2xl" />

        {/* Sound-wave rings */}
        <span className="loader-ring absolute inset-0 rounded-full border border-red-500/60" />
        <span
          className="loader-ring absolute inset-0 rounded-full border border-red-500/60"
          style={{ animationDelay: "0.9s" }}
        />

        {/* Spinning disc with logo */}
        <div className="loader-spin relative h-full w-full overflow-hidden rounded-full border-4 border-neutral-900 shadow-[0_0_30px_rgba(220,38,38,0.45)]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={LOGO_SRC}
            alt=""
            className="h-full w-full object-cover"
          />
        </div>
      </div>

      {/* Label with animated dots */}
      <p className="text-sm tracking-[0.3em] text-white/70 uppercase sm:text-base">
        {LABEL}
        <span className="loader-dot">.</span>
        <span className="loader-dot" style={{ animationDelay: "0.2s" }}>.</span>
        <span className="loader-dot" style={{ animationDelay: "0.4s" }}>.</span>
      </p>

      <style>{`
        @keyframes loader-spin { to { transform: rotate(360deg); } }
        @keyframes loader-glow { 0%,100% { opacity: .5; transform: scale(.9); } 50% { opacity: 1; transform: scale(1.1); } }
        @keyframes loader-ring { 0% { transform: scale(1); opacity: .7; } 100% { transform: scale(1.7); opacity: 0; } }
        @keyframes loader-dot { 0%,100% { opacity: .2; } 50% { opacity: 1; } }
        .loader-spin { animation: loader-spin 2.4s linear infinite; }
        .loader-glow { animation: loader-glow 2.4s ease-in-out infinite; }
        .loader-ring { animation: loader-ring 1.8s ease-out infinite; }
        .loader-dot { animation: loader-dot 1.2s ease-in-out infinite; }
        @media (prefers-reduced-motion: reduce) {
          .loader-spin, .loader-glow, .loader-ring, .loader-dot { animation: none; }
        }
      `}</style>
    </div>
  );
}
