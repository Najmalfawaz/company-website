'use client';

import { MainHeader, Footer } from "@/components/layout";
import { AboutSection } from "@/components/pages/home/about-section";
import { BestSeller } from "@/components/pages/home/best-seller";
import { CategoryIcons } from "@/components/pages/home/category-icons";
import { FeaturedBrands } from "@/components/pages/home/featured-brands";
import { Features } from "@/components/pages/home/features";
import { HeroBanner } from "@/components/pages/home/hero-banner";
import { ProductSection } from "@/components/pages/home/product-section";
import { ShopByBrand } from "@/components/pages/home/shop-by-brand";
import { Testimonials } from "@/components/pages/home/testimonials";
import { TopDeals } from "@/components/pages/home/top-deals";
import { useLocale } from "@/lib/i18n/locale-context";

export default function Home() {
  const { dictionary } = useLocale();

  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Header */}
      <MainHeader />

      {/* Main Content */}
      <main className="flex-1">
        {/* Hero Banner */}
        <HeroBanner />

        {/* Category Icons */}
        <CategoryIcons />

        {/* Featured Brands */}
        <FeaturedBrands />

        {/* Recommended Products */}
        <ProductSection
          title={dictionary.sections.recommendedForYou}
          variant="primary"
        />

        {/* Top Deals */}
        <TopDeals />

        {/* Best Seller */}
        <BestSeller />

        {/* Shop By Brand */}
        <ShopByBrand />

        {/* About Section */}
        <AboutSection />

        {/* Testimonials */}
        <Testimonials />

        {/* Features */}
        <Features />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
