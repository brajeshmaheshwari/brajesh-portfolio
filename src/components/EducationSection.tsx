import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { GraduationCap, Download } from "lucide-react";

const EducationSection = () => {
  return (
    <section id="education" className="py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          {/* Section Badge */}
          <div className="inline-flex items-center space-x-2 bg-primary/10 px-4 py-2 rounded-lg border border-primary/20 mb-8">
            <div className="w-2 h-2 bg-primary rounded-full"></div>
            <span className="text-primary font-medium">Education</span>
          </div>

          {/* Section Title */}
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            My <span className="text-primary">Education</span>
          </h2>

          <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
            My academic journey and qualifications that built the foundation for my career.
          </p>

          {/* Education Card */}
          <div className="max-w-2xl mx-auto">
            <Card className="p-8 text-left relative overflow-hidden">
              {/* Background decoration */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -translate-y-16 translate-x-16"></div>
              
              <CardHeader className="pb-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <GraduationCap className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-2xl font-bold mb-2">
                      B.Tech. in Information Technology
                    </CardTitle>
                    <p className="text-lg text-muted-foreground mb-1">
                      Poornima College of Engineering, Jaipur
                    </p>
                    <p className="text-sm text-muted-foreground">
                      2024
                    </p>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="pt-0">
                <div className="mb-6">
                  <div className="inline-flex items-center gap-2 bg-primary/10 px-3 py-1 rounded-full">
                    <span className="text-sm font-medium text-primary">CGPA: 7.73</span>
                  </div>
                </div>
                
                <Button className="w-full sm:w-auto">
                  <Download className="w-4 h-4 mr-2" />
                  Download Resume (PDF)
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;