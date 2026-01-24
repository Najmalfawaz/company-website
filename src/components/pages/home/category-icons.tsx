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
    <section className="py-8 bg-[#e0f7ff]">
      <div className="container mx-auto px-4">
        <div className="relative">
          {/* Scroll Left Button */}
          <button
            onClick={() => scroll("left")}
            className="absolute start-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white/80 shadow-lg rounded-full flex items-center justify-center hover:bg-white transition-colors"
          >
            <PrevIcon className="w-6 h-6 text-gray-700" />
          </button>

          {/* Categories */}
          <div
            ref={scrollRef}
            className="flex gap-4 md:gap-6 overflow-x-auto hide-scrollbar px-16 py-4"
          >
            {categories.map((category) => {
              const IconComponent = iconMap[category.icon] || Wrench;
              return (
                <a
                  key={category.id}
                  href={`/category/${category.id}`}
                  className="flex flex-col items-center gap-3 min-w-[90px] md:min-w-[110px] group"
                >
                  <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-white shadow-md flex items-center justify-center group-hover:bg-[#0891b2] group-hover:text-white transition-all duration-300 transform group-hover:scale-105">
                    <IconComponent className="w-8 h-8 md:w-10 md:h-10 text-cyan-700 group-hover:text-white transition-colors" />
                  </div>
                  <span className="text-sm md:text-base text-center text-gray-800 group-hover:text-[#0891b2] transition-colors font-medium line-clamp-2">
                    {category.name[locale]}
                  </span>
                </a>
              );
            })}
          </div>

          {/* Scroll Right Button */}
          <button
            onClick={() => scroll("right")}
            className="absolute end-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white/80 shadow-lg rounded-full flex items-center justify-center hover:bg-white transition-colors"
          >
            <NextIcon className="w-6 h-6 text-gray-700" />
          </button>
        </div>
      </div>
    </section>
  );
}
