import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Pill, CreditCard, FileText, CalendarClock, MessageSquare } from "lucide-react";

const useCases = [
  {
    icon: Pill,
    title: "Prescription Refill Coordination",
    description: "The assistant handles refill requests, verifies eligibility, and logs requests into your system—without pulling your staff into long pharmacy calls.",
  },
  {
    icon: CreditCard,
    title: "Insurance & Eligibility Queries",
    description: "Simplify the overload of 'Do you accept my insurance?' AI collects details, checks eligibility (via integrations), and updates records instantly.",
  },
  {
    icon: FileText,
    title: "Lab Result Notifications",
    description: "Automatically inform patients when results are ready, share next steps, and schedule follow-ups if needed.",
  },
  {
    icon: CalendarClock,
    title: "Waitlist Management",
    description: "When a slot opens, the AI automatically calls, texts, and fills the slot—reducing wasted time and maximizing revenue.",
  },
  {
    icon: MessageSquare,
    title: "Patient Communication",
    description: "Handle appointment confirmations, reminders, and follow-up messages with personalized, empathetic responses.",
  },
];

export default function UseCases() {
  return (
    <section className="py-16 md:py-24 bg-muted">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-5xl md:text-7xl font-bold text-foreground mb-4">
            Powerful Use Cases
          </h2>
          <p className="text-lg text-muted-foreground">
            AI-powered solutions for every aspect of patient care
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {useCases.map((useCase, index) => {
            const colors = ['blue', 'green', 'purple', 'orange', 'red'] as const;
            return (
              <Card key={index} className="hover-elevate transition-transform" glowColor={colors[index]} data-testid={`card-usecase-${index}`}>
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <useCase.icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-lg">{useCase.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {useCase.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
