import { Link } from 'react-router-dom';
import { ArrowRight, MessageCircle } from 'lucide-react';
import { generateWhatsAppLink } from '@/data';

export default function Hero() {
  const waMessage = "Hi Laxmi Plywood, I am looking for interior materials.";

  return (
    <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=2000" 
          alt="Premium interior materials" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-primary/70 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/50 to-transparent" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10 w-full pt-12 pb-24">
        <div className="max-w-3xl animate-in fade-in slide-in-from-bottom-8 duration-1000">
          <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md text-white/90 text-sm font-medium tracking-widest uppercase mb-6 border border-white/20">
            Premium Architectural Materials
          </span>
          <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white mb-6 leading-[1.1]">
            BUILD BETTER.<br />
            <span className="text-accent">BUILD WITH LAXMIPLYWOOD.</span>
          </h1>
          <p className="text-lg md:text-xl text-white/80 max-w-2xl mb-10 font-light leading-relaxed">
            Quality plywood, laminates, doors and interior materials for your next project. We provide the foundation for spaces that last.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <Link 
              to="/products"
              className="w-full sm:w-auto flex items-center justify-center gap-2 bg-white text-primary px-8 py-4 rounded-full font-semibold tracking-wide hover:bg-white/90 transition-transform hover:-translate-y-1 active:translate-y-0"
            >
              Explore Products
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a 
              href={generateWhatsAppLink(waMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto flex items-center justify-center gap-2 bg-accent/20 backdrop-blur-md text-white border border-accent/50 px-8 py-4 rounded-full font-semibold tracking-wide hover:bg-accent/30 transition-transform hover:-translate-y-1 active:translate-y-0"
            >
              <MessageCircle className="w-5 h-5" />
              WhatsApp Us
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center animate-bounce z-10 text-white/50">
        <span className="text-xs uppercase tracking-widest mb-2 font-medium">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-white/50 to-transparent" />
      </div>
    </section>
  );
}
