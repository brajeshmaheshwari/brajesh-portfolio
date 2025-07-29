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
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-lg border-b border-border/30 shadow-lg">
      <div className="container mx-auto px-8 py-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-4 animate-fade-in group cursor-pointer">
            <div className="w-14 h-14 bg-gradient-to-br from-primary to-primary/80 rounded-2xl flex items-center justify-center hover:scale-110 transition-all duration-500 hover:rotate-12 animate-pulse-slow shadow-lg hover:shadow-xl hover:shadow-primary/30 group-hover:animate-bounce">
              <span className="text-primary-foreground font-bold text-3xl">B</span>
            </div>
            <span className="font-bold text-3xl hover:text-primary transition-all duration-500 animate-slide-in-right bg-gradient-to-r from-foreground to-primary bg-clip-text hover:scale-105 transform">Brajesh Patwari</span>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-12">
            <button 
              onClick={() => scrollToSection('home')}
              className="relative text-foreground hover:text-primary transition-all duration-500 font-bold text-xl hover:scale-110 hover:-translate-y-2 group"
            >
              <span className="relative z-10">Home</span>
              <div className="absolute inset-0 bg-primary/10 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300 -z-10"></div>
            </button>
            <button 
              onClick={() => scrollToSection('services')}
              className="relative text-muted-foreground hover:text-primary transition-all duration-500 font-bold text-xl hover:scale-110 hover:-translate-y-2 group"
            >
              <span className="relative z-10">Services</span>
              <div className="absolute inset-0 bg-primary/10 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300 -z-10"></div>
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="relative text-muted-foreground hover:text-primary transition-all duration-500 font-bold text-xl hover:scale-110 hover:-translate-y-2 group"
            >
              <span className="relative z-10">About me</span>
              <div className="absolute inset-0 bg-primary/10 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300 -z-10"></div>
            </button>
            <button 
              onClick={() => scrollToSection('projects')}
              className="relative text-muted-foreground hover:text-primary transition-all duration-500 font-bold text-xl hover:scale-110 hover:-translate-y-2 group"
            >
              <span className="relative z-10">Projects</span>
              <div className="absolute inset-0 bg-primary/10 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300 -z-10"></div>
            </button>
          </div>

          {/* Theme Toggle and Contact Button */}
          <div className="flex items-center gap-4">
            <div className="hover:scale-125 transition-all duration-500 hover:rotate-180">
              <ThemeToggle />
            </div>
            <Button 
              onClick={() => scrollToSection('contact')}
              className="rounded-full px-10 py-7 text-xl font-bold hover:scale-110 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/50 bg-gradient-to-r from-primary to-primary/80 hover:from-primary/80 hover:to-primary"
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