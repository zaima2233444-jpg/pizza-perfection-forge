import { Star } from "lucide-react";

const ReviewsSection = () => (
  <section className="py-24 bg-muted/20">
    <div className="container mx-auto px-4">
      <div className="text-center mb-16">
        <p className="font-body text-sm uppercase tracking-[0.3em] text-secondary font-semibold mb-3">Testimonials</p>
        <h2 className="font-display text-5xl sm:text-6xl text-foreground">WHAT OUR PIZZA LOVERS SAY</h2>
      </div>

      <div className="max-w-2xl mx-auto text-center space-y-6">
        <div className="inline-flex items-center gap-2 bg-card border border-border rounded-full px-6 py-3">
          <span className="font-display text-3xl text-foreground">5.0</span>
          <div className="flex gap-0.5">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} size={20} className="fill-secondary text-secondary" />
            ))}
          </div>
          <span className="font-body text-sm text-muted-foreground ml-1">Rated on Google</span>
        </div>

        <p className="font-body text-lg text-muted-foreground leading-relaxed max-w-lg mx-auto">
          Our customers love the mouth-watering flavors, fresh ingredients, and perfectly baked crusts!
        </p>
      </div>
    </div>
  </section>
);

export default ReviewsSection;
