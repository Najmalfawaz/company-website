"use client";

import { MainHeader, Footer } from "@/components/layout";
import {
  HeroBanner,
  CategoryIcons,
  FeaturedBrands,
  ProductSection,
  TopDeals,
  BestSeller,
  ShopByBrand,
  AboutSection,
  Testimonials,
  Features,
} from "@/components/sections";
import { useLocale } from "@/lib/i18n/locale-context";

export default function Home() {
  const { dictionary } = useLocale();

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      {/* <TopHeader /> */}
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
