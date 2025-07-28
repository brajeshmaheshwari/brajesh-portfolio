import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";

const ProjectsSection = () => {
  const projects = [
    {
      title: "Trackify | Expense Management",
      description: "A comprehensive expense tracking application with intelligent auto-categorization using regex patterns. The project aimed to provide users with real-time financial insights and streamlined expense management through modern UI components.",
      technologies: ["Java", "Spring Boot", "MySQL", "JDBC", "REST API"],
      tags: ["Full Stack", "Financial"],
      githubUrl: "https://github.com/brajeshpatwari/trackify",
      liveUrl: "https://trackify-demo.com",
      image: "/placeholder.svg",
      featured: true,
      gradient: "from-blue-500/20 to-purple-500/20"
    },
    {
      title: "Prep-Mate | AI Interview Assistant", 
      description: "An AI-powered interview preparation platform that generates personalized interview questions using OpenAI's GPT. Features secure JWT authentication and a responsive design built with modern web technologies.",
      technologies: ["React.js", "Node.js", "MongoDB", "OpenAI API", "JWT", "Tailwind CSS"],
      tags: ["AI/ML", "Web App"],
      githubUrl: "https://github.com/brajeshpatwari/prep-mate",
      liveUrl: "https://prep-mate-demo.com", 
      image: "/placeholder.svg",
      featured: false,
      gradient: "from-green-500/20 to-teal-500/20"
    },
  ];

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-primary/10 px-4 py-2 rounded-lg border border-primary/20 mb-8">
              <span className="text-primary font-medium">Let's have a look at my portfolio</span>
            </div>
            
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Featured <span className="text-primary">Projects</span>
            </h2>
            
            <div className="flex justify-end mb-8">
              <Button variant="outline" className="gap-2">
                All projects
                <ExternalLink className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Projects Grid */}
          <div className="space-y-12">
            {projects.map((project, index) => (
              <Card 
                key={index} 
                className={`overflow-hidden group hover:shadow-2xl transition-all duration-500 animate-fade-in backdrop-blur-sm border-2 hover:border-primary/50 ${
                  project.featured ? 'lg:flex lg:items-center' : ''
                }`}
                style={{animationDelay: `${index * 300}ms`}}
              >
                <div className={`${project.featured ? 'lg:w-1/2' : ''}`}>
                  {/* Project Image */}
                  <div className="aspect-video bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center group-hover:bg-gradient-to-br group-hover:from-primary/20 group-hover:to-primary/10 transition-all duration-500 relative overflow-hidden">
                    <div className={`w-full h-full bg-gradient-to-br ${project.gradient} flex items-center justify-center`}>
                      <div className="text-6xl font-bold text-white/20">
                        {project.title.split(' ')[0]}
                      </div>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                </div>
                
                {/* Project Content */}
                <div className={`p-8 ${project.featured ? 'lg:w-1/2' : ''}`}>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, tagIndex) => (
                      <Badge key={tagIndex} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-all duration-300">
                    {project.title}
                  </h3>
                  
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {project.description}
                  </p>
                  
                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, techIndex) => (
                      <div 
                        key={tech} 
                        className="px-3 py-1 bg-muted/50 border border-border/50 rounded-md text-xs font-medium text-foreground hover:bg-primary/10 hover:border-primary/30 transition-all duration-300"
                      >
                        {tech}
                      </div>
                    ))}
                  </div>
                  
                  {/* Action Buttons */}
                  <div className="flex gap-4">
                    <Button 
                      variant="default"
                      onClick={() => window.open(project.liveUrl, '_blank')}
                      className="flex items-center gap-2 hover:scale-105 transition-all duration-300"
                    >
                      Full project
                      <ExternalLink className="w-4 h-4" />
                    </Button>
                    <Button 
                      variant="outline"
                      onClick={() => window.open(project.githubUrl, '_blank')}
                      className="flex items-center gap-2 hover:scale-105 transition-all duration-300"
                    >
                      <Github className="w-4 h-4" />
                      Code
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