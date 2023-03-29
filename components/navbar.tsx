"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

import {
  AiOutlineMenu,
  AiOutlineClose,
  AiOutlineGithub,
  AiFillLinkedin,
} from "react-icons/ai";

function Logo() {
  return (
    <Link aria-label="Kim Abcouwer" href="/">
      <motion.svg
        className="text-white h-[25px] md:h-[37px]"
        width="25"
        height="37"
        viewBox="0 0 316 316" // <min-x> <min-y> <width> <height>
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <motion.path
          initial={{
            opacity: 0,
            pathLength: 0,
          }}
          animate={{
            opacity: 1,
            pathLength: 1,
          }}
          transition={{
            duration: 0.5,
            type: "spring",
            stiffness: 50,
          }}
          d="M39 316V0"
          stroke="currentColor"
          strokeWidth={78}
        />
        <motion.path
          initial={{ x: -200, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{
            duration: 0.5,
            type: "spring",
            stiffness: 50,
          }}
          d="M 316 314.998 H 129.852 L 223 218 V 218 Z"
          fill="currentColor"
        />
        <motion.path
          initial={{ x: -200, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{
            duration: 0.5,
            type: "spring",
            stiffness: 50,
          }}
          d="M 122 200 v -90 L 226 0 H 316"
          fill="currentColor"
        />
      </motion.svg>
    </Link>
  );
}

export default function Navbar() {
  // const [domLoaded, setDomLoaded] = useState(false);

  // useEffect(() => {
  //   setDomLoaded(true);
  // }, []);

  // const smoothScrollTo = (anchorTag: string) => {
  //   const element = document.querySelector(anchorTag);
  //   // if on index page, smooth scroll
  //   if (element) {
  //     const navbarHeight = document.getElementById("navigation")!.offsetHeight;
  //     const elementPosition =
  //       element.getBoundingClientRect().top + window.scrollY;
  //     const offsetPosition = elementPosition - navbarHeight;
  //     window.scrollTo({
  //       top: offsetPosition,
  //       behavior: "smooth",
  //     });
  //   }
  // };

  const smoothScrollTo = (anchorTag: string) => {
    const element = document.querySelector(anchorTag);
    // if on index page, smooth scroll
    if (element) {
      const appbarHeight = document.getElementById("navigation").offsetHeight;
      const elementPosition =
        element.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - appbarHeight;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  const [menuOpen, setMenuOpen] = useState(false);

  const handleNav = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    // <>
    // {domLoaded && (
    <nav id="navigation" className="fixed w-full h-24 shadow-xl bg-teal-600">
      <div className="flex justify-between items-center h-full w-full px-4 2xl:px-16">
        <div>
          <Link href="/">
            <Logo />
          </Link>
        </div>
        <div className="hidden sm:flex">
          <div className="hidden sm:flex">
            <Link
              onClick={() => smoothScrollTo("#about")}
              href="/#about"
              className="text-white ml-10 uppercase hover:border-b text-xl"
            >
              About
            </Link>
            <Link
              onClick={() => smoothScrollTo("#projects")}
              href="/#projects"
              className="text-white ml-10 uppercase hover:border-b text-xl"
            >
              Projects
            </Link>
            <Link
              href="/posts"
              className="text-white ml-10 uppercase hover:border-b text-xl"
            >
              Blog
            </Link>
          </div>
        </div>
        <div onClick={handleNav} className="sm:hidden cursor-pointer p1-24">
          <AiOutlineMenu size={25} color={"white"} />
        </div>
      </div>
      <div
        className={
          menuOpen
            ? "fixed left-0 top-0 w-[65%] sm:hidden h-screen bg-[#ecf0f3] p-10 ease-in duration-500"
            : "fixed left-[-100%] top-0 p-10 ease-in duration-500"
        }
      >
        <div className="flex w-full items-center justify-end">
          <div onClick={handleNav} className="cursor-pointer">
            <AiOutlineClose size={25} />
          </div>
        </div>
        <div className="flex-col py-4">
          <div className="py-4 cursor-pointer">
            <Link onClick={() => setMenuOpen(false)} href="/">
              <Logo />
            </Link>
          </div>
          <div className="py-4 cursor-pointer">
            <Link
              onClick={() => {
                setMenuOpen(false);
                smoothScrollTo("#about");
              }}
              href="/#about"
            >
              About
            </Link>
          </div>
          <div className="py-4 cursor-pointer">
            <Link
              onClick={() => {
                setMenuOpen(false);
                smoothScrollTo("#projects");
              }}
              href="/#projects"
            >
              Projects
            </Link>
          </div>
          <div className="py-4 cursor-pointer">
            <Link onClick={() => setMenuOpen(false)} href="/posts">
              Blog
            </Link>
          </div>
          <div className="flex justify-left my-2">
            <div className="">
              <Link
                rel="noopener noreferrer"
                target="_blank"
                href="https://github.com/kabcouwer"
                className="flex gap-2"
              >
                <AiOutlineGithub size={28} />
              </Link>
            </div>
            <div className="">
              <Link
                rel="noopener noreferrer"
                target="_blank"
                href="https://www.linkedin.com/in/kim-abcouwer?trk=profile-badge"
                className="flex gap-2"
              >
                <AiFillLinkedin size={28} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
    // )}
    // </>
  );
}
