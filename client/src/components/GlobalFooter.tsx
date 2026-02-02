import { Linkedin, Twitter, Instagram } from "lucide-react";
import { Footer } from "@/components/ui/footer";

export default function GlobalFooter() {
  return (
    <Footer
      logo={<img src="/logo.png" alt="Carify Health" className="h-20 w-auto" />}
      brandName=""
      brandDescription={<span className="font-bold">Moving healthcare from Reactive to Predictive.</span>}
      socialLinks={[
        { icon: <Linkedin className="h-5 w-5" />, href: "https://linkedin.com/company/carify-health", label: "LinkedIn" },
        { icon: <Twitter className="h-5 w-5" />, href: "https://twitter.com/carifyhealth", label: "Twitter" },
        { icon: <Instagram className="h-5 w-5" />, href: "https://instagram.com/carifyhealth", label: "Instagram" }
      ]}
      productLinks={[
        { href: "/platform", label: "Platform" },
        { href: "/jenny", label: "Jenny (AI Admin Agent)" },
        { href: "/joe", label: "Joe (AI Care Manager)" }
      ]}
      supportLinks={[
        { href: "https://wa.me/918552003232", label: "Priority Support: WhatsApp" },
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
