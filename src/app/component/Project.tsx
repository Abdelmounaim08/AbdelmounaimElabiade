import Image from "next/image";
import { ArrowUpRight, Github, Sparkles } from "lucide-react";

const projects = [
  {
    title: "Logicat AR",
    type: "Site vitrine",
    category: "WordPress · Elementor",
    description:
      "Une expérience digitale en arabe pensée pour présenter les solutions de Logicat avec une navigation fluide, une identité forte et une interface adaptée au marché arabophone.",
    image: "/image/logicat.png",
    stack: ["WordPress", "Elementor", "JavaScript"],
    live: "https://ar.logicat.ma/",
    github: "",
    featured: true,
  },
  {
    title: "Mecainfo",
    type: "Plateforme digitale",
    category: "WordPress · Elementor",
    description:
      "Une plateforme dédiée aux professionnels de la réparation automobile, structurée autour des données techniques, du diagnostic et des services proposés aux ateliers.",
    image: "/image/mecainfo.png",
    stack: ["WordPress", "Elementor", "WooCommerce"],
    live: "https://www.mecainfo.com/",
    github: "",
  },
  {
    title: "CoworkPro",
    type: "Coworking",
    category: "WordPress · Elementor",
    description:
      "Un site moderne pour présenter et valoriser des espaces de coworking à Meknès, avec une expérience orientée conversion et réservation.",
    image: "/image/coworkpro.png",
    stack: ["WordPress", "Elementor", "CSS"],
    live: "https://www.coworkpro.ma/",
    github: "",
  },
  {
    title: "ChargeGo",
    type: "Mobilité électrique",
    category: "WordPress · Elementor",
    description:
      "Une expérience web dédiée aux solutions de recharge électrique, conçue pour présenter clairement les produits et accompagner l'utilisateur dans son parcours.",
    image: "/image/chargego.png",
    stack: ["WordPress", "Elementor", "WooCommerce"],
    live: "https://www.chargego.ma/",
    github: "",
  },
  {
    title: "Al Jabr School",
    type: "Éducation",
    category: "Full Stack",
    description:
      "Un écosystème digital combinant présentation de l'établissement et outils permettant de structurer l'expérience des équipes et des apprenants.",
    image: "/image/aljaber.png",
    stack: ["Next.js", "Laravel", "MySQL"],
    live: "https://ecolealjabr.com/",
    github: "https://github.com/Abdelmounaim08/Aljabr_Ecole",
  },
  {
    title: "Flink Marketplace",
    type: "E-commerce",
    category: "Full Stack",
    description:
      "Une marketplace construite autour du catalogue, des vendeurs, du paiement et des échanges entre les différents acteurs de la plateforme.",
    image: "/image/flink1.png",
    stack: ["Next.js", "Laravel", "Redis", "Stripe"],
    live: "https://flink.ma/",
    github: "https://github.com/Abdelmounaim08/FlinkApp",
  },
  {
    title: "Theme Maestro",
    type: "Shopify App",
    category: "SaaS",
    description:
      "Une application permettant aux marchands Shopify de planifier et automatiser les changements de thème de leur boutique.",
    image: "/image/themeMeastro1.png",
    stack: ["React", "Polaris", "GraphQL"],
    live: "https://apps.shopify.com/maestro-theme-scheduler",
    github: "https://github.com/Abdelmounaim08",
  },
  {
    title: "Cannabis Company",
    type: "Brand experience",
    category: "Web Design",
    description:
      "Une expérience web immersive construite autour d'une identité visuelle premium et d'une présentation éditoriale responsive.",
    image: "/image/canabis.png",
    stack: ["Next.js", "Prisma", "Tailwind CSS"],
    live: "https://canabis-template.vercel.app/home",
    github: "https://github.com/Abdelmounaim08/Canabis-Template",
  },
];

