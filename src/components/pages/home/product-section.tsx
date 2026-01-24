"use client";

import { products } from "@/lib/data/products";
import { ProductCarousel } from "@/components/ui/product-carousel";
import { SectionHeader } from "./section-header";

interface ProductSectionProps {
  title: string;
  variant?: "primary" | "secondary";
}

export function ProductSection({
  title,
  variant = "primary",
}: ProductSectionProps) {
  return (
    <section className="py-8 bg-white">
      <div className="container mx-auto px-4">
        <SectionHeader title={title} variant={variant} />
        <div className="mt-6">
          <ProductCarousel products={products} />
        </div>
      </div>
    </section>
  );
}
