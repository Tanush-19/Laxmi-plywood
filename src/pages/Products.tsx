import { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { PRODUCTS, CATEGORIES } from '@/data';
import type { Category } from '@/types';
import ProductCard from '@/components/ui/ProductCard';
import ContactCTA from '@/components/ui/ContactCTA';
import { Search } from 'lucide-react';

export default function Products() {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialCategory = searchParams.get('category') as Category | 'All';
  
  const [activeCategory, setActiveCategory] = useState<Category | 'All'>(initialCategory || 'All');
  const [searchQuery, setSearchQuery] = useState('');

  const allCategories: (Category | 'All')[] = ['All', ...CATEGORIES.map(c => c.name)];

  const handleCategoryChange = (cat: Category | 'All') => {
    setActiveCategory(cat);
    if (cat === 'All') {
      searchParams.delete('category');
    } else {
      searchParams.set('category', cat);
    }
    setSearchParams(searchParams);
  };

  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter(product => {
      const matchesCategory = activeCategory === 'All' || product.category === activeCategory;
      const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                            product.features.some(f => f.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  return (
    <div className="pt-32 pb-16 min-h-screen bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mb-12 text-center">
        <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-primary mb-6">
          Our Products
        </h1>
        <p className="text-lg text-primary/70 max-w-2xl mx-auto mb-12">
          Explore our extensive range of premium materials designed to bring your architectural and interior visions to life.
        </p>

        {/* Filters and Search */}
        <div className="flex flex-col lg:flex-row justify-between items-center gap-6 mb-12">
          
          <div className="flex flex-wrap justify-center gap-2">
            {allCategories.map(cat => (
              <button
                key={cat}
                onClick={() => handleCategoryChange(cat)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                  activeCategory === cat 
                    ? 'bg-primary text-white shadow-md' 
                    : 'bg-white text-primary border border-primary/10 hover:border-primary/30'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="relative w-full max-w-md">
            <input 
              type="text" 
              placeholder="Search products, features..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white border border-primary/10 rounded-full pl-12 pr-4 py-3 outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all"
            />
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-primary/40" />
          </div>

        </div>

        {/* Product Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8 text-left">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="py-20 text-center bg-white rounded-2xl border border-primary/5">
            <h3 className="text-xl font-bold text-primary mb-2">No products found</h3>
            <p className="text-primary/60">Try adjusting your search or category filters.</p>
            <button 
              onClick={() => {
                setSearchQuery('');
                handleCategoryChange('All');
              }}
              className="mt-6 text-accent font-medium hover:text-primary transition-colors"
            >
              Clear filters
            </button>
          </div>
        )}
      </div>

      <ContactCTA />
    </div>
  );
}
