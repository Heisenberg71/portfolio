import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Publications from "@/components/Publications";
import News from "@/components/News";
import SkillsSection from "@/components/SkillsSection";
import WorkProjects from "@/components/WorkProjects";
import Resume from "@/components/Resume";
import Gallery from "@/components/Gallery";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <Publications />
      <News />
      <Resume />
      <SkillsSection />
      <WorkProjects />
      <Gallery />
      <Footer />
    </div>
  );
};

export default Index;
