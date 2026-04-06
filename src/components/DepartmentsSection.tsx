import {
  Heart, Stethoscope, Baby, Bone, ShieldPlus, Activity, Brain, Scissors
} from "lucide-react";

const departments = [
  { name: "Cardiology", icon: Heart, desc: "Complete cardiac care from diagnostics to interventions." },
  { name: "General Medicine", icon: Stethoscope, desc: "Primary care and management of complex medical conditions." },
  { name: "Pediatrics & Neonatology", icon: Baby, desc: "Specialized care for newborns, infants, and children." },
  { name: "Orthopedics", icon: Bone, desc: "Advanced joint replacement and sports injury treatment." },
  { name: "Oncology", icon: ShieldPlus, desc: "Comprehensive cancer care with latest treatment protocols." },
  { name: "Gastroenterology", icon: Activity, desc: "Diagnostics and treatment for digestive system disorders." },
  { name: "Neurology", icon: Brain, desc: "Expert care for brain and nervous system conditions." },
  { name: "Surgery", icon: Scissors, desc: "General, laparoscopic, and minimally invasive surgeries." },
];

const DepartmentsSection = () => (
  <section id="departments" className="py-20 bg-background">
    <div className="container mx-auto px-4">
      <div className="text-center mb-14">
        <span className="text-sm font-semibold text-secondary uppercase tracking-widest">Explore</span>
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mt-2">Key Departments</h2>
        <p className="text-muted-foreground mt-3 max-w-xl mx-auto">
          State-of-the-art departments equipped with modern technology and expert staff.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {departments.map(({ name, icon: Icon, desc }) => (
          <div
            key={name}
            className="relative overflow-hidden rounded-2xl p-6 bg-card border border-border/50 card-shadow hover:card-hover-shadow hover:-translate-y-1 transition-all duration-300 group"
          >
            <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-bl-full group-hover:bg-secondary/10 transition-colors" />
            <div className="w-14 h-14 rounded-xl bg-accent flex items-center justify-center mb-4 group-hover:bg-primary transition-colors">
              <Icon size={26} className="text-primary group-hover:text-primary-foreground transition-colors" />
            </div>
            <h3 className="font-heading font-semibold text-foreground text-base">{name}</h3>
            <p className="text-muted-foreground text-sm mt-2 leading-relaxed">{desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default DepartmentsSection;
