"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

type Theme = "dark" | "light";

interface ThemeContextType {
  theme: Theme;
  isDark: boolean;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType>({
  theme: "dark",
  isDark: true,
  toggleTheme: () => {},
});

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [theme, setTheme] = useState<Theme>("dark");

  useEffect(() => {
    // Lê o tema atual que o script inicial da <head> já aplicou ao <html>
    const isLight = document.documentElement.classList.contains("light-mode");
    setTheme(isLight ? "light" : "dark");
  }, []);

  const toggleTheme = () => {
    const nextTheme: Theme = theme === "dark" ? "light" : "dark";
    setTheme(nextTheme);

    if (nextTheme === "light") {
      document.documentElement.classList.remove("dark-mode");
      document.documentElement.classList.add("light-mode");
      localStorage.setItem("triffen-theme", "light-mode");
    } else {
      document.documentElement.classList.remove("light-mode");
      document.documentElement.classList.add("dark-mode");
      localStorage.setItem("triffen-theme", "dark-mode");
    }
  };

  return (
    <ThemeContext.Provider
      value={{
        theme,
        isDark: theme === "dark",
        toggleTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
