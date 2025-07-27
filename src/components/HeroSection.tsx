import { Button } from "@/components/ui/button";

const HeroSection = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 pb-16">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          {/* Hello Badge */}
          <div className="inline-flex items-center space-x-2 bg-primary/10 px-4 py-2 rounded-lg border border-primary/20 mb-8 animate-pulse hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
            <div className="w-2 h-2 bg-primary rounded-full animate-ping"></div>
            <span className="text-primary font-medium animate-bounce">Hello !</span>
          </div>

          {/* Main Heading */}
          <div className="space-y-6 mb-8">
            <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
              I'm <span className="text-primary">Brajesh Patwari</span>,
              <br />
              <span className="text-foreground">Full Stack Developer &</span>
              <br />
              <span className="text-foreground">Software Engineer</span>
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Passionate about building scalable web applications with expertise in React, Spring Boot, and modern technologies.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-6 justify-center">
            <Button 
              onClick={scrollToContact}
              size="lg" 
              className="rounded-xl px-8 py-4 text-base font-medium hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Hire Me
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="rounded-xl px-8 py-4 text-base font-medium hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl border-2"
              onClick={() => window.open('https://wa.me/+919929777749', '_blank')}
            >
              WhatsApp
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;