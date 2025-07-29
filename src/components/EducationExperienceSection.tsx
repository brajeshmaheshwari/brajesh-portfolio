import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Briefcase, Calendar, MapPin } from "lucide-react";

const EducationExperienceSection = () => {
  const education = [
    {
      degree: "B.Tech. in Information Technology",
      institution: "Poornima College of Engineering, Jaipur",
      location: "Jaipur, Rajasthan",
      period: "2020 - 2024",
      gpa: "CGPA: 7.73",
      type: "education"
    },
    {
      degree: "12th from Kendriya Vidhalaya, Bhilwara",
      institution: "Kendriya Vidhalaya",
      location: "Bhilwara, Rajasthan", 
      period: "2018 - 2020",
      gpa: "Percentage: 75.6%",
      type: "education"
    }
  ];

  const experience = [
    {
      position: "Software Developer",
      company: "Hornet Dynamics Pvt. Ltd.",
      location: "Remote",
      period: "Mar 2024 – Dec 2024",
      responsibilities: [
        "Delivered 4–5 full stack applications from end to end",
        "Improved backend efficiency with optimized DB queries and caching",
        "Developed and maintained end-to-end web applications using JavaScript, React.js, Node.js, java, springboot and MySQL"
      ],
      type: "experience"
    },
    {
      position: "Full Stack Developer",
      company: "Xpertzy",
      location: "Remote",
      period: "Apr 2023 – Sep 2023",
      responsibilities: [
        "Led 3-member team, launched 3 products in 2 months",
        "Fixed 80+ major bugs, improving uptime by 40%",
        "Remote-first role, self-driven problem solving"
      ],
      type: "experience"
    }
  ];

  const allItems = [...education, ...experience].sort((a, b) => {
    const aYear = parseInt(a.period.split(' - ')[1] === 'Present' ? '2024' : a.period.split(' - ')[1]);
    const bYear = parseInt(b.period.split(' - ')[1] === 'Present' ? '2024' : b.period.split(' - ')[1]);
    return bYear - aYear;
  });

  return (
    <section id="education-experience" className="py-20 bg-gradient-to-br from-background to-background/90">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-20 animate-fade-in">
            <div className="inline-flex items-center space-x-3 bg-gradient-to-r from-primary/10 to-primary/5 px-6 py-3 rounded-xl border border-primary/20 mb-10 backdrop-blur-sm shadow-lg">
              <div className="w-3 h-3 bg-primary rounded-full animate-ping"></div>
              <span className="text-primary font-bold text-lg">My Journey</span>
            </div>
            
            <h2 className="text-5xl lg:text-6xl font-bold mb-8 bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent">
              Education & <span className="text-primary">Experience</span>
            </h2>
            
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              My academic background and professional journey in software development.
            </p>
          </div>

          {/* Experience and Education Grid */}
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Experience Section */}
            <div className="space-y-8">
              <div className="text-center mb-10">
                <h3 className="text-3xl font-bold text-primary mb-4 flex items-center justify-center gap-3">
                  <Briefcase className="w-8 h-8" />
                  Experience
                </h3>
                <div className="w-24 h-1 bg-gradient-to-r from-primary to-primary/50 mx-auto rounded-full"></div>
              </div>
              
              <div className="space-y-6">
                {experience.map((exp, index) => (
                  <Card 
                    key={index}
                    className="p-8 h-[500px] flex flex-col hover:shadow-2xl transition-all duration-700 hover:scale-105 animate-slide-in-left group backdrop-blur-sm border-2 hover:border-primary/50 rounded-3xl bg-gradient-to-br from-card/80 to-card/60 hover:rotate-1"
                    style={{animationDelay: `${index * 300}ms`}}
                  >
                    <div className="space-y-6">
                      <Badge 
                        variant="default"
                        className="group-hover:scale-110 transition-transform duration-300 bg-gradient-to-r from-primary to-primary/80 text-primary-foreground px-4 py-2 text-sm font-bold"
                      >
                        Experience
                      </Badge>

                      <h4 className="text-2xl font-bold group-hover:text-primary transition-colors duration-300">
                        {exp.position}
                      </h4>

                      <p className="text-xl font-semibold text-muted-foreground">
                        {exp.company}
                      </p>

                      <div className="flex flex-wrap gap-4 text-base text-muted-foreground">
                        <div className="flex items-center gap-2">
                          <Calendar className="w-5 h-5 text-primary" />
                          <span>{exp.period}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin className="w-5 h-5 text-primary" />
                          <span>{exp.location}</span>
                        </div>
                      </div>

                      <ul className="space-y-3 text-base text-muted-foreground">
                        {exp.responsibilities.map((resp: string, idx: number) => (
                          <li key={idx} className="flex items-start gap-3 hover:translate-x-2 transition-transform duration-300">
                            <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0 animate-pulse"></div>
                            <span className="leading-relaxed">{resp}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </Card>
                ))}
              </div>
            </div>

            {/* Education Section */}
            <div className="space-y-8">
              <div className="text-center mb-10">
                <h3 className="text-3xl font-bold text-primary mb-4 flex items-center justify-center gap-3">
                  <GraduationCap className="w-8 h-8" />
                  Education
                </h3>
                <div className="w-24 h-1 bg-gradient-to-r from-primary to-primary/50 mx-auto rounded-full"></div>
              </div>
              
              <div className="space-y-6">
                {education.map((edu, index) => (
                  <Card 
                    key={index}
                    className="p-8 h-[500px] flex flex-col hover:shadow-2xl transition-all duration-700 hover:scale-105 animate-slide-in-right group backdrop-blur-sm border-2 hover:border-primary/50 rounded-3xl bg-gradient-to-br from-card/80 to-card/60 hover:-rotate-1"
                    style={{animationDelay: `${index * 300 + 150}ms`}}
                  >
                    <div className="space-y-6">
                      <Badge 
                        variant="secondary"
                        className="group-hover:scale-110 transition-transform duration-300 bg-gradient-to-r from-secondary to-secondary/80 px-4 py-2 text-sm font-bold"
                      >
                        Education
                      </Badge>

                      <h4 className="text-2xl font-bold group-hover:text-primary transition-colors duration-300">
                        {(edu as any).degree}
                      </h4>

                      <p className="text-xl font-semibold text-muted-foreground">
                        {(edu as any).institution}
                      </p>

                      <div className="flex flex-wrap gap-4 text-base text-muted-foreground">
                        <div className="flex items-center gap-2">
                          <Calendar className="w-5 h-5 text-primary" />
                          <span>{edu.period}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin className="w-5 h-5 text-primary" />
                          <span>{edu.location}</span>
                        </div>
                      </div>

                      <div className="bg-primary/10 rounded-2xl p-4 border border-primary/20">
                        <p className="text-lg font-bold text-primary">
                          {(edu as any).gpa}
                        </p>
                      </div>
                    </div>
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

export default EducationExperienceSection;