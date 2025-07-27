const TechStackSection = () => {
  const techStack = [
    {
      name: "JavaScript",
      icon: "🟨",
      color: "from-yellow-400 to-yellow-600"
    },
    {
      name: "React",
      icon: "⚛️",
      color: "from-blue-400 to-blue-600"
    },
    {
      name: "Node.js",
      icon: "🟢",
      color: "from-green-400 to-green-600"
    },
    {
      name: "TypeScript",
      icon: "🔷",
      color: "from-blue-500 to-blue-700"
    },
    {
      name: "Next.js",
      icon: "⬛",
      color: "from-gray-700 to-gray-900"
    },
    {
      name: "Spring Boot",
      icon: "🍃",
      color: "from-green-500 to-green-700"
    },
    {
      name: "MySQL",
      icon: "🐬",
      color: "from-blue-600 to-blue-800"
    },
    {
      name: "MongoDB",
      icon: "🍃",
      color: "from-green-600 to-green-800"
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
                className={`flex-shrink-0 w-32 h-32 bg-gradient-to-br ${tech.color} rounded-2xl flex flex-col items-center justify-center text-white shadow-lg hover:scale-110 transition-all duration-300 hover:shadow-xl group cursor-pointer`}
              >
                <div className="text-3xl mb-2 group-hover:scale-125 transition-transform duration-300">
                  {tech.icon}
                </div>
                <span className="text-sm font-medium text-center group-hover:scale-105 transition-transform duration-300">
                  {tech.name}
                </span>
              </div>
            ))}
            {/* Duplicate set for seamless loop */}
            {techStack.map((tech, index) => (
              <div
                key={`second-${index}`}
                className={`flex-shrink-0 w-32 h-32 bg-gradient-to-br ${tech.color} rounded-2xl flex flex-col items-center justify-center text-white shadow-lg hover:scale-110 transition-all duration-300 hover:shadow-xl group cursor-pointer`}
              >
                <div className="text-3xl mb-2 group-hover:scale-125 transition-transform duration-300">
                  {tech.icon}
                </div>
                <span className="text-sm font-medium text-center group-hover:scale-105 transition-transform duration-300">
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