"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

import {
  AiOutlineMenu,
  AiOutlineClose,
  AiOutlineGithub,
  AiFillLinkedin,
} from "react-icons/ai";

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function Logo() {
  return (
    <Link aria-label="Kim Abcouwer" href="/">
      <motion.svg
        className="text-black dark:text-white h-[25px] md:h-[37px]"
        onClick={scrollToTop}
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
  // smooth scroll hook
  const [navClick, setNavClick] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      const hash = window.location.hash;
      if (hash) {
        const element = document.querySelector(hash);
        if (element) {
          const navbarHeight = document.getElementById("navbar")!.offsetHeight;
          const elementPosition =
            element.getBoundingClientRect().top + window.scrollY;
          const offsetPosition = elementPosition - navbarHeight;
          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth",
          });
        }
      }
    }, 250);
  }, [navClick]);

  const toggleNavClick = () => setNavClick((oldVal) => !oldVal);

  // mobile navbar hook
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNav = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav
      id="navbar"
      className="sticky top-0 z-30 w-full h-24 shadow-xl bg-white dark:bg-black"
    >
      <div className="flex justify-between items-center h-full w-full px-4 2xl:px-16">
        <div>
          <Logo />
        </div>
        <div className="hidden sm:flex">
          <div className="hidden sm:flex">
            <Link
              href="/"
              onClick={scrollToTop}
              className="text-black dark:text-white ml-10 uppercase hover:text-blue text-xl"
            >
              Home
            </Link>
            <Link
              href="/about"
              // onClick={toggleNavClick}
              className="text-black dark:text-white ml-10 uppercase hover:text-blue text-xl"
            >
              About
            </Link>
            <Link
              href="/#projects"
              scroll={false}
              onClick={toggleNavClick}
              className="text-black dark:text-white ml-10 uppercase hover:text-blue text-xl"
            >
              Projects
            </Link>
            <Link
              href="/posts"
              className="text-black dark:text-white ml-10 uppercase hover:text-blue text-xl"
            >
              Blog
            </Link>
          </div>
        </div>
        <div onClick={handleNav} className="sm:hidden cursor-pointer p1-24">
          <AiOutlineMenu size={25} />
        </div>
      </div>
      <div
        className={
          menuOpen
            ? "fixed left-0 top-0 w-[100%] sm:hidden h-screen bg-white dark:bg-black p-10 ease-in duration-500"
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
            <Logo />
          </div>
          <div className="py-4 cursor-pointer">
            <Link
              href="/"
              onClick={() => {
                setMenuOpen(false);
                scrollToTop();
              }}
            >
              Home
            </Link>
          </div>
          <div className="py-4 cursor-pointer">
            <Link
              href="/about"
              onClick={() => {
                setMenuOpen(false);
                // toggleNavClick();
              }}
            >
              About
            </Link>
          </div>
          <div className="py-4 cursor-pointer">
            <Link
              href="/#projects"
              scroll={false}
              onClick={() => {
                setMenuOpen(false);
                toggleNavClick();
              }}
            >
              Projects
            </Link>
          </div>
          <div className="py-4 cursor-pointer">
            <Link href="/posts" onClick={() => setMenuOpen(false)}>
              Blog
            </Link>
          </div>
          <div className="flex justify-left my-2">
            <Link
              rel="noopener noreferrer"
              target="_blank"
              href="https://github.com/kabcouwer"
              onClick={() => setMenuOpen(false)}
              className="flex gap-2"
            >
              <AiOutlineGithub size={28} />
            </Link>
            <Link
              rel="noopener noreferrer"
              target="_blank"
              href="https://www.linkedin.com/in/kim-abcouwer?trk=profile-badge"
              onClick={() => setMenuOpen(false)}
              className="flex gap-2"
            >
              <AiFillLinkedin size={28} />
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
