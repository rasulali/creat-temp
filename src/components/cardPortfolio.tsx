import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

interface CardProps {
  src: string | StaticImport;
  alt?: string;
  name: string;
  text?: string;
  link: string;
}
const Card: React.FC<CardProps> = ({
  src,
  alt = "Layihə Fotosu",
  name,
  link,
  text,
}) => {
  return (
    <Link href={link}>
      <motion.div
        whileHover={{
          scale: 1.02,
          transition: {
            duration: 0.1,
            ease: "easeOut",
          },
        }}
        whileTap={{
          scale: 0.99,
          transition: {
            duration: 0.1,
            ease: "easeIn",
          },
        }}
        className="relative lg:max-w-[832px] lg:w-[832px] w-full aspect-[4/3] bg-neutral-500
      lg:rounded-xl sm:rounded-lg rounded-md overflow-hidden"
      >
        <Image
          quality={70}
          priority={true}
          width={1080}
          height={0}
          src={src}
          alt={alt}
          className="h-full object-cover"
        />

        <div
          className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t
          from-[#1d1d1d] via-transparent to-transparent transition-transform duration-100
          flex flex-row"
        >
          <h1
            className="text-zinc-100 font-semibold lg:text-3xl text-lg mt-auto
            lg:mb-6 lg:ml-4 mb-2 ml-2"
          >
            {name}
          </h1>
          <h2
            className="text-zinc-300 font-semibold lg:text-xl text-sm mt-auto
            lg:mb-6 ml-auto lg:mr-4 mb-2 mr-2"
          >
            {text}
          </h2>
        </div>
      </motion.div>
    </Link>
  );
};
export default Card;
