import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code, Lightbulb, Sparkles } from "lucide-react";

const academicSkills = [
  {
    title: "Programming",
    skills: [
      { name: "Python", level: 85 },
      { name: "Java", level: 80 },
      { name: "C", level: 75 },
      { name: "JavaScript", level: 70 },
    ],
  },
  {
    title: "Web",
    skills: [
      { name: "HTML", level: 90 },
      { name: "CSS", level: 85 },
      { name: "JavaScript", level: 70 },
    ],
  },
  {
    title: "Tools & Platforms",
    skills: [
      { name: "Microsoft Excel", level: 85 },
      { name: "Visual Studio", level: 80 },
      { name: "CapCut", level: 75 },
    ],
  },
  {
    title: "Core Concepts",
    skills: [
      { name: "Data Structures", level: 80 },
      { name: "OOP", level: 85 },
      { name: "DBMS", level: 75 },
    ],
  },
];

const softSkills = [
  { name: "Communication", level: 90 },
  { name: "Teamwork", level: 95 },
  { name: "Leadership", level: 85 },
  { name: "Problem-solving", level: 88 },
  { name: "Time Management", level: 82 },
];

interface SkillBarProps {
  name: string;
  level: number;
  delay: number;
  isInView: boolean;
}

const SkillBar = ({ name, level, delay, isInView }: SkillBarProps) => {
  return (
    <div className="mb-3">
      <div className="flex justify-between mb-1">
        <span className="text-sm font-medium text-foreground/90">{name}</span>
        <motion.span
          className="text-sm font-medium text-accent"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: delay + 0.5 }}
        >
          {level}%
        </motion.span>
      </div>
      <div className="h-2 bg-muted rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-gradient-gold rounded-full relative"
          initial={{ width: 0 }}
          animate={isInView ? { width: `${level}%` } : { width: 0 }}
          transition={{ duration: 1, delay, ease: [0.25, 0.4, 0.25, 1] }}
        >
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
            initial={{ x: "-100%" }}
            animate={isInView ? { x: "200%" } : { x: "-100%" }}
            transition={{ duration: 1.5, delay: delay + 0.5, ease: "easeInOut" }}
          />
        </motion.div>
      </div>
    </div>
  );
};

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
                {academicSkills.map((category, categoryIndex) => (
                  <motion.div
                    key={category.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.3 + categoryIndex * 0.1 }}
                  >
                    <h4 className="font-semibold text-accent mb-3 flex items-center gap-2">
                      <Sparkles className="h-4 w-4" />
                      {category.title}
                    </h4>
                    <div className="pl-2">
                      {category.skills.map((skill, skillIndex) => (
                        <SkillBar
                          key={skill.name}
                          name={skill.name}
                          level={skill.level}
                          delay={0.4 + categoryIndex * 0.15 + skillIndex * 0.1}
                          isInView={isInView}
                        />
                      ))}
                    </div>
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

              <div className="space-y-4">
                {softSkills.map((skill, index) => (
                  <SkillBar
                    key={skill.name}
                    name={skill.name}
                    level={skill.level}
                    delay={0.5 + index * 0.15}
                    isInView={isInView}
                  />
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
