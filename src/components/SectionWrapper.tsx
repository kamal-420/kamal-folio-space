import { motion, useInView } from "framer-motion";
import { useRef, ReactNode } from "react";

interface SectionWrapperProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export const SectionWrapper = ({ children, className = "", delay = 0 }: SectionWrapperProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
      transition={{ 
        duration: 0.8, 
        delay,
        ease: [0.25, 0.4, 0.25, 1]
      }}
      className={className}
    >
      <motion.div
        initial={{ scale: 0.95 }}
        animate={isInView ? { scale: 1 } : { scale: 0.95 }}
        transition={{ duration: 0.6, delay: delay + 0.1 }}
      >
        {children}
      </motion.div>
    </motion.div>
  );
};
