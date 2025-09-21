"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
  FiDribbble,
  FiFacebook,
  FiGithub,
  FiInstagram,
  FiTwitter,
} from "react-icons/fi";
import Button from "../form/Button";
import HeroBackground from "./HeroBackground";
import { ReactTyped } from "react-typed";
import { useTheme } from "@/app/hooks/use-theme";

const HeroSection = () => {
  const { theme } = useTheme();

  return (
    <div className="hero relative -mt-16 flex items-center justify-center min-h-screen">
      <HeroBackground />
      <div className="flex flex-col items-center z-10">
        <div className="overflow-hidden rounded-full shadow-lg">
          <Image
            src="/images/avatar/man.png"
            width={180}
            height={180}
            alt="Omanudhowho Ajiri - Frontend Developer"
            priority
          />
        </div>

        <h1
          className="mt-4 text-3xl font-bold"
          style={{
            color: theme === "dark" ? "#ffffff" : "#111827",
          }}
        >
          Omanudhowho Ajiri
        </h1>

        <div
          className="mt-2 flex gap-1 text-lg"
          style={{
            color: theme === "dark" ? "#d1d5db" : "#6b7280",
          }}
        >
          I&apos;m a{" "}
          <span style={{ color: "#ff4c60" }}>
            <ReactTyped
              strings={[
                "Frontend Developer",
                "UI/UX Designer",
                "React Specialist",
              ]}
              typeSpeed={60}
              backSpeed={30}
              loop
            />
          </span>
        </div>

        <div className="mt-6 flex gap-5">
          <Link
            href="https://www.instagram.com"
            className="transition-all duration-150 hover:scale-110"
            style={{
              color: theme === "dark" ? "#d1d5db" : "#374151",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = "#ff4c60";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color =
                theme === "dark" ? "#d1d5db" : "#374151";
            }}
          >
            <FiInstagram size={25} />
          </Link>

          <Link
            href="https://www.twitter.com"
            className="transition-all duration-150 hover:scale-110"
            style={{
              color: theme === "dark" ? "#d1d5db" : "#374151",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = "#ff4c60";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color =
                theme === "dark" ? "#d1d5db" : "#374151";
            }}
          >
            <FiTwitter size={25} />
          </Link>

          <Link
            href="https://www.facebook.com"
            className="transition-all duration-150 hover:scale-110"
            style={{
              color: theme === "dark" ? "#d1d5db" : "#374151",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = "#ff4c60";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color =
                theme === "dark" ? "#d1d5db" : "#374151";
            }}
          >
            <FiFacebook size={25} />
          </Link>

          <Link
            href="https://www.dribbble.com"
            className="transition-all duration-150 hover:scale-110"
            style={{
              color: theme === "dark" ? "#d1d5db" : "#374151",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = "#ff4c60";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color =
                theme === "dark" ? "#d1d5db" : "#374151";
            }}
          >
            <FiDribbble size={25} />
          </Link>

          <Link
            href="https://www.github.com"
            className="transition-all duration-150 hover:scale-110"
            style={{
              color: theme === "dark" ? "#d1d5db" : "#374151",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = "#ff4c60";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color =
                theme === "dark" ? "#d1d5db" : "#374151";
            }}
          >
            <FiGithub size={25} />
          </Link>
        </div>

        <Button className="mt-8 px-8">Hire Me</Button>
      </div>

      <div className="absolute bottom-8 flex flex-col items-center">
        <p
          className="mb-3 text-sm"
          style={{
            color: theme === "dark" ? "#9ca3af" : "#6b7280",
          }}
        >
          Scroll Down
        </p>
        <div
          className="relative flex h-7 w-5 justify-center rounded-full border-2"
          style={{
            borderColor: theme === "dark" ? "#f9fafb" : "#6b7280",
          }}
        >
          <div
            className="animate-scroll absolute h-1 w-1 rounded-full"
            style={{
              top: "6px",
              backgroundColor: theme === "dark" ? "#f9fafb" : "#6b7280",
            }}
          ></div>
        </div>
      </div>

      {/* Add scroll animation */}
      <style jsx>{`
        @keyframes scroll {
          0% {
            opacity: 0;
            transform: translateY(-10px);
          }
          50% {
            opacity: 1;
          }
          100% {
            opacity: 0;
            transform: translateY(10px);
          }
        }
        .animate-scroll {
          animation: scroll 2s infinite;
        }
      `}</style>
    </div>
  );
};

export default HeroSection;
