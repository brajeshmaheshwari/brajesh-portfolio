import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink, Code, Brain } from "lucide-react";

const ProjectsSection = () => {
  const projects = [
    {
      title: "Trackify - Expense Tracker App",
      description: "A comprehensive expense tracking application that automatically categorizes transactions using regex patterns and JDBC for efficient data management.",
      image: "/api/placeholder/400/250",
      technologies: ["Java", "Swing", "Spring Boot", "MySQL", "JDBC"],
      features: [
        "Automatic transaction categorization",
        "Real-time expense tracking",
        "Data visualization with charts",
        "Export reports functionality"
      ],
      github: "https://github.com/BrajeshPatwari17",
      live: "#",
      icon: Code
    },
    {
      title: "Prep-Mate - AI Interview Preparation",
      description: "An intelligent web application that uses OpenAI API to generate dynamic interview questions and answers, helping users prepare for technical interviews.",
      image: "/api/placeholder/400/250",
      technologies: ["MongoDB", "Express.js", "React.js", "Node.js", "JWT", "OpenAI API", "Tailwind CSS"],
      features: [
        "AI-powered question generation",
        "Dynamic Q&A sessions",
        "Progress tracking",
        "Multiple interview categories"
      ],
      github: "https://github.com/BrajeshPatwari17",
      live: "#",
      icon: Brain
    }
  ];

  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl font-bold mb-4 font-poppins">Featured Projects</h2>
            <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
            <p className="text-lg text-muted-foreground mt-4 max-w-2xl mx-auto">
              Showcasing innovative solutions built with modern technologies and best practices
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card 
                key={index} 
                className="group overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 animate-scale-in"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                {/* Project Image */}
                <div className="relative h-64 bg-gradient-to-br from-primary/20 to-accent/20 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent"></div>
                  <div className="absolute top-4 left-4 bg-primary/10 p-3 rounded-full">
                    <project.icon className="w-8 h-8 text-primary" />
                  </div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-2xl font-bold text-foreground mb-2 font-poppins">
                      {project.title}
                    </h3>
                  </div>
                </div>

                <CardContent className="p-6">
                  {/* Description */}
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Features */}
                  <div className="mb-6">
                    <h4 className="font-semibold mb-3">Key Features</h4>
                    <ul className="space-y-2">
                      {project.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start space-x-2">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-sm text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div className="mb-6">
                    <h4 className="font-semibold mb-3">Tech Stack</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <span 
                          key={techIndex}
                          className="bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-medium hover:bg-primary/20 transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex space-x-3">
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="flex-1"
                      onClick={() => window.open(project.github, '_blank')}
                    >
                      <Github className="w-4 h-4 mr-2" />
                      GitHub
                    </Button>
                    <Button 
                      size="sm" 
                      className="flex-1"
                      onClick={() => window.open(project.live, '_blank')}
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Live Demo
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* More Projects Button */}
          <div className="text-center mt-12 animate-fade-in">
            <Button 
              variant="outline" 
              size="lg" 
              className="px-8"
              onClick={() => window.open('https://github.com/BrajeshPatwari17', '_blank')}
            >
              <Github className="w-5 h-5 mr-2" />
              View More Projects
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;