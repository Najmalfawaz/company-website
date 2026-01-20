"use client";

import { useLocale } from "@/lib/i18n/locale-context";
import {
  Search,
  Heart,
  ShoppingCart,
  Menu,
  ChevronDown,
  X,
} from "lucide-react";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export function MainHeader() {
  const { dictionary, direction } = useLocale();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [categoryOpen, setCategoryOpen] = useState(false);
  const t = dictionary;

  const navItems = [
    { label: t.nav.home, href: "/" },
    { label: t.nav.aboutUs, href: "/about" },
    { label: t.nav.services, href: "/services", hasSubmenu: true },
    { label: t.nav.shopByBrand, href: "/brands", hasSubmenu: true },
    { label: t.nav.kitchenEquipment, href: "/kitchen-equipment" },
    { label: t.nav.supermarketEquipment, href: "/supermarket-equipment" },
    { label: t.nav.laundryEquipment, href: "/laundry-equipment" },
  ];

  return (
    <header className="bg-white shadow-sm sticky top-0 z-40">
      {/* Main Header Row */}
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20 gap-4">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <div className="flex items-center gap-2">
              <div className="w-12 h-12 bg-[#0891b2] rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">M</span>
              </div>
              <div>
                <span className="text-[#0891b2] font-bold text-xl block leading-none">
                  MARIOT
                </span>
                <span className="text-[#ea580c] text-xs">GROUP</span>
              </div>
            </div>
          </Link>

          {/* Search Bar - Hidden on mobile */}
          <div className="hidden md:flex flex-1 max-w-2xl mx-4">
            <div className="flex w-full">
              <div className="relative">
                <button
                  onClick={() => setCategoryOpen(!categoryOpen)}
                  className="flex items-center gap-2 px-4 h-11 bg-[#fbbf24] text-gray-800 font-medium rounded-s-lg hover:bg-amber-400 transition-colors"
                >
                  <span className="hidden lg:inline">{t.common.allCategories}</span>
                  <span className="lg:hidden">All</span>
                  <ChevronDown className="w-4 h-4" />
                </button>
                {categoryOpen && (
                  <div
                    className={`absolute top-full mt-1 bg-white rounded-lg shadow-xl z-50 min-w-[200px] py-2 ${
                      direction === "rtl" ? "right-0" : "left-0"
                    }`}
                  >
                    {[
                      t.categories.accessories,
                      t.categories.bakeryLine,
                      t.categories.coffeeBarLine,
                      t.categories.cookingLine,
                      t.categories.dishWasher,
                      t.categories.foodProcessing,
                      t.categories.refrigerationLine,
                    ].map((cat) => (
                      <a
                        key={cat}
                        href="#"
                        className="block px-4 py-2 hover:bg-gray-100 transition-colors"
                        onClick={() => setCategoryOpen(false)}
                      >
                        {cat}
                      </a>
                    ))}
                  </div>
                )}
              </div>
              <input
                type="text"
                placeholder={t.common.search}
                className="flex-1 h-11 px-4 border-y border-gray-200 focus:outline-none focus:border-[#0891b2] min-w-0"
              />
              <button className="px-5 h-11 bg-[#0891b2] text-white rounded-e-lg hover:bg-cyan-700 transition-colors">
                <Search className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-2 md:gap-4">
            {/* Wishlist */}
            <button className="relative p-2 hover:bg-gray-100 rounded-full transition-colors">
              <Heart className="w-6 h-6 text-gray-600" />
              <span className="absolute -top-1 -right-1 w-5 h-5 bg-[#ea580c] text-white text-xs rounded-full flex items-center justify-center">
                0
              </span>
            </button>

            {/* Cart */}
            <button className="flex items-center gap-2 p-2 hover:bg-gray-100 rounded-lg transition-colors">
              <div className="relative">
                <ShoppingCart className="w-6 h-6 text-gray-600" />
                <span className="absolute -top-1 -right-1 w-5 h-5 bg-[#ea580c] text-white text-xs rounded-full flex items-center justify-center">
                  0
                </span>
              </div>
              <div className="hidden lg:block text-start">
                <p className="text-xs text-gray-500">{t.common.cart}</p>
                <p className="font-semibold text-sm">{t.common.currency} 0.00</p>
              </div>
            </button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors md:hidden"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6 text-gray-600" />
              ) : (
                <Menu className="w-6 h-6 text-gray-600" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Search */}
        <div className="md:hidden pb-4">
          <div className="flex">
            <input
              type="text"
              placeholder={t.common.search}
              className="flex-1 h-10 px-4 border border-gray-200 rounded-s-lg focus:outline-none focus:border-[#0891b2]"
            />
            <button className="px-4 h-10 bg-[#0891b2] text-white rounded-e-lg hover:bg-cyan-700 transition-colors">
              <Search className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Navigation Bar - Desktop */}
      <nav className="hidden md:block bg-[#0891b2]">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-1">
            {/* All Categories Button */}
            <button className="flex items-center gap-2 px-4 h-12 bg-[#0e7490] text-white font-medium hover:bg-cyan-800 transition-colors">
              <Menu className="w-5 h-5" />
              <span>{t.common.allCategories}</span>
              <ChevronDown className="w-4 h-4" />
            </button>

            {/* Nav Links */}
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="flex items-center gap-1 px-4 h-12 text-white hover:bg-cyan-700 transition-colors text-sm font-medium"
              >
                {item.label}
                {item.hasSubmenu && <ChevronDown className="w-4 h-4" />}
              </Link>
            ))}
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <nav className="container mx-auto px-4 py-4">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="flex items-center justify-between py-3 border-b border-gray-100 text-gray-700 hover:text-[#0891b2] transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
                {item.hasSubmenu && (
                  <ChevronDown className="w-4 h-4 text-gray-400" />
                )}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
