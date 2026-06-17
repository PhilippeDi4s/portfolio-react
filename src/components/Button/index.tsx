"use client";

import type { ButtonHTMLAttributes, ReactNode } from "react";

type ButtonVariant =
  | "primary"
  | "secondary"
  | "confirm"
  | "danger"
  | "warning"
  | "info"
  | "ghost"
  | "outline";

type ButtonSize = "sm" | "md" | "lg";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  fullWidth?: boolean;
};

const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-[var(--blue-500)] text-[var(--secondary-color)] hover:bg-[var(--blue-200)] focus-visible:ring-[var(--blue-200)]",

  secondary:
    "bg-[var(--surface-card)] text-[var(--primary-color)] border border-white/15 hover:bg-[var(--surface-card-hover)] focus-visible:ring-white/20",

  confirm:
    "bg-emerald-600 text-white hover:bg-emerald-500 focus-visible:ring-emerald-400",

  danger: "bg-red-600 text-white hover:bg-red-500 focus-visible:ring-red-400",

  warning:
    "bg-amber-500 text-[var(--blue-800)] hover:bg-amber-400 focus-visible:ring-amber-300",

  info: "bg-[var(--blue-200)] text-white hover:bg-blue-500 focus-visible:ring-[var(--blue-200)]",

  ghost:
    "bg-transparent text-[var(--primary-color)] hover:bg-[var(--surface-card-hover)] shadow-none focus-visible:ring-white/20",

  outline:
    "bg-transparent text-[var(--primary-color)] border border-[var(--blue-200)] hover:bg-[rgba(59,96,195,0.14)] shadow-none focus-visible:ring-[var(--blue-200)]",
};

const sizes: Record<ButtonSize, string> = {
  sm: "h-9 px-4 text-sm",
  md: "h-11 px-5 text-sm",
  lg: "h-13 px-6 text-base",
};

export function Button({
  children,
  variant = "primary",
  size = "md",
  fullWidth = false,
  className = "",
  type = "button",
  ...props
}: ButtonProps) {
  return (
    <button
      type={type}
      className={`
        inline-flex items-center justify-center gap-2
        rounded-lg font-bold leading-none
        transition-all duration-200
        shadow-lg shadow-black/20
        hover:-translate-y-0.5
        active:translate-y-0
        focus-visible:outline-none focus-visible:ring-4
        disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none
        ${variants[variant]}
        ${sizes[size]}
        ${fullWidth ? "w-full" : "w-fit"}
        ${className}
      `}
      {...props}
    >
      {children}
    </button>
  );
}