export default function Project() {
  const featuredProject = projects[0];
  const otherProjects = projects.slice(1);

  return (
    <section
      id="PROJECT"
      className="relative overflow-hidden bg-[#0b0724] px-5 py-24 text-[#faf8ff] sm:px-8 lg:px-12 lg:py-32"
    >
      {/* Background decoration */}
      <div className="pointer-events-none absolute left-[-15%] top-[20%] h-[500px] w-[500px] rounded-full bg-[#6c4cff]/10 blur-[140px]" />

      <div className="pointer-events-none absolute bottom-[10%] right-[-10%] h-[400px] w-[400px] rounded-full bg-[#f5d35f]/5 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl">

        {/* HEADER */}
        <div className="reveal flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <div>
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-8 bg-[#f5d35f]" />

              <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#f5d35f]">
                Projets sélectionnés
              </p>
            </div>

            <h2 className="max-w-3xl text-4xl font-black leading-[0.95] tracking-[-0.05em] sm:text-5xl lg:text-6xl">
              Des produits digitaux
              <br />
              <span className="text-white/35">pensés pour fonctionner.</span>
            </h2>
          </div>

          <div className="max-w-sm">
            <p className="text-sm leading-7 text-[#aaa0d1]">
              Une sélection de projets réalisés entre développement web,
              e-commerce, WordPress et expériences digitales sur mesure.
            </p>
          </div>
        </div>

        {/* FEATURED PROJECT */}
        <div className="reveal mt-16">
          <article className="group relative overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.045]">
            
            {/* Featured image */}
            <div className="relative aspect-[16/9] overflow-hidden sm:aspect-[2/1] lg:aspect-[2.2/1]">
              <Image
                src={featuredProject.image}
                alt={`Projet ${featuredProject.title}`}
                fill
                priority
                sizes="100vw"
                className="object-cover transition duration-1000 group-hover:scale-[1.03]"
              />

              {/* overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0b0724] via-[#0b0724]/20 to-transparent" />

              <div className="absolute left-5 top-5 flex items-center gap-2 sm:left-7 sm:top-7">
                <span className="rounded-full border border-white/15 bg-[#0b0724]/70 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.15em] text-[#baf7ff] backdrop-blur-xl">
                  Projet récent
                </span>

                <span className="rounded-full border border-white/10 bg-white/10 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.15em] text-white/70 backdrop-blur-xl">
                  {featuredProject.category}
                </span>
              </div>

              <div className="absolute bottom-5 left-5 right-5 sm:bottom-8 sm:left-8 sm:right-8">
                <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
                  <div>
                    <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#f5d35f]">
                      {featuredProject.type}
                    </p>

                    <h3 className="text-3xl font-black tracking-[-0.04em] sm:text-4xl lg:text-5xl">
                      {featuredProject.title}
                    </h3>
                  </div>

                  <a
                    href={featuredProject.live}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex w-fit items-center gap-2 rounded-full bg-[#f5d35f] px-5 py-3 text-xs font-black text-[#0b0724] transition duration-300 hover:gap-3 hover:bg-white"
                  >
                    Voir le projet
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>

            {/* Featured content */}
            <div className="grid gap-8 p-6 sm:p-8 lg:grid-cols-[1.5fr_1fr] lg:p-10">
              <div>
                <div className="mb-4 flex items-center gap-2 text-[#f5d35f]">
                  <Sparkles className="h-4 w-4" />

                  <span className="text-xs font-bold uppercase tracking-[0.15em]">
                    À propos du projet
                  </span>
                </div>

                <p className="max-w-2xl text-sm leading-7 text-[#b6add3] sm:text-base">
                  {featuredProject.description}
                </p>
              </div>

              <div className="lg:border-l lg:border-white/10 lg:pl-8">
                <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.2em] text-white/40">
                  Technologies
                </p>

                <div className="flex flex-wrap gap-2">
                  {featuredProject.stack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-white/10 bg-white/[0.05] px-3 py-1.5 text-xs font-semibold text-white/75"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </article>
        </div>

        {/* OTHER PROJECTS */}
        <div className="mt-6 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {otherProjects.map((project, index) => (
            <article
              key={project.title}
              className="reveal group overflow-hidden rounded-[22px] border border-white/10 bg-white/[0.04] transition duration-500 hover:-translate-y-1 hover:border-[#f5d35f]/40 hover:bg-white/[0.07]"
              style={{
                transitionDelay: `${index * 70}ms`,
              }}
            >
              {/* Image */}
              <div className="relative aspect-[1.5/1] overflow-hidden bg-[#21155a]">
                <Image
                  src={project.image}
                  alt={`Capture du projet ${project.title}`}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#0b0724]/80 via-transparent to-transparent" />

                <span className="absolute left-4 top-4 rounded-full border border-white/15 bg-[#0b0724]/75 px-3 py-1.5 text-[9px] font-bold uppercase tracking-[0.15em] text-[#baf7ff] backdrop-blur-xl">
                  {project.category}
                </span>

                <a
                  href={project.live}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`Voir ${project.title}`}
                  className="absolute bottom-4 right-4 flex h-10 w-10 translate-y-2 items-center justify-center rounded-full bg-[#f5d35f] text-[#0b0724] opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100"
                >
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>

              {/* Content */}
              <div className="p-5">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="mb-1 text-[10px] font-bold uppercase tracking-[0.18em] text-[#f5d35f]">
                      {project.type}
                    </p>

                    <h3 className="text-xl font-extrabold tracking-[-0.02em]">
                      {project.title}
                    </h3>
                  </div>
                </div>

                <p className="mt-3 min-h-[84px] text-sm leading-6 text-[#aaa0d1]">
                  {project.description}
                </p>

                {/* Stack */}
                <div className="mt-5 flex flex-wrap gap-1.5">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full bg-white/[0.07] px-2.5 py-1 text-[9px] font-bold text-white/65"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="mt-6 flex items-center gap-4 border-t border-white/10 pt-4">
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#f5d35f] transition-all hover:gap-2.5"
                  >
                    Voir le projet
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </a>

                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-white/50 transition hover:text-white"
                    >
                      <Github className="h-3.5 w-3.5" />
                      GitHub
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Bottom statement */}
        <div className="reveal mt-16 flex flex-col items-start justify-between gap-5 border-t border-white/10 pt-8 sm:flex-row sm:items-center">
          <p className="max-w-xl text-sm leading-6 text-white/40">
            Chaque projet répond à un contexte différent, avec le même objectif :
            créer une expérience claire, performante et facile à utiliser.
          </p>

          <a
            href="#CONTACT"
            className="group inline-flex items-center gap-2 text-sm font-bold text-white transition hover:text-[#f5d35f]"
          >
            Parlons de votre projet
            <ArrowUpRight className="h-4 w-4 transition group-hover:translate-x-1 group-hover:-translate-y-1" />
          </a>
        </div>
      </div>
    </section>
  );
}