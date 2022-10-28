import React from "react";
import { motion } from "framer-motion";
type Props = {};

const About = (props: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen flex flex-col relative text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="sectionHeader">About</h3>
      <motion.img
        initial={{
          x: -200,
          opacity: 0,
        }}
        transition={{
          duration: 1.2,
        }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        src="https://i.ibb.co/zPKVkjz/Screenshot-3.png"
        className="-mb-20 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[500px] xl:h-[600px]"
      />
      <div className="space-y-10">
        <h4>some bcg</h4>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
          accusamus fugiat repellat dicta consectetur, temporibus quidem modi
          expedita nisi laboriosam libero. Necessitatibus, ducimus voluptas
          veritatis sunt soluta ex nostrum itaque.
        </p>
      </div>
    </motion.div>
  );
};

export default About;
