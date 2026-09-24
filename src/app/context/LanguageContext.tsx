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
    cv: string;
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
      achievements: string[];
    }>;
  };
  projects: {
    label: string;
    title: string;
    intro: string;
    cta: string;
    role: string;
    result: string;
    concept: string;
    code: string;
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
    sending: string;
    error: string;
    whatsapp: string;
    honeypot: string;
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
      badge: "Full Stack Developer · Logicat",
      name: "ABDELMOUNAIM ELABIADE",
      title: "Je transforme vos idées en produits web performants.",
      subtitle: "Développeur Full Stack au Maroc. Next.js, Laravel, WooCommerce et Shopify, du prototype à la production.",
      primaryCta: "Voir mes projets",
      secondaryCta: "Me contacter",
      based: "Basé au Maroc",
      available: "Disponible pour des missions internationales",
      cv: "Télécharger mon CV",
    },
    about: {
      label: "À propos",
      title: "Construire des produits utiles, pas seulement du code.",
      paragraph1: "Je suis développeur Full Stack basé au Maroc, actuellement Full Stack Developer chez Logicat. Je travaille sur des projets web et digitaux allant des sites vitrines et plateformes e-commerce aux applications métier et solutions automatisées.",
      paragraph2: "Mon expérience couvre le développement frontend et backend, WordPress/WooCommerce, intégration d'API, déploiement et automatisation. J'aime concevoir des produits clairs, performants et faciles à utiliser, avec un vrai sens du business et de la valeur utilisateur.",
      chips: ["Full Stack Development", "E-commerce", "WordPress / WooCommerce", "APIs", "DevOps", "Automation", "UI/UX"],
      stats: [
        { value: "8", label: "projets livrés" },
        { value: "[X]+", label: "ans d'expérience" },
        { value: "1", label: "vision produit" },
      ],
      chip1: "Développement Full Stack",
      chip2: "Disponible à l'international",
    },
    services: {
      label: "Expertise",
      title: "Des solutions utiles, rapides et prêtes à évoluer.",
      subtitle: "De la stratégie produit à l'exécution technique, je construis des expériences numériques cohérentes et des systèmes qui supportent la croissance.",
      items: [
        {
          number: "01",
          title: "Développement Full Stack",
          text: "React, Next.js, TypeScript, Node.js et Laravel pour des applications web modernes, scalables et pensées pour l'utilisateur.",
          techs: ["React", "Next.js", "TypeScript", "Node.js", "Laravel"],
        },
        {
          number: "02",
          title: "E-commerce",
          text: "Vitrines e-commerce sur mesure, catalogues, paiements et intégrations orientés performance et revenus.",
          techs: ["WooCommerce", "Shopify", "APIs", "Paiements", "Catalogues"],
        },
        {
          number: "03",
          title: "Plateformes web",
          text: "Dashboards, outils internes, applications métier et plateformes de gestion avec architecture claire et interfaces puissantes.",
          techs: ["Dashboards", "Applications", "APIs", "Intégrations"],
        },
        {
          number: "04",
          title: "Automatisation & déploiement",
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
          achievements: ["[À COMPLÉTER] projets livrés en production", "[À COMPLÉTER] automatisations déployées", "[À COMPLÉTER] amélioration mesurable"],
        },
        {
          period: "2024 — 2025",
          role: "Projets web & e-commerce",
          company: "Indépendant",
          text: "Création de plateformes, tableaux de bord et vitrines e-commerce avec React, Next.js, Laravel et Shopify, en travaillant directement avec les besoins business et les contraintes UX.",
          achievements: ["[À COMPLÉTER] plateformes réalisées", "[À COMPLÉTER] boutiques mises en ligne", "[À COMPLÉTER] satisfaction ou conversion"],
        },
      ],
    },
    projects: {
      label: "Projets sélectionnés",
      title: "Des expériences conçues pour être utilisées.",
      intro: "Huit cas d'usage, une même exigence : rendre le produit évident dès la première interaction.",
      cta: "Voir le projet",
      role: "Rôle",
      result: "Résultat",
      concept: "Concept design",
      code: "Code",
    },
    contact: {
      label: "Contact",
      title: "Un projet en tête ? Parlons-en.",
      text: "Une idée, une refonte ou un produit à lancer ? Décrivez-moi le contexte. Je vous répondrai avec une première lecture concrète.",
      name: "Nom",
      email: "Email",
      message: "Message",
      messagePlaceholder: "Parlez-moi de votre projet...",
      submit: "Envoyer le message",
      sent: "Votre client email va s'ouvrir.",
      sending: "Envoi en cours...",
      error: "Vérifiez les champs puis réessayez.",
      whatsapp: "Écrire sur WhatsApp",
      honeypot: "Ne pas remplir ce champ",
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
      title: "I turn your ideas into high-performing web products.",
      subtitle: "Full Stack Developer based in Morocco. Next.js, Laravel, WooCommerce and Shopify, from prototype to production.",
      primaryCta: "View my work",
      secondaryCta: "Contact me",
      based: "Based in Morocco",
      available: "Available for international projects",
      cv: "Download my CV",
    },
    about: {
      label: "About",
      title: "Building useful products, not just code.",
      paragraph1: "I am a Full Stack developer based in Morocco, currently working as a Full Stack Developer at Logicat. I work on web and digital projects ranging from marketing sites and e-commerce platforms to business applications and automated solutions.",
      paragraph2: "My experience covers frontend and backend development, WordPress/WooCommerce, API integration, deployment and automation. I like to design clear, fast and easy-to-use products with a real business mindset and user value.",
      chips: ["Full Stack Development", "E-commerce", "WordPress / WooCommerce", "APIs", "DevOps", "Automation", "UI/UX"],
      stats: [
        { value: "8", label: "projects delivered" },
        { value: "[X]+", label: "years of experience" },
        { value: "1", label: "product vision" },
      ],
      chip1: "Full Stack Development",
      chip2: "Available internationally",
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
          text: "Custom e-commerce storefronts, catalogs, payments and integrations built for performance and revenue.",
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
          achievements: ["[TO COMPLETE] projects delivered to production", "[TO COMPLETE] automations deployed", "[TO COMPLETE] measurable improvement"],
        },
        {
          period: "2024 — 2025",
          role: "Web & e-commerce projects",
          company: "Freelance",
          text: "Creating platforms, dashboards and custom e-commerce storefronts with React, Next.js, Laravel and Shopify, working directly on business needs and UX constraints.",
          achievements: ["[TO COMPLETE] platforms delivered", "[TO COMPLETE] stores launched", "[TO COMPLETE] satisfaction or conversion"],
        },
      ],
    },
    projects: {
      label: "Selected projects",
      title: "Experiences designed to be used.",
      intro: "Eight use cases, one requirement: make the product obvious from the first interaction.",
      cta: "View project",
      role: "Role",
      result: "Result",
      concept: "Concept design",
      code: "Code",
    },
    contact: {
      label: "Contact",
      title: "Have a project in mind? Let’s talk.",
      text: "An idea, a redesign or a product to launch? Describe the context and I’ll get back to you with a concrete initial perspective.",
      name: "Name",
      email: "Email",
      message: "Message",
      messagePlaceholder: "Tell me about your project...",
      submit: "Send message",
      sent: "Your mail client will open.",
      sending: "Sending...",
      error: "Check the fields and try again.",
      whatsapp: "Write on WhatsApp",
      honeypot: "Leave this field empty",
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
