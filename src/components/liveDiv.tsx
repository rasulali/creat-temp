import { motion, useAnimation, useInView } from "framer-motion";
import { useRef, useEffect } from "react";

interface LiveDivProps {
  children: React.ReactNode;
  animate: {
    dir: "x" | "y" | "z";
    from: number;
    to: number;
    delay?: number;
  };
}

const LiveDiv: React.FC<LiveDivProps> = ({ children, animate }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  const variantX = {
    hidden: { opacity: 0, x: animate.from },
    visible: {
      opacity: 1,
      x: animate.to,
      transition: { duration: 0.5, delay: animate.delay },
    },
  };
  const variantY = {
    hidden: { opacity: 0, y: animate.from },
    visible: {
      opacity: 1,
      y: animate.to,
      transition: { duration: 0.5, delay: animate.delay },
    },
  };
  const variantZ = {
    hidden: { opacity: 0, scale: animate.from, transformOrigin: "center" },
    visible: {
      opacity: 1,
      scale: animate.to,
      transition: { duration: 0.5, delay: animate.delay },
      transformOrigin: "center",
    },
  };
  const divControls = useAnimation();

  useEffect(() => {
    if (inView) {
      divControls.start("visible");
    }
  }, [inView]);
  return (
    <div className="w-full h-full">
      <motion.div
        className="w-full h-full"
        ref={ref}
        variants={(() => {
          switch (animate.dir) {
            case "x":
              return variantX;
            case "y":
              return variantY;
            case "z":
              return variantZ;
            default:
              return {};
          }
        })()}
        initial="hidden"
        animate={divControls}
      >
        {children}
      </motion.div>
    </div>
  );
};
export default LiveDiv;
