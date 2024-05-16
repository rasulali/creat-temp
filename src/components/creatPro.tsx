"use client";

import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/outline";
import { ReactNode, useState } from "react";
import Heading from "./heading";
import { motion } from "framer-motion";
import Image from "next/image";

interface CreatProProps {
  countImage: number;
  src: string[];
  text: ReactNode;
}

const CreatPro: React.FC<CreatProProps> = ({ countImage, src, text }) => {
  const [scrollX, setScrollX] = useState(0);
  const handleRightClick = () => {
    //if (scrollX > 2 * (100 / countImage - 25))
    setScrollX(scrollX - 100 / countImage);
  };
  const handleLeftClick = () => {
    //if (scrollX < 0)
    setScrollX(scrollX + 100 / countImage);
  };
  return (
    <div className="relative rounded-2xl overflow-hidden w-full aspect-[4/3]">
      <div
        onClick={() => {
          handleLeftClick();
        }}
        className="absolute top-1/2 left-2 w-12 p-1 rounded-full group flex items-center justify-center"
      >
        <ArrowLeftIcon className="text-creatBlue drop-shadow-lg group-hover:text-creatViolet duration-300 transition-colors" />
      </div>

      <div
        onClick={() => {
          handleRightClick();
        }}
        className="absolute top-1/2 right-2 w-12  p-1 rounded-full group flex items-center justify-center"
      >
        <ArrowRightIcon className="text-creatBlue drop-shadow-lg group-hover:text-creatViolet duration-300 transition-colors" />
      </div>

      <div className="absolute w-full h-40 flex items-center bottom-0 left-0 px-4 py-2 bg-neutral-800/40 backdrop-blur">
        <Heading
          animate={{ from: -10, to: 0, dir: "x" }}
          variant="h4"
          text={text}
        />
      </div>
      <motion.div
        initial={{ x: 0 }}
        animate={{
          x: `${scrollX}%`,
          transition: { duration: 0.3 },
        }}
        className="absolute w-max flex top-0 left-0 -z-10 h-full bg-neutral-800"
      >
        {src.map((item, index) => (
          <div
            style={{
              width: `${(Math.round((100 / countImage) * 100) / 100).toFixed(2)}%`,
              height: "100%",
            }}
            className="flex items-center justify-center"
          >
            <Image
              className="w-full h-full object-cover"
              src={item}
              key={index}
              alt=""
              width={1080}
              height={0}
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
};
export default CreatPro;
