import { MapPin, Phone, Clock } from "lucide-react";
import { useState, FormEvent } from "react";

const ContactSection = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section id="contact" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="font-body text-sm uppercase tracking-[0.3em] text-secondary font-semibold mb-3">Get In Touch</p>
          <h2 className="font-display text-5xl sm:text-6xl text-foreground">CONTACT US</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <div className="bg-gradient-fire p-3 rounded-lg shrink-0">
                <MapPin className="text-primary-foreground" size={20} />
              </div>
              <div>
                <h4 className="font-display text-lg text-foreground">Location</h4>
                <p className="font-body text-sm text-muted-foreground">Sector 5c/4, Sector 5 L, New Karachi Town, Karachi</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-gradient-fire p-3 rounded-lg shrink-0">
                <Phone className="text-primary-foreground" size={20} />
              </div>
              <div>
                <h4 className="font-display text-lg text-foreground">Phone</h4>
                <a href="tel:+923345892999" className="font-body text-sm text-muted-foreground hover:text-secondary transition-colors">
                  +92 334 5892999
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-gradient-fire p-3 rounded-lg shrink-0">
                <Clock className="text-primary-foreground" size={20} />
              </div>
              <div>
                <h4 className="font-display text-lg text-foreground">Atmosphere</h4>
                <p className="font-body text-sm text-muted-foreground">Casual · Good for Kids · Quick Bites</p>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="bg-card rounded-xl border border-border p-8 space-y-5">
            <input
              type="text"
              placeholder="Your Name"
              required
              className="w-full bg-muted border border-border rounded-lg px-4 py-3 font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <input
              type="email"
              placeholder="Your Email"
              required
              className="w-full bg-muted border border-border rounded-lg px-4 py-3 font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <textarea
              rows={4}
              placeholder="Your Message"
              required
              className="w-full bg-muted border border-border rounded-lg px-4 py-3 font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary resize-none"
            />
            <button
              type="submit"
              className="w-full bg-gradient-fire py-3 rounded-lg font-body text-sm font-bold text-primary-foreground hover:opacity-90 transition-opacity"
            >
              {submitted ? "Message Sent! ✓" : "Send Message"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
