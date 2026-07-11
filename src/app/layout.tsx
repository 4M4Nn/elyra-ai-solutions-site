import type { Metadata } from "next";
import { Inter, Sora } from "next/font/google";
import Script from "next/script";
import "./globals.css";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { company, siteUrl } from "@/lib/data";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${company.name} — AI Agent Products for Growing Businesses`,
    template: `%s — ${company.shortName}`,
  },
  description: company.description,
  keywords: [
    "AI SEO agent",
    "AEO agent",
    "answer engine optimization software",
    "multi-tenant SaaS AI platform",
    "AI visibility tracking",
    "white-label SEO tool for agencies",
    "Elyra AI Solutions",
  ],
  openGraph: {
    title: `${company.name} — AI Agent Products for Growing Businesses`,
    description: company.description,
    siteName: company.name,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${company.name} — AI Agent Products for Growing Businesses`,
    description: company.description,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${sora.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <Script src="https://checkout.razorpay.com/v1/checkout.js" strategy="afterInteractive" />
      </body>
    </html>
  );
}
