"use client";

import React from "react";
import Navbar from "./partials/navbar";
import Footer from "./partials/footer";
import ScrollToTop from "react-scroll-to-top";
import { FiArrowUp } from "react-icons/fi";
import { useTheme } from "../hooks/use-theme";

interface Props {
  children: React.ReactNode;
  className?: string;
}

const AppLayout: React.FC<Props> = ({ children, className = "" }) => {
  const { theme, isLoading } = useTheme();

  // Show loading state to prevent hydration mismatch
  if (isLoading) {
    return (
      <div className="flex min-h-screen flex-col bg-white">
        {/* Loading Skeleton */}
        <div className="animate-pulse">
          {/* Menu skeleton */}
          <div className="fixed top-0 left-0 right-0 z-40 h-16 bg-gray-200 border-b"></div>
          {/* Content skeleton */}
          <div className="mt-16 flex-1 p-4 space-y-4">
            <div className="h-8 bg-gray-200 rounded w-3/4"></div>
            <div className="h-8 bg-gray-200 rounded w-full"></div>
            <div className="h-8 bg-gray-200 rounded w-2/3"></div>
            <div className="h-8 bg-gray-200 rounded w-4/5"></div>
          </div>
          {/* Footer skeleton */}
          <div className="h-24 bg-gray-200 mt-auto"></div>
        </div>
      </div>
    );
  }
  return (
    <div
      className={`flex min-h-screen flex-col bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-200 ${className}`}
    >
      {/* Scroll to top button */}
      <ScrollToTop
        smooth
        className="fixed bottom-16 right-8 z-50 cursor-pointer rounded-lg bg-primary-500 p-3 text-white transition-all duration-150 hover:bg-primary-600 hover:scale-110 shadow-lg border-0"
        style={{
          backgroundColor: "var(--color-primary-500)",
          borderRadius: "0.5rem",
          padding: "12px",
          boxShadow:
            "0 10px 15px -3px rgba(0,0,0,0.1), 0 4px 6px -2px rgba(0,0,0,0.05)",
        }}
        component={
          <div className="flex items-center justify-center">
            <FiArrowUp size={18} />
          </div>
        }
      />
      {/* Fixed navigation */}
      <Navbar />

      {/* Main content */}
      <main className="mt-16 flex-1 min-h-0">{children}</main>
      <Footer />
    </div>
  );
};

export default AppLayout;
