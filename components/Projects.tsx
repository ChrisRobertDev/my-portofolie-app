"use client";
import { urlForImage } from "@/sanity/lib/image";
import { Project } from "@/types";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

type Props = {
  id: string;
};

const Projects = (props: Props) => {
  const [projects, setProjects] = useState<Project[] | null>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api/projects", { method: "GET" });
        const data = await response.json();
        // console.log(data.projects);
        setProjects(data.projects);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);
  return (
    <div
      id={props.id}
      className="h-screen relative flex flex-col overflow-hidden text-left 
      md:flex-row max-w-full justify-evenly
      mx-auto items-center z-0"
    >
      <h3 className="absolute top-20 sm:top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Projects
      </h3>

      <div
        className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20
       scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#f7ab0a]/80"
      >
        {projects?.map((project) => (
          <div
            key={project?._id}
            className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5
            items-center justify-center p-20 md:p-44 h-screen
          "
          >
            {/* <motion.img
              initial={{ y: -300, opacity: 0 }}
              transition={{ duration: 1 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/android/android-original.svg"
              alt="project image"
              className="w-32 h-32 sm:w-64 sm:h-64"
            /> */}
            <Link href={project?.linkToBuild} target="_blank">
              <Image
                src={urlForImage(project?.image).url()}
                alt="project image"
                width={1280}
                height={720}
                className="w-64 h-48 sm:w-64 sm:h-48 object-contain hover:scale-95"
              />
            </Link>
            <div className="space-y-10 px-0 md:px-10 max-w-6xl">
              <h4 className="text-xl sm:text-4xl font-semibold text-center underline decoration-[#f7ab0a]/50">
                {project?.title}
              </h4>
              <div className="grid grid-cols-6 sm:flex sm:flex-row space-x-2 my-2">
                {project?.technologies.map((t) => (
                  <img
                    key={t._id}
                    src={t.imageLink}
                    alt="stack logo"
                    className="h-10 w-10 rounded-md"
                  />
                ))}
              </div>
              <p>{project?.summary}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="w-full absolute top-[30%] bg-[#f7ab0a]/10 left-0 h-[500px] -skew-y-12"></div>
    </div>
  );
};

export default Projects;
