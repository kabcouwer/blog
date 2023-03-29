"use client";

import React from "react";
import { useMediaQuery } from "@material-ui/core";

import { AiOutlineGithub, AiFillLinkedin } from "react-icons/ai";
import PersonalBio from "../content/personal-bio.mdx";
import profilePic from "../../public/images/avatar.jpg";

import AboutDesktopLayout from "../layouts/AboutDesktopLayout";
import AboutMobileLayout from "../layouts/AboutMobileLayout";

const attributes = {
  name: "Kim Abcouwer",
  bio: <PersonalBio />,
  avatar: profilePic,
  githubLink: "https://github.com/kabcouwer",
  githubIcon: <AiOutlineGithub size={28} />,
  linkedinLink: "https://www.linkedin.com/in/kim-abcouwer/",
  linkedinIcon: <AiFillLinkedin size={28} />,
};

export default function About() {
  const isMobile = useMediaQuery("(max-width:480px)");

  return (
    <section
      id="about"
      // className="flex flex-col md:flex-row justify-center mx-auto pb-20 pt-28 bg-slate-600"
      className="bg-slate-600"
    >
      {isMobile ? (
        <AboutMobileLayout attributes={attributes} />
      ) : (
        <AboutDesktopLayout attributes={attributes} />
      )}
    </section>
  );
}
