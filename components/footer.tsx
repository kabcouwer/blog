import React from "react";
import Link from "next/link";

import Triangle from "../components/svgs/triangle.svg";
import Square from "../components/svgs/square.svg";
import Circle from "../components/svgs/circle.svg";

export default function Footer() {
  return (
    <footer className="absolute bottom-0 w-full h-24">
      <h2 className="md:mx-8 mx-4 text-2xl">Contact</h2>
      <div className="flex items-start items-center px-4 2xl:px-16 my-4 md:mx-4">
        <Link
          rel="noopener noreferrer"
          target="_blank"
          href="https://github.com/kabcouwer"
          className="text-sm font-semibold md:mr-8 mr-4 uppercase text-black dark:text-white hover:underline"
        >
          <div className="flex items-center">
            <div className="fill-red mr-2">
              <Triangle />
            </div>
            Github
          </div>
        </Link>
        <Link
          rel="noopener noreferrer"
          target="_blank"
          href="https://www.linkedin.com/in/kim-abcouwer/"
          className="text-sm font-semibold md:mr-8 mr-4 uppercase text-black dark:text-white hover:underline"
        >
          <div className="flex items-center">
            <div className="fill-yellow mr-2">
              <Square />
            </div>
            Linkedin
          </div>
        </Link>
        <Link
          href="#"
          className="text-sm font-semibold md:mr-8 mr-4 uppercase text-black dark:text-white hover:underline"
        >
          <div className="flex items-center">
            <div className="fill-blue mr-2">
              <Circle />
            </div>
            Resume
          </div>
        </Link>
      </div>
    </footer>
  );
}
