import React from 'react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'outline' | 'gold' | 'surface';
}

export function Badge({ className, variant = 'default', ...props }: BadgeProps) {
  const variants = {
    default: "bg-ink text-white hover:bg-ink/90",
    outline: "text-ink border border-ink/20 hover:bg-surface",
    gold: "bg-gold/10 text-gold border border-gold/20 hover:bg-gold/20",
    surface: "bg-surface text-ink hover:bg-ink/5"
  };

  return (
    <div
      className={cn(
        "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2 uppercase tracking-wide",
        variants[variant],
        className
      )}
      {...props}
    />
  );
}
