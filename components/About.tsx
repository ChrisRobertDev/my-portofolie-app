"use client";
import React from "react";
import { motion } from "framer-motion";
import { Image } from "sanity";
import { urlForImage } from "@/sanity/lib/image";

type Props = {
  id?: string;
  className?: string;
  image?: any;
  description?: string;
};

const About = (props: Props) => {
  return (
    <motion.div
      id={props.id}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className={`flex flex-col relative h-screen text-center md:text-left md:flex-row 
     max-w-7xl px-10 justify-evenly mx-auto items-center ${props.className}`}
    >
      <h3 className="absolute top-20 uppercase tracking-[20px] text-gray-500 text-2xl">
        About
      </h3>
      <motion.img
        initial={{
          x: -200,
          opacity: 0,
        }}
        whileInView={{
          x: 0,
          opacity: 1,
        }}
        transition={{
          duration: 1.2,
        }}
        viewport={{ once: true }}
        src={urlForImage(props?.image).url()}
        alt="About image"
        className=" mt-20 mb-0 md:mb-0 flex-shrink-0 w-40 h-40 sm:w-56 sm:h-56 sm:rounded-3xl rounded-full object-cover 
         md:rounded-lg md:w-56  md:h-auto xl:w-[400px] xl:h-[600px]"
      />
      <div className="space-y-10 px-0 md:px-10">
        <h4 className="text-2xl md:text-4xl xl:text-4xl font-semibold">
          Here is a{" "}
          <span className="underline decoration-[#f7ab0a]/50">little</span>{" "}
          background:
        </h4>
        <p className=" text-[15px] sm:text-base">{props.description}</p>
      </div>
    </motion.div>
  );
};
//"/images/about.jpg"
export default About;
