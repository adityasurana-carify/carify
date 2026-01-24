import { useState, useEffect } from "react";
import Header from "@/components/Header";
import GlobalFooter from "@/components/GlobalFooter";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, ArrowRight, Phone } from "lucide-react";
import { motion } from "framer-motion";

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  author: string;
  publishedAt: string;
  readTime: number;
  imageUrl?: string;
}

export default function Resources() {
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  // Sample blog posts (in production, these would come from Supabase)
  const samplePosts: BlogPost[] = [
    {
      id: "1",
      title: "AI Compliance in Healthcare: A Complete Guide for 2024",
      excerpt: "Navigate the complex landscape of AI compliance in healthcare with our comprehensive guide covering HIPAA, FDA regulations, and best practices.",
      content: "Full article content...",
      category: "AI Compliance",
      author: "Dr. Sarah Chen",
      publishedAt: "2024-01-15",
      readTime: 8,
      imageUrl: "/api/placeholder/400/250"
    },
    {
      id: "2", 
      title: "Optimizing Revenue Cycle Management with AI Automation",
      excerpt: "Discover how AI-powered automation can reduce claim denials by 40% and accelerate payment cycles in healthcare organizations.",
      content: "Full article content...",
      category: "Revenue Cycle",
      author: "Michael Rodriguez",
      publishedAt: "2024-01-12",
      readTime: 6,
      imageUrl: "/api/placeholder/400/250"
    },
    {
      id: "3",
      title: "Patient Care Continuity: Bridging Gaps with Smart Technology",
      excerpt: "Learn how integrated care platforms ensure seamless patient experiences across multiple touchpoints and care transitions.",
      content: "Full article content...",
      category: "Patient Care",
      author: "Dr. Emily Watson",
      publishedAt: "2024-01-10",
      readTime: 5,
      imageUrl: "/api/placeholder/400/250"
    },
    {
      id: "4",
      title: "The ROI of AI in Healthcare: Real-World Case Studies",
      excerpt: "Explore documented ROI improvements from healthcare organizations that implemented AI solutions for administrative tasks.",
      content: "Full article content...",
      category: "ROI Analysis",
      author: "James Thompson",
      publishedAt: "2024-01-08",
      readTime: 7,
      imageUrl: "/api/placeholder/400/250"
    },
    {
      id: "5",
      title: "HIPAA Compliance for AI Systems: What You Need to Know",
      excerpt: "Essential guidelines for maintaining HIPAA compliance when implementing AI solutions in healthcare environments.",
      content: "Full article content...",
      category: "AI Compliance",
      author: "Lisa Park",
      publishedAt: "2024-01-05",
      readTime: 9,
      imageUrl: "/api/placeholder/400/250"
    },
    {
      id: "6",
      title: "Reducing No-Shows: AI-Powered Patient Engagement Strategies",
      excerpt: "How intelligent scheduling and automated reminders can reduce patient no-shows by up to 75%.",
      content: "Full article content...",
      category: "Patient Care",
      author: "Dr. Mark Johnson",
      publishedAt: "2024-01-03",
      readTime: 4,
      imageUrl: "/api/placeholder/400/250"
    }
  ];

  useEffect(() => {
    // Simulate loading from Supabase
    const loadBlogPosts = async () => {
      setLoading(true);
      // In production: const { data } = await supabase.from('blog_posts').select('*').order('published_at', { ascending: false });
      setTimeout(() => {
        setBlogPosts(samplePosts);
        setLoading(false);
      }, 1000);
    };

    loadBlogPosts();
  }, []);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <Header />
      
      <main className="pt-24 pb-16">
        {/* Hero Section */}
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Resources & Care Insights
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Latest updates on AI compliance, revenue cycle management, and patient care continuity.
            </p>
          </motion.div>
        </section>

        {/* Blog Posts Grid */}
        <section className="container mx-auto px-4 sm:px-6 lg:px-8">
          {loading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="animate-pulse">
                  <div className="bg-gray-200 h-48 rounded-t-xl"></div>
                  <div className="bg-white p-6 rounded-b-xl border border-gray-200">
                    <div className="h-4 bg-gray-200 rounded mb-2"></div>
                    <div className="h-4 bg-gray-200 rounded w-3/4 mb-4"></div>
                    <div className="h-3 bg-gray-200 rounded mb-2"></div>
                    <div className="h-3 bg-gray-200 rounded w-1/2"></div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {blogPosts.map((post, index) => (
                <motion.div
                  key={post.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="h-full hover:shadow-lg transition-shadow duration-300 group cursor-pointer">
                    <div className="aspect-video bg-gradient-to-br from-blue-100 to-purple-100 rounded-t-xl"></div>
                    <CardHeader>
                      <div className="flex items-center justify-between mb-2">
                        <Badge variant="secondary" className="text-xs">
                          {post.category}
                        </Badge>
                        <div className="flex items-center text-xs text-gray-500">
                          <Clock className="w-3 h-3 mr-1" />
                          {post.readTime} min read
                        </div>
                      </div>
                      <CardTitle className="text-lg group-hover:text-blue-600 transition-colors">
                        {post.title}
                      </CardTitle>
                      <CardDescription className="text-sm">
                        {post.excerpt}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center justify-between text-xs text-gray-500">
                        <span>By {post.author}</span>
                        <div className="flex items-center">
                          <Calendar className="w-3 h-3 mr-1" />
                          {formatDate(post.publishedAt)}
                        </div>
                      </div>
                      <Button 
                        variant="ghost" 
                        size="sm" 
                        className="mt-4 p-0 h-auto text-blue-600 hover:text-blue-700 group-hover:translate-x-1 transition-transform"
                      >
                        Read More
                        <ArrowRight className="w-4 h-4 ml-1" />
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          )}
        </section>

        {/* CTA Section */}
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 mt-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 md:p-12 text-center text-white"
          >
            <h2 className="text-3xl font-bold mb-4">
              Ready to Transform Your Healthcare Operations?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Get personalized insights and see how Carify can optimize your workflow.
            </p>
            <Button 
              size="lg"
              className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 text-lg rounded-xl"
            >
              Schedule a Demo
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </motion.div>
        </section>
      </main>

      <GlobalFooter />
    </div>
  );
}