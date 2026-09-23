import { Blocks, Gauge, Layers3, Rocket } from "lucide-react";

const services = [
  {
    icon: Blocks,
    number: "01",
    title: "Full Stack Development",
    text: "React, Next.js, TypeScript, Node.js et Laravel pour des applications web modernes, scalables et pensées pour l'utilisateur.",
    technologies: ["React", "Next.js", "TypeScript", "Node.js", "Laravel"],
  },
  {
    icon: Layers3,
    number: "02",
    title: "E-commerce",
    text: "Solution storefront, catalogues, paiements, intégrations et experiences conversionnelles orientées performances et revenus.",
    technologies: ["WooCommerce", "Shopify", "APIs", "Paiements", "Catalogues"],
  },
  {
    icon: Gauge,
    number: "03",
    title: "Web Platforms",
    text: "Dashboards, outils internes, applications métier et plateformes de gestion avec architecture claire et interfaces puissantes.",
    technologies: ["Dashboards", "Applications", "APIs", "Intégrations"],
  },
  {
    icon: Rocket,
    number: "04",
    title: "Automation & Deployment",
    text: "Automatisation d'environnements, déploiement fiable, observabilité et optimisation continue en production.",
    technologies: ["n8n", "VPS", "Cloudflare", "CI/CD", "Automation"],
  },
];

export default function Service() {
  return (
    <section id="service" className="surface-muted border-y border-theme px-5 py-24 sm:px-8 lg:px-12 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="reveal max-w-3xl">
          <p className="section-label">Expertise</p>
          <h2 className="mt-4 text-4xl font-black tracking-[-0.04em] sm:text-5xl">Des solutions utiles, rapides et prêtes à évoluer.</h2>
          <p className="text-muted mt-5 leading-7">
            De la stratégie produit à l&apos;exécution technique, je construis des expériences numériques cohérentes et des systèmes qui supportent la croissance.
          </p>
        </div>

        <div className="mt-14 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {services.map(({ icon: Icon, ...service }, index) => (
            <article
              key={service.number}
              className="reveal surface group rounded-[1.5rem] border p-6 transition duration-300 hover:-translate-y-1 hover:border-[#8c72ff] hover:shadow-[0_20px_50px_rgba(23,12,58,0.12)]"
              style={{ transitionDelay: index * 90 + "ms" }}
            >
              <div className="flex items-start justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-[#23d7ff]/20 bg-[#23d7ff]/8 text-[#23d7ff]">
                  <Icon className="h-5 w-5 transition duration-300 group-hover:scale-110" />
                </div>
                <span className="text-xs font-black text-muted">{service.number}</span>
              </div>

              <h3 className="mt-10 text-xl font-extrabold text-[#0d092a] dark:text-white">{service.title}</h3>
              <p className="text-muted mt-3 text-sm leading-7">{service.text}</p>

              <div className="mt-6 flex flex-wrap gap-2">
                {service.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-[#23d7ff]/15 bg-[#23d7ff]/6 px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.08em] text-[#1a1c35] dark:text-[#d9f8ff]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
