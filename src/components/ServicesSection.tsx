import { Card, CardContent } from "@/components/ui/card";
import { Code, Database, Globe, Layers, Palette, Settings } from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      title: "Full Stack Development",
      description: "End-to-end web application development using modern technologies like React, Node.js, and databases.",
      icon: Layers,
      features: ["Frontend & Backend", "Database Design", "API Integration", "Responsive Design"],
      color: "bg-blue-500"
    },
    {
      title: "Full Stack Java Development",
      description: "Enterprise-grade Java applications with Spring Boot, microservices architecture, and scalable solutions.",
      icon: Code,
      features: ["Spring Boot", "Microservices", "Enterprise Solutions", "Performance Optimization"],
      color: "bg-green-500"
    },
    {
      title: "API Development",
      description: "RESTful APIs and backend services with proper authentication, documentation, and testing.",
      icon: Database,
      features: ["REST APIs", "Authentication", "Documentation", "Testing & Monitoring"],
      color: "bg-purple-500"
    },
    {
      title: "Custom Web Applications",
      description: "Tailored web solutions designed to meet specific business requirements and workflows.",
      icon: Globe,
      features: ["Custom Solutions", "Business Logic", "User Experience", "Scalable Architecture"],
      color: "bg-orange-500"
    },
    {
      title: "Salesforce Integration",
      description: "Seamless integration between Salesforce and external systems for data synchronization.",
      icon: Settings,
      features: ["CRM Integration", "Data Sync", "Workflow Automation", "Custom Fields"],
      color: "bg-red-500"
    },
    {
      title: "Modern Web Design",
      description: "Contemporary, responsive web designs using React, Next.js, and modern CSS frameworks.",
      icon: Palette,
      features: ["React & Next.js", "Responsive Design", "Modern UI/UX", "Performance Focus"],
      color: "bg-indigo-500"
    }
  ];

  return (
    <section id="services" className="py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl font-bold mb-4 font-poppins">Services</h2>
            <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
            <p className="text-lg text-muted-foreground mt-4 max-w-2xl mx-auto">
              Comprehensive development services to bring your ideas to life with cutting-edge technology
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card 
                key={index} 
                className="group overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 animate-scale-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-8 h-full">
                  {/* Service Icon */}
                  <div className={`${service.color}/10 w-16 h-16 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                    <service.icon className={`w-8 h-8 ${service.color.replace('bg-', 'text-')}`} />
                  </div>

                  {/* Service Title */}
                  <h3 className="text-xl font-bold mb-4 font-poppins group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>

                  {/* Service Description */}
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Service Features */}
                  <div className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-3">
                        <div className={`w-2 h-2 ${service.color} rounded-full`}></div>
                        <span className="text-sm text-muted-foreground font-medium">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Hover Effect Overlay */}
                  <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16 animate-fade-in">
            <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-4 font-poppins">Ready to Start Your Project?</h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Let's discuss how I can help bring your vision to life with modern, scalable solutions.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a 
                  href="#contact"
                  className="bg-primary text-primary-foreground px-8 py-3 rounded-full font-medium hover:bg-primary/90 transition-colors"
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  Get In Touch
                </a>
                <a 
                  href="https://wa.me/918302781072"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-primary text-primary px-8 py-3 rounded-full font-medium hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  WhatsApp Consultation
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;