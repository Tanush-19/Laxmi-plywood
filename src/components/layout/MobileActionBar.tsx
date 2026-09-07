import { Phone, MessageCircle, MapPin } from 'lucide-react';
import { generatePhoneLink, generateWhatsAppLink } from '@/data';

export default function MobileActionBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-white border-t border-primary/10 shadow-[0_-4px_20px_rgba(0,0,0,0.05)] md:hidden safe-area-bottom">
      <div className="grid grid-cols-3 h-16">
        
        {/* Call */}
        <a
          href={generatePhoneLink()}
          className="flex flex-col items-center justify-center gap-1 text-primary hover:text-accent transition-colors border-r border-primary/5 active:bg-primary/5"
        >
          <Phone className="w-5 h-5" />
          <span className="text-[10px] font-medium uppercase tracking-wider">
            Call
          </span>
        </a>

        {/* WhatsApp */}
        <a
          href={generateWhatsAppLink('Hi Laxmi Plywood')}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center gap-1 text-white bg-accent hover:bg-accent/90 transition-colors active:bg-accent/80"
        >
          <MessageCircle className="w-5 h-5" />
          <span className="text-[10px] font-medium uppercase tracking-wider">
            WhatsApp
          </span>
        </a>

        {/* Directions */}
        <a
          href="https://maps.app.goo.gl/C5UtbJHSWVtBchFt7"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center gap-1 text-primary hover:text-accent transition-colors border-l border-primary/5 active:bg-primary/5"
        >
          <MapPin className="w-5 h-5" />
          <span className="text-[10px] font-medium uppercase tracking-wider">
            Directions
          </span>
        </a>

      </div>
    </div>
  );
}