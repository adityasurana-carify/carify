import { Switch, Route } from "wouter";
import { queryClient } from "./utils/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Suspense, lazy } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { LoadingPage } from "@/components/LoadingSpinner";
import { ErrorBoundary } from "react-error-boundary";
import { DemoModalProvider, useDemoModal } from "@/hooks/use-demo-modal";
import { DemoFormModal } from "@/components/ui/demo-form-modal";

// Lazy load pages for better performance with error handling
const HomePage = lazy(() => import("@/pages/home").catch(() => ({ default: () => <div>Error loading Home page</div> })));
const ROICalculatorPage = lazy(() => import("@/pages/roi-calculator").catch(() => ({ default: () => <div>Error loading ROI Calculator</div> })));
const WhyCarifyPage = lazy(() => import("@/pages/why-carify").catch(() => ({ default: () => <div>Error loading Why Carify page</div> })));
const UseCasesPage = lazy(() => import("@/pages/use-cases").catch(() => ({ default: () => <div>Error loading Use Cases page</div> })));
const BookDemoPage = lazy(() => import("@/pages/book-demo").catch(() => ({ default: () => <div>Error loading Book Demo page</div> })));
const ScheduleDemoPage = lazy(() => import("@/pages/schedule-demo").catch(() => ({ default: () => <div>Error loading Schedule Demo page</div> })));
const RuixenDemoPage = lazy(() => import("@/pages/ruixen-demo").catch(() => ({ default: () => <div>Error loading Ruixen Demo page</div> })));
const NotFound = lazy(() => import("@/pages/not-found").catch(() => ({ default: () => <div>Page not found</div> })));

function ErrorFallback({ error, resetErrorBoundary }: { error: Error; resetErrorBoundary: () => void }) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-red-50 to-orange-50">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center space-y-6 p-8 bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl border border-white/50 max-w-md"
      >
        <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-orange-500 rounded-2xl mx-auto flex items-center justify-center">
          <span className="text-2xl text-white">⚠️</span>
        </div>
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Something went wrong</h2>
          <p className="text-gray-600 mb-4">We're sorry for the inconvenience. Please try refreshing the page.</p>
          <button
            onClick={resetErrorBoundary}
            className="px-6 py-3 bg-gradient-to-r from-red-600 to-orange-600 text-white rounded-xl hover:from-red-700 hover:to-orange-700 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Try Again
          </button>
        </div>
      </motion.div>
    </div>
  );
}

function PageTransition({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
    >
      {children}
    </motion.div>
  );
}

function Router() {
  const { isOpen, closeModal } = useDemoModal();
  
  return (
    <>
      <AnimatePresence mode="wait">
        <Switch>
          <Route path="/">
            <PageTransition>
              <HomePage />
            </PageTransition>
          </Route>
          <Route path="/roi-calculator">
            <PageTransition>
              <ROICalculatorPage />
            </PageTransition>
          </Route>
          <Route path="/why-carify">
            <PageTransition>
              <WhyCarifyPage />
            </PageTransition>
          </Route>
          <Route path="/use-cases">
            <PageTransition>
              <UseCasesPage />
            </PageTransition>
          </Route>
          <Route path="/book-demo">
            <PageTransition>
              <BookDemoPage />
            </PageTransition>
          </Route>
          <Route path="/schedule-demo">
            <PageTransition>
              <ScheduleDemoPage />
            </PageTransition>
          </Route>
          <Route path="/ruixen-demo">
            <PageTransition>
              <RuixenDemoPage />
            </PageTransition>
          </Route>
          <Route>
            <PageTransition>
              <NotFound />
            </PageTransition>
          </Route>
        </Switch>
      </AnimatePresence>
      <DemoFormModal open={isOpen} onOpenChange={closeModal} />
    </>
  );
}

function App() {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <DemoModalProvider>
        <QueryClientProvider client={queryClient}>
          <TooltipProvider>
            <div className="scrollbar-modern">
              <Suspense fallback={<LoadingPage />}>
                <Router />
              </Suspense>
              <Toaster />
            </div>
          </TooltipProvider>
        </QueryClientProvider>
      </DemoModalProvider>
    </ErrorBoundary>
  );
}

export default App;
