import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Glasses, Cloud, Sparkles } from "lucide-react";

const workshops = [
  {
    title: "Workshop on AR/VR",
    description:
      "Gained hands-on experience in AR/VR fundamentals, 3D interaction, and immersive content creation with real-world applications.",
    icon: Glasses,
  },
  {
    title: "Sense-to-Cloud (IoT with Raspberry Pi & AWS)",
    description:
      "Built end-to-end IoT solutions using Raspberry Pi and AWS, covering sensor integration, cloud connectivity, and real-time monitoring.",
    icon: Cloud,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6 },
  },
};

export const Workshops = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="workshops" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.h2 
            variants={cardVariants}
            className="text-4xl font-bold text-accent mb-12 text-center drop-shadow-gold"
          >
            Technical Workshops & Training
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {workshops.map((workshop, index) => (
              <motion.div
                key={workshop.title}
                variants={cardVariants}
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="relative backdrop-blur-glass bg-glass-bg rounded-2xl p-8 shadow-soft border border-accent/20 hover:border-accent/40 hover:shadow-glow transition-all duration-300"
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-gold rounded-t-2xl"></div>
                <div className="flex items-start gap-4 mb-4">
                  <motion.div 
                    initial={{ rotate: -15, scale: 0.8 }}
                    animate={isInView ? { rotate: 0, scale: 1 } : {}}
                    transition={{ duration: 0.5, delay: 0.3 + index * 0.15 }}
                    className="p-3 bg-gradient-gold rounded-lg shadow-gold"
                  >
                    <workshop.icon className="h-6 w-6 text-accent-foreground" />
                  </motion.div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-foreground mb-3 flex items-center gap-2">
                      <Sparkles className="h-5 w-5 text-accent" />
                      {workshop.title}
                    </h3>
                  </div>
                </div>
                <p className="text-foreground/80 leading-relaxed">
                  {workshop.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
