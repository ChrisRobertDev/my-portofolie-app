"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import ExperienceCard from "./ExperienceCard";
import { Experience } from "@/types";

type Props = {
  id?: string;
};

const WorkExperience = (props: Props) => {
  const [expArray, setExpArray] = useState<Experience[] | null>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api/experience", { method: "GET" });
        const data = await response.json();
        console.log(data.experiences);
        setExpArray(data.experiences);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  return (
    <motion.div
      id={props.id}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen flex flex-col relative overflow-hidden items-center justify-evenly 
     text-left md:flex-row max-w-full mx-auto"
    >
      <h3 className="absolute top-10 sm:top-13 uppercase tracking-[20px] text-gray-500 text-2xl z-20">
        Experience
      </h3>

      <div
        className="w-full flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory
       scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#f7ab0a]/80"
      >
        {expArray?.map((exp) => (
          <ExperienceCard key={exp._id} expData={exp} />
        ))}
      </div>
    </motion.div>
  );
};

export default WorkExperience;
