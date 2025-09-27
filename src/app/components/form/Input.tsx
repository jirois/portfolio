"use client";

import classNames from "classnames";
import React, { useEffect, useRef } from "react";
import { useTheme } from "../../hooks/use-theme";

export type InputProps = {
  name?: string;
  value?: string | number;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type?:
    | "text"
    | "email"
    | "password"
    | "number"
    | "date"
    | "time"
    | "datetime-local"
    | "search"
    | "tel"
    | "url";
  placeholder?: string;
  className?: string;
  id?: string;
  autoComplete?: string;
  required?: boolean;
  isFocused?: boolean;
  disabled?: boolean;
};

export default function Input({
  type = "text",
  name,
  value,
  placeholder,
  id,
  className,
  autoComplete,
  required,
  isFocused,
  disabled,
  onChange,
}: InputProps) {
  const { theme } = useTheme();
  const element = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isFocused && element.current) {
      element.current.focus();
    }
  }, [isFocused]);

  return (
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      value={value}
      id={id}
      className={classNames(
        "px-4 py-3 rounded-2xl border transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary-500 shadow",
        className
      )}
      style={{
        backgroundColor: theme === "dark" ? "#374151" : "#ffffff",
        color: theme === "dark" ? "#f3f4f6" : "#111827",
        borderColor: theme === "dark" ? "#4b5563" : "#d1d5db",
        opacity: disabled ? 0.6 : 1,
      }}
      ref={element}
      autoComplete={autoComplete}
      required={required}
      disabled={disabled}
      onChange={(e) => onChange?.(e)}
    />
  );
}
