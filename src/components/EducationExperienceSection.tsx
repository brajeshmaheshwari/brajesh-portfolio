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
        "Improved backend efficiency with optimized DB queries and caching"
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
    <section id="education-experience" className="py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-primary/10 px-4 py-2 rounded-lg border border-primary/20 mb-8">
              <div className="w-2 h-2 bg-primary rounded-full"></div>
              <span className="text-primary font-medium">Journey</span>
            </div>
            
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Education & <span className="text-primary">Experience</span>
            </h2>
            
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              My academic background and professional journey in software development.
            </p>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary/50 to-primary/20 rounded-full"></div>
            
            {/* Timeline Items */}
            <div className="space-y-12">
              {allItems.map((item, index) => (
                <div 
                  key={index}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? 'justify-start' : 'justify-end'
                  }`}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 z-10">
                    <div className="w-6 h-6 bg-primary rounded-full border-4 border-background shadow-lg flex items-center justify-center">
                      {item.type === 'education' ? (
                        <GraduationCap className="w-3 h-3 text-background" />
                      ) : (
                        <Briefcase className="w-3 h-3 text-background" />
                      )}
                    </div>
                  </div>

                  {/* Content Card */}
                  <Card 
                    className={`w-5/12 p-6 hover:shadow-2xl transition-all duration-500 hover:scale-105 animate-fade-in group backdrop-blur-sm border-2 hover:border-primary/50 rounded-2xl bg-gradient-to-br from-background to-background/80 ${
                      index % 2 === 0 ? 'mr-8' : 'ml-8'
                    }`}
                    style={{animationDelay: `${index * 200}ms`}}
                  >
                    <div className="space-y-4">
                      {/* Badge */}
                      <Badge 
                        variant={item.type === 'education' ? 'secondary' : 'default'}
                        className="group-hover:scale-105 transition-transform duration-300"
                      >
                        {item.type === 'education' ? 'Education' : 'Experience'}
                      </Badge>

                      {/* Title */}
                      <h3 className="text-xl font-bold group-hover:text-primary transition-colors duration-300">
                        {item.type === 'education' ? (item as any).degree : (item as any).position}
                      </h3>

                      {/* Institution/Company */}
                      <p className="text-lg font-semibold text-muted-foreground">
                        {item.type === 'education' ? (item as any).institution : (item as any).company}
                      </p>

                      {/* Period and Location */}
                      <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          <span>{item.period}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          <span>{item.location}</span>
                        </div>
                      </div>

                      {/* GPA or Responsibilities */}
                      {item.type === 'education' && (item as any).gpa && (
                        <p className="text-sm font-medium text-primary">
                          GPA: {(item as any).gpa}
                        </p>
                      )}

                      {item.type === 'experience' && (item as any).responsibilities && (
                        <ul className="space-y-2 text-sm text-muted-foreground">
                          {(item as any).responsibilities.map((resp: string, idx: number) => (
                            <li key={idx} className="flex items-start gap-2">
                              <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                              <span>{resp}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationExperienceSection;