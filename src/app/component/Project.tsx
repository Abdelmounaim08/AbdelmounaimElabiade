import Image from "next/image";
import { ArrowUpRight, Github } from "lucide-react";

const projects = [
  {
    title: "Logicat AR",
    type: "Site E-commerce",
    category: "WordPress · Elementor",
    description:
      "Une expérience digitale en arabe pensée pour présenter les solutions de Logicat avec une navigation fluide, une identité forte et une interface adaptée au marché arabophone.",
    image: "/image/logicat-ar.png",
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
  const [featuredProject, ...otherProjects] = projects;

  return (
    <section
      id="PROJECT"
      className="relative overflow-hidden bg-[#0b0724] px-5 py-24 text-[#faf8ff] sm:px-8 lg:px-12 lg:py-32"
    >
      {/* Background decoration */}
      <div className="pointer-events-none absolute left-[-15%] top-[15%] h-[520px] w-[520px] rounded-full bg-[#6c4cff]/10 blur-[150px]" />
      <div className="pointer-events-none absolute bottom-[5%] right-[-10%] h-[420px] w-[420px] rounded-full bg-[#f5d35f]/5 blur-[130px]" />

      <div className="relative mx-auto max-w-7xl">
        {/* HEADER */}
        <div className="reveal grid gap-8 md:grid-cols-[1.3fr_1fr] md:items-end">
          <h2 className="text-4xl font-black leading-[0.98] tracking-[-0.04em] sm:text-5xl lg:text-[3.75rem]">
            Huit projets, une seule exigence :{" "}
            <span className="text-white/35">rendre le produit évident.</span>
          </h2>

          <p className="text-sm leading-7 text-[#aaa0d1] md:border-l md:border-white/10 md:pl-8">
            Une sélection de projets réalisés entre développement web,
            e-commerce, WordPress et expériences digitales sur mesure — du
            site vitrine à la plateforme SaaS.
          </p>
        </div>

        {/* FEATURED PROJECT */}
        <a
          href={featuredProject.live}
          target="_blank"
          rel="noreferrer"
          className="reveal group mt-14 grid overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.04] transition-colors duration-300 hover:border-[#f5d35f]/30 lg:grid-cols-[1.3fr_1fr]"
        >
          <div className="relative aspect-[16/10] overflow-hidden sm:aspect-[16/9] lg:aspect-auto">
            <Image
              src={featuredProject.image}
              alt={`Projet ${featuredProject.title}`}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 60vw"
              className="object-cover transition duration-700 group-hover:scale-[1.02]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0b0724]/70 via-transparent to-transparent lg:bg-gradient-to-r" />
          </div>

          <div className="flex flex-col justify-between gap-6 p-7 sm:p-9 lg:p-10">
            <div>
              <p className="mb-3 text-xs font-semibold text-[#f5d35f]">
                {featuredProject.category} — {featuredProject.type}
              </p>
              <h3 className="text-3xl font-black tracking-[-0.03em] sm:text-4xl">
                {featuredProject.title}
              </h3>
              <p className="mt-4 max-w-md text-sm leading-7 text-[#b6add3]">
                {featuredProject.description}
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-between gap-4">
              <div className="flex flex-wrap gap-2">
                {featuredProject.stack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-white/10 px-3 py-1.5 text-xs font-medium text-white/70"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <span className="inline-flex items-center gap-2 text-sm font-bold text-[#f5d35f] transition-transform duration-300 group-hover:translate-x-1">
                Voir le projet
                <ArrowUpRight className="h-4 w-4" />
              </span>
            </div>
          </div>
        </a>

        {/* OTHER PROJECTS */}
        <div className="mt-6 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {otherProjects.map((project) => (
            <a
              key={project.title}
              href={project.live}
              target="_blank"
              rel="noreferrer"
              className="reveal group flex flex-col overflow-hidden rounded-[20px] border border-white/10 bg-white/[0.035] transition-colors duration-300 hover:border-[#f5d35f]/30"
            >
              <div className="relative aspect-[3/2] overflow-hidden bg-[#1a1240]">
                <Image
                  src={project.image}
                  alt={`Capture du projet ${project.title}`}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition duration-500 group-hover:scale-[1.04]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0b0724]/70 via-transparent to-transparent" />
              </div>

              <div className="flex flex-1 flex-col p-6">
                <p className="text-xs font-semibold text-[#f5d35f]">
                  {project.category}
                </p>
                <h3 className="mt-1.5 text-xl font-extrabold tracking-[-0.02em]">
                  {project.title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-6 text-[#aaa0d1]">
                  {project.description}
                </p>

                <div className="mt-5 flex flex-wrap gap-1.5">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full bg-white/[0.06] px-2.5 py-1 text-[11px] font-medium text-white/60"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="mt-5 flex items-center justify-between border-t border-white/10 pt-4">
                  <span className="inline-flex items-center gap-1.5 text-xs font-bold text-[#f5d35f] transition-transform duration-300 group-hover:translate-x-1">
                    Voir le projet
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </span>

                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="inline-flex items-center gap-1.5 text-xs font-medium text-white/45 transition hover:text-white"
                    >
                      <Github className="h-3.5 w-3.5" />
                      Code
                    </a>
                  )}
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Bottom statement */}
        <div className="reveal mt-16 flex flex-col items-start justify-between gap-5 border-t border-white/10 pt-8 sm:flex-row sm:items-center">
          <p className="max-w-xl text-sm leading-6 text-white/40">
            Chaque projet répond à un contexte différent, avec le même
            objectif : créer une expérience claire, performante et facile à
            utiliser.
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