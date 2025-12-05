import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { ArrowDown, Sparkles, Download } from "lucide-react";
import profilePhoto from "@/assets/profile-photo.jpg";
import { useState, useEffect } from "react";

export const Hero = () => {
  const tagline = "Third-year B.Tech Information Technology student | Frontend & Cloud Enthusiast";
  const [displayedText, setDisplayedText] = useState("");
  const [isTypingComplete, setIsTypingComplete] = useState(false);

  useEffect(() => {
    let index = 0;
    const typingDelay = 40;
    
    const typeNextChar = () => {
      if (index < tagline.length) {
        setDisplayedText(tagline.slice(0, index + 1));
        index++;
        setTimeout(typeNextChar, typingDelay);
      } else {
        setIsTypingComplete(true);
      }
    };

    const startDelay = setTimeout(() => {
      typeNextChar();
    }, 800);

    return () => clearTimeout(startDelay);
  }, []);
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

      {/* Particle Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ 
              x: `${Math.random() * 100}%`,
              y: `${Math.random() * 100}%`,
              opacity: 0
            }}
            animate={{ 
              y: [`${Math.random() * 100}%`, `${Math.random() * 100}%`, `${Math.random() * 100}%`],
              x: [`${Math.random() * 100}%`, `${Math.random() * 100}%`, `${Math.random() * 100}%`],
              opacity: [0, 0.6, 0]
            }}
            transition={{ 
              duration: 8 + Math.random() * 8,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: "easeInOut"
            }}
            className={`absolute rounded-full ${
              i % 3 === 0 
                ? 'w-1 h-1 bg-accent/60' 
                : i % 3 === 1 
                  ? 'w-2 h-2 bg-accent/40' 
                  : 'w-1.5 h-1.5 bg-primary/50'
            }`}
          />
        ))}
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-start max-w-6xl mx-auto">
          {/* Profile Photo - Shows first on mobile */}
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex justify-center lg:hidden"
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
              <div className="relative w-36 h-36 sm:w-44 sm:h-44 rounded-full border-4 border-accent shadow-gold overflow-hidden backdrop-blur-glass bg-glass-bg p-2">
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
                <Sparkles className="h-6 w-6 text-accent" />
              </motion.div>
            </div>
          </motion.div>
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
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.4 }}
              className="text-xl sm:text-2xl text-foreground/90 mb-8 min-h-[3.5rem]"
            >
              {displayedText}
              {!isTypingComplete && (
                <motion.span
                  animate={{ opacity: [1, 0] }}
                  transition={{ duration: 0.5, repeat: Infinity }}
                  className="inline-block w-0.5 h-6 bg-accent ml-1 align-middle"
                />
              )}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-col sm:flex-row flex-wrap gap-3 justify-center lg:justify-start"
            >
              <Button
                size="lg"
                onClick={scrollToProjects}
                className="bg-gradient-gold hover:shadow-gold text-accent-foreground font-semibold px-8 py-6 text-lg group border-2 border-accent/30 w-full sm:w-52 transition-all duration-300 hover:scale-105 hover:-translate-y-1"
              >
                <Sparkles className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform duration-300" />
                View My Projects
                <ArrowDown className="ml-2 h-5 w-5 group-hover:translate-y-1 transition-transform" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={scrollToContact}
                className="border-2 border-accent text-accent hover:bg-accent/10 hover:shadow-glow font-semibold px-8 py-6 text-lg w-full sm:w-52 transition-all duration-300 hover:scale-105 hover:-translate-y-1"
              >
                Contact Me
              </Button>
              <Button
                size="lg"
                variant="outline"
                asChild
                className="border-2 border-accent text-accent hover:bg-accent/10 hover:shadow-glow font-semibold px-8 py-6 text-lg w-full sm:w-52 transition-all duration-300 hover:scale-105 hover:-translate-y-1 group"
              >
                <a href="/resume/kamalesh-resume.pdf" download="Kamalesh_S_Resume.pdf">
                  <Download className="mr-2 h-5 w-5 group-hover:animate-bounce transition-transform duration-300" />
                  Download Resume
                </a>
              </Button>
            </motion.div>
          </motion.div>

          {/* Right Side - Profile Photo (Desktop only) */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="hidden lg:flex justify-center lg:justify-end"
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
