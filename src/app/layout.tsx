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
  title: "Samendo Labs — An AI-native company",
  description:
    "Samendo Labs is an applied AI company building intelligent software for the industries that run the real economy.",
  openGraph: {
    title: "Samendo Labs — An AI-native company",
    description:
      "An applied AI company building intelligent software for the industries that run the real economy.",
    url: "https://samendolabs.com",
    siteName: "Samendo Labs",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Samendo Labs — An AI-native company",
    description:
      "An applied AI company building intelligent software for the industries that run the real economy.",
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
