import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { ReactNode } from "react";

export interface CardServicesProps {
  title: string;
  description: ReactNode;
  icon: IconProp;
  link: string;
}

const Card = ({ title, description, icon, link }: CardServicesProps) => {
  return (
    <div className="flex flex-col items-center w-4/5 h-fit lg:pt-32 pt-24 pb-4">
      <div
        className="lg:w-32 w-24 lg:h-32 h-24 aspect-square rounded-full bg-neutral-800 z-10
          flex items-center justify-center absolute top-4 drop-shadow border-2 border-neutral-700"
      >
        <FontAwesomeIcon
          icon={icon}
          className="w-full aspect-square h-auto text-neutral-300 lg:p-8 p-6"
        />
      </div>
      <div
        className="flex flex-col items-center lg:gap-y-4 gap-y-2 lg:p-8 p-6
      bg-neutral-800 rounded-2xl w-full border-2 border-neutral-700 drop-shadow-lg"
      >
        <h2 className="lg:text-3xl sm:text-xl text-lg text-zinc-100 text-nowrap">
          {title}
        </h2>
        <span className="lg:w-2/3 text-wrap  h-full text-neutral-400 lg:text-xl leading-tight text-center inline">
          {description}
        </span>
        <Link href={link} className="group">
          <button
            className="lg:px-6 lg:py-2 px-3 py-1 bg-zinc-100 rounded-lg drop-shadow-xl
          group-hover:bg-neutral-900 duration-200 transition-colors"
          >
            <p
              className="text-[#242424] group-hover:text-neutral-100
              duration-200 transition-colors font-semibold lg:text-xl"
            >
              Daha ətraflı
            </p>
          </button>
        </Link>
      </div>
    </div>
  );
};
export default Card;
