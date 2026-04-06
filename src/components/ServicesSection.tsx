import {
  Heart, Smile, Sun, Scissors, Stethoscope, Droplets,
  Activity, ShieldPlus, Baby, Beaker, Users, Bone,
  Syringe, Accessibility, Sparkles, Wind, CircleDot, Waves
} from "lucide-react";

const services = [
  { name: "Cardiology", icon: Heart },
  { name: "Dental & Maxillofacial Surgery", icon: Smile },
  { name: "Dermatology", icon: Sun },
  { name: "General & Laparoscopic Surgery", icon: Scissors },
  { name: "General Medicine", icon: Stethoscope },
  { name: "Hemato-Oncology", icon: Droplets },
  { name: "Medical & Surgical Gastroenterology", icon: Activity },
  { name: "Medical & Surgical Oncology", icon: ShieldPlus },
  { name: "Neonatology & Pediatrics", icon: Baby },
  { name: "Nephrology", icon: Beaker },
  { name: "Obstetrics & Gynaecology", icon: Users },
  { name: "Orthopedics & Joint Replacement", icon: Bone },
  { name: "Pediatric Surgery", icon: Syringe },
  { name: "Physiatry (Rehabilitation)", icon: Accessibility },
  { name: "Plastic Surgery", icon: Sparkles },
  { name: "Pulmonology", icon: Wind },
  { name: "Urology", icon: CircleDot },
  { name: "Vascular Surgery", icon: Waves },
];

const ServicesSection = () => (
  <section id="services" className="py-20 bg-background">
    <div className="container mx-auto px-4">
      <div className="text-center mb-14">
        <span className="text-sm font-semibold text-secondary uppercase tracking-widest">What We Offer</span>
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mt-2">Our Services</h2>
        <p className="text-muted-foreground mt-3 max-w-xl mx-auto">
          Comprehensive medical services across 18 specialties, delivered by experienced professionals.
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
        {services.map(({ name, icon: Icon }) => (
          <div
            key={name}
            className="group flex flex-col items-center text-center p-5 rounded-xl bg-card card-shadow hover:card-hover-shadow hover:-translate-y-1 transition-all duration-300 border border-border/50"
          >
            <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center mb-3 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
              <Icon size={22} className="text-primary group-hover:text-primary-foreground transition-colors" />
            </div>
            <span className="text-xs font-medium text-foreground leading-snug">{name}</span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;
