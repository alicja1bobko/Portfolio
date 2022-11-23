import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

type Props = {
  directionLeft?: boolean;
  src: string;
};

const Skill = ({ directionLeft, src }: Props) => {
  return (
    <div className="group relative flex cursor-pointer">
      <motion.div
        initial={{
          x: directionLeft ? -200 : 200,
          opacity: 0,
        }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1, x: 0 }}
        className="rounded-full border border-gray-500 object-cover h-24 w-24 md:w-28 md:h-28 xl:w-32 xl:h-32 filter group-hover:grayscale grayscale-0 transition duration-300 ease-in-out"
      >
        <Image className="scale-[70%] " layout="fill" src={src} />
      </motion.div>
    </div>
  );
};

export default Skill;
