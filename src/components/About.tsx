import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="text-4xl font-bold text-primary mb-8 text-center">
            About Me
          </h2>
          <div className="bg-card rounded-xl p-8 shadow-soft">
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
          </div>
        </motion.div>
      </div>
    </section>
  );
};
