import {
  DevicePhoneMobileIcon,
  PhoneIcon,
  MapPinIcon,
} from "@heroicons/react/24/outline";
import { faWhatsapp, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faArrowUpRightFromSquare as faLink } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { AtSymbolIcon } from "@heroicons/react/20/solid";
import Link from "next/link";
const Footer = () => {
  return (
    <div
      id="footer"
      className="relative w-full pb-16 flex flex-col lg:flex-row
        lg:justify-center gap-8 lg:gap-4 bg-creatBlue lg:pt-16 pt-12"
    >
      {/* Social Media */}
      <div
        className="flex flex-col gap-2 pl-4 py-2 lg:p-0 lg:py-4
      border-l-2 lg:border-0 border-zinc-400 hidden"
      >
        <h1 className="text-zinc-100 mb-2 text-lg sm:text-2xl font-semibold text-nowrap">
          Sosial
        </h1>
        <span
          className="flex h-4 sm:h-6 text-sm sm:text-lg text-zinc-300
        hover:text-neutral-400 transition-colors duration-200"
        >
          <Link target="_blank" href="" className="flex">
            <FontAwesomeIcon
              icon={faInstagram}
              className="sm:w-6 w-4 h-auto -translate-x-[1px] mr-2"
            />
            _
          </Link>
        </span>
        <span
          className="flex h-4 sm:h-6 text-sm sm:text-lg text-zinc-300 pl-0
        hover:text-neutral-400 transition-colors duration-200"
        >
          <Link target="_blank" href="_" className="flex">
            <FontAwesomeIcon
              icon={faWhatsapp}
              className="sm:w-6 w-4 h-auto -translate-x-[1px] mr-2"
            />
            _
          </Link>
        </span>
        <span
          className="flex h-4 sm:h-6 text-sm sm:text-lg text-zinc-300 pl-0
        hover:text-neutral-400 transition-colors duration-200"
        >
          <Link target="_blank" href="" className="flex">
            <span className="lg:w-6 w-4 aspect-square fill-zinc-100 mr-2 -translate-x-[1px]">
              <svg viewBox="0 0 14 14">
                <path
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M.5 12.5v-11a1 1 0 0 1 1-1h11a1 1 0 0 1 1 1v11a1 1 0 0 1-1 1h-3V8.76h.71a.61.61 0 0 0 .61-.61v-.77a.611.611 0 0 0-.61-.61h-.67v-.94c0-.84.38-.84.76-.84h.49a.55.55 0 0 0 .43-.18a.58.58 0 0 0 .18-.43v-.74a.618.618 0 0 0-.6-.64H9.65a2.32 2.32 0 0 0-2.39 2.6v1.17h-.64a.61.61 0 0 0-.62.61v.77a.61.61 0 0 0 .62.61h.64v4.74H1.5a1 1 0 0 1-1-1"
                />
              </svg>
            </span>
            _
          </Link>
        </span>
      </div>

      {/* Location */}
      <div className="border-l-2 lg:border-0 border-zinc-400 px-4 lg:py-4">
        <h1
          className="text-zinc-100 lg:mb-4 mb-2 text-lg sm:text-2xl
            font-semibold pl-0.5"
        >
          Adress
        </h1>
        <div
          className="flex flex-col text-sm sm:text-lg
         text-zinc-300"
        >
          <div className="flex flex-col items-start mb-2">
            <h1 className="lg:text-xl font-semibold flex">
              Head Office
              <MapPinIcon className="w-4 h-auto sm:w-6 ml-1" />
            </h1>
            <h1 className="text-neutral-300">Vurghun Residence, 2nd floor</h1>
          </div>
        </div>
      </div>

      {/* Contact */}
      <div
        className="flex flex-col gap-2 pl-4 py-2 lg:p-0 lg:py-4
      border-l-2 lg:border-0 border-zinc-400"
      >
        <h1
          className="text-zinc-100 lg:mb-3 mb-2 text-lg sm:text-2xl
        pl-0.5 font-semibold"
        >
          Contact
        </h1>
        <span
          className="flex h-4 sm:h-6 text-sm sm:text-lg text-zinc-300
        hover:text-neutral-400 transition-colors duration-200"
        >
          <DevicePhoneMobileIcon className="w-4 sm:w-6 mr-2" />
          <Link href="tel:994502242944" className="lg:w-32">
            050 224 29 44
          </Link>
        </span>
        <span
          className="flex h-4 sm:h-6 text-sm sm:text-lg text-zinc-300
        hover:text-neutral-400 transition-colors duration-200"
        >
          <AtSymbolIcon className="w-4 sm:w-6 mr-2" />
          <Link href="mailto:info@creat.az">info@creat.az</Link>
        </span>
      </div>
      <p
        className="absolute text-xs sm:text-sm text-neutral-500 lg:sm:pl-0 pl-2
        bottom-2 left-0 lg:left-1/2 transform lg:-translate-x-[calc(50%-1.5ch)]"
      >
        Built by
        <Link
          target="_blank"
          href="https://github.com/rasulali/"
          className="underline text-neutral-400 pl-1"
        >
          Rasul Ali
        </Link>
      </p>
    </div>
  );
};
export default Footer;
