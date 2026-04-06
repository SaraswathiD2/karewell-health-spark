import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-hero text-primary-foreground pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div>
            <h3 className="font-heading text-xl font-bold mb-3">Karewell Hospital</h3>
            <p className="text-primary-foreground/70 text-sm leading-relaxed">
              Delivering compassionate, world-class healthcare. Your health is our priority — 24/7.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/70">
              {[
                { label: "Home", id: "hero" },
                { label: "Services", id: "services" },
                { label: "Doctors", id: "doctors" },
                { label: "Contact", id: "contact" },
              ].map((l) => (
                <li key={l.id}>
                  <button onClick={() => scrollTo(l.id)} className="hover:text-secondary transition-colors">
                    {l.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-semibold mb-4">Contact Info</h4>
            <ul className="space-y-3 text-sm text-primary-foreground/70">
              <li className="flex gap-2 items-start"><MapPin size={16} className="mt-0.5 shrink-0" /> 123 Healthcare Avenue, New Delhi</li>
              <li className="flex gap-2 items-center"><Phone size={16} className="shrink-0" /> +91 1234 567 890</li>
              <li className="flex gap-2 items-center"><Mail size={16} className="shrink-0" /> info@karewellhospital.com</li>
            </ul>
          </div>

          {/* 24/7 */}
          <div>
            <h4 className="font-heading font-semibold mb-4">24/7 Services</h4>
            <p className="text-primary-foreground/70 text-sm leading-relaxed">
              Our emergency department is open around the clock. Call us anytime for urgent medical assistance.
            </p>
            <div className="mt-4 inline-block px-4 py-2 rounded-lg bg-secondary text-secondary-foreground font-semibold text-sm">
              Emergency: +91 1234 567 890
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-6 text-center text-sm text-primary-foreground/50">
          © {new Date().getFullYear()} Karewell Hospital. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
