import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";

const ProjectsSection = () => {
  const projects = [
    {
      title: "Trackify",
      description: "Expense Tracker with Auto-Categorized Transactions using regex patterns. Features real-time summaries with dynamic UI components for comprehensive financial management.",
      technologies: ["Java", "Spring Boot", "MySQL", "JDBC", "REST APIs"],
      githubUrl: "https://github.com/brajeshpatwari/trackify",
      liveUrl: "https://trackify-demo.com",
      image: "/placeholder.svg",
    },
    {
      title: "Prep-Mate",
      description: "AI-Powered Interview Prep App that generates personalized interview questions using GPT. JWT-secured authentication with responsive UI via Tailwind CSS.",
      technologies: ["React.js", "Node.js", "MongoDB", "OpenAI API", "JWT", "Tailwind CSS"],
      githubUrl: "https://github.com/brajeshpatwari/prep-mate",
      liveUrl: "https://prep-mate-demo.com",
      image: "/placeholder.svg",
    },
  ];

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-primary/10 px-4 py-2 rounded-lg border border-primary/20 mb-8">
              <div className="w-2 h-2 bg-primary rounded-full"></div>
              <span className="text-primary font-medium">Portfolio</span>
            </div>
            
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Featured <span className="text-primary">Projects</span>
            </h2>
            
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A collection of my recent work showcasing my skills in full-stack development and problem-solving abilities.
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="overflow-hidden group hover:shadow-lg transition-all duration-300 hover:scale-[1.02] animate-fade-in" style={{animationDelay: `${index * 200}ms`}}>
                {/* Project Image */}
                <div className="aspect-video bg-muted/50 flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                
                {/* Project Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">{project.title}</h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  
                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  
                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    <Button 
                      variant="outline" 
                      size="sm"
                      onClick={() => window.open(project.githubUrl, '_blank')}
                      className="flex items-center gap-2 hover:scale-105 transition-transform duration-300"
                    >
                      <Github className="w-4 h-4" />
                      Code
                    </Button>
                    <Button 
                      size="sm"
                      onClick={() => window.open(project.liveUrl, '_blank')}
                      className="flex items-center gap-2 hover:scale-105 transition-transform duration-300"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Live Demo
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;