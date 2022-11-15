import React, { useEffect, useLayoutEffect, useRef } from "react";
import Image from "next/image";
import gradient from "../public/gradient.png";
import river from "../public/river.png";
import foreground from "../public/foreground.png";
import hill_left from "../public/hill_left.png";
import hill_right from "../public/hill_right.png";
import sun from "../public/sun.png";
import gsap from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const Animation = () => {
  let speed = 100;
  const ref = useRef(null);
  const tl = useRef(null);

  useLayoutEffect(() => {
    const element = ref.current;
  var tl = gsap.timeline({
    scrollTrigger: {
      trigger: "#animation",
      scrub: 3,
      pin: ".wrapper",
      pinnedContainer: ".wrapper",
      start: 'top top',
      endtrigger: ".hero",
      end: () => "25% top",
  
  },
});
    const ctx = gsap.context(() => {
      tl.to(element.querySelector(".hill_left"), { x: "200px" });
    }, element);
  }, []);
    

   useLayoutEffect(() => {
     const element = ref.current;
     var tl = gsap.timeline({
       scrollTrigger: {
         trigger: "#animation",
         scrub: 3,
         pin: ".wrapper",
         pinnedContainer: ".wrapper",
         start: "top top",
         endtrigger: ".hero",
         end: () => "10% top",
       },
     });
     const ctx = gsap.context(() => {
       tl.to(element.querySelector(".hill_right"), { x: "-200px" });
     }, element);
   }, []);
  
     useLayoutEffect(() => {
       const element = ref.current;
       var tl = gsap.timeline({
         scrollTrigger: {
           trigger: "#animation",
           scrub: 3,
           pin: ".wrapper",
           pinnedContainer: ".wrapper",
           start: "top top",
           endtrigger: ".hero",
           end: () => "10% top",
      
         },
       });
       const ctx = gsap.context(() => {
         tl.to(element.querySelector(".foreground"), { y: "0px" });
       }, element);
     }, []);
  
       useLayoutEffect(() => {
         const element = ref.current;
         var tl = gsap.timeline({
           scrollTrigger: {
             trigger: "#animation",
             scrub: 3,
             pin: ".wrapper",
             pinnedContainer: ".wrapper",
             start: "top top",
             endtrigger: ".hero",
             end: () => "10% top" ,
           
           },
         });
         const ctx = gsap.context(() => {
           tl.to(element.querySelector(".sun"), { y: "0px" });
         }, element);
       }, []);



  return (
    <>
    <div
      ref={ref}
      style={{
        backgroundImage: `url(${gradient.src})`,
      }}
      className="min-h-[100vh] relative translate-y-[-88px] object-cover bcg"
    >
      <div
        className="absolute"
        style={{ top: "0px", left: "-200px", zIndex: 5 }}
      >
        <Image className="hill_left " src={hill_left} objectFit="cover" />
      </div>

      <div className="absolute " style={{ right: " -200px", zIndex: 4 }}>
        <Image className="hill_right" src={hill_right} objectFit="cover" />
      </div>

      <Image
        className="absolute foreground z-20 w-full translate-y-[350px]"
        src={foreground}
        objectFit="cover"
        layout="fill"
      />
      <Image
        className="absolute sun z-4 w-full translate-y-[-550px]"
        src={sun}
        objectFit="cover"
        layout="fill"
      />
      <Image className="z-10" src={river} layout="fill" objectFit="cover" />
     
    </div>
   
    </>
  );
};;

export default Animation;
