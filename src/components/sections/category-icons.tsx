"use client";

import React from "react"

import { useLocale } from "@/lib/i18n/locale-context";
import { categories, type Category } from "@/lib/data/products";
import {
  Wrench,
  Cake,
  Coffee,
  Flame,
  Sparkles,
  UtensilsCrossed,
  Droplet,
  Snowflake,
  Thermometer,
  Droplets,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { useRef } from "react";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  wrench: Wrench,
  cake: Cake,
  coffee: Coffee,
  flame: Flame,
  sparkles: Sparkles,
  utensils: UtensilsCrossed,
  droplet: Droplet,
  snowflake: Snowflake,
  thermometer: Thermometer,
  droplets: Droplets,
};

export function CategoryIcons() {
  const { locale, direction } = useLocale();
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 200;
      const actualDir = direction === "rtl" 
        ? (dir === "left" ? "right" : "left") 
        : dir;
      scrollRef.current.scrollBy({
        left: actualDir === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  const PrevIcon = direction === "rtl" ? ChevronRight : ChevronLeft;
  const NextIcon = direction === "rtl" ? ChevronLeft : ChevronRight;

  return (
    <section className="py-8 bg-white">
      <div className="container mx-auto px-4">
        <div className="relative">
          {/* Scroll Left Button */}
          <button
            onClick={() => scroll("left")}
            className="absolute start-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white shadow-lg rounded-full flex items-center justify-center hover:bg-gray-50 transition-colors"
          >
            <PrevIcon className="w-5 h-5 text-gray-600" />
          </button>

          {/* Categories */}
          <div
            ref={scrollRef}
            className="flex gap-4 md:gap-6 overflow-x-auto hide-scrollbar px-12 py-4"
          >
            {categories.map((category) => {
              const IconComponent = iconMap[category.icon] || Wrench;
              return (
                <a
                  key={category.id}
                  href={`/category/${category.id}`}
                  className="flex flex-col items-center gap-2 min-w-[80px] md:min-w-[100px] group"
                >
                  <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-gray-100 flex items-center justify-center group-hover:bg-[#0891b2] group-hover:text-white transition-colors">
                    <IconComponent className="w-7 h-7 md:w-8 md:h-8" />
                  </div>
                  <span className="text-xs md:text-sm text-center text-gray-700 group-hover:text-[#0891b2] transition-colors line-clamp-2">
                    {category.name[locale]}
                  </span>
                </a>
              );
            })}
          </div>

          {/* Scroll Right Button */}
          <button
            onClick={() => scroll("right")}
            className="absolute end-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white shadow-lg rounded-full flex items-center justify-center hover:bg-gray-50 transition-colors"
          >
            <NextIcon className="w-5 h-5 text-gray-600" />
          </button>
        </div>
      </div>
    </section>
  );
}
