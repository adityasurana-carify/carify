import Header from "@/components/Header";
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
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        <section className="bg-gradient-to-br from-green-50 via-white to-blue-50 w-full text-sm pb-20 pt-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-pattern opacity-30"></div>
          
          <div className="flex items-center gap-2 border border-green-200 hover:border-green-300 bg-white/80 backdrop-blur rounded-full w-max mx-auto px-4 py-2 mt-16 animate-fade-in-up">
            <span>💰 Calculate your potential savings with Carify</span>
            <button onClick={openModal} className="flex items-center gap-1 font-medium text-green-600 hover:text-green-700 transition-colors">
              <span>Get started</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <h1 className="text-4xl md:text-7xl font-bold max-w-[850px] text-center mx-auto mt-8 text-gray-900 animate-fade-in-up animation-delay-200">
            ROI Calculator
          </h1>

          <p className="text-sm md:text-lg mx-auto max-w-2xl text-center mt-6 max-md:px-2 text-gray-600 animate-fade-in-up animation-delay-400">
            See the financial impact Carify can create for your practice. Calculate potential savings from reduced staff time, fewer no-shows, and increased efficiency.
          </p>
          
          <div className="mt-12 max-w-3xl mx-auto px-4">
            <img 
              src="https://images.unsplash.com/photo-1551601651-2a8555f1a136?w=600&h=400&fit=crop" 
              alt="Healthcare Financial Analytics" 
              className="w-full rounded-2xl shadow-xl border border-white/20"
            />
          </div>
        </section>

        <section className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollCard>
              <div className="text-center mb-12">
                <h2 className="text-4xl md:text-5xl font-bold mb-4">The Carify Advantage</h2>
                <p className="text-xl text-gray-600">Quantifiable outcomes that transform your practice</p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto mb-16">
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 border-2 border-blue-200 rounded-2xl p-8">
                  <h3 className="text-3xl font-bold text-blue-600 mb-4">30% Lower Overhead</h3>
                  <p className="text-gray-700">We don't just save minutes; we remove entire workflows. By automating benefits verification and hold times, we slash operational costs by a third.</p>
                </div>
                <div className="bg-gradient-to-br from-green-50 to-green-100 border-2 border-green-200 rounded-2xl p-8">
                  <h3 className="text-3xl font-bold text-green-600 mb-4">4x More Preventive Visits</h3>
                  <p className="text-gray-700">Jenny proactively mines your data to find care gaps, quadrupling the volume of high-value wellness visits and screenings without adding staff work.</p>
                </div>
                <div className="bg-gradient-to-br from-purple-50 to-purple-100 border-2 border-purple-200 rounded-2xl p-8">
                  <h3 className="text-3xl font-bold text-purple-600 mb-4">85% First-Contact Resolution</h3>
                  <p className="text-gray-700">Jenny doesn't just take messages. She resolves inquiries—scheduling, billing, and intake—completely autonomously.</p>
                </div>
                <div className="bg-gradient-to-br from-orange-50 to-orange-100 border-2 border-orange-200 rounded-2xl p-8">
                  <h3 className="text-3xl font-bold text-orange-600 mb-4">&lt;3% No-Show Rate</h3>
                  <p className="text-gray-700">Our predictive engine spots potential cancellations early and refills the slot instantly, keeping provider utilization above 97%.</p>
                </div>
              </div>
              
              <ROICalculator />
            </ScrollCard>
          </div>
        </section>

      </main>
      
      <Featured_05 />
      
      <GlobalFooter />
    </div>
  );
}