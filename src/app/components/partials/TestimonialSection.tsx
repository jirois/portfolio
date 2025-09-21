"use client";

import { reviews } from "../../data/reviews";
import Image from "next/image";
import React from "react";
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
};

const TestimonialSection = () => {
  const { theme } = useTheme();

  return (
    <>
      <SectionTitle>Client Reviews</SectionTitle>
      <div className="mt-16">
        <Slider {...reviewSettings}>
          {reviews.map((review, index) => (
            <div className="mb-6" key={index}>
              <div className="flex flex-col items-center">
                <div className="h-24 w-24 rounded-full overflow-hidden">
                  <Image
                    src={review.author.imageUrl}
                    height={100}
                    width={100}
                    alt={review.author.name}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                </div>
                <h6
                  className="mt-3 text-lg font-semibold"
                  style={{
                    color: theme === "dark" ? "#f3f4f6" : "#111827",
                  }}
                >
                  {review.author.name}
                </h6>
                <p
                  className="text-sm"
                  style={{
                    color: theme === "dark" ? "#f3f4f6" : "#9ca3af",
                  }}
                >
                  {review.author.designation} at {review.author.company}.
                </p>
                <div
                  className="mt-6 max-w-2xl rounded-2xl p-8 shadow-lg"
                  style={{
                    backgroundColor: theme === "dark" ? "#374151" : "#ffffff",
                    color: theme === "dark" ? "#f3f4f6" : "#6b7280",
                  }}
                >
                  {review.comment}
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
};

export default TestimonialSection;
