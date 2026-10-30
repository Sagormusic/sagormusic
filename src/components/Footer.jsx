import Image from "next/image";
import Link from "next/link";
import SITE, { whatsappLink } from "@/data/site";

// ---------- Content (edit here only) ----------
const LOGO_SRC = "/logo.jpeg";

const ABOUT_TEXT =
  "A creative music label dedicated to discovering talent, creating beautiful music, and bringing artists and music lovers together.";

const PAGES = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Music", href: "/music" },
  { label: "Artists", href: "/artists" },
  { label: "Shop", href: "/shop" },
  { label: "Services", href: "/services" },
  { label: "Contact", href: "/contact" },
];

// Items with an empty value are hidden automatically
const CONTACT = [
  { label: "WhatsApp", text: SITE.whatsapp, href: whatsappLink },
  { label: "Email", text: SITE.email, href: SITE.email && `mailto:${SITE.email}` },
  { label: "Phone", text: SITE.phone, href: SITE.phone && `tel:${SITE.phone}` },
  { label: "Messenger", text: SITE.messenger && "Chat with us", href: SITE.messenger },
].filter((c) => c.text && c.href);

const SOCIAL = [
  { label: "YouTube (Label)", href: SITE.social.youtubeLabel },
  { label: "YouTube (Rafiul Islam)", href: SITE.social.youtubeRafiul },
  { label: "Facebook", href: SITE.social.facebook },
  { label: "Instagram", href: SITE.social.instagram },
  { label: "Spotify", href: SITE.social.spotify },
].filter((s) => s.href);

const PAYMENTS = [
  { label: "bKash", number: SITE.bkash },
  { label: "Nagad", number: SITE.nagad },
].filter((p) => p.number);

const HEADING =
  "mb-4 text-xs font-semibold uppercase tracking-widest text-white/40";
const LINK = "text-sm text-white/70 transition hover:text-red-500";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:grid-cols-2 sm:px-6 lg:grid-cols-4 lg:px-8">
        {/* Brand */}
        <div>
          <Link href="/" className="inline-flex items-center gap-3">
            <Image
              src={LOGO_SRC}
              alt={SITE.shortName}
              width={44}
              height={44}
              className="rounded-full object-cover"
              style={{ width: 44, height: 44 }}
            />
            <span className="text-lg font-bold">{SITE.shortName}</span>
          </Link>
          <p className="mt-4 text-sm leading-relaxed text-white/60">
            {ABOUT_TEXT}
          </p>
        </div>

        {/* Pages */}
        <div>
          <h3 className={HEADING}>Pages</h3>
          <ul className="space-y-3">
            {PAGES.map((p) => (
              <li key={p.href}>
                <Link href={p.href} className={LINK}>
                  {p.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact + payment */}
        <div>
          <h3 className={HEADING}>Contact</h3>
          <ul className="space-y-3">
            {CONTACT.map((c) => (
              <li key={c.label} className="text-sm">
                <span className="text-white/40">{c.label}: </span>
                <a
                  href={c.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="break-all text-white/70 transition hover:text-red-500"
                >
                  {c.text}
                </a>
              </li>
            ))}
          </ul>

          {PAYMENTS.length > 0 && (
            <>
              <h3 className={`${HEADING} mt-8`}>Payment</h3>
              <ul className="space-y-3">
                {PAYMENTS.map((p) => (
                  <li key={p.label} className="text-sm">
                    <span className="text-white/40">{p.label}: </span>
                    <span className="text-white/70">{p.number}</span>
                  </li>
                ))}
              </ul>
            </>
          )}
        </div>

        {/* Social + shop */}
        <div>
          <h3 className={HEADING}>Follow</h3>
          <ul className="space-y-3">
            {SOCIAL.map((s) => (
              <li key={s.label}>
                <a
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={LINK}
                >
                  {s.label}
                </a>
              </li>
            ))}
          </ul>

          <a
            href={SITE.shopUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-block rounded-full bg-red-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-red-500"
          >
            Order Now
          </a>
        </div>
      </div>

      <div className="border-t border-white/10 px-4 py-5 text-center text-xs text-white/40">
        © {new Date().getFullYear()} {SITE.name}. All rights reserved.
      </div>
    </footer>
  );
}
