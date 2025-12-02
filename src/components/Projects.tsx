import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Code2 } from "lucide-react";
import { Button } from "./ui/button";

export const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold text-primary mb-12 text-center">
            Projects
          </h2>

          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-card rounded-xl p-8 shadow-medium border border-border hover:shadow-lg transition-shadow"
            >
              <div className="flex items-start gap-4 mb-6">
                <div className="p-3 bg-accent/10 rounded-lg">
                  <Code2 className="h-8 w-8 text-accent" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-foreground mb-2">
                    Responsive Web Development Using Frontend Technologies
                  </h3>
                </div>
              </div>

              <p className="text-foreground leading-relaxed mb-6">
                Developed a responsive, user-friendly website using HTML, CSS,
                JavaScript, and Bootstrap, ensuring clean UI, cross-browser
                compatibility, and mobile optimization.
              </p>

              <div className="mb-6">
                <h4 className="text-sm font-semibold text-muted-foreground mb-3">
                  Technologies Used:
                </h4>
                <div className="flex flex-wrap gap-2">
                  {[
                    "HTML5",
                    "CSS3",
                    "JavaScript",
                    "Bootstrap",
                    "React",
                    "Git & GitHub",
                    "VS Code",
                  ].map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-accent/10 text-accent rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <Button
                asChild
                className="bg-accent hover:bg-accent/90 text-accent-foreground"
              >
                <a
                  href="https://github.com/kamal-420"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2"
                >
                  View on GitHub
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
