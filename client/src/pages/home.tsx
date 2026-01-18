import Header from "@/components/Header";
import HeroSection from "@/components/ui/hero-section";
import { Footer } from "@/components/ui/footer";
import ParallaxSection from "@/components/ParallaxSection";
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";
import { TestimonialsDemo } from "@/components/ui/testimonials-demo";
import { motion } from "framer-motion";
import { useLocation } from "wouter";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import ModernStats from "@/components/ModernStats";
import ComparisonTable from "@/components/ComparisonTable";
import ProcessFlow from "@/components/ProcessFlow";
import BentoCards from "@/components/ui/bento-cards";
import SolutionCards from "@/components/SolutionCards";
import ServicePillars from "@/components/ServicePillars";
import MetricsDashboard from "@/components/MetricsDashboard";
import { WordFadeIn } from "@/components/ui/word-fade-in";
import FeaturedSectionStats from "@/components/ui/featured-section-stats";
import { Features } from "@/components/ui/features-4";
import RuixenSection from "@/components/ui/ruixen-feature-section";



export default function HomePage() {
  const [, setLocation] = useLocation();

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <HeroSection />
      
      <main className="flex-1">
        {/* Our Programs */}
        <section className="py-20 bg-gradient-to-br from-blue-50 to-cyan-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <ParallaxSection className="mb-12">
              <BentoCards
                title="Our Programs"
                subtitle="Choose any program or make a Custom One. Start almost immediately with our 1 month free trial"
                cards={[
                  { title: "RPM", description: "Remote Patient Monitoring - Track vital signs, medication adherence, and health metrics in real-time. Our AI agents proactively identify trends and alert your team to potential issues before they become emergencies." },
                  { title: "Health Data", description: "Comprehensive Collection - Seamlessly gather patient data from wearables, smart devices, and manual inputs. Automated data validation ensures accuracy while reducing administrative burden on your staff." },
                  { title: "Monitoring", description: "Regular Check-ins - Automated patient outreach for scheduled follow-ups, symptom tracking, and wellness checks. Ryan ensures no patient falls through the cracks with personalized care protocols." },
                  { title: "Remote Care", description: "Virtual Delivery - Enable telehealth visits, virtual consultations, and remote care coordination. Jenny handles scheduling, insurance verification, and pre-visit preparation automatically." },
                  { title: "Marketing", description: "Patient Engagement - Boost appointment bookings, reduce no-shows, and increase patient satisfaction. Our AI agents send timely reminders, educational content, and personalized outreach campaigns." },
                ]}
                footerTitle="Post Discharge, Pre-hospital & Device Monitoring"
                footerDescription="We also offer specialized programs for post-discharge follow-up care, pre-hospital admission preparation, and seamless device monitoring integration. Every program is customizable to your practice's unique workflow."
              />
            </ParallaxSection>
          </div>
        </section>

        {/* AI Inclusive Healthcare */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <FeaturedSectionStats
              title="AI Inclusive Healthcare - Best AI Companion for your Nursing Staff"
              subtitle="Save up to 40% care effort by using AI Nurse & Agents for custom programs based on RPM, Health Monitoring (Smart Gadgets), Elderly Patient Care, Hospital Surveys (Post Discharge as well as Adherence related patient care)."
              stats={[
                { value: "40%", label: "Care Effort Saved" },
                { value: "24/7", label: "Availability" },
                { value: "100%", label: "HIPAA Compliant" },
                { value: "8+", label: "Programs" },
              ]}
            />
          </div>
        </section>

        {/* Ruixen Feature Section */}
        <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
          <RuixenSection />
        </section>

        {/* Process Flow */}
        <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <WordFadeIn words="How It Works" className="text-4xl md:text-5xl mb-4" />
              <p className="text-xl text-gray-600">Seamless automation from call to action</p>
            </div>
            <ParallaxSection>
              <ProcessFlow />
            </ParallaxSection>
          </div>
        </section>

        {/* The Carify Health Solution */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <Features />
          </div>
        </section>

        {/* Key Service Pillars */}
        <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <WordFadeIn words="KEY SERVICE PILLARS" className="text-4xl md:text-5xl mb-6" />
              <p className="text-xl text-gray-600">Comprehensive AI-powered healthcare solutions</p>
            </div>

            <ParallaxSection>
              <ServicePillars />
            </ParallaxSection>
          </div>
        </section>

        {/* Comparison Table */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <WordFadeIn words="Traditional vs Carify Health" className="text-4xl md:text-5xl mb-4" />
              <p className="text-xl text-gray-600">See the difference AI makes</p>
            </div>
            <ParallaxSection className="max-w-5xl mx-auto">
              <ComparisonTable />
            </ParallaxSection>
          </div>
        </section>

        {/* Why Carify Health */}
        <section className="py-20 bg-gradient-to-br from-purple-50 to-pink-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <ParallaxSection className="max-w-5xl mx-auto">
              <div className="text-center mb-8">
                <WordFadeIn words="Why Carify Health" className="text-4xl md:text-5xl" />
              </div>
              
              <div className="bg-white p-8 rounded-2xl shadow-xl mb-12">
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  At Carify Health, we believe that the staffing crisis shouldn't dictate the quality of patient care. While others focus on simple call routing, we focus on Clinical Capacity Orchestration. We integrate Jenny and Ryan directly into your EHR to act as a force multiplier for your team—predicting patient needs, capturing lost revenue, and ensuring your practice operates at its absolute peak potential.
                </p>
              </div>

              <h3 className="text-3xl font-bold mb-8 text-center text-purple-600">
                The Carify Advantage: Quantifiable Outcomes
              </h3>

              <MetricsDashboard />
            </ParallaxSection>
          </div>
        </section>

        {/* FAQs */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <ParallaxSection className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <WordFadeIn words="Frequently Asked Questions" className="text-4xl md:text-5xl" />
              </div>

              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-bold mb-6 text-blue-600">Section A: Operational & Leadership FAQ</h3>
                  <p className="text-gray-600 mb-6">Focus: Security, ROI, and Implementation</p>
                  
                  <Accordion type="single" collapsible className="space-y-4">
                    <AccordionItem value="item-1" className="bg-gray-50 rounded-lg px-6">
                      <AccordionTrigger className="text-left font-semibold">
                        How does Carify Health handle HIPAA compliance and data security?
                      </AccordionTrigger>
                      <AccordionContent className="text-gray-700">
                        Security is our foundation. Carify Health is fully HIPAA-compliant and SOC2-ready. All data is encrypted using AES-256 protocols both at rest and in transit. We sign a comprehensive Business Associate Agreement (BAA) with every practice, ensuring that Protected Health Information (PHI) is handled with institutional-grade security.
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-2" className="bg-gray-50 rounded-lg px-6">
                      <AccordionTrigger className="text-left font-semibold">
                        Is it mandatory to have our own historical call recordings to train the AI?
                      </AccordionTrigger>
                      <AccordionContent className="text-gray-700">
                        No. Unlike legacy systems that require months of your own data to "learn," Carify Health comes pre-trained on millions of clinical-specific interactions. We use our proprietary medical LLM to hit the ground running. We only need your specific practice protocols to go live—no historical data mining required.
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-3" className="bg-gray-50 rounded-lg px-6">
                      <AccordionTrigger className="text-left font-semibold">
                        Can we customize the workflows to suit our specialty's unique needs?
                      </AccordionTrigger>
                      <AccordionContent className="text-gray-700">
                        Absolutely. While we offer Expert-Approved Templates to accelerate your 30-day deployment, every workflow is a "living" document. You can customize exactly how Jenny handles specific insurance providers or how Ryan monitors post-op recovery for different surgical types.
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-4" className="bg-gray-50 rounded-lg px-6">
                      <AccordionTrigger className="text-left font-semibold">
                        Can we access call/message transcripts for quality analysis?
                      </AccordionTrigger>
                      <AccordionContent className="text-gray-700">
                        Yes. Every single interaction is logged, transcribed, and available in real-time via your Carify Leadership Dashboard. This provides a 100% audit trail for quality assurance, training, and clinical compliance.
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </div>

                <div>
                  <h3 className="text-2xl font-bold mb-6 text-blue-600">Section B: Clinical & Patient Interaction FAQ</h3>
                  <p className="text-gray-600 mb-6">Focus: Accuracy, Multilingual Support, and Patient Experience</p>
                  
                  <Accordion type="single" collapsible className="space-y-4">
                    <AccordionItem value="item-5" className="bg-gray-50 rounded-lg px-6">
                      <AccordionTrigger className="text-left font-semibold">
                        What are the operational timings of your AI agents?
                      </AccordionTrigger>
                      <AccordionContent className="text-gray-700">
                        Jenny and Ryan provide 24/7/365 coverage. They handle the "after-hours" surge and weekend inquiries with the same precision as a Tuesday morning. This ensures your patients never hit a voicemail and your "digital front door" is never locked.
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-6" className="bg-gray-50 rounded-lg px-6">
                      <AccordionTrigger className="text-left font-semibold">
                        What happens if Jenny doesn't know the answer to a patient's specific question?
                      </AccordionTrigger>
                      <AccordionContent className="text-gray-700">
                        Our agents operate with Safe-Failure Protocols. If a patient asks a question that requires medical judgment or is outside the configured scope, Jenny will empathetically validate the patient, explain that she is escalating the matter to a specialist, and immediately notify your human staff with a full transcript of the conversation.
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-7" className="bg-gray-50 rounded-lg px-6">
                      <AccordionTrigger className="text-left font-semibold">
                        Does Carify Health support non-English speaking patients?
                      </AccordionTrigger>
                      <AccordionContent className="text-gray-700">
                        Yes. Carify Health features Native Multilingual Intelligence. Jenny can detect and switch between languages (including Spanish, Mandarin, Vietnamese, and more) in real-time. This ensures equitable care for your entire patient population and removes the cost and friction of third-party translation lines.
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-8" className="bg-gray-50 rounded-lg px-6">
                      <AccordionTrigger className="text-left font-semibold">
                        How does the AI update our existing EHR/PMS?
                      </AccordionTrigger>
                      <AccordionContent className="text-gray-700">
                        Carify Health doesn't work in a vacuum. After an interaction, Jenny or Ryan automatically pushes a structured summary and data points (like updated insurance info or pain scores) directly into your EHR. This eliminates manual data entry and ensures your records are the "single source of truth."
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </div>
              </div>
            </ParallaxSection>
          </div>
        </section>

        {/* Testimonials */}
        <TestimonialsDemo />

        {/* Founder's Perspective */}
        <section className="py-20 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <FeaturedSectionStats
              title="The Founder's Perspective: Our Core Philosophy"
              subtitle="A practice shouldn't be defined by how many calls it can take, but by how many lives it can proactively manage. We built Carify Health to move healthcare from 'reactive' to 'predictive.' When Jenny handles the data and Ryan handles the monitoring, your clinicians are finally free to handle the healing."
              stats={[
                { value: "75%", label: "Calls Handled" },
                { value: "2+ hrs", label: "Saved Daily" },
                { value: "<5%", label: "No-Show Rate" },
                { value: "30 days", label: "Go Live" },
              ]}
            />
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-gradient-to-br from-blue-600 to-purple-600 text-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <WordFadeIn words="Ready to Transform Your Practice?" className="text-4xl md:text-5xl mb-6 text-white" />
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Join hundreds of healthcare providers who are already saving time and improving patient care with Carify Health.
            </p>
            <Button 
              size="lg" 
              onClick={() => setLocation('/book-demo')}
              className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-6 text-lg"
            >
              Book Your Free Demo
            </Button>
          </div>
        </section>
      </main>
      
      <Footer
        logo={<div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center text-white font-bold text-sm">C</div>}
        brandName="Carify Health"
        socialLinks={[{ icon: <Phone className="h-5 w-5" />, href: "tel:+1-555-0123", label: "Call Us" }]}
        mainLinks={[
          { href: "/", label: "Home" },
          { href: "/why-carify", label: "Why Carify" },
          { href: "/use-cases", label: "Use Cases" }
        ]}
        legalLinks={[
          { href: "/privacy", label: "Privacy" },
          { href: "/terms", label: "Terms" }
        ]}
        copyright={{ text: "© 2024 Carify Health", license: "All rights reserved" }}
      />
    </div>
  );
}
