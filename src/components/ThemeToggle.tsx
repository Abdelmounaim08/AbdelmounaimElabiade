"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { useLanguage } from "../app/context/LanguageContext";

export default function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const { language } = useLanguage();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const isDark = mounted && resolvedTheme === "dark";
  const label = language === "fr"
    ? isDark ? "Activer le thème clair" : "Activer le thème sombre"
    : isDark ? "Enable light mode" : "Enable dark mode";

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label={label}
      className="grid h-10 w-10 place-items-center rounded-full border border-[var(--hero-line)] text-[var(--hero-fg)] opacity-80 transition-[background-color,color,border-color,opacity] duration-300 hover:border-[#f5d35f]/60 hover:text-[#f5d35f] hover:opacity-100 focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[#23d7ff]"
    >
      {isDark ? <Sun className="h-4 w-4" aria-hidden="true" /> : <Moon className="h-4 w-4" aria-hidden="true" />}
    </button>
  );
}
