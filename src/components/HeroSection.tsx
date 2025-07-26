import { Button } from "@/components/ui/button";
import profileImage from "@/assets/brajesh-profile.jpg";

const HeroSection = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center pt-20 pb-16 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Hello Badge */}
            <div className="inline-flex items-center space-x-3 border-2 border-primary/30 px-4 py-3 rounded-lg bg-background/80">
              <div className="w-2 h-2 bg-primary rounded-full"></div>
              <div className="w-2 h-2 bg-primary rounded-full"></div>
              <span className="text-primary font-medium text-lg">Hello !</span>
              <div className="w-2 h-2 bg-primary rounded-full"></div>
              <div className="w-2 h-2 bg-primary rounded-full"></div>
            </div>

            {/* Main Heading */}
            <div className="space-y-6">
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                I'm <span className="text-primary">Brajesh Patwari</span>,
                <br />
                <span className="text-foreground">Full Stack Developer &</span>
                <br />
                <span className="text-foreground">Software Engineer Enthusiast</span>
              </h1>
              
              <p className="text-lg text-muted-foreground max-w-lg leading-relaxed">
                Passionate about building scalable web applications with expertise in React, Spring Boot, and modern technologies.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4">
              <Button 
                onClick={scrollToContact}
                size="lg" 
                className="rounded-full px-8 py-4 text-base font-medium bg-primary hover:bg-primary/90"
              >
                Hire Me
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="rounded-full px-8 py-4 text-base font-medium border-2 border-foreground/20 hover:bg-foreground/5"
                onClick={() => window.open('https://wa.me/918302781072', '_blank')}
              >
                WhatsApp
              </Button>
            </div>
          </div>

          {/* Right Content - Profile Image */}
          <div className="relative flex justify-center lg:justify-end">
            {/* Background Shapes */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full transform translate-x-32 -translate-y-16"></div>
            <div className="absolute bottom-0 right-0 w-80 h-80 bg-primary/20 rounded-full transform translate-x-24 translate-y-24"></div>
            
            {/* Profile Image */}
            <div className="relative z-10 w-80 h-80 lg:w-96 lg:h-96">
              <img 
                src={profileImage} 
                alt="Brajesh Patwari - Full Stack Developer" 
                className="w-full h-full object-cover rounded-lg"
              />
            </div>

            {/* Floating Tags */}
            <div className="absolute top-16 -left-4 bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-medium shadow-lg z-20">
              Full Stack Developer
            </div>
            <div className="absolute bottom-32 -right-8 bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-medium shadow-lg z-20">
              Java Expert
            </div>
            <div className="absolute bottom-16 left-8 bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-medium shadow-lg z-20">
              React Developer
            </div>
          </div>
        </div>
      </div>
      
      {/* Background Decorative Elements */}
      <div className="absolute top-32 left-16 w-4 h-4 border-2 border-primary/30 rotate-45"></div>
      <div className="absolute bottom-32 left-32 w-6 h-6 border-2 border-primary/20 rounded-full"></div>
      <div className="absolute top-48 right-32 w-3 h-3 bg-primary/40 rounded-full"></div>
    </section>
  );
};

export default HeroSection;