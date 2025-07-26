import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin } from "lucide-react";

const ExperienceSection = () => {
  const experiences = [
    {
      title: "Full Stack Developer",
      company: "Tech Solutions Inc.",
      location: "Remote",
      duration: "Jan 2022 - Present",
      description: "Developed and maintained web applications using React, Spring Boot, and MySQL. Led a team of 3 developers and improved application performance by 40%.",
      technologies: ["React", "Spring Boot", "MySQL", "REST APIs", "AWS"],
    },
    {
      title: "Software Developer",
      company: "Digital Innovations Ltd.",
      location: "Bangalore, India",
      duration: "Jun 2021 - Dec 2021",
      description: "Built responsive web applications and RESTful APIs. Collaborated with cross-functional teams to deliver high-quality software solutions.",
      technologies: ["Java", "JavaScript", "PostgreSQL", "Git"],
    },
    {
      title: "Junior Developer",
      company: "StartUp Hub",
      location: "Pune, India",
      duration: "Jan 2021 - May 2021",
      description: "Assisted in developing frontend components and learned best practices in software development. Contributed to code reviews and testing.",
      technologies: ["HTML", "CSS", "JavaScript", "React"],
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
              <Card key={index} className="p-8 relative">
                {/* Timeline Line */}
                {index !== experiences.length - 1 && (
                  <div className="absolute left-8 top-20 w-0.5 h-16 bg-primary/20"></div>
                )}
                
                {/* Timeline Dot */}
                <div className="absolute left-6 top-8 w-4 h-4 bg-primary rounded-full border-4 border-background"></div>
                
                <div className="ml-12">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold mb-1">{exp.title}</h3>
                      <p className="text-lg text-primary font-medium">{exp.company}</p>
                    </div>
                    <div className="flex flex-col lg:items-end gap-2 mt-2 lg:mt-0">
                      <div className="flex items-center gap-1 text-muted-foreground">
                        <Calendar className="w-4 h-4" />
                        <span className="text-sm">{exp.duration}</span>
                      </div>
                      <div className="flex items-center gap-1 text-muted-foreground">
                        <MapPin className="w-4 h-4" />
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