import { Progress } from "@/components/ui/progress";
import { Card } from "@/components/ui/card";

const SkillsSection = () => {
  const skills = [
    { name: "React.js", level: 90, category: "Frontend" },
    { name: "Spring Boot", level: 85, category: "Backend" },
    { name: "JavaScript/TypeScript", level: 88, category: "Language" },
    { name: "Java", level: 92, category: "Language" },
    { name: "MySQL/PostgreSQL", level: 80, category: "Database" },
    { name: "REST APIs", level: 87, category: "Backend" },
    { name: "Tailwind CSS", level: 85, category: "Frontend" },
    { name: "Git & GitHub", level: 88, category: "Tools" },
  ];

  const categories = ["Frontend", "Backend", "Language", "Database", "Tools"];

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-primary/10 px-4 py-2 rounded-lg border border-primary/20 mb-8">
              <div className="w-2 h-2 bg-primary rounded-full"></div>
              <span className="text-primary font-medium">Skills</span>
            </div>
            
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              My <span className="text-primary">Technical Skills</span>
            </h2>
            
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A showcase of my technical expertise and proficiency levels across different technologies and tools.
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid lg:grid-cols-2 gap-8">
            {categories.map((category) => (
              <Card key={category} className="p-6">
                <h3 className="text-xl font-bold mb-6 text-center">{category}</h3>
                <div className="space-y-6">
                  {skills
                    .filter((skill) => skill.category === category)
                    .map((skill) => (
                      <div key={skill.name} className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="font-medium">{skill.name}</span>
                          <span className="text-sm text-muted-foreground">{skill.level}%</span>
                        </div>
                        <Progress value={skill.level} className="h-2" />
                      </div>
                    ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;