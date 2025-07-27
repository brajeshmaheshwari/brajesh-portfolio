import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin } from "lucide-react";

const ExperienceSection = () => {
  const experiences = [
    {
      title: "Full Stack Developer",
      company: "Hornet Dynamics Pvt. Ltd.",
      location: "Remote",
      duration: "Mar 2024 – Dec 2024",
      description: "Delivered 4–5 full stack applications from end to end. Improved backend efficiency with optimized DB queries and caching strategies.",
      technologies: ["React.js", "Node.js", "MySQL", "Express.js", "REST APIs"],
    },
    {
      title: "Full Stack Developer",
      company: "Xpertzy",
      location: "Remote",
      duration: "Apr 2023 – Sep 2023",
      description: "Led 3-member team, launched 3 products in 2 months. Fixed 80+ major bugs, improving uptime by 40%. Remote-first role with self-driven problem solving.",
      technologies: ["React.js", "Node.js", "MongoDB", "Express.js", "Git"],
    },
  ];

  return (
    <section id="experience" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-primary/10 px-4 py-2 rounded-lg border border-primary/20 mb-8">
              <div className="w-2 h-2 bg-primary rounded-full"></div>
              <span className="text-primary font-medium">Experience</span>
            </div>
            
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              My Work <span className="text-primary">Experience</span>
            </h2>
            
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A timeline of my professional journey and the impact I've made at various organizations.
            </p>
          </div>

          {/* Experience Timeline */}
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <Card key={index} className="p-8 relative hover:shadow-lg transition-all duration-300 hover:scale-[1.02] animate-fade-in group" style={{animationDelay: `${index * 200}ms`}}>
                {/* Timeline Line */}
                {index !== experiences.length - 1 && (
                  <div className="absolute left-8 top-20 w-0.5 h-16 bg-primary/20 group-hover:bg-primary/40 transition-colors"></div>
                )}
                
                {/* Timeline Dot */}
                <div className="absolute left-6 top-8 w-4 h-4 bg-primary rounded-full border-4 border-background group-hover:scale-125 transition-transform duration-300"></div>
                
                <div className="ml-12">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold mb-1">{exp.title}</h3>
                      <p className="text-lg text-primary font-medium">{exp.company}</p>
                    </div>
                  <div className="flex flex-col lg:items-end gap-2 mt-2 lg:mt-0">
                      <div className="flex items-center gap-1 text-muted-foreground">
                        <Calendar className="w-4 h-4 group-hover:text-primary transition-colors" />
                        <span className="text-sm">{exp.duration}</span>
                      </div>
                      <div className="flex items-center gap-1 text-muted-foreground">
                        <MapPin className="w-4 h-4 group-hover:text-primary transition-colors" />
                        <span className="text-sm">{exp.location}</span>
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {exp.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary">{tech}</Badge>
                    ))}
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

export default ExperienceSection;