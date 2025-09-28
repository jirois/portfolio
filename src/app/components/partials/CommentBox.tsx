"use client";

import React from "react";
import Input from "../form/Input";
import TextArea from "../form/TextArea";
import { useTheme } from "../../hooks/use-theme";

const CommentBox = () => {
  const { theme } = useTheme();

  return (
    <>
      <h3
        className={`text-2xl font-semibold ${
          theme === "dark" ? "text-white" : "text-gray-900"
        }`}
      >
        Leave a comment
      </h3>
      <p className={`${theme === "dark" ? "text-gray-300" : "text-gray-500"}`}>
        Your email address will not be published.
      </p>
      <div className="mt-4 grid max-w-2xl gap-8 md:grid-cols-2 md:gap-4">
        <Input placeholder="Your Name" />
        <Input placeholder="Email Address" />
      </div>
      <div className="mt-8 max-w-2xl">
        <TextArea placeholder="Comment" />
      </div>
      <div className="mt-8">
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
          Add Comment
        </button>
      </div>
    </>
  );
};

export default CommentBox;
