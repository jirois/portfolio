"use client";

import Image from "next/image";
import React, { useState } from "react";
import Link from "next/link";
import { useTheme } from "../../hooks/use-theme";

type Props = {
  thumbnailUrl: string;
  title: string;
  publishedAt: string;
  href: string;
};

const Post = ({ thumbnailUrl, title, publishedAt, href }: Props) => {
  const { theme } = useTheme();
  const [isHovered, setIsHovered] = useState(false);
  const [isImageHovered, setIsImageHovered] = useState(false);

  return (
    <div
      className="transform overflow-hidden rounded-2xl shadow-lg transition-transform duration-500"
      style={{
        backgroundColor: theme === "dark" ? "#374151" : "#ffffff",
        transform: isHovered ? "translateY(-12px)" : "translateY(0px)",
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link
        href={href}
        className="block overflow-hidden"
        onMouseEnter={() => setIsImageHovered(true)}
        onMouseLeave={() => setIsImageHovered(false)}
      >
        <Image
          src={thumbnailUrl}
          height={384}
          width={512}
          alt={title}
          style={{
            width: "100%",
            height: "auto",
            transform: isImageHovered ? "scale(1.1)" : "scale(1)",
            transition: "transform 0.3s ease",
          }}
        />
      </Link>
      <div className="p-6">
        <Link
          href={href}
          className="block text-xl font-semibold transition-colors duration-150 hover:underline"
          style={{
            color: theme === "dark" ? "#f3f4f6" : "#111827",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.color = "#ff4c60";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.color =
              theme === "dark" ? "#f3f4f6" : "#111827";
          }}
        >
          {title}
        </Link>
        <time
          className="mt-2 inline-block"
          style={{
            color: theme === "dark" ? "#9ca3af" : "#6b7280",
          }}
        >
          {publishedAt}
        </time>
      </div>
    </div>
  );
};

export default Post;
