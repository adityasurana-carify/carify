import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StatsCard from "@/components/StatsCard";
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
import AnimatedSection from "@/components/AnimatedSection";
import { Phone, TrendingUp, Clock, UserCheck, Shield, Zap, Globe } from "lucide-react";
import heroImage from "@assets/generated_images/Modern_healthcare_team_collaboration_bab887f8.png";

export default function WhyCarifyPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        <section className="relative h-[60vh] min-h-[400px] flex items-center justify-center">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${heroImage})` }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/60" />
          </div>
          
          <div className="container relative mx-auto px-4 sm:px-6 lg:px-8 text-center md:text-left max-w-4xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6" data-testid="text-why-hero-title">
              Why Carify Health
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl" data-testid="text-why-hero-subtitle">
              Carify Health transforms your practice by giving staff more time and patients better access. With seamless workflows and natural interactions, our AI Agents deliver measurable results every day.
            </p>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedSection>
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                  Measurable Results
                </h2>
                <p className="text-lg text-muted-foreground">
                  Real impact on your practice operations
                </p>
              </div>
            </AnimatedSection>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <AnimatedSection delay={0.1}>
                <StatsCard
                icon={Phone}
                stat="75%"
                description="We handle 75% of your phone calls"
                testId="card-stat-calls"
              />
              </AnimatedSection>
              <AnimatedSection delay={0.2}>
                <StatsCard
                icon={TrendingUp}
                stat="3x"
                description="We increase your follow up encounters by 3 times"
                testId="card-stat-encounters"
              />
              </AnimatedSection>
              <AnimatedSection delay={0.3}>
                <StatsCard
                icon={Clock}
                stat="2+ hrs"
                description="We save at least 2 hours/day of admin time for each staff member"
                testId="card-stat-time"
              />
              </AnimatedSection>
              <AnimatedSection delay={0.4}>
                <StatsCard
                icon={UserCheck}
                stat="<5%"
                description="We ensure your no shows are less than 5%"
                testId="card-stat-noshows"
              />
              </AnimatedSection>
            </div>
          </div>
        </section>

        <HeroValueProp />

        <AIWorkflow />

        <HowItWorks />

        <WhyItMatters />

        <ProductValues />

        <UseCases />

        <SocialProof />

        <CarifyFeatures />

        <Testimonials />

        <InteractiveFeatures />

        <section className="py-16 md:py-24 bg-muted">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                  Integrations
                </h2>
                <h3 className="text-xl md:text-2xl font-semibold text-primary">
                  EHR and IVR integrations
                </h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  We are committed to making adoption effortless by deeply integrating with your existing systems, so your staff never has to learn another platform.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-6">
                {[Zap, Shield, Globe, TrendingUp].map((Icon, index) => (
                  <div
                    key={index}
                    className="bg-card p-8 rounded-lg text-center hover-elevate transition-transform"
                    data-testid={`card-integration-${index}`}
                  >
                    <Icon className="h-12 w-12 text-primary mx-auto" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-primary/5">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <div className="text-center space-y-6">
              <div className="flex justify-center mb-6">
                <div className="p-4 bg-primary/10 rounded-lg">
                  <Shield className="h-12 w-12 text-primary" />
                </div>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                Safe & Reliable AI
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Our proprietary language model is built on thousands of real-life interactions, clicks, actions, and repetitive tasks performed by staff, surpassing the performance of current state-of-the-art LLMs. We work with the same vendors who power the safety and compliance stack for the world's best generative AI companies. All our workflows are co-built by best physicians and staff managers across the country, making them extremely reliable.
              </p>
            </div>
          </div>
        </section>

        <ExpandedFAQ />
      </main>
      
      <Footer />
    </div>
  );
}
