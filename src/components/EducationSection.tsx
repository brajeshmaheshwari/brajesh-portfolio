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

          {/* Education Cards */}
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* College Education */}
            <Card className="p-8 text-left relative overflow-hidden hover:shadow-xl transition-all duration-500 group animate-fade-in hover:scale-105">
              {/* Background decoration */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -translate-y-16 translate-x-16 group-hover:bg-primary/20 transition-all duration-500 group-hover:scale-150"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-secondary/5 rounded-full translate-y-12 -translate-x-12 group-hover:bg-secondary/15 transition-all duration-500 group-hover:scale-125"></div>
              
              <CardHeader className="pb-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <GraduationCap className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                      B.Tech. in Information Technology
                    </CardTitle>
                    <p className="text-base text-muted-foreground mb-1">
                      Poornima College of Engineering, Jaipur
                    </p>
                    <p className="text-sm text-muted-foreground">
                      2024
                    </p>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="pt-0">
                <div className="inline-flex items-center gap-2 bg-primary/10 px-3 py-1 rounded-full">
                  <span className="text-sm font-medium text-primary">CGPA: 7.73</span>
                </div>
              </CardContent>
            </Card>

            {/* School Education */}
            <Card className="p-8 text-left relative overflow-hidden hover:shadow-xl transition-all duration-500 group animate-fade-in hover:scale-105" style={{animationDelay: '0.2s'}}>
              {/* Background decoration */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -translate-y-16 translate-x-16 group-hover:bg-primary/20 transition-all duration-500 group-hover:scale-150"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-secondary/5 rounded-full translate-y-12 -translate-x-12 group-hover:bg-secondary/15 transition-all duration-500 group-hover:scale-125"></div>
              
              <CardHeader className="pb-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <svg className="w-6 h-6 text-primary" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 3L1 9l4 2.18v6L12 21l7-3.82v-6l2-1.09V17h2V9L12 3zm6.82 6L12 12.72 5.18 9 12 5.28 18.82 9zM17 15.99l-5 2.73-5-2.73v-3.72L12 15l5-2.73v3.72z"/>
                    </svg>
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                      Senior Secondary Education
                    </CardTitle>
                    <p className="text-base text-muted-foreground mb-1">
                      Kendriya Vidyalaya, Bhilwara
                    </p>
                    <p className="text-sm text-muted-foreground">
                      2020
                    </p>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="pt-0">
                <div className="inline-flex items-center gap-2 bg-primary/10 px-3 py-1 rounded-full">
                  <span className="text-sm font-medium text-primary">Science Stream</span>
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