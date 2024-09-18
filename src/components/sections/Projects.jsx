import React from "react";
import { ProjectCard } from "../ProjectCard";

const projects = [
  {
    id: 1,
    name: 'Movie Bowser',
    description: 'Buscador de películas y series, en el que puedes buscar por nombre, géneros y listas según su popularidad o calificación.',
    imgSrc: '/imgs/movieBowser.webp',
    code: 'https://github.com/fbenjamin6/MovieBowser/tree/main',
    website: 'https://movie-bowser.vercel.app/',
    techs: [
      {
        img: '/imgs/next.jpg',
        tag: 'NEXTJS'
      },
      {
        img: '/imgs/react.png',
        tag: 'REACT'
      },
      {
        img: '/imgs/javaScript.png',
        tag: 'JAVASCRIPT'
      },
      {
        img: '/imgs/tailwind.png',
        tag: 'TAILWIND'
      },
      {
        img: '/imgs/prisma.jpg',
        tag: 'PRISMA'
      },
      {
        img: '/imgs/postgresql.svg',
        tag: 'POSTGRESQL'
      }




    ]

  },
  {
    id: 2,
    name: 'BudgetApp',
    description: 'Pensada para gestionar gastos personales principalmente.',
    imgSrc: '/imgs/budgetApp.webp',
    code: 'https://github.com/fbenjamin6/BudgetApp',
    website: 'https://fbenjaminbudgetapp.netlify.app/',
    techs: [
      {
        img: '/imgs/html.png',
        tag: 'HTML'
      },
      {
        img: '/imgs/css.png',
        tag: 'CSS'
      },
      {
        img: '/imgs/javaScript.png',
        tag: 'JAVASCRIPT'
      },
      {
        img: '/imgs/boostrap.png',
        tag: 'BOOSTRAP'
      },

    ]
  }
]



export function Projects() {
  return (
    <section id="projects" className="flex flex-col gap-7 lg:gap-11 pt-24 mb-28">
      <div>
        <h3 className="text-3xl md:text-4xl max-md:mb-1 font-bold">Proyectos<span className="text-purple">.</span></h3>
        <p className="text-customGray md:text-lg lg:text-xl">Los proyectos mas grandes que he creado por mi cuenta desde cero.</p>
      </div>

      {
        projects.map(({ id, name, description, imgSrc, code, website, techs }) => {
          return <ProjectCard key={id} name={name} description={description} imgSrc={imgSrc} code={code} website={website} techs={techs} />
        })
      }

    </section>
  )
}