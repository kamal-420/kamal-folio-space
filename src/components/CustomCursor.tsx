import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

export const CustomCursor = () => {
  const [isVisible, setIsVisible] = useState(false);
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 25, stiffness: 300 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      setIsVisible(true);
    };

    const hideCursor = () => setIsVisible(false);

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mouseleave", hideCursor);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mouseleave", hideCursor);
    };
  }, [cursorX, cursorY]);

  // Hide on touch devices
  if (typeof window !== "undefined" && "ontouchstart" in window) {
    return null;
  }

  return (
    <>
      {/* Main glow */}
      <motion.div
        className="fixed pointer-events-none z-[9999] mix-blend-screen"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          opacity: isVisible ? 1 : 0,
        }}
      >
        <div className="relative -translate-x-1/2 -translate-y-1/2">
          <div className="w-8 h-8 rounded-full bg-accent/80 blur-sm" />
        </div>
      </motion.div>

      {/* Trailing glow */}
      <motion.div
        className="fixed pointer-events-none z-[9998]"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          opacity: isVisible ? 0.5 : 0,
        }}
        transition={{ delay: 0.05 }}
      >
        <div className="relative -translate-x-1/2 -translate-y-1/2">
          <div className="w-24 h-24 rounded-full bg-gradient-radial from-accent/30 to-transparent blur-xl" />
        </div>
      </motion.div>

      {/* Outer ambient glow */}
      <motion.div
        className="fixed pointer-events-none z-[9997]"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          opacity: isVisible ? 0.3 : 0,
        }}
      >
        <div className="relative -translate-x-1/2 -translate-y-1/2">
          <div className="w-40 h-40 rounded-full bg-gradient-radial from-primary/20 to-transparent blur-2xl" />
        </div>
      </motion.div>
    </>
  );
};
