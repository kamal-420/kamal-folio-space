import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Users } from "lucide-react";

const academicSkills = [
  "Python, Java, C",
  "HTML, CSS, JavaScript",
  "Microsoft Excel, Word, PowerPoint",
  "Visual Studio, CapCut",
  "Data Structures & OOP",
  "Database Management (DBMS)",
];

const softSkills = [
  "Communication (oral & written)",
  "Teamwork & collaboration",
  "Leadership & initiative",
  "Problem-solving & critical thinking",
  "Time management & organization",
];

export const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold text-primary mb-12 text-center">
            Skills
          </h2>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Academic Skills */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-card rounded-xl p-8 shadow-soft border border-border"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-accent/10 rounded-lg">
                  <Code2 className="h-6 w-6 text-accent" />
                </div>
                <h3 className="text-2xl font-bold text-foreground">
                  Academic Skills
                </h3>
              </div>
              <ul className="space-y-3">
                {academicSkills.map((skill, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-2 text-foreground"
                  >
                    <span className="text-accent mt-1.5">•</span>
                    <span>{skill}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Soft Skills */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-card rounded-xl p-8 shadow-soft border border-border"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-accent/10 rounded-lg">
                  <Users className="h-6 w-6 text-accent" />
                </div>
                <h3 className="text-2xl font-bold text-foreground">
                  Soft Skills
                </h3>
              </div>
              <ul className="space-y-3">
                {softSkills.map((skill, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-2 text-foreground"
                  >
                    <span className="text-accent mt-1.5">•</span>
                    <span>{skill}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
