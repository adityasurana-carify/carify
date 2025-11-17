import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Heart, Users, TrendingUp } from "lucide-react";

const reasons = [
  {
    icon: Heart,
    title: "More Time for Care",
    description: "Clinicians shouldn't spend half their day on administrative tasks. AI frees them to focus on patient outcomes, not phone lines.",
  },
  {
    icon: Users,
    title: "Consistent Patient Experience",
    description: "Every patient gets instant attention, clear instructions, and follow-up support—no matter how busy your practice gets.",
  },
  {
    icon: TrendingUp,
    title: "Operational Efficiency Without More Hiring",
    description: "Instead of battling staffing shortages, clinics can scale operations confidently with AI handling their repetitive workload.",
  },
];

export default function WhyItMatters() {
  return (
    <section className="py-16 md:py-24 bg-muted">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Why It Matters
          </h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <Card key={index} className="hover-elevate transition-transform" data-testid={`card-reason-${index}`}>
              <CardHeader>
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <reason.icon className="h-10 w-10 text-primary" />
                  </div>
                </div>
                <CardTitle className="text-xl text-center">{reason.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-center leading-relaxed">
                  {reason.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
