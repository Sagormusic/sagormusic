import "./globals.css";

export const metadata = {
  title: "Sagor Music Cassette Company",
  description: "Official website of Sagor Music Cassette Company",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full bg-black text-white">{children}</body>
    </html>
  );
}