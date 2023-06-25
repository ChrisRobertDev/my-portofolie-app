"use client";
import { motion } from "framer-motion";
import SkillCard from "./SkillCard";
import { useEffect, useState } from "react";
import { Skill } from "@/types";

type Props = {
  id: string;
};
//
//
const Skills = (props: Props) => {
  const [skills, setSkills] = useState<Skill[] | null>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api/skills", { method: "GET" });
        const data = await response.json();
        // console.log(data.skills);
        setSkills(data.skills);
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
      className="h-screen flex relative justify-center items-center
      flex-col text-center md:text-left xl:flex-row xl:space-y-0
      max-w-[2000px] xl:px-10  px-0 min-h-screen mx-auto"
    >
      <h3 className="absolute top-20 uppercase tracking-[20px] text-gray-500 text-2xl">
        Skills
      </h3>
      <h3 className="absolute top-36 uppercase tracking-[3px] text-gray-500 text-sm">
        Hover over a skill for currency proficiency
      </h3>
      <div className="grid grid-cols-3 gap-6 sm:grid-cols-4 xl:grid-cols-6 sm:gap-8">
        {skills
          ?.sort((a, b) => a.title.localeCompare(b.title))
          .map((skill) => (
            <SkillCard
              key={skill._id}
              directionLeft={true}
              imgSource={skill?.imageLink}
              progress={skill.progress}
            />
          ))}

        {/* <Skill
          directionLeft={true}
          imgSource="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
        />
        <Skill
          directionLeft={true}
          imgSource="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
        />
        <Skill
          directionLeft={true}
          imgSource="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
        />
        <Skill
          directionLeft={true}
          imgSource="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
        />
        <Skill
          directionLeft={true}
          imgSource="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
        />
        <Skill
          directionLeft={true}
          imgSource="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg"
        />
        <Skill
          directionLeft={true}
          imgSource="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original-wordmark.svg"
        />
        <Skill
          directionLeft={true}
          imgSource="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jquery/jquery-original-wordmark.svg"
        />
        <Skill
          directionLeft={true}
          imgSource="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-plain-wordmark.svg"
        /> */}
      </div>
    </motion.div>
  );
};

export default Skills;
