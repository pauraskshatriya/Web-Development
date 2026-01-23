function setTheme(theme) {
  const root = document.documentElement;

  const themes = {
    blue: {
      bg: "#0f172a",
      card: "#1e293b",
      text: "#e5e7eb",
      accent: "#38bdf8"
    },
    purple: {
      bg: "#2e1065",
      card: "#4c1d95",
      text: "#f5f3ff",
      accent: "#c084fc"
    },
    green: {
      bg: "#022c22",
      card: "#064e3b",
      text: "#ecfdf5",
      accent: "#34d399"
    },
    sunset: {
      bg: "#7c2d12",
      card: "#9a3412",
      text: "#fff7ed",
      accent: "#fb923c"
    }
  };

  root.style.setProperty("--bg-color", themes[theme].bg);
  root.style.setProperty("--card-color", themes[theme].card);
  root.style.setProperty("--text-color", themes[theme].text);
  root.style.setProperty("--accent-color", themes[theme].accent);
}
