"use client";

import { useLocale } from "@/lib/i18n/locale-context";
import { Play } from "lucide-react";

export function AboutSection() {
  const { dictionary, direction } = useLocale();
  const t = dictionary.about;

  return (
    <section className="py-12 bg-[#0891b2]">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          {/* Video Section */}
          <div className="w-full lg:w-1/2">
            <div className="relative aspect-video bg-gray-900 rounded-xl overflow-hidden group cursor-pointer">
              {/* Video Thumbnail Placeholder */}
              <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-20 h-20 mx-auto mb-4 bg-white/20 rounded-full flex items-center justify-center group-hover:bg-white/30 transition-colors">
                    <Play className="w-8 h-8 text-white ms-1" />
                  </div>
                  <p className="text-white/80 text-sm">{t.watchVideo}</p>
                </div>
              </div>

              {/* Corner Badge */}
              <div className="absolute top-4 start-4 bg-[#0891b2] text-white px-3 py-1 rounded text-sm font-medium">
                Mariot Group
              </div>

              {/* Experience Badge */}
              <div className="absolute bottom-4 end-4 bg-white text-[#0891b2] px-4 py-2 rounded-lg shadow-lg">
                <p className="font-bold text-sm">{t.yearsExperience}</p>
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className="w-full lg:w-1/2 text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">{t.title}</h2>
            <p className="text-white/90 leading-relaxed text-base md:text-lg">
              {t.description}
            </p>
            <button className="mt-6 px-6 py-3 bg-[#ea580c] hover:bg-orange-700 text-white font-semibold rounded-lg transition-colors">
              {dictionary.nav.aboutUs}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
