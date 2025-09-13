import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";

import ServicesSection from "@/components/ServicesSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import CitiesSection from "@/components/CitiesSection";
import PartnerSection from "@/components/PartnerSection";
import Footer from "@/components/Footer";
import AddedSection from "@/components/addedsection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <AddedSection />
      <ServicesSection />
      <HowItWorksSection />
      <CitiesSection />
      <PartnerSection />
      <Footer />
    </div>
  );
};

export default Index;
