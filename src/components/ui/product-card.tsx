"use client";

import { useLocale } from "@/lib/i18n/locale-context";
import { formatPrice } from "@/lib/utils";
import type { Product } from "@/lib/data/products";
import { Heart, Eye, BarChart3, ShoppingCart } from "lucide-react";
import { useState } from "react";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const { locale, dictionary } = useLocale();
  const [isHovered, setIsHovered] = useState(false);
  const t = dictionary;

  const badgeColors = {
    new: "bg-green-500",
    sale: "bg-[#ea580c]",
    hot: "bg-red-500",
  };

  return (
    <div
      className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden group border border-gray-100"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image Container */}
      <div className="relative aspect-square bg-gray-50 overflow-hidden">
        {/* Badge */}
        {product.badge && (
          <span
            className={`absolute top-3 start-3 ${badgeColors[product.badge]} text-white text-xs font-semibold px-2.5 py-1 rounded z-10`}
          >
            {product.badge.toUpperCase()}
          </span>
        )}

        {/* Product Image Placeholder */}
        <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200">
          <div className="text-center p-4">
            <div className="w-20 h-20 mx-auto mb-2 bg-gray-300 rounded-lg flex items-center justify-center">
              <ShoppingCart className="w-8 h-8 text-gray-400" />
            </div>
            <p className="text-xs text-gray-500 line-clamp-2">
              {product.name[locale]}
            </p>
          </div>
        </div>

        {/* Quick Actions */}
        <div
          className={`absolute inset-0 bg-black/20 flex items-center justify-center gap-2 transition-opacity duration-300 ${
            isHovered ? "opacity-100" : "opacity-0"
          }`}
        >
          <button
            className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-[#0891b2] hover:text-white transition-colors shadow-md"
            title={t.product.quickView}
          >
            <Eye className="w-5 h-5" />
          </button>
          <button
            className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-[#0891b2] hover:text-white transition-colors shadow-md"
            title={t.product.addToWishlist}
          >
            <Heart className="w-5 h-5" />
          </button>
          <button
            className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-[#0891b2] hover:text-white transition-colors shadow-md"
            title={t.product.compare}
          >
            <BarChart3 className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        {/* SKU */}
        <p className="text-xs text-gray-500 mb-1">
          {t.product.sku}: {product.sku}
        </p>

        {/* Title */}
        <h3 className="font-medium text-gray-800 text-sm mb-3 line-clamp-2 min-h-[40px]">
          {product.name[locale]}
        </h3>

        {/* Price */}
        <div className="mb-3">
          {product.originalPrice > product.price && (
            <p className="text-xs text-gray-400 line-through">
              {formatPrice(product.originalPrice, t.common.currency)}
            </p>
          )}
          <p className="text-[#ea580c] font-bold">
            {formatPrice(product.price, t.common.currency)}
          </p>
        </div>

        {/* Add to Cart Button */}
        <button className="w-full flex items-center justify-center gap-2 py-2.5 border-2 border-[#0891b2] text-[#0891b2] rounded-lg hover:bg-[#0891b2] hover:text-white transition-colors font-medium text-sm">
          <ShoppingCart className="w-4 h-4" />
          <span>{t.common.addToCart}</span>
        </button>
      </div>
    </div>
  );
}
