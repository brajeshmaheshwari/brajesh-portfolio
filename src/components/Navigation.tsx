import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ThemeToggle";

const Navigation = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="container mx-auto px-6 py-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3 animate-fade-in">
            <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center hover:scale-110 transition-all duration-300 hover:rotate-6 animate-pulse-slow">
              <span className="text-primary-foreground font-bold text-2xl">B</span>
            </div>
            <span className="font-bold text-2xl hover:text-primary transition-colors duration-300 animate-slide-in-right">Brajesh Patwari</span>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-10">
            <button 
              onClick={() => scrollToSection('home')}
              className="text-foreground hover:text-primary transition-all duration-300 font-semibold text-lg hover:scale-110 hover:-translate-y-1"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('services')}
              className="text-muted-foreground hover:text-primary transition-all duration-300 font-semibold text-lg hover:scale-110 hover:-translate-y-1"
            >
              Services
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="text-muted-foreground hover:text-primary transition-all duration-300 font-semibold text-lg hover:scale-110 hover:-translate-y-1"
            >
              About me
            </button>
            <button 
              onClick={() => scrollToSection('projects')}
              className="text-muted-foreground hover:text-primary transition-all duration-300 font-semibold text-lg hover:scale-110 hover:-translate-y-1"
            >
              Projects
            </button>
          </div>

          {/* Theme Toggle and Contact Button */}
          <div className="flex items-center gap-3">
            <div className="hover:scale-110 transition-transform duration-300">
              <ThemeToggle />
            </div>
            <Button 
              onClick={() => scrollToSection('contact')}
              className="rounded-full px-8 py-6 text-lg font-semibold hover:scale-105 transition-all duration-300 hover:shadow-xl"
            >
              Contact me
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;