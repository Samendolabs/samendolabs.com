import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://samendolabs.com"),
  title: "Samendo Labs",
  description:
    "We build profitable AI products, and we help small businesses build their AI strategy. Hands-on AI help without Big Four prices.",
  openGraph: {
    title: "Samendo Labs",
    description:
      "We build profitable AI products, and we help small businesses build their AI strategy. Hands-on AI help without Big Four prices.",
    url: "https://samendolabs.com",
    siteName: "Samendo Labs",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Samendo Labs",
    description:
      "We build profitable AI products, and we help small businesses build their AI strategy. Hands-on AI help without Big Four prices.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
