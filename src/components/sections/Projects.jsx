import React from "react";
import { ProjectCard } from "../ProjectCard";
import { useTranslation } from "react-i18next";

const projects = [
  {
    id: 1,
    name: "Movie Bowser",
    imgSrc: "/imgs/movieBowser.webp",
    code: "https://github.com/fbenjamin6/MovieBowser",
    website: "https://movie-bowser.vercel.app/",
    techs: [
      {
        img: "/imgs/next.jpg",
        tag: "NEXTJS",
        alt: "Next.js tech logo",
      },
      {
        img: "/imgs/react.png",
        tag: "REACT",
        alt: "React tech logo",
      },
      {
        img: "/imgs/javaScript.png",
        tag: "JAVASCRIPT",
        alt: "JavaScript tech logo",
      },
      {
        img: "/imgs/tailwind.png",
        tag: "TAILWIND",
        alt: "Tailwind CSS tech logo",
      },
      {
        img: "/imgs/prisma.jpg",
        tag: "PRISMA",
        alt: "Prisma tech logo",
      },
      {
        img: "/imgs/postgresql.svg",
        tag: "POSTGRESQL",
        alt: "PostgreSQL tech logo",
      },
    ],
  },
  {
    id: 2,
    name: "Memoween",
    imgSrc: "/imgs/memoween.webp",
    code: "https://github.com/fbenjamin6/Memoween",
    website: "https://memoween.netlify.app/",
    techs: [
      {
        img: "/imgs/react.png",
        tag: "REACT",
        alt: "React tech logo",
      },
      {
        img: "/imgs/javaScript.png",
        tag: "JAVASCRIPT",
        alt: "JavaScript tech logo",
      },
      {
        img: "/imgs/tailwind.png",
        tag: "TAILWIND",
        alt: "Tailwind CSS tech logo",
      },
    ],
  },
  {
    id: 3,
    name: "BudgetApp",
    imgSrc: "/imgs/budgetApp.webp",
    code: "https://github.com/fbenjamin6/BudgetApp",
    website: "https://fbenjaminbudgetapp.netlify.app/",
    techs: [
      {
        img: "/imgs/html.png",
        tag: "HTML",
        alt: "HTML tech logo",
      },
      {
        img: "/imgs/css.png",
        tag: "CSS",
        alt: "CSS tech logo",
      },
      {
        img: "/imgs/javaScript.png",
        tag: "JAVASCRIPT",
        alt: "JavaScript tech logo",
      },
      {
        img: "/imgs/boostrap.png",
        tag: "BOOTSTRAP",
        alt: "Bootstrap tech logo",
      },
    ],
  },
];

export function Projects() {
  const { t } = useTranslation();

  return (
    <section
      id="projects"
      className="flex flex-col gap-7 lg:gap-11 pt-24 mb-28"
    >
      <div>
        <h3 className="text-3xl md:text-4xl max-md:mb-1 font-bold">
          {t("projects.title")}
          <span className="text-purple">.</span>
        </h3>
        <p className="text-customGray md:text-lg lg:text-xl">
          {t("projects.sub")}
        </p>
      </div>

      {projects.map(({ id, name, imgSrc, code, website, techs }) => {
        return (
          <ProjectCard
            key={id}
            name={name}
            description={t(`projects.${name}`)}
            imgSrc={imgSrc}
            code={code}
            website={website}
            techs={techs}
            t={t("projects.code")}
          />
        );
      })}
    </section>
  );
}
