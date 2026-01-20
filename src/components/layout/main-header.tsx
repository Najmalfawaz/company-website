
"use client";

import { useLocale } from "@/lib/i18n/locale-context";
import { useCart } from "@/lib/cart-context";
import { formatPrice } from "@/lib/utils";
import {
  Search,
  Heart,
  ShoppingCart,
  Menu,
  ChevronDown,
  X,
  Globe,
} from "lucide-react";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function MainHeader() {
  const { dictionary, direction, locale } = useLocale();
  const { cartCount, cartTotal } = useCart();
  const pathname = usePathname();

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [categoryOpen, setCategoryOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const t = dictionary;

  const navItems = [
    { label: t.nav.home, href: "/" },
    { label: t.nav.aboutUs, href: "/about" },
    {
      label: t.nav.services,
      href: "/services",
      hasSubmenu: true,
      submenu: [
        { label: "Service 1", href: "/services/1" },
        { label: "Service 2", href: "/services/2" },
        { label: "Service 3", href: "/services/3" },
      ],
    },
    {
      label: t.nav.shopByBrand,
      href: "/brands",
      hasSubmenu: true,
      submenu: [
        { label: "Brand A", href: "/brands/a" },
        { label: "Brand B", href: "/brands/b" },
        { label: "Brand C", href: "/brands/c" },
      ],
    },
    { label: t.nav.kitchenEquipment, href: "/kitchen-equipment" },
    { label: t.nav.supermarketEquipment, href: "/supermarket-equipment" },
    { label: t.nav.laundryEquipment, href: "/laundry-equipment" },
  ];

  const allCategories = Object.values(t.categories).filter(
    (cat) => typeof cat === "string" && cat !== t.categories.title
  );

  const handleLangChange = (newLocale: string) => {
    const newPath = `/${newLocale}${pathname.substring(3)}`;
    window.location.href = newPath;
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-40">
      {/* Top Header Row */}
      <div className="bg-gray-100 text-gray-600 text-xs border-b border-gray-200">
        <div className="container mx-auto px-4 flex justify-between items-center h-9">
          {/* Left Links */}
          <div className="flex items-center gap-4">
            <span>{t.topHeader.phone}</span>
            <span className="hidden md:inline">|</span>
            <span className="hidden md:inline">{t.topHeader.email}</span>
          </div>

          {/* Right Links */}
          <div className="flex items-center gap-4">
            <Link href="/help" className="hover:text-[#0891b2]">
              {t.topHeader.helpCenter}
            </Link>
            <span className="hidden md:inline">|</span>
            <Link href="/track" className="hidden md:inline hover:text-[#0891b2]">
              {t.topHeader.trackOrder}
            </Link>
            <span className="hidden md:inline">|</span>

            {/* Language Dropdown */}
            <div className="relative">
              <button
                onClick={() => setLangOpen(!langOpen)}
                className="flex items-center gap-1 hover:text-[#0891b2]"
              >
                <Globe className="w-4 h-4" />
                <span>{locale === "ar" ? "العربية" : "English"}</span>
                <ChevronDown className="w-3 h-3" />
              </button>
              {langOpen && (
                <div
                  className={`absolute top-full mt-2 bg-white rounded-lg shadow-xl z-50 min-w-[120px] py-2 ${
                    direction === "rtl" ? "left-0" : "right-0"
                  }`}
                >
                  <button
                    onClick={() => handleLangChange("en")}
                    className="block w-full text-left px-4 py-2 hover:bg-gray-100 transition-colors"
                  >
                    English
                  </button>
                  <button
                    onClick={() => handleLangChange("ar")}
                    className="block w-full text-left px-4 py-2 hover:bg-gray-100 transition-colors"
                  >
                    العربية
                  </button>
                </div>
              )}
            </div>

            <span className="hidden md:inline">|</span>

            {/* Currency Dropdown */}
            <div className="relative">
              <button className="flex items-center gap-1 hover:text-[#0891b2]">
                <span>{t.common.currency}</span>
                <ChevronDown className="w-3 h-3" />
              </button>
              {/* Add currency dropdown content here */}
            </div>
          </div>
        </div>
      </div>

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
              <div className="relative group">
                <button
                  onClick={() => setCategoryOpen(!categoryOpen)}
                  className="flex items-center gap-2 px-4 h-11 bg-gray-100 text-gray-800 font-medium rounded-s-lg hover:bg-gray-200 transition-colors"
                >
                  <span className="hidden lg:inline">{t.common.allCategories}</span>
                  <span className="lg:hidden">All</span>
                  <ChevronDown className="w-4 h-4" />
                </button>

                <div
                  className={`absolute top-full mt-1 bg-white rounded-lg shadow-xl z-50 min-w-[250px] py-2 overflow-hidden transition-all duration-300 ${
                    direction === "rtl" ? "right-0" : "left-0"
                  } ${
                    categoryOpen
                      ? "opacity-100 visible translate-y-0"
                      : "opacity-0 invisible -translate-y-2"
                  }`}
                >
                  {allCategories.map((cat) => (
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
            {/* Account */}
            <Link
              href="/account"
              className="hidden md:flex items-center gap-2 p-2 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <Image
                src="/placeholder-user.jpg"
                alt="User"
                width={28}
                height={28}
                className="rounded-full"
              />
              <div className="text-start">
                <p className="text-xs text-gray-500">{t.common.login}</p>
                <p className="font-semibold text-sm">{t.common.register}</p>
              </div>
            </Link>

            {/* Wishlist */}
            <Link
              href="/wishlist"
              className="relative p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              <Heart className="w-6 h-6 text-gray-600" />
              <span className="absolute -top-1 -right-1 w-5 h-5 bg-[#ea580c] text-white text-xs rounded-full flex items-center justify-center">
                0
              </span>
            </Link>

            {/* Cart */}
            <Link
              href="/cart"
              className="flex items-center gap-2 p-2 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <div className="relative">
                <ShoppingCart className="w-6 h-6 text-gray-600" />
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-1 w-5 h-5 bg-[#ea580c] text-white text-xs rounded-full flex items-center justify-center">
                    {cartCount}
                  </span>
                )}
              </div>
              <div className="hidden lg:block text-start">
                <p className="text-xs text-gray-500">{t.common.cart}</p>
                <p className="font-semibold text-sm">
                  {formatPrice(cartTotal, t.common.currency, locale)}
                </p>
              </div>
            </Link>

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
          <div className="flex w-full">
            <input
              type="text"
              placeholder={t.common.search}
              className="flex-1 h-10 px-4 border border-gray-200 rounded-s-lg focus:outline-none focus:border-[#0891b2] min-w-0"
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
            <div className="relative group">
              <button className="flex items-center gap-2 px-4 h-12 bg-[#0e7490] text-white font-medium hover:bg-cyan-800 transition-colors">
                <Menu className="w-5 h-5" />
                <span>{t.common.allCategories}</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              <div
                className={`absolute top-full mt-0 bg-white rounded-b-lg shadow-xl z-50 min-w-[250px] py-2 overflow-hidden transition-all duration-300 opacity-0 invisible group-hover:opacity-100 group-hover:visible translate-y-2 group-hover:translate-y-0 ${
                  direction === "rtl" ? "right-0" : "left-0"
                }`}>
                {allCategories.map((cat) => (
                  <a
                    key={cat}
                    href="#"
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-100 transition-colors"
                  >
                    {cat}
                  </a>
                ))}
              </div>
            </div>

            {/* Nav Links */}
            {navItems.map((item) => (
              <div key={item.label} className="relative group">
                <Link
                  href={item.href}
                  className="flex items-center gap-1 px-4 h-12 text-white hover:bg-cyan-700 transition-colors text-sm font-medium"
                >
                  {item.label}
                  {item.hasSubmenu && <ChevronDown className="w-4 h-4" />}
                </Link>
                {item.hasSubmenu && item.submenu && (
                  <div
                    className={`absolute top-full mt-0 bg-white rounded-b-lg shadow-xl z-50 min-w-[200px] py-2 overflow-hidden transition-all duration-300 opacity-0 invisible group-hover:opacity-100 group-hover:visible translate-y-2 group-hover:translate-y-0 ${
                      direction === "rtl" ? "right-auto left-0" : "left-auto right-0"
                    }`}>
                    {item.submenu.map((subItem) => (
                      <a
                        key={subItem.label}
                        href={subItem.href}
                        className="block px-4 py-2 text-gray-800 hover:bg-gray-100 transition-colors"
                      >
                        {subItem.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t fixed inset-0 top-[137px] z-30 overflow-y-auto">
          <nav className="container mx-auto px-4 py-4">
            {navItems.map((item) => (
              <div key={item.label} className="border-b border-gray-100">
                <Link
                  href={item.href}
                  className="flex items-center justify-between py-3 text-gray-700 hover:text-[#0891b2] transition-colors"
                  onClick={() => !item.hasSubmenu && setMobileMenuOpen(false)}
                >
                  {item.label}
                  {item.hasSubmenu && <ChevronDown className="w-4 h-4" />}
                </Link>
                {/* Mobile Submenu (to be implemented) */}
              </div>
            ))}

            <div className="mt-6">
              <Link
                href="/account"
                className="flex items-center gap-3 py-3"
                onClick={() => setMobileMenuOpen(false)}
              >
                <Image
                  src="/placeholder-user.jpg"
                  alt="User"
                  width={32}
                  height={32}
                  className="rounded-full"
                />
                <div>
                  <p className="font-semibold">{t.common.login}</p>
                  <p className="text-sm text-gray-500">{t.common.register}</p>
                </div>
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
