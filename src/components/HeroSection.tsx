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
    <section id="home" className="min-h-screen flex items-center pt-20 pb-16">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Hello Badge */}
            <div className="inline-flex items-center space-x-2 bg-blue-50 dark:bg-gray-800 px-4 py-2 rounded-lg border-2 border-primary/20">
              <div className="w-2 h-2 bg-primary rounded-full"></div>
              <span className="text-primary font-medium">Hello !</span>
            </div>

            {/* Main Heading */}
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                I'm <span className="text-primary">Brajesh Patwari</span>,
                <br />
                <span className="text-foreground">Full Stack Developer &</span>
                <br />
                <span className="text-foreground">Software Engineer</span>
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
                className="rounded-full px-8 py-6 text-base font-medium"
              >
                Hire Me
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="rounded-full px-8 py-6 text-base font-medium"
                onClick={() => window.open('https://wa.me/918302781072', '_blank')}
              >
                WhatsApp
              </Button>
            </div>
          </div>

          {/* Right Content - Profile Image */}
          <div className="relative flex justify-center lg:justify-end">
            {/* Background Shape */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full transform rotate-6 scale-110"></div>
            
            {/* Profile Image */}
            <div className="relative z-10 w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-background shadow-2xl">
              <img 
                src={profileImage} 
                alt="Brajesh Patwari - Full Stack Developer" 
                className="w-full h-full object-cover"
              />
            </div>

            {/* Floating Tags */}
            <div className="absolute top-16 left-8 bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-medium shadow-lg animate-pulse">
              Full Stack Developer
            </div>
            <div className="absolute bottom-16 right-8 bg-accent text-accent-foreground px-4 py-2 rounded-full text-sm font-medium shadow-lg animate-pulse delay-1000">
              Java Expert
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;