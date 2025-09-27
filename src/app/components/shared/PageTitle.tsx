"use client";

import Link from "next/link";
import React from "react";
import { useTheme } from "../../hooks/use-theme";

interface Breadcrumb {
  label: string;
  path: string;
}

type Props = {
  breadcrumb: Breadcrumb[];
  children: React.ReactNode;
};

const PageTitle: React.FunctionComponent<Props> = ({
  children,
  breadcrumb = [],
}) => {
  const { theme } = useTheme();

  return (
    <div className="container mx-auto flex h-48 flex-col items-center justify-center px-4">
      <h1
        className="mb-4 text-4xl font-bold text-center"
        style={{
          color: theme === "dark" ? "#f3f4f6" : "#111827",
        }}
      >
        {children}
      </h1>

      <div className="flex text-sm uppercase">
        {breadcrumb.map((item, index) => {
          return (
            <div key={index} className="flex items-center">
              {item.path ? (
                <Link
                  href={item.path}
                  className="transition-colors duration-150 hover:underline"
                  style={{
                    color: theme === "dark" ? "#d1d5db" : "#6b7280",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = "#ff4c60";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color =
                      theme === "dark" ? "#d1d5db" : "#6b7280";
                  }}
                >
                  {item.label}
                </Link>
              ) : (
                <span
                  style={{
                    color: theme === "dark" ? "#6b7280" : "#9ca3af",
                  }}
                >
                  {item.label}
                </span>
              )}

              {index !== breadcrumb.length - 1 && (
                <span className="px-2" style={{ color: "#ff4c60" }}>
                  /
                </span>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PageTitle;
