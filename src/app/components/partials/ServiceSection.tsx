"use client";

import classNames from "classnames";
import Image from "next/image";
import React from "react";
import SectionTitle from "../shared/SectionTitle";
import { services } from "../../data/services";
import Link from "next/link";

const bgClasses = [
  "bg-indigo-500 text-indigo-100 dark:bg-indigo-600 dark:text-indigo-50",
  "bg-yellow-400 text-yellow-900 dark:bg-yellow-500 dark:text-yellow-100",
  "bg-pink-400 text-pink-900 dark:bg-pink-500 dark:text-pink-100",
  "bg-purple-500 text-purple-100 dark:bg-purple-600 dark:text-purple-50",
  "bg-green-500 text-green-100 dark:bg-green-600 dark:text-green-50",
  "bg-blue-500 text-blue-100 dark:bg-blue-600 dark:text-blue-50",
  "bg-red-500 text-red-100 dark:bg-red-600 dark:text-red-50",
  "bg-slate-500 text-slate-100 dark:bg-slate-600 dark:text-slate-50",
  "bg-teal-500 text-teal-100 dark:bg-teal-600 dark:text-teal-50",
];

const getBackgroundClass = (index: number) => {
  return bgClasses[index % bgClasses.length];
};

const ServiceSection = () => {
  return (
    <>
      <SectionTitle>Services</SectionTitle>
      <div className="mt-10 grid gap-8 md:grid-cols-3">
        {services.map((service, index) => (
          <div
            key={index}
            className={classNames(
              "rounded-2xl py-8 px-4 text-center shadow-md md:px-8 transition-colors duration-300",
              getBackgroundClass(index)
            )}
          >
            <Image
              src={service.image}
              height={80}
              width={80}
              alt={service.name}
              className="mx-auto"
            />
            <h4 className="mt-4 text-xl font-semibold">{service.name}</h4>
            <p className="mt-4 text-sm md:text-base">{service.description}</p>
          </div>
        ))}
      </div>
      <p className="mt-8 text-center">
        Looking for a custom service?{" "}
        <Link href="/contact" className="">
          Click here to contact me!
        </Link>
      </p>
    </>
  );
};

export default ServiceSection;
