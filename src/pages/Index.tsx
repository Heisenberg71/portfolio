import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Publications from "@/components/Publications";
import News from "@/components/News";
import Skills from "@/components/Skills";
import Work from "@/components/Work";
import Gallery from "@/components/Gallery";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <Publications />
      <News />
      <Skills />
      <Work />
      <Gallery />
      <Footer />
    </div>
  );
};

export default Index;
