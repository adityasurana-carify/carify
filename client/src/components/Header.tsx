import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu, X, Sparkles, ChevronDown } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const [location, setLocation] = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const handleBookDemo = () => {
    setLocation('/book-demo');
    setMobileMenuOpen(false);
  };

  const handleNavClick = (href: string) => {
    if (href.startsWith('/#')) {
      const id = href.substring(2);
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      setLocation(href);
    }
    setMobileMenuOpen(false);
    setActiveDropdown(null);
  };

  const navItems = [
    {
      label: "Solutions",
      dropdown: [
        { href: "/use-cases", label: "Use Cases" },
        { href: "/why-carify", label: "Why Carify" }
      ]
    },
    {
      label: "Platform",
      dropdown: [
        { href: "/roi-calculator", label: "ROI Calculator" }
      ]
    },
    {
      label: "Agents",
      dropdown: [
        { href: "/#jenny", label: "Jenny - Admin Agent" },
        { href: "/#ryan", label: "Joe (Care Manager)" }
      ]
    },
    {
      label: "Results",
      href: "/#advantage"
    },
    {
      label: "How it Works",
      href: "/#workflow"
    },
    {
      label: "Resources",
      href: "/blogs"
    }
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
              <img src="/logo.png" alt="Carify Health" className="h-16 md:h-20 drop-shadow-sm" />
            </motion.div>
          </Link>

          <nav className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <div 
                key={item.label}
                className="relative"
                onMouseEnter={() => item.dropdown && setActiveDropdown(item.label)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                {item.dropdown ? (
                  <>
                    <motion.button
                      className="flex items-center gap-1 text-sm font-medium transition-all duration-300 hover:text-blue-600 text-gray-700"
                      whileHover={{ y: -2 }}
                    >
                      {item.label}
                      <ChevronDown className="w-4 h-4" />
                    </motion.button>
                    
                    <AnimatePresence>
                      {activeDropdown === item.label && (
                        <motion.div
                          className="absolute top-full left-0 mt-2 w-48 bg-white/95 backdrop-blur-md border border-white/20 rounded-xl shadow-lg py-2"
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          transition={{ duration: 0.2 }}
                        >
                          {item.dropdown.map((dropdownItem) => (
                            <motion.button
                              key={dropdownItem.href}
                              onClick={() => handleNavClick(dropdownItem.href)}
                              className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:text-blue-600 hover:bg-blue-50/50 transition-colors"
                              whileHover={{ x: 5 }}
                            >
                              {dropdownItem.label}
                            </motion.button>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </>
                ) : (
                  <motion.button
                    onClick={() => handleNavClick(item.href!)}
                    className="text-sm font-medium transition-all duration-300 hover:text-blue-600 text-gray-700"
                    whileHover={{ y: -2 }}
                  >
                    {item.label}
                  </motion.button>
                )}
              </div>
            ))}
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button 
                onClick={handleBookDemo} 
                data-testid="button-book-demo"
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group"
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
                <div key={item.label}>
                  {item.dropdown ? (
                    <>
                      <motion.div
                        className="block px-4 py-3 text-sm font-medium text-gray-700 font-semibold"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                      >
                        {item.label}
                      </motion.div>
                      {item.dropdown.map((dropdownItem) => (
                        <motion.div
                          key={dropdownItem.href}
                          className="block px-8 py-2 text-sm text-gray-600 hover:text-blue-600 cursor-pointer"
                          onClick={() => handleNavClick(dropdownItem.href)}
                          whileHover={{ x: 5 }}
                        >
                          {dropdownItem.label}
                        </motion.div>
                      ))}
                    </>
                  ) : (
                    <motion.div
                      className="block px-4 py-3 text-sm font-medium text-gray-700 hover:text-blue-600 cursor-pointer"
                      onClick={() => handleNavClick(item.href!)}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                    >
                      {item.label}
                    </motion.div>
                  )}
                </div>
              ))}
              <motion.div 
                className="px-4 pt-2"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.4 }}
              >
                <Button 
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300" 
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
