"use client";
import Link from "next/link";
import { Download, Github, Linkedin, Menu, Moon, Sun, X } from "lucide-react";
import { useEffect, useState } from "react";
import { useLanguage } from "../context/LanguageContext";

export default function Nav() {
	const { language, setLanguage, t } = useLanguage();
	const [open, setOpen] = useState(false);
	const [dark, setDark] = useState(true);

	useEffect(() => {
		const saved = window.localStorage.getItem("portfolio-theme");
		const shouldBeDark = saved ? saved === "dark" : true;
		document.documentElement.classList.toggle("dark", shouldBeDark);
		setDark(shouldBeDark);
	}, []);

	const toggleTheme = () => {
		const next = !dark;
		document.documentElement.classList.toggle("dark", next);
		window.localStorage.setItem("portfolio-theme", next ? "dark" : "light");
		setDark(next);
	};

	const links = [
		[t.nav.about, "about"],
		[t.nav.services, "services"],
		[t.nav.experience, "experience"],
		[t.nav.projects, "projects"],
		[t.nav.contact, "contact"],
	];

	return (
		<header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#0b0724]/85 text-white backdrop-blur-xl">
			<div className="mx-auto flex h-[74px] max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-12">
				<Link href="#home" className="group flex items-center gap-3" onClick={() => setOpen(false)}>
					<span className="grid h-10 w-10 place-items-center rounded-xl bg-[#f5d35f] text-sm font-black text-[#0d092a] transition group-hover:rotate-3">AE</span>
					<span className="hidden text-sm font-bold tracking-tight sm:block">Abdelmounaim<span className="text-[#f5d35f]">.</span></span>
				</Link>

				<nav className="hidden items-center gap-7 md:flex">
					{links.map(([label, href]) => (
						<Link key={href} href={"#" + href} className="text-sm font-semibold text-white/70 transition hover:text-[#f5d35f]">
							{label}
						</Link>
					))}
				</nav>

				<div className="flex items-center gap-2">
					<div className="hidden items-center gap-1 rounded-full border border-white/15 bg-white/5 p-1 sm:flex">
						<button
							type="button"
							onClick={() => setLanguage("fr")}
							className={`rounded-full px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.12em] transition ${language === "fr" ? "bg-[#f5d35f] text-[#0d092a]" : "text-white/70"}`}
						>
							FR
						</button>
						<button
							type="button"
							onClick={() => setLanguage("en")}
							className={`rounded-full px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.12em] transition ${language === "en" ? "bg-[#23d7ff] text-[#0d092a]" : "text-white/70"}`}
						>
							EN
						</button>
					</div>

					<a href="https://github.com/Abdelmounaim08" target="_blank" rel="noreferrer" aria-label="GitHub" className="hidden rounded-full border border-white/15 p-2 text-white/80 transition hover:border-[#f5d35f]/60 hover:text-[#f5d35f] sm:block"><Github className="h-4 w-4" /></a>
					<a href="https://www.linkedin.com/in/abdelmounaim-elabiade/" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="hidden rounded-full border border-white/15 p-2 text-white/80 transition hover:border-[#f5d35f]/60 hover:text-[#f5d35f] sm:block"><Linkedin className="h-4 w-4" /></a>
					<a href="/cv-abdelmounaim-elabiade.pdf" download className="hidden items-center gap-2 rounded-full border border-[#f5d35f]/50 px-3 py-2 text-xs font-bold text-[#f5d35f] transition hover:bg-[#f5d35f] hover:text-[#0d092a] lg:inline-flex"><Download className="h-3.5 w-3.5" />{t.hero.cv}</a>
					<button type="button" onClick={toggleTheme} aria-label={dark ? "Activer le thème clair" : "Activer le thème sombre"} className="grid h-10 w-10 place-items-center rounded-full border border-white/15 text-white/80 transition hover:border-[#f5d35f]/60 hover:text-[#f5d35f]">
						{dark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
					</button>
					{open ? (
						<button type="button" onClick={() => setOpen(false)} className="grid h-10 w-10 place-items-center rounded-full border border-white/15 text-white/80 md:hidden" aria-label="Fermer le menu">
							<X className="h-4 w-4" />
						</button>
					) : (
						<button type="button" onClick={() => setOpen(true)} className="grid h-10 w-10 place-items-center rounded-full border border-white/15 text-white/80 md:hidden" aria-label="Ouvrir le menu">
							<Menu className="h-4 w-4" />
						</button>
					)}
				</div>
			</div>

			{open && (
				<div className="border-t border-white/10 bg-[#0b0724] md:hidden">
					<div className="mx-auto max-w-7xl space-y-2 px-5 py-4 sm:px-8">
						<div className="nav-link-mobile"><Link onClick={() => setOpen(false)} href="#about">{t.nav.about}</Link></div>
						<div className="nav-link-mobile"><Link onClick={() => setOpen(false)} href="#services">{t.nav.services}</Link></div>
						<div className="nav-link-mobile"><Link onClick={() => setOpen(false)} href="#experience">{t.nav.experience}</Link></div>
						<div className="nav-link-mobile"><Link onClick={() => setOpen(false)} href="#projects">{t.nav.projects}</Link></div>
						<div className="nav-link-mobile"><Link onClick={() => setOpen(false)} href="#contact">{t.nav.contact}</Link></div>
						<div className="mt-3 flex items-center gap-2">
							<button type="button" onClick={() => setLanguage("fr")} className={`rounded-full px-3 py-1.5 text-[10px] font-bold uppercase ${language === "fr" ? "bg-[#f5d35f] text-[#0d092a]" : "border border-white/15 text-white/70"}`} >FR</button>
							<button type="button" onClick={() => setLanguage("en")} className={`rounded-full px-3 py-1.5 text-[10px] font-bold uppercase ${language === "en" ? "bg-[#23d7ff] text-[#0d092a]" : "border border-white/15 text-white/70"}`}>EN</button>
						</div>
					</div>
				</div>
			)}
		</header>
	);
}
