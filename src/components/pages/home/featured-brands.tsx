'use client';

import { useLocale } from '@/lib/i18n/locale-context';
import Image from 'next/image';

const brandLogos = [
  { id: 'rational', name: 'RATIONAL', imageUrl: '/rational_brand.png' },
  { id: 'mbm', name: 'MBM', imageUrl: '/mbm_brand.png' },
  { id: 'brema', name: 'BREMA', imageUrl: '/brema_brand.png', isFeatured: true },
  { id: 'pitco', name: 'PITCO', imageUrl: '/pitco_brand.png' },
];

export function FeaturedBrands() {
  const { dictionary } = useLocale();

  return (
    <section className="py-8 bg-[#e0f7ff]">
      <div className="container mx-auto px-4">
        <div className="flex justify-center mb-8">
          <div className="bg-red-500 text-white rounded-full flex items-center justify-center py-2 px-6 shadow-lg">
            <h2 className="text-2xl font-bold">{dictionary.sections.featuredBrands}</h2>
            <div className="ml-4 w-8 h-8 rounded-full bg-white flex items-center justify-center">
              <Image src="/icon.svg" alt="icon" width={20} height={20} />
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-b from-blue-200 to-blue-300 rounded-2xl p-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {brandLogos.map((brand) => (
              <a
                key={brand.id}
                href={`/brand/${brand.id}`}
                className={`block bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 ${brand.isFeatured ? 'border-4 border-red-500' : ''}`}>
                <div className="relative w-full h-36">
                  <Image src={brand.imageUrl} alt={brand.name} layout="fill" objectFit="contain" className="p-2" />
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
