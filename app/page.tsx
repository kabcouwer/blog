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
    <section>
      <div className="container mx-auto px-5 md:py-32 pt-10 pb-20 cursor-auto">
        <div className="md:w-4/5 mx-auto flex flex-wrap">
          <div className="flex md:w-1/2 w-full items-center justify-center md:py-8 cursor-auto">
            <Image
              alt="Hero Image"
              src={heroImage}
              width={150}
              priority />
          </div>
          <div className="flex flex-wrap md:w-1/2 w-full items-center md:pl-10 md:py-12 pt-6 cursor-auto">
            <motion.div
              initial={{ opacity: 0, y: "-100vh" }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              <h1 className="text-red font-bold text-5xl pt-6">Hello!</h1>
              <p className="text-black dark:text-white text-2xl pt-6 max-w-[460px]">
                I&apos;m Kim and I&apos;m a software developer based in Denver,
                CO.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
