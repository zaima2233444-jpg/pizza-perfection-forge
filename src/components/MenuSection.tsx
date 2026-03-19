import pizzaSignature from "@/assets/pizza-signature.jpg";
import pizzaBbq from "@/assets/pizza-bbq.jpg";
import pizzaMargherita from "@/assets/pizza-margherita.jpg";
import pizzaSides from "@/assets/pizza-sides.jpg";
import pizzaDrinks from "@/assets/pizza-drinks.jpg";

const categories = [
  {
    title: "Signature Pizzas",
    items: [
      { name: "Pepperoni Supreme", desc: "Loaded pepperoni, mushrooms, bell peppers & mozzarella", img: pizzaSignature },
      { name: "BBQ Chicken", desc: "Smoky BBQ sauce, grilled chicken, caramelized onions", img: pizzaBbq },
      { name: "Classic Margherita", desc: "Fresh tomatoes, mozzarella, basil on a crispy crust", img: pizzaMargherita },
    ],
  },
  {
    title: "Sides",
    items: [
      { name: "Chicken Wings", desc: "Crispy golden wings with your choice of sauce", img: pizzaSides },
      { name: "Garlic Bread", desc: "Buttery garlic bread baked to perfection", img: pizzaSides },
    ],
  },
  {
    title: "Drinks",
    items: [
      { name: "Soft Drinks", desc: "Coca-Cola, Fanta, Sprite & more", img: pizzaDrinks },
      { name: "Fresh Juices", desc: "Seasonal fresh juices to complement your meal", img: pizzaDrinks },
    ],
  },
];

const MenuSection = () => {
  return (
    <section id="menu" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="font-body text-sm uppercase tracking-[0.3em] text-secondary font-semibold mb-3">Our Menu</p>
          <h2 className="font-display text-5xl sm:text-6xl text-foreground">WHAT WE SERVE</h2>
        </div>

        {categories.map((cat) => (
          <div key={cat.title} className="mb-16">
            <h3 className="font-display text-3xl text-gradient-fire mb-8">{cat.title}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {cat.items.map((item) => (
                <div key={item.name} className="group bg-card rounded-xl overflow-hidden border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-glow">
                  <div className="h-52 overflow-hidden">
                    <img src={item.img} alt={item.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  <div className="p-5">
                    <h4 className="font-display text-xl text-foreground mb-1">{item.name}</h4>
                    <p className="font-body text-sm text-muted-foreground">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}

        <div className="text-center">
          <a
            href="https://www.foodpanda.pk"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-gradient-fire px-10 py-4 rounded-lg font-body text-base font-bold text-primary-foreground hover:opacity-90 transition-opacity shadow-glow"
          >
            Order Now on Foodpanda
          </a>
        </div>
      </div>
    </section>
  );
};

export default MenuSection;
