import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const TechnicalSkillsSection = () => {
  const techStack = [
    { name: "React.js", icon: "⚛️", category: "Frontend" },
    { name: "Node.js", icon: "🟢", category: "Backend" },
    { name: "TypeScript", icon: "🔷", category: "Language" },
    { name: "JavaScript", icon: "🟨", category: "Language" },
    { name: "Java", icon: "☕", category: "Language" },
    { name: "Spring Boot", icon: "🍃", category: "Backend" },
    { name: "MySQL", icon: "🐬", category: "Database" },
    { name: "MongoDB", icon: "🥭", category: "Database" },
    { name: "Git", icon: "📚", category: "Tools" },
    { name: "Docker", icon: "🐳", category: "Tools" },
    { name: "REST API", icon: "🔗", category: "Backend" },
    { name: "JWT", icon: "🔐", category: "Security" },
    { name: "Tailwind CSS", icon: "🎨", category: "Frontend" },
    { name: "Express.js", icon: "🚂", category: "Backend" },
    { name: "Python", icon: "🐍", category: "Language" },
    { name: "JDBC", icon: "🔌", category: "Database" },
  ];

  const categories = ["Frontend", "Backend", "Language", "Database", "Tools", "Security"];

  return (
    <section id="technical-skills" className="py-20 bg-gradient-to-br from-background/50 to-background relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-r from-primary to-secondary rounded-full animate-blob filter blur-xl"></div>
        <div className="absolute top-40 right-20 w-64 h-64 bg-gradient-to-r from-secondary to-accent rounded-full animate-blob animation-delay-2000 filter blur-xl"></div>
        <div className="absolute bottom-20 left-40 w-64 h-64 bg-gradient-to-r from-accent to-primary rounded-full animate-blob animation-delay-4000 filter blur-xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-20 animate-fade-in">
            <div className="inline-flex items-center space-x-3 bg-gradient-to-r from-primary/10 to-primary/5 px-6 py-3 rounded-xl border border-primary/20 mb-10 backdrop-blur-sm shadow-lg">
              <div className="w-3 h-3 bg-primary rounded-full animate-ping"></div>
              <span className="text-primary font-bold text-lg">Technologies</span>
            </div>
            
            <h2 className="text-5xl lg:text-6xl font-bold mb-8 bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent">
              Technologies I <span className="text-primary">Work With</span>
            </h2>
            
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Comprehensive list of technologies, frameworks, and tools I use to build modern applications.
            </p>
          </div>

          {/* Tech Stack Grid by Category */}
          <div className="space-y-16">
            {categories.map((category, categoryIndex) => (
              <div key={category} className="animate-fade-in" style={{animationDelay: `${categoryIndex * 200}ms`}}>
                <div className="text-center mb-10">
                  <h3 className="text-3xl font-bold text-primary mb-4">{category}</h3>
                  <div className="w-24 h-1 bg-gradient-to-r from-primary to-primary/50 mx-auto rounded-full"></div>
                </div>
                
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
                  {techStack
                    .filter(tech => tech.category === category)
                    .map((tech, techIndex) => (
                      <Card 
                        key={tech.name}
                        className="p-6 hover:shadow-2xl transition-all duration-700 hover:scale-110 animate-fade-in group backdrop-blur-sm border-2 hover:border-primary/50 rounded-2xl bg-gradient-to-br from-card/80 to-card/60 hover:rotate-3 relative overflow-hidden"
                        style={{animationDelay: `${techIndex * 100}ms`}}
                      >
                        {/* Hover Gradient Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        
                        <div className="text-center space-y-4 relative z-10">
                          {/* Icon */}
                          <div className="text-5xl group-hover:scale-125 transition-transform duration-500 group-hover:animate-bounce">
                            {tech.icon}
                          </div>
                          
                          {/* Tech Name */}
                          <h4 className="font-bold text-lg group-hover:text-primary transition-colors duration-300 group-hover:scale-105">
                            {tech.name}
                          </h4>
                          
                          {/* Category Badge */}
                          <Badge 
                            variant="secondary" 
                            className="group-hover:scale-110 transition-transform duration-300 bg-gradient-to-r from-secondary/80 to-secondary/60 text-xs"
                          >
                            {tech.category}
                          </Badge>
                        </div>
                        
                        {/* Animated Border */}
                        <div className="absolute inset-0 border-2 border-transparent group-hover:border-primary/30 rounded-2xl transition-colors duration-500"></div>
                      </Card>
                    ))
                  }
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnicalSkillsSection;