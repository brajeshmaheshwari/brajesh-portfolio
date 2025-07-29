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
    <section id="skills" className="py-20 bg-gradient-to-br from-background via-background/95 to-background overflow-hidden relative">
      {/* Background Animation */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-72 h-72 bg-primary rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
        <div className="absolute top-32 right-10 w-72 h-72 bg-secondary rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-32 w-72 h-72 bg-accent rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-20 animate-fade-in">
            <div className="inline-flex items-center space-x-3 bg-gradient-to-r from-primary/10 to-primary/5 px-6 py-3 rounded-xl border border-primary/20 mb-10 backdrop-blur-sm shadow-lg hover:scale-105 transition-transform duration-300">
              <div className="w-3 h-3 bg-primary rounded-full animate-ping"></div>
              <span className="text-primary font-bold text-lg">Skills & Abilities</span>
            </div>
            
            <h2 className="text-5xl lg:text-6xl font-bold mb-8 bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent animate-pulse-slow">
              My <span className="text-primary animate-bounce-subtle">Technical Skills</span>
            </h2>
            
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed animate-fade-in" style={{animationDelay: "200ms"}}>
              A showcase of my technical expertise and proficiency levels across different technologies and tools.
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {categories.map((category, index) => (
               <Card 
                 key={category} 
                 className="p-10 hover:shadow-2xl transition-all duration-700 hover:scale-110 animate-fade-in group backdrop-blur-lg border-2 hover:border-primary/50 hover:rotate-2 animate-float rounded-3xl bg-gradient-to-br from-card/90 to-card/70 hover:from-card to-card/80 relative overflow-hidden" 
                 style={{animationDelay: `${index * 200}ms`}}
               >
                 {/* Card Background Effect */}
                 <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                 
                 <h3 className="text-3xl font-bold mb-10 text-center group-hover:text-primary transition-all duration-500 group-hover:scale-125 animate-pulse-slow relative z-10 bg-gradient-to-r from-foreground to-primary bg-clip-text">{category}</h3>
                 
                <div className="space-y-8 relative z-10">
                  {skills
                    .filter((skill) => skill.category === category)
                    .map((skill, skillIndex) => (
                       <div key={skill.name} className="space-y-4 group/skill animate-slide-in-right hover:translate-x-4 transition-all duration-500 hover:scale-105" style={{animationDelay: `${skillIndex * 100}ms`}}>
                         <div className="flex justify-between items-center">
                           <span className="font-bold text-lg group-hover/skill:text-primary transition-all duration-500 group-hover/skill:scale-110 animate-bounce-subtle hover:animate-pulse">{skill.name}</span>
                         </div>
                         <div className="relative overflow-hidden">
                           <Progress value={skill.level} className="h-4 transition-all duration-700 hover:h-6 group-hover/skill:shadow-2xl animate-progress-fill rounded-full group-hover/skill:animate-pulse" />
                           <div className="absolute inset-0 bg-gradient-to-r from-primary/30 via-primary/10 to-primary/30 rounded-full opacity-0 group-hover/skill:opacity-100 transition-opacity duration-500 animate-shimmer"></div>
                           <div className="absolute top-0 left-0 h-full bg-gradient-to-r from-transparent via-white/30 to-transparent w-8 animate-slide-right opacity-0 group-hover/skill:opacity-100"></div>
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