"use client";

import Image from "next/image";
import React from "react";
import Input from "../form/Input";
import TextArea from "../form/TextArea";
import SectionTitle from "../shared/SectionTitle";
import { useTheme } from "../../hooks/use-theme";

const ContactSection = () => {
  const { theme } = useTheme();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add form submission logic here
    console.log("Form submitted");
  };

  return (
    <>
      <SectionTitle>Get In Touch</SectionTitle>
      <div className="mt-14 grid gap-8 md:grid-cols-3">
        <div className="flex flex-col">
          <div className="relative h-48 w-full mb-4 overflow-hidden rounded-lg">
            <Image
              src="/images/map.svg"
              fill
              className={theme === "dark" ? "invert" : ""}
              alt="map"
              style={{ objectFit: "contain" }}
            />
            <h6
              className="text-2xl font-bold"
              style={{
                color: theme === "dark" ? "#f3f4f6" : "#111827",
              }}
            >
              Let&apos;s talk about everything!
            </h6>
            <p
              style={{
                color: theme === "dark" ? "#d1d5db" : "#6b7280",
              }}
            >
              Don&apos;t like forms? Send me an email. 👋
            </p>
          </div>
        </div>

        <div className="col-span-2">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid gap-6 md:grid-cols-2">
              <Input
                placeholder="Your Name"
                type="text"
                required
                className="w-full"
              />
              <Input
                placeholder="Email Address"
                type="email"
                required
                className="w-full"
              />
            </div>

            <Input
              placeholder="Subject"
              type="text"
              required
              className="w-full"
            />

            <TextArea
              placeholder="Message"
              rows={6}
              required
              className="w-full min-h-32"
            />

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
              Send Message
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default ContactSection;
