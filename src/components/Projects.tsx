import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github, Sparkles } from "lucide-react";
import { Button } from "./ui/button";

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
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6 },
  },
};

const techVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: (i: number) => ({
    opacity: 1,
    scale: 1,
    transition: { duration: 0.3, delay: 0.4 + i * 0.05 },
  }),
};

export const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const technologies = [
    "HTML5",
    "CSS3",
    "JavaScript",
    "Bootstrap",
    "Git & GitHub",
    "React",
    "VS Code",
  ];

  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.h2 
            variants={itemVariants}
            className="text-4xl font-bold text-accent mb-12 text-center drop-shadow-gold"
          >
            Projects
          </motion.h2>

          <div className="max-w-4xl mx-auto">
            <motion.div
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="relative backdrop-blur-glass bg-glass-bg rounded-2xl p-8 shadow-soft border-2 border-accent/30 hover:border-accent/50 hover:shadow-gold transition-all duration-300"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-gold"></div>
              <div className="flex items-start gap-4 mb-6">
                <motion.div 
                  initial={{ rotate: -20, scale: 0.7 }}
                  animate={isInView ? { rotate: 0, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.3, type: "spring" }}
                  className="p-3 bg-gradient-gold rounded-lg shadow-gold"
                >
                  <Sparkles className="h-8 w-8 text-accent-foreground" />
                </motion.div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-foreground mb-2">
                    Responsive Web Development Using Frontend Technologies
                  </h3>
                </div>
              </div>

              <p className="text-foreground/80 leading-relaxed mb-6">
                Developed a responsive, user-friendly website using HTML, CSS,
                JavaScript, and Bootstrap, ensuring clean UI, cross-browser
                compatibility, and mobile optimization.
              </p>

              <div className="mb-6">
                <h4 className="text-accent font-semibold mb-3 flex items-center gap-2">
                  <span className="h-1 w-8 bg-gradient-gold rounded"></span>
                  Technologies Used:
                </h4>
                <div className="flex flex-wrap gap-2">
                  {technologies.map((tech, index) => (
                    <motion.span
                      key={tech}
                      custom={index}
                      variants={techVariants}
                      initial="hidden"
                      animate={isInView ? "visible" : "hidden"}
                      whileHover={{ scale: 1.1, y: -2 }}
                      className="px-3 py-1 bg-accent/20 text-accent border border-accent/30 rounded-full text-sm font-medium hover:bg-accent/30 transition-colors cursor-default"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button
                  asChild
                  className="bg-gradient-gold hover:shadow-gold text-accent-foreground font-semibold border-2 border-accent/30"
                >
                  <a
                    href="https://github.com/kamal-420"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2"
                  >
                    <Github className="h-5 w-5" />
                    View My GitHub
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
