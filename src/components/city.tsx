"use client";
import { Variants, motion } from "framer-motion";
import { useState } from "react";

interface CityProps {
  className: string;
}
const City: React.FC<CityProps> = ({ className }) => {
  const [B_1hover, setB_1hover] = useState(false);
  const [B_2hover, setB_2hover] = useState(false);
  const [B_3hover, setB_3hover] = useState(false);
  const [B_4hover, setB_4hover] = useState(false);

  const pulseVariants: Variants = {
    initial: {
      opacity: [1, 1, 0],
      r: 0,
    },
    hover: {
      opacity: 0,
      transition: {
        duration: 0.2,
      },
    },
    animate: {
      opacity: [1, 1, 0],
      r: 24,
      transition: {
        duration: 2.5,
        ease: "easeInOut",
        repeat: Infinity,
        type: "tween",
        repeatType: "loop",
      },
    },
  };

  return (
    <div className={className}>
      {/*1st*/}
      <motion.svg
        width="1920"
        height="600"
        viewBox="0 0 1920 600"
        className="w-full h-full"
        fill="none"
      >
        <g>
          <motion.path
            onHoverStart={() => setB_1hover(true)}
            onHoverEnd={() => setB_1hover(false)}
            initial={{ opacity: 0 }}
            animate={{ opacity: B_1hover ? 1 : 0 }}
            transition={{ duration: 0.2 }}
            className="fill-blue-300/50 stroke-[4px] stroke-blue-700/50"
            d="M647 600L650 268L651 105.5L710 98.2459V86.5L733 84V74.5L756 71L800 81.5L829 93V103L935 130V527H966.5V518H1002V519.5H1010.5V537H1053V600H647Z"
          />
          <motion.path
            initial={{ opacity: 0 }}
            animate={{ opacity: B_1hover ? 1 : 0 }}
            transition={{ duration: 0.2 }}
            className="stroke stroke-blue-700"
            d="M853 349C853 349 897 304.5 897.5 304C898 303.5 1047 304 1047 304M856 354C856 358.418 852.418 362 848 362C843.582 362 840 358.418 840 354C840 349.582 843.582 346 848 346C852.418 346 856 349.582 856 354ZM850 354C850 355.105 849.105 356 848 356C846.895 356 846 355.105 846 354C846 352.895 846.895 352 848 352C849.105 352 850 352.895 850 354Z"
          />
          <motion.circle
            initial="initial"
            animate={B_1hover ? "hover" : "animate"}
            variants={pulseVariants}
            className="stroke-blue-500/50 fill-blue-500/50 stroke-2"
            cx="848"
            cy="354"
          />
        </g>
        <g>
          <motion.path
            onHoverStart={() => setB_2hover(true)}
            onHoverEnd={() => setB_2hover(false)}
            initial={{ opacity: 0 }}
            animate={{ opacity: B_2hover ? 1 : 0 }}
            transition={{ duration: 0.2 }}
            className="fill-blue-300/50 stroke-[4px] stroke-blue-700/50"
            id="B_2"
            d="M946 360.5L947.5 362V367H936V527H967.5V518H1003V519.5H1011.5V536.5H1053.5V392L1045 392.5V377H1029.5V372.5L1027 371.5V363.5L1024.5 361.5H1015V352.5L1013.5 351L972 350.5L969.5 354H946V360.5Z"
          />
          <motion.path
            initial={{ opacity: 0 }}
            animate={{ opacity: B_2hover ? 1 : 0 }}
            transition={{ duration: 0.2 }}
            className="stroke stroke-blue-700"
            id="I_2"
            d="M1008 446.222C1008 446.222 1052 401.722 1052.5 401.222C1053 400.722 1202 401.222 1202 401.222M1011 451.222C1011 455.64 1007.42 459.222 1003 459.222C998.582 459.222 995 455.64 995 451.222C995 446.804 998.582 443.222 1003 443.222C1007.42 443.222 1011 446.804 1011 451.222ZM1005 451.222C1005 452.327 1004.1 453.222 1003 453.222C1001.9 453.222 1001 452.327 1001 451.222C1001 450.118 1001.9 449.222 1003 449.222C1004.1 449.222 1005 450.118 1005 451.222Z"
          />
          <motion.circle
            initial="initial"
            animate={B_2hover ? "hover" : "animate"}
            variants={pulseVariants}
            className="stroke-blue-500/50 fill-blue-500/50 stroke-2"
            cx="1003"
            cy="451"
          />
        </g>

        <g>
          <motion.path
            onHoverStart={() => setB_3hover(true)}
            onHoverEnd={() => setB_3hover(false)}
            initial={{ opacity: 0 }}
            animate={{ opacity: B_3hover ? 1 : 0 }}
            transition={{ duration: 0.2 }}
            className="fill-blue-300/50 stroke-[4px] stroke-blue-700/50"
            id="B_3"
            d="M1084 170L1108.5 158L1138.5 155.5L1224.5 158.5L1240 162V198L1250 201.5L1250.5 253.5L1257 256V311L1264 313.5V349H1267V367.5L1271 369V376H1255V600H1054V370H1061V315L1067 313V261L1075 260V210H1084V170Z"
          />
          <motion.path
            initial={{ opacity: 0 }}
            animate={{ opacity: B_3hover ? 1 : 0 }}
            transition={{ duration: 0.2 }}
            className="stroke stroke-blue-700"
            id="I_3"
            d="M1206 368.222C1206 368.222 1250 323.722 1250.5 323.222C1251 322.722 1400 323.222 1400 323.222M1209 373.222C1209 377.64 1205.42 381.222 1201 381.222C1196.58 381.222 1193 377.64 1193 373.222C1193 368.804 1196.58 365.222 1201 365.222C1205.42 365.222 1209 368.804 1209 373.222ZM1203 373.222C1203 374.327 1202.1 375.222 1201 375.222C1199.9 375.222 1199 374.327 1199 373.222C1199 372.118 1199.9 371.222 1201 371.222C1202.1 371.222 1203 372.118 1203 373.222Z"
          />
          <motion.circle
            initial="initial"
            animate={B_3hover ? "hover" : "animate"}
            variants={pulseVariants}
            className="stroke-blue-500/50 fill-blue-500/50 stroke-2"
            cx="1201"
            cy="373"
          />
        </g>

        <g>
          <motion.path
            onHoverStart={() => setB_4hover(true)}
            onHoverEnd={() => setB_4hover(false)}
            initial={{ opacity: 0 }}
            animate={{ opacity: B_4hover ? 1 : 0 }}
            transition={{ duration: 0.2 }}
            className="fill-blue-300/50 stroke-[4px] stroke-blue-700/50"
            id="B_4"
            d="M1469 367.5L1255 376V600H1546L1544.5 380.5L1474 367.5H1469Z"
          />
          <motion.path
            initial={{ opacity: 0 }}
            animate={{ opacity: B_4hover ? 1 : 0 }}
            transition={{ duration: 0.2 }}
            className="stroke stroke-blue-700"
            id="I_4"
            d="M1384 488.222C1384 488.222 1428 443.722 1428.5 443.222C1429 442.722 1578 443.222 1578 443.222M1387 493.222C1387 497.64 1383.42 501.222 1379 501.222C1374.58 501.222 1371 497.64 1371 493.222C1371 488.804 1374.58 485.222 1379 485.222C1383.42 485.222 1387 488.804 1387 493.222ZM1381 493.222C1381 494.327 1380.1 495.222 1379 495.222C1377.9 495.222 1377 494.327 1377 493.222C1377 492.118 1377.9 491.222 1379 491.222C1380.1 491.222 1381 492.118 1381 493.222Z"
          />
          <motion.circle
            initial="initial"
            animate={B_4hover ? "hover" : "animate"}
            variants={pulseVariants}
            className="stroke-blue-500/50 fill-blue-500/50 stroke-2"
            cx="1379"
            cy="493"
          />
        </g>
      </motion.svg>
    </div>
  );
};
export default City;
