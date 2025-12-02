import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github, Sparkles } from "lucide-react";
import { Button } from "./ui/button";

export const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold text-accent mb-12 text-center drop-shadow-gold">
            Projects
          </h2>

          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative backdrop-blur-glass bg-glass-bg rounded-2xl p-8 shadow-soft border-2 border-accent/30 hover:border-accent/50 hover:shadow-gold transition-all duration-300"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-gold"></div>
              <div className="flex items-start gap-4 mb-6">
                <div className="p-3 bg-gradient-gold rounded-lg shadow-gold">
                  <Sparkles className="h-8 w-8 text-accent-foreground" />
                </div>
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
                  {[
                    "HTML5",
                    "CSS3",
                    "JavaScript",
                    "Bootstrap",
                    "Git & GitHub",
                    "React",
                    "VS Code",
                  ].map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-accent/20 text-accent border border-accent/30 rounded-full text-sm font-medium hover:bg-accent/30 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

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
          </div>
        </motion.div>
      </div>
    </section>
  );
};
