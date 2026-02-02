import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";
import GlobalFooter from "@/components/GlobalFooter";

export default function TermsOfService() {
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

      <main className="flex-1 container mx-auto px-4 sm:px-6 lg:px-8 py-16 max-w-4xl">
        <h1 className="text-4xl font-bold mb-8">Terms of Service</h1>
        <div className="prose prose-lg max-w-none space-y-6">
          <p className="text-gray-600">Last Updated: January 2026</p>
          
          <section>
            <h2 className="text-2xl font-semibold mt-8 mb-4">1. Acceptance of Terms</h2>
            <p>By accessing or using Carify Health AI services, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mt-8 mb-4">2. Description of Service</h2>
            <p>Carify Health provides AI-powered healthcare solutions including:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>AI Insurance Coordinator (Jenny) for benefits verification</li>
              <li>AI Care Manager (Ryan) for perioperative and preventive care</li>
              <li>Automated patient communication and scheduling</li>
              <li>Healthcare administrative automation</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mt-8 mb-4">3. User Responsibilities</h2>
            <p>You agree to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Provide accurate and complete information</li>
              <li>Maintain the security of your account credentials</li>
              <li>Comply with all applicable healthcare regulations</li>
              <li>Use the service only for lawful purposes</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mt-8 mb-4">4. HIPAA Compliance</h2>
            <p>Our services are designed to be HIPAA compliant. Users must execute a Business Associate Agreement (BAA) before processing any Protected Health Information (PHI).</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mt-8 mb-4">5. Limitation of Liability</h2>
            <p>Carify Health shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of our services.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mt-8 mb-4">6. Modifications to Service</h2>
            <p>We reserve the right to modify or discontinue our services at any time, with or without notice.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mt-8 mb-4">7. Contact Information</h2>
            <p>For questions about these Terms of Service, contact us at:</p>
            <p>Email: contact@carify.health</p>
          </section>
        </div>
      </main>

      <GlobalFooter />
    </div>
  );
}
