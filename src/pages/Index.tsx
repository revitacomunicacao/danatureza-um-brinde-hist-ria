import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import SobreSection from "@/components/SobreSection";
import TimelineSection from "@/components/TimelineSection";
import FotosSection from "@/components/FotosSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <SobreSection />
      <TimelineSection />
      <FotosSection />
      <Footer />
    </div>
  );
};

export default Index;
