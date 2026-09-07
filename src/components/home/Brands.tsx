export default function Brands() {
  return (
    <section className="py-20 bg-white border-t border-primary/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-heading text-2xl md:text-3xl font-bold tracking-tight text-primary mb-12">
          Brands We Work With
        </h2>
        
        <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
          {/* Using text placeholders since we don't have real logos */}
          {[1, 2, 3, 4, 5].map((item) => (
            <div key={item} className="flex items-center justify-center w-32 h-16 border border-primary/10 rounded-lg bg-background font-medium text-sm text-primary/40">
              [BRAND LOGO]
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
