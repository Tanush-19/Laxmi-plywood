import SectionHeading from '../ui/SectionHeading';
import { ShieldCheck, Layers, Users, HeartHandshake } from 'lucide-react';

const FEATURES = [
  {
    icon: ShieldCheck,
    title: 'Quality Products',
    description: 'We source only the best materials to ensure durability and long-lasting beauty for your projects.'
  },
  {
    icon: Layers,
    title: 'Wide Product Range',
    description: 'From premium plywood to decorative laminates and hardware, find everything under one roof.'
  },
  {
    icon: Users,
    title: 'Expert Guidance',
    description: 'Our experienced team helps you select the exact materials suited for your specific requirements.'
  },
  {
    icon: HeartHandshake,
    title: 'Customer Focus',
    description: 'We believe in building relationships through transparent dealings and exceptional service.'
  }
];

export default function WhyChooseUs() {
  return (
    <section className="py-24 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading 
          title="Why Choose Laxmi Plywood?" 
          centered
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mt-16">
          {FEATURES.map((feature, idx) => (
            <div key={idx} className="flex flex-col items-center text-center group">
              <div className="w-20 h-20 rounded-full bg-white shadow-sm border border-primary/5 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:border-accent/30 group-hover:shadow-md transition-all duration-300">
                <feature.icon className="w-8 h-8 text-accent" />
              </div>
              <h3 className="font-heading text-xl font-bold text-primary mb-3">
                {feature.title}
              </h3>
              <p className="text-primary/70 leading-relaxed text-sm">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
