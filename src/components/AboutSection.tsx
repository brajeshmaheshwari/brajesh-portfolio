import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          {/* Section Badge */}
          <div className="inline-flex items-center space-x-2 bg-primary/10 px-4 py-2 rounded-lg border border-primary/20 mb-8">
            <div className="w-2 h-2 bg-primary rounded-full"></div>
            <span className="text-primary font-medium">About Me</span>
          </div>

          {/* Section Title */}
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Know More <span className="text-primary">About Me</span>
          </h2>

          <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
            I'm a passionate Full Stack Developer specializing in building scalable web applications using Java, Spring Boot, React, and Node.js. 
            With a strong foundation in backend optimization and AI-integrated solutions, I thrive on delivering products that solve real-world problems efficiently and elegantly.
          </p>

          {/* About Card */}
          <div className="max-w-4xl mx-auto">
            <Card className="p-8 text-left hover:shadow-xl transition-all duration-500 group relative overflow-hidden">
              {/* Background gradient effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative z-10 space-y-8">
                <div className="space-y-6">
                  <h3 className="text-3xl font-bold mb-6 group-hover:text-primary transition-colors duration-300 animate-fade-in">My Journey</h3>
                  <div className="space-y-4">
                    <p className="text-muted-foreground leading-relaxed text-lg animate-fade-in" style={{animationDelay: '0.1s'}}>
                      Hello, I am Brajesh Patwari, a full stack developer and software developer. I'm passionate about building scalable web applications and working with modern technologies like React, Spring Boot, and Node.js.
                    </p>
                    <p className="text-muted-foreground leading-relaxed text-lg animate-fade-in" style={{animationDelay: '0.2s'}}>
                      With expertise in both frontend and backend development, I enjoy creating comprehensive solutions that deliver exceptional user experiences while maintaining robust, efficient backend systems.
                    </p>
                  </div>
                </div>
                
                <div className="flex justify-center animate-fade-in" style={{animationDelay: '0.3s'}}>
                  <div className="inline-flex items-center gap-3 bg-primary/10 px-6 py-3 rounded-xl border border-primary/20 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
                    <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                    </svg>
                    <span className="text-primary font-semibold">Bhilwara, Rajasthan</span>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;