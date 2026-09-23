"use client";
import { ArrowDownRight, Sparkles } from "lucide-react";

const stack = ["Next.js", "React", "TypeScript", "Node.js", "Laravel", "WordPress", "WooCommerce", "DevOps", "Tailwind CSS", "Shopify", "GraphQL", "Prisma", "MySQL", "N8N", "Stripe",]
;

export function Hero() {
  return (
    <section
      id="home"
      className="relative isolate overflow-hidden bg-[#0b0724] px-5 pb-20 pt-32 text-[#faf8ff] sm:px-8 lg:min-h-[min(900px,100vh)] lg:px-12 lg:pb-28 lg:pt-44"
    >
      <div className="hero-grid pointer-events-none absolute inset-0 opacity-60" />
      <div className="pointer-events-none absolute -right-32 top-24 h-80 w-80 rounded-full bg-[#23d7ff]/10 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 left-0 h-72 w-72 rounded-full bg-[#725cff]/10 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[1.08fr_.92fr] lg:gap-20">
        <div className="reveal">
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-[#23d7ff]/30 bg-[#23d7ff]/10 px-3 py-2 text-[10px] font-bold uppercase tracking-[0.18em] text-[#baf7ff]">
            <Sparkles className="h-3.5 w-3.5" />
            Full Stack Developer
          </div>

          <div className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-[#d2cbed] sm:text-sm">
            ABDELMOUNAIM ELABIADE
            <span className="ml-3 text-[#f5d35f]">·</span>
            <span className="ml-3 text-[#d2cbed]/80">Logicat</span>
          </div>

          <h1 className="max-w-4xl text-3xl font-black leading-[0.98] tracking-[-0.055em] sm:text-6xl lg:text-[5.25rem]">
            Je conçois des applications web modernes, des plateformes e-commerce et des solutions digitales de la conception au déploiement.
          </h1>

          <p className="mt-7 max-w-2xl text-base leading-8 text-[#d2cbed] sm:text-lg">
            Je développe des expériences digitales utiles, performantes et durables pour les marques, les équipes internes et les projets à forte valeur métier.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#PROJECT"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#23d7ff] to-[#b14cff] px-5 py-3.5 text-sm font-extrabold text-[#0d092a] transition duration-300 hover:-translate-y-0.5 hover:from-[#52e7ff] hover:to-[#c86cff]"
            >
              Voir mes projets
              <ArrowDownRight className="h-4 w-4" />
            </a>
            <a
              href="#CONTACT"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-5 py-3.5 text-sm font-bold text-white transition duration-300 hover:border-[#f5d35f]/70 hover:text-[#72efff]"
            >
              Me contacter
            </a>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-3 text-sm text-[#d2cbed]">
            <span className="inline-flex items-center gap-2">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#23d7ff]/60" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[#23d7ff]" />
              </span>
              Based in Morocco
            </span>
            <span className="text-[#8d86b9]">•</span>
            <span>Available for international opportunities</span>
          </div>
        </div>

        <div className="reveal relative" style={{ transitionDelay: "120ms" }}>
          <div className="relative overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.04] p-4 shadow-[0_30px_80px_rgba(16,10,42,0.42)]">
            <div className="rounded-[22px] border border-white/10 bg-[#120d2e]/80 p-5">
              <div className="flex items-center justify-between border-b border-white/10 pb-4 text-xs font-bold uppercase tracking-[0.18em] text-[#d2cbed]">
                <span>Stack</span>
                <span className="text-[#f5d35f]">Core</span>
              </div>

              <div className="mt-5 flex flex-wrap gap-2.5">
                {stack.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-[#23d7ff]/20 bg-[#23d7ff]/8 px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.12em] text-[#d9f8ff]"
                  >
                    {item}
                  </span>
                ))}
              </div>

              <div className="mt-7 rounded-2xl border border-[#f5d35f]/20 bg-[#f5d35f]/8 p-4">
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#f5d35f]">Approche</p>
                <p className="mt-3 text-base font-semibold leading-7 text-[#f3f0ff]">
                  Du concept au déploiement, avec simplicité, performance et fiabilité à chaque étape.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
