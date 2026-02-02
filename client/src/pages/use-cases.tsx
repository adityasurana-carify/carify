import Header from "@/components/Header";
import GlobalFooter from "@/components/GlobalFooter";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Shield, Users, FileCheck, CreditCard, UserCheck, Phone, Calendar, Heart, ArrowRight, Building2, Hospital, Stethoscope } from "lucide-react";
import { FeaturesSectionWithHoverEffects } from "@/components/ui/feature-section-with-hover-effects";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import Featured_05 from "@/components/ui/globe-feature-section";
import { TestimonialsDemo } from "@/components/ui/testimonials-demo";
import { WordFadeIn } from "@/components/ui/word-fade-in";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

function ScrollCard({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
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

const payerUseCases = [
  {
    icon: Shield,
    title: "Benefits + Insurance Verification",
    description: "Instantly access insurance details, verify patient benefits, check eligibility status, and confirm provider network participation with real-time accuracy.",
    features: [
      "Real-time insurance verification",
      "Benefits eligibility checking",
      "Provider network confirmation",
      "Coverage details access"
    ]
  },
  {
    icon: FileCheck,
    title: "Prior Authorization Management",
    description: "Streamline prior authorization processes, track approval status, manage appeals efficiently, handle formulary exceptions, and submit electronic requests seamlessly.",
    features: [
      "Electronic request submission",
      "Approval status tracking",
      "Appeals management",
      "Formulary exception handling"
    ]
  },
  {
    icon: CreditCard,
    title: "Claims + Payment Processing",
    description: "Monitor patient copays, coordinate financial assistance programs, track claims status in real-time, manage appeals processes, and handle electronic claim submissions.",
    features: [
      "Real-time claims tracking",
      "Copay monitoring",
      "Financial assistance coordination",
      "Electronic claim submissions"
    ]
  }
];

const patientUseCases = [
  {
    icon: UserCheck,
    title: "Patient Intake Management",
    description: "Automate patient registration, collect insurance information, verify demographics, gather medical history, and ensure complete intake documentation before appointments.",
    features: [
      "Automated registration",
      "Insurance information collection",
      "Demographics verification",
      "Medical history gathering"
    ]
  },
  {
    icon: Phone,
    title: "Welcome & Marketing Outreach",
    description: "Deliver personalized welcome calls to new patients, provide practice information, explain services offered, and conduct targeted marketing campaigns to enhance patient engagement.",
    features: [
      "Personalized welcome calls",
      "Practice information delivery",
      "Service explanations",
      "Targeted marketing campaigns"
    ]
  },
  {
    icon: Calendar,
    title: "Appointment Management Calls",
    description: "Send automated appointment reminders, confirm upcoming visits, handle rescheduling requests, reduce no-shows, and ensure patients are prepared for their appointments.",
    features: [
      "Automated reminders",
      "Visit confirmations",
      "Rescheduling handling",
      "No-show reduction"
    ]
  },
  {
    icon: Heart,
    title: "Treatment Adherence Support",
    description: "Monitor patient compliance with treatment plans, provide medication reminders, follow up on care instructions, and offer support to improve health outcomes.",
    features: [
      "Compliance monitoring",
      "Medication reminders",
      "Care instruction follow-ups",
      "Health outcome support"
    ]
  }
];

const scrollToDemo = () => {
  const demoSection = document.getElementById('book-demo');
  if (demoSection) {
    demoSection.scrollIntoView({ behavior: 'smooth' });
  }
};

export default function UseCasesPage() {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-50 via-white to-blue-50 w-full text-sm pb-20 pt-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-30"></div>
        
        <div className="flex items-center gap-2 border border-purple-200 hover:border-purple-300 bg-white/80 backdrop-blur rounded-full w-max mx-auto px-4 py-2 mt-16 animate-fade-in-up">
          <span>🎯 Explore Jenny's capabilities across healthcare workflows</span>
          <button className="flex items-center gap-1 font-medium text-purple-600">
            <span>Learn more</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold max-w-[850px] text-center mx-auto mt-8 text-gray-900 animate-fade-in-up animation-delay-200">
          Use Cases
        </h1>

        <p className="text-sm md:text-lg mx-auto max-w-2xl text-center mt-6 max-md:px-2 text-gray-600 animate-fade-in-up animation-delay-400">
          Discover how Jenny transforms healthcare operations across different scenarios. From insurance verification to patient engagement.
        </p>
        
        <div className="mt-12 max-w-4xl mx-auto px-4">
          <img 
            src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&h=500&fit=crop" 
            alt="Healthcare Team Collaboration" 
            className="w-full rounded-2xl shadow-xl border border-white/20"
          />
        </div>
      </section>

      {/* Payer Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollCard className="text-center mb-12">
            <div className="w-20 h-20 mx-auto mb-6 rounded-2xl overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=80&h=80&fit=crop" 
                alt="Insurance Management" 
                className="w-full h-full object-cover"
              />
            </div>
            <Badge variant="secondary" className="mb-4 text-lg px-4 py-2">
              <Shield className="h-5 w-5 mr-2" />
              Payer
            </Badge>
            <WordFadeIn words="Insurance & Claims Management" className="text-5xl md:text-7xl font-bold text-foreground mb-4" />
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Streamline insurance verification, prior authorizations, and claims processing with AI-powered automation
            </p>
          </ScrollCard>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {payerUseCases.map((useCase, index) => (
              <ScrollCard key={index} delay={index * 150}>
                <Card className="transition-all duration-300  h-full">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-3 bg-primary/10 rounded-lg">
                        <useCase.icon className="h-8 w-8 text-primary" />
                      </div>
                      <CardTitle className="text-xl">{useCase.title}</CardTitle>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">
                      {useCase.description}
                    </p>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 mb-6">
                      {useCase.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Button variant="outline" className="w-full" onClick={scrollToDemo}>
                      Demo Call
                    </Button>
                  </CardContent>
                </Card>
              </ScrollCard>
            ))}
          </div>
        </div>
      </section>

      {/* Patient Section */}
      <section className="py-16 md:py-24 bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollCard className="text-center mb-12">
            <div className="w-20 h-20 mx-auto mb-6 rounded-2xl overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=80&h=80&fit=crop" 
                alt="Patient Care" 
                className="w-full h-full object-cover"
              />
            </div>
            <Badge variant="secondary" className="mb-4 text-lg px-4 py-2">
              <Users className="h-5 w-5 mr-2" />
              Patient
            </Badge>
            <WordFadeIn words="Patient Experience & Engagement" className="text-5xl md:text-7xl font-bold text-foreground mb-4" />
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Enhance patient satisfaction with automated intake, personalized outreach, and comprehensive care support
            </p>
          </ScrollCard>
          
          <div className="grid md:grid-cols-2 gap-8">
            {patientUseCases.map((useCase, index) => (
              <ScrollCard key={index} delay={index * 200}>
                <Card className="transition-all duration-300  h-full">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-3 bg-primary/10 rounded-lg">
                        <useCase.icon className="h-8 w-8 text-primary" />
                      </div>
                      <CardTitle className="text-xl">{useCase.title}</CardTitle>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">
                      {useCase.description}
                    </p>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 mb-6">
                      {useCase.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Button variant="outline" className="w-full" onClick={scrollToDemo}>
                      Demo Call
                    </Button>
                  </CardContent>
                </Card>
              </ScrollCard>
            ))}
          </div>
        </div>
      </section>

      {/* Platform Features */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollCard className="text-center mb-12">
            <WordFadeIn words="Use Cases by Healthcare Setting" className="text-5xl md:text-7xl font-bold text-foreground mb-4" />
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Discover how Jenny and Joe transform operations across different healthcare environments
            </p>
          </ScrollCard>
          
          <ScrollCard delay={200}>
            <Tabs defaultValue="care-groups" className="w-full">
              <TabsList className="grid w-full max-w-2xl mx-auto grid-cols-3 mb-12">
                <TabsTrigger value="care-groups" className="text-base">
                  <Building2 className="w-4 h-4 mr-2" />
                  Care Groups
                </TabsTrigger>
                <TabsTrigger value="hospitals" className="text-base">
                  <Hospital className="w-4 h-4 mr-2" />
                  Hospitals
                </TabsTrigger>
                <TabsTrigger value="clinics" className="text-base">
                  <Stethoscope className="w-4 h-4 mr-2" />
                  Clinics
                </TabsTrigger>
              </TabsList>

              <TabsContent value="care-groups" className="space-y-6">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <Card className="transition-shadow">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Shield className="w-5 h-5 text-blue-600" />
                        Closing Care Gaps (Jenny)
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600">Jenny scans patient records for overdue screenings and calls patients to schedule wellness visits, directly improving your HEDIS scores.</p>
                    </CardContent>
                  </Card>
                  <Card className="transition-shadow">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Heart className="w-5 h-5 text-blue-600" />
                        Transitional Care (Jenny)
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600">The moment a patient is discharged, Jenny initiates the "14-Day Bridge" protocol, ensuring follow-ups are booked to prevent readmission penalties.</p>
                    </CardContent>
                  </Card>
                  <Card className="transition-shadow">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Users className="w-5 h-5 text-blue-600" />
                        Patient Reactivation (Jenny)
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600">Automatically re-engage dormant patients with personalized welcome calls and service updates to keep your practice top-of-mind.</p>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              <TabsContent value="hospitals" className="space-y-6">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <Card className="transition-shadow">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Stethoscope className="w-5 h-5 text-green-600" />
                        Perioperative Support (Joe)
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600">Joe manages the entire surgical journey—from ensuring pre-op clearance tests are done to monitoring post-op pain levels daily.</p>
                    </CardContent>
                  </Card>
                  <Card className="transition-shadow">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Shield className="w-5 h-5 text-green-600" />
                        Risk Prediction (Joe)
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600">Joe tracks patient-reported outcomes (PROs) and alerts your triage team instantly if vitals trend negatively, preventing emergency readmissions.</p>
                    </CardContent>
                  </Card>
                  <Card className="transition-shadow">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <FileCheck className="w-5 h-5 text-green-600" />
                        Discharge Compliance (Joe)
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600">Automates the collection of post-discharge data, ensuring patients understand their medication and recovery instructions.</p>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              <TabsContent value="clinics" className="space-y-6">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <Card className="transition-shadow">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Calendar className="w-5 h-5 text-purple-600" />
                        Smart Scheduling (Jenny)
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600">Jenny fills your calendar by negotiating times, handling cancellations, and instantly backfilling slots from your waitlist.</p>
                    </CardContent>
                  </Card>
                  <Card className="transition-shadow">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Shield className="w-5 h-5 text-purple-600" />
                        Insurance Verification (Jenny)
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 mb-2">⭐ Star Feature: Jenny calls payers directly, navigating IVRs to verify deductibles and copays before the patient arrives.</p>
                    </CardContent>
                  </Card>
                  <Card className="transition-shadow">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <CreditCard className="w-5 h-5 text-purple-600" />
                        Revenue Recovery (Jenny)
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600">Jenny manages the awkward "collections" conversations, following up on unpaid balances with empathy and consistency.</p>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
            </Tabs>
          </ScrollCard>
        </div>
      </section>

      {/* Original Platform Features */}
      <section className="py-16 md:py-24 bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollCard className="text-center mb-12">
            <WordFadeIn words="Platform Capabilities" className="text-5xl md:text-7xl font-bold text-foreground mb-4" />
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Comprehensive features designed for modern healthcare operations
            </p>
          </ScrollCard>
          <ScrollCard delay={200}>
            <FeaturesSectionWithHoverEffects />
          </ScrollCard>
        </div>
      </section>



      <Featured_05 />

      <GlobalFooter />
    </div>
  );
}