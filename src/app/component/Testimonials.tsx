"use client";

import { useLanguage } from "../context/LanguageContext";

const showTestimonials = false;
const testimonials = [
  { fr: "[À COMPLÉTER : témoignage client]", en: "[TO COMPLETE: client testimonial]" },
  { fr: "[À COMPLÉTER : témoignage client]", en: "[TO COMPLETE: client testimonial]" },
  { fr: "[À COMPLÉTER : témoignage client]", en: "[TO COMPLETE: client testimonial]" },
];

export default function Testimonials() {
  const { language } = useLanguage();
  if (!showTestimonials) return null;
  return <section id="testimonials" className="px-5 py-24 sm:px-8 lg:px-12"><div className="mx-auto max-w-7xl"><p className="section-label">{language === "fr" ? "Témoignages" : "Testimonials"}</p><div className="mt-8 grid gap-4 md:grid-cols-3">{testimonials.map((item, index) => <blockquote key={index} className="surface rounded-2xl border p-6 text-sm leading-7">{item[language]}</blockquote>)}</div></div></section>;
}
