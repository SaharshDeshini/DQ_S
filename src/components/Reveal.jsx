import React, { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

const Reveal = ({ children }) => {
  const ref = useRef(null);

  const isInView = useInView(ref, { once: true });
  const mainControls = useAnimation();
  const slideControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
      slideControls.start("visible");
    }
  }, [isInView]);
  return (
    <motion.div
      ref={ref}
      variants={{
        hidden: { opacity: 0, y: 30, scale: 0.95, filter: "blur(10px)" },
        visible: { opacity: 1, y: 0, scale: 1, filter: "blur(0px)" },
      }}
      initial="hidden"
      animate={mainControls}
      transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
};

export default Reveal;
