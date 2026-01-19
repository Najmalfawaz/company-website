"use client";

import { useLocale } from "@/lib/i18n/locale-context";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";

export function HeroBanner() {
  const { dictionary, direction } = useLocale();
  const [currentSlide, setCurrentSlide] = useState(0);
  const t = dictionary.hero;

  const slides = [
    {
      id: 1,
      bgColor: "from-cyan-500 to-cyan-600",
      decorColor: "bg-amber-400",
    },
    {
      id: 2,
      bgColor: "from-cyan-600 to-cyan-700",
      decorColor: "bg-orange-400",
    },
    {
      id: 3,
      bgColor: "from-cyan-500 to-teal-600",
      decorColor: "bg-yellow-400",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const PrevIcon = direction === "rtl" ? ChevronRight : ChevronLeft;
  const NextIcon = direction === "rtl" ? ChevronLeft : ChevronRight;

  return (
    <section className="relative overflow-hidden">
      <div
        className="flex transition-transform duration-500 ease-out"
        style={{ transform: `translateX(${direction === "rtl" ? currentSlide * 100 : -currentSlide * 100}%)` }}
      >
        {slides.map((slide) => (
          <div
            key={slide.id}
            className={`min-w-full bg-gradient-to-r ${slide.bgColor} relative`}
          >
            <div className="container mx-auto px-4">
              <div className="flex flex-col lg:flex-row items-center min-h-[300px] md:min-h-[400px] lg:min-h-[450px] py-8 lg:py-0">
                {/* Content */}
                <div className="flex-1 text-white z-10 text-center lg:text-start">
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-2 animate-fade-in">
                    {t.title}
                  </h2>
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-amber-300 mb-4 animate-fade-in">
                    {t.subtitle}
                  </h1>
                  <p className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 animate-fade-in">
                    {t.highlight}
                  </p>
                  <button className="px-8 py-3 bg-[#ea580c] hover:bg-orange-700 text-white font-semibold rounded-lg transition-colors text-lg">
                    {t.cta}
                  </button>
                </div>

                {/* Decorative Elements */}
                <div className="flex-1 relative hidden lg:flex items-center justify-center">
                  {/* Special Sale Badge */}
                  <div className="absolute top-4 right-8 bg-amber-400 text-amber-900 px-6 py-3 rounded-lg shadow-lg transform rotate-3 z-20">
                    <p className="text-sm font-medium">Ramadan</p>
                    <p className="text-xl font-bold">{t.badge}</p>
                  </div>

                  {/* Decorative Lanterns - Using CSS shapes instead of images */}
                  <div className="absolute -left-8 top-0">
                    <div className="w-16 h-24 bg-amber-500/30 rounded-b-full"></div>
                  </div>
                  <div className="absolute right-12 top-8">
                    <div className="w-20 h-28 bg-amber-400/40 rounded-b-full"></div>
                  </div>

                  {/* Phone mockup placeholder */}
                  <div className="w-48 h-80 bg-white/10 rounded-3xl backdrop-blur-sm border border-white/20 flex items-center justify-center">
                    <div className="text-white/50 text-center">
                      <div className="w-16 h-16 mx-auto mb-2 bg-white/20 rounded-xl"></div>
                      <p className="text-sm">Shop App</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Background Decorations */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-white/5 rounded-full"></div>
              <div className="absolute -top-20 -right-20 w-80 h-80 bg-white/5 rounded-full"></div>
              <div className="absolute bottom-0 right-0 w-96 h-96 bg-amber-400/10 rounded-tl-full"></div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 start-4 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 bg-white/20 hover:bg-white/40 rounded-full flex items-center justify-center text-white transition-colors backdrop-blur-sm z-20"
      >
        <PrevIcon className="w-5 h-5 md:w-6 md:h-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 end-4 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 bg-white/20 hover:bg-white/40 rounded-full flex items-center justify-center text-white transition-colors backdrop-blur-sm z-20"
      >
        <NextIcon className="w-5 h-5 md:w-6 md:h-6" />
      </button>

      {/* Dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2.5 h-2.5 rounded-full transition-colors ${
              currentSlide === index ? "bg-white" : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
