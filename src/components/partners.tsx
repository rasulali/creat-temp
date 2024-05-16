import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useRef } from "react";

interface PartnerProps {
  scrollY: number;
}

const Partners: React.FC<PartnerProps> = ({ scrollY }) => {
  const n = 8;
  return (
    <div>
      <motion.span
        animate={{ x: scrollY * 100 - 60 }}
        transition={{ duration: 0, ease: "linear" }}
        className="flex gap-4"
      >
        {/* {[...Array(n)].map((_, i) => { */}
        {/*   if (i === 0) { */}
        {/*     return <div className="bg-gray-400 h-32 w-32 rounded-lg" >first</div> */}
        {/*   } */}
        {/*   else if (i === n - 1) { */}
        {/*     return <div className="bg-gray-400 h-32 w-32 rounded-lg" >last</div> */}
        {/*   } */}
        {/*   return <div className="bg-gray-400 h-32 w-80 rounded-lg" ></div> */}
        {/* } */}
        {/* )} */}

        <Image
          className="h-32 w-auto drop-shadow-lg"
          src="/partners/zafaroglu.svg"
          alt="Zafaroglu logo"
          width={0}
          height={0}
        />
        <Image
          className="h-32 w-auto"
          src="/partners/knyazli.svg"
          alt="Zafaroglu logo"
          width={0}
          height={0}
        />
        <Image
          className="h-32 w-auto"
          src="/partners/cityhospital.png"
          alt="Zafaroglu logo"
          width={0}
          height={0}
        />
        <Image
          className="h-32 w-auto"
          src="/partners/xurma.jpg"
          alt="Zafaroglu logo"
          width={0}
          height={0}
        />
      </motion.span>
    </div>
  );
};
export default Partners;
