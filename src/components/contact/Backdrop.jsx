// Background of the Contact page only.
// Midnight navy = trust and calm, teal glow = open conversation, champagne glow = warm and premium.
// Fades to near-black at the bottom so it blends into the footer.

export default function Backdrop() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
      style={{
        background:
          "linear-gradient(180deg, #0a1020 0%, #0d1736 45%, #060914 100%)",
      }}
    >
      <style>{`
        @keyframes ct-drift {
          from { transform: translate3d(0, 0, 0) scale(1); }
          to   { transform: translate3d(40px, -30px, 0) scale(1.15); }
        }
        .ct-orb { animation: ct-drift 18s ease-in-out infinite alternate; }
        @media (prefers-reduced-motion: reduce) {
          .ct-orb { animation: none; }
        }
      `}</style>

      {/* Teal, top left */}
      <div
        className="ct-orb absolute -left-10 top-20 h-72 w-72 rounded-full blur-3xl sm:h-96 sm:w-96"
        style={{ background: "rgba(45, 212, 191, 0.18)" }}
      ></div>

      {/* Indigo, right side */}
      <div
        className="ct-orb absolute -right-10 top-1/3 h-72 w-72 rounded-full blur-3xl sm:h-96 sm:w-96"
        style={{ background: "rgba(99, 102, 241, 0.2)", animationDelay: "-7s" }}
      ></div>

      {/* Champagne gold, bottom */}
      <div
        className="ct-orb absolute bottom-10 left-1/3 h-64 w-64 rounded-full blur-3xl sm:h-80 sm:w-80"
        style={{ background: "rgba(232, 194, 122, 0.14)", animationDelay: "-12s" }}
      ></div>
    </div>
  );
}
