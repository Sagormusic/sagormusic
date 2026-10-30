import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";


export const metadata = {
  title: "Sagor Music Cassette Company",
  description: "Official website of Sagor Music Cassette Company",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full antialiased">
      {/* pb-16 leaves room for the mobile bottom tab bar */}
      <body className="min-h-full bg-black pb-16 text-white md:pb-0">
        <Navbar></Navbar>
        {children}
        <Footer></Footer>
      </body>
    </html>
  );
}
