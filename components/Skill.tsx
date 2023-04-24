import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

type Props = {
  directionLeft?: boolean;
  src: string;
  scale: number;
};

const Skill = ({ directionLeft, src, scale }: Props) => {
  const [width, setWidth] = useState(0);
  const handleWindowResize = () => {
    setWidth(window.innerWidth);
  };
  useEffect(() => {
    handleWindowResize();
    window.addEventListener("resize", handleWindowResize);
    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  const isMobile = width < 768;
  const attributes = !isMobile
    ? {
        initial: {
          x: directionLeft ? -200 : 200,
          opacity: 0,
        },
        transition: { duration: 1 },
        whileInView: { opacity: 1, x: 0 },
      }
    : {};
  return (
    <div className="group relative flex cursor-pointer">
      <motion.div
        {...attributes}
        className="rounded-full border border-gray-500 object-cover h-24 w-24 md:w-28 md:h-28 xl:w-32 xl:h-32 filter group-hover:grayscale grayscale-0 transition duration-300 ease-in-out"
      >
        <Image
          className={`scale-[${scale}] object-cover overflow-visible`}
          layout="fill"
          src={src}
        />
      </motion.div>
    </div>
  );
};

export default Skill;
