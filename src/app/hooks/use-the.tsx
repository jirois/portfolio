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

  console.log("ThemeProvider rendering...", { theme, isLoading }); // Debug log

  const toggleTheme = () => {
    console.log("Toggling theme from", theme); // Debug log
    const newTheme = theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT;
    setTheme(newTheme);

    if (newTheme === Theme.DARK) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }

    try {
      localStorage.setItem("theme", newTheme);
      console.log("Theme saved to localStorage:", newTheme); // Debug log
    } catch (error) {
      console.error("Failed to save theme to localStorage:", error);
    }
  };

  useEffect(() => {
    console.log("ThemeProvider useEffect running..."); // Debug log

    // Initialize theme on client side
    const initializeTheme = () => {
      try {
        console.log("Initializing theme..."); // Debug log

        // Check if we're in browser
        if (typeof window === "undefined") {
          console.log("Not in browser, skipping theme initialization");
          setIsLoading(false);
          return;
        }

        const localTheme = localStorage.getItem("theme") as Theme;
        console.log("Local theme from storage:", localTheme); // Debug log

        const systemPrefersDark = window.matchMedia(
          "(prefers-color-scheme: dark)"
        ).matches;
        console.log("System prefers dark:", systemPrefersDark); // Debug log

        const initialTheme =
          localTheme || (systemPrefersDark ? Theme.DARK : Theme.LIGHT);
        console.log("Initial theme determined:", initialTheme); // Debug log

        setTheme(initialTheme);

        // Apply theme class
        if (initialTheme === Theme.DARK) {
          document.documentElement.classList.add("dark");
        } else {
          document.documentElement.classList.remove("dark");
        }

        console.log("Theme initialization complete"); // Debug log
      } catch (error) {
        console.error("Failed to initialize theme:", error);
        setTheme(Theme.LIGHT);
      } finally {
        console.log("Setting isLoading to false"); // Debug log
        setIsLoading(false);
      }
    };

    // Add a small delay to ensure everything is ready
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
        console.log("System theme changed to:", newTheme); // Debug log
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
  console.log("ThemeProvider context value:", contextValue); // Debug log

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  );
};

const useTheme = () => {
  const context = useContext(ThemeContext);
  console.log("useTheme called, context:", context); // Debug log

  if (context === undefined) {
    console.error("useTheme must be used within a ThemeProvider");
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};

export { ThemeProvider, useTheme };
