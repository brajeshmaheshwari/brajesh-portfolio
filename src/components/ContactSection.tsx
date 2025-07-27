import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Send } from "lucide-react";

const ContactSection = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted");
  };

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-primary/10 px-4 py-2 rounded-lg border border-primary/20 mb-8">
              <div className="w-2 h-2 bg-primary rounded-full"></div>
              <span className="text-primary font-medium">Contact</span>
            </div>
            
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Let's Work <span className="text-primary">Together</span>
            </h2>
            
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Have a project in mind? I'd love to hear about it. Send me a message and let's discuss how we can bring your ideas to life.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold mb-6">Get in Touch</h3>
                <p className="text-muted-foreground mb-8">
                  I'm always open to discussing new opportunities, creative projects, or partnerships. 
                  Feel free to reach out through any of the channels below.
                </p>
              </div>

              <div className="space-y-6">
                <Card className="p-6 flex items-center gap-4 hover:shadow-lg transition-all duration-300 hover:scale-[1.02] animate-fade-in group">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-all duration-300 group-hover:scale-110">
                    <Mail className="w-6 h-6 text-primary transition-transform duration-300" />
                  </div>
                  <div>
                    <h4 className="font-medium">Email</h4>
                    <p className="text-muted-foreground">brajeshpatwari17@gmail.com</p>
                  </div>
                </Card>

                <Card className="p-6 flex items-center gap-4 hover:shadow-lg transition-all duration-300 hover:scale-[1.02] animate-fade-in group" style={{animationDelay: '100ms'}}>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-all duration-300 group-hover:scale-110">
                    <Phone className="w-6 h-6 text-primary transition-transform duration-300" />
                  </div>
                  <div>
                    <h4 className="font-medium">Phone</h4>
                    <p className="text-muted-foreground">+91 8302781072</p>
                  </div>
                </Card>

                <Card className="p-6 flex items-center gap-4 hover:shadow-lg transition-all duration-300 hover:scale-[1.02] animate-fade-in group" style={{animationDelay: '200ms'}}>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-all duration-300 group-hover:scale-110">
                    <MapPin className="w-6 h-6 text-primary transition-transform duration-300" />
                  </div>
                  <div>
                    <h4 className="font-medium">Location</h4>
                    <p className="text-muted-foreground">Bhilwara, Rajasthan – 311001</p>
                  </div>
                </Card>
                
                <div className="flex gap-4 pt-4">
                  <a href="https://github.com/brajeshpatwari" target="_blank" rel="noopener noreferrer" 
                     className="flex items-center gap-2 px-4 py-2 bg-primary/10 hover:bg-primary/20 rounded-lg transition-all duration-300 hover:scale-105 group">
                    <span className="text-primary font-medium">GitHub</span>
                  </a>
                  <a href="https://linkedin.com/in/brajeshpatwari" target="_blank" rel="noopener noreferrer"
                     className="flex items-center gap-2 px-4 py-2 bg-primary/10 hover:bg-primary/20 rounded-lg transition-all duration-300 hover:scale-105 group">
                    <span className="text-primary font-medium">LinkedIn</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <Card className="p-8 hover:shadow-lg transition-all duration-300 animate-fade-in">
              <h3 className="text-2xl font-bold mb-6">Send Message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Name</label>
                    <Input placeholder="Your name" required className="transition-all duration-300 focus:scale-[1.02]" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Email</label>
                    <Input type="email" placeholder="your.email@example.com" required className="transition-all duration-300 focus:scale-[1.02]" />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Subject</label>
                  <Input placeholder="Project discussion" required className="transition-all duration-300 focus:scale-[1.02]" />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Message</label>
                  <Textarea 
                    placeholder="Tell me about your project..."
                    className="min-h-[120px] transition-all duration-300 focus:scale-[1.02]"
                    required
                  />
                </div>
                
                <Button type="submit" className="w-full flex items-center gap-2 hover:scale-[1.02] transition-transform duration-300">
                  <Send className="w-4 h-4" />
                  Send Message
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;