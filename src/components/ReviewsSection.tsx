import { Star } from "lucide-react";

const reviews = [
  {
    name: "Anonymous",
    badge: "",
    text: "NF Pizza is a hidden gem with mouth-watering flavors, fresh ingredients, and perfectly baked crusts. One visit is enough to fall in love—definitely a must-try spot for every pizza lover! 🍕🔥",
    rating: 5,
  },
  {
    name: "Faisal Elahi",
    badge: "Local Guide",
    text: "Taste was good 💯. Perfect for dinner.",
    rating: 5,
  },
];

const ReviewsSection = () => (
  <section className="py-24 bg-muted/20">
    <div className="container mx-auto px-4">
      <div className="text-center mb-16">
        <p className="font-body text-sm uppercase tracking-[0.3em] text-secondary font-semibold mb-3">Testimonials</p>
        <h2 className="font-display text-5xl sm:text-6xl text-foreground">WHAT OUR PIZZA LOVERS SAY</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {reviews.map((r) => (
          <div key={r.name} className="bg-card border border-border rounded-xl p-8 space-y-4 hover:border-primary/40 transition-colors">
            <div className="flex gap-1">
              {Array.from({ length: r.rating }).map((_, i) => (
                <Star key={i} size={18} className="fill-secondary text-secondary" />
              ))}
            </div>
            <p className="font-body text-sm text-muted-foreground leading-relaxed italic">"{r.text}"</p>
            <div>
              <p className="font-body text-sm font-semibold text-foreground">{r.name}</p>
              {r.badge && <p className="font-body text-xs text-secondary">{r.badge}</p>}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ReviewsSection;
