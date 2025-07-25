import { Card, CardContent } from "@/components/ui/card";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl font-bold mb-4 font-poppins">About Me</h2>
            <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-6 animate-slide-up">
              <h3 className="text-2xl font-semibold text-primary font-poppins">
                Hello, I am Brajesh Patwari
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                A passionate full stack developer and software engineer with expertise in building 
                scalable web applications. I love working with modern technologies like React, 
                Spring Boot, and Node.js to create innovative solutions.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Based in Bhilwara, Rajasthan, India, I bring a unique blend of technical skills 
                and creative problem-solving to every project. My experience spans from frontend 
                development to backend architecture and database design.
              </p>

              {/* Location */}
              <div className="flex items-center space-x-3 text-muted-foreground">
                <div className="w-5 h-5 bg-primary rounded-full flex items-center justify-center">
                  <div className="w-2 h-2 bg-primary-foreground rounded-full"></div>
                </div>
                <span className="font-medium">Bhilwara, Rajasthan, India</span>
              </div>
            </div>

            {/* Right Content - Soft Skills */}
            <div className="space-y-6 animate-slide-up">
              <h4 className="text-xl font-semibold font-poppins">Core Strengths</h4>
              <div className="grid gap-4">
                {[
                  { skill: "Leadership", description: "Leading development teams effectively" },
                  { skill: "Innovation", description: "Creating innovative technical solutions" },
                  { skill: "Quick Learning", description: "Adapting to new technologies rapidly" },
                  { skill: "Problem Solving", description: "Analytical approach to complex challenges" }
                ].map((item, index) => (
                  <Card key={index} className="transition-all hover:shadow-lg hover:scale-105">
                    <CardContent className="p-4">
                      <h5 className="font-semibold text-primary mb-2">{item.skill}</h5>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;