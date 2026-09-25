import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "./context/LanguageContext";
import ThemeProvider from "../components/ThemeProvider";

const inter = Inter({ subsets: ["latin"], display: "swap" });
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://abdelmounaim-elabiade.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: "Abdelmounaim Elabiade — Développeur Full Stack | Maroc", template: "%s | Abdelmounaim Elabiade" },
  description: "Découvrez le portfolio d'Abdelmounaim Elabiade, développeur Full Stack au Maroc. Création de sites web et d'applications modernes avec Next.js, Laravel, WooCommerce et Shopify.",
  keywords: ["Abdelmounaim Elabiade", "développeur full stack", "Maroc", "Next.js", "Laravel", "WooCommerce", "Shopify"],
  authors: [{ name: "Abdelmounaim Elabiade" }],
  creator: "Abdelmounaim Elabiade",
  alternates: { canonical: siteUrl, languages: { "fr-MA": siteUrl, "en": `${siteUrl}/?lang=en` } },
  openGraph: { type: "website", locale: "fr_MA", url: siteUrl, title: "Abdelmounaim Elabiade — Développeur Full Stack | Maroc", description: "Découvrez le portfolio d'Abdelmounaim Elabiade, développeur Full Stack au Maroc. Création de sites web et d'applications modernes avec Next.js, Laravel, WooCommerce et Shopify.", siteName: "Abdelmounaim Elabiade", images: [{ url: "/image/mounaim07.jpeg", alt: "Abdelmounaim Elabiade, développeur Full Stack" }] },
  twitter: { card: "summary_large_image", title: "Abdelmounaim Elabiade — Full Stack Developer", description: "Découvrez le portfolio d'Abdelmounaim Elabiade, développeur Full Stack au Maroc.", images: ["/image/mounaim07.jpeg"] },
  icons: { icon: "/image/download.svg" }, robots: { index: true, follow: true },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const structuredData = { "@context": "https://schema.org", "@type": "Person", name: "Abdelmounaim Elabiade", jobTitle: "Full Stack Developer", url: siteUrl, sameAs: ["https://github.com/Abdelmounaim08", "https://www.linkedin.com/in/abdelmounaim-elabiade/"] };
  return (
    <html lang="fr" suppressHydrationWarning>
      <body className={inter.className}>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <LanguageProvider>{children}</LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
