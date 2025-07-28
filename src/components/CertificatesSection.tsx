import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Award } from "lucide-react";

const CertificatesSection = () => {
  const certificates = [
    {
      title: "Certificate of Completion",
      issuer: "Tremaloa",
      description: "This certificate in user experience is awarded by Tremaloa, a specialised studio in UX UI design activities.",
      recipient: "Brajesh Patwari",
      date: "2024",
      type: "UX Design",
      color: "from-purple-500 to-purple-700",
      bgColor: "bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-950/50 to-purple-900/50"
    },
    {
      title: "Google Course Certificate",
      issuer: "Google & Coursera",
      description: "Start the UX Design Process: Empathize, Define, and Ideate",
      recipient: "Brajesh Patwari",
      date: "2023",
      type: "UX Process",
      color: "from-blue-500 to-blue-700",
      bgColor: "bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-950/50 to-blue-900/50"
    },
    {
      title: "Google Course Certificate",
      issuer: "Google & Coursera", 
      description: "Foundations of User Experience (UX) Design",
      recipient: "Brajesh Patwari",
      date: "2023",
      type: "UX Foundations",
      color: "from-green-500 to-green-700",
      bgColor: "bg-gradient-to-br from-green-50 to-green-100 dark:from-green-950/50 to-green-900/50"
    }
  ];

  return (
    <section id="certificates" className="py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-primary/10 px-4 py-2 rounded-lg border border-primary/20 mb-8">
              <div className="w-2 h-2 bg-primary rounded-full"></div>
              <span className="text-primary font-medium">Achievements</span>
            </div>
            
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              <span className="text-primary">Certificates</span>
            </h2>
            
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Courses and achievements in my design journey
            </p>
          </div>

          {/* Certificates Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {certificates.map((cert, index) => (
              <Card 
                key={index}
                className="overflow-hidden group hover:shadow-2xl transition-all duration-500 hover:scale-105 animate-fade-in backdrop-blur-sm border-2 hover:border-primary/50 hover:rotate-1"
                style={{animationDelay: `${index * 200}ms`}}
              >
                {/* Certificate Image/Mockup */}
                <div className={`aspect-[4/3] ${cert.bgColor} flex items-center justify-center group-hover:bg-gradient-to-br group-hover:from-primary/20 group-hover:to-primary/10 transition-all duration-500 relative overflow-hidden p-6`}>
                  <div className="w-full h-full bg-white dark:bg-gray-900 rounded-lg shadow-2xl border-4 border-primary/20 flex flex-col items-center justify-center p-4 group-hover:scale-105 transition-transform duration-500">
                    <div className="w-16 h-16 bg-gradient-to-r from-primary to-primary/70 rounded-full flex items-center justify-center mb-4">
                      <Award className="w-8 h-8 text-white" />
                    </div>
                    <h4 className="font-bold text-sm text-center mb-2 text-foreground">{cert.title}</h4>
                    <p className="text-xs text-muted-foreground text-center mb-4">{cert.issuer}</p>
                    <Badge variant="outline" className="text-xs">
                      {cert.type}
                    </Badge>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                {/* Certificate Details */}
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-lg font-bold mb-1 group-hover:text-primary transition-colors duration-300">
                        {cert.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {cert.issuer} • {cert.date}
                      </p>
                    </div>
                    <Badge variant="secondary" className="shrink-0">
                      {cert.type}
                    </Badge>
                  </div>

                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                    {cert.description}
                  </p>

                  <div className="flex items-center justify-between">
                    <p className="text-sm font-medium text-foreground">
                      {cert.recipient}
                    </p>
                    <Button
                      variant="outline"
                      size="sm"
                      className="hover:scale-110 transition-all duration-300 hover:shadow-lg group/btn"
                      onClick={() => window.open('#', '_blank')}
                    >
                      <ExternalLink className="w-4 h-4 mr-2 group-hover/btn:rotate-12 transition-transform duration-300" />
                      View
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CertificatesSection;