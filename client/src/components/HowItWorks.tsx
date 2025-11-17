import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Workflow, Link as LinkIcon, Rocket } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const steps = [
  {
    icon: Workflow,
    title: "Map Your Workflow",
    description: "We analyze how your team handles scheduling, reminders, billing, and follow-ups—then teach the AI to replicate it perfectly.",
  },
  {
    icon: LinkIcon,
    title: "Integrate With Your Systems",
    description: "Our API-ready platform connects with all major EHR/PMS systems. Data is logged accurately, updates sync instantly, and your staff never touches duplicate paperwork again.",
  },
  {
    icon: Rocket,
    title: "Launch, Refine & Scale",
    description: "Your AI Assistant goes live in under 30 days. We monitor performance, fine-tune workflows, and unlock additional use cases as your needs evolve.",
  },
];

export default function HowItWorks() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              How It Works
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Get started in three simple steps
            </p>
          </div>
        </AnimatedSection>
        
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <AnimatedSection key={index} delay={index * 0.15}>
              <Card className="hover-elevate transition-transform h-full" data-testid={`card-step-${index}`}>
              <CardHeader>
                <div className="flex items-center gap-4 mb-2">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary text-primary-foreground text-xl font-bold">
                    {index + 1}
                  </div>
                  <step.icon className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-xl">{step.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </CardContent>
            </Card>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
