import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";

const navItems = ["Home", "Services", "Doctors", "Departments", "Contact Us"];

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    el?.scrollIntoView({ behavior: "smooth" });
    setMobileOpen(false);
  };

  const idMap: Record<string, string> = {
    Home: "hero",
    Services: "services",
    Doctors: "doctors",
    Departments: "departments",
    "Contact Us": "contact",
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
      <div className="container mx-auto flex items-center justify-between h-16 px-4">
        <button onClick={() => scrollTo("hero")} className="flex items-center gap-2">
          <div className="w-9 h-9 rounded-lg bg-primary flex items-center justify-center">
            <span className="font-heading font-bold text-primary-foreground text-lg">K</span>
          </div>
          <div className="leading-tight">
            <span className="font-heading font-bold text-primary text-lg">Karewell</span>
            <span className="block text-[10px] font-medium text-secondary tracking-widest uppercase -mt-0.5">Hospital</span>
          </div>
        </button>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <button
              key={item}
              onClick={() => scrollTo(idMap[item])}
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              {item}
            </button>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-2 text-sm text-primary font-medium">
          <Phone size={16} />
          <span>+91 1234 567 890</span>
        </div>

        {/* Mobile toggle */}
        <button className="md:hidden text-foreground" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {mobileOpen && (
        <nav className="md:hidden bg-background border-t border-border px-4 pb-4">
          {navItems.map((item) => (
            <button
              key={item}
              onClick={() => scrollTo(idMap[item])}
              className="block w-full text-left py-3 text-sm font-medium text-muted-foreground hover:text-primary border-b border-border last:border-0"
            >
              {item}
            </button>
          ))}
        </nav>
      )}
    </header>
  );
};

export default Header;
