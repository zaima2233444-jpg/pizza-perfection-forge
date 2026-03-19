import foodGyro from "@/assets/food-gyro.jpg";
import foodZinger from "@/assets/food-zinger.jpg";

const menuItems = [
  { name: "Crispy Gyro", price: "PKR 250", desc: "Savory, seasoned meat wrapped in warm pita with fresh vegetables and creamy sauce.", img: foodGyro },
  { name: "Gyro", price: "PKR 250", desc: "A flavorful wrap filled with seasoned meat, fresh vegetables, and tangy sauce.", img: foodGyro },
  { name: "Zinger Burger", price: "PKR 300", desc: "Crispy chicken fillet sandwich with spicy sauce, lettuce, and a soft bun.", img: foodZinger },
  { name: "Zinger Burger With Cheese", price: "PKR 350", desc: "Crispy chicken patty, melted cheese, fresh lettuce, and spicy sauce.", img: foodZinger },
];

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
            <div key={item.name} className="group bg-card rounded-xl overflow-hidden border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-glow">
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
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="https://wa.me/923345892999?text=Hi%2C%20I%20would%20like%20to%20place%20an%20order"
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
