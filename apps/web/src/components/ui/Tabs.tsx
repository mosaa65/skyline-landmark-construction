"use client";

import React, { useState } from 'react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface TabItem {
  id: string;
  label: string;
  content: React.ReactNode;
}

interface TabsProps {
  items: TabItem[];
  defaultOpen?: string;
  className?: string;
}

export function Tabs({ items, defaultOpen, className }: TabsProps) {
  const [activeId, setActiveId] = useState(defaultOpen || items[0]?.id);

  return (
    <div className={cn("w-full", className)}>
      <div className="flex w-full overflow-x-auto border-b border-ink/10 hide-scrollbar mb-6">
        {items.map((item) => {
          const isActive = activeId === item.id;
          return (
            <button
              key={item.id}
              onClick={() => setActiveId(item.id)}
              className={cn(
                "whitespace-nowrap px-6 py-4 text-sm font-semibold uppercase tracking-widest outline-none transition-all",
                isActive
                  ? "border-b-2 border-gold text-ink"
                  : "border-b-2 border-transparent text-ink/40 hover:text-ink/70"
              )}
            >
              {item.label}
            </button>
          );
        })}
      </div>
      
      <div className="relative w-full">
        {items.map((item) => (
          <div
            key={item.id}
            className={cn(
              "focus:outline-none transition-opacity duration-300",
              activeId === item.id ? "block opacity-100 animate-in fade-in" : "hidden opacity-0"
            )}
            role="tabpanel"
          >
            {item.content}
          </div>
        ))}
      </div>
    </div>
  );
}
