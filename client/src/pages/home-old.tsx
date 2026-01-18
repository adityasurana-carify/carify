import Header from "@/components/Header";
import HeroSection from "@/components/ui/hero-section";
import { Footer } from "@/components/ui/footer";
import ParallaxSection from "@/components/ParallaxSection";
import { Button } from "@/components/ui/button";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, Shield, CheckCircle, Phone, FileText, Users, Star, ArrowRight, Sparkles, Zap, Target } from "lucide-react";
import { TestimonialsDemo } from "@/components/ui/testimonials-demo";
import { FeaturesSectionWithHoverEffects } from "@/components/ui/feature-section-with-hover-effects";
import RuixenBentoCards from "@/components/ui/ruixen-bento-cards";
import Featured_05 from "@/components/ui/globe-feature-section";
import { motion } from "framer-motion";

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <HeroSection />
      
      <main className="flex-1">

        {/* Why Clinics Choose Jenny */}
        <section className="py-20 bg-white/50 backdrop-blur-sm">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <ParallaxSection className="text-center mb-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 to-blue-800 bg-clip-text text-transparent mb-4">
                  Why Clinics Choose Jenny
                </h2>
                <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                  Automate your insurance verification workflow — instantly.
                </p>
              </motion.div>
            </ParallaxSection>

            <ParallaxSection className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6" speed={0.3}>
              {[
                {
                  icon: Clock,
                  title: "Save Staff Time",
                  description: "Jenny eliminates hold times, manual calling, and repetitive data entry, freeing your front desk to focus on patients.",
                  color: "from-blue-500 to-cyan-500",
                  bgColor: "from-blue-50 to-cyan-50"
                },
                {
                  icon: CheckCircle,
                  title: "Reduce Errors & Missed Details",
                  description: "Accurate, structured verification every time — no transcription mistakes or missed copay/deductible info.",
                  color: "from-green-500 to-emerald-500",
                  bgColor: "from-green-50 to-emerald-50"
                },
                {
                  icon: Star,
                  title: "Always Available",
                  description: "Jenny verifies benefits even after hours, on weekends, and during peak rush.",
                  color: "from-yellow-500 to-orange-500",
                  bgColor: "from-yellow-50 to-orange-50"
                },
                {
                  icon: Shield,
                  title: "Built for Compliance & Security",
                  description: "HIPAA-compliant, SOC 2 certified, and designed for healthcare security from day one.",
                  color: "from-purple-500 to-pink-500",
                  bgColor: "from-purple-50 to-pink-50"
                }
              ].map((feature, index) => {
                const IconComponent = feature.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    whileHover={{ y: -5, scale: 1.02 }}
                    className="group"
                  >
                    <Card className={`p-6 h-full bg-gradient-to-br ${feature.bgColor} border-0 shadow-lg hover:shadow-xl transition-all duration-300 backdrop-blur-sm`}>
                      <CardContent className="p-0 text-center">
                        <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gray-100 p-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
                          <IconComponent className="w-8 h-8 text-gray-800" />
                        </div>
                        <h3 className="text-xl font-bold mb-3 text-gray-900">{feature.title}</h3>
                        <p className="text-gray-600 leading-relaxed">
                          {feature.description}
                        </p>
                      </CardContent>
                    </Card>
                  </motion.div>
                );
              })}
            </ParallaxSection>
          </div>
        </section>

        {/* Platform Features */}
        <section className="py-20 bg-white relative overflow-hidden">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <ParallaxSection className="text-center mb-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 to-blue-800 bg-clip-text text-transparent mb-4">
                  Why Healthcare Teams Choose Carify
                </h2>
                <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                  Built specifically for healthcare with the features that matter most.
                </p>
              </motion.div>
            </ParallaxSection>
            <FeaturesSectionWithHoverEffects />
          </div>
        </section>

        {/* How Jenny Works */}
        <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50 relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-pattern opacity-5" />
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <ParallaxSection className="text-center mb-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 to-purple-800 bg-clip-text text-transparent mb-4">
                  How Jenny Works
                </h2>
                <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                  A fully automated, end-to-end verification workflow.
                </p>
              </motion.div>
            </ParallaxSection>

            <ParallaxSection className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8" speed={0.4} direction="down">
              {[
                {
                  step: 1,
                  title: "Submit Patient & Insurance Details",
                  description: "Upload via web portal, EHR integration, or API.",
                  color: "from-blue-500 to-cyan-500"
                },
                {
                  step: 2,
                  title: "Jenny Calls the Insurance Company",
                  description: "Real outbound call placed automatically.",
                  color: "from-purple-500 to-pink-500"
                },
                {
                  step: 3,
                  title: "Speaks to IVRs & Live Agents",
                  description: "Jenny navigates menus, asks the right questions, and collects all required information.",
                  color: "from-green-500 to-emerald-500"
                },
                {
                  step: 4,
                  title: "Instant Results Delivered",
                  description: "Verification data + call transcript sent to your dashboard or EHR.",
                  color: "from-orange-500 to-red-500"
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="text-center group"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                >
                  <div className="w-20 h-20 bg-gray-100 text-gray-800 rounded-2xl flex items-center justify-center text-2xl font-bold mx-auto mb-6 shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-300">
                    {item.step}
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-gray-900">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed">
                    {item.description}
                  </p>
                  {index < 3 && (
                    <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                      <ArrowRight className="w-6 h-6 text-gray-300" />
                    </div>
                  )}
                </motion.div>
              ))}
            </ParallaxSection>
          </div>
        </section>

        {/* What Jenny Handles */}
        <section className="py-20 bg-white/80 backdrop-blur-sm">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <ParallaxSection className="text-center mb-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 to-green-800 bg-clip-text text-transparent mb-4">
                  What Jenny Handles
                </h2>
                <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                  The essential verification tasks your staff spends hours on:
                </p>
              </motion.div>
            </ParallaxSection>

            <ParallaxSection className="max-w-5xl mx-auto" speed={0.2}>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {[
                  "Copay & deductible verification",
                  "Benefits & eligibility checks",
                  "Plan and coverage confirmation",
                  "Out-of-network status",
                  "Prior auth-related benefit information",
                  "Real-time claim/appeal updates",
                  "Financial responsibility details"
                ].map((item, index) => (
                  <motion.div 
                    key={index} 
                    className="flex items-center space-x-3 p-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl border border-green-100 hover:shadow-md transition-all duration-300 group"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <CheckCircle className="w-5 h-5 text-gray-800" />
                    </div>
                    <span className="text-gray-700 font-medium">{item}</span>
                  </motion.div>
                ))}
              </div>
            </ParallaxSection>
          </div>
        </section>

        {/* Our Approach */}
        <section className="py-20 bg-gradient-to-br from-red-50 via-orange-50 to-yellow-50 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-red-200/20 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl" />
          
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <ParallaxSection className="text-center mb-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 to-red-800 bg-clip-text text-transparent mb-4">
                  Our Approach
                </h2>
              </motion.div>
            </ParallaxSection>

            <ParallaxSection className="grid grid-cols-1 lg:grid-cols-2 gap-12" speed={0.6} direction="down">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-red-100"
              >
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center mr-4">
                    <Target className="w-6 h-6 text-gray-800" />
                  </div>
                  <h3 className="text-3xl font-bold text-red-600">Problem</h3>
                </div>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-gray-100 rounded-full flex-shrink-0 mt-1 flex items-center justify-center">
                      <div className="w-3 h-3 bg-gray-800 rounded-full" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-2 text-gray-900">Staffing Crisis</h4>
                      <p className="text-gray-600 leading-relaxed">Industry is short by 6.5 million staff, excluding doctors, in 2023</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-gray-100 rounded-full flex-shrink-0 mt-1 flex items-center justify-center">
                      <div className="w-3 h-3 bg-gray-800 rounded-full" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-2 text-gray-900">High Cost of Operations</h4>
                      <p className="text-gray-600 leading-relaxed">The shortage has led to constrained patient access, overworked staff, and reduced margins</p>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-blue-100"
              >
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center mr-4">
                    <Zap className="w-6 h-6 text-gray-800" />
                  </div>
                  <h3 className="text-3xl font-bold text-blue-600">Our Solution</h3>
                </div>
                <p className="text-gray-700 text-lg leading-relaxed">
                  Our AI Agents work 24/7 alongside your team, handling inbound and outbound calls, and keeping your EHR and PMS systems up to date. By supporting routine admin work, they free your staff to focus on delivering high-quality patient care.
                </p>
                <div className="mt-6">
                  <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </motion.div>
            </ParallaxSection>
          </div>
        </section>



        {/* How we do it */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <ParallaxSection className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                How we do it
              </h2>
              <h3 className="text-2xl font-semibold text-blue-600 mb-6">Our Solution</h3>
            </ParallaxSection>

            <ParallaxSection className="max-w-4xl mx-auto" speed={0.4} direction="down">
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                Carify powers both patient-facing and provider-facing operations with Voice AI Agents that handle calls and texts the way your team wants them managed. They update your EHR/PMS systems, follow your workflows, and ensure you only step in for the calls that truly need your attention. With expert-approved templates, our agents go live in under 30 days, minimizing staff effort and delivering measurable impact faster.
              </p>
              <div className="text-center">
                <Button size="lg" className="px-8 py-4 text-lg">
                  Book a Demo
                </Button>
              </div>
            </ParallaxSection>
          </div>
        </section>

        {/* Use Cases */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <ParallaxSection className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Use cases
              </h2>
              <p className="text-xl text-gray-600">
                Discover How Our Solutions Are Transforming Healthcare
              </p>
            </ParallaxSection>

            <ParallaxSection className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" speed={0.2}>
              <Card className="p-6">
                <CardContent className="p-0">
                  <CheckCircle className="w-12 h-12 text-gray-800 mb-4" />
                  <h3 className="text-xl font-semibold mb-3">Appointment Management</h3>
                  <p className="text-gray-600">
                    Sara supports your front desk by handling scheduling, rescheduling, and cancellations through calls and voicemails, helping prevent missed calls and empty slots so your calendars stay full and your staff can focus on patients.
                  </p>
                </CardContent>
              </Card>

              <Card className="p-6">
                <CardContent className="p-0">
                  <CheckCircle className="w-12 h-12 text-gray-800 mb-4" />
                  <h3 className="text-xl font-semibold mb-3">Payment Collections</h3>
                  <p className="text-gray-600">
                    Sara works alongside your call center team on payment collections, taking care of follow-ups, reminders, and billing questions so your staff spends less time on calls and more time on patients.
                  </p>
                </CardContent>
              </Card>

              <Card className="p-6">
                <CardContent className="p-0">
                  <CheckCircle className="w-12 h-12 text-gray-800 mb-4" />
                  <h3 className="text-xl font-semibold mb-3">Pre and Post Operative Engagement</h3>
                  <p className="text-gray-600">
                    Ryan guides patients with pre-op instructions, tests, and clearances, then follows up post-discharge with education, medication reminders, and FAQs.
                  </p>
                </CardContent>
              </Card>

              <Card className="p-6">
                <CardContent className="p-0">
                  <CheckCircle className="w-12 h-12 text-gray-800 mb-4" />
                  <h3 className="text-xl font-semibold mb-3">Close Care Gaps</h3>
                  <p className="text-gray-600">
                    Lilly identifies at-risk patients from EHR data, proactively scheduling screenings and wellness visits, ensuring no one slips through.
                  </p>
                </CardContent>
              </Card>

              <Card className="p-6">
                <CardContent className="p-0">
                  <CheckCircle className="w-12 h-12 text-gray-800 mb-4" />
                  <h3 className="text-xl font-semibold mb-3">Transitions of Care</h3>
                  <p className="text-gray-600">
                    Lilly engages patients with empathy after discharge, addressing concerns and motivating follow-up visits within 14 days.
                  </p>
                </CardContent>
              </Card>
            </ParallaxSection>
          </div>
        </section>

        {/* Carify Difference */}
        <section className="py-20 bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-black/10" />
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
          
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <ParallaxSection className="text-center mb-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-4xl md:text-5xl font-bold mb-4">
                  The Carify Difference
                </h2>
                <h3 className="text-2xl font-semibold mb-6 text-blue-100">Why Choose Carify</h3>
                <p className="text-xl opacity-90 max-w-3xl mx-auto leading-relaxed">
                  Carify transforms your practice by giving staff more time and patients better access. With seamless workflows and natural interactions, our AI Agents deliver measurable results every day.
                </p>
              </motion.div>
            </ParallaxSection>

            <ParallaxSection className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8" speed={0.5} direction="down">
              {[
                { stat: "75%", description: "of your phone calls we handle", color: "from-cyan-400 to-blue-400" },
                { stat: "3x", description: "increase in follow up encounters", color: "from-green-400 to-emerald-400" },
                { stat: "2+ hours", description: "saved per day for each staff member", color: "from-yellow-400 to-orange-400" },
                { stat: "<5%", description: "no show rate we ensure", color: "from-pink-400 to-purple-400" }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="text-center group"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -5, scale: 1.05 }}
                >
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
                    <div className={`text-5xl md:text-6xl font-bold mb-3 bg-gradient-to-r ${item.color} bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300`}>
                      {item.stat}
                    </div>
                    <p className="opacity-90 text-lg">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </ParallaxSection>
          </div>
        </section>

        {/* Carify Features Bento Grid */}
        <RuixenBentoCards />

        {/* Testimonials */}
        <TestimonialsDemo />

        {/* Get Started */}
        <section className="py-20 bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50 relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-pattern opacity-5" />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl" />
          
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <ParallaxSection className="max-w-3xl mx-auto text-center" speed={0.3} direction="down">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-white/80 backdrop-blur-sm rounded-3xl p-12 shadow-2xl border border-white/50"
              >
                <div className="w-16 h-16 bg-gray-100 rounded-2xl mx-auto mb-6 flex items-center justify-center">
                  <Sparkles className="w-8 h-8 text-gray-800" />
                </div>
                
                <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 to-blue-800 bg-clip-text text-transparent mb-4">
                  Get Started in Minutes
                </h2>
                <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                  No setup. No training. No infrastructure. Start transforming your healthcare practice today.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <HoverBorderGradient
                    as="button"
                    className="dark:bg-primary bg-primary text-primary-foreground dark:text-primary-foreground px-8 py-4 text-lg font-semibold"
                  >
                    Schedule a Demo Call
                  </HoverBorderGradient>
                </div>
                
                <div className="mt-8 flex items-center justify-center space-x-6 text-sm text-gray-500">
                  <div className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-gray-800 mr-2" />
                    Free 30-day trial
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-gray-800 mr-2" />
                    No credit card required
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-gray-800 mr-2" />
                    Setup in under 30 days
                  </div>
                </div>
              </motion.div>
            </ParallaxSection>
          </div>
        </section>
      </main>
      
      <Featured_05 />
      
      <Footer
        logo={<div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center text-white font-bold text-sm">C</div>}
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
          license: "All rights reserved"
        }}
      />
    </div>
  );
}