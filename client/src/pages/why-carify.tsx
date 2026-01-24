import Header from "@/components/Header";
import HeroSection from "@/components/ui/hero-section";
import GlobalFooter from "@/components/GlobalFooter";
import { GlowCard } from "@/components/ui/spotlight-card";
import ProductValues from "@/components/ProductValues";
import UseCases from "@/components/UseCases";
import CarifyFeatures from "@/components/CarifyFeatures";
import ExpandedFAQ from "@/components/ExpandedFAQ";
import Testimonials from "@/components/Testimonials";
import CaseStudies from "@/components/ui/case-studies";
import ParallaxSection from "@/components/ParallaxSection";
import WhyItMattersFeatures from "@/components/WhyItMattersFeatures";
import { Phone, Shield, Zap, Globe, Heart, Users as UsersIcon, CheckCircle, TrendingUp, Clock, UserCheck, Briefcase } from "lucide-react";
import Featured_05 from "@/components/ui/globe-feature-section";
import BentoCards from "@/components/ui/bento-cards";
import { WordFadeIn } from "@/components/ui/word-fade-in";

export default function WhyCarifyPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        <HeroSection />

        <BentoCards
          title="Practices Using Our AI Have Seen"
          subtitle="Real results from healthcare providers"
          cards={[
            { title: "40%", description: "Reduction in front-desk workload - Our AI agents handle routine calls, appointment scheduling, and insurance verification, freeing your staff to focus on high-value patient interactions and complex cases." },
            { title: "3×", description: "Faster response time for patient inquiries - Jenny answers calls instantly, 24/7, eliminating hold times and voicemail backlogs. Patients get immediate answers to common questions without waiting." },
            { title: "25%", description: "Increase in completed follow-up appointments - Joe's proactive outreach and automated reminders ensure patients show up for critical follow-up care, improving outcomes and capturing revenue." },
            { title: "Significant", description: "Improvements in patient satisfaction scores - Patients appreciate instant responses, multilingual support, and personalized care coordination. No more frustrating phone trees or missed callbacks." },
            { title: "Dramatically", description: "Fewer missed calls and abandoned voicemails - With 24/7 AI coverage, every call is answered immediately. No more lost opportunities, frustrated patients, or revenue leakage from unanswered inquiries." },
          ]}
          footerTitle="Built for performance. Designed for flexibility."
          footerDescription="Carify Health gives you the tools to transform your practice with AI-powered automation. Each feature is thoughtfully designed to be flexible, reliable, and HIPAA-compliant."
        />

        <section className="py-16 md:py-24 bg-gradient-to-br from-blue-50 to-cyan-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <WordFadeIn words="Why It Matters" className="text-5xl md:text-7xl font-bold mb-4" />
            </div>
            <WhyItMattersFeatures />
          </div>
        </section>

        <ProductValues />

        <UseCases />

        <CarifyFeatures />

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
              <WordFadeIn words="Seamless Integrations" className="text-5xl md:text-7xl font-bold text-foreground mb-4" />
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Connect with your existing healthcare systems effortlessly
              </p>
            </ParallaxSection>
            
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
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
              </div>
              <div className="grid grid-cols-2 gap-6">
                {[Zap, Shield, Globe, TrendingUp].map((Icon, index) => {
                  const colors = ['blue', 'purple', 'green', 'orange'] as const;
                  return (
                    <div key={index}>
                      <GlowCard
                        customSize
                        glowColor={colors[index]}
                        className="p-8 text-center hover-elevate transition-all duration-300 hover:scale-105 h-32 w-full"
                        data-testid={`card-integration-${index}`}
                      >
                        <Icon className="h-12 w-12 text-primary mx-auto animate-pulse" />
                      </GlowCard>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-primary/5">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <div className="text-center space-y-6">
              <div className="flex justify-center mb-6">
                <div className="p-4 bg-primary/10 rounded-lg animate-bounce">
                  <Shield className="h-12 w-12 text-primary" />
                </div>
              </div>
              <WordFadeIn words="Safe & Reliable AI" className="text-5xl md:text-7xl font-bold text-foreground" />
              <p className="text-lg text-muted-foreground leading-relaxed">
                Our proprietary language model is built on thousands of real-life interactions, clicks, actions, and repetitive tasks performed by staff, surpassing the performance of current state-of-the-art LLMs. We work with the same vendors who power the safety and compliance stack for the world's best generative AI companies. All our workflows are co-built by best physicians and staff managers across the country, making them extremely reliable.
              </p>
            </div>
          </div>
        </section>

        <ExpandedFAQ />
      </main>
      
      <Featured_05 />
      
      <GlobalFooter />
    </div>
  );
}
