import { Progress } from "@/components/ui/progress";
import { Card } from "@/components/ui/card";

const SkillsSection = () => {
  const skills = [
    { name: "C++", level: 85, category: "Languages" },
    { name: "Java", level: 92, category: "Languages" },
    { name: "JavaScript", level: 88, category: "Languages" },
    { name: "React.js", level: 90, category: "Frontend" },
    { name: "Next.js", level: 85, category: "Frontend" },
    { name: "Tailwind CSS", level: 88, category: "Frontend" },
    { name: "HTML5", level: 90, category: "Frontend" },
    { name: "CSS3", level: 85, category: "Frontend" },
    { name: "Spring Boot", level: 90, category: "Backend" },
    { name: "Node.js", level: 85, category: "Backend" },
    { name: "Express.js", level: 82, category: "Backend" },
    { name: "MySQL", level: 85, category: "Database" },
    { name: "MongoDB", level: 80, category: "Database" },
    { name: "JWT", level: 85, category: "Tools" },
    { name: "Git", level: 88, category: "Tools" },
    { name: "JDBC", level: 80, category: "Tools" },
    { name: "Postman", level: 85, category: "Tools" },
    { name: "Mongoose", level: 78, category: "Tools" },
    { name: "Leadership", level: 90, category: "Soft Skills" },
    { name: "Innovation", level: 88, category: "Soft Skills" },
    { name: "Fast Learner", level: 92, category: "Soft Skills" },
  ];

  const categories = ["Languages", "Frontend", "Backend", "Database", "Tools", "Soft Skills"];

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
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((category, index) => (
               <Card key={category} className="p-8 hover:shadow-2xl transition-all duration-500 hover:scale-[1.05] animate-fade-in group backdrop-blur-sm border-2 hover:border-primary/50 hover:rotate-1" style={{animationDelay: `${index * 150}ms`}}>
                 <h3 className="text-2xl font-bold mb-8 text-center group-hover:text-primary transition-all duration-300 group-hover:scale-110">{category}</h3>
                <div className="space-y-6">
                  {skills
                    .filter((skill) => skill.category === category)
                    .map((skill, skillIndex) => (
                       <div key={skill.name} className="space-y-3 group/skill animate-slide-in-right" style={{animationDelay: `${skillIndex * 50}ms`}}>
                         <div className="flex justify-between items-center">
                           <span className="font-semibold group-hover/skill:text-primary transition-all duration-300 group-hover/skill:scale-105">{skill.name}</span>
                         </div>
                         <div className="relative">
                           <Progress value={skill.level} className="h-3 transition-all duration-500 hover:h-4 group-hover/skill:shadow-lg" />
                           <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-primary/5 rounded-full opacity-0 group-hover/skill:opacity-100 transition-opacity duration-300"></div>
                         </div>
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