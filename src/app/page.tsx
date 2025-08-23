import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ServicesSection from "@/components/ServicesSection";
import TechnologiesSection from "@/components/TechnologiesSection";
import ProjectsSection from "@/components/ProjectsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ContactSection from "@/components/ContactSection";
import HeroServer from "@/components/HeroSever";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroServer />
      <ServicesSection />
      <TechnologiesSection />
      <ProjectsSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
