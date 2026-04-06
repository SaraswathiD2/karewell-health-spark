import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import DoctorsSection from "@/components/DoctorsSection";
import DepartmentsSection from "@/components/DepartmentsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => (
  <div className="min-h-screen">
    <Header />
    <HeroSection />
    <ServicesSection />
    <DoctorsSection />
    <DepartmentsSection />
    <ContactSection />
    <Footer />
  </div>
);

export default Index;
