"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

import heroImage from "../public/images/hero-image.png";

import Projects from "../components/sections/projects";

export default function Home() {
  return (
    <section>
      <div className="bg-white dark:bg-black">
        <div className="container mx-auto px-5 md:py-32 pb-16 cursor-auto">
          <div className="md:w-4/5 mx-auto flex flex-wrap">
            <div className="md:w-1/2 w-full md:h-auto md:py-8 cursor-auto">
              <Image alt="Fun Shapes" className="" src={heroImage} priority />
            </div>
            <div className="flex flex-wrap justify-normal items-center md:w-1/2 w-full md:pl-10 md:py-12 pt-6 cursor-auto">
              <motion.div
                initial={{ opacity: 0, y: "-100vh" }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
              >
                <h1 className="text-red font-bold text-5xl pt-6">Hello!</h1>
                <p className="text-black dark:text-white text-2xl pt-6 max-w-[460px]">
                  I&apos;m Kim and I&apos;m a software developer based in
                  Denver, CO.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
      <hr className="mx-8 border-1 border-black dark:border-white" />
      <Projects />
    </section>
  );
}
