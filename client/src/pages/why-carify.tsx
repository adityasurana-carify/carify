import Header from "@/components/Header";
import HeroSection from "@/components/ui/hero-section";
import { Footer } from "@/components/ui/footer";
import StatsCard from "@/components/StatsCard";
import { GlowCard } from "@/components/ui/spotlight-card";
import HeroValueProp from "@/components/HeroValueProp";
import AIWorkflow from "@/components/AIWorkflow";
import HowItWorks from "@/components/HowItWorks";
import WhyItMatters from "@/components/WhyItMatters";
import ProductValues from "@/components/ProductValues";
import UseCases from "@/components/UseCases";
import SocialProof from "@/components/SocialProof";
import InteractiveFeatures from "@/components/InteractiveFeatures";
import CarifyFeatures from "@/components/CarifyFeatures";
import ExpandedFAQ from "@/components/ExpandedFAQ";
import Testimonials from "@/components/Testimonials";
import CaseStudies from "@/components/ui/case-studies";
import ParallaxSection from "@/components/ParallaxSection";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import Featured_05 from "@/components/ui/globe-feature-section";
import { Phone, TrendingUp, Clock, UserCheck, Shield, Zap, Globe } from "lucide-react";

function ScrollCard({ children, delay = 0, className = '' }: { children: React.ReactNode; delay?: number; className?: string }) {
  const { ref, isVisible } = useScrollAnimation();
  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}


export default function WhyCarifyPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        <HeroSection />

        <section className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <ParallaxSection className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Measurable Results
              </h2>
              <p className="text-lg text-muted-foreground">
                Real impact on your practice operations
              </p>
            </ParallaxSection>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <ScrollCard delay={0}>
                <StatsCard
                icon={Phone}
                stat="75%"
                description="We handle 75% of your phone calls"
                testId="card-stat-calls"
                glowColor="blue"
              />
              </ScrollCard>
              <ScrollCard delay={200}>
                <StatsCard
                icon={TrendingUp}
                stat="3x"
                description="We increase your follow up encounters by 3 times"
                testId="card-stat-encounters"
                glowColor="green"
              />
              </ScrollCard>
              <ScrollCard delay={400}>
                <StatsCard
                icon={Clock}
                stat="2+ hrs"
                description="We save at least 2 hours/day of admin time for each staff member"
                testId="card-stat-time"
                glowColor="purple"
              />
              </ScrollCard>
              <ScrollCard delay={600}>
                <StatsCard
                icon={UserCheck}
                stat="<5%"
                description="We ensure your no shows are less than 5%"
                testId="card-stat-noshows"
                glowColor="orange"
              />
              </ScrollCard>
            </div>
          </div>
        </section>

        <ScrollCard>
          <HeroValueProp />
        </ScrollCard>

        <ScrollCard delay={100}>
          <AIWorkflow />
        </ScrollCard>

        <ScrollCard delay={200}>
          <HowItWorks />
        </ScrollCard>

        <ScrollCard delay={100}>
          <WhyItMatters />
        </ScrollCard>

        <ScrollCard delay={200}>
          <ProductValues />
        </ScrollCard>

        <ScrollCard delay={100}>
          <UseCases />
        </ScrollCard>

        <ScrollCard delay={200}>
          <SocialProof />
        </ScrollCard>

        <ScrollCard delay={100}>
          <CarifyFeatures />
        </ScrollCard>

        <ScrollCard delay={200}>
          <Testimonials />
        </ScrollCard>

        <ScrollCard delay={100}>
          <CaseStudies />
        </ScrollCard>

        <ScrollCard delay={200}>
          <InteractiveFeatures />
        </ScrollCard>

        <section className="py-16 md:py-24 bg-muted">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <ParallaxSection className="text-center mb-12">
              <div className="w-20 h-20 mx-auto mb-6 rounded-2xl overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=80&h=80&fit=crop" 
                  alt="Healthcare Integration" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Seamless Integrations
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Connect with your existing healthcare systems effortlessly
              </p>
            </ParallaxSection>
            
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <ScrollCard delay={100} className="space-y-6">
                <div className="w-16 h-16 rounded-xl overflow-hidden mb-4">
                  <img 
                    src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=64&h=64&fit=crop" 
                    alt="Healthcare Technology" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl md:text-2xl font-semibold text-primary">
                  EHR and IVR integrations
                </h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  We are committed to making adoption effortless by deeply integrating with your existing systems, so your staff never has to learn another platform.
                </p>
              </ScrollCard>
              <div className="grid grid-cols-2 gap-6">
                {[Zap, Shield, Globe, TrendingUp].map((Icon, index) => {
                  const colors = ['blue', 'purple', 'green', 'orange'] as const;
                  return (
                    <ScrollCard key={index} delay={index * 150}>
                      <GlowCard
                        customSize
                        glowColor={colors[index]}
                        className="p-8 text-center hover-elevate transition-all duration-300 hover:scale-105 h-32 w-full"
                        data-testid={`card-integration-${index}`}
                      >
                        <Icon className="h-12 w-12 text-primary mx-auto animate-pulse" />
                      </GlowCard>
                    </ScrollCard>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-primary/5">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <ScrollCard className="text-center space-y-6">
              <div className="flex justify-center mb-6">
                <div className="p-4 bg-primary/10 rounded-lg animate-bounce">
                  <Shield className="h-12 w-12 text-primary" />
                </div>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                Safe & Reliable AI
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Our proprietary language model is built on thousands of real-life interactions, clicks, actions, and repetitive tasks performed by staff, surpassing the performance of current state-of-the-art LLMs. We work with the same vendors who power the safety and compliance stack for the world's best generative AI companies. All our workflows are co-built by best physicians and staff managers across the country, making them extremely reliable.
              </p>
            </ScrollCard>
          </div>
        </section>

        <ScrollCard>
          <ExpandedFAQ />
        </ScrollCard>
      </main>
      
      <Featured_05 />
      
      <Footer
        logo={<Shield className="h-8 w-8 text-blue-600" />}
        brandName="Carify Health"
        socialLinks={[
          {
            icon: <Phone className="h-5 w-5" />,
            href: "tel:+1-555-0123",
            label: "Call Us"
          }
        ]}
        mainLinks={[
          { href: "/", label: "Home" },
          { href: "/why-carify", label: "Why Carify" },
          { href: "/use-cases", label: "Use Cases" },
          { href: "/roi-calculator", label: "ROI Calculator" }
        ]}
        legalLinks={[
          { href: "/privacy", label: "Privacy" },
          { href: "/terms", label: "Terms" }
        ]}
        copyright={{
          text: "© 2024 Carify Health",
          license: "Transforming healthcare with AI"
        }}
      />
    </div>
  );
}
