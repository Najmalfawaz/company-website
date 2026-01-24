import { TestimonialCard } from "@/components/cards/testimonial-card";
import { SectionHeader } from "@/components/pages/home/section-header";
import { useLocale } from "@/lib/i18n/locale-context";

export function Testimonials() {
  const { dictionary } = useLocale();
  const t = dictionary.testimonials;

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <SectionHeader title={t.title} />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <TestimonialCard
            text={t.review1.text}
            author={t.review1.author}
          />
          <TestimonialCard
            text={t.review2.text}
            author={t.review2.author}
          />
          <TestimonialCard
            text={t.review3.text}
            author={t.review3.author}
          />
          <TestimonialCard
            text={t.review4.text}
            author={t.review4.author}
          />
        </div>
      </div>
    </section>
  );
}
