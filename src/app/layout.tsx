import React from "react"
import type { Metadata, Viewport } from "next";
import { Inter, Noto_Sans_Arabic } from "next/font/google";
import "./globals.css";
import { LocaleProvider } from "@/lib/i18n/locale-context";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const notoSansArabic = Noto_Sans_Arabic({
  subsets: ["arabic"],
  variable: "--font-arabic",
});

export const metadata: Metadata = {
  title: "Mariot Group - Commercial Kitchen Equipment",
  description:
    "Premium commercial kitchen equipment supplier in Dubai. Restaurant equipment, bakery line, coffee machines, and more. 15+ years of experience.",
  keywords: [
    "commercial kitchen equipment",
    "restaurant equipment Dubai",
    "kitchen equipment UAE",
    "Mariot Group",
    "bakery equipment",
    "coffee machines",
  ],
  authors: [{ name: "Mariot Group" }],
  openGraph: {
    title: "Mariot Group - Commercial Kitchen Equipment",
    description:
      "Premium commercial kitchen equipment supplier in Dubai with 15+ years of experience.",
    type: "website",
    locale: "en_AE",
    alternateLocale: "ar_AE",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0891b2",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" dir="ltr" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${notoSansArabic.variable} antialiased`}
      >
        <LocaleProvider>{children}</LocaleProvider>
      </body>
    </html>
  );
}
