"use client";
import { XMarkIcon } from "@heroicons/react/24/outline";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";

export const number: string = "994554149228";

interface ContactProps {
  scroll: number;
}
const Contact: React.FC<ContactProps> = ({ scroll }) => {
  const [menuState, setMenuState] = useState(false);
  // disable scroll when menu is open
  useEffect(() => {
    if (menuState) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [menuState]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuState(false);
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  });
  return (
    <>
      {menuState && (
        <div className="fixed bg-black/50 w-screen h-screen top-0 left-0 z-50" />
      )}
      {!menuState && (
        <AnimatePresence>
          <motion.div
            initial={{
              opacity: 0,
              display: "none",
            }}
            animate={
              scroll < 0.1 || scroll > 0.98
                ? {
                    opacity: 0,
                    display: "none",
                  }
                : {
                    display: "block",
                    opacity: 1,
                  }
            }
            exit={{
              opacity: 0,
            }}
            transition={{
              duration: 0.2,
              ease: "easeInOut",
            }}
            onClick={() => {
              setMenuState(true);
            }}
            className={`fixed bottom-6 right-2 lg:right-6 rounded-full bg-creatBlue drop-shadow-lg
      px-6 py-3 sm:lg:px-8 lg:sm:py-4 z-50 text-zinc-100 transition-colors duration-200
      hover:bg-zinc-100 hover:text-creatBlue cursor-pointer font-semibold`}
          >
            <h1 className="block uppercase cursor-pointer text-xl sm:lg:text-2xl text-nowrap">
              Contact
            </h1>
          </motion.div>
        </AnimatePresence>
      )}
      <AnimatePresence>
        {menuState && (
          <motion.div
            initial={{ y: "100%" }}
            animate={{
              y: 0,
            }}
            exit={{ y: "100%" }}
            transition={{
              duration: 0.2,
              ease: "easeInOut",
            }}
            className="fixed w-screen h-screen z-50 flex items-end"
          >
            <div
              className="w-full lg:h-auto lg:w-1/2 lg:pb-12 lg:mx-auto
            justify-center py-4 lg:py-0 lg:justify-start bg-creatBlue flex flex-col "
            >
              {/* Heading and Close button */}
              <div
                className="flex items-center justify-between px-6 lg:mt-12 lg:mb-6
                 mb-2 lg:px-12"
              >
                <h1 className="text-4xl lg:text-7xl text-zinc-100">
                  Contact Us
                </h1>
                <div
                  onClick={() => {
                    setMenuState(false);
                  }}
                  className="flex group hover:border-transparent transition-all
                  duration-200
                  items-center justify-center border-2 lg:border-4 rounded-full
                w-fit aspect-square border-zinc-100 cursor-pointer"
                >
                  <XMarkIcon
                    className="w-6 lg:w-12 text-zinc-100 transition-colors duration-200
                    group-hover:text-neutral-400 m-2 lg:m-4"
                  />
                </div>
              </div>
              {/* Content */}
              <div className="flex flex-col lg:flex-row gap-y-4">
                <div
                  className="px-6 lg:px-12 w-full h-full flex flex-col gap-y-6
                lg:w-1/2 lg:border-r-4 border-zinc-100"
                >
                  <div className="border-b-2 border-grayALight pb-2 lg:border-0 lg:pb-0">
                    <h1 className="block text-neutral-200 text-2xl mb-1 lg:mb-2 lg:text-4xl">
                      Number
                    </h1>
                    <Link
                      href="tel:994502242944"
                      className="block text-zinc-100 text-xl lg:text-3xl
                    cursor-pointer hover:text-neutral-400 transition-colors duration-200"
                    >
                      050 224 29 44
                    </Link>
                  </div>

                  <div className="border-b-2 border-grayALight pb-2 lg:border-0 lg:pb-0">
                    <h1 className="block text-neutral-200 text-2xl mb-1 lg:mb-2 lg:text-4xl">
                      Email
                    </h1>
                    <Link
                      href="mailto:info@creat.az"
                      className="block text-zinc-100 text-xl lg:text-3xl
                    cursor-pointer hover:text-neutral-400 transition-colors duration-200"
                    >
                      info@creat.az
                    </Link>
                  </div>

                  <div className="border-b-2 border-grayALight pb-2 lg:border-0 lg:pb-0">
                    <h1 className="block text-neutral-200 text-2xl mb-1 lg:mb-2 lg:text-4xl">
                      Whatsapp
                    </h1>
                    <Link
                      href="https://wa.me/994502242944"
                      target="_blank"
                      className="block text-xl lg:text-3xl text-zinc-100 hover:text-neutral-400 transition-colors duration-200"
                    >
                      050 224 29 44
                    </Link>
                  </div>
                </div>
                {/* Location */}
                <div
                  className="px-6 lg:px-12 w-full h-full flex flex-col
                 lg:w-1/2 "
                >
                  <h1 className="block text-neutral-200 text-2xl mb-1 lg:mb-2 lg:text-4xl">
                    Adress
                  </h1>

                  <div>
                    <h1 className="block text-neutral-400 text-lg lg:text-2xl">
                      Head Office
                    </h1>

                    <h1 className="block text-zinc-100 text-xl lg:text-3xl">
                      Vurghun Residence,
                      <br />
                      2nd floor
                    </h1>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
export default Contact;
