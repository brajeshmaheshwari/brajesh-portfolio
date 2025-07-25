import { Card, CardContent } from "@/components/ui/card";
import { Code, Database, Globe, Wrench, Lightbulb, Users, Zap } from "lucide-react";

const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Languages",
      icon: Code,
      skills: ["Java", "C++", "JavaScript", "TypeScript", "Python"],
      color: "bg-blue-500"
    },
    {
      title: "Frontend",
      icon: Globe,
      skills: ["React.js", "Next.js", "HTML5", "CSS3", "Tailwind CSS", "Bootstrap"],
      color: "bg-green-500"
    },
    {
      title: "Backend",
      icon: Database,
      skills: ["Spring", "Spring Boot", "Node.js", "Express.js", "REST APIs"],
      color: "bg-purple-500"
    },
    {
      title: "Databases",
      icon: Database,
      skills: ["MySQL", "MongoDB", "PostgreSQL", "JDBC"],
      color: "bg-orange-500"
    },
    {
      title: "Tools & Technologies",
      icon: Wrench,
      skills: ["Git", "Postman", "JWT", "OpenAI API", "Docker", "AWS"],
      color: "bg-red-500"
    }
  ];

  const softSkills = [
    { skill: "Leadership", icon: Users, description: "Leading development teams" },
    { skill: "Innovation", icon: Lightbulb, description: "Creative problem solving" },
    { skill: "Quick Learning", icon: Zap, description: "Adapting to new technologies" }
  ];

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl font-bold mb-4 font-poppins">Skills & Expertise</h2>
            <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
            <p className="text-lg text-muted-foreground mt-4 max-w-2xl mx-auto">
              A comprehensive toolkit of modern technologies and frameworks for full-stack development
            </p>
          </div>

          {/* Technical Skills */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold mb-8 text-center font-poppins">Technical Skills</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {skillCategories.map((category, index) => (
                <Card 
                  key={index} 
                  className="group overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 animate-scale-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-3 mb-4">
                      <div className={`p-3 rounded-full ${category.color}/10`}>
                        <category.icon className={`w-6 h-6 ${category.color.replace('bg-', 'text-')}`} />
                      </div>
                      <h4 className="text-lg font-semibold font-poppins">{category.title}</h4>
                    </div>
                    
                    <div className="space-y-2">
                      {category.skills.map((skill, skillIndex) => (
                        <div key={skillIndex} className="flex items-center justify-between group-hover:translate-x-1 transition-transform">
                          <span className="text-muted-foreground font-medium">{skill}</span>
                          <div className="w-2 h-2 bg-primary rounded-full opacity-60"></div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Soft Skills */}
          <div>
            <h3 className="text-2xl font-bold mb-8 text-center font-poppins">Soft Skills</h3>
            <div className="grid md:grid-cols-3 gap-6">
              {softSkills.map((item, index) => (
                <Card 
                  key={index} 
                  className="group text-center overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 animate-scale-in"
                  style={{ animationDelay: `${(index + 5) * 100}ms` }}
                >
                  <CardContent className="p-8">
                    <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                      <item.icon className="w-8 h-8 text-primary" />
                    </div>
                    <h4 className="text-xl font-semibold mb-2 font-poppins">{item.skill}</h4>
                    <p className="text-muted-foreground">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;