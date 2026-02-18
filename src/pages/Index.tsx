import HeroSection from "../components/HeroSection";
import ServicesSection from "../components/ServicesSection";
import PackagesSection from "../components/PackagesSection";
import BookingSection from "../components/BookingSection";
import Footer from "../components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <ServicesSection />
      <PackagesSection />
      <BookingSection />
      <Footer />
    </div>
  );
};

export default Index;