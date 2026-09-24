"use client";
import { ArrowDownRight, Sparkles } from "lucide-react";
import { useLanguage } from "./context/LanguageContext";

const heroTechnologies = [
  { name: "React", delay: "0.8s" },
  { name: "Next.js", delay: "1s" },
  { name: "Laravel", delay: "1.2s" },
  { name: "WordPress", delay: "1.4s" },
  { name: "Elementor", delay: "1.6s", secondary: true },
  { name: "Tailwind CSS", delay: "1.8s", secondary: true },
];

const stack = [
  "React",
  "Next.js",
  "Laravel",
  "WordPress",
  "Elementor",
  "Tailwind CSS",
  "Node.js",
  "Remix",
  "Shopify",
  "Polaris",
  "HTML5",
  "jQuery",
  "n8n",
  "Automation",
  "Python",
  "MCP",
  "MySQL",
  "Prisma",
  "REST",
  "n8n",
  "GraphQL",
  "Livewire",
  "Remix JS",
  "API",
];

export function Hero() {
  const { t } = useLanguage();

  return (
    <section
      id="home"
      className="hero-section relative isolate overflow-hidden px-5 pb-20 pt-32 sm:px-8 lg:min-h-[min(900px,100vh)] lg:px-12 lg:pb-28 lg:pt-44"
    >
      <div className="hero-grid pointer-events-none absolute inset-0 opacity-60" />
      <div className="pointer-events-none absolute -right-32 top-24 h-80 w-80 rounded-full bg-[#23d7ff]/10 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 left-0 h-72 w-72 rounded-full bg-[#725cff]/10 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[1.08fr_.92fr] lg:gap-20">
        <div className="reveal">
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.24em] text-[var(--hero-muted)] sm:text-sm">
            {t.hero.name}
          </p>
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-[#23d7ff]/30 bg-[#23d7ff]/10 px-3 py-2 text-[10px] font-bold uppercase tracking-[0.18em] text-[var(--hero-fg)]">
            <Sparkles className="h-3.5 w-3.5" />
            {t.hero.badge}
          </div>

          <div className="hero-tech-layout max-w-4xl">
            <div className="hero-tech-row">
              {heroTechnologies.slice(0, 2).map((technology) => <TechnologyBadge key={technology.name} {...technology} />)}
            </div>
            <h1 className="mt-5 text-[clamp(2.4rem,9vw,4.8rem)] font-black leading-[0.98] tracking-[-0.055em]">
              {t.hero.title}
            </h1>
            <div className="hero-tech-row hero-tech-row-bottom">
              {heroTechnologies.slice(2).map((technology) => <TechnologyBadge key={technology.name} {...technology} />)}
            </div>
          </div>

          <p className="hero-muted mt-7 max-w-2xl text-base leading-8 sm:text-lg">
            {t.hero.subtitle}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#23d7ff] to-[#b14cff] px-5 py-3.5 text-sm font-extrabold text-[#0d092a] transition duration-300 hover:-translate-y-0.5 hover:from-[#52e7ff] hover:to-[#c86cff]"
            >
              {t.hero.primaryCta}
              <ArrowDownRight className="h-4 w-4" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-[var(--hero-line)] bg-[var(--hero-soft)] px-5 py-3.5 text-sm font-bold text-[var(--hero-fg)] transition duration-300 hover:border-[#f5d35f]/70 hover:text-[#72efff]"
            >
              {t.hero.secondaryCta}
            </a>
          </div>

          <div className="hero-muted mt-8 flex flex-wrap items-center gap-3 text-sm">
            <span className="inline-flex items-center gap-2">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#23d7ff]/60" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[#23d7ff]" />
              </span>
              {t.hero.based}
            </span>
            <span className="text-[#8d86b9]">•</span>
            <span>{t.hero.available}</span>
          </div>
        </div>

        <div className="reveal relative" style={{ transitionDelay: "120ms" }}>
          <div className="relative overflow-hidden rounded-[28px] border border-[var(--hero-line)] bg-[var(--hero-card)] p-4 shadow-[0_30px_80px_rgba(16,10,42,0.22)]">
            <div className="relative z-10 rounded-[22px] border border-[var(--hero-line)] bg-[var(--hero-soft)] p-5">
              <div className="hero-muted flex items-center justify-between border-b border-[var(--hero-line)] pb-4 text-xs font-bold uppercase tracking-[0.18em]">
                <span>Stack</span>
                <span className="text-[#f5d35f]">Stack</span>
              </div>

              <div className="mt-5 flex flex-wrap gap-2.5">
                {stack.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-[#23d7ff]/20 bg-[#23d7ff]/8 px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.12em] text-[var(--hero-fg)]"
                  >
                    {item}
                  </span>
                ))}
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function TechnologyBadge({ name, delay, secondary = false }: { name: string; delay: string; secondary?: boolean }) {
  return <span className={`hero-tech-badge ${secondary ? "hero-tech-secondary" : ""}`} style={{ "--hero-tech-delay": delay } as React.CSSProperties}>{name}</span>;
}
