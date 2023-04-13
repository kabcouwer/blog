"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

import heroImage from "../public/images/hero-image.png";

export default function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="max-w-8xl flex flex-col md:flex-row mt-8 mb-24 mx-4 md:mx-12 md:mt-32 lg:m-32">
      <div className="flex-auto flex flex-col items-center justify-center px-2 md:px-0">
        <Image
          alt="Hero Image"
          src={heroImage}
          width={150}
          priority />
      </div>
      <div className="flex-auto flex flex-col items-center justify-center pt-4 md:pt-0 px-2 md:px-0 md:pl-10">
        <motion.div
          initial={{ opacity: 0, y: "-100vh" }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-5xl text-red font-bold mt-6">Hello!</h1>
          <p className="max-w-[460px] text-2xl text-black dark:text-white mt-6 max-w-[460px]">
            I&apos;m Kim and I&apos;m a software developer based in Denver,
            CO.
          </p>
        </motion.div>
      </div>
    </div>
  );
}
