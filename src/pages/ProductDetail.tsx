import { useParams, Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { menuItems, getWhatsAppLink } from "@/data/menu";
import WhatsAppButton from "@/components/WhatsAppButton";

const ProductDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const item = menuItems.find((m) => m.slug === slug);

  if (!item) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center space-y-4">
          <h1 className="font-display text-4xl text-foreground">Item Not Found</h1>
          <Link to="/#menu" className="inline-block font-body text-sm text-secondary hover:underline">
            ← Back to Menu
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="sticky top-0 z-40 bg-background/90 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-4 py-4 flex items-center gap-4">
          <Link to="/#menu" className="flex items-center gap-2 font-body text-sm text-muted-foreground hover:text-foreground transition-colors">
            <ArrowLeft size={18} />
            Back to Menu
          </Link>
          <span className="font-display text-xl text-gradient-fire ml-auto">NF PIZZA</span>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          <div className="rounded-xl overflow-hidden border border-border">
            <img src={item.img} alt={item.name} className="w-full aspect-square object-cover" />
          </div>

          <div className="space-y-6 py-4">
            <div>
              <h1 className="font-display text-5xl text-foreground mb-2">{item.name}</h1>
              <p className="font-display text-3xl text-gradient-fire">{item.price}</p>
            </div>

            <p className="font-body text-base text-muted-foreground leading-relaxed">{item.desc}</p>

            <a
              href={getWhatsAppLink(item.name, item.price)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-gradient-fire px-10 py-4 rounded-lg font-body text-base font-bold text-primary-foreground hover:opacity-90 transition-opacity shadow-glow"
            >
              Order Now
            </a>
          </div>
        </div>
      </div>

      <WhatsAppButton />
    </div>
  );
};

export default ProductDetail;
