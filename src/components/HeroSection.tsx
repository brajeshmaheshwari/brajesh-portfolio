import { Button } from "@/components/ui/button";

const HeroSection = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleResumeClick = async () => {
    const resumePath = '/Brajesh - Resume.pdf';
    
    try {
      // Check if file exists first
      const response = await fetch(resumePath, { method: 'HEAD' });
      
      if (response.ok) {
        // File exists, proceed with download and open
        window.open(resumePath, '_blank');
        
        // Trigger download
        const link = document.createElement('a');
        link.href = resumePath;
        link.download = 'Brajesh-Resume.pdf';
        link.target = '_blank';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      } else {
        throw new Error('Resume file not found');
      }
    } catch (error) {
      console.error('Resume access failed:', error);
      // Fallback: Show error message to user
      alert('Resume is currently unavailable. Please contact me directly for my resume.');
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 pb-16">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          {/* Hello Badge */}
          <div className="inline-flex items-center space-x-3 bg-primary/10 px-6 py-3 rounded-xl border border-primary/20 mb-12 backdrop-blur-sm">
            <div className="w-3 h-3 bg-primary rounded-full animate-ping"></div>
            <span className="text-primary font-semibold text-lg">Hello !</span>
          </div>

          {/* Main Heading */}
          <div className="space-y-8 mb-12">
            <h1 className="text-4xl lg:text-6xl font-bold leading-tight animate-fade-in">
              I'm <span className="text-primary bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">Brajesh Patwari</span>,
              <br />
              <span className="text-foreground">Full Stack Developer &</span>
              <br />
              <span className="text-foreground">Software Engineer</span>
            </h1>
            
            <p className="text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed animate-fade-in" style={{animationDelay: "200ms"}}>
              Passionate about building scalable web applications with expertise in React, Spring Boot, and modern technologies.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-6 justify-center items-center">
            <Button 
              onClick={scrollToContact}
              size="lg" 
              className="rounded-xl px-8 py-4 text-base font-medium hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl flex-1 max-w-[160px]"
            >
              Hire Me
         </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="rounded-xl px-8 py-4 text-base font-medium hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl border-2 flex-1 max-w-[160px]"
              onClick={handleResumeClick}
            >
              Resume
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="rounded-xl px-8 py-4 text-base font-medium hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl border-2 flex-1 max-w-[160px]"
              onClick={() => window.open('https://wa.me/+918302781072', '_blank')}
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
