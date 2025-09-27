"use client";

import { reviews } from "../../data/reviews";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Slider, { Settings } from "react-slick";
import SectionTitle from "../shared/SectionTitle";
import { useTheme } from "../../hooks/use-theme";

const reviewSettings: Settings = {
  dots: true,
  infinite: true,
  speed: 1000,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  arrows: false,
  autoplaySpeed: 4000,
  pauseOnHover: true,
  adaptiveHeight: false,
  centerMode: false,
  variableWidth: false,
};

const TestimonialSection: React.FC = () => {
  const { theme, isLoading } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Show loading skeleton while theme is loading
  if (isLoading || !mounted) {
    return (
      <div className="testimonial-section">
        <div className="container mx-auto px-4 py-16">
          {/* Section title skeleton */}
          <div className="text-center mb-16">
            <div
              className="h-8 bg-gray-300 rounded w-64 mx-auto mb-4"
              style={{ animation: "pulse 2s infinite" }}
            ></div>
            <div
              className="h-4 bg-gray-300 rounded w-96 mx-auto"
              style={{ animation: "pulse 2s infinite" }}
            ></div>
          </div>

          {/* Testimonial skeleton */}
          <div className="flex flex-col items-center">
            <div
              className="h-24 w-24 rounded-full bg-gray-300 mb-4"
              style={{ animation: "pulse 2s infinite" }}
            ></div>
            <div
              className="h-6 bg-gray-300 rounded w-32 mb-2"
              style={{ animation: "pulse 2s infinite" }}
            ></div>
            <div
              className="h-4 bg-gray-300 rounded w-48 mb-6"
              style={{ animation: "pulse 2s infinite" }}
            ></div>
            <div
              className="max-w-2xl w-full h-32 bg-gray-300 rounded-2xl"
              style={{ animation: "pulse 2s infinite" }}
            ></div>
          </div>
        </div>

        <style jsx>{`
          @keyframes pulse {
            0%,
            100% {
              opacity: 1;
            }
            50% {
              opacity: 0.5;
            }
          }
        `}</style>
      </div>
    );
  }

  return (
    <section
      className="testimonial-section py-16"
      style={{
        backgroundColor: theme === "dark" ? "#1f2937" : "#f9fafb",
        transition: "background-color 0.3s ease",
      }}
    >
      <div className="container mx-auto px-4">
        <SectionTitle>Client Reviews</SectionTitle>

        <div className="mt-16">
          <div className="testimonial-slider" style={{ minHeight: "450px" }}>
            <Slider {...reviewSettings}>
              {reviews.map((review, index) => (
                <div key={index}>
                  <div className="flex flex-col items-center px-2">
                    {/* Avatar */}
                    <div className="relative h-24 w-24 rounded-full overflow-hidden mb-4">
                      <Image
                        src={review.author.imageUrl}
                        height={96}
                        width={96}
                        alt={review.author.name}
                        className="object-cover w-full h-full rounded-full"
                        priority={index === 0}
                      />
                    </div>

                    {/* Author info */}
                    <h6
                      className={`-mt-2 text-lg font-semibold text-center ${
                        theme === "dark" ? "text-white" : "text-gray-900"
                      }`}
                    >
                      {review.author.name}
                    </h6>
                    <p
                      className={`text-sm mb-6 text-center ${
                        theme === "dark" ? "text-gray-300" : "text-gray-600"
                      }`}
                    >
                      {review.author.designation} at {review.author.company}
                    </p>

                    {/* Review comment */}
                    <div
                      className={`mt-2 mb-4 max-w-2xl mx-auto rounded-2xl p-6 md:p-8 shadow-lg relative ${
                        theme === "dark"
                          ? "bg-gray-700 text-gray-200"
                          : "bg-white text-gray-600"
                      }`}
                    >
                      {/* Quote icon */}
                      <div className="absolute -top-4 left-6 md:left-8 w-8 h-8 rounded-full flex items-center justify-center text-white font-bold text-lg bg-red-500">
                        &ldquo;
                      </div>

                      <div className="leading-relaxed text-sm md:text-base">
                        {review.comment}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>

      {/* Custom styles for slider */}
      <style jsx global>{`
        /* Container styling */
        .testimonial-slider {
          width: 100%;
          overflow-x: hidden;
        }

        .testimonial-slider .slick-slider {
          margin-bottom: 80px;
        }

        .testimonial-slider .slick-list {
          overflow: visible !important;
          margin: 0;
          padding: 0;
        }

        .testimonial-slider .slick-track {
          display: flex !important;
          align-items: flex-start;
        }

        /* Dots styling */
        .testimonial-slider .slick-dots {
          bottom: -60px !important;
          display: flex !important;
          justify-content: center;
          align-items: center;
          list-style: none;
          margin: 0;
          padding: 0;
          gap: 8px;
        }

        .testimonial-slider .slick-dots li {
          position: relative;
          display: inline-block;
          width: 12px;
          height: 12px;
          margin: 0 4px;
          padding: 0;
          cursor: pointer;
        }

        .testimonial-slider .slick-dots li button {
          font-size: 0;
          line-height: 0;
          display: block;
          width: 12px;
          height: 12px;
          padding: 0;
          cursor: pointer;
          background: transparent;
          border: 0;
          outline: none;
          border-radius: 50%;
          transition: all 0.3s ease;
        }

        .testimonial-slider .slick-dots li button:before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          width: 12px;
          height: 12px;
          border-radius: 50%;
          background-color: ${theme === "dark" ? "#6b7280" : "#d1d5db"};
          opacity: 1;
          transition: all 0.3s ease;
        }

        .testimonial-slider .slick-dots li.slick-active button:before {
          background-color: #ff4c60;
          transform: scale(1.2);
        }

        .testimonial-slider .slick-dots li button:hover:before {
          background-color: #ff4c60;
          opacity: 0.7;
        }

        /* Slide styling */
        .testimonial-slider .slick-slide {
          outline: none !important;
          padding: 0 15px;
        }

        .testimonial-slider .slick-slide > div {
          outline: none !important;
          height: 100%;
        }

        /* Animation improvements */
        .testimonial-slider .slick-slide {
          opacity: 0.7;
          transition: opacity 0.3s ease;
        }

        .testimonial-slider .slick-slide.slick-active {
          opacity: 1;
        }

        .testimonial-slider .slick-slide.slick-center {
          opacity: 1;
        }

        /* Responsive adjustments */
        @media (max-width: 768px) {
          .testimonial-slider .slick-slider {
            margin-bottom: 60px;
          }

          .testimonial-slider .slick-dots {
            bottom: -40px !important;
          }

          .testimonial-slider .slick-slide {
            padding: 0 10px;
          }
        }
      `}</style>
    </section>
  );
};

export default TestimonialSection;
