import React from "react";

import PortfolioDescription from "../content/project-portfolio.mdx";

import ProjectCardLayout from "../layouts/ProjectCardLayout";

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
        color: "cyan-800",
        bgColor: "cyan-100",
      },
      {
        text: "TypeScript",
        color: "blue-800",
        bgColor: "blue-100",
      },
      {
        text: "MDX",
        color: "purple-800",
        bgColor: "purple-100",
      },
      {
        text: "TailwindCSS",
        color: "orange-800",
        bgColor: "orange-100",
      },
      {
        text: "Vercel",
        color: "green-800",
        bgColor: "green-100",
      },
    ],
    description: <PortfolioDescription />,
  },
];

export default function Projects() {
  return (
    <section id="projects" className="bg-white dark:bg-black">
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
