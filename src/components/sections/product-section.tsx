"use client";

import { useLocale } from "@/lib/i18n/locale-context";
import { products } from "@/lib/data/products";
import { ProductCard } from "@/components/ui/product-card";
import { SectionHeader } from "./section-header";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef } from "react";

interface ProductSectionProps {
  title: string;
  variant?: "primary" | "secondary";
}

export function ProductSection({
  title,
  variant = "primary",
}: ProductSectionProps) {
  const { direction } = useLocale();
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 300;
      const actualDir =
        direction === "rtl" ? (dir === "left" ? "right" : "left") : dir;
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
        <SectionHeader title={title} variant={variant} />

        <div className="relative mt-6">
          {/* Scroll Buttons */}
          <button
            onClick={() => scroll("left")}
            className="absolute -start-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white shadow-lg rounded-full flex items-center justify-center hover:bg-gray-50 transition-colors"
          >
            <PrevIcon className="w-5 h-5 text-gray-600" />
          </button>

          {/* Products Grid/Carousel */}
          <div
            ref={scrollRef}
            className="flex gap-4 overflow-x-auto hide-scrollbar px-2 py-2"
          >
            {products.map((product) => (
              <div key={product.id} className="min-w-[220px] md:min-w-[250px]">
                <ProductCard product={product} />
              </div>
            ))}
          </div>

          <button
            onClick={() => scroll("right")}
            className="absolute -end-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white shadow-lg rounded-full flex items-center justify-center hover:bg-gray-50 transition-colors"
          >
            <NextIcon className="w-5 h-5 text-gray-600" />
          </button>
        </div>
      </div>
    </section>
  );
}
