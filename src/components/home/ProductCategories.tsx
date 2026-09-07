import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';
import { CATEGORIES } from '@/data';

export default function ProductCategories() {
  return (
    <section className="py-24 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading 
          title="Everything You Need to Build Better" 
          subtitle="Explore our curated collection of premium materials, handpicked for durability and aesthetic excellence."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {CATEGORIES.map((category, index) => (
            <Link 
              key={category.name}
              to={`/products?category=${encodeURIComponent(category.name)}`}
              className={`group relative overflow-hidden rounded-2xl aspect-[4/5] block ${
                index === 0 || index === 3 ? 'md:col-span-2 lg:col-span-1' : ''
              }`}
            >
              <div className="absolute inset-0 z-0">
                <img 
                  src={category.image} 
                  alt={category.name}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500" />
              </div>
              
              <div className="absolute inset-0 z-10 flex flex-col justify-end p-8">
                <h3 className="font-heading text-3xl font-bold text-white mb-3">
                  {category.name}
                </h3>
                <p className="text-white/80 mb-6 text-sm max-w-xs transform translate-y-0 opacity-100 transition-all duration-300">
                  {category.description}
                </p>
                <div className="flex items-center gap-2 text-accent font-semibold text-sm uppercase tracking-wider group-hover:gap-4 transition-all">
                  <span>Explore</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
