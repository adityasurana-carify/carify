import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import AnimatedSection from "./AnimatedSection";
const dashboardImage = "/Healthcare_dashboard_interface_2e3152ad.png";
const clinicImage = "/Modern_clinic_reception_1d7ea30c.png";

const features = {
  dashboard: {
    title: "Unified Dashboard",
    description: "Track call performance, appointment metrics, patient engagement, and agent behavior—all in one centralized platform.",
    image: dashboardImage,
    benefits: [
      "Real-time call analytics",
      "Patient engagement metrics",
      "Performance tracking",
      "Custom reporting",
    ],
  },
  integration: {
    title: "Seamless Integration",
    description: "Connect with all major EHR/PMS systems. Data syncs instantly, and your staff never touches duplicate paperwork.",
    image: clinicImage,
    benefits: [
      "EHR/PMS compatibility",
      "Automatic data sync",
      "Zero duplicate entry",
      "API-ready platform",
    ],
  },
  analytics: {
    title: "Advanced Analytics",
    description: "Understand patient behavior, call patterns, and workflow bottlenecks with rich insights that improve operations.",
    image: dashboardImage,
    benefits: [
      "Behavior analysis",
      "Pattern recognition",
      "Bottleneck identification",
      "Actionable insights",
    ],
  },
};

export default function InteractiveFeatures() {
  return (
    <section className="py-16 md:py-24 bg-muted">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Platform Features
            </h2>
            <p className="text-lg text-muted-foreground">
              Everything you need to run a modern healthcare practice
            </p>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <Tabs defaultValue="dashboard" className="w-full" data-testid="tabs-features">
            <TabsList className="grid w-full max-w-2xl mx-auto grid-cols-3 mb-8">
              <TabsTrigger value="dashboard" data-testid="tab-dashboard">Dashboard</TabsTrigger>
              <TabsTrigger value="integration" data-testid="tab-integration">Integration</TabsTrigger>
              <TabsTrigger value="analytics" data-testid="tab-analytics">Analytics</TabsTrigger>
            </TabsList>

            {Object.entries(features).map(([key, feature], index) => {
              const colors = ['blue', 'purple', 'green'] as const;
              return (
                <TabsContent key={key} value={key}>
                  <Card glowColor={colors[index]}>
                    <div className="grid md:grid-cols-2 gap-8">
                      <div className="p-8 space-y-6">
                        <CardHeader className="p-0">
                          <CardTitle className="text-2xl">{feature.title}</CardTitle>
                        </CardHeader>
                        <CardContent className="p-0">
                          <p className="text-muted-foreground leading-relaxed mb-6">
                            {feature.description}
                          </p>
                          <div className="space-y-3">
                            {feature.benefits.map((benefit, index) => (
                              <div key={index} className="flex items-center gap-3">
                                <div className="w-2 h-2 rounded-full bg-primary" />
                                <span className="text-sm">{benefit}</span>
                              </div>
                            ))}
                          </div>
                        </CardContent>
                      </div>
                      <div className="relative h-64 md:h-auto">
                        <img
                          src={feature.image}
                          alt={feature.title}
                          className="w-full h-full object-cover rounded-r-lg"
                        />
                      </div>
                    </div>
                  </Card>
                </TabsContent>
              );
            })}
          </Tabs>
        </AnimatedSection>
      </div>
    </section>
  );
}
