import { PRODUCTS } from '@/data';
import SectionHeading from '../ui/SectionHeading';
import ProductCard from '../ui/ProductCard';

export default function FeaturedProducts() {
  const featuredProducts = PRODUCTS.filter(p => p.isFeatured).slice(0, 4);

  return (
    <section className="py-24 bg-white border-t border-primary/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading 
          title="Featured Products" 
          subtitle="Discover our most popular and highly recommended materials for exceptional interiors."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
