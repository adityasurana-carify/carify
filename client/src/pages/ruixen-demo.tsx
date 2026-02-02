import RuixenSection from "@/components/ui/ruixen-feature-section";
import Header from "@/components/Header";
import GlobalFooter from "@/components/GlobalFooter";
import { Phone } from "lucide-react";

export default function RuixenDemo() {
  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden">
      <Header />
      <main className="flex-1 bg-gradient-to-br from-gray-50 to-blue-50">
        <RuixenSection />
      </main>
      <GlobalFooter />
    </div>
  );
}
