import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";
import GlobalFooter from "@/components/GlobalFooter";
import { Phone, Calculator, ArrowRight } from "lucide-react";
import ROICalculator from "@/components/ROICalculator";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { useDemoModal } from "@/hooks/use-demo-modal";
import Featured_05 from "@/components/ui/globe-feature-section";

function ScrollCard({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const { ref, isVisible } = useScrollAnimation();
  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

export default function ROICalculatorPage() {
  const { openModal } = useDemoModal();

  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden">
      <header className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-white/20 shadow-lg">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-20 md:h-24 items-center justify-between">
            <Link href="/">
              <img src="/logo.png" alt="Carify Health" className="h-16 md:h-20 drop-shadow-sm" />
            </Link>
            <Button 
              onClick={() => window.location.href = '/book-demo'} 
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group"
            >
              <Sparkles className="w-4 h-4 mr-2 group-hover:rotate-12 transition-transform" />
              Book a Demo
            </Button>
          </div>
        </div>
      </header>
      
      <main className="flex-1">
        <section className="bg-gradient-to-br from-green-50 via-white to-blue-50 w-full text-sm pb-20 pt-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-pattern opacity-30"></div>

          <h1 className="text-4xl md:text-7xl font-bold max-w-[850px] text-center mx-auto mt-8 text-gray-900 animate-fade-in-up animation-delay-200">
            ROI Calculator
          </h1>

          <p className="text-sm md:text-lg mx-auto max-w-2xl text-center mt-6 max-md:px-2 text-gray-600 animate-fade-in-up animation-delay-400">
            See the financial impact Carify can create for your practice. Calculate potential savings from reduced staff time, fewer no-shows, and increased efficiency.
          </p>
        </section>

        <section className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollCard>
              <ROICalculator />
            </ScrollCard>
          </div>
        </section>

      </main>
      
      <GlobalFooter />
    </div>
  );
}