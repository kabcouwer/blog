import React from "react";
import Image, { StaticImageData } from "next/image";

type AboutMobileProps = {
  attributes: {
    name: string;
    avatar: StaticImageData;
    bio: JSX.Element;
  };
};

export default function AboutMobileLayout(props: AboutMobileProps) {
  const { name, bio, avatar } = props.attributes;

  return (
    <div className="container mx-auto px-5 py-8 cursor-auto ">
      <div className="mx-auto flex flex-wrap">
        <div className="w-full cursor-auto">
          <p className="text-black dark:text-white my-1 max-w-[460px]">
            Hi, I&apos;m
          </p>
          <h1 className="text-black dark:text-white font-bold text-3xl">
            {name}
          </h1>
          <div className="py-8 m-auto align-center cursor-auto">
            <Image
              alt={name}
              className="rounded-full"
              src={avatar}
              placeholder="blur"
              width={120}
              priority
            />
          </div>
          <div className="leading-relaxed text-black dark:text-white max-w-[460px]">
            {bio}
          </div>
        </div>
      </div>
    </div>
  );
}
