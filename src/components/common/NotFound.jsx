import Link from "next/link";

// NotFound: 404 screen. The "0" is a spinning vinyl record.
// Server component (no hooks). Keyframes live inside this file.

const TITLE = "Track not found";
const TEXT = "The page you are looking for does not exist or has been moved.";
const BUTTON_LABEL = "Back to Home";
const BUTTON_HREF = "/";

export default function NotFound() {
  return (
    <div className="flex min-h-[80vh] w-full flex-col items-center justify-center gap-6 px-4 text-center">
      {/* 4 [vinyl] 4 */}
      <div className="flex items-center justify-center gap-1 sm:gap-3">
        <span className="font-[family-name:var(--font-heading)] text-7xl font-semibold text-white sm:text-9xl">
          4
        </span>

        <div className="relative flex h-20 w-20 items-center justify-center sm:h-32 sm:w-32">
          <span className="nf-glow absolute inset-0 rounded-full bg-red-600/40 blur-2xl" />
          <div className="nf-spin relative h-full w-full rounded-full border-2 border-neutral-800 bg-[repeating-radial-gradient(circle,#0a0a0a_0,#0a0a0a_2px,#1a1a1a_3px,#0a0a0a_4px)] shadow-[0_0_30px_rgba(220,38,38,0.45)]">
            {/* Red center label */}
            <span className="absolute top-1/2 left-1/2 h-1/3 w-1/3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-red-600" />
            {/* Center hole */}
            <span className="absolute top-1/2 left-1/2 h-[8%] w-[8%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-black" />
            {/* Light sheen */}
            <span className="absolute inset-0 rounded-full bg-[conic-gradient(from_0deg,transparent,rgba(255,255,255,0.18),transparent_30%)]" />
          </div>
        </div>

        <span className="font-[family-name:var(--font-heading)] text-7xl font-semibold text-white sm:text-9xl">
          4
        </span>
      </div>

      <h1 className="font-[family-name:var(--font-heading)] text-3xl text-white sm:text-5xl">
        {TITLE}
      </h1>

      <p className="max-w-md text-sm text-white/60 sm:text-base">{TEXT}</p>

      <Link
        href={BUTTON_HREF}
        className="nf-pulse rounded-full bg-red-600 px-7 py-3 text-sm font-medium text-white sm:text-base"
      >
        {BUTTON_LABEL}
      </Link>

      <style>{`
        @keyframes nf-spin { to { transform: rotate(360deg); } }
        @keyframes nf-glow { 0%,100% { opacity: .5; transform: scale(.9); } 50% { opacity: 1; transform: scale(1.1); } }
        @keyframes nf-pulse { 0%,100% { box-shadow: 0 0 0 0 rgba(220,38,38,.5); } 50% { box-shadow: 0 0 0 12px rgba(220,38,38,0); } }
        .nf-spin { animation: nf-spin 3s linear infinite; }
        .nf-glow { animation: nf-glow 2.4s ease-in-out infinite; }
        .nf-pulse { animation: nf-pulse 2s ease-in-out infinite; }
        @media (prefers-reduced-motion: reduce) {
          .nf-spin, .nf-glow, .nf-pulse { animation: none; }
        }
      `}</style>
    </div>
  );
}
