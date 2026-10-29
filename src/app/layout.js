import "./globals.css";

export const metadata = {
  title: "Rafiul Islam Sagor | Official Website",
  description: "Official website of Rafiul Islam Sagor. Coming soon.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}