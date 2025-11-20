import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ParallaxSection from "@/components/ParallaxSection";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Shield, Users, FileCheck, CreditCard, UserCheck, Phone, Calendar, Heart } from "lucide-react";

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
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <ParallaxSection className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Use Cases
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8">
              Discover how Jenny transforms healthcare operations across different scenarios
            </p>
          </ParallaxSection>
        </div>
      </section>

      {/* Payer Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <ParallaxSection className="text-center mb-12">
            <Badge variant="secondary" className="mb-4 text-lg px-4 py-2">
              <Shield className="h-5 w-5 mr-2" />
              Payer
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Insurance & Claims Management
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Streamline insurance verification, prior authorizations, and claims processing with AI-powered automation
            </p>
          </ParallaxSection>
          
          <ParallaxSection className="grid md:grid-cols-2 lg:grid-cols-3 gap-8" speed={0.3} direction="down">
            {payerUseCases.map((useCase, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 border-2 hover:border-primary/20">
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
            ))}
          </ParallaxSection>
        </div>
      </section>

      {/* Patient Section */}
      <section className="py-16 md:py-24 bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <ParallaxSection className="text-center mb-12">
            <Badge variant="secondary" className="mb-4 text-lg px-4 py-2">
              <Users className="h-5 w-5 mr-2" />
              Patient
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Patient Experience & Engagement
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Enhance patient satisfaction with automated intake, personalized outreach, and comprehensive care support
            </p>
          </ParallaxSection>
          
          <ParallaxSection className="grid md:grid-cols-2 gap-8" speed={0.4}>
            {patientUseCases.map((useCase, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 border-2 hover:border-primary/20">
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
            ))}
          </ParallaxSection>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <ParallaxSection className="text-center" speed={0.5} direction="down">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Transform Your Healthcare Operations?
            </h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              See how Jenny can streamline your workflows and improve patient outcomes across all these use cases.
            </p>
            <Button size="lg" variant="secondary" onClick={scrollToDemo} className="text-lg px-8 py-3">
              Schedule Your Demo Today
            </Button>
          </ParallaxSection>
        </div>
      </section>

      <Footer />
    </div>
  );
}