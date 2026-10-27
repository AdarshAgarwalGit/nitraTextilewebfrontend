import "./globals.css";

export const metadata = {
  title: "NitraWebFrontend",
  description: "A JavaScript Next.js application.",
  icons: {
    icon: "/icon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
