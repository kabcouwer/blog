import React from "react";
import Link from "next/link";

import Triangle from "../components/svgs/triangle.svg";
import Square from "../components/svgs/square.svg";
import Circle from "../components/svgs/circle.svg";

export default function Footer() {
  return (
    <footer className="w-full h-18 bg-white dark:bg-black">
      <h2 className="mx-8 text-2xl">Contact</h2>
      <div className="flex items-start items-center h-full w-full px-4 2xl:px-16 my-4 mx-4">
        <Link
          href="#"
          className="text-sm font-semibold mr-8 uppercase text-black dark:text-white hover:underline"
        >
          <div className="flex items-center">
            <div className="fill-red mr-2">
              <Triangle />
            </div>
            Github
          </div>
        </Link>
        <Link
          href="#"
          className="text-sm font-semibold mr-8 uppercase text-black dark:text-white hover:underline"
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
          className="text-sm font-semibold mr-8 uppercase text-black dark:text-white hover:underline"
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
