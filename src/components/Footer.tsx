import { Button } from "@/components/ui/button";
import { Github, Linkedin, Twitter, Mail } from "lucide-react";

const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-muted/30 border-t">
      <div className="container mx-auto px-6 py-16">
        <div className="max-w-6xl mx-auto">
          {/* Main Footer Content */}
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            {/* Brand Section */}
            <div className="md:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                  <span className="text-primary-foreground font-bold text-lg">B</span>
                </div>
                <span className="font-semibold text-lg">Brajesh Patwari</span>
              </div>
              <p className="text-muted-foreground mb-6 max-w-md">
                Full Stack Developer passionate about creating scalable web applications 
                and solving complex problems with modern technologies.
              </p>
              
              {/* Social Links */}
              <div className="flex gap-4">
                <Button variant="outline" size="icon" onClick={() => window.open('https://github.com/brajesh', '_blank')}>
                  <Github className="w-4 h-4" />
                </Button>
                <Button variant="outline" size="icon" onClick={() => window.open('https://linkedin.com/in/brajesh', '_blank')}>
                  <Linkedin className="w-4 h-4" />
                </Button>
                <Button variant="outline" size="icon" onClick={() => window.open('https://twitter.com/brajesh', '_blank')}>
                  <Twitter className="w-4 h-4" />
                </Button>
                <Button variant="outline" size="icon" onClick={() => window.open('mailto:brajesh.patwari@example.com', '_blank')}>
                  <Mail className="w-4 h-4" />
                </Button>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-semibold mb-4">Quick Links</h3>
              <div className="space-y-3">
                <button 
                  onClick={() => scrollToSection('home')}
                  className="block text-muted-foreground hover:text-primary transition-colors"
                >
                  Home
                </button>
                <button 
                  onClick={() => scrollToSection('about')}
                  className="block text-muted-foreground hover:text-primary transition-colors"
                >
                  About
                </button>
                <button 
                  onClick={() => scrollToSection('services')}
                  className="block text-muted-foreground hover:text-primary transition-colors"
                >
                  Services
                </button>
                <button 
                  onClick={() => scrollToSection('projects')}
                  className="block text-muted-foreground hover:text-primary transition-colors"
                >
                  Projects
                </button>
              </div>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="font-semibold mb-4">Contact</h3>
              <div className="space-y-3 text-muted-foreground">
                <p>brajesh.patwari@example.com</p>
                <p>+91 8302781072</p>
                <p>India</p>
                <Button 
                  onClick={() => scrollToSection('contact')}
                  className="mt-4"
                >
                  Get in Touch
                </Button>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-muted-foreground text-sm mb-4 md:mb-0">
              © 2024 Brajesh Patwari. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <button className="text-muted-foreground hover:text-primary transition-colors">
                Privacy Policy
              </button>
              <button className="text-muted-foreground hover:text-primary transition-colors">
                Terms of Service
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;