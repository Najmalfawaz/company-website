"use client";

import { useLocale } from "@/lib/i18n/locale-context";
import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  Instagram,
  Linkedin,
  MessageCircle,
} from "lucide-react";
import Link from "next/link";

export function Footer() {
  const { dictionary, direction } = useLocale();
  const t = dictionary.footer;

  return (
    <footer className="bg-[#0e7490] text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-amber-300">
              {t.quickLinks}
            </h3>
            <ul className="space-y-2">
              {[
                { label: t.aboutUs, href: "/about" },
                { label: t.contactUs, href: "/contact" },
                { label: t.affiliateProgram, href: "/affiliate" },
                { label: t.privacyPolicy, href: "/privacy" },
                { label: t.returnPolicy, href: "/returns" },
                { label: t.shippingDetails, href: "/shipping" },
                { label: t.paymentInformation, href: "/payment" },
                { label: t.termsConditions, href: "/terms" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/80 hover:text-white transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Product Categories */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-amber-300">
              {t.productCategories}
            </h3>
            <ul className="space-y-2">
              {[
                { label: t.accessories, href: "/category/accessories" },
                { label: t.bakeryLine, href: "/category/bakery" },
                { label: t.coffeeBarLine, href: "/category/coffee" },
                { label: t.cookingLine, href: "/category/cooking" },
                { label: t.foodProcessing, href: "/category/food-processing" },
                { label: t.laundryDishWasher, href: "/category/laundry" },
                { label: t.refrigerationLine, href: "/category/refrigeration" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/80 hover:text-white transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Payment */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-amber-300">
              {t.payment}
            </h3>
            <div className="flex flex-wrap gap-2">
              {["Visa", "MasterCard", "PayPal", "Apple Pay"].map((method) => (
                <div
                  key={method}
                  className="bg-white/10 rounded px-3 py-1.5 text-xs"
                >
                  {method}
                </div>
              ))}
            </div>

            <h3 className="font-bold text-lg mt-6 mb-4 text-amber-300">
              {t.followUs}
            </h3>
            <div className="flex gap-3">
              <a
                href="#"
                className="w-9 h-9 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-9 h-9 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-9 h-9 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Company Info */}
          <div className="lg:col-span-2">
            {/* Logo */}
            <div className="flex items-center gap-2 mb-4">
              <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center">
                <span className="text-[#0891b2] font-bold text-xl">M</span>
              </div>
              <div>
                <span className="text-white font-bold text-xl block leading-none">
                  MARIOT
                </span>
                <span className="text-amber-300 text-xs">GROUP</span>
              </div>
            </div>

            <p className="text-white/80 text-sm mb-6 leading-relaxed">
              {t.companyDescription}
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <a
                href="tel:+971561269917"
                className="flex items-center gap-2 text-white/80 hover:text-white transition-colors text-sm"
              >
                <Phone className="w-4 h-4" />
                <span dir="ltr">+971561269917 / +97142382777</span>
              </a>
              <a
                href="#"
                className="flex items-center gap-2 text-white/80 hover:text-white transition-colors text-sm"
              >
                <MessageCircle className="w-4 h-4" />
                <span>{t.messageWhatsApp}</span>
              </a>
              <a
                href="mailto:info@mariot-group.com"
                className="flex items-center gap-2 text-white/80 hover:text-white transition-colors text-sm"
              >
                <Mail className="w-4 h-4" />
                <span>info@mariot-group.com</span>
              </a>
              <div className="flex items-center gap-2 text-white/80 text-sm">
                <MapPin className="w-4 h-4 flex-shrink-0" />
                <span>{t.address}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-white/60 text-sm">{t.helpText}</p>
            <p className="text-white/60 text-sm">{t.copyright}</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
