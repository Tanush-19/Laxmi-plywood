import { Link } from 'react-router-dom';
import { MapPin, Phone, MessageCircle } from 'lucide-react';
import { BUSINESS_INFO, generatePhoneLink, generateWhatsAppLink } from '@/data';

export default function Footer() {
  return (
    <footer className="bg-primary text-background pt-16 pb-24 md:pb-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          
          <div className="md:col-span-1">
            <h3 className="font-heading text-2xl font-bold tracking-tight mb-4 text-white">
              {BUSINESS_INFO.name}
            </h3>
            <p className="text-white/70 text-sm leading-relaxed mb-6">
              {BUSINESS_INFO.description}
            </p>
          </div>

          <div>
            <h4 className="font-heading text-lg font-semibold mb-4 text-white">Quick Links</h4>
            <ul className="space-y-3">
              {['Home', 'Products', 'About', 'Gallery', 'Contact'].map((item) => (
                <li key={item}>
                  <Link 
                    to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                    className="text-white/70 hover:text-accent transition-colors text-sm"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading text-lg font-semibold mb-4 text-white">Categories</h4>
            <ul className="space-y-3">
              {['Plywood', 'Laminates', 'Doors', 'MDF & Boards', 'Hardware'].map((item) => (
                <li key={item}>
                  <Link 
                    to="/products"
                    className="text-white/70 hover:text-accent transition-colors text-sm"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading text-lg font-semibold mb-4 text-white">Contact Us</h4>
            <ul className="space-y-4">
              <li>
                <a href={generatePhoneLink()} className="flex items-start gap-3 text-white/70 hover:text-accent transition-colors text-sm group">
                  <Phone className="w-5 h-5 text-accent mt-0.5 group-hover:scale-110 transition-transform" />
                  <span>{BUSINESS_INFO.phone}</span>
                </a>
              </li>
              <li>
                <a href={generateWhatsAppLink('Hi Laxmi Plywood')} target="_blank" rel="noopener noreferrer" className="flex items-start gap-3 text-white/70 hover:text-accent transition-colors text-sm group">
                  <MessageCircle className="w-5 h-5 text-accent mt-0.5 group-hover:scale-110 transition-transform" />
                  <span>{BUSINESS_INFO.whatsapp}</span>
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3 text-white/70 text-sm">
                  <MapPin className="w-5 h-5 text-accent mt-0.5 shrink-0" />
                  <span>{BUSINESS_INFO.address}</span>
                </div>
              </li>
            </ul>
          </div>

        </div>
        
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/50 text-sm">
            © {new Date().getFullYear()} {BUSINESS_INFO.name}. All rights reserved.
          </p>
          <div className="flex gap-6">
            <span className="text-white/50 text-sm">[SOCIAL ICONS PLACEHOLDER]</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
