import { Button } from "@/components/ui/button";

export default function Footer() {
  const scrollToDemo = () => {
    const demoSection = document.getElementById('book-demo');
    if (demoSection) {
      demoSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-muted">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center space-y-6">
          <h2 className="text-3xl font-bold text-foreground">
            Ready to transform your healthcare operations with AI?
          </h2>
          <Button size="lg" onClick={scrollToDemo} data-testid="button-footer-demo">
            Book a Demo
          </Button>
        </div>
        
        <div className="mt-12 pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Carify.Health. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
