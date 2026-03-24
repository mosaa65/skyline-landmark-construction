"use client";

import React, { useState } from 'react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface AccordionItem {
  id: string;
  title: string;
  content: React.ReactNode;
}

interface AccordionProps {
  items: AccordionItem[];
  allowMultiple?: boolean;
  className?: string;
}

export function Accordion({ items, allowMultiple = false, className }: AccordionProps) {
  const [openItems, setOpenItems] = useState<Set<string>>(new Set());

  const toggleItem = (id: string) => {
    const newOpenItems = new Set(openItems);
    
    if (newOpenItems.has(id)) {
      newOpenItems.delete(id);
    } else {
      if (!allowMultiple) {
        newOpenItems.clear();
      }
      newOpenItems.add(id);
    }
    
    setOpenItems(newOpenItems);
  };

  return (
    <div className={cn("flex flex-col space-y-4", className)}>
      {items.map((item) => {
        const isOpen = openItems.has(item.id);
        return (
          <div 
            key={item.id} 
            className="rounded-2xl border border-ink/10 bg-white overflow-hidden"
          >
            <button
              onClick={() => toggleItem(item.id)}
              className="flex w-full items-center justify-between px-6 py-5 text-left transition-colors hover:bg-surface focus:outline-none"
              aria-expanded={isOpen}
            >
              <span className="font-semibold text-ink">{item.title}</span>
              <span className={cn(
                "ml-6 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-ink/20 text-ink/60 transition-transform duration-200",
                isOpen && "rotate-180 border-gold text-gold bg-gold/5"
              )}>
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </span>
            </button>
            
            <div 
              className={cn(
                "grid transition-all duration-300 ease-in-out px-6",
                isOpen ? "grid-rows-[1fr] pb-6 opacity-100" : "grid-rows-[0fr] opacity-0"
              )}
            >
              <div className="overflow-hidden text-ink/70 leading-relaxed text-sm lg:text-base">
                {item.content}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
