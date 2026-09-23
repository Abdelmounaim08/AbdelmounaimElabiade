import Image from "next/image";

const facts = [["6+", "technologies cœur"], ["10", "projets présentés"], ["1", "vision produit"]];
const focus = [
  "Full Stack Development",
  "E-commerce",
  "WordPress / WooCommerce",
  "APIs",
  "DevOps",
  "Automation",
  "UI/UX",
  "Performance",
  "automatisation",
  
];

export default function About() {
  return (
    <section id="ABOUT" className="px-5 py-24 sm:px-8 lg:px-12 lg:py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[0.78fr_1.22fr] lg:gap-24">
        <div className="reveal relative mx-auto w-full max-w-sm">
          <div className="absolute -bottom-5 -right-5 h-full w-full rounded-[1.5rem] border border-[#23d7ff]/35" />
          <div className="relative aspect-[4/5] overflow-hidden rounded-[1.5rem] bg-[#dce9df] dark:bg-[#21155a]">
            <Image
              src="/image/hero.png"
              alt="Abdelmounaim Elabiade, développeur full stack"
              fill
              sizes="(max-width: 1024px) 80vw, 30vw"
              className="object-cover"
            />
          </div>
        </div>

        <div className="reveal" style={{ transitionDelay: "120ms" }}>
          <p className="section-label">À propos</p>
          <h2 className="mt-4 max-w-2xl text-4xl font-black tracking-[-0.04em] sm:text-5xl">
            Construire des produits utiles, pas seulement du code.
          </h2>

          <p className="text-muted mt-6 max-w-2xl text-base leading-8">
            Je suis développeur Full Stack basé au Maroc, actuellement Full Stack Developer chez Logicat.
            Je travaille sur des projets web et digitaux allant des sites vitrines et plateformes e-commerce aux applications métier et solutions automatisées.
          </p>

          <p className="text-muted mt-4 max-w-2xl text-base leading-8">
            Mon expérience couvre le développement frontend et backend, WordPress/WooCommerce, intégration d&apos;API, déploiement et automatisation.
            J&apos;aime concevoir des produits clairs, performants et faciles à utiliser, avec un vrai sens du business et de la valeur utilisateur.
          </p>

          <div className="mt-10 flex flex-wrap gap-2.5">
            {focus.map((item) => (
              <span
                key={item}
                className="rounded-full border border-[#23d7ff]/20 bg-[#23d7ff]/8 px-3 py-2 text-xs font-bold uppercase tracking-[0.12em] text-[#1a1c35] dark:text-[#d9f8ff]"
              >
                {item}
              </span>
            ))}
          </div>

          <div className="mt-9 grid grid-cols-3 gap-3 border-y border-theme py-5 sm:max-w-lg sm:gap-7">
            {facts.map(([value, label]) => (
              <div key={label}>
                <p className="text-2xl font-black sm:text-3xl">{value}</p>
                <p className="text-muted mt-1 text-[11px] font-bold uppercase leading-4 tracking-wide">{label}</p>
              </div>
            ))}
          </div>

          <div className="mt-6 flex flex-wrap items-center gap-3 text-sm text-[#1a1c35] dark:text-[#f5f1ff]">
            <span className="inline-flex items-center rounded-full border border-[#f5d35f]/30 bg-[#f5d35f]/10 px-3 py-1.5 font-semibold text-[#6758e8] dark:text-[#f5d35f]">
              Based in Morocco
            </span>
            <span className="inline-flex items-center rounded-full border border-[#23d7ff]/30 bg-[#23d7ff]/10 px-3 py-1.5 font-semibold text-[#0f2943] dark:text-[#baf7ff]">
              Available for international opportunities
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
