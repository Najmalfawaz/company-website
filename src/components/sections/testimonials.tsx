"use client";

import { useLocale } from "@/lib/i18n/locale-context";
import { SectionHeader } from "./section-header";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { useRef } from "react";

export function Testimonials() {
  const { dictionary, direction } = useLocale();
  const scrollRef = useRef<HTMLDivElement>(null);
  const t = dictionary.testimonials;

  const reviews = [
    { text: t.review1.text, author: t.review1.author, rating: 5 },
    { text: t.review2.text, author: t.review2.author, rating: 5 },
    { text: t.review3.text, author: t.review3.author, rating: 5 },
    { text: t.review4.text, author: t.review4.author, rating: 5 },
  ];

  const scroll = (dir: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 350;
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
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <SectionHeader title={t.title} variant="secondary" />

        <div className="relative mt-8">
          <button
            onClick={() => scroll("left")}
            className="absolute -start-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white shadow-lg rounded-full flex items-center justify-center hover:bg-gray-50 transition-colors"
          >
            <PrevIcon className="w-5 h-5 text-gray-600" />
          </button>

          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto hide-scrollbar px-2 py-4"
          >
            {reviews.map((review, index) => (
              <div
                key={index}
                className="min-w-[280px] md:min-w-[320px] bg-gray-50 rounded-xl p-6 shadow-sm"
              >
                <p className="text-gray-600 text-sm mb-4 line-clamp-4">
                  &ldquo;{review.text}&rdquo;
                </p>
                <div className="flex items-center gap-1 mb-2">
                  {Array.from({ length: review.rating }).map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 text-amber-400 fill-amber-400"
                    />
                  ))}
                </div>
                <p className="font-semibold text-gray-800">{review.author}</p>
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
