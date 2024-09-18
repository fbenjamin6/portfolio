import React from "react";
import { ArrowDownIcon } from "../Icons";

export function Hero() {
  return (
    <section id="#hero" className="flex gap-4 flex-col md:h-[550px] justify-center pt-36 sm:pt-24 mb-20 sm:mb-24">
      <h2 className="font-spaceMono text-[15px] md:text-lg bg-neutral-900/40 p-[6px] md:p-[10px] w-max">DESARROLADOR WEB FRONT-END</h2>
      <h1 className="text-4xl sm:text-5xl md:text-6xl">Hola, soy <span className="text-purple font-bold">Federico Benjamín</span></h1>
      <p className=" text-customGray md:text-lg max-w-[400px]">Me enfoco en solucionar problemas y mejorar las experiencias digitales. ¡Trabajemos juntos!</p>
      <div className="font-semibold flex gap-3 max-md:text-sm">
        <a href="#projects" className="py-1.5 px-3 md:py-1 md:px-4 bg-neutral-900/60 hover:bg-neutral-900 duration-200 hover:scale-105 transition-all rounded-lg border-2 border-purple">
          <button className="flex items-center gap-2 md:gap-3 ">Ver Proyectos <ArrowDownIcon /></button>
        </a>
        <a href="#contact" className="py-1.5 px-3 md:py-2 md:px-4 bg-neutral-900/60 hover:bg-neutral-900 duration-200 hover:scale-105 transition-all rounded-lg flex items-center">
          <button >Contacto</button>
        </a>
      </div>
    </section>
  )
}