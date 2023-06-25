"use client";
import { useEffect, useState } from "react";
import { scroller } from "react-scroll";
import { ArrowUpCircleIcon } from "@heroicons/react/24/solid";

const ScrollButton = () => {
  const [showScrollButton, setShowScrollButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      setShowScrollButton(scrollTop > 0); // Adjust the condition based on when you want to show the button
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    scroller.scrollTo("top", {
      duration: 500, // Adjust the scroll duration as needed
      smooth: "easeInOutQuart", // Adjust the scroll easing as needed
    });
  };

  return (
    showScrollButton && (
      <div
        className="flex items-center justify-end sticky sm:bottom-10 sm:mr-10
        bottom-5 mr-5"
      >
        <button
          className=" rounded-full shadow-lg hover:bg-white-800 focus:outline-none"
          onClick={scrollToTop}
        >
          <ArrowUpCircleIcon
            className="w-16 h-16 rounded-full filter grayscale
             hover:grayscale-0 hover:scale-95 cursor-pointer"
          />
        </button>
      </div>
    )
  );
};

export default ScrollButton;
