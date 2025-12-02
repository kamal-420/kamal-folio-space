import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code, Lightbulb, Sparkles } from "lucide-react";

const academicSkills = [
  {
    title: "Programming",
    skills: "Python, Java, C, HTML, CSS, JavaScript",
  },
  {
    title: "Web",
    skills: "HTML, CSS, JavaScript",
  },
  {
    title: "Tools & Platforms",
    skills: "Microsoft Excel, Word, PowerPoint, Visual Studio, CapCut (Video Editing)",
  },
  {
    title: "Core Concepts",
    skills: "Data Structures, OOP concepts, DBMS",
  },
];

const softSkills = [
  "Communication skills (oral & written)",
  "Teamwork & collaboration",
  "Leadership & initiative",
  "Problem-solving & critical thinking",
  "Time management & organization",
];

export const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold text-accent mb-12 text-center drop-shadow-gold">
            Skills
          </h2>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Academic Skills */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative backdrop-blur-glass bg-glass-bg rounded-2xl p-8 shadow-soft border border-accent/20 hover:border-accent/40 hover:shadow-glow transition-all duration-300"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-gold rounded-t-2xl"></div>
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-gradient-gold rounded-lg shadow-gold">
                  <Code className="h-6 w-6 text-accent-foreground" />
                </div>
                <h3 className="text-2xl font-bold text-foreground">
                  Academic Skills
                </h3>
              </div>

              <div className="space-y-6">
                {academicSkills.map((category, index) => (
                  <motion.div
                    key={category.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                  >
                    <h4 className="font-semibold text-accent mb-2 flex items-center gap-2">
                      <Sparkles className="h-4 w-4" />
                      {category.title}
                    </h4>
                    <p className="text-foreground/80 leading-relaxed">
                      {category.skills}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Soft Skills */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="relative backdrop-blur-glass bg-glass-bg rounded-2xl p-8 shadow-soft border border-accent/20 hover:border-accent/40 hover:shadow-glow transition-all duration-300"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-gold rounded-t-2xl"></div>
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-gradient-gold rounded-lg shadow-gold">
                  <Lightbulb className="h-6 w-6 text-accent-foreground" />
                </div>
                <h3 className="text-2xl font-bold text-foreground">
                  Soft Skills
                </h3>
              </div>

              <ul className="space-y-4">
                {softSkills.map((skill, index) => (
                  <motion.li
                    key={skill}
                    initial={{ opacity: 0, x: 20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                    className="flex items-center gap-3 text-foreground/80"
                  >
                    <div className="h-2 w-2 rounded-full bg-gradient-gold shadow-gold" />
                    {skill}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
