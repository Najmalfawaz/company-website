"use client";

import { useLocale } from "@/lib/i18n/locale-context";

const brands = [
  { id: "mariot", name: "MARIOT GROUP", color: "text-[#0891b2]" },
  { id: "foodtech", name: "Food Technology", color: "text-gray-600" },
  { id: "monolith", name: "MONOLITH", color: "text-gray-700" },
  { id: "pitco", name: "PITCO", color: "text-gray-800" },
  { id: "rational", name: "RATIONAL", color: "text-orange-600" },
  { id: "grill", name: "SELLER GRILL", color: "text-red-600" },
];

export function ShopByBrand() {
  const { dictionary } = useLocale();

  return (
    <section className="py-8 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-xl font-bold text-center text-gray-800 mb-6">
          {dictionary.sections.shopByBrand}
        </h2>

        <div className="flex flex-wrap items-center justify-center gap-6 md:gap-12">
          {brands.map((brand) => (
            <a
              key={brand.id}
              href={`/brand/${brand.id}`}
              className={`${brand.color} font-bold text-lg md:text-xl hover:opacity-70 transition-opacity`}
            >
              {brand.name}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
