import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ROICalculator from "@/components/ROICalculator";
import CTASection from "@/components/CTASection";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

export default function HomePage() {
  const { toast } = useToast();
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");

  const handleDemoSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Demo Request Received!",
      description: "We'll contact you shortly to schedule your demo.",
    });
    setEmail("");
    setCompany("");
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        <section className="relative py-20 md:py-32 bg-gradient-to-br from-primary/10 via-chart-2/10 to-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center space-y-6 mb-16 max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight" data-testid="text-hero-title">
                Let us save your time and costs with Carify Agents
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto" data-testid="text-hero-subtitle">
                As we handle the repetitive tasks that your staff does, freeing up their valuable time to focus on high-impact work, we can calculate how much meaningful financial impact we can create for you based on your volume.
              </p>
            </div>
            
            <ROICalculator />
          </div>
        </section>

        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <CTASection
              title="Contact Carify"
              buttonText="Book a Demo"
              testId="cta-contact"
            />
          </div>
        </section>

        <section id="book-demo" className="py-16 bg-muted">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-2xl">
            <div className="text-center space-y-4 mb-8">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                Book Your Demo
              </h2>
              <p className="text-muted-foreground">
                Fill out the form below and we'll get in touch to schedule your personalized demo.
              </p>
            </div>
            
            <form onSubmit={handleDemoSubmit} className="space-y-6 bg-card p-8 rounded-lg shadow-lg" data-testid="form-demo">
              <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="you@yourpractice.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  data-testid="input-email"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="company">Practice Name</Label>
                <Input
                  id="company"
                  type="text"
                  placeholder="Your Practice Name"
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                  required
                  data-testid="input-company"
                />
              </div>
              <Button type="submit" className="w-full" size="lg" data-testid="button-submit-demo">
                Request Demo
              </Button>
            </form>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
