"use client";
import { motion } from "framer-motion";
import Image from "next/image";

type Props = {
  imgSource: string;
  directionLeft?: boolean;
  progress?: number;
};
// transition duration-200 ease-in-out
const SkillCard = (props: Props) => {
  return (
    <div className="group relative flex cursor-pointer">
      {/* <motion.img
        initial={{
          x: -200,
          opacity: 0,
        }}
        transition={{ duration: 1.0 }}
        whileInView={{ opacity: 1, x: 0 }}
        src={props.imgSource}
        alt="skill image"
        className="rounded-md  w-16 h-16 md:w-28 md:h-28 xl:w-32 xl:h-32
          group-hover:grayscale "
      /> */}
      <Image
        src={props.imgSource}
        alt="skill image"
        width={16}
        height={16}
        className="rounded-md  w-16 h-16 md:w-28 md:h-28 xl:w-32 xl:h-32
          group-hover:grayscale transition duration-200 ease-in-out"
      />
      <div
        className="absolute opacity-0 group-hover:opacity-80 transition duration-100 ease-in-out 
       group-hover:bg-white h-16 w-16 md:w-28 md:h-28 xl:w-32 xl:h-32 rounded-md z-0"
      >
        <div className="flex items-center justify-center h-full">
          <p className="text-xl md:text-2xl xl:text-3xl font-bold text-black opacity-100">
            {props.progress}%
          </p>
        </div>
      </div>
    </div>
  );
};

export default SkillCard;
