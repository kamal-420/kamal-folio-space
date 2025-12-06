import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ExternalLink, Github, Sparkles, ChevronRight, Code2, Layout, Smartphone } from "lucide-react";
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

const featureVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 0.3, delay: i * 0.1 },
  }),
};

export const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [isHovered, setIsHovered] = useState(false);

  const technologies = [
    "HTML5",
    "CSS3",
    "JavaScript",
    "Bootstrap",
    "Git & GitHub",
    "React",
    "VS Code",
  ];

  const features = [
    { icon: Layout, text: "Responsive grid layouts with Flexbox & CSS Grid" },
    { icon: Smartphone, text: "Mobile-first design approach" },
    { icon: Code2, text: "Clean, semantic HTML structure" },
  ];

  const highlights = [
    "Cross-browser compatibility",
    "Optimized performance",
    "Accessible UI components",
    "Modern CSS animations",
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
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              className="relative backdrop-blur-glass bg-glass-bg rounded-2xl shadow-soft border-2 border-accent/30 hover:border-accent/50 hover:shadow-gold transition-all duration-500 overflow-hidden group"
            >
              {/* Gradient overlay on hover */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: isHovered ? 0.1 : 0 }}
                className="absolute inset-0 bg-gradient-gold pointer-events-none"
              />

              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-gold"></div>
              
              <div className="p-8">
                <div className="flex items-start gap-4 mb-6">
                  <motion.div 
                    initial={{ rotate: -20, scale: 0.7 }}
                    animate={isInView ? { rotate: isHovered ? 10 : 0, scale: isHovered ? 1.1 : 1 } : {}}
                    transition={{ duration: 0.3, type: "spring" }}
                    className="p-3 bg-gradient-gold rounded-lg shadow-gold"
                  >
                    <Sparkles className="h-8 w-8 text-accent-foreground" />
                  </motion.div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-foreground mb-2 group-hover:text-accent transition-colors duration-300">
                      Responsive Web Development Using Frontend Technologies
                    </h3>
                    <motion.p
                      initial={{ opacity: 0.6 }}
                      animate={{ opacity: isHovered ? 1 : 0.6 }}
                      className="text-sm text-muted-foreground"
                    >
                      Personal Project • 2024
                    </motion.p>
                  </div>
                </div>

                <p className="text-foreground/80 leading-relaxed mb-6">
                  Developed a responsive, user-friendly website using HTML, CSS,
                  JavaScript, and Bootstrap, ensuring clean UI, cross-browser
                  compatibility, and mobile optimization.
                </p>

                {/* Key Features - Revealed on hover */}
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ 
                    height: isHovered ? "auto" : 0, 
                    opacity: isHovered ? 1 : 0 
                  }}
                  transition={{ duration: 0.4 }}
                  className="overflow-hidden"
                >
                  <div className="mb-6 pb-6 border-b border-accent/20">
                    <h4 className="text-accent font-semibold mb-4 flex items-center gap-2">
                      <span className="h-1 w-8 bg-gradient-gold rounded"></span>
                      Key Features:
                    </h4>
                    <div className="grid gap-3">
                      {features.map((feature, index) => (
                        <motion.div
                          key={index}
                          custom={index}
                          variants={featureVariants}
                          initial="hidden"
                          animate={isHovered ? "visible" : "hidden"}
                          className="flex items-center gap-3 text-foreground/80"
                        >
                          <div className="p-2 bg-accent/10 rounded-lg">
                            <feature.icon className="h-4 w-4 text-accent" />
                          </div>
                          <span>{feature.text}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Highlights */}
                  <div className="mb-6">
                    <h4 className="text-accent font-semibold mb-3 flex items-center gap-2">
                      <span className="h-1 w-8 bg-gradient-gold rounded"></span>
                      Highlights:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {highlights.map((highlight, index) => (
                        <motion.span
                          key={highlight}
                          initial={{ opacity: 0, y: 10 }}
                          animate={isHovered ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                          transition={{ delay: index * 0.05 + 0.2 }}
                          className="inline-flex items-center gap-1 px-3 py-1 bg-primary/20 text-primary-foreground dark:text-foreground border border-primary/30 rounded-full text-sm"
                        >
                          <ChevronRight className="h-3 w-3" />
                          {highlight}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </motion.div>

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

                <div className="flex items-center gap-4">
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
                  
                  {/* Hover hint */}
                  <motion.span
                    initial={{ opacity: 0.7 }}
                    animate={{ opacity: isHovered ? 0 : 0.7 }}
                    className="text-sm text-muted-foreground italic"
                  >
                    Hover to see more details
                  </motion.span>
                </div>
              </div>

              {/* Bottom accent line that expands on hover */}
              <motion.div
                initial={{ scaleX: 0.3 }}
                animate={{ scaleX: isHovered ? 1 : 0.3 }}
                transition={{ duration: 0.4 }}
                className="h-1 bg-gradient-gold origin-left"
              />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
