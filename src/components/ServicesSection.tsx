import { Card } from "@/components/ui/card";
import { Code, Database, Globe, Smartphone, Cloud, Settings } from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      icon: Globe,
      title: "Web Development",
      description: "Full-stack web applications using modern frameworks like React, Spring Boot, and responsive design principles.",
      features: ["Responsive Design", "Performance Optimization", "SEO Friendly", "Cross-browser Compatibility"],
    },
    {
      icon: Code,
      title: "Frontend Development",
      description: "Creating engaging user interfaces with React, TypeScript, and modern CSS frameworks for optimal user experience.",
      features: ["React/Next.js", "TypeScript", "Tailwind CSS", "State Management"],
    },
    {
      icon: Database,
      title: "Backend Development",
      description: "Robust server-side solutions with Spring Boot, RESTful APIs, and database integration for scalable applications.",
      features: ["REST APIs", "Spring Boot", "Database Design", "Authentication"],
    },
    {
      icon: Smartphone,
      title: "Responsive Design",
      description: "Mobile-first approach ensuring your application works seamlessly across all devices and screen sizes.",
      features: ["Mobile First", "Touch Friendly", "Fast Loading", "Adaptive Layouts"],
    },
    {
      icon: Cloud,
      title: "Cloud Integration",
      description: "Deploying and managing applications on cloud platforms with scalability and reliability in mind.",
      features: ["AWS/Azure", "Docker", "CI/CD", "Monitoring"],
    },
    {
      icon: Settings,
      title: "API Development",
      description: "Designing and implementing RESTful APIs with proper documentation and security best practices.",
      features: ["REST APIs", "API Documentation", "Security", "Testing"],
    },
  ];

  return (
    <section id="services" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-primary/10 px-4 py-2 rounded-lg border border-primary/20 mb-8">
              <div className="w-2 h-2 bg-primary rounded-full"></div>
              <span className="text-primary font-medium">Services</span>
            </div>
            
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              What I <span className="text-primary">Offer</span>
            </h2>
            
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive development services to bring your ideas to life with modern technologies and best practices.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="p-6 h-full hover:shadow-lg transition-shadow group">
                <div className="mb-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <service.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </div>
                
                <div className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;