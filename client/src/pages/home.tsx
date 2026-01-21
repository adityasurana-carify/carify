import Header from "@/components/Header";
import HeroSection from "@/components/ui/hero-section";
import { Footer } from "@/components/ui/footer";
import ParallaxSection from "@/components/ParallaxSection";
import { Button } from "@/components/ui/button";
import { Phone, Play, CheckCircle, TrendingUp, Users, Clock } from "lucide-react";
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
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";



export default function HomePage() {
  const [, setLocation] = useLocation();

  return (
    <div className="min-h-screen flex flex-col" id="hero">
      <Header />
      
      {/* New Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-purple-50 py-20 md:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-5xl mx-auto">
            <motion.h1 
              className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Automate Patient Care with AI Clinical Agents
            </motion.h1>
            <motion.p 
              className="text-xl md:text-2xl text-gray-700 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Reduce care effort by 40%. From RPM and Pre-Op monitoring to daily check-ins, our AI agents (Jenny & Joe) handle the routine workflows so your clinicians can focus on the healing.
            </motion.p>
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Button size="lg" onClick={() => setLocation('/book-demo')} className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg">
                Book a Demo
              </Button>
              <Button size="lg" variant="outline" className="px-8 py-6 text-lg group">
                <Play className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                Listen to Jenny
              </Button>
            </motion.div>
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg">
                <div className="text-3xl font-bold text-blue-600 mb-2">100k+</div>
                <div className="text-gray-600">Calls Automated</div>
              </div>
              <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg">
                <div className="text-3xl font-bold text-blue-600 mb-2">15 Mins</div>
                <div className="text-gray-600">Saved Per Patient</div>
              </div>
              <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg">
                <div className="text-3xl font-bold text-blue-600 mb-2">100%</div>
                <div className="text-gray-600">HIPAA Compliant</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Founder's Philosophy */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 md:p-12 shadow-xl"
            >
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">The Founder's Philosophy</h2>
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed italic">
                "A practice shouldn't be defined by how many calls it can take, but by how many lives it can proactively manage. We built Carify Health to move healthcare from Reactive to Predictive."
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* The Vision Section */}
      <section id="vision" className="py-20 bg-gradient-to-br from-gray-900 to-blue-900 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Don't Settle for Half the Solution</h2>
              <p className="text-xl text-blue-100 mb-12">
                Most AI agents only handle the phone lines. Carify manages the entire patient journey—from the first call to full recovery.
              </p>
              <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-video bg-black/20">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/uiMxtsjVPY0"
                  title="Carify Health Demo"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
              <p className="text-sm text-blue-200 mt-6">
                See how our "Whole Practice" approach outperforms standard automation tools.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
      
      <main className="flex-1">
        {/* Our Programs */}
        <section id="solutions" className="py-20 bg-gradient-to-br from-blue-50 to-cyan-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Select a Care Program or Build Your Own</h2>
              <p className="text-xl text-gray-600">Launch immediately with our pre-built workflows or customize your agent in minutes.</p>
            </div>
            
            <ParallaxSection className="mb-12">
              <div className="grid md:grid-cols-2 gap-8 mb-12">
                {/* Category A: Clinical Operations */}
                <Card className="border-2 border-blue-200">
                  <CardHeader>
                    <CardTitle className="text-2xl text-blue-600">Clinical Operations</CardTitle>
                    <CardDescription className="text-base">The "Joe" & "Jenny" Suite - Focus on revenue and health outcomes</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-3">
                      <div className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                        <div>
                          <h4 className="font-semibold">Remote Patient Monitoring (RPM)</h4>
                          <p className="text-sm text-gray-600">Automate daily vitals collection and adherence checks.</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                        <div>
                          <h4 className="font-semibold">Perioperative Support</h4>
                          <p className="text-sm text-gray-600">Guided workflows for Pre-Hospitalization preparation and Post-Discharge recovery monitoring.</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                        <div>
                          <h4 className="font-semibold">Care Gap Management</h4>
                          <p className="text-sm text-gray-600">Proactive outreach to ensure HEDIS compliance and health check-ins.</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                        <div>
                          <h4 className="font-semibold">Chronic Care Management</h4>
                          <p className="text-sm text-gray-600">Consistent follow-ups for long-term health tracking.</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Category B: Patient Experience */}
                <Card className="border-2 border-purple-200">
                  <CardHeader>
                    <CardTitle className="text-2xl text-purple-600">Patient Experience & Engagement</CardTitle>
                    <CardDescription className="text-base">Holistic tools to keep patients happy and engaged during recovery</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-3">
                      <div className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-purple-600 mt-1 flex-shrink-0" />
                        <div>
                          <h4 className="font-semibold">Concierge Entertainment</h4>
                          <p className="text-sm text-gray-600">Bedside access to Netflix, Apple TV, Audiobooks, and Music.</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-purple-600 mt-1 flex-shrink-0" />
                        <div>
                          <h4 className="font-semibold">Wellness & Lifestyle</h4>
                          <p className="text-sm text-gray-600">Integrated modules for News, Horoscopes, and Spiritual Support (Prayer) to support mental well-being.</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-purple-600 mt-1 flex-shrink-0" />
                        <div>
                          <h4 className="font-semibold">Healthcare Marketing</h4>
                          <p className="text-sm text-gray-600">Automated campaigns to keep your practice top-of-mind.</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </ParallaxSection>
          </div>
        </section>

        {/* The Solution Section - Your Workforce Multiplied */}
        <section id="agents" className="py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Your Workforce, Multiplied</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Jenny and Joe don't just route calls—they resolve workflows. From front-desk admin to clinical monitoring, our agents operate as an extension of your team.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="text-center hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-8 h-8 text-blue-600" />
                  </div>
                  <CardTitle>Full EHR Integration</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">We don't just read data; we write it. Updates sync to your schedule and patient charts in real-time.</p>
                </CardContent>
              </Card>
              <Card className="text-center hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <TrendingUp className="w-8 h-8 text-green-600" />
                  </div>
                  <CardTitle>Intelligent Triage</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">Jenny handles the routine (80% of volume) and instantly escalates complex emotional needs to your human staff.</p>
                </CardContent>
              </Card>
              <Card className="text-center hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="w-8 h-8 text-purple-600" />
                  </div>
                  <CardTitle>Clinical Authority</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">Unlike basic chatbots, Joe is trained on medical protocols to monitor recovery and flag risks accurately.</p>
                </CardContent>
              </Card>
              <Card className="text-center hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Clock className="w-8 h-8 text-orange-600" />
                  </div>
                  <CardTitle>Rapid Deployment</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">No 6-month implementations. Use our expert-approved templates to go live in under 7 days.</p>
                </CardContent>
              </Card>
            </div>
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

        {/* The Carify Advantage - ROI Section */}
        <section id="advantage" className="py-20 bg-gradient-to-br from-purple-50 to-pink-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Why Leading Practices Choose Carify</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
              <Card className="bg-gradient-to-br from-blue-50 to-blue-100 border-2 border-blue-200">
                <CardHeader>
                  <CardTitle className="text-3xl font-bold text-blue-600">30% Lower Overhead</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">We don't just save minutes; we remove entire workflows. By automating benefits verification and hold times, we slash operational costs by a third.</p>
                </CardContent>
              </Card>
              <Card className="bg-gradient-to-br from-green-50 to-green-100 border-2 border-green-200">
                <CardHeader>
                  <CardTitle className="text-3xl font-bold text-green-600">4x More Preventive Visits</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">Jenny proactively mines your data to find care gaps, quadrupling the volume of high-value wellness visits and screenings without adding staff work.</p>
                </CardContent>
              </Card>
              <Card className="bg-gradient-to-br from-purple-50 to-purple-100 border-2 border-purple-200">
                <CardHeader>
                  <CardTitle className="text-3xl font-bold text-purple-600">85% First-Contact Resolution</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">Jenny doesn't just take messages. She resolves inquiries—scheduling, billing, and intake—completely autonomously.</p>
                </CardContent>
              </Card>
              <Card className="bg-gradient-to-br from-orange-50 to-orange-100 border-2 border-orange-200">
                <CardHeader>
                  <CardTitle className="text-3xl font-bold text-orange-600">&lt;3% No-Show Rate</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">Our predictive engine spots potential cancellations early and refills the slot instantly, keeping provider utilization above 97%.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Process Flow - How it Works */}
        <section id="workflow" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
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
          { href: "/terms", label: "Terms" },
          { href: "/baa", label: "BAA (Business Associate Agreement)" }
        ]}
        copyright={{ text: "© 2026 Carify Health AI. All rights reserved.", license: "100% HIPAA Compliant" }}
      />
    </div>
  );
}
