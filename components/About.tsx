import React from "react";
import { motion } from "framer-motion";
import aboutMedium from "../public/about-medium.jpg";
import Image from "next/image";
type Props = {};

const About = (props: Props) => {
  return (
    <>
      <h3 className="sectionHeader pb-16 ">About</h3>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className=" gap-10 flex flex-col relative text-lg font-normal md:space-x-5 md:text-left md:flex-row max-w-7xl px-12 justify-center mx-auto  my-14  "
      >
        <motion.div
          initial={{
            x: -200,
            opacity: 0,
          }}
          transition={{
            duration: 1.5,
          }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="flex-shrink-0 w-64 h-64 md:rounded-lg md:w-64 md:h-95 xl:w-[500px] xl:h-[600px] self-center"
        >
          <Image
            width={600}
            height={600}
            src={aboutMedium}
            objectFit="cover"
            className=" rounded-full md:rounded-lg md:w-64 md:h-95 xl:w-[500px] xl:h-[600px]  "
          />
        </motion.div>

        <div className="space-y-3 text-[#a3abc3]">
          <h4 className="text-4xl font-normal">Hello!</h4>
          <p className="text-justify tracking-wide">
            My name is Alicja. I'm 29 years old web developer located in Warsaw,
            Poland. Before I dived into programming and discovered it as my new
            passion, I've done many things which led me to this point, some of
            them are still ongoing journeys:
          </p>
          <ul className="pl-2 leading-8 aboutList">
            <li>💡 working as a Lighting Designer</li>
            <li>🤖 studying Robotics and Electrotechnics </li>
            <li>🏠 interior design </li>
            <li>🎨 drawing and painting </li>
            <li>☮️ yoga </li>
            <li>👩‍🍳 cooking addict </li>
            <li>🌍 ecology and living sustainable lifestyle</li>
            <li>🎸 playing classical guitar </li>
            <li>🚴‍♀️ discovering my city from different perspective </li>
            <li>🏊‍♀️ swimming section at the University </li>
          </ul>
        </div>
      </motion.div>
    </>
  );
};

export default About;
