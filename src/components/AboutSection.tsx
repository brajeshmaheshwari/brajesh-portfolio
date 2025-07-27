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

          {/* About Cards */}
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-8 text-left">
              <h3 className="text-2xl font-bold mb-4">My Journey</h3>
              <p className="text-muted-foreground mb-6">
                With over 3 years of experience in software development, I've worked on 
                various projects ranging from web applications to enterprise solutions. 
                My journey started with Java and has evolved to include modern frontend 
                and backend technologies.
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary">Full Stack</Badge>
                <Badge variant="secondary">Problem Solver</Badge>
                <Badge variant="secondary">Team Player</Badge>
              </div>
            </Card>

            <Card className="p-8 text-left">
              <h3 className="text-2xl font-bold mb-4">What I Do</h3>
              <p className="text-muted-foreground mb-6">
                I specialize in building responsive web applications using React, Spring Boot, 
                and modern development practices. I'm passionate about clean code, 
                user experience, and continuous learning.
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary">Web Development</Badge>
                <Badge variant="secondary">API Design</Badge>
                <Badge variant="secondary">Database Design</Badge>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;