import React from "react";
import { motion } from "framer-motion";
import { Experience } from "@/types";
import { urlForImage } from "@/sanity/lib/image";

type Props = {
  expData: Experience;
};

const ExperienceCard = (props: Props) => {
  return (
    <article
      className="flex flex-col rounded-lg items-center space-y-3 flex-shrink-0 
     w-[500px] md:w-[600px] xl:w-[900px] h-[720px] md:h-[800px] xl:max-h-[900px] snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40 
      cursor-pointer transition-opacity duration-200  overflow-hidden"
    >
      <motion.img
        initial={{ y: -100, opacity: 0 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
        viewport={{ once: true }}
        src={urlForImage(props.expData?.companyImage).url()}
        alt="experience image"
        className="w-20 h-20 sm:w-32 sm:h-32 rounded-full xl:w-[100px] xl:h-[100px] object-cover object-top"
      />
      <div className="px-0 md:px-10">
        <h4 className="text-4xl font-light">{props.expData?.jobTitle}</h4>
        <p className="font-bold text-2xl mt-1">{props.expData?.company}</p>
        <div className="flex space-x-2 my-2">
          {props.expData?.technologies.map((t) => (
            <img
              key={t._id}
              src={t.imageLink}
              alt="stack logo"
              className="h-10 w-10 rounded-md"
            />
          ))}
        </div>
        <p className="uppercase py-2 text-gray-300">Started work - Ended</p>
        <div className="max-w-sm">
          <ul className="list-disc space-y-2 ml-5 text-sm whitespace-normal">
            {props.expData?.points.map((p, i) => (
              <li key={i} className="">
                {p}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </article>
  );
};

export default ExperienceCard;
