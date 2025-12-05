import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5 },
  },
};

export const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-20 bg-muted/30">
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
            className="text-4xl font-bold text-accent mb-8 text-center drop-shadow-gold"
          >
            About Me
          </motion.h2>
          <motion.div 
            variants={itemVariants}
            className="relative backdrop-blur-glass bg-glass-bg rounded-2xl p-8 shadow-soft border border-accent/20 hover:border-accent/40 hover:shadow-glow transition-all duration-300"
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-gold rounded-t-2xl"></div>
            <p className="text-lg text-foreground leading-relaxed">
              I am Kamalesh S, a third-year B.Tech Information Technology
              student at SNS College of Technology. With a strong foundation in
              computer science principles and emerging technologies, I am
              passionate about exploring areas such as software development,
              data science, and cloud computing. I am eager to apply my academic
              knowledge in practical settings, contribute to innovative
              projects, and continuously enhance my skills in the ever-evolving
              tech landscape.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
