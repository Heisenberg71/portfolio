import { Mail, Phone, MapPin, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const socialLinks = [
    { name: "GitHub", url: "https://github.com/utpoln" },
    { name: "LinkedIn", url: "https://www.linkedin.com/in/kallol-naha-5a584631/" },
    { name: "ResearchGate", url: "https://www.researchgate.net/profile/Kallol-Naha" },
    { name: "Google Scholar", url: "https://scholar.google.com/citations?user=nzL0EKoAAAAJ&hl=en" },
    { name: "Semantic Scholar", url: "https://www.semanticscholar.org/author/Kallol-Naha/112902836" },
    { name: "DBLP", url: "https://dblp.org/pid/264/2536.html" },
    { name: "ORCID", url: "https://orcid.org/0000-0002-1815-234X" },
  ];

  return (
    <section id="about" className="min-h-screen flex items-center justify-center section-padding pt-32">
      <div className="container-custom">
        <div className="flex flex-col items-center text-center space-y-8 animate-fade-in">
          {/* Profile Image */}
          <div className="relative w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden ring-4 ring-primary/20 shadow-2xl hover-lift">
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop"
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Name and Title */}
          <div className="space-y-3">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground">
              Kallol Naha <span className="text-muted-foreground text-3xl md:text-4xl">/ কল্লোল নাহা</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground font-medium">
              Ph.D. Candidate & Graduate Research Assistant
            </p>
            <p className="text-lg text-muted-foreground">University of Idaho</p>
          </div>

          {/* Contact Info */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground">
            <a href="tel:+12083104663" className="flex items-center gap-2 hover:text-primary transition-colors">
              <Phone className="w-4 h-4" />
              <span>+1 (208) 310-4663</span>
            </a>
            <a href="mailto:naha7197@vandals.uidaho.edu" className="flex items-center gap-2 hover:text-primary transition-colors">
              <Mail className="w-4 h-4" />
              <span>naha7197@vandals.uidaho.edu</span>
            </a>
            <a href="https://kallolnaha.me" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-primary transition-colors">
              <ExternalLink className="w-4 h-4" />
              <span>kallolnaha.me</span>
            </a>
            <span className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              <span>Moscow, ID, USA</span>
            </span>
          </div>

          {/* Social Links */}
          <div className="flex flex-wrap items-center justify-center gap-4">
            {socialLinks.map((link) => (
              <Button
                key={link.name}
                variant="outline"
                size="sm"
                asChild
                className="hover-lift"
              >
                <a href={link.url} target="_blank" rel="noopener noreferrer">
                  {link.name}
                </a>
              </Button>
            ))}
          </div>

          {/* Bio */}
          <div className="max-w-4xl space-y-4 text-muted-foreground leading-relaxed">
            <p>
              Dedicated Ph.D. candidate at the University of Idaho specializing in{" "}
              <span className="font-semibold text-foreground">
                Bioinformatics, Human-Computer Interaction, Database Management, Machine Learning, and Large-Scale Web Software Development
              </span>
              , working under the guidance of <span className="font-semibold text-foreground">Prof. Dr. Hasan Jamil</span> in the SmartDB Lab.
            </p>
            <p>
              My research focuses on developing <span className="font-semibold text-foreground">AI-driven tools</span> to advance healthcare and environmental management by improving bioinformatics workflows and making complex biological and clinical data more accessible. I have previously developed commercial software solutions, intelligent systems for biologists, visual workflow platforms for scientists, and auto-grading tools for database education, all emphasizing intuitive, user-centered design.
            </p>
            <p>
              I am a <span className="font-semibold text-foreground">Student Member of ACM and IEEE</span>, and an active committee member of the{" "}
              <span className="font-semibold text-foreground">Bangla Language Processing (BLP) Workshop</span>. I have also served as a{" "}
              <span className="font-semibold text-foreground">reviewer</span> for several IEEE and ACM conferences, contributing to the academic research community through peer review and professional service.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
