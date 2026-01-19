"use client";

import { useLocale } from "@/lib/i18n/locale-context";
import { localeNames, type Locale } from "@/lib/i18n/config";
import {
  Phone,
  Mail,
  HelpCircle,
  Package,
  Facebook,
  Instagram,
  Twitter,
  Youtube,
  Globe,
  ChevronDown,
} from "lucide-react";
import { useState } from "react";

export function TopHeader() {
  const { locale, dictionary, setLocale, direction } = useLocale();
  const [langOpen, setLangOpen] = useState(false);
  const t = dictionary.topHeader;

  return (
    <div className="bg-[#0891b2] text-white text-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-10">
          {/* Left Section */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href={`tel:${t.phone}`}
              className="flex items-center gap-1.5 hover:text-cyan-100 transition-colors"
            >
              <Phone className="w-3.5 h-3.5" />
              <span dir="ltr">{t.phone}</span>
            </a>
            <span className="text-cyan-300">|</span>
            <a
              href={`mailto:${t.email}`}
              className="flex items-center gap-1.5 hover:text-cyan-100 transition-colors"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>{t.email}</span>
            </a>
          </div>

          {/* Center - Social Icons */}
          <div className="flex items-center gap-3">
            <a href="#" className="hover:text-cyan-100 transition-colors">
              <Facebook className="w-4 h-4" />
            </a>
            <a href="#" className="hover:text-cyan-100 transition-colors">
              <Instagram className="w-4 h-4" />
            </a>
            <a href="#" className="hover:text-cyan-100 transition-colors">
              <Twitter className="w-4 h-4" />
            </a>
            <a href="#" className="hover:text-cyan-100 transition-colors">
              <Youtube className="w-4 h-4" />
            </a>
          </div>

          {/* Right Section */}
          <div className="flex items-center gap-4">
            <a
              href="#"
              className="hidden sm:flex items-center gap-1.5 hover:text-cyan-100 transition-colors"
            >
              <HelpCircle className="w-3.5 h-3.5" />
              <span>{t.helpCenter}</span>
            </a>
            <span className="hidden sm:inline text-cyan-300">|</span>
            <a
              href="#"
              className="hidden sm:flex items-center gap-1.5 hover:text-cyan-100 transition-colors"
            >
              <Package className="w-3.5 h-3.5" />
              <span>{t.trackOrder}</span>
            </a>
            <span className="hidden sm:inline text-cyan-300">|</span>

            {/* Language Switcher */}
            <div className="relative">
              <button
                onClick={() => setLangOpen(!langOpen)}
                className="flex items-center gap-1.5 hover:text-cyan-100 transition-colors"
              >
                <Globe className="w-3.5 h-3.5" />
                <span>{localeNames[locale]}</span>
                <ChevronDown className="w-3 h-3" />
              </button>
              {langOpen && (
                <div
                  className={`absolute top-full mt-1 bg-white text-gray-800 rounded shadow-lg z-50 min-w-[120px] ${
                    direction === "rtl" ? "left-0" : "right-0"
                  }`}
                >
                  {(["en", "ar"] as Locale[]).map((lang) => (
                    <button
                      key={lang}
                      onClick={() => {
                        setLocale(lang);
                        setLangOpen(false);
                      }}
                      className={`block w-full text-start px-4 py-2 hover:bg-gray-100 transition-colors ${
                        locale === lang ? "bg-cyan-50 text-cyan-600" : ""
                      }`}
                    >
                      {localeNames[lang]}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <span className="text-cyan-300">|</span>
            <a
              href="#"
              className="hover:text-cyan-100 transition-colors"
            >
              {dictionary.common.register}
            </a>
            <span className="text-cyan-300">|</span>
            <a
              href="#"
              className="hover:text-cyan-100 transition-colors"
            >
              {dictionary.common.login}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
