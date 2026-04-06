import { useState } from "react";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const ContactSection = () => {
  const [form, setForm] = useState({ firstName: "", lastName: "", email: "", phone: "", message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((p) => ({ ...p, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you for your enquiry! We will get back to you soon.");
    setForm({ firstName: "", lastName: "", email: "", phone: "", message: "" });
  };

  return (
    <section id="contact" className="py-20 bg-accent/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <span className="text-sm font-semibold text-secondary uppercase tracking-widest">Get in Touch</span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mt-2">Contact Us</h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 max-w-5xl mx-auto">
          {/* Info */}
          <div className="space-y-6">
            <div className="flex gap-4 items-start">
              <div className="w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                <MapPin size={20} className="text-primary" />
              </div>
              <div>
                <h4 className="font-heading font-semibold text-foreground">Address</h4>
                <p className="text-muted-foreground text-sm mt-1">123 Healthcare Avenue, Medical District,<br />New Delhi, India - 110001</p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <div className="w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                <Phone size={20} className="text-primary" />
              </div>
              <div>
                <h4 className="font-heading font-semibold text-foreground">Phone</h4>
                <p className="text-muted-foreground text-sm mt-1">+91 1234 567 890<br />+91 9876 543 210</p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <div className="w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                <Mail size={20} className="text-primary" />
              </div>
              <div>
                <h4 className="font-heading font-semibold text-foreground">Email</h4>
                <p className="text-muted-foreground text-sm mt-1">info@karewellhospital.com<br />support@karewellhospital.com</p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <div className="w-11 h-11 rounded-lg bg-secondary/10 flex items-center justify-center shrink-0">
                <Clock size={20} className="text-secondary" />
              </div>
              <div>
                <h4 className="font-heading font-semibold text-foreground">Working Hours</h4>
                <p className="text-muted-foreground text-sm mt-1">24/7 Emergency Services<br />OPD: Mon–Sat, 9:00 AM – 6:00 PM</p>
              </div>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="bg-card rounded-2xl p-8 card-shadow border border-border/50 space-y-4">
            <h3 className="font-heading font-semibold text-foreground text-lg mb-2">Enquiry Form</h3>
            <div className="grid sm:grid-cols-2 gap-4">
              <input name="firstName" value={form.firstName} onChange={handleChange} required placeholder="First Name" className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring" />
              <input name="lastName" value={form.lastName} onChange={handleChange} required placeholder="Last Name" className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring" />
            </div>
            <input name="email" type="email" value={form.email} onChange={handleChange} required placeholder="Email" className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring" />
            <input name="phone" type="tel" value={form.phone} onChange={handleChange} required placeholder="Phone Number" className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring" />
            <textarea name="message" value={form.message} onChange={handleChange} required placeholder="Your Message" rows={4} className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring resize-none" />
            <button type="submit" className="w-full py-3 rounded-lg bg-primary font-medium text-primary-foreground hover:bg-primary-dark transition-colors text-sm">
              Send Enquiry
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
