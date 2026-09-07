import Hero from '@/components/home/Hero';
import ProductCategories from '@/components/home/ProductCategories';
import FeaturedProducts from '@/components/home/FeaturedProducts';
import WhyChooseUs from '@/components/home/WhyChooseUs';
import Brands from '@/components/home/Brands';
import Location from '@/components/home/Location';
import Calculator from '@/components/home/Calculator';
import Reviews from '@/components/home/Reviews';
import ContactCTA from '@/components/ui/ContactCTA';

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />
      <ProductCategories />
      <FeaturedProducts />
      <WhyChooseUs />
      <Brands />
      <Location />
      <Calculator />
      <Reviews />
      <ContactCTA />
    </div>
  );
}
