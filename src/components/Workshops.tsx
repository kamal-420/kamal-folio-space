import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Award, Glasses, Cloud } from "lucide-react";

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

export const Workshops = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="workshops" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold text-primary mb-12 text-center">
            Technical Workshops & Training
          </h2>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {workshops.map((workshop, index) => (
              <motion.div
                key={workshop.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                className="bg-card rounded-xl p-8 shadow-soft border border-border hover:shadow-medium transition-shadow"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="p-3 bg-accent/10 rounded-lg">
                    <workshop.icon className="h-6 w-6 text-accent" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-foreground mb-3">
                      {workshop.title}
                    </h3>
                  </div>
                </div>
                <p className="text-foreground leading-relaxed">
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
