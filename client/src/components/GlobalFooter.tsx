import { Phone } from "lucide-react";
import { Footer } from "@/components/ui/footer";

export default function GlobalFooter() {
  return (
    <Footer
      logo={<img src="/logo.png" alt="Carify Health" className="h-20 w-auto" />}
      brandName=""
      brandDescription="Moving healthcare from Reactive to Predictive."
      socialLinks={[{ icon: <Phone className="h-5 w-5" />, href: "tel:+1-555-0123", label: "Call Us" }]}
      productLinks={[
        { href: "/platform", label: "Platform" },
        { href: "/jenny", label: "Jenny - Admin Agent" },
        { href: "/joe", label: "Joe (Care Manager)" },
        { href: "/integrations", label: "Integrations" },
        { href: "/security", label: "Security (SOC2/HIPAA)" }
      ]}
      supportLinks={[
        { href: "/help", label: "Help Center" },
        { href: "https://wa.me/15550123", label: "Priority Support: WhatsApp" },
        { href: "mailto:contact@carify.health", label: "Email: contact@carify.health" }
      ]}
      legalLinks={[
        { href: "/privacy", label: "Privacy Policy" },
        { href: "/terms", label: "Terms of Service" },
        { href: "/baa", label: "BAA (Business Associate Agreement)" }
      ]}
      copyright={{ text: "© 2026 Carify Health AI. All rights reserved.", license: "100% HIPAA Compliant" }}
    />
  );
}
