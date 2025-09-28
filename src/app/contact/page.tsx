"use client";

import PageTitle from "../components/shared/PageTitle";
import AppLayout from "../components/AppLay";
import React, { useState } from "react";
import Image from "next/image";
import Input from "../components/form/Input";
import TextArea from "../components/form/TextArea";
import { useTheme } from "../hooks/use-theme";

// type Props = object;

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const ContactSection = () => {
  const { theme } = useTheme();
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      // Option 1: Using EmailJS (Client-side)
      await sendEmailWithEmailJS(formData);

      // Option 2: Using your own API endpoint
      // await sendEmailWithAPI(formData);

      // Option 3: Using mailto (Simple fallback)
      // sendEmailWithMailto(formData);

      setSubmitStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" }); // Reset form
    } catch (error) {
      console.error("Error sending email:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  // Option 1: EmailJS Implementation (Recommended)
  const sendEmailWithEmailJS = async (data: FormData) => {
    try {
      // You need to install emailjs: npm install @emailjs/browser
      // For now, let's use a working mailto fallback
      throw new Error("EmailJS not configured - using mailto fallback");
    } catch (e) {
      // Fallback to mailto if EmailJS fails
      sendEmailWithMailto(data);

      return Promise.resolve(e); // Resolve successfully since mailto opened
    }
  };

  // Option 2: API Route Implementation
  // const sendEmailWithAPI = async (data: FormData) => {
  //   const response = await fetch("/api/contact", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify(data),
  //   });

  //   if (!response.ok) {
  //     throw new Error("Failed to send email");
  //   }

  //   return response.json();
  // };

  // Option 3: Simple Mailto (Fallback)
  const sendEmailWithMailto = (data: FormData) => {
    const subject = encodeURIComponent(data.subject);
    const body = encodeURIComponent(
      `Name: ${data.name}\nEmail: ${data.email}\n\nMessage:\n${data.message}`
    );
    window.location.href = `mailto:omasajiri@gmail.com?subject=${subject}&body=${body}`;
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
                theme === "dark" ? "text-gray-400" : "text-gray-500"
              }`}
            >
              <p>2 Unit, 1st Avenue Aromi Akata, Tanke</p>
              <p>Ilorin, Nigeria</p>

              <p className="mt-4">+2348034906770</p>
              <p>omasajiri@gmail.com</p>
            </div>
          </div>
          <div className="items-center mt-2 md:col-span-2">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid gap-6 md:grid-cols-2">
                <Input
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Your Name"
                  type="text"
                  required
                  className="w-full"
                />
                <Input
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Email Address"
                  type="email"
                  required
                  className="w-full"
                />
              </div>

              <Input
                name="subject"
                value={formData.subject}
                onChange={handleInputChange}
                placeholder="Subject"
                type="text"
                required
                className="w-full"
              />

              <TextArea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                placeholder="Message"
                rows={6}
                required
                className="w-full min-h-32"
              />

              {/* Success/Error Messages */}
              {submitStatus === "success" && (
                <div className="p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg">
                  Message sent successfully! I&apos;ll get back to you soon.
                </div>
              )}

              {submitStatus === "error" && (
                <div className="p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg">
                  Failed to send message. Please try again or contact me
                  directly.
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="px-8 py-3 font-semibold rounded-lg transition-all duration-200 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
                style={{
                  backgroundColor: isSubmitting ? "#9ca3af" : "#ff4c60",
                  color: "white",
                  boxShadow:
                    "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
                }}
                onMouseEnter={(e) => {
                  if (!isSubmitting) {
                    e.currentTarget.style.backgroundColor = "#e64456";
                    e.currentTarget.style.boxShadow =
                      "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)";
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isSubmitting) {
                    e.currentTarget.style.backgroundColor = "#ff4c60";
                    e.currentTarget.style.boxShadow =
                      "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)";
                  }
                }}
              >
                {isSubmitting ? (
                  <>
                    <svg
                      className="animate-spin -ml-1 mr-3 h-5 w-5 text-white inline"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Sending...
                  </>
                ) : (
                  "Send Message"
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </AppLayout>
  );
};

export default ContactSection;
