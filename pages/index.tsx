import type { NextPage } from 'next'
import Head from "next/head";
import About from "../components/About";
import Animation from "../components/Animation";
import ContactMe from "../components/ContactMe";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
// @ts-ignore
import gsap from "gsap/dist/gsap";
// @ts-ignore
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import React, { useEffect } from "react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const Home: NextPage = () => {


  return (
    // <div className="bg-[rgb(36,36,36)] h-screen text-white snap-y snap-proximity overflow-y-scroll overflow-x-hidden z-0 scroll-smooth scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/70">
    <div className=" bg-[rgb(36,36,36)] text-white overflow-x-hidden z-0 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/70">
      <Head>
        <title>Aliz's stuff</title>
        <meta name="description" content="Portfolio" />
        <meta
          name="keyword"
          content="portfolio, javascript, typescript, nextjs, tailwind, developer"
        />
        <link rel="icon" href="/rainbow.ico" />
      </Head>

      <Header />
      <div className="wrapper">
        <section className="" id="animation">
          <Animation />
        </section>
        {/* blending colors */}
        <div className="translate-y-[-90px] h-96 w-full bg-gradient-to-b from-[#251e3d] to-transparent"></div>

        <section id="hero" className="snap">
          <Hero />
        </section>

        <section id="about" className="snap">
          <About />
        </section>

        <section id="experience" className="snap"></section>

        <section id="skills" className="snap">
          <Skills />
        </section>

        <section id="projects" className="snap">
          <Projects />
        </section>

        <section id="contact" className="snap">
          <ContactMe />
        </section>
      </div>
    </div>
  );
};

export default Home
