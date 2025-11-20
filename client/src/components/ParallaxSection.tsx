import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

// Add error boundary for this component
function ParallaxSectionErrorBoundary({ children }: { children: React.ReactNode }) {
  try {
    return <>{children}</>;
  } catch (error) {
    console.error('ParallaxSection error:', error);
    return <div className="opacity-50">{children}</div>;
  }
}

interface ParallaxSectionProps {
  children: React.ReactNode;
  className?: string;
  speed?: number;
  direction?: "up" | "down";
}

export default function ParallaxSection({ 
  children, 
  className = "", 
  speed = 0.5,
  direction = "up"
}: ParallaxSectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  
  try {
    const { scrollYProgress } = useScroll({
      target: ref,
      offset: ["start end", "end start"]
    });

    const y = useTransform(
      scrollYProgress,
      [0, 1],
      direction === "up" ? [50 * speed, -50 * speed] : [-50 * speed, 50 * speed]
    );

    return (
      <ParallaxSectionErrorBoundary>
        <motion.div
          ref={ref}
          style={{ y }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className={className}
        >
          {children}
        </motion.div>
      </ParallaxSectionErrorBoundary>
    );
  } catch (error) {
    console.error('ParallaxSection render error:', error);
    return (
      <div className={className}>
        {children}
      </div>
    );
  }
}