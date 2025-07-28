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
    <section id="blog" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-primary/10 px-4 py-2 rounded-lg border border-primary/20 mb-8">
              <div className="w-2 h-2 bg-primary rounded-full"></div>
              <span className="text-primary font-medium">Blog</span>
            </div>
            
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Latest <span className="text-primary">Articles</span>
            </h2>
            
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              Insights, tutorials, and thoughts on software development, technology trends, and best practices.
            </p>
          </div>

          {/* Articles Grid with Better Spacing */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {blogPosts.map((post, index) => (
              <Card key={index} className="overflow-hidden group hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] animate-fade-in cursor-pointer backdrop-blur-sm border-2 hover:border-primary/50" style={{animationDelay: `${index * 200}ms`}}>
                {/* Article Image */}
                <div className="aspect-video bg-gradient-to-br from-primary/10 to-primary/5 overflow-hidden group-hover:bg-gradient-to-br group-hover:from-primary/20 group-hover:to-primary/10 transition-all duration-500">
                  <div className="w-full h-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <div className="text-6xl text-primary/30 group-hover:text-primary/50 transition-colors">
                      {post.category === "Backend" && "⚙️"}
                      {post.category === "Frontend" && "🎨"}
                      {post.category === "Database" && "💾"}
                    </div>
                  </div>
                </div>
                
                {/* Article Content */}
                <div className="p-6 space-y-4">
                  {/* Category Badge */}
                  <span className="bg-primary text-primary-foreground px-2 py-1 rounded-md text-xs font-medium group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                    {post.category}
                  </span>
                  
                  {/* Article Title */}
                  <h3 className="text-xl font-bold group-hover:text-primary transition-colors duration-300 line-clamp-2 leading-tight">
                    {post.title}
                  </h3>
                  
                  {/* Article Excerpt */}
                  <p className="text-muted-foreground line-clamp-3 leading-relaxed text-sm">
                    {post.excerpt}
                  </p>
                  
                  {/* Article Meta */}
                  <div className="flex items-center justify-between text-sm text-muted-foreground pt-2">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        <span>{new Date(post.date).toLocaleDateString()}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* View All Button */}
          <div className="text-center">
            <Button variant="outline" size="lg" className="hover:scale-105 transition-all duration-300 px-8 py-3">
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