import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";

const AnimatedTextWord = ({ text }) => {
  const words = text.split(" ");
  const containerRef = useRef(null);

  // Variants for Container of words.
  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.04 * i },
    }),
  };

  // Variants for each word.
  const child = {
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      x: 20,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      containerRef.current && containerRef.current.setProps({ animate: "visible" });
    }, 500); // Adjust the delay to match your animation duration

    return () => clearTimeout(timeout);
  }, []);

  return (
    <motion.div
      ref={containerRef}
      style={{
        overflow: "hidden",
        textAlign: "center",
        color: "white",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontSize: "2rem",
      }}
      variants={container}
      initial="hidden"
      animate="visible"
    >
      {words.map((word, index) => (
        <motion.span
          variants={child}
          style={{ marginRight: "5px" }}
          key={index}
        >
          {word}
        </motion.span>
      ))}
    </motion.div>
  );
};

export default AnimatedTextWord;
