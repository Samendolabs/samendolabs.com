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
    "Samendo Labs builds software that does the work for the businesses that keep everyday life running.",
  openGraph: {
    title: "Samendo Labs",
    description:
      "We build software that does the work for the businesses that keep everyday life running.",
    url: "https://samendolabs.com",
    siteName: "Samendo Labs",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Samendo Labs",
    description:
      "We build software that does the work for the businesses that keep everyday life running.",
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
