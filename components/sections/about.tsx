"use client";

import React, { useState, useCallback, useEffect } from "react";

import { AiOutlineGithub, AiFillLinkedin } from "react-icons/ai";
import PersonalBio from "../content/personal-bio.mdx";
import profilePic from "../../public/images/avatar.jpg";

import AboutDesktopLayout from "../layouts/AboutDesktopLayout";
import AboutMobileLayout from "../layouts/AboutMobileLayout";

const attributes = {
  name: "Kim Abcouwer",
  avatar: profilePic,
  githubLink: "https://github.com/kabcouwer",
  githubIcon: <AiOutlineGithub size={28} />,
  linkedinLink: "https://www.linkedin.com/in/kim-abcouwer/",
  linkedinIcon: <AiFillLinkedin size={28} />,
  bio: <PersonalBio />,
};

const useMediaQuery = (width: number) => {
  const [targetReached, setTargetReached] = useState(false);

  const updateTarget = useCallback((e: any) => {
    if (e.matches) {
      setTargetReached(true);
    } else {
      setTargetReached(false);
    }
  }, []);

  useEffect(() => {
    const media = window.matchMedia(`(max-width: ${width}px)`);
    media.addEventListener("change", updateTarget);

    // Check on mount (callback is not called until a change occurs)
    if (media.matches) {
      setTargetReached(true);
    }

    return () => media.removeEventListener("change", updateTarget);
  }, [width, updateTarget]);

  return targetReached;
};

export default function About() {
  const isMobile = useMediaQuery(480);

  return (
    <section
      id="about"
      // className="flex flex-col md:flex-row justify-center mx-auto pb-20 pt-28 bg-slate-600"
      className="bg-slate-600"
    >
      <div>
        {isMobile ? (
          <AboutMobileLayout attributes={attributes} />
        ) : (
          <AboutDesktopLayout attributes={attributes} />
        )}
      </div>
    </section>
  );
}
