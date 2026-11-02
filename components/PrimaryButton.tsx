import Link from "next/link";
import type { ReactNode } from "react";

type Props = {
  href?: string;
  label: ReactNode;
  variant?: "primary" | "secondary";
  size?: "sm" | "md" | "lg";
  type?: "button" | "submit";
  disabled?: boolean;
  onClick?: () => void;
  className?: string;
};

export function PrimaryButton({
  href,
  label,
  variant = "primary",
  size = "md",
  type = "button",
  disabled,
  onClick,
  className = "",
}: Props) {
  const sizeClass = size === "sm" ? "btn-sm" : size === "lg" ? "btn-lg" : "";
  const classes = `btn ${variant === "primary" ? "btn-primary" : "btn-secondary"} ${sizeClass} ${className}`.trim();

  if (href) {
    return (
      <Link href={href} className={classes}>
        {label}
      </Link>
    );
  }

  return (
    <button type={type} className={classes} disabled={disabled} onClick={onClick}>
      {label}
    </button>
  );
}
