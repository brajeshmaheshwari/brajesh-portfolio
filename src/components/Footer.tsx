import { Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Main Footer Content */}
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Brand Section */}
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                  <span className="text-primary-foreground font-bold text-xl">B</span>
                </div>
                <span className="text-xl font-bold">Brajesh Patwari</span>
              </div>
              <p className="text-background/70 leading-relaxed">
                Full Stack Developer & Software Engineer passionate about creating 
                innovative web solutions with modern technologies.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <div className="space-y-2">
                {['Home', 'About', 'Experience', 'Projects', 'Services', 'Contact'].map((link) => (
                  <button
                    key={link}
                    onClick={() => {
                      const element = document.getElementById(link.toLowerCase());
                      element?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="block text-background/70 hover:text-background transition-colors"
                  >
                    {link}
                  </button>
                ))}
              </div>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
              <div className="space-y-2 text-background/70">
                <p>Bhilwara, Rajasthan, India</p>
                <p>brajeshpatwari17@gmail.com</p>
                <p>+91 8302781072</p>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-background/20 pt-8">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <p className="text-background/70 flex items-center">
                Made with <Heart className="w-4 h-4 mx-1 text-red-500" fill="currentColor" /> 
                by Brajesh Patwari
              </p>
              <p className="text-background/70 mt-4 md:mt-0">
                © {currentYear} All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;