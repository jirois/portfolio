"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FiLink as LinkIcon } from "react-icons/fi";
import { UrlObject } from "url";
import { useTheme } from "../../hooks/use-theme";

type Props = {
  imageUrl: string;
  category: string;
  title: string;
  href: string | UrlObject;
};

const Portfolio = ({ imageUrl, category, title, href }: Props) => {
  const { theme } = useTheme();
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative overflow-hidden rounded-2xl text-center shadow-lg transition-transform duration-300 hover:scale-105"
      style={{
        backgroundColor: theme === "dark" ? "#374151" : "#ffffff",
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Image
        src={imageUrl}
        height={384}
        width={512}
        style={{ width: "100%", height: "auto" }}
        alt={title}
        className="transition-transform duration-500 hover:scale-110"
      />

      {/* Portfolio Overlay */}
      <div
        className="absolute top-0 left-0 flex h-full w-full flex-col px-8 pb-8 text-left transition-opacity duration-500"
        style={{
          backgroundColor: "rgba(99, 102, 241, 0.8)", // indigo-overlay
          opacity: isHovered ? 1 : 0,
        }}
      >
        {/* Category */}
        <span
          className="inline-block max-w-min whitespace-nowrap rounded-b-lg px-4 py-2 text-sm text-white transition-all duration-300 ease-out"
          style={{
            backgroundColor: "#ff4c60", // primary-500
            opacity: isHovered ? 1 : 0.9,
            transform: isHovered ? "translateY(0)" : "translateY(-100%)",
          }}
        >
          {category}
        </span>

        {/* Title */}
        <Link
          href={href}
          className="mt-auto w-3/4 text-xl font-semibold text-white transition-all duration-500 ease-out hover:underline"
          style={{
            opacity: isHovered ? 1 : 0,
            transform: isHovered ? "translateY(0)" : "translateY(100%)",
          }}
        >
          {title}
        </Link>

        {/* Link Button */}
        <Link
          href={href}
          className="mt-auto flex h-10 w-10 items-center justify-center rounded-full transition-opacity duration-700"
          style={{
            backgroundColor: "#fbbf24", // yellow-400
            opacity: isHovered ? 1 : 0,
          }}
        >
          <LinkIcon className="h-5 text-white" />
        </Link>
      </div>
    </div>
  );
};

export default Portfolio;
