import { motion } from "framer-motion";

type Props = {};
const projects = [1, 2, 3, 4];
const Projects = (props: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen relative flex flex-col overflow-hidden text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0"
    >
      <h3 className="sectionHeader">Projects</h3>
      <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20">
        {/* Projects */}
        {projects.map((project, i) => (
          <div className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen">
            <motion.img
              initial={{
                y: -300,
                opacity: 0,
              }}
              transition={{ duration: 1 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/512px-HTML5_logo_and_wordmark.svg.png?20170517184425"
              alt=""
            />
            <div className="space-y-10 px-0 md:px-10 max-w-6xl">
              <h4 className="text-4xl font-semibold text-center">
                <span className="underline decoration-[#F7AB0A]/50">
                  Case study {i + 1} of {projects.length}:
                </span>{" "}
                Quiz
              </h4>
              <p className="text-lg text-center mf:text-left">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos
                aut, quam repudiandae commodi, id magnam, vel pariatur quas
                ullam maxime quidem deserunt consequatur. Praesentium laboriosam
                culpa, saepe sit soluta consectetur hic qui sint aperiam
                repellendus reiciendis illum error consequuntur quasi!
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[500px] -skew-y-12 blur-sm"></div>
    </motion.div>
  );
};

export default Projects;
