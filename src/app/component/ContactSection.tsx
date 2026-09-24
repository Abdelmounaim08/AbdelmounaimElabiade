"use client";

import { useState } from "react";
import type { FormEvent } from "react";
import { ArrowUpRight, Linkedin, Mail, MessageCircle } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

const contactEmails = ["abdomel2002@gmail.com", "abdomounaim9@gmail.com"];
const whatsappUrl = "https://wa.me/212694113431?text=Bonjour%20Abdelmounaim%2C%20j%27ai%20vu%20votre%20portfolio%20et%20j%27aimerais%20discuter%20d%27un%20projet.";

export default function ContactSection() {
  const { t } = useLanguage();
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();
    if (name.length < 2 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || message.length < 10) { setStatus("error"); return; }
    setStatus("sending");
    try {
      const response = await fetch("/api/contact", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ name, email, message, website: data.get("website") }) });
      if (!response.ok) throw new Error("Contact delivery failed");
      form.reset();
      setStatus("success");
    } catch { setStatus("error"); }
  }

  return <section id="contact" className="scroll-mt-24 surface-muted border-t border-theme px-5 py-24 sm:px-8 lg:px-12 lg:py-32"><div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[.8fr_1.2fr] lg:gap-24">
    <div className="reveal"><p className="section-label">{t.contact.label}</p><h2 className="mt-4 text-4xl font-black tracking-[-.04em] sm:text-5xl">{t.contact.title}</h2><p className="text-muted mt-6 max-w-md leading-7">{t.contact.text}</p><div className="mt-8 space-y-3">{contactEmails.map((email) => <a key={email} href={`mailto:${email}`} className="surface flex items-center gap-3 rounded-xl border p-4 text-sm font-bold transition hover:border-[#8c72ff]"><Mail className="h-5 w-5 text-[#48dfff]" />{email}</a>)}<a href={whatsappUrl} target="_blank" rel="noreferrer" className="surface flex items-center gap-3 rounded-xl border p-4 text-sm font-bold transition hover:border-[#25d366]"><MessageCircle className="h-5 w-5 text-[#25d366]" />{t.contact.whatsapp}<ArrowUpRight className="ml-auto h-4 w-4" /></a><a href="https://www.linkedin.com/in/abdelmounaim-elabiade/" target="_blank" rel="noreferrer" className="surface flex items-center gap-3 rounded-xl border p-4 text-sm font-bold transition hover:border-[#8c72ff]"><Linkedin className="h-5 w-5 text-[#48dfff]" />LinkedIn<ArrowUpRight className="ml-auto h-4 w-4" /></a></div></div>
    <form onSubmit={handleSubmit} className="reveal surface rounded-2xl border p-6 sm:p-8" noValidate><div className="grid gap-5 sm:grid-cols-2"><label className="text-sm font-bold">{t.contact.name}<input name="name" required minLength={2} autoComplete="name" className="surface-muted border-theme mt-2 w-full rounded-xl border px-4 py-3 text-sm outline-none transition placeholder:text-muted focus:border-[#8c72ff]" /></label><label className="text-sm font-bold">{t.contact.email}<input name="email" required type="email" autoComplete="email" className="surface-muted border-theme mt-2 w-full rounded-xl border px-4 py-3 text-sm outline-none transition placeholder:text-muted focus:border-[#8c72ff]" /></label></div><label className="mt-5 block text-sm font-bold">{t.contact.message}<textarea name="message" required minLength={10} rows={6} placeholder={t.contact.messagePlaceholder} className="surface-muted border-theme mt-2 w-full resize-none rounded-xl border px-4 py-3 text-sm outline-none transition placeholder:text-muted focus:border-[#8c72ff]" /></label><label className="sr-only">{t.contact.honeypot}<input name="website" tabIndex={-1} autoComplete="off" /></label><div className="mt-6 flex flex-col items-start gap-3 sm:flex-row sm:items-center sm:justify-between"><button type="submit" disabled={status === "sending"} className="inline-flex items-center gap-2 rounded-full bg-[#23d7ff] px-5 py-3 text-sm font-extrabold text-[#0d092a] transition hover:bg-[#72efff] disabled:cursor-wait disabled:opacity-60">{status === "sending" ? t.contact.sending : t.contact.submit}<ArrowUpRight className="h-4 w-4" /></button>{status === "success" && <p role="status" className="text-xs font-semibold text-[#25a55b]">{t.contact.sent}</p>}{status === "error" && <p role="alert" className="text-xs font-semibold text-red-500">{t.contact.error}</p>}</div></form>
  </div></section>;
}
