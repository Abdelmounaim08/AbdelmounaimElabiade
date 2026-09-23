"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";

type Language = "fr" | "en";

type TranslationSet = {
  nav: {
    about: string;
    services: string;
    experience: string;
    projects: string;
    contact: string;
  };
  hero: {
    badge: string;
    name: string;
    title: string;
    subtitle: string;
    primaryCta: string;
    secondaryCta: string;
    based: string;
    available: string;
    approachLabel: string;
    approachText: string;
  };
  about: {
    label: string;
    title: string;
    paragraph1: string;
    paragraph2: string;
    chips: string[];
    stats: { value: string; label: string }[];
    chip1: string;
    chip2: string;
  };
  services: {
    label: string;
    title: string;
    subtitle: string;
    items: Array<{
      number: string;
      title: string;
      text: string;
      techs: string[];
    }>;
  };
  experience: {
    label: string;
    title: string;
    subtitle: string;
    github: string;
    items: Array<{
      period: string;
      role: string;
      company: string;
      text: string;
    }>;
  };
  projects: {
    label: string;
    title: string;
    intro: string;
    cta: string;
  };
  contact: {
    label: string;
    title: string;
    text: string;
    name: string;
    email: string;
    message: string;
    messagePlaceholder: string;
    submit: string;
    sent: string;
  };
  footer: {
    text: string;
  };
};

