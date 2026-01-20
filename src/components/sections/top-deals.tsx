"use client";

import { useLocale } from "@/lib/i18n/locale-context";
import { products } from "@/lib/data/products";
import { ProductCarousel } from "@/components/ui/product-carousel";
import { SectionHeader } from "./section-header";

export function TopDeals() {
  const { dictionary } = useLocale();
  const t = dictionary;

  return (
    <section className="py-8 bg-gray-50">
      <div className="container mx-auto px-4">
        <SectionHeader title={t.sections.topDeals} variant="secondary" />

        <div className="flex flex-col lg:flex-row gap-6 mt-6">
          {/* Side Banner */}
          <div className="lg:w-52 flex-shrink-0">
            <div className="bg-[#ea580c] rounded-xl p-6 h-full min-h-[300px] flex flex-col items-center justify-center text-white text-center">
              <div className="bg-white/20 rounded-lg px-4 py-2 mb-4">
                <span className="font-bold text-lg">TOP</span>
                <span className="block text-2xl font-extrabold">DEALS</span>
              </div>
              <p className="text-xl font-bold mb-2">{t.deals.saveOnEvery}</p>
              <p className="text-3xl font-extrabold">{t.deals.deals}</p>
            </div>
          </div>

          {/* Products */}
          <div className="flex-1">
            <ProductCarousel products={products} />
          </div>
        </div>
      </div>
    </section>
  );
}
