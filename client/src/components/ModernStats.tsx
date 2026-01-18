import { TrendingDown, Clock, TrendingUp, Smile } from 'lucide-react';
import { motion, useReducedMotion } from 'motion/react';
import { FeatureCard } from '@/components/ui/grid-feature-cards';

const features = [
  {
    title: '40% Reduction in front-desk workload',
    icon: TrendingDown,
    description: 'Practices using our AI have seen real results from healthcare providers',
  },
  {
    title: '3× Faster response time for patient inquiries',
    icon: Clock,
    description: 'Real results from healthcare providers using our AI solutions',
  },
  {
    title: '25% Increase in completed follow-up appointments',
    icon: TrendingUp,
    description: 'Practices using our AI have seen significant improvements',
  },
  {
    title: 'Significant Improvements in patient satisfaction scores',
    icon: Smile,
    description: 'Real results from healthcare providers transforming patient care',
  },
];

export default function ModernStats() {
  return (
    <section className="py-16 md:py-32">
      <div className="mx-auto w-full max-w-5xl space-y-8 px-4">
        <AnimatedContainer className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-wide text-balance md:text-4xl lg:text-5xl xl:font-extrabold">
            Practices Using Our AI Have Seen
          </h2>
          <p className="text-muted-foreground mt-4 text-sm tracking-wide text-balance md:text-base">
            Real results from healthcare providers
          </p>
        </AnimatedContainer>

        <AnimatedContainer
          delay={0.4}
          className="grid grid-cols-1 divide-x divide-y divide-dashed border border-dashed sm:grid-cols-2 md:grid-cols-2"
        >
          {features.map((feature, i) => (
            <FeatureCard key={i} feature={feature} />
          ))}
        </AnimatedContainer>
      </div>
    </section>
  );
}

type ViewAnimationProps = {
  delay?: number;
  className?: React.ComponentProps<typeof motion.div>['className'];
  children: React.ReactNode;
};

function AnimatedContainer({ className, delay = 0.1, children }: ViewAnimationProps) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return children;
  }

  return (
    <motion.div
      initial={{ filter: 'blur(4px)', translateY: -8, opacity: 0 }}
      whileInView={{ filter: 'blur(0px)', translateY: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.8 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
