import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Web Development Portfolio",
  description: "Professional web development services and portfolio",
  viewport: "width=device-width, initial-scale=1",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased min-h-screen bg-slate-900 font-sans">
        {children}
      </body>
    </html>
  );
}