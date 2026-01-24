"use client";

import { useLocale } from "@/lib/i18n/locale-context";
import { useCart } from "@/lib/cart-context";
import {
  Search,
  ShoppingCart,
  Menu,
  ChevronDown,
  X,
  Globe,
  Phone,
  Facebook,
  Instagram,
  Youtube,
  HelpCircle,
  User,
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
  const [userMenuOpen, setUserMenuOpen] = useState(false);
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
      {/* Top Bar */}
      <div className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 flex justify-between items-center h-10 text-xs text-gray-700">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4" />
              <span>+971501203917 / +97142882777</span>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <span>Follow us on</span>
            <div className="flex items-center gap-2">
              <a href="#" className="hover:text-[#0891b2]"><Facebook className="w-4 h-4" /></a>
              <a href="#" className="hover:text-[#0891b2]"><Instagram className="w-4 h-4" /></a>
              <a href="#" className="hover:text-[#0891b2]"><Youtube className="w-4 h-4" /></a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header with Diagonal BG */}
      <div className="relative">
        <div
          className="absolute top-0 left-0 w-full h-full bg-[#29b6f6]"
          style={{ clipPath: 'polygon(25% 0, 100% 0, 100% 100%, 22% 100%)' }}
        ></div>

        <div className="container mx-auto px-4 relative flex items-center h-[110px]">
          {/* Logo */}
          <div className="flex-shrink-0 w-1/4">
            <Link href="/" className="flex-shrink-0">
              <Image src="/mariot-logo.svg" alt="Mariot Logo" width={200} height={55} />
            </Link>
          </div>

          {/* Right Content Area */}
          <div className="flex flex-col justify-between h-full flex-1 pl-12 py-1">
            {/* Top Right Actions */}
            <div className="flex justify-end items-center gap-4 text-white text-xs">
              <a href="#" className="flex items-center gap-1 hover:underline">
                <HelpCircle className="w-4 h-4" />
                <span>HAVE A PROJECT?</span>
              </a>
              <a href="#" className="flex items-center gap-1 hover:underline">
                <span>Help</span>
              </a>
              <div className="relative">
                <button onClick={() => setLangOpen(!langOpen)} className="flex items-center gap-1 hover:underline">
                  <Globe className="w-4 h-4" />
                  <span>English</span>
                  <ChevronDown className="w-3 h-3" />
                </button>
                {langOpen && (
                  <div className={`absolute top-full mt-1 bg-white rounded shadow-lg z-50 min-w-[100px] py-1 text-black ${direction === 'rtl' ? 'right-0' : 'left-0'}`}>
                    <a href="#" className="block px-3 py-1 hover:bg-gray-100">English</a>
                    <a href="#" className="block px-3 py-1 hover:bg-gray-100">Arabic</a>
                  </div>
                )}
              </div>
              <div className="relative">
                <button onClick={() => setUserMenuOpen(!userMenuOpen)} className="flex items-center gap-1 hover:underline">
                  <User className="w-4 h-4" />
                  <span>Sign Up / Login</span>
                  <ChevronDown className="w-3 h-3" />
                </button>
                {userMenuOpen && (
                  <div className={`absolute top-full mt-1 bg-white rounded shadow-lg z-50 min-w-[120px] py-1 text-black ${direction === 'rtl' ? 'right-0' : 'left-0'}`}>
                    <a href="#" className="block px-3 py-1 hover:bg-gray-100">Sign Up</a>
                    <a href="#" className="block px-3 py-1 hover:bg-gray-100">Login</a>
                  </div>
                )}
              </div>
            </div>

            {/* Search Bar & Cart */}
            <div className="flex items-center justify-between">
                <div className="flex w-full max-w-lg">
                    <div className="relative w-full">
                        <div className="absolute top-0 left-0 h-full">
                            <button
                            onClick={() => setCategoryOpen(!categoryOpen)}
                            className="flex items-center gap-2 px-4 h-full bg-white text-gray-800 font-medium rounded-s-md border border-r-0 border-gray-300 hover:bg-gray-100 transition-colors"
                            >
                            <span>{t.common.allCategories}</span>
                            <ChevronDown className="w-4 h-4" />
                            </button>
                            {categoryOpen && (
                                <div className={`absolute top-full mt-1 bg-white rounded-lg shadow-xl z-50 min-w-[250px] py-2 overflow-hidden text-black`}>
                                    {allCategories.map((cat) => (
                                    <a key={cat} href="#" className="block px-4 py-2 hover:bg-gray-100" onClick={() => setCategoryOpen(false)}>{cat}</a>
                                    ))}
                                </div>
                            )}
                        </div>
                        <input
                        type="text"
                        placeholder="Search for products, categories, brands"
                        className="w-full h-11 pl-[155px] pr-12 border border-gray-300 rounded-md focus:outline-none focus:border-[#0891b2]"
                        />
                        <button className="absolute top-1/2 -translate-y-1/2 right-0 px-4 h-full text-white bg-cyan-500 rounded-e-md hover:bg-cyan-600 transition-colors">
                        <Search className="w-5 h-5" />
                        </button>
                    </div>
                </div>

                <div className="flex items-center gap-4 text-white">
                    <div className="text-sm text-right">
                        <div>PTS 123,456.00</div>
                    </div>
                    <div className="flex items-center gap-2">
                        <ShoppingCart className="w-6 h-6" />
                        <span className="font-bold text-sm">AED 123,456.00</span>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Bar */}
      <nav className="hidden md:block bg-white border-t border-gray-200">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-1">
            <div className="relative group">
              <button className="flex items-center gap-2 px-4 h-12 text-black font-bold">
                <Menu className="w-5 h-5" />
                <span>{t.common.allCategories}</span>
              </button>
            </div>
            <div className="h-6 w-[1px] bg-gray-300"></div>
            {navItems.map((item) => (
              <div key={item.label} className="relative group">
                <Link href={item.href} className="flex items-center gap-1 px-4 h-12 text-black hover:text-[#0891b2] transition-colors text-sm font-medium">
                  {item.label}
                  {item.hasSubmenu && <ChevronDown className="w-4 h-4" />}
                </Link>
                {item.hasSubmenu && item.submenu && (
                  <div className={`absolute top-full mt-0 bg-white rounded-b-lg shadow-xl z-50 min-w-[200px] py-2 overflow-hidden transition-all duration-300 opacity-0 invisible group-hover:opacity-100 group-hover:visible translate-y-2 group-hover:translate-y-0`}>
                    {item.submenu.map((subItem) => (
                      <a key={subItem.label} href={subItem.href} className="block px-4 py-2 text-gray-800 hover:bg-gray-100">{subItem.label}</a>
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
        <div className="md:hidden bg-white border-t fixed inset-0 top-[120px] z-30 overflow-y-auto">
          <nav className="container mx-auto px-4 py-4">
            {/* Mobile nav to be implemented */}
          </nav>
        </div>
      )}
    </header>
  );
}
