import Link from "next/link";
import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircles from "./BackgroundCircles";

type Props = {};

const Hero = (props: Props) => {
  const [text, count] = useTypewriter({
    words: ["Hi, I'm Aliz", "I love to code <3", "Make yourself at home :)"],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <div className="h-screen w-screen  flex flex-col space-y-3 items-center justify-center text-center overflow-hidden">
      <BackgroundCircles />
      <img
        src="https://media-exp1.licdn.com/dms/image/D4D03AQGSJOFfTI9uOQ/profile-displayphoto-shrink_800_800/0/1666013036629?e=1672272000&v=beta&t=QBNtknbeAyqFzTzkV4K4c8qB0_AQHQjX471hpBr308A"
        alt="profile pic"
        className="relative rounded-full h-32 w-32 mx-auto object-cover"
      />
      <div className="z-20">
        <h2 className="text-sm uppercase text-gray-500 tracking-[12px]">
          Junior Frontend <br /> Developer
        </h2>
        <h1 className="text-4xl lg:text-6xl font-semibold ">
          <span>{text}</span>
          <Cursor cursorColor="#F7AB0A" />
        </h1>
        <div className="pt-5">
          <Link href="#about">
            <button className="heroButton">About</button>
          </Link>
          <Link href="#experience">
            <button className="heroButton">Experience</button>
          </Link>
          <Link href="#skills">
            <button className="heroButton">Skills</button>
          </Link>
          <Link href="#projects">
            <button className="heroButton">Projects</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
