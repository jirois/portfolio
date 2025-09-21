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

  // Show loading state with inline styles that always work
  if (isLoading) {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          minHeight: "100vh",
          backgroundColor: "#ffffff",
          fontFamily: "Rubik, system-ui, sans-serif",
        }}
      >
        {/* Loading Skeleton */}
        <div
          style={{
            padding: "16px",
          }}
        >
          {/* Menu skeleton */}
          <div
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              right: 0,
              zIndex: 40,
              height: "64px",
              backgroundColor: "#e5e7eb",
              borderBottom: "1px solid #d1d5db",
            }}
          ></div>

          {/* Content skeleton */}
          <div
            style={{
              marginTop: "64px",
              flex: 1,
              padding: "16px",
            }}
          >
            <div
              style={{
                height: "32px",
                backgroundColor: "#e5e7eb",
                borderRadius: "4px",
                width: "75%",
                marginBottom: "16px",
                animation: "pulse 2s infinite",
              }}
            ></div>
            <div
              style={{
                height: "16px",
                backgroundColor: "#e5e7eb",
                borderRadius: "4px",
                width: "100%",
                marginBottom: "8px",
                animation: "pulse 2s infinite",
              }}
            ></div>
            <div
              style={{
                height: "16px",
                backgroundColor: "#e5e7eb",
                borderRadius: "4px",
                width: "66%",
                marginBottom: "8px",
                animation: "pulse 2s infinite",
              }}
            ></div>
            <div
              style={{
                height: "16px",
                backgroundColor: "#e5e7eb",
                borderRadius: "4px",
                width: "80%",
                animation: "pulse 2s infinite",
              }}
            ></div>
          </div>

          {/* Footer skeleton */}
          <div
            style={{
              height: "96px",
              backgroundColor: "#e5e7eb",
              marginTop: "32px",
              borderRadius: "4px",
              animation: "pulse 2s infinite",
            }}
          ></div>
        </div>

        <div
          style={{
            textAlign: "center",
            padding: "16px",
            color: "#6b7280",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "8px",
          }}
        >
          <div
            style={{
              width: "16px",
              height: "16px",
              border: "2px solid #f3f3f3",
              borderTop: "2px solid #ff4c60",
              borderRadius: "50%",
              animation: "spin 1s linear infinite",
            }}
          ></div>
          Loading theme...
        </div>

        <style jsx>{`
          @keyframes pulse {
            0%,
            100% {
              opacity: 1;
            }
            50% {
              opacity: 0.5;
            }
          }
          @keyframes spin {
            0% {
              transform: rotate(0deg);
            }
            100% {
              transform: rotate(360deg);
            }
          }
        `}</style>
      </div>
    );
  }

  return (
    <div
      className={className}
      style={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
        backgroundColor: theme === "dark" ? "#111827" : "#ffffff",
        color: theme === "dark" ? "#f9fafb" : "#111827",
        fontFamily: "Rubik, system-ui, sans-serif",
        transition: "background-color 0.2s, color 0.2s",
      }}
    >
      {/* Scroll to top button - Using inline styles for reliability */}
      <ScrollToTop
        smooth
        style={{
          position: "fixed",
          bottom: "64px",
          right: "32px",
          zIndex: 50,
          cursor: "pointer",
          borderRadius: "8px",
          backgroundColor: "#ff4c60",
          padding: "12px",
          border: "none",
          color: "white",
          boxShadow:
            "0 10px 15px -3px rgba(0,0,0,0.1), 0 4px 6px -2px rgba(0,0,0,0.05)",
          transition: "all 0.15s ease",
        }}
        className="hover:scale-110"
        component={
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <FiArrowUp size={18} />
          </div>
        }
      />

      {/* Navigation */}
      <Navbar />

      {/* Main content */}
      <main
        style={{
          marginTop: "64px",
          flex: 1,
          minHeight: 0,
        }}
      >
        {children}
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default AppLayout;
