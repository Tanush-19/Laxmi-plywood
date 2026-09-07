import { useState } from 'react';
import SectionHeading from '../ui/SectionHeading';
import { generateWhatsAppLink } from '@/data';
import { MessageCircle, Calculator as CalcIcon } from 'lucide-react';

export default function Calculator() {
  const [length, setLength] = useState<string>('');
  const [width, setWidth] = useState<string>('');
  const [qty, setQty] = useState<string>('1');
  const [unit, setUnit] = useState<'feet' | 'meters'>('feet');

  const calculateArea = () => {
    const l = parseFloat(length);
    const w = parseFloat(width);
    const q = parseInt(qty);
    
    if (isNaN(l) || isNaN(w) || isNaN(q)) return null;
    
    let area = l * w * q;
    
    if (unit === 'meters') {
      // Convert square meters to square feet (1 sq.m = 10.7639 sq.ft)
      area = area * 10.7639;
    }
    
    return area.toFixed(2);
  };

  const totalArea = calculateArea();
  const waMessage = totalArea 
    ? `Hi Laxmi Plywood, I need material for an approximate area of ${totalArea} sq.ft. Can you help me with a quote?`
    : `Hi Laxmi Plywood, I need help choosing materials for my project.`;

  return (
    <section className="py-24 bg-white border-y border-primary/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <div>
            <SectionHeading 
              title="Project Calculator" 
              subtitle="Quickly estimate the total area required for your project. This helps in understanding material requirements."
            />
            
            <div className="bg-background rounded-3xl p-8 md:p-10 border border-primary/5">
              <div className="grid grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-bold text-primary mb-2">Length</label>
                  <input 
                    type="number" 
                    value={length}
                    onChange={(e) => setLength(e.target.value)}
                    placeholder="0"
                    className="w-full bg-white border border-primary/10 rounded-xl px-4 py-3 outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-primary mb-2">Width</label>
                  <input 
                    type="number" 
                    value={width}
                    onChange={(e) => setWidth(e.target.value)}
                    placeholder="0"
                    className="w-full bg-white border border-primary/10 rounded-xl px-4 py-3 outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all"
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div>
                  <label className="block text-sm font-bold text-primary mb-2">Quantity</label>
                  <input 
                    type="number" 
                    value={qty}
                    min="1"
                    onChange={(e) => setQty(e.target.value)}
                    className="w-full bg-white border border-primary/10 rounded-xl px-4 py-3 outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-primary mb-2">Unit</label>
                  <div className="flex bg-white border border-primary/10 rounded-xl overflow-hidden p-1">
                    <button 
                      onClick={() => setUnit('feet')}
                      className={`flex-1 py-2 text-sm font-medium rounded-lg transition-colors ${unit === 'feet' ? 'bg-primary text-white' : 'text-primary hover:bg-primary/5'}`}
                    >
                      Feet
                    </button>
                    <button 
                      onClick={() => setUnit('meters')}
                      className={`flex-1 py-2 text-sm font-medium rounded-lg transition-colors ${unit === 'meters' ? 'bg-primary text-white' : 'text-primary hover:bg-primary/5'}`}
                    >
                      Meters
                    </button>
                  </div>
                </div>
              </div>

              <div className="bg-primary text-white rounded-2xl p-6 text-center">
                <span className="block text-white/70 text-sm font-medium uppercase tracking-wider mb-2">Approximate Area</span>
                <div className="font-heading text-4xl font-bold text-accent">
                  {totalArea ? `${totalArea} sq.ft` : '0.00 sq.ft'}
                </div>
              </div>
              
              <p className="text-center text-xs text-primary/50 mt-4">
                *This is an approximate calculation. Actual material usage may vary based on design and wastage.
              </p>
            </div>
          </div>
          
          <div className="bg-primary rounded-3xl p-10 md:p-16 text-center relative overflow-hidden h-full flex flex-col justify-center">
            <div className="absolute top-0 right-0 p-8 opacity-10">
              <CalcIcon className="w-64 h-64 text-white" />
            </div>
            
            <div className="relative z-10">
              <h3 className="font-heading text-3xl md:text-4xl font-bold text-white mb-6">
                Need help choosing the right material?
              </h3>
              <p className="text-white/70 mb-10 text-lg">
                Share your requirements with our experts and get a customized quote for your project.
              </p>
              <a 
                href={generateWhatsAppLink(waMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 bg-accent text-white px-8 py-4 rounded-full font-semibold tracking-wide hover:bg-accent/90 transition-transform hover:-translate-y-1 active:translate-y-0"
              >
                <MessageCircle className="w-5 h-5" />
                Get a Quote on WhatsApp
              </a>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
