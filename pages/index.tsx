import type { NextPage } from 'next'
import Head from "next/head";
import About from "../components/About";
import ContactMe from "../components/ContactMe";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import WorkExperience from "../components/WorkExperience";

const Home: NextPage = () => {
  return (
    <div className="bg-[rgb(36,36,36)] h-screen text-white snap-y snap-proximity overflow-scroll z-0 scroll-smooth">
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

      <section id="hero" className="snap-start ">
        <Hero />
      </section>

      <section id="about" className="snap-center  ">
        <About />
      </section>
      {/* Experience */}
      <section id="experience" className="snap-center"></section>
      {/* Skills */}
      <section id="skills" className="snap-start">
        <Skills />
      </section>
      {/* Projects */}
      <section id="projects" className="snap-start">
        <Projects />
      </section>
      {/* Contact Me */}
      <section id="contact" className="snap-start">
        <ContactMe />
      </section>
    </div>
  );
};

export default Home
