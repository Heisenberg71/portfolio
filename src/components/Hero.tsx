import { Mail, Phone, MapPin, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const socialLinks = [
    { name: "GitHub", url: "https://github.com/utpoln", icon: "github" },
    { name: "LinkedIn", url: "https://www.linkedin.com/in/kallol-naha-5a584631/", icon: "linkedin" },
    { name: "Google Scholar", url: "https://scholar.google.com/citations?user=nzL0EKoAAAAJ&hl=en", icon: "scholar" },
    { name: "ResearchGate", url: "https://www.researchgate.net/profile/Kallol-Naha", icon: "researchgate" },
    { name: "ORCID", url: "https://orcid.org/0000-0002-1815-234X", icon: "orcid" },
  ];

  return (
    <section id="about" className="min-h-screen flex items-center justify-center pt-20 px-6">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center animate-fade-in">
          {/* Profile Image */}
          <div className="mb-8 flex justify-center">
            <div className="relative w-48 h-48 rounded-full overflow-hidden ring-4 ring-primary/20 hover-scale">
              <img
                src="https://kallolnaha.me/kallol_naha.png"
                alt="Kallol Naha"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Name & Title */}
          <h1 className="text-5xl md:text-6xl font-bold mb-2 text-foreground">
            Kallol Naha / কল্লোল নাহা
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8">
            Ph.D. Candidate & Graduate Research Assistant, University of Idaho
          </p>

          {/* Contact Info */}
          <div className="flex flex-wrap justify-center gap-6 mb-8 text-muted-foreground">
            <a href="tel:+12083104663" className="flex items-center gap-2 hover:text-primary transition-colors">
              <Phone className="w-4 h-4" />
              <span>+1 (208) 310-4663</span>
            </a>
            <a href="mailto:naha7197@vandals.uidaho.edu" className="flex items-center gap-2 hover:text-primary transition-colors">
              <Mail className="w-4 h-4" />
              <span>naha7197@vandals.uidaho.edu</span>
            </a>
            <a href="https://kallolnaha.me" className="flex items-center gap-2 hover:text-primary transition-colors">
              <Globe className="w-4 h-4" />
              <span>kallolnaha.me</span>
            </a>
            <span className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              <span>Moscow, ID, USA</span>
            </span>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-4 mb-12">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground flex items-center justify-center transition-all hover-scale"
                title={link.name}
              >
                <span className="text-xs font-bold">{link.icon.slice(0, 2).toUpperCase()}</span>
              </a>
            ))}
          </div>

          {/* Bio */}
          <div className="max-w-4xl mx-auto text-lg leading-relaxed space-y-6 text-left">
            <p>
              Dedicated Ph.D. candidate at the University of Idaho specializing in{" "}
              <strong className="text-primary">Bioinformatics, Human-Computer Interaction, Database Management, Machine Learning, and Large-Scale Web Software Development</strong>,
              working under the guidance of <strong>Prof. Dr. Hasan Jamil</strong> in the SmartDB Lab.
            </p>
            <p>
              My research focuses on developing <strong className="text-primary">AI-driven tools</strong> to advance healthcare and environmental management by improving bioinformatics workflows and making complex biological and clinical data more accessible. I have previously developed commercial software solutions, intelligent systems for biologists, visual workflow platforms for scientists, and auto-grading tools for database education, all emphasizing intuitive, user-centered design.
            </p>
            <p>
              I am a <strong>Student Member of ACM and IEEE</strong>, and an active committee member of the <strong>Bangla Language Processing (BLP) Workshop</strong>. I have also served as a <strong>reviewer</strong> for several <strong>IEEE and ACM conferences</strong>, contributing to the academic research community through peer review and professional service.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
