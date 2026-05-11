import type { Metadata } from "next";
import { Montserrat, Playfair_Display } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL
  ? process.env.NEXT_PUBLIC_SITE_URL.replace(/\/?$/, "/")
  : "http://localhost:3000/";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Sultana — Moroccan wellness (demo)",
  description:
    "Demo boutique for hammam-inspired rituals: beldi soap, ghassoul, argan oils, and kessa exfoliation—styled after Moroccan wellness traditions.",
  openGraph: {
    title: "Sultana — Moroccan wellness",
    description: "Hammam rituals, natural textures, quiet luxury.",
    images: [{ url: "/images/moroccan-hammam.webp", width: 1200, height: 630 }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${montserrat.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-cream font-sans text-chocolate">
        {children}
      </body>
    </html>
  );
}
