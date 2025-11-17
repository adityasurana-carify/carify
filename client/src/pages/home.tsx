import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ROICalculator from "@/components/ROICalculator";
import CTASection from "@/components/CTASection";
import EnhancedHero from "@/components/EnhancedHero";
import Testimonials from "@/components/Testimonials";
import AnimatedSection from "@/components/AnimatedSection";
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
        <EnhancedHero />
        
        <section className="relative py-20 md:py-24 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedSection>
              <div className="text-center space-y-6 mb-16 max-w-4xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground leading-tight">
                  Calculate Your ROI
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  See the financial impact Carify can create for your practice
                </p>
              </div>
            </AnimatedSection>
            
            <AnimatedSection delay={0.2}>
              <ROICalculator />
            </AnimatedSection>
          </div>
        </section>

        <Testimonials />

        <section className="py-16 bg-muted">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedSection>
              <CTASection
                title="Contact Carify"
                buttonText="Book a Demo"
                testId="cta-contact"
              />
            </AnimatedSection>
          </div>
        </section>

        <section id="book-demo" className="py-16 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-2xl">
            <AnimatedSection>
              <div className="text-center space-y-4 mb-8">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                  Book Your Demo
                </h2>
                <p className="text-muted-foreground">
                  Fill out the form below and we'll get in touch to schedule your personalized demo.
                </p>
              </div>
            </AnimatedSection>
            
            <AnimatedSection delay={0.2}>
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
            </AnimatedSection>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
