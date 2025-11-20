import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Heart, Lock, Users } from "lucide-react";

const values = [
  {
    icon: Shield,
    title: "Reliability First",
    description: "Every workflow is designed for healthcare-grade precision and consistency.",
  },
  {
    icon: Heart,
    title: "Empathy at Scale",
    description: "Patients deserve warmth and clarity. Our AI is trained to communicate with care—not cold automation.",
  },
  {
    icon: Lock,
    title: "Security Built In",
    description: "Every interaction meets strict compliance standards, ensuring your data and patients stay protected.",
  },
  {
    icon: Users,
    title: "Customer-Led Innovation",
    description: "Your feedback shapes our roadmap. Each improvement comes from real clinic challenges and frontline insights.",
  },
];

export default function ProductValues() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Our Product Values
          </h2>
          <p className="text-lg text-muted-foreground">
            Built for Modern Healthcare. Designed for Busy Teams.
          </p>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => {
            const colors = ['blue', 'green', 'purple', 'orange'] as const;
            return (
              <Card key={index} className="hover-elevate transition-transform" glowColor={colors[index]} data-testid={`card-value-${index}`}>
                <CardHeader>
                  <div className="flex justify-center mb-4">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <value.icon className="h-8 w-8 text-primary" />
                    </div>
                  </div>
                  <CardTitle className="text-lg text-center">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground text-center leading-relaxed">
                    {value.description}
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
