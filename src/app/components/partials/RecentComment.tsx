"use client";

import Comment from "../shared/Comment";
import React from "react";
import { useTheme } from "../../hooks/use-theme";

const comments = [
  {
    id: 1,
    content: `
          This is the bag of my dreams. I took it on my last vacation and was able to fit an absurd amount of snacks for the many long and hungry flights.
        `,
    name: "John Doe",
    totalLikes: 10,
    totalReplies: 3,
    createdAt: "1 month ago",
  },
  {
    id: 2,
    content: `
          This is the bag of my dreams. I took it on my last vacation and was able to fit an absurd amount of snacks for the many long and hungry flights.
        `,
    name: "Newton",
    totalLikes: 7,
    totalReplies: 5,
    createdAt: "2 hours ago",
  },
  {
    id: 3,
    content: `
          This is the bag of my dreams. I took it on my last vacation and was able to fit an absurd amount of snacks for the many long and hungry flights.
        `,
    name: "Emily Selman",
    totalLikes: 5,
    totalReplies: 1,
    createdAt: "6 min ago",
  },
  {
    id: 4,
    content: `
          This is the bag of my dreams. I took it on my last vacation and was able to fit an absurd amount of snacks for the many long and hungry flights.
        `,
    name: "Gary Smith",
    totalLikes: 3,
    totalReplies: 0,
    createdAt: "1 years ago",
  },
];

const RecentComment = () => {
  const { theme } = useTheme();

  return (
    <div className="relative">
      <h3
        className={`text-2xl font-semibold ${
          theme === "dark" ? "text-white" : "text-gray-900"
        }`}
      >
        Recent Comments
      </h3>
      <div
        className={`mt-6 divide-y ${
          theme === "dark" ? "divide-gray-700" : "divide-gray-200"
        }`}
      >
        {comments.map((item, index) => {
          return <Comment key={index} comment={item} />;
        })}
      </div>
      <button
        type="submit"
        className="px-8 py-3 font-semibold rounded-lg transition-all duration-200 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2"
        style={{
          backgroundColor: "#ff4c60",
          color: "white",
          boxShadow:
            "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.backgroundColor = "#e64456";
          e.currentTarget.style.boxShadow =
            "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.backgroundColor = "#ff4c60";
          e.currentTarget.style.boxShadow =
            "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)";
        }}
      >
        Load more
      </button>
    </div>
  );
};

export default RecentComment;
