import React from "react";
import { LinkIcon, GitHubIcon } from "./Icons";
import { TechTag } from "./TechTag";
import { LinkButton } from "./LinkButton";

export function ProjectCard({ name, description, imgSrc, code, website, techs }) {
  return (
    <article className="p-2.5 md:p-6 flex flex-col lg:flex-row gap-2.5 flex-nowrap bg-neutral-950/35 rounded-xl border border-neutral-500/20 shadow-[0_0_6px_0_black]">
      <div className="flex flex-col gap-1.5 md:gap-2 lg:w-1/2 max-lg:order-2">
        <h4 className=" font-semibold text-2xl md:text-3xl">{name}</h4>
        <p className="text-customGray max-md:text-sm max-lg:mb-3">
          {description}
        </p>
        <div className="flex flex-col gap-3 mt-auto ">
          <div className="flex gap-2 md:gap-3" >
            <LinkButton href={website}>
              <LinkIcon />  Website
            </LinkButton>

            <LinkButton href={code}>
              <GitHubIcon />  Código
            </LinkButton>
          </div>
          <ul className="flex gap-2 md:gap-3 max-lg:flex-wrap">
            {
              techs.map(({ img, tag }, index) => {
                return <TechTag key={index} img={img} tag={tag} />
              })
            }
          </ul>
        </div>
      </div>
      <div className="relative rounded-xl overflow-hidden  border group border-neutral-500/30 shadow-[0_0_4px_0_black] cursor-pointer  lg:w-1/2 ">
        <a href={website} target="_blank">
          <img src="/imgs/projectBackground.webp" className="absolute w-full h-full z-0 " />
          <img src={imgSrc} className=" relative z-10 translate-x-[10%] translate-y-[10%] group-hover:translate-x-[1px] group-hover:translate-y-0 transition-all  duration-300 ease-in-out scale-90 group-hover:scale-100" />
        </a>
      </div>
    </article>
  )
}