import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, ArrowRight } from "lucide-react";

const BlogSection = () => {
  const blogPosts = [
    {
      title: "Building Scalable APIs with Spring Boot",
      excerpt: "Learn how to create robust and scalable REST APIs using Spring Boot, including best practices for authentication, error handling, and performance optimization.",
      date: "2024-01-15",
      readTime: "8 min read",
      category: "Backend",
      image: "/api/placeholder/400/250",
    },
    {
      title: "React Performance Optimization Techniques",
      excerpt: "Discover advanced React optimization techniques including memo, useMemo, useCallback, and code splitting to build lightning-fast applications.",
      date: "2024-01-10",
      readTime: "6 min read",
      category: "Frontend",
      image: "/api/placeholder/400/250",
    },
    {
      title: "Database Indexing for Better Performance",
      excerpt: "Deep dive into MySQL indexing strategies, query optimization, and caching techniques to improve your application's database performance.",
      date: "2024-01-05",
      readTime: "10 min read",
      category: "Database",
      image: "/api/placeholder/400/250",
    },
  ];

  return (
    <section id="blog" className="py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-primary/10 px-4 py-2 rounded-lg border border-primary/20 mb-8 animate-fade-in">
              <div className="w-2 h-2 bg-primary rounded-full"></div>
              <span className="text-primary font-medium">Blog</span>
            </div>
            
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 animate-fade-in">
              Latest <span className="text-primary">Articles</span>
            </h2>
            
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto animate-fade-in">
              Insights, tutorials, and thoughts on web development, technology trends, and software engineering best practices.
            </p>
          </div>

          {/* Blog Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-all duration-300 group animate-fade-in hover:scale-105">
                <div className="relative overflow-hidden">
                  <div className="w-full h-48 bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <div className="text-6xl text-primary/30 group-hover:text-primary/50 transition-colors">
                      {post.category === "Backend" && "⚙️"}
                      {post.category === "Frontend" && "🎨"}
                      {post.category === "Database" && "💾"}
                    </div>
                  </div>
                  <div className="absolute top-4 left-4">
                    <span className="bg-primary text-primary-foreground px-2 py-1 rounded-md text-xs font-medium">
                      {post.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      <span>{new Date(post.date).toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  
                  <p className="text-muted-foreground mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <Button variant="ghost" className="p-0 h-auto font-medium group-hover:text-primary transition-colors">
                    Read More
                    <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </Card>
            ))}
          </div>

          {/* View All Button */}
          <div className="text-center mt-12">
            <Button 
              variant="outline" 
              size="lg"
              className="rounded-xl px-8 py-6 text-base font-medium hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              View All Articles
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;