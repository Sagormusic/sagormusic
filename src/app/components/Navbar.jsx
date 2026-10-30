"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

// ---------- Content (edit here only) ----------
const BRAND = "Sagor Music";

// All site pages (shown on desktop top bar and in the mobile menu)
const PAGES = [
  { label: "Home", href: "/", icon: "home" },
  { label: "About", href: "/about", icon: "about" },
  { label: "Music", href: "/music", icon: "music" },
  { label: "Artists", href: "/artists", icon: "artists" },
  { label: "Shop", href: "/shop", icon: "shop" },
  { label: "Services", href: "/services", icon: "services" },
  { label: "Contact", href: "/contact", icon: "contact" },
];

// Pages shown in the mobile bottom bar (YouTube / Facebook style)
const BOTTOM_TABS = ["/", "/music", "/artists", "/shop", "/contact"];

// Extra external options shown only inside the mobile menu
const OPTIONS = [
  {
    label: "Label YouTube Channel",
    href: "https://youtube.com/@sagormusiccassettecompany",
  },
  {
    label: "Rafiul Islam YouTube Channel",
    href: "https://www.youtube.com/@RafiulislamBGM",
  },
  {
    label: "Order on Fourthwall",
    href: "https://rafiulislam-shop.fourthwall.com/?utm_medium=product_shelf&utm_source=youtube",
  },
];

// ---------- Icons (inline SVG paths, 24x24 stroke) ----------
const ICON_PATHS = {
  home: "M3 11l9-8 9 8v10a1 1 0 0 1-1 1h-5v-7H9v7H4a1 1 0 0 1-1-1z",
  about: "M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20zM12 16v-4M12 8h.01",
  music:
    "M9 18V5l12-2v13M9 18a3 3 0 1 1-6 0 3 3 0 0 1 6 0zm12-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0z",
  artists:
    "M17 21v-2a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4v2M10 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM21 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75",
  shop: "M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4zM3 6h18M16 10a4 4 0 0 1-8 0",
  services:
    "M4 7h16a1 1 0 0 1 1 1v11a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1zM9 7V5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2",
  contact:
    "M4 4h16a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1zM22 6l-10 7L2 6",
  menu: "M4 6h16M4 12h16M4 18h16",
  close: "M6 6l12 12M18 6L6 18",
  external: "M14 3h7v7M21 3l-9 9M10 5H5a1 1 0 0 0-1 1v13a1 1 0 0 0 1 1h13a1 1 0 0 0 1-1v-5",
};

function Icon({ name, className = "h-6 w-6" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d={ICON_PATHS[name]} />
    </svg>
  );
}

// Shared glass style (blur + translucent dark + thin light border)
const GLASS = "bg-black/40 backdrop-blur-xl backdrop-saturate-150";

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const isActive = (href) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  // Close the mobile menu with the Escape key
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const bottomTabs = PAGES.filter((p) => BOTTOM_TABS.includes(p.href));

  return (
    <>
      {/* ===== Desktop: top navbar ===== */}
      <header
        className={`fixed inset-x-0 top-0 z-50 hidden h-16 items-center justify-between border-b border-white/10 px-8 md:flex ${GLASS}`}
      >
        <Link href="/" className="text-lg font-bold tracking-wide">
          <span className="text-red-500">{BRAND.split(" ")[0]}</span>{" "}
          {BRAND.split(" ").slice(1).join(" ")}
        </Link>

        <nav className="flex items-center gap-1">
          {PAGES.map((p) => (
            <Link
              key={p.href}
              href={p.href}
              className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                isActive(p.href)
                  ? "bg-red-600/90 text-white"
                  : "text-white/70 hover:bg-white/10 hover:text-white"
              }`}
            >
              {p.label}
            </Link>
          ))}
        </nav>
      </header>

      {/* ===== Mobile: top bar (brand + menu button on the right) ===== */}
      <header
        className={`fixed inset-x-0 top-0 z-50 flex h-14 items-center justify-between border-b border-white/10 px-4 md:hidden ${GLASS}`}
      >
        <Link
          href="/"
          onClick={() => setOpen(false)}
          className="text-base font-bold tracking-wide"
        >
          <span className="text-red-500">{BRAND.split(" ")[0]}</span>{" "}
          {BRAND.split(" ").slice(1).join(" ")}
        </Link>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          className="rounded-full p-2 text-white/90 transition hover:bg-white/10"
        >
          <Icon name={open ? "close" : "menu"} />
        </button>
      </header>

      {/* ===== Mobile: dropdown menu (pages + options) ===== */}
      {open && (
        <>
          {/* Click outside to close */}
          <div
            className="fixed inset-0 z-40 bg-black/50 md:hidden"
            onClick={() => setOpen(false)}
          />
          <div
            className={`fixed inset-x-3 top-16 z-50 max-h-[75vh] overflow-y-auto rounded-2xl border border-white/10 p-3 shadow-2xl md:hidden ${GLASS} bg-black/60`}
          >
            <p className="px-3 pb-1 pt-2 text-xs font-semibold uppercase tracking-widest text-white/40">
              Pages
            </p>
            {PAGES.map((p) => (
              <Link
                key={p.href}
                href={p.href}
                onClick={() => setOpen(false)}
                className={`flex items-center gap-3 rounded-xl px-3 py-3 text-sm font-medium transition ${
                  isActive(p.href)
                    ? "bg-red-600/90 text-white"
                    : "text-white/80 hover:bg-white/10"
                }`}
              >
                <Icon name={p.icon} className="h-5 w-5" />
                {p.label}
              </Link>
            ))}

            <p className="px-3 pb-1 pt-4 text-xs font-semibold uppercase tracking-widest text-white/40">
              Options
            </p>
            {OPTIONS.map((o) => (
              <a
                key={o.href}
                href={o.href}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
                className="flex items-center justify-between rounded-xl px-3 py-3 text-sm font-medium text-white/80 transition hover:bg-white/10"
              >
                {o.label}
                <Icon name="external" className="h-4 w-4 text-white/50" />
              </a>
            ))}
          </div>
        </>
      )}

      {/* ===== Mobile: bottom tab bar ===== */}
      <nav
        className={`fixed inset-x-0 bottom-0 z-50 flex h-16 items-stretch justify-around border-t border-white/10 pb-[env(safe-area-inset-bottom)] md:hidden ${GLASS}`}
      >
        {bottomTabs.map((p) => (
          <Link
            key={p.href}
            href={p.href}
            onClick={() => setOpen(false)}
            className={`flex flex-1 flex-col items-center justify-center gap-1 text-[11px] font-medium transition ${
              isActive(p.href) ? "text-red-500" : "text-white/60"
            }`}
          >
            <Icon name={p.icon} className="h-6 w-6" />
            {p.label}
          </Link>
        ))}
      </nav>

      {/* Spacer so page content is not hidden under the fixed top bar */}
      <div className="h-14 md:h-16" aria-hidden="true" />
    </>
  );
}
