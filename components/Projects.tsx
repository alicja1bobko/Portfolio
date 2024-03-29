import { motion } from "framer-motion";
import { projects } from "../data";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { DotProps } from "react-multi-carousel/lib/types";
import Link from "next/link";

type Props = {};

const Projects = (props: Props) => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };

  const CustomDot = ({ index, active, onClick }: DotProps) => {
    return (
      <li
        className={`${active ? "active" : ""} slickdot`}
        onClick={() => onClick?.()}
      ></li>
    );
  };

  return (
    <>
      <h3 className="sectionHeader">Projects</h3>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className=" relative flex flex-col md:flex-row max-w-full  mx-auto items-center z-10 "
      >
        {/* Projects */}
        <Carousel
          swipeable={true}
          draggable={false}
          showDots={true}
          responsive={responsive}
          ssr={true} // means to render carousel on server-side.
          infinite={true}
          keyBoardControl={true}
          transitionDuration={1000}
          containerClass={`w-[100%]`}
          removeArrowOnDeviceType={["tablet", "mobile"]}
          dotListClass=""
          customDot={<CustomDot />}
          focusOnSelect={true}
          itemClass={``}
          className={`z-10`}
        >
          {projects.map((project, i) => {
            return (
              <div className="w-screen flex-shrink-0 flex flex-col space-y-5 items-center justify-center md:p-20 lg:p-28 xl:p-46 p-8 z-10 xl:h-screen">
                <Link key={project._id} href={project.link} className="">
                  <motion.img
                    initial={{
                      y: -300,
                      opacity: 0,
                    }}
                    transition={{ duration: 1 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    src={project.image}
                    alt={project.title}
                    className="max-w-[90%] xl:max-w-[65%] xl:max-h-[65%] cursor-pointer"
                  />
                </Link>

                <div className="space-y-8 max-w-6xl items-center justify-center text-center">
                  <h4 className="text-4xl font-semibold text-center ">
                    {project.title}
                  </h4>
                  <div className="flex flex-wrap items-center space-x-2 justify-center">
                    {project.technologies.map((technology) => (
                      <img
                        className="h-10 "
                        alt={technology.title}
                        src={technology.image}
                      />
                    ))}
                  </div>

                  <p className="text-lg md:text-left text-justify max-w-[90%] xl:max-w-[80%] mx-auto">
                    {project.summary}
                  </p>
                </div>
              </div>
            );
          })}
        </Carousel>
        <div className="w-full absolute top-[30%] bg-[#bf665f]/10 left-0 h-[500px] -skew-y-12 blur-sm z-0"></div>
      </motion.div>
    </>
  );
};

export default Projects;
