import { Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const socialLinks = [
    { icon: Github, url: "https://github.com/utpoln", label: "GitHub" },
    { icon: Linkedin, url: "https://www.linkedin.com/in/kallol-naha-5a584631/", label: "LinkedIn" },
    { icon: Mail, url: "mailto:naha7197@vandals.uidaho.edu", label: "Email" },
  ];

  return (
    <footer className="py-12 px-6 border-t border-border bg-background">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Copyright */}
          <div className="text-center md:text-left">
            <p className="text-sm font-medium text-foreground">
              © {new Date().getFullYear()} Kallol Naha. All rights reserved.
            </p>
            <p className="text-xs text-muted-foreground mt-1">
              Ph.D. Candidate at University of Idaho | SmartDB Lab
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-3">
            {socialLinks.map((link) => (
              <Button
                key={link.label}
                variant="ghost"
                size="icon"
                asChild
                className="hover:bg-primary/10 hover:text-primary transition-colors"
              >
                <a href={link.url} target="_blank" rel="noopener noreferrer" aria-label={link.label}>
                  <link.icon className="w-5 h-5" />
                </a>
              </Button>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
