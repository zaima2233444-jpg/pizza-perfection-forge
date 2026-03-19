import { getWhatsAppLink } from "@/data/menu";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const links = [
    { label: "Home", href: "#home" },
    { label: "Menu", href: "#menu" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border">
      <div className="container mx-auto flex items-center justify-between py-4 px-4">
        <a href="/#home" className="font-display text-3xl tracking-wider text-gradient-fire">
          NF PIZZA
        </a>

        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a key={l.href} href={`/${l.href}`} className="font-body text-sm uppercase tracking-widest text-muted-foreground hover:text-foreground transition-colors">
              {l.label}
            </a>
          ))}
          <a
            href={getWhatsAppLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-fire px-6 py-2.5 rounded-lg font-body text-sm font-semibold text-primary-foreground hover:opacity-90 transition-opacity"
          >
            Order Now
          </a>
        </div>

        <button onClick={() => setOpen(!open)} className="md:hidden text-foreground">
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-background border-t border-border px-4 pb-6 space-y-4">
          {links.map((l) => (
            <a key={l.href} href={`/${l.href}`} onClick={() => setOpen(false)} className="block font-body text-sm uppercase tracking-widest text-muted-foreground hover:text-foreground transition-colors py-2">
              {l.label}
            </a>
          ))}
          <a
            href={getWhatsAppLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="block text-center bg-gradient-fire px-6 py-2.5 rounded-lg font-body text-sm font-semibold text-primary-foreground"
          >
            Order Now
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
