"use client";

import React from "react";
import { FiHeart, FiMessageSquare } from "react-icons/fi";
import { useTheme } from "../../hooks/use-theme";

interface Comment {
  id: number | string;
  name: string;
  content: string;
  totalLikes: number;
  totalReplies: number;
  createdAt: string;
}

type Props = {
  comment: Comment;
};

const Comment = ({ comment }: Props) => {
  const { theme } = useTheme();

  return (
    <div className="py-4">
      <div className="flex items-baseline">
        <h4
          className={`text-lg font-bold ${
            theme === "dark" ? "text-white" : "text-gray-900"
          }`}
        >
          {comment.name}
        </h4>
        <time
          className={`ml-2 text-xs ${
            theme === "dark" ? "text-gray-400" : "text-gray-500"
          }`}
        >
          {comment.createdAt}
        </time>
      </div>
      <div
        className={`mt-2 space-y-6 text-base ${
          theme === "dark" ? "text-gray-300" : "text-gray-500"
        }`}
      >
        {comment.content}
      </div>
      <div className="mt-3 flex items-center">
        <button
          className={`
            flex items-center transition-colors duration-200
            ${
              theme === "dark"
                ? "text-gray-400 hover:text-red-500"
                : "text-gray-500 hover:text-red-500"
            }
          `}
        >
          <FiHeart className="h-4" />
          <span className="ml-1 text-sm">{comment.totalLikes} likes</span>
        </button>

        <button
          className={`
            ml-4 flex items-center transition-colors duration-200
            ${
              theme === "dark"
                ? "text-gray-400 hover:text-red-500"
                : "text-gray-500 hover:text-red-500"
            }
          `}
        >
          <FiMessageSquare className="h-4" />
          <span className="ml-1 text-sm">{comment.totalReplies} replies</span>
        </button>
      </div>
    </div>
  );
};

export default Comment;
