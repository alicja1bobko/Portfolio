import React from "react";
import { motion } from "framer-motion";
import Skill from "./Skill";
type Props = {};

const Skills = (props: Props) => {
  return (
    <div className="h-3/5">
      <h3 className="sectionHeader mt-24">Skills</h3>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="w-full flex flex-col relative text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 justify-center xl:space-y-0 mx-auto items-center mt-16 pb-16"
      >
        <div className="grid grid-cols-3 gap-5">
          <Skill
            src={"https://www.w3.org/html/logo/downloads/HTML5_Badge_512.png"}
            directionLeft
          />
          <Skill
            src={
              "https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/CSS3_logo.svg/800px-CSS3_logo.svg.png"
            }
            directionLeft
          />
          <Skill
            src={"https://www.w3schools.com/whatis/img_js.png"}
            directionLeft
          />
          <Skill
            src={
              "https://vm.pl/assets/media/technologie/javascript/header-typescript.svg"
            }
          />
          <Skill
            src={
              "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png"
            }
          />
          <Skill
            src={"https://avatars.githubusercontent.com/u/67109815?s=280&v=4"}
          />
          <Skill
            src={"https://sass-lang.com/assets/img/logos/logo-b6e1ef6e.svg"}
            directionLeft
          />
          <Skill
            src={
              "https://greensock.com/uploads/monthly_2020_03/tweenmax.png.cf27916e926fbb328ff214f66b4c8429.png"
            }
            directionLeft
          />
          <Skill
            src={
              "https://seeklogo.com/images/N/next-js-icon-logo-EE302D5DBD-seeklogo.com.png"
            }
            directionLeft
          />
        </div>
      </motion.div>
    </div>
  );
};

export default Skills;
