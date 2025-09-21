"use client";

import { Theme, useTheme } from "../../hooks/use-theme";
import { Dialog, Transition } from "@headlessui/react";
import classNames from "classnames";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Fragment, useState } from "react";
import { BsMoonStars, BsSun } from "react-icons/bs";
import { HiMenuAlt3 } from "react-icons/hi";

const Navbar = () => {
  const pathname = usePathname();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  return (
    <header
      className="header fixed top-0 left-0 right-0 z-40 h-16"
      style={{
        backgroundColor:
          theme === "dark" ? "#1f2937" : "rgba(255, 255, 255, 0.95)",
        backdropFilter: "blur(8px)",
        borderBottom: `1px solid ${theme === "dark" ? "#374151" : "#e5e7eb"}`,
        color: theme === "dark" ? "#f9fafb" : "#374151",
      }}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center px-4 md:px-6">
        <Link href="/" className="text-3xl font-bold">
          <span style={{ color: theme === "dark" ? "#ffffff" : "#111827" }}>
            Omanudhowho
          </span>
          <span style={{ color: "#ff4c60" }}>.</span>
        </Link>

        <ul className="ml-auto hidden items-center md:flex">
          <li>
            <Link
              href="/works"
              className="inline-block px-4 font-semibold transition-colors duration-300 hover:underline"
              style={{
                color:
                  pathname === "/works"
                    ? "#ff4c60"
                    : theme === "dark"
                    ? "#f9fafb"
                    : "#374151",
              }}
              onMouseEnter={(e) => {
                if (pathname !== "/works") {
                  e.currentTarget.style.color = "#ff4c60";
                }
              }}
              onMouseLeave={(e) => {
                if (pathname !== "/works") {
                  e.currentTarget.style.color =
                    theme === "dark" ? "#f9fafb" : "#374151";
                }
              }}
            >
              Works
            </Link>
          </li>
          <li>
            <Link
              href="/blog"
              className="inline-block px-4 font-semibold transition-colors duration-300 hover:underline"
              style={{
                color:
                  pathname === "/blog"
                    ? "#ff4c60"
                    : theme === "dark"
                    ? "#f9fafb"
                    : "#374151",
              }}
              onMouseEnter={(e) => {
                if (pathname !== "/blog") {
                  e.currentTarget.style.color = "#ff4c60";
                }
              }}
              onMouseLeave={(e) => {
                if (pathname !== "/blog") {
                  e.currentTarget.style.color =
                    theme === "dark" ? "#f9fafb" : "#374151";
                }
              }}
            >
              Blog
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              className="inline-block px-4 font-semibold transition-colors duration-300 hover:underline"
              style={{
                color:
                  pathname === "/contact"
                    ? "#ff4c60"
                    : theme === "dark"
                    ? "#f9fafb"
                    : "#374151",
              }}
              onMouseEnter={(e) => {
                if (pathname !== "/contact") {
                  e.currentTarget.style.color = "#ff4c60";
                }
              }}
              onMouseLeave={(e) => {
                if (pathname !== "/contact") {
                  e.currentTarget.style.color =
                    theme === "dark" ? "#f9fafb" : "#374151";
                }
              }}
            >
              Contact
            </Link>
          </li>
        </ul>

        <button
          type="button"
          className="ml-auto transition-colors duration-150 md:-mt-0.5 md:ml-3 p-2 rounded-lg"
          onClick={() => toggleTheme()}
          style={{
            backgroundColor: theme === "dark" ? "#374151" : "#f3f4f6",
            color: theme === "dark" ? "#f9fafb" : "#374151",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor =
              theme === "dark" ? "#4b5563" : "#e5e7eb";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor =
              theme === "dark" ? "#374151" : "#f3f4f6";
          }}
        >
          {theme === Theme.LIGHT ? (
            <BsMoonStars size={20} />
          ) : (
            <BsSun size={20} />
          )}
        </button>

        <button
          type="button"
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="ml-5 flex md:hidden p-2 rounded-lg"
          style={{
            color: theme === "dark" ? "#f9fafb" : "#374151",
          }}
        >
          <HiMenuAlt3 size={24} />
        </button>
      </div>

      {/* Mobile menu */}
      <Transition.Root show={sidebarOpen} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-50 flex md:hidden"
          onClose={setSidebarOpen}
        >
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-600 bg-opacity-75" />
          </Transition.Child>

          <Transition.Child
            as={Fragment}
            enter="transition ease-in-out duration-300 transform"
            enterFrom="-translate-x-full"
            enterTo="translate-x-0"
            leave="transition ease-in-out duration-300 transform"
            leaveFrom="translate-x-0"
            leaveTo="-translate-x-full"
          >
            <div
              className="relative flex h-full w-full max-w-xs flex-1 flex-col pt-5 shadow-xl"
              style={{
                backgroundColor: theme === "dark" ? "#1f2937" : "#ffffff",
              }}
            >
              <Transition.Child
                as={Fragment}
                enter="ease-in-out duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="ease-in-out duration-300"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <div className="absolute top-0 right-0 -mr-12 pt-2">
                  <button
                    type="button"
                    className="ml-1 flex h-10 w-10 items-center justify-center rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                    onClick={() => setSidebarOpen(false)}
                  >
                    <span className="text-white text-xl">×</span>
                  </button>
                </div>
              </Transition.Child>

              <div className="flex h-full flex-col overflow-y-auto">
                <div
                  className="px-4 pb-4"
                  style={{
                    borderBottom: `1px solid ${
                      theme === "dark" ? "#374151" : "#e5e7eb"
                    }`,
                  }}
                >
                  <Link href="/" className="text-3xl font-bold">
                    <span
                      style={{
                        color: theme === "dark" ? "#ffffff" : "#111827",
                      }}
                    >
                      Omanudhowho
                    </span>
                    <span style={{ color: "#ff4c60" }}>.</span>
                  </Link>
                </div>

                <nav className="mt-4 space-y-1 px-2 flex-1">
                  <Link
                    href="/works"
                    className="group flex items-center px-2 py-3 text-base font-medium rounded-lg transition-colors duration-150"
                    style={{
                      color:
                        pathname === "/works"
                          ? "#ff4c60"
                          : theme === "dark"
                          ? "#f9fafb"
                          : "#374151",
                      backgroundColor:
                        pathname === "/works"
                          ? theme === "dark"
                            ? "rgba(255, 76, 96, 0.1)"
                            : "rgba(255, 76, 96, 0.1)"
                          : "transparent",
                    }}
                    onClick={() => setSidebarOpen(false)}
                    onMouseEnter={(e) => {
                      if (pathname !== "/works") {
                        e.currentTarget.style.backgroundColor =
                          theme === "dark" ? "#374151" : "#f3f4f6";
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (pathname !== "/works") {
                        e.currentTarget.style.backgroundColor = "transparent";
                      }
                    }}
                  >
                    Works
                  </Link>

                  <Link
                    href="/blog"
                    className="group flex items-center px-2 py-3 text-base font-medium rounded-lg transition-colors duration-150"
                    style={{
                      color:
                        pathname === "/blog"
                          ? "#ff4c60"
                          : theme === "dark"
                          ? "#f9fafb"
                          : "#374151",
                      backgroundColor:
                        pathname === "/blog"
                          ? theme === "dark"
                            ? "rgba(255, 76, 96, 0.1)"
                            : "rgba(255, 76, 96, 0.1)"
                          : "transparent",
                    }}
                    onClick={() => setSidebarOpen(false)}
                    onMouseEnter={(e) => {
                      if (pathname !== "/blog") {
                        e.currentTarget.style.backgroundColor =
                          theme === "dark" ? "#374151" : "#f3f4f6";
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (pathname !== "/blog") {
                        e.currentTarget.style.backgroundColor = "transparent";
                      }
                    }}
                  >
                    Blog
                  </Link>

                  <Link
                    href="/contact"
                    className="group flex items-center px-2 py-3 text-base font-medium rounded-lg transition-colors duration-150"
                    style={{
                      color:
                        pathname === "/contact"
                          ? "#ff4c60"
                          : theme === "dark"
                          ? "#f9fafb"
                          : "#374151",
                      backgroundColor:
                        pathname === "/contact"
                          ? theme === "dark"
                            ? "rgba(255, 76, 96, 0.1)"
                            : "rgba(255, 76, 96, 0.1)"
                          : "transparent",
                    }}
                    onClick={() => setSidebarOpen(false)}
                    onMouseEnter={(e) => {
                      if (pathname !== "/contact") {
                        e.currentTarget.style.backgroundColor =
                          theme === "dark" ? "#374151" : "#f3f4f6";
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (pathname !== "/contact") {
                        e.currentTarget.style.backgroundColor = "transparent";
                      }
                    }}
                  >
                    Contact
                  </Link>
                </nav>
              </div>
            </div>
          </Transition.Child>

          <div className="w-14 flex-shrink-0" aria-hidden="true">
            {/* Dummy element to force sidebar to shrink to fit close icon */}
          </div>
        </Dialog>
      </Transition.Root>
    </header>
  );
};

export default Navbar;
