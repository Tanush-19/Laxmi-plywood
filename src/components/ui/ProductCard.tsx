import { Product } from '@/types';
import { generateWhatsAppLink } from '@/data';
import { Link } from 'react-router-dom';
import React from 'react';

interface ProductCardProps {
  product: Product;
  key?: React.Key;
}

export default function ProductCard({ product }: ProductCardProps) {
  const waMessage = `Hi Laxmi Plywood, I am interested in ${product.name} (${product.category}). Please share the details and price.`;
  
  return (
    <div className="group flex flex-col bg-white rounded-xl overflow-hidden border border-primary/5 shadow-sm hover:shadow-md transition-all duration-300 h-full">
      <div className="aspect-[4/3] overflow-hidden bg-primary/5 relative">
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute top-3 left-3 bg-white/90 backdrop-blur text-primary px-3 py-1 text-xs font-medium uppercase tracking-wider rounded-full">
          {product.category}
        </div>
      </div>
      
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="font-heading text-xl font-bold mb-2 text-primary group-hover:text-accent transition-colors">
          {product.name}
        </h3>
        
        <ul className="mb-6 space-y-1.5 flex-grow">
          {product.features.slice(0, 3).map((feature, idx) => (
            <li key={idx} className="text-sm text-primary/70 flex items-start gap-2">
              <span className="w-1 h-1 rounded-full bg-accent mt-2 shrink-0" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
        
        <div className="flex items-center justify-between mt-auto pt-4 border-t border-primary/5">
          <Link 
            to="/products" 
            className="text-sm font-semibold text-primary hover:text-accent transition-colors uppercase tracking-wider"
          >
            View Details
          </Link>
          <a 
            href={generateWhatsAppLink(waMessage)}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-semibold text-accent hover:text-primary transition-colors bg-accent/10 px-4 py-2 rounded-full"
          >
            Ask for Price
          </a>
        </div>
      </div>
    </div>
  );
}
