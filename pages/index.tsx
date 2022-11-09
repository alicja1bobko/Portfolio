import type { NextPage } from 'next'
import Head from "next/head";
import About from "../components/About";
import Animation from "../components/Animation";
import ContactMe from "../components/ContactMe";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Skills from "../components/Skills";

const Home: NextPage = () => {
  return (
    // <div className="bg-[rgb(36,36,36)] h-screen text-white snap-y snap-proximity overflow-y-scroll overflow-x-hidden z-0 scroll-smooth scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/70">
    <div className="wrapper bg-[rgb(36,36,36)] text-white snap-y snap-proximity overflow-x-hidden z-0  scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/70">
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
      <section className="" id="animation">
        <Animation />
      </section>

      <section id="hero" className=" ">
        <Hero />
      </section>

      <section id="about" className="snap-center  ">
        <About />
      </section>

      <section id="experience" className="snap-center"></section>

      <section id="skills" className="snap-start">
        <Skills />
      </section>

      <section id="projects" className="snap-start">
        <Projects />
      </section>

      <section id="contact" className="snap-start">
        <ContactMe />
      </section>
    </div>
  );
};

export default Home
