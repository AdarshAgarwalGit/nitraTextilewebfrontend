import "./globals.css";

export const metadata = {
  title: "NitraWebFrontend",
  description: "A JavaScript Next.js application.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
