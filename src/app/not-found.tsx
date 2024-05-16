"use client";
import Navbar from "@/components/navbar";
import { ArrowUturnLeftIcon } from "@heroicons/react/16/solid";
import Link from "next/link";
import { motion } from "framer-motion";

const NotFound = () => {
  return (
    <main className="relative lg:h-[calc(100vh-268px)] sm:h-[calc(100vh-592px)] h-[calc(100vh-516px)]">
      <Navbar isVideoVisible={false} />
      <div
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2
      lg:translate-y-[calc(-50%+134px)]"
      >
        <h1
          className="textStroke lg:text-7xl sm:text-3xl text-xl w-screen text-center font-bold
           text-neutral-400 text-nowrap"
        >
          404 | Not Found
        </h1>
        <motion.div
          whileHover={{
            scale: 1.02,
          }}
          whileTap={{
            scale: 0.98,
          }}
          transition={{
            duration: 0.2,
            ease: "easeInOut",
          }}
          className="w-fit h-fit mx-auto lg:mt-8 sm:mt-4 mt-3"
        >
          <Link
            href="/"
            className="text-neutral-100 font-black flex items-center
          justify-center gap-x-2 w-fit h-fit lg:px-8 lg:py-4 sm:px-6 sm:py-3
          px-4 py-2 bg-creatBlue
          rounded-full lg:text-2xl sm:text-lg text-nowrap"
          >
            <ArrowUturnLeftIcon className="lg:w-8 sm:w-6 w-5 -translate-y-0.5" />
            <h1>Home Page</h1>
          </Link>
        </motion.div>
      </div>
    </main>
  );
};
export default NotFound;
