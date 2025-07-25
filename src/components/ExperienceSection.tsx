import { Card, CardContent } from "@/components/ui/card";
import { Building2, Calendar, Users } from "lucide-react";

const ExperienceSection = () => {
  const experiences = [
    {
      company: "Hornet Dynamics Pvt. Ltd.",
      position: "Full Stack Developer",
      duration: "Mar 2024 – Dec 2024",
      type: "Full-time",
      achievements: [
        "Led full stack application development using React.js, Node.js, and MySQL",
        "Improved backend efficiency with optimized queries and caching strategies",
        "Collaborated with cross-functional teams to deliver high-quality solutions",
        "Implemented responsive web applications with modern UI/UX principles"
      ],
      technologies: ["React.js", "Node.js", "MySQL", "JavaScript", "REST APIs"]
    },
    {
      company: "Xpertzy",
      position: "Full Stack Developer",
      duration: "Apr 2023 – Sep 2023",
      type: "Internship",
      achievements: [
        "Managed a 3-member development team to deliver web products",
        "Resolved 80+ critical issues, boosting system reliability by 40%",
        "Developed and maintained multiple client projects simultaneously",
        "Mentored junior developers and conducted code reviews"
      ],
      technologies: ["React.js", "Node.js", "MongoDB", "Express.js", "Git"]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl font-bold mb-4 font-poppins">Experience</h2>
            <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-primary/20 hidden lg:block"></div>

            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <div key={index} className="animate-slide-up" style={{ animationDelay: `${index * 200}ms` }}>
                  <Card className="relative lg:ml-20 overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 border-l-4 border-l-primary">
                    {/* Timeline Dot */}
                    <div className="absolute -left-24 top-8 w-4 h-4 bg-primary rounded-full border-4 border-background hidden lg:block"></div>
                    
                    <CardContent className="p-8">
                      <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                        <div className="flex-1">
                          <div className="flex items-center space-x-3 mb-3">
                            <Building2 className="w-6 h-6 text-primary" />
                            <h3 className="text-2xl font-bold text-primary font-poppins">
                              {exp.company}
                            </h3>
                          </div>
                          
                          <h4 className="text-xl font-semibold text-foreground mb-2">
                            {exp.position}
                          </h4>
                          
                          <div className="flex flex-wrap items-center gap-4 text-muted-foreground">
                            <div className="flex items-center space-x-2">
                              <Calendar className="w-4 h-4" />
                              <span>{exp.duration}</span>
                            </div>
                            <div className="flex items-center space-x-2">
                              <Users className="w-4 h-4" />
                              <span>{exp.type}</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Achievements */}
                      <div className="mb-6">
                        <h5 className="font-semibold mb-3 text-foreground">Key Achievements</h5>
                        <ul className="space-y-2">
                          {exp.achievements.map((achievement, achIndex) => (
                            <li key={achIndex} className="flex items-start space-x-3">
                              <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                              <span className="text-muted-foreground leading-relaxed">
                                {achievement}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Technologies */}
                      <div>
                        <h5 className="font-semibold mb-3 text-foreground">Technologies Used</h5>
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech, techIndex) => (
                            <span 
                              key={techIndex}
                              className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium hover:bg-primary/20 transition-colors"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;