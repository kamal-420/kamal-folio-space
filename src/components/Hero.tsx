import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { ArrowDown, Sparkles, Download } from "lucide-react";
import profilePhoto from "@/assets/profile-photo.jpg";

export const Hero = () => {
  const scrollToProjects = () => {
    const element = document.querySelector("#projects");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Royal Gradient Background */}
      <div className="absolute inset-0 bg-gradient-royal"></div>
      
      {/* Floating 3D Royal Shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{ 
            y: [0, -20, 0],
            rotate: [0, 5, 0]
          }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-20 left-10 w-20 h-20 bg-accent/10 rounded-full blur-xl"
        />
        <motion.div
          animate={{ 
            y: [0, 20, 0],
            rotate: [0, -5, 0]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-40 right-20 w-32 h-32 bg-primary/20 rounded-full blur-2xl"
        />
        <motion.div
          animate={{ 
            y: [0, -15, 0],
            x: [0, 10, 0]
          }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/3 right-10 w-24 h-24 bg-accent/15 rounded-lg blur-xl rotate-45"
        />
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Left Side - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-accent mb-4 leading-tight drop-shadow-gold">
                Kamalesh S
              </h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-xl sm:text-2xl text-foreground/90 mb-8"
            >
              Third-year B.Tech Information Technology student | Frontend & Cloud
              Enthusiast
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <Button
                size="lg"
                onClick={scrollToProjects}
                className="bg-gradient-gold hover:shadow-gold text-accent-foreground font-semibold px-8 py-6 text-lg group border-2 border-accent/30"
              >
                <Sparkles className="mr-2 h-5 w-5" />
                View My Projects
                <ArrowDown className="ml-2 h-5 w-5 group-hover:translate-y-1 transition-transform" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={scrollToContact}
                className="border-2 border-accent text-accent hover:bg-accent/10 hover:shadow-glow font-semibold px-8 py-6 text-lg"
              >
                Contact Me
              </Button>
              <Button
                size="lg"
                variant="outline"
                asChild
                className="border-2 border-accent text-accent hover:bg-accent/10 hover:shadow-glow font-semibold px-8 py-6 text-lg"
              >
                <a href="/resume/kamalesh-resume.pdf" download="Kamalesh_S_Resume.pdf">
                  <Download className="mr-2 h-5 w-5" />
                  Download Resume
                </a>
              </Button>
            </motion.div>
          </motion.div>

          {/* Right Side - Profile Photo */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Golden Glow Ring */}
              <motion.div
                animate={{ 
                  scale: [1, 1.05, 1],
                  opacity: [0.5, 0.8, 0.5]
                }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute inset-0 rounded-full bg-gradient-gold blur-2xl opacity-50"
              />
              
              {/* Photo Frame */}
              <div className="relative w-72 h-72 sm:w-80 sm:h-80 rounded-full border-4 border-accent shadow-gold overflow-hidden backdrop-blur-glass bg-glass-bg p-2">
                <div className="w-full h-full rounded-full border-2 border-accent/50 overflow-hidden">
                  <img 
                    src={profilePhoto} 
                    alt="Kamalesh S" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Floating Sparkles */}
              <motion.div
                animate={{ 
                  y: [0, -10, 0],
                  rotate: [0, 180, 360]
                }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -top-4 -right-4"
              >
                <Sparkles className="h-8 w-8 text-accent" />
              </motion.div>
              <motion.div
                animate={{ 
                  y: [0, 10, 0],
                  rotate: [360, 180, 0]
                }}
                transition={{ duration: 5, repeat: Infinity }}
                className="absolute -bottom-4 -left-4"
              >
                <Sparkles className="h-6 w-6 text-accent" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="animate-bounce">
          <ArrowDown className="h-6 w-6 text-accent" />
        </div>
      </motion.div>
    </section>
  );
};
