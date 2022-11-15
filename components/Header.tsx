import React from "react";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";

type Props = {};

const Header = (props: Props) => {
  return (
    <header className="header sticky top-0 p-5 flex items-start justify-between max-w-7xl mx-auto xl:items-center z-50">
      <motion.div
        initial={{
          x: -500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.5,
        }}
        className="flex flex-row items-center"
      >
        <SocialIcon
          url="https://discord.com/users/Aliz#7901"
          bgColor="gray"
          style={{ height: 30, width: 30, marginRight: 10, marginLeft: 10 }}
        />
        <SocialIcon
          url="https://www.facebook.com/alicja.bobko.1/"
          bgColor="transparent"
          fgColor="gray"
        />
        <SocialIcon
          url="https://github.com/alicja1bobko"
          bgColor="transparent"
          fgColor="gray"
        />
        <SocialIcon
          url="https://open.spotify.com/user/inkantator?si=43014949160c44e0"
          bgColor="transparent"
          fgColor="gray"
        />
      </motion.div>
      <motion.div
        initial={{
          x: 500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{ duration: 1.5 }}
        className="flex flex-row items-center text-gray-300 cursor-pointer"
      >
        <SocialIcon
          network="email"
          bgColor="transparent"
          fgColor="gray"
          className="cursor-pointer"
        />
        <p className="uppercase hidden md:inline-flex tex-sm text-gray-400">
          Get In Touch
        </p>
      </motion.div>
    </header>
  );
};

export default Header;
