import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, Github, Linkedin, MapPin, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to a server
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. I'll get back to you soon!",
    });
    setFormData({ name: "", email: "", message: "" });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "brajeshpatwari17@gmail.com",
      link: "mailto:brajeshpatwari17@gmail.com",
      color: "bg-blue-500"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 8302781072",
      link: "tel:+918302781072",
      color: "bg-green-500"
    },
    {
      icon: Github,
      label: "GitHub",
      value: "github.com/BrajeshPatwari17",
      link: "https://github.com/BrajeshPatwari17",
      color: "bg-gray-800"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/brajesh-patwari",
      link: "https://linkedin.com/in/brajesh-patwari-023bb6371",
      color: "bg-blue-600"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Bhilwara, Rajasthan, India",
      link: "#",
      color: "bg-red-500"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl font-bold mb-4 font-poppins">Get In Touch</h2>
            <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
            <p className="text-lg text-muted-foreground mt-4 max-w-2xl mx-auto">
              Ready to start your next project? Let's discuss how I can help bring your ideas to life.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8 animate-slide-up">
              <div>
                <h3 className="text-2xl font-bold mb-6 font-poppins">Let's Connect</h3>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  I'm always interested in new opportunities and exciting projects. 
                  Whether you have a question about my work, want to discuss a potential 
                  collaboration, or just want to say hello, feel free to reach out!
                </p>
              </div>

              {/* Contact Cards */}
              <div className="space-y-4">
                {contactInfo.map((contact, index) => (
                  <Card 
                    key={index} 
                    className="group overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                  >
                    <CardContent className="p-6">
                      <div className="flex items-center space-x-4">
                        <div className={`${contact.color}/10 p-3 rounded-full`}>
                          <contact.icon className={`w-6 h-6 ${contact.color.replace('bg-', 'text-')}`} />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-foreground">{contact.label}</h4>
                          <a 
                            href={contact.link}
                            target={contact.link.startsWith('http') ? '_blank' : '_self'}
                            rel={contact.link.startsWith('http') ? 'noopener noreferrer' : ''}
                            className="text-muted-foreground hover:text-primary transition-colors"
                          >
                            {contact.value}
                          </a>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Contact Form */}
            <div className="animate-slide-up">
              <Card className="shadow-xl">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-6 font-poppins">Send a Message</h3>
                  
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium mb-2">
                          Your Name
                        </label>
                        <Input
                          id="name"
                          name="name"
                          type="text"
                          required
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="Enter your full name"
                          className="w-full"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium mb-2">
                          Email Address
                        </label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="Enter your email address"
                          className="w-full"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="message" className="block text-sm font-medium mb-2">
                          Message
                        </label>
                        <Textarea
                          id="message"
                          name="message"
                          required
                          value={formData.message}
                          onChange={handleInputChange}
                          placeholder="Tell me about your project or ask any questions..."
                          rows={6}
                          className="w-full resize-none"
                        />
                      </div>
                    </div>
                    
                    <Button 
                      type="submit" 
                      size="lg" 
                      className="w-full group"
                    >
                      <Send className="w-5 h-5 mr-2 group-hover:translate-x-1 transition-transform" />
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;