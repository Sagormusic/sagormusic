import { Cormorant_Garamond, Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/common/ScrollToTop";
import "./globals.css";

// Heading font (applied to h1-h6 in globals.css)
const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-cormorant",
});

// Body font (default sans font for the whole site)
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata = {
  title: "Sagor Music Cassette Company",
  description: "Official website of Sagor Music Cassette Company",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`h-full antialiased ${cormorant.variable} ${inter.variable}`}
    >
      {/* pb-16 leaves room for the mobile bottom tab bar */}
      <body className="min-h-full bg-black pb-16 text-white md:pb-0">
        <Navbar></Navbar>
        {children}
        <Footer></Footer>
        <ScrollToTop></ScrollToTop>
      </body>
    </html>
  );
}
