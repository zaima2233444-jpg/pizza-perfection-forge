import heroPizza from "@/assets/hero-pizza.jpg";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <img src={heroPizza} alt="Delicious NF Pizza" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/40" />
      </div>

      <div className="relative container mx-auto px-4 pt-24">
        <div className="max-w-2xl space-y-6 animate-fade-in-up">
          <p className="font-body text-sm uppercase tracking-[0.3em] text-secondary font-semibold">
            Best Pizza in New Karachi
          </p>
          <h1 className="font-display text-6xl sm:text-7xl lg:text-8xl leading-none text-foreground">
            TASTE THE <span className="text-gradient-fire">FIRE</span> IN EVERY SLICE
          </h1>
          <p className="font-body text-lg text-muted-foreground max-w-md leading-relaxed">
            Hand-crafted pizzas made with premium ingredients. Casual dining, perfect for kids, and ideal for quick bites.
          </p>
          <div className="flex flex-wrap gap-4 pt-4">
            <a
              href="https://wa.me/923345892999?text=Hi%2C%20I%20would%20like%20to%20place%20an%20order"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-fire px-8 py-4 rounded-lg font-body text-base font-bold text-primary-foreground hover:opacity-90 transition-opacity shadow-glow"
            >
              Order Now
            </a>
            <a
              href="#menu"
              className="border border-border px-8 py-4 rounded-lg font-body text-base font-semibold text-foreground hover:bg-muted transition-colors"
            >
              View Menu
            </a>
          </div>

          <div className="flex gap-6 pt-6">
            {["Casual", "Good for Kids", "Quick Bites"].map((tag) => (
              <span key={tag} className="font-body text-xs uppercase tracking-widest text-muted-foreground border border-border rounded-full px-4 py-1.5">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
