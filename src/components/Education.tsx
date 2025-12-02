import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, MapPin } from "lucide-react";

export const Education = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="education" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="text-4xl font-bold text-accent mb-12 text-center drop-shadow-gold">
            Education
          </h2>

          <div className="relative backdrop-blur-glass bg-glass-bg rounded-2xl p-8 shadow-soft border border-accent/20 hover:border-accent/40 hover:shadow-glow transition-all duration-300">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-gold rounded-t-2xl"></div>
            <div className="flex items-start gap-4">
              <div className="p-3 bg-gradient-gold rounded-lg shadow-gold">
                <GraduationCap className="h-8 w-8 text-accent-foreground" />
              </div>
              <div className="flex-1">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                  <h3 className="text-2xl font-bold text-foreground">
                    B.Tech in Information Technology
                  </h3>
                  <span className="text-lg font-semibold text-accent drop-shadow-glow">
                    CGPA: 7.0
                  </span>
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
          </div>
        </motion.div>
      </div>
    </section>
  );
};
