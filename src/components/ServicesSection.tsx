import { Card } from "@/components/ui/card";
import { Code, Database, Globe, Smartphone, Cloud, Settings } from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      icon: Globe,
      title: "Full Stack Web Development",
      description: "Complete web applications using Java + Spring Boot + React/Next.js stack for robust, scalable solutions.",
      features: ["Java & Spring Boot", "React/Next.js", "End-to-End Development", "Scalable Architecture"],
    },
    {
      icon: Code,
      title: "Backend API Development",
      description: "RESTful API design & integration with proper documentation, authentication, and security best practices.",
      features: ["RESTful APIs", "Spring Boot", "API Documentation", "Authentication & Security"],
    },
    {
      icon: Database,
      title: "Database & Performance Optimization",
      description: "MySQL indexing, caching strategies, and database optimization for improved application performance.",
      features: ["MySQL Indexing", "Caching Strategies", "Query Optimization", "Performance Tuning"],
    },
    {
      icon: Settings,
      title: "AI-integrated Web Applications",
      description: "OpenAI API integrations and GPT-based features to create intelligent, AI-powered web applications.",
      features: ["OpenAI API Integration", "GPT-based Features", "AI-Powered Solutions", "Intelligent Automation"],
    },
    {
      icon: Smartphone,
      title: "Custom Web Applications",
      description: "Tailored web solutions designed to meet specific business requirements and user needs.",
      features: ["Custom Solutions", "User Experience", "Performance", "Scalability"],
    },
    {
      icon: Cloud,
      title: "Modern Web Design",
      description: "Contemporary web design using React, Next.js, and modern CSS frameworks for optimal user experience.",
      features: ["React/Next.js", "Responsive Design", "Modern UI/UX", "Performance"],
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
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-all duration-300 group-hover:scale-110 group-hover:rotate-6">
                    <service.icon className="w-6 h-6 text-primary transition-transform duration-300" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">{service.title}</h3>
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