import React from "react";

export function About() {
  return (
    <section id="about" className="flex flex-col gap-4 pt-8 md:pt-24 mb-28 sm:mb-32 md:mb-48">
      <h3 className="text-3xl md:text-4xl font-bold">Sobre mi<span className="text-purple">.</span></h3>
      <p className="text-customGray max-md:text-base">
        Soy  <span className="text-purple font-medium">desarrollador Front-End</span>, me especializo en <span className="text-purple font-medium">JavaScript</span>, con un enfoque particular en <span className="text-purple font-medium">React</span> para el desarrollo de interfaces interactivas y dinámicas. Como framework de css utilizo <span className="text-purple font-medium">Tailwind</span> construyendo estilos de manera ágil. Esta combinación de tecnologías me permite crear productos modernos, escalables y optimizados.
      </p>
      <p className="text-customGray max-md:text-base">
        Mi camino en la programación comenzó en la secundaria, meramente como un hobby, ya que ahí descubrí la fascinación por <span className="text-purple font-medium">resolver problemas</span>. Empecé ejercitando la lógica y luego seguí programando videojuegos de vez en cuando, hasta que decidí tomármelo en serio este último tiempo y dedicarme al <span className="text-purple font-medium">desarrollo web.</span>
      </p>
    </section>
  )
}