"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

import {
  AiOutlineMenu,
  AiOutlineClose,
  AiOutlineGithub,
  AiFillLinkedin,
} from "react-icons/ai";

const navItems = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "About",
    path: "/about",
  },
  {
    name: "Projects",
    path: "/projects",
  },
  // {
  //   name: "Blog",
  //   path: "/posts",
  // },
];

function Logo() {
  return (
    <Link aria-label="Kim Abcouwer" href="/">
      <motion.svg
        className="text-black dark:text-white h-[25px] md:h-[37px]"
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
  // path functionality
  let pathname = usePathname() || "/";
  if (pathname.includes("/posts/")) {
    pathname = "/posts";
  }

  // mobile navbar hook
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNav = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav
      id="navbar"
      className="sticky top-0 z-30 h-24 shadow-xl bg-white dark:bg-black"
    >
      <div className="flex justify-between items-center h-full w-full px-4 2xl:px-16">
        <div>
          <Logo />
        </div>
        <div className="hidden sm:flex">
          <div className="hidden sm:flex">
            {navItems.map((link, index) => {
              const isActive = link.path === pathname;
              return (
                <Link
                  key={index}
                  href={link.path}
                  // className="text-black dark:text-white ml-10 uppercase hover:text-blue text-xl"
                  className={
                    isActive
                      ? "text-blue ml-10 uppercase hover:scale-125 text-xl"
                      : "text-black dark:text-white ml-10 uppercase hover:scale-125 text-xl"
                  }
                >
                  {link.name}
                </Link>
              );
            })}
          </div>
        </div>
        <div
          onClick={handleNav}
          className="sm:hidden text-black dark:text-white cursor-pointer p1-24"
        >
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
          <div
            onClick={handleNav}
            className="text-black dark:text-white cursor-pointer"
          >
            <AiOutlineClose size={25} />
          </div>
        </div>
        <div className="flex-col py-4">
          <div className="py-4 text-black dark:text-white cursor-pointer">
            <Logo />
          </div>
          {navItems.map((link, index) => {
            const isActive = link.path === pathname;
            return (
              <div className="py-4 cursor-pointer" key={index}>
                <Link
                  href={link.path}
                  className={
                    isActive
                      ? "text-blue uppercase hover:scale-125 text-xl"
                      : "text-black dark:text-white uppercase hover:scale-125 text-xl"
                  }
                  onClick={() => setMenuOpen(false)}
                >
                  {link.name}
                </Link>
              </div>
            );
          })}
          <div className="flex justify-left my-2">
            <Link
              rel="noopener noreferrer"
              target="_blank"
              href="https://github.com/kabcouwer"
              onClick={() => setMenuOpen(false)}
              className="flex gap-2 mr-2 text-black dark:text-white"
            >
              <AiOutlineGithub size={28} />
            </Link>
            <Link
              rel="noopener noreferrer"
              target="_blank"
              href="https://www.linkedin.com/in/kim-abcouwer?trk=profile-badge"
              onClick={() => setMenuOpen(false)}
              className="flex gap-2 mr-2 text-black dark:text-white"
            >
              <AiFillLinkedin size={28} />
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
