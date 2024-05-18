"use client";
import { useState } from "react";
import Link from "next/link";
import { Bars3Icon } from "@heroicons/react/24/outline";
import Logo from "./logo";

interface NavbarProps {
  isVideoVisible: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ isVideoVisible }) => {
  const [menuState, setMenuState] = useState(false);
  const Menu = () => {
    return (
      <div
        className="w-full flex flex-col lg:flex-row px-4 py-4
      lg:justify-evenly lg:h-full lg:items-center text-right lg:text-center
      gap-8 text-nowrap"
      >
        <Link
          href=""
          className="text-base sm:text-lg text-zinc-100 uppercase
           lg:hover:text-creatViolet transition-colors duration-500
          w-fit lg:ml-0 ml-auto"
        >
          Services
        </Link>
        <Link
          href="/portfolio"
          className="text-md sm:text-lg text-zinc-100 uppercase
           lg:hover:text-creatViolet transition-colors duration-500
          w-fit lg:ml-0 ml-auto z-10"
        >
          PORTFOLİO
        </Link>
        {/* reServe space for logo on wide screens */}
        <div className={`hidden relative lg:block w-[136px] mx-8`} />
        {/* reServe space for logo on wide screens */}
        <Link
          href="/about"
          className="text-md sm:text-lg text-zinc-100 uppercase
         lg:hover:text-creatViolet transition-colors duration-500
        w-fit lg:ml-0 ml-auto z-10"
        >
          About US
        </Link>
        <a
          href="/#footer"
          onClick={() => {
            setMenuState(false);
          }}
          className="text-md sm:text-lg text-zinc-100 uppercase cursor-pointer
           lg:hover:text-creatViolet transition-colors duration-500
          w-fit lg:ml-0 ml-auto z-10"
        >
          Contact
        </a>
      </div>
    );
  };

  return (
    <div className="fixed w-screen z-30">
      <div className="w-full bg-[#ce104d] lg:py-2 py-1 flex gap-x-1 text-zinc-100 lg:text-2xl">
        <h1 className="text-nowrap text-zinc-100 w-fit animate-infiniteScroll inline-block tracking-wide">
          We apologize for any inconvenience Website is currently under
          construction
        </h1>
        <h1 className="text-nowrap text-zinc-100 w-fit animate-infiniteScroll inline-block tracking-wide">
          We apologize for any inconvenience Website is currently under
          construction
        </h1>
        <h1 className="text-nowrap text-zinc-100 w-fit animate-infiniteScroll inline-block tracking-wide">
          We apologize for any inconvenience Website is currently under
          construction
        </h1>
      </div>
      <nav
        className={`flex items-center z-30 w-full h-28 py-4 px-4 transition-colors duration-500
      backdrop-blur-lg ${isVideoVisible ? "bg-creatBlue/50" : "bg-creatBlue"} `}
      >
        <span
          className="mr-auto lg:absolute lg:left-1/2 z-10
        lg:-translate-x-1/2 lg:top-1/2 lg:-translate-y-1/2"
        >
          <Link href="/">
            <Logo />
          </Link>
        </span>
        <div className="hidden lg:flex w-full">
          <Menu />
        </div>
        <Bars3Icon
          onClick={() => {
            setMenuState(!menuState);
          }}
          className="lg:hidden h-12 w-12 ml-auto text-zinc-100 z-10"
        />
      </nav>

      {/* mobile menu */}
      <div
        className={`lg:hidden absolute top-0 right-0 h-screen flex justify-end
      w-screen transition-transform duration-100
      ${!menuState ? "translate-x-full" : ""}`}
      >
        {/* escape div */}
        <div
          onClick={() => {
            setMenuState(false);
          }}
          className="absolute w-full h-full"
        />
        {/* escape div */}
        <div
          className={`bg-creatBlue ${isVideoVisible && "bg-creatBlue/50 backdrop-blur-lg"}
        transition-colors duration-500
        w-[calc(100vw-80px-32px)] h-[calc(100%-80px-32px-32px)] mt-[calc(80px+32px+32px)]`}
        >
          <Menu />
        </div>
      </div>
      {/* mobile menu */}
    </div>
  );
};
export default Navbar;
