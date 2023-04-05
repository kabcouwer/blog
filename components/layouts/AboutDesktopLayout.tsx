import React from "react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";

type AboutDesktopProps = {
  attributes: {
    name: string;
    avatar: StaticImageData;
    githubLink: string;
    githubIcon: JSX.Element;
    linkedinLink: string;
    linkedinIcon: JSX.Element;
    bio: JSX.Element;
  };
};

export default function AboutDesktopLayout(props: AboutDesktopProps) {
  const {
    name,
    bio,
    avatar,
    githubLink,
    githubIcon,
    linkedinLink,
    linkedinIcon,
  } = props.attributes;

  return (
    <div className="container mx-auto px-5 py-24 cursor-auto">
      <div className="md:w-4/5 mx-auto flex flex-wrap">
        <div className="md:w-1/2 w-full md:pl-10 md:py-6 mt-6 md:mt-0 cursor-auto">
          <p className="text-black dark:text-white my-1 max-w-[460px]">
            Hi, I&apos;m
          </p>
          <h1 className="text-black dark:text-white font-bold text-3xl">
            {name}
          </h1>
          <div className="flex justify-left mt-2 mb-6">
            <div className="">
              <Link
                rel="noopener noreferrer"
                target="_blank"
                href={githubLink}
                className="flex gap-2"
              >
                {githubIcon}
              </Link>
            </div>
            <div className="">
              <Link
                rel="noopener noreferrer"
                target="_blank"
                href={linkedinLink}
                className="flex gap-2"
              >
                {linkedinIcon}
              </Link>
            </div>
          </div>
          <div className="leading-relaxed text-black dark:text-white max-w-[460px]">
            {bio}
          </div>
        </div>
        <div className="md:py-8 md:m-auto align-center cursor-auto">
          <Image
            alt={name}
            className="rounded-full"
            src={avatar}
            placeholder="blur"
            width={200}
            priority
          />
        </div>
      </div>
    </div>
  );
}
