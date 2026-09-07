import SectionHeading from '../ui/SectionHeading';
import { MapPin, Clock, Phone, ExternalLink } from 'lucide-react';
import { BUSINESS_INFO, generatePhoneLink } from '@/data';

const MAPS_URL = 'https://maps.app.goo.gl/C5UtbJHSWVtBchFt7';

export default function Location() {
  return (
    <section className="py-24 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Location Details */}
          <div>
            <SectionHeading
              title="Visit Our Showroom"
              subtitle="Experience our materials firsthand. Our team is ready to help you find the right products for your project."
            />

            <div className="space-y-8 mt-10">

              {/* Address */}
              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 rounded-full bg-white shadow-sm flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-accent" />
                </div>

                <div>
                  <h4 className="font-bold text-primary mb-1 text-lg">
                    Address
                  </h4>

                  <p className="text-primary/70">
                    {BUSINESS_INFO.address}
                  </p>

                  <a
                    href={MAPS_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 text-accent font-semibold text-sm uppercase tracking-wider hover:text-primary transition-colors inline-flex items-center gap-1"
                  >
                    Get Directions
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>

              {/* Opening Hours */}
              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 rounded-full bg-white shadow-sm flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5 text-accent" />
                </div>

                <div>
                  <h4 className="font-bold text-primary mb-1 text-lg">
                    Opening Hours
                  </h4>

                  <p className="text-primary/70">
                    {BUSINESS_INFO.hours}
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 rounded-full bg-white shadow-sm flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5 text-accent" />
                </div>

                <div>
                  <h4 className="font-bold text-primary mb-1 text-lg">
                    Phone
                  </h4>

                  <a
                    href={generatePhoneLink()}
                    className="text-primary/70 hover:text-accent transition-colors block"
                  >
                    {BUSINESS_INFO.phone}
                  </a>
                </div>
              </div>

            </div>
          </div>

          {/* Google Maps */}
          <div className="h-[500px] rounded-3xl overflow-hidden border border-primary/10 relative bg-primary/5">

            <iframe
              src="https://www.google.com/maps?q=Laxmi%20Plywood&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Laxmi Plywood location"
            />

            {/* Open in Google Maps */}
            <a
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute bottom-5 left-1/2 -translate-x-1/2 bg-white text-primary px-6 py-3 rounded-full shadow-lg font-semibold text-sm hover:-translate-y-1 transition-transform flex items-center gap-2"
            >
              <MapPin className="w-4 h-4 text-accent" />
              Open in Google Maps
            </a>

          </div>

        </div>
      </div>
    </section>
  );
}