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
  const [theme, setTheme] = useState<Theme>(Theme.LIGHT);
  const [isLoading, setIsLoading] = useState(true);

  const toggleTheme = () => {
    console.log("🎨 Toggling theme from:", theme);
    const newTheme = theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT;
    setTheme(newTheme);

    console.log("🎨 New theme will be:", newTheme);
    console.log(
      "🎨 HTML element classes before:",
      document.documentElement.className
    );

    if (newTheme === Theme.DARK) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }

    console.log(
      "🎨 HTML element classes after:",
      document.documentElement.className
    );

    try {
      localStorage.setItem("theme", newTheme);
      console.log("🎨 Theme saved to localStorage:", newTheme);
    } catch (error) {
      console.error("🎨 Failed to save theme to localStorage:", error);
    }
  };

  useEffect(() => {
    console.log("🎨 ThemeProvider useEffect running...");

    const initializeTheme = () => {
      try {
        console.log("🎨 Initializing theme...");

        if (typeof window === "undefined") {
          console.log("🎨 Not in browser, skipping theme initialization");
          setIsLoading(false);
          return;
        }

        const localTheme = localStorage.getItem("theme") as Theme;
        console.log("🎨 Local theme from storage:", localTheme);

        const systemPrefersDark = window.matchMedia(
          "(prefers-color-scheme: dark)"
        ).matches;
        console.log("🎨 System prefers dark:", systemPrefersDark);

        const initialTheme =
          localTheme || (systemPrefersDark ? Theme.DARK : Theme.LIGHT);
        console.log("🎨 Initial theme determined:", initialTheme);

        setTheme(initialTheme);

        console.log(
          "🎨 HTML classes before applying theme:",
          document.documentElement.className
        );

        // Apply theme class
        if (initialTheme === Theme.DARK) {
          document.documentElement.classList.add("dark");
        } else {
          document.documentElement.classList.remove("dark");
        }

        console.log(
          "🎨 HTML classes after applying theme:",
          document.documentElement.className
        );
        console.log("🎨 Theme initialization complete");
      } catch (error) {
        console.error("🎨 Failed to initialize theme:", error);
        setTheme(Theme.LIGHT);
      } finally {
        console.log("🎨 Setting isLoading to false");
        setIsLoading(false);
      }
    };

    // Small delay to ensure DOM is ready
    const timeoutId = setTimeout(initializeTheme, 100);

    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  // Listen for system theme changes
  useEffect(() => {
    if (typeof window === "undefined") return;

    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

    const handleChange = (e: MediaQueryListEvent) => {
      const storedTheme = localStorage.getItem("theme");
      if (!storedTheme) {
        const newTheme = e.matches ? Theme.DARK : Theme.LIGHT;
        console.log("🎨 System theme changed to:", newTheme);
        setTheme(newTheme);

        if (newTheme === Theme.DARK) {
          document.documentElement.classList.add("dark");
        } else {
          document.documentElement.classList.remove("dark");
        }
      }
    };

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  const contextValue = { theme, toggleTheme, isLoading };
  console.log("🎨 ThemeProvider context value:", contextValue);

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  );
};

const useTheme = () => {
  const context = useContext(ThemeContext);

  if (context === undefined) {
    console.error("🎨 useTheme must be used within a ThemeProvider");
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};

export { ThemeProvider, useTheme };
