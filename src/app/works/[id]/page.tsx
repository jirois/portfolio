// app/works/[slug]/page.tsx
"use client";

import { works } from "../../data/works";
import AppLayout from "../../components/AppLay";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Slider, { Settings } from "react-slick";
import { useParams } from "next/navigation";
import { useTheme } from "../../hooks/use-theme";

// Import required CSS for react-slick
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const settings: Settings = {
  dots: true,
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: false,
  arrows: true,
  adaptiveHeight: false,
  dotsClass: "slick-dots work-slider-dots",
};

export default function WorkDetailPage() {
  const params = useParams();
  const { theme } = useTheme();
  const [currentSlide, setCurrentSlide] = useState(0);
  const id = params?.id as string;

  // Find work by ID
  const work = works.find((work) => work.id.toString() === id);

  // Handle work not found
  if (!work) {
    return (
      <AppLayout>
        <div className="container py-20">
          <div className="text-center">
            <h1
              className={`text-4xl font-bold mb-4 ${
                theme === "dark" ? "text-white" : "text-gray-900"
              }`}
            >
              Work Not Found
            </h1>
            <p
              className={`text-lg mb-8 ${
                theme === "dark" ? "text-gray-300" : "text-gray-600"
              }`}
            >
              The work you&apos;re looking for doesn&apos;t exist.
            </p>
            <Link
              href="/works"
              className="inline-flex items-center px-6 py-3 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-colors"
            >
              Back to Works
            </Link>
          </div>
        </div>
      </AppLayout>
    );
  }

  return (
    <AppLayout>
      <div className="container">
        {/* Breadcrumb */}
        <nav className="mt-8 mb-8">
          <ol className="flex items-center space-x-2 text-sm">
            <li>
              <Link
                href="/"
                className={`${
                  theme === "dark"
                    ? "text-gray-400 hover:text-white"
                    : "text-gray-500 hover:text-gray-900"
                } transition-colors`}
              >
                Home
              </Link>
            </li>
            <li
              className={`${
                theme === "dark" ? "text-gray-600" : "text-gray-400"
              }`}
            >
              /
            </li>
            <li>
              <Link
                href="/works"
                className={`${
                  theme === "dark"
                    ? "text-gray-400 hover:text-white"
                    : "text-gray-500 hover:text-gray-900"
                } transition-colors`}
              >
                Works
              </Link>
            </li>
            <li
              className={`${
                theme === "dark" ? "text-gray-600" : "text-gray-400"
              }`}
            >
              /
            </li>
            <li
              className={`${
                theme === "dark" ? "text-gray-300" : "text-gray-700"
              } truncate max-w-xs`}
            >
              {work.title}
            </li>
          </ol>
        </nav>

        <div className="mt-16 flex flex-col items-center justify-center">
          <h1
            className={`text-center text-2xl font-semibold sm:text-3xl md:text-4xl max-w-4xl leading-tight ${
              theme === "dark" ? "text-white" : "text-gray-900"
            }`}
          >
            {work.title}
          </h1>
          <div
            className={`mt-6 flex items-center ${
              theme === "dark" ? "text-gray-400" : "text-gray-500"
            }`}
          >
            <time dateTime={work.publishedAt} className="text-sm">
              {work.publishedAt}
            </time>
            <span className="mx-3 h-1.5 w-1.5 rounded-full bg-primary-500"></span>
            <span className="text-sm">{work.category}</span>
          </div>
        </div>

        <div className="mt-12">
          {/* Image Slider */}
          <div className="work-slider-container">
            <Slider
              {...settings}
              beforeChange={(oldIndex, newIndex) => setCurrentSlide(newIndex)}
            >
              {work.images.map((image, index) => (
                <div key={index} className="focus:outline-none">
                  <div className="overflow-hidden rounded-xl mx-2">
                    <div className="relative h-96 md:h-[500px]">
                      <Image
                        src={image}
                        fill
                        sizes="(max-width: 768px) 100vw, 80vw"
                        alt={`${work.title} - Image ${index + 1}`}
                        className="object-cover"
                        priority={index === 0}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </Slider>

            {/* Image counter */}
            <div
              className={`mt-4 text-center text-sm ${
                theme === "dark" ? "text-gray-400" : "text-gray-600"
              }`}
            >
              {currentSlide + 1} / {work.images.length}
            </div>
          </div>

          {/* Live Preview Button */}
          <div className="mt-8 flex justify-center">
            <Link
              href={work.previewUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-3 bg-primary-500 text-white rounded-lg font-semibold hover:bg-primary-600 focus:ring-2 focus:ring-primary-200 transition-all duration-300 hover:scale-105"
            >
              Live Preview
              <svg
                className="w-4 h-4 ml-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
            </Link>
          </div>
        </div>

        {/* Summary and Features */}
        <div className="my-16">
          <h3
            className={`text-xl font-semibold ${
              theme === "dark" ? "text-white" : "text-gray-900"
            }`}
          >
            Summary
          </h3>
          <p
            className={`mt-4 leading-relaxed ${
              theme === "dark" ? "text-gray-300" : "text-gray-700"
            }`}
          >
            {work.description}
          </p>

          <h3
            className={`mt-12 text-xl font-semibold ${
              theme === "dark" ? "text-white" : "text-gray-900"
            }`}
          >
            Feature List
          </h3>
          <ul
            className={`mt-4 list-disc pl-6 space-y-2 ${
              theme === "dark" ? "text-gray-300" : "text-gray-700"
            }`}
          >
            {work.featureList.map((feature, index) => (
              <li key={index} className="leading-relaxed">
                {feature}
              </li>
            ))}
          </ul>
        </div>

        {/* Attributes Table */}
        <div
          className={`my-16 rounded-lg shadow-lg overflow-hidden ${
            theme === "dark" ? "bg-gray-800" : "bg-gray-50"
          }`}
        >
          <table className="w-full">
            <tbody>
              {work.attributes.map((attribute, index) => (
                <tr
                  key={index}
                  className={`border-b ${
                    theme === "dark" ? "border-gray-700" : "border-gray-200"
                  } last:border-b-0`}
                >
                  <td
                    className={`w-48 px-6 py-4 font-semibold ${
                      theme === "dark" ? "text-gray-200" : "text-gray-900"
                    }`}
                  >
                    {attribute.name}
                  </td>
                  <td
                    className={`px-6 py-4 ${
                      theme === "dark" ? "text-gray-300" : "text-gray-700"
                    }`}
                  >
                    {attribute.value}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Call to Action */}
        <div className="mb-16 flex flex-col items-center justify-center text-center py-16">
          <h2
            className={`text-3xl md:text-4xl font-semibold mb-4 ${
              theme === "dark" ? "text-white" : "text-gray-900"
            }`}
          >
            Want to Build a Project Like This?
          </h2>
          <p
            className={`mt-4 text-lg max-w-2xl ${
              theme === "dark" ? "text-gray-300" : "text-gray-600"
            }`}
          >
            I can design and develop beautiful websites and applications for you
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-flex items-center px-8 py-3 bg-primary-500 text-white rounded-full font-semibold tracking-wide hover:bg-primary-600 focus:ring-2 focus:ring-primary-200 transition-all duration-300 hover:scale-105"
          >
            Start a Project
            <svg
              className="w-5 h-5 ml-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </Link>
        </div>
      </div>

      {/* Custom Slider Styles */}
      <style jsx global>{`
        .work-slider-container .slick-slider {
          margin-bottom: 20px;
        }

        .work-slider-container .slick-prev,
        .work-slider-container .slick-next {
          z-index: 10;
          width: 40px;
          height: 40px;
          background: rgba(0, 0, 0, 0.5);
          border-radius: 50%;
        }

        .work-slider-container .slick-prev {
          left: 15px;
        }

        .work-slider-container .slick-next {
          right: 15px;
        }

        .work-slider-container .slick-prev:before,
        .work-slider-container .slick-next:before {
          font-size: 18px;
          color: white;
          opacity: 1;
        }

        .work-slider-container .slick-prev:hover,
        .work-slider-container .slick-next:hover {
          background: rgba(0, 0, 0, 0.8);
        }

        .work-slider-dots {
          bottom: -50px !important;
        }

        .work-slider-dots li button:before {
          font-size: 12px !important;
          color: ${theme === "dark" ? "#9ca3af" : "#d1d5db"} !important;
          opacity: 1 !important;
        }

        .work-slider-dots li.slick-active button:before {
          color: #ff4c60 !important;
        }
      `}</style>
    </AppLayout>
  );
}
