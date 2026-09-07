import SectionHeading from '../ui/SectionHeading';
import { Star } from 'lucide-react';
import { REVIEWS } from '@/data';

export default function Reviews() {
  return (
    <section className="py-24 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="What Our Clients Say"
          centered
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {REVIEWS.map((review) => {
            const rating = Math.max(
              0,
              Math.min(5, Number(review.rating) || 0)
            );

            return (
              <div
                key={review.id}
                className="bg-white p-8 rounded-2xl border border-primary/5 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex gap-1 mb-6">
                  {Array.from({ length: rating }).map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-accent text-accent"
                    />
                  ))}
                </div>

                <p className="text-primary/80 italic leading-relaxed mb-6">
                  "{review.text}"
                </p>

                <div className="font-heading font-bold text-primary">
                  {review.name}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}