import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";
import GlobalFooter from "@/components/GlobalFooter";

export default function BAA() {
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
        <h1 className="text-4xl font-bold mb-8">Business Associate Agreement (BAA)</h1>
        <div className="prose prose-lg max-w-none space-y-6">
          <p className="text-gray-600">Last Updated: January 2026</p>
          
          <section>
            <h2 className="text-2xl font-semibold mt-8 mb-4">1. Purpose</h2>
            <p>This Business Associate Agreement ("BAA") is entered into between Carify Health AI ("Business Associate") and the healthcare entity ("Covered Entity") to ensure compliance with the Health Insurance Portability and Accountability Act (HIPAA).</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mt-8 mb-4">2. Definitions</h2>
            <p>Terms used in this BAA shall have the same meaning as those defined in HIPAA regulations, including:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Protected Health Information (PHI)</li>
              <li>Electronic Protected Health Information (ePHI)</li>
              <li>Covered Entity</li>
              <li>Business Associate</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mt-8 mb-4">3. Obligations of Business Associate</h2>
            <p>Carify Health agrees to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Use and disclose PHI only as permitted by this BAA or as required by law</li>
              <li>Implement appropriate safeguards to prevent unauthorized use or disclosure of PHI</li>
              <li>Report any security incidents or breaches to the Covered Entity</li>
              <li>Ensure that any subcontractors agree to the same restrictions</li>
              <li>Make PHI available to individuals as required by HIPAA</li>
              <li>Maintain and make available information required for HIPAA compliance audits</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mt-8 mb-4">4. Permitted Uses and Disclosures</h2>
            <p>Business Associate may use or disclose PHI only to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Perform services as specified in the service agreement</li>
              <li>Comply with legal requirements</li>
              <li>Perform data aggregation services for the Covered Entity</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mt-8 mb-4">5. Security Measures</h2>
            <p>Carify Health implements comprehensive security measures including:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>End-to-end encryption of all PHI</li>
              <li>Multi-factor authentication</li>
              <li>Regular security audits and assessments</li>
              <li>Employee training on HIPAA compliance</li>
              <li>Incident response procedures</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mt-8 mb-4">6. Breach Notification</h2>
            <p>In the event of a breach of unsecured PHI, Business Associate shall notify Covered Entity within 24 hours of discovery and provide all relevant information about the breach.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mt-8 mb-4">7. Term and Termination</h2>
            <p>This BAA shall be effective as of the date of service agreement execution and shall terminate when all PHI is destroyed or returned to the Covered Entity.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mt-8 mb-4">8. Contact for BAA Execution</h2>
            <p>To execute a Business Associate Agreement with Carify Health, please contact:</p>
            <p>Email: contact@carify.health</p>
            <p className="mt-4">Our team will provide you with the complete BAA documentation for review and signature.</p>
          </section>
        </div>
      </main>

      <GlobalFooter />
    </div>
  );
}
