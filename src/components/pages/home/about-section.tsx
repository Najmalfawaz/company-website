'use client';

import { useLocale } from "@/lib/i18n/locale-context";
import { Play } from "lucide-react";

export function AboutSection() {
  const { dictionary, direction } = useLocale();
  const t = dictionary.about;

  return (
    <section
      className="relative py-20 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/about-us-bg.jpg')" }}
    >
      <div className="absolute inset-0 bg-black/50" />
      <div className="relative container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
          {/* Video Section */}
          <div className="w-full lg:w-1/2">
            <div className="relative aspect-video bg-gray-900 rounded-xl overflow-hidden group cursor-pointer shadow-2xl">
              {/* Video Thumbnail Placeholder */}
              <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-24 h-24 mx-auto mb-4 bg-white/20 rounded-full flex items-center justify-center group-hover:bg-white/30 transition-colors">
                    <Play className="w-10 h-10 text-white ms-1" />
                  </div>
                  <p className="text-white/80 text-base">{t.watchVideo}</p>
                </div>
              </div>

              {/* Corner Badge */}
              <div className="absolute top-6 start-6 bg-[#0891b2] text-white px-4 py-2 rounded-md text-base font-medium">
                Mariot Group
              </div>

              {/* Experience Badge */}
              <div className="absolute bottom-6 end-6 bg-white text-[#0891b2] px-5 py-3 rounded-lg shadow-lg">
                <p className="font-bold text-base">{t.yearsExperience}</p>
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className="w-full lg:w-1/2 text-white">
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              {t.title}
            </h2>
            <p className="text-gray-200 leading-loose text-lg md:text-xl">
              {t.description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
