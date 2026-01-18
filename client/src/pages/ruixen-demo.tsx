import RuixenSection from "@/components/ui/ruixen-feature-section";
import Header from "@/components/Header";
import { Footer } from "@/components/ui/footer";
import { Phone } from "lucide-react";

export default function RuixenDemo() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 bg-gradient-to-br from-gray-50 to-blue-50">
        <RuixenSection />
      </main>
      <Footer
        logo={<div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center text-white font-bold text-sm">C</div>}
        brandName="Carify Health"
        socialLinks={[{ icon: <Phone className="h-5 w-5" />, href: "tel:+1-555-0123", label: "Call Us" }]}
        mainLinks={[
          { href: "/", label: "Home" },
          { href: "/why-carify", label: "Why Carify" },
          { href: "/use-cases", label: "Use Cases" }
        ]}
        legalLinks={[
          { href: "/privacy", label: "Privacy" },
          { href: "/terms", label: "Terms" }
        ]}
        copyright={{ text: "© 2024 Carify Health", license: "All rights reserved" }}
      />
    </div>
  );
}
