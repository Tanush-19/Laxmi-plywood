import { BUSINESS_INFO } from '@/data';
import ContactCTA from '@/components/ui/ContactCTA';
import WhyChooseUs from '@/components/home/WhyChooseUs';

export default function About() {
  return (
    <div className="pt-32 pb-0 min-h-screen bg-background">
      
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <div>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-primary mb-6">
              About <span className="text-accent">Laxmi Plywood</span>
            </h1>
            
            <div className="space-y-6 text-lg text-primary/80 leading-relaxed">
              <p>
                {BUSINESS_INFO.description}
              </p>
              <p>
                Welcome to Laxmi Plywood, your trusted destination for premium interior and architectural materials. We understand that every space tells a story, and the materials you choose are the foundation of that narrative.
              </p>
              <p>
                Our showroom offers a meticulously curated selection of plywood, decorative laminates, doors, and hardware. We cater to homeowners, interior designers, architects, and contractors who refuse to compromise on quality.
              </p>
              <p>
                With a commitment to excellence and a deep understanding of industry trends, our experts are here to guide you through our extensive catalogue, ensuring you find the perfect match for both your aesthetic vision and functional requirements.
              </p>
            </div>
            
            <div className="mt-12 grid grid-cols-2 gap-8 border-t border-primary/10 pt-8">
              <div>
                <h4 className="font-heading text-3xl font-bold text-accent mb-2">Premium</h4>
                <p className="text-primary/70 font-medium">Quality Materials</p>
              </div>
              <div>
                <h4 className="font-heading text-3xl font-bold text-accent mb-2">Expert</h4>
                <p className="text-primary/70 font-medium">Consultation</p>
              </div>
            </div>
          </div>
          
          <div className="relative h-[600px] rounded-3xl overflow-hidden shadow-xl">
            <img 
              src="https://images.unsplash.com/photo-1517705008128-361805f42e86?auto=format&fit=crop&q=80&w=1200" 
              alt="Laxmi Plywood Showroom" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-primary/20 mix-blend-multiply" />
          </div>
          
        </div>
      </div>

      <WhyChooseUs />
      
      <ContactCTA />
    </div>
  );
}
