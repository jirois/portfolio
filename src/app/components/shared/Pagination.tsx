"use client";

import React from "react";
import Link from "next/link";
import { useTheme } from "../../hooks/use-theme";

const Pagination = () => {
  const { theme } = useTheme();

  return (
    <div className="flex items-center justify-center space-x-1">
      <Link
        href="#"
        className={`
          flex items-center rounded-lg px-4 py-2 transition-colors duration-150
          ${
            theme === "dark"
              ? "bg-gray-700 text-gray-400 hover:bg-primary-500 hover:text-white"
              : "bg-gray-200 text-gray-500 hover:bg-primary-500 hover:text-white"
          }
        `}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M11 17l-5-5m0 0l5-5m-5 5h12"
          />
        </svg>
      </Link>

      <Link
        href="#"
        className="rounded-lg bg-primary-500 px-4 py-2 text-white transition-colors duration-150 hover:bg-primary-600"
      >
        1
      </Link>

      <Link
        href="#"
        className={`
          rounded-lg px-4 py-2 transition-colors duration-150 hover:bg-primary-500 hover:text-white
          ${
            theme === "dark"
              ? "bg-gray-700 text-gray-300"
              : "bg-gray-200 text-gray-700"
          }
        `}
      >
        2
      </Link>

      <Link
        href="#"
        className={`
          rounded-lg px-4 py-2 transition-colors duration-150 hover:bg-primary-500 hover:text-white
          ${
            theme === "dark"
              ? "bg-gray-700 text-gray-300"
              : "bg-gray-200 text-gray-700"
          }
        `}
      >
        3
      </Link>

      <Link
        href="#"
        className={`
          flex items-center rounded-lg px-4 py-2 transition-colors duration-150
          ${
            theme === "dark"
              ? "bg-gray-700 text-gray-400 hover:bg-primary-500 hover:text-white"
              : "bg-gray-200 text-gray-500 hover:bg-primary-500 hover:text-white"
          }
        `}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M13 7l5 5m0 0l-5 5m5-5H6"
          />
        </svg>
      </Link>
    </div>
  );
};

export default Pagination;
