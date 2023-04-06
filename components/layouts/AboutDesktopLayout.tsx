import React from "react";
import Image, { StaticImageData } from "next/image";

type AboutDesktopProps = {
  attributes: {
    name: string;
    avatar: StaticImageData;
    bio: JSX.Element;
  };
};

export default function AboutDesktopLayout(props: AboutDesktopProps) {
  const { name, bio, avatar } = props.attributes;

  return (
    <div className="container mx-auto px-5 py-16 cursor-auto">
      <div className="w-4/5 mx-auto flex flex-wrap">
        <div className="w-1/2 pl-10 py-6 mt-0 cursor-auto">
          <p className="text-black dark:text-white my-1 max-w-[460px]">
            Hi, I&apos;m
          </p>
          <h1 className="text-black dark:text-white font-bold text-3xl mb-6">
            {name}
          </h1>
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
