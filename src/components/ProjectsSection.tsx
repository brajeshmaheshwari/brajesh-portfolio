import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";

const ProjectsSection = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution with user authentication, product management, shopping cart, and payment integration.",
      technologies: ["React", "Spring Boot", "MySQL", "Stripe API", "AWS"],
      githubUrl: "https://github.com/brajesh",
      liveUrl: "https://example-ecommerce.com",
      image: "/placeholder.svg",
    },
    {
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates, team collaboration features, and project tracking.",
      technologies: ["React", "Node.js", "MongoDB", "Socket.io", "JWT"],
      githubUrl: "https://github.com/brajesh",
      liveUrl: "https://example-tasks.com",
      image: "/placeholder.svg",
    },
    {
      title: "Weather Dashboard",
      description: "A responsive weather dashboard that displays current weather, forecasts, and weather maps with location-based services.",
      technologies: ["React", "TypeScript", "Weather API", "Chart.js", "Tailwind"],
      githubUrl: "https://github.com/brajesh",
      liveUrl: "https://example-weather.com",
      image: "/placeholder.svg",
    },
    {
      title: "Blog Platform",
      description: "A modern blog platform with content management, user authentication, commenting system, and SEO optimization.",
      technologies: ["React", "Spring Boot", "PostgreSQL", "Redis", "Docker"],
      githubUrl: "https://github.com/brajesh",
      liveUrl: "https://example-blog.com",
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
              <Card key={index} className="overflow-hidden group hover:shadow-lg transition-shadow">
                {/* Project Image */}
                <div className="aspect-video bg-muted/50 flex items-center justify-center">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                {/* Project Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3">{project.title}</h3>
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
                      className="flex items-center gap-2"
                    >
                      <Github className="w-4 h-4" />
                      Code
                    </Button>
                    <Button 
                      size="sm"
                      onClick={() => window.open(project.liveUrl, '_blank')}
                      className="flex items-center gap-2"
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