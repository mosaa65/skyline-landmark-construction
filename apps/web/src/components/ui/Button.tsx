import Link from "next/link";
import { type ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  href?: string;
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "md" | "lg";
};

export default function Button({
  href,
  variant = "primary",
  size = "md",
  className,
  children,
  ...props
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold/60 hover:-translate-y-0.5 active:translate-y-0";

  const variants: Record<string, string> = {
    primary:
      "bg-amber text-ink hover:bg-gold shadow-[0_10px_30px_rgba(232,168,56,0.35)]",
    secondary: "bg-gold text-ink hover:bg-amber",
    outline: "border border-sand/60 text-sand hover:border-gold hover:text-gold",
    ghost: "text-sand hover:text-gold",
  };

  const sizes: Record<string, string> = {
    md: "px-6 py-3 text-sm",
    lg: "px-8 py-4 text-base",
  };

  const classes = cn(base, variants[variant], sizes[size], className);

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
