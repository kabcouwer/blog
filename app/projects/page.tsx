"use client";

import React, { useEffect, useState } from "react";

import PortfolioDescription from "../content/project-portfolio.mdx";
import MarketMoneyDescription from "../content/market-money.mdx";
import RailsEngineDescription from "../content/rails-engine.mdx"

import ProjectCardLayout from "../components/layouts/ProjectCardLayout";

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
  {
    id: "market_money",
    title: "Market Money",
    subtitle: "Rails REST API",
    dates: "Apr 2023",
    demo: "",
    source: "https://github.com/kabcouwer/market_money",
    skills: [
      {
        text: "Ruby on Rails",
        color: "green-800",
        bgColor: "green-100",
      },
      {
        text: "RSpec",
        color: "rose-800",
        bgColor: "rose-100",
      },
      {
        text: "Postman",
        color: "sky-800",
        bgColor: "sky-100",
      },
      {
        text: "Faker",
        color: "orange-800",
        bgColor: "orange-100",
      },
      {
        text: "Postgres",
        color: "violet-800",
        bgColor: "violet-100",
      },
    ],
    description: <MarketMoneyDescription />,
  },
  {
    id: "rails_engine",
    title: "Rails Engine",
    subtitle: "E-commerce Rails API",
    dates: "Sep 2021",
    demo: "",
    source: "https://github.com/kabcouwer/rails-engine",
    skills: [
      {
        text: "Ruby on Rails",
        color: "green-800",
        bgColor: "green-100",
      },
      {
        text: "RSpec",
        color: "rose-800",
        bgColor: "rose-100",
      },
      {
        text: "Active Record",
        color: "sky-800",
        bgColor: "sky-100",
      },
      {
        text: "SQL",
        color: "orange-800",
        bgColor: "orange-100",
      },
      {
        text: "Postgres",
        color: "violet-800",
        bgColor: "violet-100",
      },
    ],
    description: <RailsEngineDescription />,
  }
];

export default function Projects() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [projectIdx, setProjectIdx] = useState(0);

  return (
    <div className="container mx-auto px-5 md:py-24 pt-10 pb-20 cursor-auto">
      <div className="flex flex-wrap justify-between text-black dark:text-white">
        <ProjectCardLayout key={projectItems[projectIdx].id} details={projectItems[projectIdx]} />
        <div id="projectsMenu" className="md:pr-24 md:pl-12 md:pt-60">
          <h2 className="text-4xl pb-5 underline">Projects</h2>
          <div className="wrapper">
            <button
              onClick={() => setProjectIdx(0)}
              className="block pb-2 hover:scale-125"
            >
              Project Portfolio
            </button>
            <button
              onClick={() => setProjectIdx(1)}
              className="block pb-2 hover:scale-125"
            >
              Market Money
            </button>
            <button
              onClick={() => setProjectIdx(2)}
              className="block pb-2 hover:scale-125"
            >
              Rails Engine
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
