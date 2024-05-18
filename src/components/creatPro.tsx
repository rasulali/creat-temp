"use client";

import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/outline";
import React, { ReactNode, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { XMarkIcon } from "@heroicons/react/16/solid";
import { InformationCircleIcon } from "@heroicons/react/20/solid";

//Lightbox
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import "yet-another-react-lightbox/styles.css";
import Counter from "yet-another-react-lightbox/plugins/counter";
import "yet-another-react-lightbox/plugins/counter.css";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import Captions from "yet-another-react-lightbox/plugins/captions";
import "yet-another-react-lightbox/plugins/captions.css";
//Lightbox

interface CreatProProps {
  countImage: number;
  src: string[];
  text: ReactNode;
}

const CreatPro: React.FC<CreatProProps> = ({ countImage, src, text }) => {
  const [scrollX, setScrollX] = useState(0);
  const [info, setInfo] = useState(false);

  const handleRightClick = () => {
    if (scrollX > -100 + 100 / countImage) {
      setScrollX(scrollX - 100 / countImage);
      setImageIndex(imageIndex + 1);
    }
  };
  const handleLeftClick = () => {
    if (scrollX < 0) {
      setScrollX(scrollX + 100 / countImage);
      setImageIndex(imageIndex + -1);
    }
  };

  const [lightBoxOpen, setLightBoxOpen] = useState(false);
  const [imageIndex, setImageIndex] = useState(0);

  const extractTextFromReactNode = (node: ReactNode): string => {
    if (typeof node === "string" || typeof node === "number") {
      return node.toString();
    }

    if (Array.isArray(node)) {
      return node.map(extractTextFromReactNode).join("");
    }

    if (React.isValidElement(node)) {
      return extractTextFromReactNode(node.props.children);
    }

    return "";
  };

  const extractedText = extractTextFromReactNode(text);

  const slides = src.map((item) => {
    return {
      src: item,
      description: extractedText,
    };
  });

  return (
    <div className="relative rounded-2xl overflow-hidden w-full aspect-[4/3]">
      <Lightbox
        slides={slides}
        open={lightBoxOpen}
        index={imageIndex}
        plugins={[Slideshow, Counter, Fullscreen, Zoom, Captions]}
        close={() => setLightBoxOpen(false)}
      />
      ;
      <div
        onClick={() => {
          handleLeftClick();
        }}
        className="absolute top-1/2 left-2 lg:w-12 w-8 p-1 bg-zinc-100 rounded-full group
        flex items-center justify-center cursor-pointer z-10"
      >
        <ArrowLeftIcon className="text-creatBlue group-hover:text-creatViolet duration-300 transition-colors" />
      </div>
      <div
        onClick={() => {
          handleRightClick();
        }}
        className="absolute top-1/2 right-2 lg:w-12 w-8 p-1 rounded-full group z-10
        flex items-center justify-center bg-zinc-100 cursor-pointer "
      >
        <ArrowRightIcon className="text-creatBlue group-hover:text-creatViolet duration-300 transition-colors" />
      </div>
      <div
        onClick={() => {
          setInfo(!info);
        }}
        className={`absolute lg:w-8 lg:p-1 w-6 p-0.5 bottom-4 right-4 aspect-square z-10 rounded-full
        bg-creatBlue flex items-center justify-center cursor-pointer
       ${info ? "opacity-0" : "opacity-100"} transition-all duration-100`}
      >
        <InformationCircleIcon className="w-full h-full text-zinc-100" />
      </div>
      <motion.div
        initial={{ translateY: "100%" }}
        animate={{ translateY: info ? "0%" : "100%" }}
        transition={{ duration: 0.3, stiffness: 200, type: "tween" }}
        className="absolute w-full h-full bottom-0 left-0
        rounded-b-2xl flex items-end z-10"
        onClick={() => setInfo(!info)}
      >
        <div className="w-full flex mt-auto h-fit bg-creatBlue/80 px-2 py-1 lg:px-4 lg:py-2">
          <span className="text-base lg:text-2xl text-zinc-100 w-full">
            {text}
          </span>
          <div
            onClick={() => setInfo(!info)}
            className="w-6 aspect-square cursor-pointer"
          >
            <XMarkIcon className="w-full text-zinc-100" />
          </div>
        </div>
      </motion.div>
      <motion.div
        initial={{ x: 0 }}
        animate={{
          x: `${scrollX}%`,
          transition: { duration: 0.3 },
        }}
        style={{ width: `${100 * countImage}%` }}
        className="absolute flex top-0 left-0 h-full bg-neutral-800"
      >
        {src.map((item, index) => (
          <div
            key={index}
            style={{
              width: `${(Math.round((100 / countImage) * 100) / 100).toFixed(2)}%`,
              height: "100%",
            }}
            onClick={() => setLightBoxOpen(true)}
            className="flex items-center justify-center cursor-pointer"
          >
            <Image
              className="w-full h-full object-cover"
              src={item}
              alt=""
              width={720}
              height={0}
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
};
export default CreatPro;
