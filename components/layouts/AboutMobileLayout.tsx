import React from "react";
import Image, { StaticImageData } from "next/image";

type AboutMobileProps = {
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

export default function AboutMobileLayout(props: AboutMobileProps) {
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
      <div className="mx-auto flex flex-wrap">
        <div className="w-full mt-6 cursor-auto">
          <p className="text-white my-1 max-w-[460px]">Hi, I&apos;m</p>
          <h1 className="text-white font-bold text-3xl font-serif">{name}</h1>
          <div className="py-4 m-auto align-center cursor-auto">
            <Image
              alt={name}
              className="rounded-full"
              src={avatar}
              placeholder="blur"
              width={120}
              priority
            />
          </div>
          <div className="flex justify-left my-2">
            <div className="">
              <a
                rel="noopener noreferrer"
                target="_blank"
                href={githubLink}
                className="flex pr-4"
              >
                {githubIcon}
              </a>
            </div>
            <div className="">
              <a
                rel="noopener noreferrer"
                target="_blank"
                href={linkedinLink}
                className="flex pr-4"
              >
                {linkedinIcon}
              </a>
            </div>
          </div>
          <p className="leading-relaxed max-w-[460px] pt-4">{bio}</p>
        </div>
      </div>
    </div>
  );
}
