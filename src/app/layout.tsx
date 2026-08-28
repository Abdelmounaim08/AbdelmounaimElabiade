import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], display: "swap" });
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://abdelmounaim.dev";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: "Abdelmounaim Elabiade — Full Stack Developer", template: "%s | Abdelmounaim Elabiade" },
  description: "Portfolio d'Abdelmounaim Elabiade, développeur full stack spécialisé en Next.js, React, TypeScript, Node.js, Laravel et Tailwind CSS.",
  keywords: ["Abdelmounaim Elabiade", "développeur full stack", "Next.js", "React", "TypeScript", "Node.js", "Laravel", "Tailwind CSS"],
  authors: [{ name: "Abdelmounaim Elabiade" }],
  creator: "Abdelmounaim Elabiade",
  openGraph: { type: "website", locale: "fr_MA", url: siteUrl, title: "Abdelmounaim Elabiade — Full Stack Developer", description: "Je transforme des idées en produits web rapides, clairs et maintenables.", siteName: "Abdelmounaim Elabiade", images: [{ url: "/image/profile.png", width: 1200, height: 630, alt: "Abdelmounaim Elabiade" }] },
  twitter: { card: "summary_large_image", title: "Abdelmounaim Elabiade — Full Stack Developer", description: "Produits web modernes, du premier écran à la mise en production.", images: ["/image/profile.png"] },
  icons: { icon: "/image/download.svg" }, robots: { index: true, follow: true },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="fr" suppressHydrationWarning><body className={inter.className}>{children}</body></html>; }
