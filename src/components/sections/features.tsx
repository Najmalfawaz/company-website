"use client";

import { useLocale } from "@/lib/i18n/locale-context";
import { Truck, ShieldCheck, Award, Headphones } from "lucide-react";

export function Features() {
  const { dictionary } = useLocale();
  const t = dictionary.features;

  const features = [
    {
      icon: Truck,
      text: t.freeShipping,
      color: "text-[#0891b2]",
    },
    {
      icon: ShieldCheck,
      text: t.safeGuarantee,
      color: "text-green-600",
    },
    {
      icon: Award,
      text: t.warranty,
      color: "text-amber-500",
    },
    {
      icon: Headphones,
      text: t.support,
      color: "text-[#ea580c]",
    },
  ];

  return (
    <section className="py-8 bg-gray-100 border-t border-gray-200">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div
                className={`w-14 h-14 rounded-full bg-white shadow-md flex items-center justify-center mb-3 ${feature.color}`}
              >
                <feature.icon className="w-6 h-6" />
              </div>
              <p className="text-gray-700 text-sm font-medium">{feature.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
