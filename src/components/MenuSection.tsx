import { Link } from "react-router-dom";
import { menuItems, getWhatsAppLink } from "@/data/menu";

const MenuSection = () => {
  return (
    <section id="menu" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="font-body text-sm uppercase tracking-[0.3em] text-secondary font-semibold mb-3">Our Menu</p>
          <h2 className="font-display text-5xl sm:text-6xl text-foreground">WHAT WE SERVE</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {menuItems.map((item) => (
            <Link to={`/product/${item.slug}`} key={item.slug} className="group bg-card rounded-xl overflow-hidden border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-glow cursor-pointer">
              <div className="h-52 overflow-hidden">
                <img src={item.img} alt={item.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-5">
                <div className="flex items-center justify-between mb-1">
                  <h4 className="font-display text-xl text-foreground">{item.name}</h4>
                  <span className="font-display text-lg text-secondary">{item.price}</span>
                </div>
                <p className="font-body text-sm text-muted-foreground">{item.desc}</p>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href={getWhatsAppLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-gradient-fire px-10 py-4 rounded-lg font-body text-base font-bold text-primary-foreground hover:opacity-90 transition-opacity shadow-glow"
          >
            Order Now
          </a>
        </div>
      </div>
    </section>
  );
};

export default MenuSection;
