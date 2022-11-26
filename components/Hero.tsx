import Link from "next/link";
import React, { useState } from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import Image, { StaticImageData } from "next/image";
import profilePic from "../public/profile-pic.png";
import profilePicBlack from "../public/profile-pic-bw.png";

type Props = {};

const Hero = (props: Props) => {
  const [text, count] = useTypewriter({
    words: ["Hi, I'm Aliz", "I love to code <3", "Nice to Meet You :)"],
    loop: true,
    delaySpeed: 2000,
  });
  const [src, setSrc] = useState(profilePic);
  const [hovered, setHovered] = useState(false);

  function onPictureHover(pic: StaticImageData, hovered: boolean): void {
    setSrc(pic);
    setHovered(hovered);
  }

  return (
    <>
      <div className="w-screen flex flex-col space-y-3 items-center justify-center text-center overflow-hidden pb-32">
        <div className="relative mb-4">
          <Image
            src={src}
            onMouseEnter={() => onPictureHover(profilePicBlack, true)}
            onMouseLeave={() => onPictureHover(profilePic, false)}
            alt="profile pic"
            height={"224px"}
            width={"224px"}
            className="relative rounded-full mx-auto object-cover z-10"
          />
          <div
            className={`absolute border-4 border-[#bf665f] rounded-full h-56 w-56 ${
              hovered ? "-translate-y-[224px]" : "-translate-y-[220px]"
            }
          ${hovered ? "translate-x-[15px]" : "translate-x-[20px]"}
        transition-all ease-in-out `}
          ></div>
        </div>
        <h2 className="text-sm uppercase text-gray-500 tracking-[12px]">
          Junior Frontend <br /> Developer
        </h2>
        <h1 className="text-4xl lg:text-7xl font-semibold mb-5">
          <span>{text}</span>
          <Cursor cursorColor="#bf665f" />
        </h1>
        <div className="pt-5 ">
          <Link href="#about">
            <button className="heroButton">About</button>
          </Link>

          <Link href="#skills">
            <button className="heroButton">Skills</button>
          </Link>
          <Link href="#projects">
            <button className="heroButton">Projects</button>
          </Link>
          <Link href="#contact">
            <button className="heroButton">Contact</button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Hero;
