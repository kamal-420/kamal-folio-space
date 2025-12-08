import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef, ReactNode } from "react";

interface SectionWrapperProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "left" | "right";
}

export const SectionWrapper = ({ 
  children, 
  className = "", 
  delay = 0,
  direction = "up" 
}: SectionWrapperProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  // Parallax effect based on scroll
  const parallaxY = useTransform(scrollYProgress, [0, 1], [30, -30]);

  // Direction-based initial values
  const getInitialPosition = () => {
    switch (direction) {
      case "left":
        return { opacity: 0, x: -80, y: 0 };
      case "right":
        return { opacity: 0, x: 80, y: 0 };
      default:
        return { opacity: 0, x: 0, y: 60 };
    }
  };

  const getAnimatePosition = () => {
    return { opacity: 1, x: 0, y: 0 };
  };

  return (
    <motion.div
      ref={ref}
      style={{ y: parallaxY }}
      className={className}
    >
      <motion.div
        initial={getInitialPosition()}
        animate={isInView ? getAnimatePosition() : getInitialPosition()}
        transition={{ 
          duration: 0.8, 
          delay,
          ease: [0.25, 0.4, 0.25, 1]
        }}
      >
        <motion.div
          initial={{ scale: 0.95, opacity: 0.8 }}
          animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0.95, opacity: 0.8 }}
          transition={{ duration: 0.6, delay: delay + 0.1 }}
        >
          {children}
        </motion.div>
      </motion.div>
    </motion.div>
  );
};
