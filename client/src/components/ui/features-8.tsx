import { Card, CardContent } from '@/components/ui/card'

interface Stat {
  value: string;
  label: string;
}

interface FeaturesStatsProps {
  title?: string;
  subtitle?: string;
  stats: Stat[];
}

export function FeaturesStats({ title, subtitle, stats }: FeaturesStatsProps) {
  return (
    <section className="bg-gray-50 py-16 md:py-32 dark:bg-transparent">
      <div className="mx-auto max-w-3xl lg:max-w-5xl px-6">
        {title && (
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>
            {subtitle && <p className="text-lg text-muted-foreground">{subtitle}</p>}
          </div>
        )}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <Card key={index} className="relative overflow-hidden">
              <CardContent className="pt-6 text-center">
                <p className="text-4xl font-bold text-primary mb-2">{stat.value}</p>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
