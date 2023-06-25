"use client";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import WorkExperience from "@/components/WorkExperience";
import { Element } from "react-scroll";
import ScrollButton from "@/components/ScrollButton";
import { useEffect, useState } from "react";
import { PageInfo } from "@/types";

// import ScrollToTopButton from "@/components/ScrollToTopButton";
// overflow-x-hidden overflow-scroll scrollbar  scrollbar-track-gray-400/20 scrollbar-thumb-[#f7ab0a]/80
export default function Home() {
  const [pageInfo, setPageInfo] = useState<PageInfo | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api/pageInfo", { method: "GET" });
        const data = await response.json();
        // console.log(data.pageInfo);
        setPageInfo(data.pageInfo);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  if (pageInfo === null) {
    return (
      <div className="h-screen flex items-center justify-center text-center">
        Loading...
      </div>
    );
  }
  return (
    <main
      className="bg-[rgb(36,36,36)] text-white h-screen
      z-0 "
    >
      {/* Header */}
      <Element name="top">
        <Header />
      </Element>

      {/* Hero */}
      <Hero id="hero" pageInfo={pageInfo} />

      {/* About*/}
      <About
        image={pageInfo.profilePic}
        description={pageInfo?.backgroundInformation}
        id="about"
      />
      {/* Experience*/}
      <WorkExperience id="experience" />
      {/* Projects */}

      <Projects id="projects" />

      {/* Skills */}
      <Skills id="skills" />

      {/* Contact me */}
      <Contact pageInfo={pageInfo} id="contact" />

      {/* <ScrollToTopButton /> */}
      <ScrollButton />
      {/* <div
        className="flex items-center justify-end sticky sm:bottom-10 sm:mr-10
      bottom-5 mr-5"
      >
        <ArrowUpCircleIcon
          className="w-16 h-16 rounded-full filter grayscale
             hover:grayscale-0 cursor-pointer"
        />
      </div> */}
    </main>
  );
}
