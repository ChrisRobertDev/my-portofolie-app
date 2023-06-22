"use client";

import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircle from "./BackgroundCircle";
import Image from "next/image";
import Link from "next/link";

type Props = {};

export default function Hero({}: Props) {
  const [text, count] = useTypewriter({
    words: ["Hi, I'm Cristian Robert Dinu", "Tester text incoming"],
    loop: true,
    delaySpeed: 2000,
    typeSpeed: 100,
  });
  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
      <BackgroundCircle />
      <Image
        className="relative shadow-lg rounded-full mx-auto object-cover"
        src="/images/profile.png"
        alt="Profile image"
        width={128}
        height={128}
      />
      <div className="z-20">
        <h2 className="text-md uppercase text-neutral-400 pb-2 tracking-[15px]">
          Software Engineer
        </h2>
        <h1 className="text-5xl lg:text-6xl font-semibold px-10">
          <span className="mr-3">{text}</span>
          <Cursor cursorColor="#f7ab0a" />
        </h1>

        <div className="pt-5">
          <Link href="#about">
            <button className="hero-button">About</button>
          </Link>
          <Link href="#experience">
            <button className="hero-button">Experience</button>
          </Link>
          <Link href="#projects">
            <button className="hero-button">Projects</button>
          </Link>
          <Link href="#skills">
            <button className="hero-button">Skills</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
