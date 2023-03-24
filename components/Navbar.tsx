"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { useState } from "react";

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

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNav = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="fixed w-full h-24 shadow-xl bg-teal-500">
      <div className="flex justify-between items-center h-full w-full px-4 2xl:px-16">
        <div>
          <Logo />
        </div>
        <div className="hidden sm:flex">
          <ul className="hidden sm:flex">
            <Link href="/">
              <li className="text-white ml-10 uppercase hover:border-b text-xl">
                Home
              </li>
            </Link>
            <Link href="#about">
              <li className="text-white ml-10 uppercase hover:border-b text-xl">
                About
              </li>
            </Link>
            <Link href="#projects">
              <li className="text-white ml-10 uppercase hover:border-b text-xl">
                Projects
              </li>
            </Link>
            <Link href="#experience">
              <li className="text-white ml-10 uppercase hover:border-b text-xl">
                Experience
              </li>
            </Link>
            <Link href="/posts">
              <li className="text-white ml-10 uppercase hover:border-b text-xl">
                Blog
              </li>
            </Link>
          </ul>
        </div>
        <div onClick={handleNav} className="sm:hidden cursor-pointer p1-24">
          <AiOutlineMenu size={25} />
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
          <ul>
            <Link href="/">
              <li
                onClick={() => setMenuOpen(false)}
                className="py-4 cursor-pointer"
              >
                Home
              </li>
            </Link>
            <Link href="#about">
              <li
                onClick={() => setMenuOpen(false)}
                className="py-4 cursor-pointer"
              >
                About
              </li>
            </Link>
            <Link href="/projects">
              <li
                onClick={() => setMenuOpen(false)}
                className="py-4 cursor-pointer"
              >
                Projects
              </li>
            </Link>
            <Link href="/experience">
              <li
                onClick={() => setMenuOpen(false)}
                className="py-4 cursor-pointer"
              >
                Experience
              </li>
            </Link>
            <Link href="/posts">
              <li
                onClick={() => setMenuOpen(false)}
                className="py-4 cursor-pointer"
              >
                Blog
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
