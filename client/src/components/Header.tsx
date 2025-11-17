import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Header() {
  const [location] = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToDemo = () => {
    const demoSection = document.getElementById('book-demo');
    if (demoSection) {
      demoSection.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" data-testid="link-home">
            <span className="text-2xl font-bold text-primary">Carify.Health</span>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            <Link href="/" data-testid="link-roi-calculator">
              <span className={`text-sm font-medium transition-colors hover:text-primary ${location === '/' ? 'text-primary' : 'text-foreground'}`}>
                ROI Calculator
              </span>
            </Link>
            <Link href="/why-carify" data-testid="link-why-carify">
              <span className={`text-sm font-medium transition-colors hover:text-primary ${location === '/why-carify' ? 'text-primary' : 'text-foreground'}`}>
                Why Carify
              </span>
            </Link>
            <Button onClick={scrollToDemo} data-testid="button-book-demo">
              Book a Demo
            </Button>
          </nav>

          <button
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            data-testid="button-mobile-menu"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden py-4 space-y-4 border-t">
            <Link href="/" data-testid="link-mobile-roi">
              <div className="block px-4 py-2 text-sm font-medium hover:bg-accent rounded-md" onClick={() => setMobileMenuOpen(false)}>
                ROI Calculator
              </div>
            </Link>
            <Link href="/why-carify" data-testid="link-mobile-why">
              <div className="block px-4 py-2 text-sm font-medium hover:bg-accent rounded-md" onClick={() => setMobileMenuOpen(false)}>
                Why Carify
              </div>
            </Link>
            <div className="px-4">
              <Button className="w-full" onClick={scrollToDemo} data-testid="button-mobile-demo">
                Book a Demo
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
