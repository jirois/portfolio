"use client";

import React from "react";
import SectionTitle from "../shared/SectionTitle";
import { FiCoffee } from "react-icons/fi";
import {
  HiOutlineChartBar,
  HiOutlineFire,
  HiOutlineUsers,
} from "react-icons/hi";
import ProgressBar from "../shared/ProgressBar";
import { useTheme } from "../../hooks/use-theme";
import DownloadCVButton from "../form/DownloadCVButton";

const AboutSection = () => {
  const { theme } = useTheme();

  // Stats data for easy management
  const stats = [
    {
      icon: HiOutlineFire,
      number: "50+",
      label: "Projects Completed",
      color: "#ff4c60",
    },
    {
      icon: FiCoffee,
      number: "500+",
      label: "Cups of Coffee",
      color: "#8b5cf6",
    },
    {
      icon: HiOutlineUsers,
      number: "30+",
      label: "Satisfied Clients",
      color: "#06b6d4",
    },
    {
      icon: HiOutlineChartBar,
      number: "3+",
      label: "Years Experience",
      color: "#10b981",
    },
  ];

  // Skills data for easy management
  const skills = [
    { name: "Frontend", percentage: 95, color: "blue" as const }, // blue
    { name: "React/Next.js", percentage: 90, color: "amber" as const }, // amber
    { name: "Backend", percentage: 85, color: "red" as const }, // red
    { name: "UI/UX Design", percentage: 80, color: "green" as const }, // green
  ];

  return (
    <div className="py-12">
      <SectionTitle>About Me</SectionTitle>

      <div className="grid grid-cols-1 gap-8 py-8 md:grid-cols-2 lg:gap-12">
        {/* Bio Section */}
        <div className="space-y-6">
          <div className="space-y-4">
            <p
              className="text-lg leading-relaxed"
              style={{
                color: theme === "dark" ? "#d1d5db" : "#4b5563",
                textAlign: "justify",
              }}
            >
              Hi, I&#39;m{" "}
              <span style={{ color: "#ff4c60", fontWeight: "semibold" }}>
                Omanudhowho Ajiri
              </span>
              , a passionate Frontend Developer specializing in modern web
              technologies. I work remotely and have extensive experience in
              building responsive, user-friendly web applications using React,
              Next.js, and TypeScript.
            </p>

            <p
              className="text-base leading-relaxed"
              style={{
                color: theme === "dark" ? "#9ca3af" : "#6b7280",
                textAlign: "justify",
              }}
            >
              I love creating beautiful, functional interfaces that provide
              excellent user experiences. My expertise includes modern
              JavaScript frameworks, responsive design, and performance
              optimization.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            {["React", "Next.js", "TypeScript", "Tailwind CSS", "Node.js"].map(
              (tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 rounded-full text-sm font-medium"
                  style={{
                    backgroundColor:
                      theme === "dark"
                        ? "rgba(255, 76, 96, 0.1)"
                        : "rgba(255, 76, 96, 0.1)",
                    color: "#ff4c60",
                    border: `1px solid ${
                      theme === "dark"
                        ? "rgba(255, 76, 96, 0.3)"
                        : "rgba(255, 76, 96, 0.3)"
                    }`,
                  }}
                >
                  {tech}
                </span>
              )
            )}
          </div>

          <DownloadCVButton className="mt-6" />
        </div>

        {/* Skills Section */}
        <div className="space-y-6">
          <h3
            className="text-xl font-semibold mb-6"
            style={{
              color: theme === "dark" ? "#ffffff" : "#111827",
            }}
          >
            Technical Skills
          </h3>

          <div className="space-y-6">
            {skills.map((skill, index) => (
              <div key={index} className="space-y-2">
                <div className="flex justify-between items-center">
                  <h6
                    className="font-semibold"
                    style={{
                      color: theme === "dark" ? "#f3f4f6" : "#374151",
                    }}
                  >
                    {skill.name}
                  </h6>
                  <p
                    className="text-sm font-medium"
                    style={{
                      color: skill.color,
                    }}
                  >
                    {skill.percentage}%
                  </p>
                </div>
                <ProgressBar color={skill.color} progress={skill.percentage} />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Stats Overview */}
      <div className="mt-16">
        <h3
          className="text-xl font-semibold mb-8 text-center"
          style={{
            color: theme === "dark" ? "#ffffff" : "#111827",
          }}
        >
          Professional Highlights
        </h3>

        <div className="grid grid-cols-2 gap-6 md:grid-cols-4 md:gap-8">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div
                key={index}
                className="flex flex-col items-center text-center p-4 rounded-lg transition-all duration-300 hover:scale-105"
                style={{
                  backgroundColor:
                    theme === "dark"
                      ? "rgba(255, 255, 255, 0.02)"
                      : "rgba(0, 0, 0, 0.02)",
                  border: `1px solid ${
                    theme === "dark"
                      ? "rgba(255, 255, 255, 0.1)"
                      : "rgba(0, 0, 0, 0.1)"
                  }`,
                }}
              >
                <div
                  className="mb-3 p-3 rounded-full"
                  style={{
                    backgroundColor: `${stat.color}20`,
                    color: stat.color,
                  }}
                >
                  <IconComponent size={32} />
                </div>
                <div>
                  <h2
                    className="text-2xl md:text-3xl font-bold mb-1"
                    style={{
                      color: theme === "dark" ? "#ffffff" : "#111827",
                    }}
                  >
                    {stat.number}
                  </h2>
                  <p
                    className="text-sm md:text-base"
                    style={{
                      color: theme === "dark" ? "#9ca3af" : "#6b7280",
                    }}
                  >
                    {stat.label}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
