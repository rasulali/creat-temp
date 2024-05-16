"use client";
import Card, { CardServicesProps } from "@/components/cardServices";
import City from "@/components/city";
import Heading from "@/components/heading";
import LiveDiv from "@/components/liveDiv";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons/faWhatsapp";
import { faBath } from "@fortawesome/free-solid-svg-icons/faBath";
import { faChartSimple } from "@fortawesome/free-solid-svg-icons/faChartSimple";
import { faCompassDrafting } from "@fortawesome/free-solid-svg-icons/faCompassDrafting";
import { faHelmetSafety } from "@fortawesome/free-solid-svg-icons/faHelmetSafety";
import { faScrewdriverWrench } from "@fortawesome/free-solid-svg-icons/faScrewdriverWrench";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  ArrowRightIcon,
  ChevronDownIcon,
  EnvelopeIcon,
  PhoneIcon,
} from "@heroicons/react/24/outline";
import { ArrowLeftIcon } from "@heroicons/react/24/solid";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const Services = () => {
  const carousel: CardServicesProps[] = [
    {
      link: "/portfolio",
      description: (
        <p>
          Vitae suspendisse nunc id sed varius metus, efficitur velit nunc Vitae
          suspendisse nunc id sed varius metus, efficitur velit nunc Vitae
          suspendisse nunc id sed varius metus, efficitur velit nunc Vitae
          suspendisse nunc id sed varius metus, efficitur velit nunc Vitaeserpa
          suspendisse nunc id sed varius metus, efficitur velit nunc euismod
          urna.
        </p>
      ),
      icon: faCompassDrafting,
      title: "Layihə Xidmətləri",
    },
    {
      link: "/portfolio/constructions",
      description: (
        <p>
          Vitae suspendisse nunc id sed varius metus, efficitur velit nunc Vitae
          suspendisse nunc id sed varius metus, efficitur velit nunc Vitae
          suspendisse nunc id sed varius metus, efficitur velit nunc Vitae
          suspendisse nunc id sed varius metus, efficitur velit nunc Vitae
          suspendisse nunc id sed varius metus, efficitur velit nunc euismod
          urna.
        </p>
      ),
      icon: faHelmetSafety,
      title: "Təmir/Tikinti Xidmətləri",
    },
    {
      link: "#",
      description: (
        <p>
          Vitae suspendisse nunc id sed varius metus, efficitur velit nunc Vitae
          suspendisse nunc id sed varius metus, efficitur velit nunc Vitae
          suspendisse nunc id sed varius metus, efficitur velit nunc Vitae
          suspendisse nunc id sed varius metus, efficitur velit nunc Vitae
          suspendisse nunc id sed varius metus, efficitur velit nunc euismod
          urna.
        </p>
      ),
      icon: faBath,
      title: "Aksessuarlar",
    },
    {
      link: "#",
      description: (
        <p>
          Vitae suspendisse nunc id sed varius metus, efficitur velit nunc Vitae
          suspendisse nunc id sed varius metus, efficitur velit nunc Vitae
          suspendisse nunc id sed varius metus, efficitur velit nunc Vitae
          suspendisse nunc id sed varius metus, efficitur velit nunc Vitae
          suspendisse nunc id sed varius metus, efficitur velit nunc euismod
          urna.
        </p>
      ),
      icon: faScrewdriverWrench,
      title: "Usta Xidmətləri",
    },
    {
      link: "#",
      description: (
        <p>
          Vitae suspendisse nunc id sed varius metus, efficitur velit nunc Vitae
          suspendisse nunc id sed varius metus, efficitur velit nunc Vitae
          suspendisse nunc id sed varius metus, efficitur velit nunc Vitae
          suspendisse nunc id sed varius metus, efficitur velit nunc Vitae
          suspendisse nunc id sed varius metus, efficitur velit nunc euismod
          urna.
        </p>
      ),
      icon: faChartSimple,
      title: "Biznes Plan Tərtibi Metodikası",
    },
  ];

  const doubleCarousel = [...carousel, ...carousel];

  const [autoScroll, setAutoScroll] = useState(true);
  const [scrollX, setScrollX] = useState(0);
  const [duration, setDuration] = useState(0.5);
  const [animateState, setAnimateState] = useState(false);
  const carouselRef = useRef<HTMLDivElement>(null);
  const carouselWrapperRef = useRef<HTMLDivElement>(null);
  const cardWidth = () => {
    if (window.innerWidth < 640) {
      return window.innerWidth;
    } else {
      return 960;
    }
  };

  useEffect(() => {
    const handleTouchStart = () => {
      setAutoScroll(false);
    };

    const handleTouchEnd = () => {
      setAutoScroll(true);
    };

    const carouselWrapper = carouselWrapperRef.current;
    carouselWrapper?.addEventListener("touchstart", handleTouchStart);
    carouselWrapper?.addEventListener("touchend", handleTouchEnd);

    return () => {
      carouselWrapper?.removeEventListener("touchstart", handleTouchStart);
      carouselWrapper?.removeEventListener("touchend", handleTouchEnd);
    };
  }, []);

  const handleLeftClick = () => {
    if (animateState) {
      return;
    }
    setAnimateState(true);
    if (scrollX === 0) {
      setDuration(0);
      setScrollX(-cardWidth() * carousel.length);
      setTimeout(() => {
        setDuration(0.5);
        setScrollX(-cardWidth() * carousel.length + cardWidth());
        setAnimateState(false);
      }, 500);
    } else {
      setScrollX(scrollX + cardWidth());
      setAnimateState(false);
    }
  };

  const handleRightClick = () => {
    if (animateState) {
      return;
    }
    setAnimateState(true);
    if (scrollX === -cardWidth() * (carousel.length - 1)) {
      setTimeout(() => {
        setDuration(0);
        setScrollX(0);
      }, 500);
    }
    setDuration(0.5);
    setScrollX(scrollX - cardWidth());
    setAnimateState(false);
  };

  useEffect(() => {
    if (autoScroll) {
      const interval = setInterval(() => {
        handleRightClick();
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [autoScroll, scrollX]);

  const carouselInView = useInView(carouselWrapperRef, {
    once: true,
  });

  return (
    <main className="lg:mt-24 mt-12">
      {/* Heading */}
      <div className="flex flex-col items-center w-full lg:mb-24 mb-4 relative">
        <div className="w-fit">
          <Heading
            animate={{ from: -10, to: 0, dir: "y" }}
            text="Xidmətlərimiz"
            variant="h1"
          />
        </div>
        <Heading
          text={
            <h2 className="font-light">Sizin Ehtiyaclarınızı Düşünərək !</h2>
          }
          animate={{ from: -10, to: 0, dir: "y", delay: 0.1 }}
          variant="h3"
        />
      </div>

      <div className="flex w-full max-w-[1920px] mx-auto lg:h-[600px] relative lg:mb-24 overflow-hidden">
        {!carouselInView && (
          <ChevronDownIcon
            className="fixed bottom-5 left-1/2 -translate-x-1/2 z-10
          opacity-0 sm:w-12 w-8 text-zinc-100/60 animate-down lg:block hidden"
          />
        )}
        <div className="w-full h-full flex flex-col lg:gap-y-4 gap-y-2 mt-14 lg:mt-0 justify-end z-30 lg:p-8 pointer-events-none">
          <div className="lg:w-1/3 w-full lg:p-0 px-4">
            <Heading
              animate={{ from: -10, to: 0, dir: "x", delay: 0.1 }}
              variant="h3"
              text={
                <h1 className="font-semibold drop-shadow pointer-events-auto">
                  Layihədən tikintiyə
                  <br />
                  Təmirdən aksessuarlara
                </h1>
              }
            />
          </div>
          <div className="lg:w-1/3 w-full lg:p-0 px-4">
            <LiveDiv animate={{ from: -10, to: 0, dir: "x", delay: 0.2 }}>
              <p
                className="drop-shadow pointer-events-auto lg:text-2xl
          sm:text-lg text-base text-zinc-100"
              >
                Morbi laoreet eu dolor ut dui ac semper vestibulum morbi urna
                vestibulum at arcu vestibulum in at, dolor nullam eget dui metus
                a dictumst hac platea, facilisis. Vulputate lorem nisi nulla eu
                eCursus congue tempor, faucibus sed ut sit sapien sagittis eros,
                neque ipsum pellentesque porttitor, rhoncus cras. Nunc ut auctor
                duis nulla aenean, nunc tempor eu in nullam ornare nibh
                imperdiet congue lacus vivamus consequat feugiat pellentesque
              </p>
            </LiveDiv>
          </div>
        </div>
        <div className="w-full h-full absolute top-0 left-0 bg-grayA lg:flex hidden items-center justify-center">
          <City className="absolute" />
          <div className="w-full h-full absolute bg-gradient-to-r from-grayA via-grayA/50 to-grayA/10 pointer-events-none" />
          <div className="w-1/2 h-full absolute right-0 bg-gradient-to-l from-grayA via-transparent to-transparent pointer-events-none" />
          <Image
            src="/services/city.png"
            alt=""
            width={1920}
            height={0}
            className="object-contain"
          />
        </div>
        {/* shadows */}
        {/* shadows */}
      </div>
      {/* Cards */}
      <div
        onMouseEnter={() => setAutoScroll(false)}
        onMouseLeave={() => setAutoScroll(true)}
        ref={carouselWrapperRef}
        className="max-w-[1920px] mx-auto h-fit relative lg:mb-24 mb-12 overflow-hidden"
      >
        <button
          onClick={handleLeftClick}
          className="absolute flex lg:bottom-[calc(50%-64px)] lg:left-4
          lg:translate-y-1/2 lg:translate-x-0 top-1/2 translate-y-1/2
          transition-all duration-200 hover:border-zinc-100 group bg-neutral-800
        z-20 lg:w-16 w-12 aspect-square border-2 border-neutral-700 rounded-full items-center justify-center"
        >
          <ArrowLeftIcon className="w-full h-full p-2 text-zinc-100 group-hover:text-neutral-900 transition-colors duration-200" />
        </button>
        <button
          onClick={handleRightClick}
          className="absolute flex lg:bottom-[calc(50%-64px)] lg:right-4 lg:translate-y-1/2
          lg:translate-x-0 top-1/2 translate-y-1/2 right-0
          transition-all duration-200 hover:border-zinc-100 bg-neutral-800 group hover:bg-zinc-100
        z-20 lg:w-16 w-12 aspect-square border-2 border-neutral-700 rounded-full items-center justify-center"
        >
          <ArrowRightIcon className="w-full h-full p-2 text-zinc-100 group-hover:text-neutral-900 transition-colors duration-200" />
        </button>

        <div className="overflow-x-hidden whitespace-nowrap w-full">
          {doubleCarousel.map((item, index) => (
            <motion.div
              ref={carouselRef}
              animate={{ x: scrollX }}
              transition={{
                duration: duration,
                ease: "easeInOut",
              }}
              key={index}
              className="inline-flex justify-center lg:w-1/2 w-full"
            >
              <Card
                link={item.link}
                description={item.description}
                icon={item.icon}
                title={item.title}
              />
            </motion.div>
          ))}
        </div>
      </div>
      <div className="w-full max-w-[1920px] mx-auto lg:px-8 flex flex-col items-center">
        <Heading
          animate={{ from: -10, to: 0, dir: "y" }}
          text={<h1>Bizimlə Əlaqə Saxlayın</h1>}
          variant="h2"
        />
        <div
          className="flex lg:flex-row flex-col gap-4 lg:mt-8 mt-4 justify-center
        items-center lg:w-1/2 w-full lg:mx-auto lg:mb-24"
        >
          <div className="w-full lg:px-4 px-2">
            <Link className="block" href="https://wa.me/994502989999">
              <div
                className="flex items-center gap-3 lg:rounded-xl rounded-lg p-4
              bg-neutral-700/50 backdrop-blur hover:bg-neutral-600/50
              transition-colors duration-300"
              >
                <span className="w-6 aspect-square flex items-center justify-center">
                  <FontAwesomeIcon
                    icon={faWhatsapp}
                    className="w-full h-full text-green-500"
                  />
                </span>
                <div>
                  <p className="font-medium text-[#f4f4f5]">WhatsApp</p>
                  <p className="text-sm text-[#b3b3b3] dark:text-[#b3b3b3]">
                    050 298 99 99
                  </p>
                </div>
              </div>
            </Link>
          </div>
          <div className="w-full lg:px-4 px-2">
            <Link className="block" href="tel:994502989999">
              <div
                className="flex items-center gap-3 lg:rounded-xl rounded-lg p-4
              bg-neutral-700/50 backdrop-blur hover:bg-neutral-600/50
              transition-colors duration-300"
              >
                <PhoneIcon className="w-6 aspect-square text-blue-500" />
                <div>
                  <p className="font-medium text-[#f4f4f5]">Telefon</p>
                  <p className="text-sm text-[#b3b3b3] dark:text-[#b3b3b3]">
                    050 298 99 99
                  </p>
                </div>
              </div>
            </Link>
          </div>
          <div className="w-full lg:px-4 px-2">
            <Link className="block" href="mailto:office@alioglu.az">
              <div
                className="flex items-center gap-3 lg:rounded-xl rounded-lg p-4
              bg-neutral-700/50 backdrop-blur hover:bg-neutral-600/50
              transition-colors duration-300"
              >
                <EnvelopeIcon className="w-6 aspect-square text-red-500" />
                <div>
                  <p className="font-medium text-[#f4f4f5]">Elektron poçt</p>
                  <p className="text-sm text-[#b3b3b3] dark:text-[#b3b3b3]">
                    office@alioglu.az
                  </p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Services;
