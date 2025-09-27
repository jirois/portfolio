"use client";

import PageTitle from "../components/shared/PageTitle";
import AppLayout from "../components/AppLay";
import React from "react";
import Image from "next/image";
import Button from "../components/form/Button";
import Input from "../components/form/Input";
import TextArea from "../components/form/TextArea";
import { useTheme } from "../hooks/use-theme";

type Props = object;

const ContactSection = (props: Props) => {
  const { theme } = useTheme();
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add form submission logic here
    console.log("Form submitted");
  };

  return (
    <AppLayout>
      <PageTitle
        breadcrumb={[
          { label: "Home", path: "/" },
          { label: "Contact", path: "" },
        ]}
      >
        Contact
      </PageTitle>
      <div className="container py-10">
        <div className="grid gap-6 md:grid-cols-3">
          <div className="relative mb-10 h-48">
            <Image
              src="/images/map.svg"
              fill
              className={`object-contain ${theme === "dark" ? "invert" : ""}`}
              alt="map"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
            <h6
              className={`text-2xl font-bold ${
                theme === "dark" ? "text-white" : "text-gray-900"
              }`}
            >
              Contact with me
            </h6>
            <p
              className={`mt-2 ${
                theme === "dark" ? "text-gray-300" : "text-gray-600"
              }`}
            >
              I would love to hear from you. 👋
            </p>
            <div
              className={`mt-10 ${
                theme === "dark" ? "text-gray-400" : "text-gray-400"
              }`}
            >
              <p>2 Unit, 1st Avenue Aromi Akata, Tanke</p>
              <p>Ilorin, Nigeria</p>

              <p className="mt-4">+2348034906770</p>
              <p>omasajiri@gmail.com</p>
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
      </div>
    </AppLayout>
  );
};

export default ContactSection;
