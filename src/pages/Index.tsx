import FloatingCubes from "@/components/FloatingCubes";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import FeaturesSection from "@/components/FeaturesSection";
import BlogSection from "@/components/BlogSection";
import CTASection from "@/components/CTASection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      <FloatingCubes />
      <Header />
      <main className="relative z-10">
        <HeroSection />
        <AboutSection />
        <FeaturesSection />
        <BlogSection />
        <CTASection />
      </main>
    </div>
  );
};

export default Index;
