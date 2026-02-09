import { useEffect, useState } from "react";

export function ThemeToggle() {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    const saved = localStorage.getItem("theme");
    const dark = saved ? saved === "dark" : true;

    setIsDark(dark);
    document.documentElement.classList.toggle("dark", dark);
  }, []);

  function toggleTheme() {
    const next = !isDark;
    setIsDark(next);
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("theme", next ? "dark" : "light");
  }

  return (
    <button
      onClick={toggleTheme}
      className="
        flex items-center gap-2
        rounded-md border border-border
        bg-background px-3 py-2
        text-sm text-foreground
        hover:bg-muted transition
        font-bold uppercase tracking-wider
      "
    >
      {isDark ? "Modo claro" : "Modo escuro"}
    </button>
  );
}
