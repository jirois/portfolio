"use client";

import React, { useEffect, useState, useContext, createContext } from "react";

export enum Theme {
  LIGHT = "light",
  DARK = "dark",
}

type ThemeContextType = {
  theme: Theme;
  toggleTheme: () => void;
  isLoading: boolean;
};

type ThemeProviderProps = {
  children: React.ReactNode;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  // Start with light theme on server, update on client
  const [theme, setTheme] = useState<Theme>(Theme.LIGHT);
  const [isLoading, setIsLoading] = useState(true);
  const [mounted, setMounted] = useState(false);

  const toggleTheme = () => {
    const newTheme = theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT;
    setTheme(newTheme);

    if (newTheme === Theme.DARK) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }

    localStorage.setItem("theme", newTheme);
  };

  useEffect(() => {
    // This only runs on the client after hydration
    setMounted(true);

    const savedTheme = localStorage.getItem("theme") as Theme;
    const systemPrefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    const initialTheme =
      savedTheme || (systemPrefersDark ? Theme.DARK : Theme.LIGHT);

    setTheme(initialTheme);

    // Apply theme class
    if (initialTheme === Theme.DARK) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }

    setIsLoading(false);
  }, []);

  const contextValue = { theme, toggleTheme, isLoading };

  // Don't render theme-dependent content until mounted
  if (!mounted) {
    // Return a neutral loading state that matches server render
    return (
      <ThemeContext.Provider
        value={{ theme: Theme.LIGHT, toggleTheme, isLoading: true }}
      >
        {children}
      </ThemeContext.Provider>
    );
  }

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  );
};

const useTheme = () => {
  const context = useContext(ThemeContext);

  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};

export { ThemeProvider, useTheme };