const translationSets: Record<Language, TranslationSet> = {
  fr: {
    nav: {
      about: "À propos",
      services: "Services",
      experience: "Expérience",
      projects: "Projets",
      contact: "Contact",
    },
    hero: {
      badge: "Full Stack Developer",
      name: "ABDELMOUNAIM ELABIADE",
      title: "Je conçois des applications web modernes, des plateformes e-commerce et des solutions digitales de la conception au déploiement.",
      subtitle: "Je développe des expériences digitales utiles, performantes et durables pour les marques, les équipes internes et les projets à forte valeur métier.",
      primaryCta: "Voir mes projets",
      secondaryCta: "Me contacter",
      based: "Basé au Maroc",
      available: "Disponible pour des missions internationales",
      approachLabel: "Approche",
      approachText: "Du concept au déploiement, avec simplicité, performance et fiabilité à chaque étape.",
    },
    about: {
      label: "À propos",
      title: "Construire des produits utiles, pas seulement du code.",
      paragraph1: "Je suis développeur Full Stack basé au Maroc, actuellement Full Stack Developer chez Logicat. Je travaille sur des projets web et digitaux allant des sites vitrines et plateformes e-commerce aux applications métier et solutions automatisées.",
      paragraph2: "Mon expérience couvre le développement frontend et backend, WordPress/WooCommerce, intégration d'API, déploiement et automatisation. J'aime concevoir des produits clairs, performants et faciles à utiliser, avec un vrai sens du business et de la valeur utilisateur.",
      chips: ["Full Stack Development", "E-commerce", "WordPress / WooCommerce", "APIs", "DevOps", "Automation", "UI/UX"],
      stats: [
        { value: "6+", label: "technologies cœur" },
        { value: "6", label: "projets présentés" },
        { value: "1", label: "vision produit" },
      ],
      chip1: "Based in Morocco",
      chip2: "Available for international opportunities",
    },
    services: {
      label: "Expertise",
      title: "Des solutions utiles, rapides et prêtes à évoluer.",
      subtitle: "De la stratégie produit à l'exécution technique, je construis des expériences numériques cohérentes et des systèmes qui supportent la croissance.",
      items: [
        {
          number: "01",
          title: "Full Stack Development",
          text: "React, Next.js, TypeScript, Node.js et Laravel pour des applications web modernes, scalables et pensées pour l'utilisateur.",
          techs: ["React", "Next.js", "TypeScript", "Node.js", "Laravel"],
        },
        {
          number: "02",
          title: "E-commerce",
          text: "Solution storefront, catalogues, paiements, intégrations et experiences conversionnelles orientées performances et revenus.",
          techs: ["WooCommerce", "Shopify", "APIs", "Paiements", "Catalogues"],
        },
        {
          number: "03",
          title: "Web Platforms",
          text: "Dashboards, outils internes, applications métier et plateformes de gestion avec architecture claire et interfaces puissantes.",
          techs: ["Dashboards", "Applications", "APIs", "Intégrations"],
        },
        {
          number: "04",
          title: "Automation & Deployment",
          text: "Automatisation d'environnements, déploiement fiable, observabilité et optimisation continue en production.",
          techs: ["n8n", "VPS", "Cloudflare", "CI/CD", "Automation"],
        },
      ],
    },
    experience: {
      label: "Expérience & skills",
      title: "Un profil hybride, du produit au code.",
      subtitle: "Je peux parler interface avec un designer, architecture avec des équipes techniques et objectifs avec des décideurs métier. Le but reste le même : livrer un produit utile, propre et efficace.",
      github: "Voir le profil GitHub",
      items: [
        {
          period: "2026 — aujourd'hui",
          role: "Full Stack Developer",
          company: "Logicat",
          text: "Conception de solutions web modernes avec un focus sur la qualité, l'intégration, l'automatisation et la mise en production de projets à forte valeur métier.",
        },
        {
          period: "2024 — 2025",
          role: "Projets web & e-commerce",
          company: "Indépendant",
          text: "Création de plateformes, dashboards et expériences storefront avec React, Next.js, Laravel et Shopify, en travaillant directement avec les besoins business et les contraintes UX.",
        },
      ],
    },
    projects: {
      label: "Projets sélectionnés",
      title: "Des expériences conçues pour être utilisées.",
      intro: "Huit cas d'usage, une même exigence : rendre le produit évident dès la première interaction.",
      cta: "Voir le projet",
    },
    contact: {
      label: "Contact",
      title: "Un projet en tête ? Parlons-en.",
      text: "Une idée, une refonte ou un produit à lancer ? Décris-moi le contexte. Je te répondrai avec une première lecture concrète.",
      name: "Nom",
      email: "Email",
      message: "Message",
      messagePlaceholder: "Parle-moi de ton projet...",
      submit: "Envoyer le message",
      sent: "Ton client email va s'ouvrir.",
    },
    footer: {
      text: "© {year} Abdelmounaim Elabiade. Construit avec intention.",
    },
  },
  en: {
    nav: {
      about: "About",
      services: "Services",
      experience: "Experience",
      projects: "Projects",
      contact: "Contact",
    },
    hero: {
      badge: "Full Stack Developer",
      name: "ABDELMOUNAIM ELABIADE",
      title: "I design modern web applications, e-commerce platforms and digital solutions from concept to deployment.",
      subtitle: "I build useful, fast and durable digital experiences for brands, internal teams and high-value digital products.",
      primaryCta: "See my work",
      secondaryCta: "Contact me",
      based: "Based in Morocco",
      available: "Available for international opportunities",
      approachLabel: "Approach",
      approachText: "From concept to deployment, with clarity, performance and reliability at every step.",
    },
    about: {
      label: "About",
      title: "Building useful products, not just code.",
      paragraph1: "I am a Full Stack developer based in Morocco, currently working as a Full Stack Developer at Logicat. I work on web and digital projects ranging from marketing sites and e-commerce platforms to business applications and automated solutions.",
      paragraph2: "My experience covers frontend and backend development, WordPress/WooCommerce, API integration, deployment and automation. I like to design clear, fast and easy-to-use products with a real business mindset and user value.",
      chips: ["Full Stack Development", "E-commerce", "WordPress / WooCommerce", "APIs", "DevOps", "Automation", "UI/UX"],
      stats: [
        { value: "6+", label: "core technologies" },
        { value: "6", label: "projects showcased" },
        { value: "1", label: "product vision" },
      ],
      chip1: "Based in Morocco",
      chip2: "Available for international opportunities",
    },
    services: {
      label: "Expertise",
      title: "Useful, fast solutions that are ready to scale.",
      subtitle: "From product strategy to technical execution, I build coherent digital experiences and systems that support growth.",
      items: [
        {
          number: "01",
          title: "Full Stack Development",
          text: "React, Next.js, TypeScript, Node.js and Laravel for modern, scalable web applications designed around real user needs.",
          techs: ["React", "Next.js", "TypeScript", "Node.js", "Laravel"],
        },
        {
          number: "02",
          title: "E-commerce",
          text: "Storefront solutions, catalogs, payments, integrations and conversion-focused experiences built for performance and revenue.",
          techs: ["WooCommerce", "Shopify", "APIs", "Payments", "Catalogs"],
        },
        {
          number: "03",
          title: "Web Platforms",
          text: "Dashboards, internal tools, business applications and management platforms with clean architecture and strong interfaces.",
          techs: ["Dashboards", "Applications", "APIs", "Integrations"],
        },
        {
          number: "04",
          title: "Automation & Deployment",
          text: "Environment automation, reliable deployment, observability and continuous optimization in production.",
          techs: ["n8n", "VPS", "Cloudflare", "CI/CD", "Automation"],
        },
      ],
    },
    experience: {
      label: "Experience & skills",
      title: "A hybrid profile, from product to code.",
      subtitle: "I can speak to designers, technical teams and business stakeholders. The goal remains the same: deliver a useful, well-built and efficient product.",
      github: "View GitHub profile",
      items: [
        {
          period: "2026 — today",
          role: "Full Stack Developer",
          company: "Logicat",
          text: "Designing modern web solutions with a focus on quality, integration, automation and production delivery for high-value projects.",
        },
        {
          period: "2024 — 2025",
          role: "Web & e-commerce projects",
          company: "Freelance",
          text: "Creating platforms, dashboards and storefront experiences with React, Next.js, Laravel and Shopify, working directly on business needs and UX constraints.",
        },
      ],
    },
    projects: {
      label: "Selected projects",
      title: "Experiences designed to be used.",
      intro: "Eight use cases, one requirement: make the product obvious from the first interaction.",
      cta: "View project",
    },
    contact: {
      label: "Contact",
      title: "Have a project in mind? Let’s talk.",
      text: "An idea, a redesign or a product to launch? Describe the context and I’ll get back with a concrete initial perspective.",
      name: "Name",
      email: "Email",
      message: "Message",
      messagePlaceholder: "Tell me about your project...",
      submit: "Send message",
      sent: "Your mail client will open.",
    },
    footer: {
      text: "© {year} Abdelmounaim Elabiade. Built with intention.",
    },
  },
};

const LanguageContext = createContext<{
  language: Language;
  setLanguage: (value: Language) => void;
  t: TranslationSet;
} | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>("fr");

  useEffect(() => {
    const saved = window.localStorage.getItem("portfolio-language") as Language | null;
    const next = saved === "fr" || saved === "en" ? saved : "fr";
    setLanguage(next);
    document.documentElement.lang = next;
  }, []);

  useEffect(() => {
    document.documentElement.lang = language;
    window.localStorage.setItem("portfolio-language", language);
  }, [language]);

  const value = useMemo(
    () => ({ language, setLanguage, t: translationSets[language] }),
    [language],
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used inside LanguageProvider");
  }
  return context;
}
