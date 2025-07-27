// Import real tech images
import reactImg from "@/assets/tech/react.svg";
import jsImg from "@/assets/tech/javascript.svg";
import tsImg from "@/assets/tech/typescript.svg";
import nodeImg from "@/assets/tech/nodejs.svg";
import springImg from "@/assets/tech/spring.svg";
import javaImg from "@/assets/tech/java.svg";
import pythonImg from "@/assets/tech/python.svg";
import mongoImg from "@/assets/tech/mongodb.svg";
import mysqlImg from "@/assets/tech/mysql.svg";
import dockerImg from "@/assets/tech/docker.svg";
import gitImg from "@/assets/tech/git.svg";
import { Globe } from "lucide-react";

const TechStackSection = () => {
  const techStack = [
    {
      name: "React",
      image: reactImg,
      color: "from-cyan-400/20 to-blue-500/20",
      bgColor: "bg-gradient-to-br from-cyan-50 to-blue-50 dark:from-cyan-950/50 to-blue-950/50"
    },
    {
      name: "JavaScript", 
      image: jsImg,
      color: "from-yellow-400/20 to-yellow-600/20",
      bgColor: "bg-gradient-to-br from-yellow-50 to-yellow-100 dark:from-yellow-950/50 to-yellow-900/50"
    },
    {
      name: "TypeScript",
      image: tsImg, 
      color: "from-blue-400/20 to-blue-600/20",
      bgColor: "bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-950/50 to-blue-900/50"
    },
    {
      name: "Node.js",
      image: nodeImg,
      color: "from-green-400/20 to-green-600/20",
      bgColor: "bg-gradient-to-br from-green-50 to-green-100 dark:from-green-950/50 to-green-900/50"
    },
    {
      name: "Spring Boot",
      image: springImg,
      color: "from-green-500/20 to-green-700/20",
      bgColor: "bg-gradient-to-br from-green-50 to-emerald-100 dark:from-green-950/50 to-emerald-900/50"
    },
    {
      name: "Java",
      image: javaImg,
      color: "from-red-400/20 to-orange-600/20",
      bgColor: "bg-gradient-to-br from-red-50 to-orange-100 dark:from-red-950/50 to-orange-900/50"
    },
    {
      name: "Python",
      image: pythonImg,
      color: "from-blue-400/20 to-yellow-500/20",
      bgColor: "bg-gradient-to-br from-blue-50 to-yellow-100 dark:from-blue-950/50 to-yellow-900/50"
    },
    {
      name: "MongoDB",
      image: mongoImg,
      color: "from-green-500/20 to-green-700/20",
      bgColor: "bg-gradient-to-br from-green-50 to-green-100 dark:from-green-950/50 to-green-900/50"
    },
    {
      name: "MySQL",
      image: mysqlImg,
      color: "from-blue-400/20 to-blue-600/20",
      bgColor: "bg-gradient-to-br from-blue-50 to-cyan-100 dark:from-blue-950/50 to-cyan-900/50"
    },
    {
      name: "Docker",
      image: dockerImg,
      color: "from-blue-500/20 to-blue-700/20",
      bgColor: "bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-950/50 to-blue-900/50"
    },
    {
      name: "Git",
      image: gitImg,
      color: "from-orange-400/20 to-red-500/20",
      bgColor: "bg-gradient-to-br from-orange-50 to-red-100 dark:from-orange-950/50 to-red-900/50"
    },
    {
      name: "TailwindCSS",
      icon: Globe,
      color: "from-cyan-400/20 to-teal-500/20",
      bgColor: "bg-gradient-to-br from-cyan-50 to-teal-100 dark:from-cyan-950/50 to-teal-900/50"
    }
  ];

  return (
    <section className="py-16 bg-muted/50 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 bg-primary/10 px-4 py-2 rounded-lg border border-primary/20 mb-6">
            <div className="w-2 h-2 bg-primary rounded-full animate-ping"></div>
            <span className="text-primary font-medium">Tech Stack</span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Technologies I <span className="text-primary">Work With</span>
          </h2>
        </div>

        {/* Scrolling Animation Container */}
        <div className="relative">
          <div className="flex animate-scroll-left space-x-8">
            {/* First set */}
            {techStack.map((tech, index) => (
              <div
                key={`first-${index}`}
                className={`flex-shrink-0 w-36 h-36 ${tech.bgColor} border border-border/50 rounded-2xl flex flex-col items-center justify-center shadow-lg hover:scale-110 transition-all duration-300 hover:shadow-xl group cursor-pointer hover:border-primary/50`}
              >
                <div className="w-16 h-16 mb-3 group-hover:scale-110 transition-transform duration-300 flex items-center justify-center">
                  {tech.image ? (
                    <img 
                      src={tech.image} 
                      alt={tech.name}
                      className="w-full h-full object-contain"
                    />
                  ) : (
                    <tech.icon className="w-12 h-12 text-primary" />
                  )}
                </div>
                <span className="text-sm font-medium text-center group-hover:scale-105 transition-transform duration-300 text-foreground">
                  {tech.name}
                </span>
              </div>
            ))}
            {/* Duplicate set for seamless loop */}
            {techStack.map((tech, index) => (
              <div
                key={`second-${index}`}
                className={`flex-shrink-0 w-36 h-36 ${tech.bgColor} border border-border/50 rounded-2xl flex flex-col items-center justify-center shadow-lg hover:scale-110 transition-all duration-300 hover:shadow-xl group cursor-pointer hover:border-primary/50`}
              >
                <div className="w-16 h-16 mb-3 group-hover:scale-110 transition-transform duration-300 flex items-center justify-center">
                  {tech.image ? (
                    <img 
                      src={tech.image} 
                      alt={tech.name}
                      className="w-full h-full object-contain"
                    />
                  ) : (
                    <tech.icon className="w-12 h-12 text-primary" />
                  )}
                </div>
                <span className="text-sm font-medium text-center group-hover:scale-105 transition-transform duration-300 text-foreground">
                  {tech.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

    </section>
  );
};

export default TechStackSection;