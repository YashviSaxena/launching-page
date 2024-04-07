import { motion } from "framer-motion";

const RadialBlur = ({ width, height, color, top, left, blur }) => {
  return (
    <motion.div
      style={{
        width: `${width}px`,
        height: `${height}px`,
        backgroundColor: color,
        position: "absolute",
        top,
        left,
        filter: `blur(${blur}px)`,
        zIndex: -1,
      }}
      whileHover={{ scale: 1.2 }}
      drag
      dragConstraints={{
        left: 0,
        top: 0,
        right: window.innerWidth,
        bottom: window.innerHeight,
      }}
    />
  );
};
export default RadialBlur