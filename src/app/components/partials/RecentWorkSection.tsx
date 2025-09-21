"use client";

import React from "react";
import Portfolio from "../shared/portfolio"; // Adjust path as needed
import SectionTitle from "../shared/SectionTitle";
import Link from "next/link";
import { useTheme } from "../../hooks/use-theme";
import { works } from "../../data/works";

// // Sample works data - replace with your actual import
// const works = [
//   {
//     id: 1,
//     thumbnailUrl: "/images/portfolio/project1.jpg",
//     category: "Web Development",
//     title: "E-commerce Platform",
//   },
//   {
//     id: 2,
//     thumbnailUrl: "/images/portfolio/project2.jpg",
//     category: "React App",
//     title: "Task Management System",
//   },
//   {
//     id: 3,
//     thumbnailUrl: "/images/portfolio/project3.jpg",
//     category: "Next.js",
//     title: "Portfolio Website",
//   },
//   // Add more sample data or import your actual data
// ];

const RecentWorkSection = () => {
  const { theme } = useTheme();

  return (
    <div className="py-12">
      <SectionTitle>Recent Works</SectionTitle>

      <div className="mt-12 grid gap-6 xs:grid-cols-2 md:grid-cols-3 md:gap-8">
        {works
          .filter((_, index) => index < 6)
          .map((work) => (
            <Portfolio
              key={work.id}
              imageUrl={work.thumbnailUrl}
              category={work.category}
              title={work.title}
              href={`/works/${work.id}`}
            />
          ))}
      </div>

      <div className="mt-12 flex justify-center">
        <Link
          href="/works"
          className="inline-flex items-center px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
          style={{
            backgroundColor: "#ff4c60",
            color: "white",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = "#e64456";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = "#ff4c60";
          }}
        >
          View All Works
        </Link>
      </div>
    </div>
  );
};

export default RecentWorkSection;
