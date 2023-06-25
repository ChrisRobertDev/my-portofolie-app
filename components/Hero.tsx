"use client";

import React, { useEffect, useState } from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircle from "./BackgroundCircle";
import Image from "next/image";
import { urlForImage } from "@/sanity/lib/image";
import { PageInfo } from "@/types";

type Props = {
  id?: string;
  className?: string;
  pageInfo: PageInfo;
};

export default function Hero({ id, className, pageInfo }: Props) {
  const [text, count] = useTypewriter({
    words: [
      `Hi, I'm ${pageInfo?.name}`,
      "Welcome to my web portofolio",
      "Enjoy your stay!",
      "Make sure to check the other tabs",
      "Just scroll down...",
      "Why are you still here?",
      "Come on scram *coughes*, I mean scroll!",
      "Check out those buttons.",
      "Shuuu...",
      "Read the about section, or check some projects...",
      "You know this is on a loop right?",
    ],
    loop: true,
    delaySpeed: 2000,
    typeSpeed: 100,
  });

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div
      className={`h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden ${className}`}
    >
      <BackgroundCircle />
      <Image
        className="relative shadow-lg rounded-full mx-auto object-cover"
        src={urlForImage(pageInfo?.heroImage).url()}
        alt="Profile image"
        width={128}
        height={128}
      />
      <div className="z-20">
        <h2 className="text-md uppercase text-neutral-400 pb-2 tracking-[15px]">
          {pageInfo?.role}
        </h2>
        <h1 className="sm:text-3xl md:text-4xl lg:text-5xl font-semibold px-10">
          <span className="mr-3">{text}</span>
          <Cursor cursorColor="#f7ab0a" />
        </h1>

        <div className="pt-5">
          <button
            onClick={() => scrollToSection("about")}
            className="hero-button"
          >
            About
          </button>

          <button
            onClick={() => scrollToSection("experience")}
            className="hero-button"
          >
            Experience
          </button>

          <button
            onClick={() => scrollToSection("projects")}
            className="hero-button"
          >
            Projects
          </button>

          <button
            onClick={() => scrollToSection("skills")}
            className="hero-button"
          >
            Skills
          </button>
        </div>
      </div>
    </div>
  );
}
