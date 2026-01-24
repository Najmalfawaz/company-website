"use client";

import { useLocale } from "@/lib/i18n/locale-context";
import Image from "next/image";

export function HeroBanner() {
  const { dictionary, direction } = useLocale();
  const t = dictionary.hero;

  return (
    <section 
      className="relative overflow-hidden bg-no-repeat bg-cover bg-center h-[400px] md:h-[500px]" 
      style={{ 
        backgroundImage: 'url(/images/ramadan-sale.png)',
      }}
    >
      {/* This section is intentionally left blank to display the background image. */}
    </section>
  );
}
