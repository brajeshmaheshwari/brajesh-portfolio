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
              <Card key={index} className="overflow-hidden group hover:shadow-2xl transition-all duration-500 hover:scale-[1.05] animate-fade-in backdrop-blur-sm border-2 hover:border-primary/50 hover:rotate-1" style={{animationDelay: `${index * 300}ms`}}>
                 {/* Project Image */}
                 <div className="aspect-video bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center group-hover:bg-gradient-to-br group-hover:from-primary/20 group-hover:to-primary/10 transition-all duration-500 relative overflow-hidden">
                   <img 
                     src={project.image} 
                     alt={project.title}
                     className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 filter group-hover:brightness-110"
                   />
                   <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                 </div>
                
                 {/* Project Content */}
                 <div className="p-8">
                   <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-all duration-300 group-hover:scale-105">{project.title}</h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  
                   {/* Technologies */}
                   <div className="flex flex-wrap gap-3 mb-6">
                     {project.technologies.map((tech, techIndex) => (
                       <div 
                         key={tech} 
                         className="px-4 py-2 bg-primary/10 border border-primary/20 rounded-xl text-sm font-medium text-primary hover:bg-primary/20 hover:scale-105 transition-all duration-300 cursor-pointer shadow-sm hover:shadow-md backdrop-blur-sm animate-fade-in"
                         style={{animationDelay: `${techIndex * 100}ms`}}
                       >
                         {tech}
                       </div>
                     ))}
                   </div>
                  
                   {/* Action Buttons */}
                   <div className="flex gap-4">
                     <Button 
                       variant="outline" 
                       size="lg"
                       onClick={() => window.open(project.githubUrl, '_blank')}
                       className="flex items-center gap-3 hover:scale-110 transition-all duration-300 hover:shadow-lg group/btn border-2 px-6 py-3"
                     >
                       <Github className="w-5 h-5 group-hover/btn:rotate-12 transition-transform duration-300" />
                       Code
                     </Button>
                     <Button 
                       size="lg"
                       onClick={() => window.open(project.liveUrl, '_blank')}
                       className="flex items-center gap-3 hover:scale-110 transition-all duration-300 hover:shadow-lg group/btn px-6 py-3"
                     >
                       <ExternalLink className="w-5 h-5 group-hover/btn:rotate-12 transition-transform duration-300" />
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