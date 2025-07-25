import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap } from "lucide-react";

const EducationSection = () => {
  return (
    <section id="education" className="py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl font-bold mb-4 font-poppins">Education</h2>
            <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
          </div>

          {/* Education Card */}
          <div className="animate-scale-in">
            <Card className="overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 border-l-4 border-l-primary">
              <CardContent className="p-8">
                <div className="flex items-start space-x-6">
                  {/* Icon */}
                  <div className="bg-primary/10 p-4 rounded-full flex-shrink-0">
                    <GraduationCap className="w-8 h-8 text-primary" />
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                      <div>
                        <h3 className="text-2xl font-bold text-primary font-poppins mb-2">
                          Bachelor of Technology
                        </h3>
                        <h4 className="text-xl font-semibold text-foreground mb-1">
                          Information Technology
                        </h4>
                        <p className="text-lg text-muted-foreground">
                          Poornima College of Engineering, Jaipur
                        </p>
                      </div>
                      
                      <div className="mt-4 lg:mt-0 lg:text-right">
                        <div className="inline-flex items-center bg-primary/10 px-4 py-2 rounded-full">
                          <span className="text-primary font-semibold">CGPA: 7.73</span>
                        </div>
                        <p className="text-muted-foreground mt-2">Class of 2024</p>
                      </div>
                    </div>

                    {/* Additional Details */}
                    <div className="space-y-3">
                      <div className="bg-muted/50 p-4 rounded-lg">
                        <h5 className="font-semibold mb-2">Key Coursework</h5>
                        <div className="flex flex-wrap gap-2">
                          {[
                            "Data Structures & Algorithms",
                            "Database Management Systems",
                            "Software Engineering",
                            "Web Development",
                            "Object-Oriented Programming",
                            "Computer Networks"
                          ].map((course, index) => (
                            <span 
                              key={index}
                              className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium"
                            >
                              {course}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;