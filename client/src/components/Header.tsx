import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu, X, Sparkles } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
const logo = "/logo.png";

export default function Header() {
  const [location, setLocation] = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleBookDemo = () => {
    setLocation('/book-demo');
    setMobileMenuOpen(false);
  };

  const navItems = [
    { href: "/", label: "Home", testId: "link-home" },
    { href: "/roi-calculator", label: "ROI Calculator", testId: "link-roi-calculator" },
    { href: "/why-carify", label: "Why Carify", testId: "link-why-carify" },
    { href: "/use-cases", label: "Use Cases", testId: "link-use-cases" }
  ];

  return (
    <motion.header 
      className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-white/20 shadow-lg"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 md:h-24 items-center justify-between">
          <Link href="/" data-testid="link-home">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
            >
              <img src={logo} alt="Carify Health" className="h-16 md:h-20 drop-shadow-sm" />
            </motion.div>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} data-testid={item.testId}>
                <motion.span 
                  className={`text-sm font-medium transition-all duration-300 hover:text-blue-600 relative ${
                    location === item.href ? 'text-blue-600' : 'text-gray-700'
                  }`}
                  whileHover={{ y: -2 }}
                >
                  {item.label}
                  {location === item.href && (
                    <motion.div
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"
                      layoutId="activeTab"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  )}
                </motion.span>
              </Link>
            ))}
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button 
                onClick={handleBookDemo} 
                data-testid="button-book-demo"
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-2 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group"
              >
                <Sparkles className="w-4 h-4 mr-2 group-hover:rotate-12 transition-transform" />
                Book a Demo
              </Button>
            </motion.div>
          </nav>

          <motion.button
            className="md:hidden p-2 rounded-xl bg-white/50 backdrop-blur-sm border border-white/20 hover:bg-white/70 transition-all duration-300"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            data-testid="button-mobile-menu"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <AnimatePresence mode="wait">
              {mobileMenuOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X className="h-6 w-6 text-gray-700" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu className="h-6 w-6 text-gray-700" />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>

        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div 
              className="md:hidden py-4 space-y-2 border-t border-white/20 bg-white/50 backdrop-blur-sm rounded-b-2xl"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              {navItems.map((item, index) => (
                <Link key={item.href} href={item.href} data-testid={`link-mobile-${item.href.replace('/', '') || 'home'}`}>
                  <motion.div 
                    className="block px-4 py-3 text-sm font-medium hover:bg-white/50 rounded-xl mx-2 transition-all duration-300 text-gray-700 hover:text-blue-600" 
                    onClick={() => setMobileMenuOpen(false)}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    whileHover={{ x: 5 }}
                  >
                    {item.label}
                  </motion.div>
                </Link>
              ))}
              <motion.div 
                className="px-4 pt-2"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.4 }}
              >
                <Button 
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300" 
                  onClick={handleBookDemo} 
                  data-testid="button-mobile-demo"
                >
                  <Sparkles className="w-4 h-4 mr-2" />
                  Book a Demo
                </Button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}
