"use client";

import Card from "@/components/card";
import Contact from "@/components/quickContact";
import AzeMap from "@/components/map";
import Navbar from "@/components/navbar";
import {
  ArrowLongRightIcon,
  ChevronDownIcon,
} from "@heroicons/react/24/outline";
import { MapPinIcon } from "@heroicons/react/24/solid";
import {
  motion,
  useAnimation,
  useInView,
  useMotionValueEvent,
  useScroll,
} from "framer-motion";
import Link from "next/link";
import { useRef, useEffect, useState } from "react";
import Heading from "@/components/heading";
import hotel from "@/../public/cardImages/hotel.jpg";
import restaurant from "@/../public/cardImages/restourant.jpg";
import interior from "@/../public/cardImages/interior.jpg";
import exterior from "@/../public/cardImages/exterior.jpg";
import object from "@/../public/cardImages/object.jpg";
import construction from "@/../public/cardImages/construction.jpg";
import Footer from "@/components/footer";
import Splash from "@/components/splash";
import Image from "next/image";
import CreatPro from "@/components/creatPro";

const Home = () => {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    document.body.style.overflow = "hidden";
    new Promise((resolve) => setTimeout(resolve, 1400)).then(() => {
      setLoading(false);
      document.body.style.overflow = "visible";
    });
  }, []);
  const [isTextHover, setTextHover] = useState(false);
  const handleMouseEnter = () => {
    setTextHover(true);
  };
  const handleMouseLeave = () => {
    setTextHover(false);
  };

  const videoRef = useRef(null);
  const videoInView = useInView(videoRef, { once: false });

  const textRef = useRef(null);
  const textInView = useInView(textRef, { once: true });

  const textVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  };

  const arrowVariants = {
    hidden: { opacity: 0, x: -128 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.1 } },
  };
  const textControls = useAnimation();

  useEffect(() => {
    if (textInView) {
      textControls.start("visible");
    }
  }, [textInView]);

  const [scroll, setScroll] = useState(0);
  const { scrollYProgress } = useScroll();

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    setScroll(latest);
  });

  return (
    <main className={`relative ${loading ? "overflow-hidden" : ""}`}>
      {loading && (
        <div className="fixed z-[999999] w-screen h-screen">
          <Splash />
        </div>
      )}
      {/* First Section */}
      <section className="relative w-full h-screen bg-gray-800">
        <Contact scroll={scroll} />
        <Navbar isVideoVisible={videoInView} />
        <div className="w-full h-full relative">
          <div className="flex flex-col w-full h-full bg-transparent z-20 justify-center absolute lg:px-12">
            <Heading
              animate={{ from: -20, to: 0, dir: "x" }}
              variant="h1"
              text={
                <h1 className="text-wrap font-bebas">
                  Innovative approach, <br />
                  Professional Service!
                </h1>
              }
            />
          </div>
          <div className="absolute w-full h-full z-10 bg-black/20 backdrop-blur-sm" />
          <Image
            src="/bg.jpg"
            ref={videoRef}
            alt=""
            width={1920}
            height={1080}
            priority
            quality={100}
            className="object-cover w-full h-full absolute z-0 "
          />
        </div>
        {videoInView && (
          <span
            className="absolute flex items-center justify-center
          bottom-[5%] left-1/2 -translate-x-1/2 z-20
          "
          >
            <ChevronDownIcon className="opacity-0 sm:w-12 w-8 text-zinc-100/60 animate-down" />
          </span>
        )}
      </section>
      <section className="min-h-screen max-w-[1920px] mx-auto">
        <div className="m-12">
          <Heading
            animate={{ from: -20, to: 0, dir: "x" }}
            variant="h2"
            text={
              <h1 className="text-creatBlue font-semibold">
                Projects we are proud of
              </h1>
            }
          />
        </div>
        <div className="w-full grid grid-cols-2 grid-rows-2 p-12 gap-12">
          <CreatPro
            countImage={5}
            src={[
              "/cil/2.jpg",
              "/cil/1.jpg",
              "/cil/3.jpg",
              "/cil/4.jpg",
              "/cil/8.jpeg",
            ]}
            text={
              <h1 className="text-zinc-100 text-wrap">
                <span className="text-amber-500">AzerGold</span> Qapalı Səhmdar
                Cəmiyyətinin (QSC) Daşkəsən rayonunda yerləşən Çovdar
                İnteqrəolunmuş Regional Emal Sahəsində (ÇİRES) Çəndə
                Qələviləşdirmə Zavodu
              </h1>
            }
          />
          <CreatPro
            countImage={3}
            src={["/cil/7.png", "/cil/5.jpg", "/cil/6.jpg"]}
            text={
              <h1 className="text-zinc-100 text-wrap">
                Chovdar Gold Mine Sulfite Project Tailings Management Facility
                Raw Water Supply and Acid Rock Drainage Measures
              </h1>
            }
          />
          <CreatPro
            countImage={2}
            src={["/acond/2.jpg", "/acond/1.png"]}
            text={
              <h1 className="text-zinc-100 text-wrap">
                Baki Şəhəri, Heydər Əliyev Adina Neft Emali Zavodunda 14 ədəd
                elektrik yarimstansiyaları
              </h1>
            }
          />

          <CreatPro
            countImage={8}
            src={[
              "/naftalan/1.jpg",
              "/naftalan/2.jpg",
              "/naftalan/3.jpg",
              "/naftalan/4.jpg",
              "/naftalan/5.jpg",
              "/naftalan/6.jpg",
              "/naftalan/7.jpg",
              "/naftalan/8.jpg",
            ]}
            text={
              <h1 className="text-zinc-100 text-wrap">
                Naftalan şəhərində, "Azərbaycan Respublikası Dövlət Turizm
                Agentliyi"-in sifarişi əsasında layihələndirilmiş Amfiteatr
                Binası
              </h1>
            }
          />
          <CreatPro
            countImage={4}
            src={[
              "/anbar/1.jpg",
              "/anbar/2.jpg",
              "/anbar/3.jpg",
              "/anbar/4.jpg",
            ]}
            text={
              <h1 className="text-zinc-100 text-wrap">
                Daşkəsən rayonu, Çovdar Filiz Emalı sahəsində "AzerGold QSC"-ə
                məxsus Anbar Binası
              </h1>
            }
          />
          <CreatPro
            countImage={18}
            src={[
              "/stadion/1.jpeg",
              "/stadion/2.jpeg",
              "/stadion/3.jpeg",
              "/stadion/4.jpeg",
              "/stadion/5.jpeg",
              "/stadion/6.jpeg",
              "/stadion/7.jpeg",
              "/stadion/8.jpeg",
              "/stadion/9.jpeg",
              "/stadion/10.jpeg",
              "/stadion/11.jpeg",
              "/stadion/12.jpeg",
              "/stadion/13.jpeg",
              "/stadion/14.jpeg",
              "/stadion/15.jpeg",
              "/stadion/16.jpeg",
              "/stadion/17.jpeg",
              "/stadion/18.jpeg",
            ]}
            text={<h1 className="text-zinc-100 text-wrap">Stadion</h1>}
          />
          <CreatPro
            countImage={4}
            src={["/stop/1.jpg", "/stop/2.jpg", "/stop/3.jpg", "/stop/4.jpg"]}
            text={
              <h1 className="text-zinc-100 text-wrap">
                Smart Tiplli Avtobus dayanacağı
              </h1>
            }
          />
          <CreatPro
            countImage={2}
            src={["/azerblast/1.jpg", "/azerblast/2.jpg"]}
            text={
              <h1 className="text-zinc-100 text-wrap">
                Sənaye Partlayıcı Maddələri İstehsalı Zavodu
              </h1>
            }
          />
          <CreatPro
            countImage={10}
            src={[
              "/baxca/1.tif",
              "/baxca/2.tif",
              "/baxca/3.tif",
              "/baxca/4.tif",
              "/baxca/5.jpeg",
              "/baxca/6.jpeg",
              "/baxca/7.jpeg",
              "/baxca/8.jpeg",
              "/baxca/9.jpeg",
              "/baxca/10.jpeg",
            ]}
            text={
              <h1 className="text-zinc-100 text-wrap">
                Tovuz rayonu Düz Qırıqlı, Abdulbəyli və Aşağı Quşçu kəndlərində
                100 və 55 yerlik uşaq baxçası
              </h1>
            }
          />
          <CreatPro
            countImage={2}
            src={["/boyukshor/2.jpg", "/boyukshor/1.png"]}
            text={
              <h1 className="text-zinc-100 text-wrap">
                “BOYUK SHORE” LAKE <br />
                567.0 ha ərazidə abadlıq və bərpa işləri
              </h1>
            }
          />
          <CreatPro
            countImage={2}
            src={["/zig/1.webp", "/zig/2.webp"]}
            text={<h1 className="text-zinc-100 text-wrap">ZIG LAKE</h1>}
          />
          <CreatPro
            countImage={2}
            src={["/lankaran/1.png", "/lankaran/2.png"]}
            text={
              <h1 className="text-zinc-100 text-wrap">Lankaran Spring Hotel</h1>
            }
          />
        </div>
      </section>
      {/* Second Section */}
      <section className="min-h-screen p-4 sm:p-8 lg:p-16">
        {/* Projects Text */}
        <motion.div
          ref={textRef}
          variants={textVariants}
          initial="hidden"
          className="lg:mb-16 mb-4 sm:mb-8"
          animate={textControls}
        >
          <Link
            className="flex items-center justify-center relative w-fit"
            href="/portfolio"
          >
            <motion.div
              onHoverStart={handleMouseEnter}
              onHoverEnd={handleMouseLeave}
              className="absolute w-[102%] h-[112%] z-20"
            />
            <h1
              className={`lg:text-7xl sm:text-5xl text-3xl transition-colors z-10
                  duration-100 delay-75
                  ${isTextHover ? "text-zinc-100" : "text-creatBlue"}`}
            >
              Other Projects
            </h1>
            <motion.span
              ref={textRef}
              variants={arrowVariants}
              initial="hidden"
              animate={textControls}
              className="lg:pt-4 pl-4 z-10"
            >
              <ArrowLongRightIcon
                className={`lg:w-24 sm:w-12 w-8 duration-75 delay-0
              ${isTextHover ? "text-zinc-100" : "text-creatBlue"}`}
              />
            </motion.span>
            <motion.div
              className={`absolute top-1/2 left-1/2 bg-creatBlue w-[104%] h-[112%]
            pointer-events-none -skew-x-12 delay-100
            transform transition duration-300 origin-left -translate-x-1/2 -translate-y-1/2
            ${isTextHover ? "scale-x-1" : "scale-x-0"}
            `}
            />
          </Link>
        </motion.div>

        {/* Cards Section */}
        <div
          className="max-w-[calc((832px+96px)*3+128px)] lg:py-8 mx-auto flex flex-col lg:flex-row lg:flex-wrap
        items-center justify-center gap-y-8 sm:gap-y-12 lg:gap-x-10 xl:gap-x-16 lg:gap-y-24"
        >
          <Card
            delay={0.15}
            tag="Interior"
            src={interior}
            href="/portfolio/interiors"
          />
          <Card
            delay={0.2}
            tag="Exterior"
            src={exterior}
            href="/portfolio/exteriors"
          />
          <Card
            delay={0.05}
            tag="Restaurants"
            src={restaurant}
            href="/portfolio/restaurants"
          />
          <Card delay={0} tag="Hotels" src={hotel} href="/portfolio/hotels" />
          <Card
            delay={0.1}
            tag="Other Facilities"
            src={object}
            href="/portfolio/objects"
          />
          <Card
            delay={0.25}
            tag="Repair/Construction"
            src={construction}
            href="javascript:void(0)"
          />
        </div>
      </section>
      {/* Third Section */}
      <section className="relative lg:p-16 sm:p-8 p-4 bg-creatBlue">
        {/* Who are we */}
        <div className="hidden h-screen">
          <span className="pointer-events-none">
            <Heading
              animate={{ from: -50, to: 0, dir: "x" }}
              variant="h1"
              text="Biz Kimik?"
            />
          </span>
        </div>

        {/* Location */}
        <div className="sm:my-40 my-16 mb-0 sm:mb-0">
          <div className="relative">
            <h1
              className="flex flex-col gap-2 text-nowrap
              top-0 left-0
              lg:text-5xl sm:text-3xl text-xl font-semibold text-zinc-100"
            >
              <span
                className="sm:border-l-8 border-l-4 border-creatVioletDark sm:pl-2 pl-1
                pt-1
                leading-[1.2]"
              >
                <span>Vurghun Residence,</span>
                <span className="flex">
                  Baku
                  <MapPinIcon className="ml-1 sm:w-8 w-5 text-creatVioletDark" />
                </span>
              </span>
            </h1>
            <AzeMap />
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
};
export default Home;
