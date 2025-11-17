import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Sparkles } from "lucide-react";
import heroImage from "@assets/generated_images/Healthcare_professionals_using_technology_cfe0b0c4.png";

export default function EnhancedHero() {
  const scrollToDemo = () => {
    const demoSection = document.getElementById('book-demo');
    if (demoSection) {
      demoSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-[85vh] flex items-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-chart-2/5 to-background" />
      
      <div 
        className="absolute right-0 top-0 bottom-0 w-1/2 opacity-20 bg-cover bg-center hidden lg:block"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      
      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6"
          >
            <Sparkles className="h-4 w-4" />
            <span>AI-Powered Healthcare Solutions</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight"
            data-testid="text-enhanced-hero-title"
          >
            Let us save your{" "}
            <span className="text-primary">time and costs</span> with Carify Agents
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-muted-foreground mb-8 leading-relaxed"
            data-testid="text-enhanced-hero-subtitle"
          >
            As we handle the repetitive tasks that your staff does, freeing up their valuable time to focus on high-impact work, we can calculate how much meaningful financial impact we can create for you.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-4 mb-8"
          >
            {[
              "Handle 75% of your phone calls automatically",
              "Save 2+ hours daily per staff member",
              "Reduce no-shows to less than 5%",
            ].map((item, index) => (
              <div key={index} className="flex items-center gap-3">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center">
                  <CheckCircle2 className="h-4 w-4 text-primary" />
                </div>
                <span className="text-foreground font-medium">{item}</span>
              </div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Button size="lg" onClick={scrollToDemo} className="group" data-testid="button-hero-demo">
              Book a Demo
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button size="lg" variant="outline" onClick={() => {
              const calculatorSection = document.querySelector('[data-testid="card-roi-calculator"]');
              if (calculatorSection) {
                calculatorSection.scrollIntoView({ behavior: 'smooth' });
              }
            }} data-testid="button-hero-calculator">
              Calculate Your ROI
            </Button>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent pointer-events-none" />
    </section>
  );
}
