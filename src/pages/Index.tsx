import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import SobreSection from "@/components/SobreSection";
import TimelineSection from "@/components/TimelineSection";
import HarmonizacaoSection from "@/components/HarmonizacaoSection";
import FotosSection from "@/components/FotosSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <SobreSection />
      <TimelineSection />
      <HarmonizacaoSection />
      <FotosSection />
      <Footer />
    </div>
  );
};

export default Index;
