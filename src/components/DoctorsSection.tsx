import { User } from "lucide-react";

const doctors = [
  {
    name: "Dr. Rajesh Sharma",
    specialization: "Cardiology",
    desc: "Over 20 years of experience in interventional cardiology with expertise in complex cardiac procedures.",
  },
  {
    name: "Dr. Priya Menon",
    specialization: "Obstetrics & Gynaecology",
    desc: "Renowned specialist in high-risk pregnancies and minimally invasive gynaecological surgeries.",
  },
  {
    name: "Dr. Anil Kapoor",
    specialization: "Orthopedics & Joint Replacement",
    desc: "Pioneer in robotic-assisted joint replacements with thousands of successful surgeries.",
  },
  {
    name: "Dr. Sneha Reddy",
    specialization: "General Medicine",
    desc: "Expert in preventive medicine and chronic disease management with a patient-first approach.",
  },
];

const DoctorsSection = () => (
  <section id="doctors" className="py-20 bg-accent/50">
    <div className="container mx-auto px-4">
      <div className="text-center mb-14">
        <span className="text-sm font-semibold text-secondary uppercase tracking-widest">Meet Our Team</span>
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mt-2">Our Doctors</h2>
        <p className="text-muted-foreground mt-3 max-w-xl mx-auto">
          Skilled, compassionate specialists committed to your health and well-being.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {doctors.map((doc) => (
          <div
            key={doc.name}
            className="bg-card rounded-2xl p-6 card-shadow hover:card-hover-shadow hover:-translate-y-1 transition-all duration-300 border border-border/50 text-center"
          >
            <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
              <User size={32} className="text-primary" />
            </div>
            <h3 className="font-heading font-semibold text-foreground text-lg">{doc.name}</h3>
            <span className="text-sm font-medium text-secondary mt-1 block">{doc.specialization}</span>
            <p className="text-muted-foreground text-sm mt-3 leading-relaxed">{doc.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default DoctorsSection;
