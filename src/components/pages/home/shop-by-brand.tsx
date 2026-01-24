'use client';

import { useLocale } from '@/lib/i18n/locale-context';
import Image from 'next/image';
import { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { shopBrands } from '@/lib/data/products';

export function ShopByBrand() {
  const { dictionary, direction } = useLocale();
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 200;
      const actualDir = direction === 'rtl' ? (dir === 'left' ? 'right' : 'left') : dir;
      scrollRef.current.scrollBy({
        left: actualDir === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  const PrevIcon = direction === 'rtl' ? ChevronRight : ChevronLeft;
  const NextIcon = direction === 'rtl' ? ChevronLeft : ChevronRight;

  return (
    <section className="py-8 bg-[#e0f7ff]">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-8">
          {dictionary.sections.shopByBrand}
        </h2>

        <div className="relative">
          <button
            onClick={() => scroll('left')}
            className="absolute -left-2 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white/70 shadow-lg rounded-full flex items-center justify-center hover:bg-white transition-colors"
            aria-label="Scroll left"
          >
            <PrevIcon className="w-5 h-5 text-gray-600" />
          </button>
          
          <div
            ref={scrollRef}
            className="flex items-center gap-8 overflow-x-auto hide-scrollbar px-8"
          >
            {shopBrands.map((brand) => (
              <a
                key={brand.id}
                href={`/brand/${brand.id}`}
                className="flex-shrink-0 p-4 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow"
              >
                <div className="relative w-32 h-16">
                  <Image
                    src={brand.logo}
                    alt={brand.name}
                    layout="fill"
                    objectFit="contain"
                  />
                </div>
              </a>
            ))}
          </div>

          <button
            onClick={() => scroll('right')}
            className="absolute -right-2 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white/70 shadow-lg rounded-full flex items-center justify-center hover:bg-white transition-colors"
            aria-label="Scroll right"
          >
            <NextIcon className="w-5 h-5 text-gray-600" />
          </button>
        </div>
      </div>
    </section>
  );
}
