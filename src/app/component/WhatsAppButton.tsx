"use client";

import { MessageCircle } from "lucide-react";

export default function WhatsAppButton() {
  return <a href="https://wa.me/212694113431?text=Bonjour%20Abdelmounaim%2C%20j%27ai%20vu%20votre%20portfolio%20et%20j%27aimerais%20discuter%20d%27un%20projet." target="_blank" rel="noreferrer" aria-label="Écrire sur WhatsApp" className="fixed bottom-5 right-5 z-40 grid h-12 w-12 place-items-center rounded-full bg-[#25d366] text-white shadow-lg transition hover:scale-105 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#25d366] sm:bottom-7 sm:right-7"><MessageCircle className="h-5 w-5" /></a>;
}
