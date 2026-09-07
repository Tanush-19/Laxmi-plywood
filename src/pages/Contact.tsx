import Location from '@/components/home/Location';
import { generatePhoneLink, generateWhatsAppLink, BUSINESS_INFO } from '@/data';
import { Phone, MessageCircle, Mail, MapPin } from 'lucide-react';

export default function Contact() {
  const defaultWaMessage = "Hi Laxmi Plywood, I would like to get in touch.";

  return (
    <div className="pt-32 pb-0 min-h-screen bg-background">
      
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mb-20 text-center">
        <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-primary mb-6">
          Let's Build Together
        </h1>
        <p className="text-lg text-primary/70 max-w-2xl mx-auto">
          Have a project in mind or need expert advice on materials? We're here to help you make the right choice.
        </p>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          
          <a href={generatePhoneLink()} className="bg-white p-8 rounded-2xl border border-primary/5 text-center group hover:shadow-md transition-all hover:-translate-y-1">
            <div className="w-16 h-16 mx-auto bg-primary/5 rounded-full flex items-center justify-center mb-6 group-hover:bg-accent/10 transition-colors">
              <Phone className="w-8 h-8 text-accent" />
            </div>
            <h3 className="font-bold text-primary text-xl mb-2">Call Us</h3>
            <p className="text-primary/60 text-sm mb-4">Mon-Sat, {BUSINESS_INFO.hours}</p>
            <p className="font-semibold text-primary">{BUSINESS_INFO.phone}</p>
          </a>
          
          <a href={generateWhatsAppLink(defaultWaMessage)} target="_blank" rel="noopener noreferrer" className="bg-white p-8 rounded-2xl border border-primary/5 text-center group hover:shadow-md transition-all hover:-translate-y-1">
            <div className="w-16 h-16 mx-auto bg-primary/5 rounded-full flex items-center justify-center mb-6 group-hover:bg-accent/10 transition-colors">
              <MessageCircle className="w-8 h-8 text-accent" />
            </div>
            <h3 className="font-bold text-primary text-xl mb-2">WhatsApp</h3>
            <p className="text-primary/60 text-sm mb-4">Quick replies for quotes</p>
            <p className="font-semibold text-primary">{BUSINESS_INFO.whatsapp}</p>
          </a>
          
          <div className="bg-white p-8 rounded-2xl border border-primary/5 text-center group hover:shadow-md transition-all hover:-translate-y-1">
            <div className="w-16 h-16 mx-auto bg-primary/5 rounded-full flex items-center justify-center mb-6 group-hover:bg-accent/10 transition-colors">
              <Mail className="w-8 h-8 text-accent" />
            </div>
            <h3 className="font-bold text-primary text-xl mb-2">Email</h3>
            <p className="text-primary/60 text-sm mb-4">Drop us a line anytime</p>
            <p className="font-semibold text-primary">{BUSINESS_INFO.email}</p>
          </div>
          
          <div className="bg-white p-8 rounded-2xl border border-primary/5 text-center group hover:shadow-md transition-all hover:-translate-y-1">
            <div className="w-16 h-16 mx-auto bg-primary/5 rounded-full flex items-center justify-center mb-6 group-hover:bg-accent/10 transition-colors">
              <MapPin className="w-8 h-8 text-accent" />
            </div>
            <h3 className="font-bold text-primary text-xl mb-2">Showroom</h3>
            <p className="text-primary/60 text-sm mb-4">Visit for physical samples</p>
            <p className="font-semibold text-primary text-sm">{BUSINESS_INFO.address}</p>
          </div>
          
        </div>
      </div>

      <Location />
    </div>
  );
}
