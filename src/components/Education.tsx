import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, MapPin } from "lucide-react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6 },
  },
};

export const Education = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="education" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-3xl mx-auto"
        >
          <motion.h2 
            variants={itemVariants}
            className="text-4xl font-bold text-accent mb-12 text-center drop-shadow-gold"
          >
            Education
          </motion.h2>

          <motion.div 
            variants={itemVariants}
            className="relative backdrop-blur-glass bg-glass-bg rounded-2xl p-8 shadow-soft border border-accent/20 hover:border-accent/40 hover:shadow-glow transition-all duration-300"
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-gold rounded-t-2xl"></div>
            <div className="flex items-start gap-4">
              <motion.div 
                initial={{ rotate: -10, scale: 0.8 }}
                animate={isInView ? { rotate: 0, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="p-3 bg-gradient-gold rounded-lg shadow-gold"
              >
                <GraduationCap className="h-8 w-8 text-accent-foreground" />
              </motion.div>
              <div className="flex-1">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                  <h3 className="text-2xl font-bold text-foreground">
                    B.Tech in Information Technology
                  </h3>
                  <motion.span 
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : {}}
                    transition={{ duration: 0.4, delay: 0.5, type: "spring" }}
                    className="text-lg font-semibold text-accent drop-shadow-glow"
                  >
                    CGPA: 7.0
                  </motion.span>
                </div>
                <p className="text-lg text-foreground/80 font-medium mb-2">
                  SNS College of Technology
                </p>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <MapPin className="h-4 w-4 text-accent" />
                  <span>Coimbatore, Tamil Nadu, India</span>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
