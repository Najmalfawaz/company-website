"use client";

import { useLocale } from "@/lib/i18n/locale-context";
import { products } from "@/lib/data/products";
import { ProductCarousel } from "@/components/ui/product-carousel";
import { SectionHeader } from "./section-header";

export function BestSeller() {
  const { dictionary } = useLocale();
  const t = dictionary;

  return (
    <section className="py-8 bg-white">
      <div className="container mx-auto px-4">
        <SectionHeader title={t.sections.bestSeller} variant="primary" />

        <div className="flex flex-col lg:flex-row gap-6 mt-6">
          {/* Side Banner */}
          <div className="lg:w-52 flex-shrink-0">
            <div className="bg-[#0891b2] rounded-xl p-6 h-full min-h-[300px] flex flex-col items-center justify-center text-white text-center">
              <div className="bg-white/20 rounded-lg px-4 py-2 mb-4">
                <span className="block text-lg font-bold">BEST</span>
                <span className="block text-xl font-extrabold">SELLER</span>
              </div>
              <p className="text-xl font-bold">{t.bestSeller.subtitle}</p>
            </div>
          </div>

          {/* Products */}
          <div className="flex-1 overflow-hidden">
            <ProductCarousel products={products} />
          </div>
        </div>
      </div>
    </section>
  );
}
