import React, { useEffect, useLayoutEffect, useRef } from "react";
import Image from "next/image";
import gradient from "../public/gradient.png";
import river from "../public/river.png";
import foreground from "../public/foreground.png";
import hill_left from "../public/hill_left.png";
import hill_right from "../public/hill_right.png";
import sun from "../public/sun.png";

import gsap from "gsap/dist/gsap";
// @ts-ignore
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

// import styled from "styled-components";

const Animation = () => {
  let speed = 100;
  const ref = useRef(null);
  const tl = useRef();

  useLayoutEffect(() => {
    const element = ref.current;
    let tl = gsap.timeline();
    tl.fromTo(
      element.querySelector(".hill_left"),
      {
        x: -200,
      },
      {
        x: 100,
        scrollTrigger: {
          trigger: "bcg",
          start: "top top",
          end: "bottom bottom",
          scrub: 1,
          markers: true,
          pin: ".bcg",
          pinSpacing: true,
          // anticipatePin: 1,
        },
      }
    );
  });

  // .fromTo(
  //   element.querySelector(".hill_right"),
  //   {
  //     x: 200,
  //   },
  //   {
  //     x: -200,
  //     scrollTrigger: {
  //       trigger: "bcg",
  //       start: "20% top",
  //       end: "+=200 2000",
  //       scrub: 1,
  //       markers: true,
  //       pin: ".bcg",
  //       pinSpacing: true,
  //       // anticipatePin: 1,
  //     },
  //   }
  // )
  // .fromTo(
  //   element.querySelector(".foreground"),
  //   {
  //     y: 500,
  //   },
  //   {
  //     y: 0,
  //     scrollTrigger: {
  //       trigger: "bcg",
  //       start: "40% top",
  //       end: "+=400 2000",
  //       scrub: 1,
  //       markers: true,
  //       pin: ".bcg",
  //       pinSpacing: true,
  //       // anticipatePin: 1,
  //     },
  //   }
  // );
  // }, []);

  return (
    <div
      ref={ref}
      style={{
        backgroundImage: `url(${gradient.src})`,
        // backgroundSize: "cover",
        // backgroundAttachment: "fixed",
        zIndex: 0,
      }}
      className="h-screen relative translate-y-[-90px] object-cover bcg"
    >
      <div className="absolute" style={{ top: "-90px" }}>
        <Image className="hill_left" src={hill_left} objectFit="cover" />
      </div>
      <div className="absolute " style={{ right: " -200px" }}>
        <Image className="hill_right" src={hill_right} objectFit="cover" />
      </div>

      <Image
        className="foreground absolute z-10 w-full"
        src={foreground}
        objectFit="cover"
        layout="fill"
      />

      <Image src={river} layout="fill" objectFit="cover" />

      {/* <Image src={bcg} layout="fill" objectFit="cover" /> */}
    </div>
  );
};

export default Animation;
