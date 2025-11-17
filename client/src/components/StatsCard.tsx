import { Card, CardContent } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

interface StatsCardProps {
  icon: LucideIcon;
  stat: string;
  description: string;
  testId?: string;
}

export default function StatsCard({ icon: Icon, stat, description, testId }: StatsCardProps) {
  return (
    <Card className="hover-elevate transition-transform" data-testid={testId}>
      <CardContent className="pt-6 text-center space-y-4">
        <div className="flex justify-center">
          <div className="p-3 bg-primary/10 rounded-lg">
            <Icon className="h-8 w-8 text-primary" />
          </div>
        </div>
        <div className="space-y-2">
          <p className="text-4xl md:text-5xl font-bold text-primary" data-testid={`${testId}-value`}>
            {stat}
          </p>
          <p className="text-sm text-muted-foreground leading-relaxed" data-testid={`${testId}-description`}>
            {description}
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
