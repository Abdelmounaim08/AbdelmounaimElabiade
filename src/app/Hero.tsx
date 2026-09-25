"use client";
import { useRef, useState } from "react";
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
  "React", "Next.js", "Laravel", "WordPress", "Elementor", "Tailwind CSS",
  "Node.js", "Remix", "Shopify", "Polaris", "HTML5", "jQuery",
  "n8n", "Automation", "Python", "MCP", "MySQL", "Prisma",
  "REST", "n8n", "GraphQL", "Livewire", "Remix JS", "API",
];

export function Hero() {
  const { t } = useLanguage();

  return (
    <section
      id="home"
      className="hero-section relative isolate overflow-hidden px-5 pb-20 pt-25 sm:px-8 lg:min-h-[min(900px,100vh)] lg:px-12 lg:pb-28 lg:pt-22"
    >
      

      <div className="hero-grid pointer-events-none absolute inset-0 opacity-60" />
      <div className="pointer-events-none absolute -right-32 top-24 h-80 w-80 rounded-full bg-[#23d7ff]/10 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 left-0 h-72 w-72 rounded-full bg-[#725cff]/10 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[1.08fr_.92fr] lg:gap-20">
        <div className="reveal">
          <p
            className="mb-4 text-xs font-bold uppercase tracking-[0.24em] text-[var(--hero-muted)] sm:text-sm hero-cta-stagger"
            style={{ animationDelay: "0.1s" }}
          >
            {t.hero.name}
          </p>
          <div
            className="mb-7 inline-flex items-center gap-2 rounded-full border border-[#23d7ff]/30 bg-[#23d7ff]/10 px-3 py-2 text-[10px] font-bold uppercase tracking-[0.18em] text-[var(--hero-fg)] hero-cta-stagger"
            style={{ animationDelay: "0.2s" }}
          >
            <Sparkles className="h-3.5 w-3.5" />
            {t.hero.badge}
          </div>

          <div className="hero-tech-layout max-w-4xl">
            <div className="hero-tech-row">
              {heroTechnologies.slice(0, 2).map((technology) => <TechnologyBadge key={technology.name} {...technology} />)}
            </div>
            <h1 className="hero-gradient-title mt-5 text-[clamp(2.4rem,9vw,4.8rem)] font-black leading-[0.98] tracking-[-0.055em]">
              {t.hero.title}
            </h1>
            <div className="hero-tech-row hero-tech-row-bottom">
              {heroTechnologies.slice(2).map((technology) => <TechnologyBadge key={technology.name} {...technology} />)}
            </div>
          </div>

          <p
            className="hero-muted mt-7 max-w-2xl text-base leading-8 sm:text-lg hero-cta-stagger"
            style={{ animationDelay: "0.35s" }}
          >
            {t.hero.subtitle}
          </p>

          <div
            className="mt-8 flex flex-wrap items-center gap-4 hero-cta-stagger"
            style={{ animationDelay: "0.5s" }}
          >
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

          <div
            className="hero-muted mt-8 flex flex-wrap items-center gap-3 text-sm hero-cta-stagger"
            style={{ animationDelay: "0.65s" }}
          >
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

        <Tilt3DStackCard />
      </div>
    </section>
  );
}

function Tilt3DStackCard() {
  const cardRef = useRef<HTMLDivElement>(null);
  const [transform, setTransform] = useState(
    "rotateX(0deg) rotateY(0deg) translateZ(0px)"
  );
  const [glowPos, setGlowPos] = useState({ x: 50, y: 50 });

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const px = x / rect.width;
    const py = y / rect.height;

    const rotateY = (px - 0.5) * 18;
    const rotateX = (0.5 - py) * 18;

    setTransform(
      `perspective(1200px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(10px)`
    );
    setGlowPos({ x: px * 100, y: py * 100 });
  }

  function handleMouseLeave() {
    setTransform("perspective(1200px) rotateX(0deg) rotateY(0deg) translateZ(0px)");
    setGlowPos({ x: 50, y: 50 });
  }

  return (
    <div
      className="reveal relative"
      style={{ transitionDelay: "120ms", perspective: "1400px" }}
    >
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="relative overflow-hidden rounded-[28px] border border-[var(--hero-line)] bg-[var(--hero-card)] p-4 shadow-[0_30px_80px_rgba(16,10,42,0.28)] transition-transform duration-300 ease-out will-change-transform"
        style={{ transform, transformStyle: "preserve-3d" }}
      >
        <div
          className="pointer-events-none absolute inset-0 z-20 opacity-70 transition-opacity duration-300"
          style={{
            background: `radial-gradient(circle at ${glowPos.x}% ${glowPos.y}%, rgba(114,239,255,0.18), transparent 55%)`,
          }}
        />
        <div
          className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-[#23d7ff]/25 blur-3xl"
          style={{ transform: "translateZ(60px)" }}
        />
        <div
          className="pointer-events-none absolute -bottom-12 -left-12 h-44 w-44 rounded-full bg-[#b14cff]/25 blur-3xl"
          style={{ transform: "translateZ(40px)" }}
        />

        <div
          className="relative z-10 rounded-[22px] border border-[var(--hero-line)] bg-[var(--hero-soft)] p-5"
          style={{ transform: "translateZ(30px)", transformStyle: "preserve-3d" }}
        >
          <div className="hero-muted flex items-center justify-between border-b border-[var(--hero-line)] pb-4 text-xs font-bold uppercase tracking-[0.18em]">
            <span>Stack</span>
            <span className="text-[#f5d35f]">Stack</span>
          </div>

          <div className="mt-5 flex flex-wrap gap-2.5">
            {stack.map((item, index) => (
              <span
                key={`${item}-${index}`}
                className="rounded-full border border-[#23d7ff]/20 bg-[#23d7ff]/8 px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.12em] text-[var(--hero-fg)] transition-transform duration-300 hover:-translate-y-0.5 hover:border-[#23d7ff]/60"
                style={{ transform: `translateZ(${10 + (index % 4) * 6}px)` }}
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function TechnologyBadge({ name, delay, secondary = false }: { name: string; delay: string; secondary?: boolean }) {
  return (
    <span
      className={`hero-tech-badge hero-magnetic-badge ${secondary ? "hero-tech-secondary" : ""}`}
      style={{
        "--hero-tech-delay": delay,
        animationDelay: delay,
      } as React.CSSProperties}
    >
      {name}
    </span>
  );
}