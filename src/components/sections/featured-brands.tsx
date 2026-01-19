"use client";

import { useLocale } from "@/lib/i18n/locale-context";
import { SectionHeader } from "./section-header";

const brandLogos = [
  { id: "rational", name: "RATIONAL", bgColor: "bg-orange-600" },
  { id: "mbm", name: "MBM", bgColor: "bg-gray-100" },
  { id: "brema", name: "BREMA", bgColor: "bg-gray-100" },
  { id: "pitco", name: "PITCO", bgColor: "bg-gray-800" },
];

export function FeaturedBrands() {
  const { dictionary } = useLocale();

  return (
    <section className="py-8 bg-gray-50">
      <div className="container mx-auto px-4">
        <SectionHeader
          title={dictionary.sections.featuredBrands}
          variant="primary"
        />

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
          {brandLogos.map((brand) => (
            <a
              key={brand.id}
              href={`/brand/${brand.id}`}
              className={`${brand.bgColor} rounded-xl p-6 md:p-8 flex items-center justify-center h-24 md:h-32 hover:shadow-lg transition-shadow group`}
            >
              <span
                className={`text-xl md:text-2xl font-bold ${
                  brand.bgColor === "bg-gray-800" || brand.bgColor === "bg-orange-600"
                    ? "text-white"
                    : "text-gray-800"
                } group-hover:scale-105 transition-transform`}
              >
                {brand.name}
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
