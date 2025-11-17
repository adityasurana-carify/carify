import { Button } from "@/components/ui/button";

interface CTASectionProps {
  title: string;
  buttonText: string;
  testId?: string;
}

export default function CTASection({ title, buttonText, testId }: CTASectionProps) {
  const scrollToDemo = () => {
    const demoSection = document.getElementById('book-demo');
    if (demoSection) {
      demoSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-16 text-center space-y-8" data-testid={testId}>
      <h2 className="text-3xl md:text-4xl font-bold text-foreground max-w-3xl mx-auto">
        {title}
      </h2>
      <Button size="lg" onClick={scrollToDemo} data-testid={`${testId}-button`}>
        {buttonText}
      </Button>
    </section>
  );
}
