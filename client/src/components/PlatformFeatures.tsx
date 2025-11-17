import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LayoutDashboard, PhoneForwarded, BarChart3, Globe, MessageSquare } from "lucide-react";

const features = [
  {
    icon: LayoutDashboard,
    title: "Unified Dashboard",
    description: "Track call performance, appointment metrics, patient engagement, and agent behavior—all in one place.",
  },
  {
    icon: PhoneForwarded,
    title: "On-Call Escalation",
    description: "If a call requires human attention, the AI seamlessly transfers it to your team with context included.",
  },
  {
    icon: BarChart3,
    title: "Real-Time Analytics",
    description: "Understand patient behavior, call patterns, and workflow bottlenecks with rich insights that improve operations.",
  },
  {
    icon: Globe,
    title: "Multilingual Support",
    description: "The assistant speaks your patients' language—making care accessible and inclusive for diverse communities.",
  },
  {
    icon: MessageSquare,
    title: "Voice + Text Capabilities",
    description: "Whether patients prefer calling, texting, or voicemail, the AI handles all channels with the same professionalism.",
  },
];

export default function PlatformFeatures() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Platform Features
          </h2>
          <p className="text-lg text-muted-foreground">
            Everything you need to run a modern healthcare practice
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <Card key={index} className="hover-elevate transition-transform" data-testid={`card-feature-${index}`}>
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-lg">{feature.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
