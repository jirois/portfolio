"use client";

import classNames from "classnames";
import React, { useEffect, useRef } from "react";
import { useTheme } from "../../hooks/use-theme";

export type TextAreaProps = {
  name?: string;
  value?: string | number;
  rows?: number;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  placeholder?: string;
  id?: string;
  className?: string;
  autoComplete?: string;
  required?: boolean;
  isFocused?: boolean;
  disabled?: boolean;
  help?: string;
  error?: string;
};

export default function TextArea({
  name,
  value,
  rows = 5,
  placeholder,
  id,
  className,
  autoComplete,
  required,
  isFocused,
  disabled,
  onChange,
}: TextAreaProps) {
  const { theme } = useTheme();
  const element = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (isFocused && element.current) {
      element.current.focus();
    }
  }, [isFocused]);

  return (
    <textarea
      name={name}
      placeholder={placeholder}
      id={id}
      value={value}
      className={classNames(
        "px-4 py-3 rounded-2xl border transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary-500 resize-vertical shadow",
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
      rows={rows}
    />
  );
}
