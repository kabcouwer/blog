import React from "react";
import Link from "next/link";

import BadgeArray from "../badgeArray";

type ProjectCardProps = {
  details: {
    id: string;
    title: string;
    subtitle: string;
    dates: string;
    demo: string;
    source: string;
    imageCredit?: string;
    skills: {
      color: string;
      text: string;
      bgColor: string;
    }[];
    description: JSX.Element;
  };
};

export default function ProjectCardLayout(props: ProjectCardProps) {
  const { title, subtitle, dates, demo, source, skills, description, id } =
    props.details;

  const isHidden = id === "project_portfolio";

  return (
    <div id={id}>
      <div className="container mx-auto px-5 py-12 text-black dark:text-white cursor-auto">
        <div className="md:w-4/5 mx-auto flex items-center justify-center">
          <div className="md:py-6 mt-6 md:mt-0 cursor-auto">
            <h1 className="text-3xl title-font font-medium mb-1 cursor-auto">
              {title}
            </h1>
            <h2 className="text-sm title-font tracking-widest mb-1 cursor-auto">
              {dates}
            </h2>
            <h2 className="text-sm title-font tracking-widest mb-1 cursor-auto">
              {subtitle}
            </h2>
            <div className="md:flex mb-4">
              <BadgeArray skills={skills} />
            </div>
            <div className="leading-relaxed max-w-[600px]">
              {description}
            </div>
            <div className="flex mt-6 items-center pb-5 mb-5">
              <div className="flex">
                <Link href={source} target="_blank" rel="noopener noreferrer">
                  <button className="transform mouse-pointer bg-gray-900 text-sm mr-2 py-1 px-2 font-semibold rounded hover:bg-gray-700 dark:hover:bg-gray-600  hover:scale-90 dark:focus:bg-gray-600 focus:outline-none">
                    Code
                  </button>
                </Link>
                <Link href={demo} target="_blank" rel="noopener noreferrer">
                  <button
                    className={
                      isHidden
                        ? "hidden"
                        : "transform mouse-pointer bg-gray-900 text-sm mr-2 py-1 px-2 font-semibold rounded hover:bg-gray-700 dark:hover:bg-gray-600 hover:scale-90 focus:bg-gray-700 dark:focus:bg-gray-600 focus:outline-none"
                    }
                  >
                    Live
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
