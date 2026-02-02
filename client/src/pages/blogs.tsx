import { Link } from "wouter";
import GlobalFooter from "@/components/GlobalFooter";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Sparkles } from "lucide-react";

const blogPosts = [
  {
    id: "ai-virtual-nurses-patient-adherence",
    title: "How AI Virtual Nurses Improve Patient Adherence",
    excerpt: "Patient adherence is one of the strongest predictors of good outcomes and lower costs. AI-powered virtual nurses are emerging as a practical, scalable tool.",
    imageUrl: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=500&fit=crop"
  },
  {
    id: "rise-of-ai-virtual-nurses",
    title: "The Rise of AI Virtual Nurses: A Quiet Revolution in Healthcare",
    excerpt: "Clinics, hospitals, and insurers are deploying AI-powered virtual nurses to overcome staffing shortages, meet regulatory demands, and boost care outcomes.",
    imageUrl: "https://images.unsplash.com/photo-1559757175-5700dde675bc?w=800&h=500&fit=crop"
  },
  {
    id: "ai-healthcare-staffing-crisis",
    title: "Why AI Is the Answer to the Healthcare Admin Staffing Crisis",
    excerpt: "U.S. clinics are facing a growing challenge: front-desk and administrative staff are leaving faster than they can be replaced. AI is the solution.",
    imageUrl: "https://images.unsplash.com/photo-1504813184591-01572f98c85f?w=800&h=500&fit=crop"
  },
  {
    id: "cost-of-not-verifying-benefits",
    title: "The Cost of Not Verifying Benefits Accurately: A Breakdown by Specialty",
    excerpt: "Missed benefits checks don't just cause denials—they drain revenue. Explore how poor benefits verification impacts different specialties.",
    imageUrl: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=500&fit=crop"
  },
  {
    id: "ai-revenue-cycle-assistant-2030",
    title: "Why Every Clinic Will Have an AI Revenue Cycle Assistant by 2030",
    excerpt: "From benefits verification to denial prevention, AI is reshaping the healthcare revenue cycle. Here's why an AI assistant will be essential.",
    imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop"
  },
  {
    id: "asking-right-questions-benefits",
    title: "How Asking the Right Questions Ensures Accurate Benefits and Reduces Claim Denials",
    excerpt: "Simple benefit checks are easy. Where clinics lose money is in complex benefits situations. Learn how to ask the right questions every time.",
    imageUrl: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&h=500&fit=crop"
  },
  {
    id: "benefits-verification-revenue-leakage",
    title: "Benefits Verification: The Biggest Revenue Leakage in U.S. Healthcare",
    excerpt: "Up to 30% of all claim denials stem from incorrect or incomplete benefits verification. These denials turn into permanent write-offs.",
    imageUrl: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=800&h=500&fit=crop"
  }
];

export default function Blogs() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 overflow-x-hidden">
      <header className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-white/20 shadow-lg">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-20 md:h-24 items-center justify-between">
            <Link href="/">
              <img src="/logo.png" alt="Carify Health" className="h-16 md:h-20 drop-shadow-sm" />
            </Link>
            <Button 
              onClick={() => window.location.href = '/book-demo'} 
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group"
            >
              <Sparkles className="w-4 h-4 mr-2 group-hover:rotate-12 transition-transform" />
              Book a Demo
            </Button>
          </div>
        </div>
      </header>
      
      <main className="pt-24 pb-16">
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Healthcare Insights & Updates
            </h1>
            <p className="text-xl text-gray-600">
              Stay informed with the latest trends, tips, and insights in healthcare automation and insurance verification.
            </p>
          </div>
        </section>

        <section className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <Card key={post.id} className="h-full transition-shadow duration-300 overflow-hidden">
                <img 
                  src={post.imageUrl} 
                  alt={post.title}
                  className="w-full h-48 object-cover"
                />
                <CardHeader>
                  <CardTitle className="text-xl">{post.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">{post.excerpt}</p>
                  <Link href={`/blog/${post.id}`}>
                    <Button variant="ghost" className="p-0 h-auto text-blue-600 hover:text-blue-700">
                      Read More
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </main>

      <GlobalFooter />
    </div>
  );
}
