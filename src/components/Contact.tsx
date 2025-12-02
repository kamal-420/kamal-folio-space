import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, Phone, Github, Linkedin, MapPin } from "lucide-react";
import { Button } from "./ui/button";

const contactInfo = [
  {
    icon: Phone,
    label: "Phone",
    value: "9677643687",
    href: "tel:+919677643687",
  },
  {
    icon: Mail,
    label: "Email",
    value: "kamalesh.s.it.2023@snsct.org",
    href: "mailto:kamalesh.s.it.2023@snsct.org",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Kallakurichi, Tamil Nadu, India",
  },
];

const socialLinks = [
  {
    icon: Github,
    label: "GitHub",
    href: "https://github.com/kamal-420",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/kamalesh-s-56aa60330/",
  },
];

export const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold text-primary mb-12 text-center">
            Get In Touch
          </h2>

          <div className="max-w-3xl mx-auto">
            <div className="bg-card rounded-xl p-8 shadow-medium border border-border">
              <div className="space-y-6 mb-8">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={info.label}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                    className="flex items-center gap-4"
                  >
                    <div className="p-3 bg-accent/10 rounded-lg">
                      <info.icon className="h-5 w-5 text-accent" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm text-muted-foreground">
                        {info.label}
                      </p>
                      {info.href ? (
                        <a
                          href={info.href}
                          className="text-foreground font-medium hover:text-accent transition-colors"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-foreground font-medium">
                          {info.value}
                        </p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="border-t border-border pt-6">
                <p className="text-center text-muted-foreground mb-4">
                  Connect with me on
                </p>
                <div className="flex justify-center gap-4">
                  {socialLinks.map((social, index) => (
                    <motion.div
                      key={social.label}
                      initial={{ opacity: 0, y: 20 }}
                      animate={isInView ? { opacity: 1, y: 0 } : {}}
                      transition={{
                        duration: 0.6,
                        delay: 0.5 + index * 0.1,
                      }}
                    >
                      <Button
                        asChild
                        variant="outline"
                        size="lg"
                        className="hover:bg-accent/10 hover:border-accent hover:text-accent transition-colors"
                      >
                        <a
                          href={social.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2"
                        >
                          <social.icon className="h-5 w-5" />
                          {social.label}
                        </a>
                      </Button>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
