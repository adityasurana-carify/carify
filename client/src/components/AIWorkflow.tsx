import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";
import ParallaxSection from "./ParallaxSection";

export default function AIWorkflow() {
  return (
    <section className="py-12 md:py-16 bg-muted">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <ParallaxSection speed={0.4} direction="down">
          <Card className="hover-elevate transition-transform" data-testid="card-ai-workflow">
            <CardContent className="pt-8 text-center space-y-4">
              <div className="flex justify-center mb-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <CheckCircle2 className="h-10 w-10 text-primary" />
                </div>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-foreground">
                AI That Works the Way Your Practice Works
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                Unlike generic chatbots, our agents adapt to your protocols, your terminology, and your patient experience. Every step mirrors the way your team handles care.
              </p>
            </CardContent>
          </Card>
        </ParallaxSection>
      </div>
    </section>
  );
}
