import { motion, useAnimation, useInView } from "framer-motion";
import { useRef, useEffect, ReactNode } from "react";
interface HeadingProps {
  text: string | ReactNode;
  variant: string;
  animate: {
    dir: "x" | "y";
    from: number;
    to: number;
    delay?: number;
  };
}
const Heading: React.FC<HeadingProps> = ({ text, animate, variant }) => {
  const textRef = useRef(null);
  const textInView = useInView(textRef, { once: true });

  const textVariantX = {
    hidden: { opacity: 0, x: animate.from },
    visible: {
      opacity: 1,
      x: animate.to,
      transition: { duration: 0.5, delay: animate.delay },
    },
  };
  const textVariantY = {
    hidden: { opacity: 0, y: animate.from },
    visible: {
      opacity: 1,
      y: animate.to,
      transition: { duration: 0.5, delay: animate.delay },
    },
  };

  const textControls = useAnimation();

  useEffect(() => {
    if (textInView) {
      textControls.start("visible");
    }
  }, [textInView]);
  return (
    <div>
      <motion.div
        ref={textRef}
        variants={animate.dir == "x" ? textVariantX : textVariantY}
        initial="hidden"
        animate={textControls}
        className="flex items-center justify-center relative w-fit"
      >
        {(() => {
          switch (variant) {
            case "h1":
              return (
                <span className="lg:text-9xl sm:text-7xl text-5xl text-zinc-100 text-nowrap">
                  {text}
                </span>
              );
            case "h2":
              return (
                <span className="lg:text-7xl sm:text-5xl text-3xl text-zinc-100 text-nowrap">
                  {text}
                </span>
              );
            case "h3":
              return (
                <span className="lg:text-5xl sm:text-3xl text-xl text-zinc-100 text-nowrap">
                  {text}
                </span>
              );
            case "h4":
              return (
                <span className="lg:text-3xl sm:text-xl text-lg text-zinc-100 text-nowrap">
                  {text}
                </span>
              );
          }
        })()}
      </motion.div>
    </div>
  );
};
export default Heading;
