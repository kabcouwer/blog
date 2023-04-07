"use client";

import React, { useEffect } from "react";

import PortfolioDescription from "../../components/content/project-portfolio.mdx";

import ProjectCardLayout from "../../components/layouts/ProjectCardLayout";

const projectItems = [
  {
    id: "project_portfolio",
    title: "Portfolio Blog Website",
    subtitle: "React Performance Framework",
    dates: "Mar 2023",
    demo: "/",
    source: "https://github.com/kabcouwer/portfolio-blog",
    skills: [
      {
        text: "Next.js",
        color: "green-800",
        bgColor: "green-100",
      },
      {
        text: "TypeScript",
        color: "rose-800",
        bgColor: "rose-100",
      },
      {
        text: "MDX",
        color: "sky-800",
        bgColor: "sky-100",
      },
      {
        text: "TailwindCSS",
        color: "orange-800",
        bgColor: "orange-100",
      },
      {
        text: "Vercel",
        color: "violet-800",
        bgColor: "violet-100",
      },
    ],
    description: <PortfolioDescription />,
  },
];

export default function Projects() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section id="projects">
      <h1 className="text-black dark:text-white font-bold text-5xl pt-6 text-center">
        Projects
      </h1>
      <div>
        {projectItems.map((proj) => (
          <ProjectCardLayout key={proj.id} details={proj} />
        ))}
      </div>
    </section>
  );
}
