import { ArrowUpRight } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

const skills = [
  "Next.js",
  "React",
  "TypeScript",
  "Node.js",
  "Laravel",
  "WordPress",
  "WooCommerce",
  "Tailwind CSS",
  "Prisma",
  "MySQL",
  "REST APIs",
  "DevOps",
];

export default function Skils() {
  const { t } = useLanguage();

  return (
    <section id="experience" className="scroll-mt-24 px-5 py-24 sm:px-8 lg:px-12 lg:py-32">
      <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-[0.85fr_1.15fr]">
        <div className="reveal">
          <p className="section-label">{t.experience.label}</p>
          <h2 className="mt-4 text-4xl font-black tracking-[-0.04em] sm:text-5xl">{t.experience.title}</h2>
          <p className="text-muted mt-5 max-w-xl leading-7">{t.experience.subtitle}</p>

          <div className="mt-9 flex flex-wrap gap-2">
            {skills.map((skill) => (
              <span key={skill} className="surface rounded-full border px-3.5 py-2 text-xs font-bold text-[#1a1c35] dark:text-[#f5f1ff]">
                {skill}
              </span>
            ))}
          </div>
        </div>

        <div className="reveal space-y-4" style={{ transitionDelay: "120ms" }}>
          {t.experience.items.map((item) => (
            <article key={item.company + item.period} className="surface rounded-[1.5rem] border p-6 sm:p-7">
              <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <p className="text-lg font-extrabold text-[#0d092a] dark:text-white">{item.role}</p>
                  <p className="mt-1 text-sm font-bold text-[#48dfff]">{item.company}</p>
                </div>
                <span className="text-xs font-bold text-muted">{item.period}</span>
              </div>
              <p className="text-muted mt-5 max-w-xl text-sm leading-7">{item.text}</p>
              <ul className="text-muted mt-4 list-disc space-y-2 pl-5 text-sm leading-6">
                {item.achievements.map((achievement) => <li key={achievement}>{achievement}</li>)}
              </ul>
            </article>
          ))}

          <a
            href="https://github.com/Abdelmounaim08"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 pt-2 text-sm font-extrabold text-[#8c72ff] transition hover:gap-3"
          >
            {t.experience.github}
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
