"use client";

import { educations } from "../../data/educations";
import { experiences } from "../../data/experiences";
import styles from "../../styles/modules/ExperienceSection.module.scss";
import classNames from "classnames";
import { FiBriefcase } from "react-icons/fi";
import AcademicCap from "../icons/AcademicCap";
import SectionTitle from "../shared/SectionTitle";
import { useTheme } from "../../hooks/use-theme";

const ExperienceSection = () => {
  const { theme } = useTheme();

  return (
    <>
      <SectionTitle>Experiences & Educations</SectionTitle>
      <div className="py-15 mt-10 grid gap-8 md:grid-cols-2">
        {/* Experience */}
        <div>
          <div
            className="rounded-2xl px-10 py-8 shadow-lg"
            style={{
              backgroundColor: theme === "dark" ? "#374151" : "#ffffff",
            }}
          >
            <ol
              className={classNames(styles["experience"], "border-l")}
              style={{
                borderColor: theme === "dark" ? "#6b7280" : "#e5e7eb",
              }}
            >
              {experiences.map((experience, index) => (
                <li key={index} className={styles["experience-item"]}>
                  <span
                    className="absolute -left-8.5 flex h-5 w-5 items-center justify-center"
                    style={{
                      backgroundColor: theme === "dark" ? "#374151" : "#ffffff",
                      color: "#ff4c60",
                    }}
                  >
                    <FiBriefcase className="h-5" />
                  </span>
                  <time
                    className="mb-2 block text-sm font-normal leading-none"
                    style={{
                      color: theme === "dark" ? "#f3f4f6" : "#9ca3af",
                    }}
                  >
                    {experience.startDate} - {experience.endDate}
                  </time>
                  <h3
                    className="mb-1 flex items-center text-lg font-semibold"
                    style={{
                      color: theme === "dark" ? "#f3f4f6" : "#111827",
                    }}
                  >
                    {experience.jobTitle}
                  </h3>
                  <p
                    className="mb-2 block text-sm font-normal leading-none"
                    style={{
                      color: theme === "dark" ? "#f3f4f6" : "#9ca3af",
                    }}
                  >
                    {experience.company}
                  </p>
                  <p
                    className="mb-4 text-base font-normal "
                    style={{
                      color: theme === "dark" ? "#f3f4f6" : "#6b7280",
                    }}
                  >
                    {experience.description}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </div>
        {/* Education */}
        <div>
          <div
            className="rounded-2xl bg-white px-10 py-8 shadow-lg "
            style={{
              backgroundColor: theme === "dark" ? "#374151" : "#ffffff",
            }}
          >
            <ol
              className={classNames(styles["education"], "border-l ")}
              style={{
                borderColor: theme === "dark" ? "#6b7280" : "#e5e7eb",
              }}
            >
              {educations.map((education, index) => (
                <li key={index} className={styles["education-item"]}>
                  <span
                    className="absolute -left-8.5 flex h-5 w-5 items-center justify-center"
                    style={{
                      backgroundColor: theme === "dark" ? "#374151" : "#ffffff",
                      color: "#ff4c60",
                    }}
                  >
                    <AcademicCap className="h-5" />
                  </span>
                  <time
                    className="mb-2 block text-sm font-normal leading-none"
                    style={{
                      color: theme === "dark" ? "#f3f4f6" : "#9ca3af",
                    }}
                  >
                    {education.startDate} - {education.endDate}
                  </time>
                  <h3
                    className="mb-1 flex items-center text-lg font-semibold"
                    style={{
                      color: theme === "dark" ? "#f3f4f6" : "#111827",
                    }}
                  >
                    {education.degree}
                  </h3>
                  <p
                    className="mb-2 block text-sm font-normal leading-none"
                    style={{
                      color: theme === "dark" ? "#f3f4f6" : "#9ca3af",
                    }}
                  >
                    {education.school}
                  </p>
                  <p
                    className="mb-4 text-base font-normal "
                    style={{
                      color: theme === "dark" ? "#f3f4f6" : "#6b7280",
                    }}
                  >
                    {education.description}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </>
  );
};

export default ExperienceSection;
