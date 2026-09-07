import { Link } from 'react-router-dom';
import SectionHeading from './SectionHeading';
import { generatePhoneLink } from '@/data';

export default function ContactCTA() {
  return (
    <section className="py-20 md:py-28 bg-primary relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-accent blur-3xl"></div>
        <div className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-secondary blur-3xl"></div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <SectionHeading
          title="Let's Build Something Great."
          subtitle="Looking for the right material for your next project? Get in touch with Laxmi Plywood for expert advice and premium quality."
          centered
          light
          className="mb-10 max-w-3xl mx-auto"
        />

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">

          {/* Google Maps */}
          <a
            href="https://maps.app.goo.gl/C5UtbJHSWVtBchFt7"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto bg-accent text-white px-8 py-4 rounded-full font-medium tracking-wide hover:bg-accent/90 transition-transform hover:-translate-y-1 active:translate-y-0"
          >
            Get Directions
          </a>

          {/* Phone Call */}
          <a
            href={generatePhoneLink()}
            className="w-full sm:w-auto bg-white/10 text-white backdrop-blur px-8 py-4 rounded-full font-medium tracking-wide hover:bg-white/20 transition-transform hover:-translate-y-1 active:translate-y-0 flex items-center justify-center gap-2"
          >
            Call Us
          </a>

        </div>
      </div>
    </section>
  );
}