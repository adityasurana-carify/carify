import { Card, CardContent } from "@/components/ui/card";
import { TrendingDown, Zap, Calendar, Star, PhoneOff } from "lucide-react";

const stats = [
  {
    icon: TrendingDown,
    stat: "40%",
    label: "Reduction in front-desk workload",
  },
  {
    icon: Zap,
    stat: "3×",
    label: "Faster response time for patient inquiries",
  },
  {
    icon: Calendar,
    stat: "25%",
    label: "Increase in completed follow-up appointments",
  },
  {
    icon: Star,
    stat: "Significant",
    label: "Improvements in patient satisfaction scores",
  },
  {
    icon: PhoneOff,
    stat: "Dramatically",
    label: "Fewer missed calls and abandoned voicemails",
  },
];

export default function SocialProof() {
  return (
    <section className="py-16 md:py-24 bg-primary/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Practices Using Our AI Have Seen
          </h2>
          <p className="text-lg text-muted-foreground">
            Real results from healthcare providers
          </p>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {stats.map((item, index) => (
            <Card key={index} className="hover-elevate transition-transform" data-testid={`card-proof-${index}`}>
              <CardContent className="pt-6 text-center space-y-3">
                <div className="flex justify-center">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <item.icon className="h-8 w-8 text-primary" />
                  </div>
                </div>
                <p className="text-3xl font-bold text-primary">
                  {item.stat}
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {item.label}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
