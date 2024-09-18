import React from "react";
import { LinkedinIcon, MailIcon } from "../Icons";
import { LinkButton } from "../LinkButton";

export function Contact() {
  return (
    <section id="contact" className="md:my-40 mb-20 sm:mb-32 text-center flex flex-col gap-5 bg-neutral-950/50 rounded-xl border border-neutral-500/20 shadow-[0_0_6px_0_black] py-7 md:py-14 px-1.5">
      <h3 className="text-3xl md:text-4xl font-bold">¿Tienes algun proyecto en mente<span className="text-purple">?</span></h3>
      <div>
        <p className="text-customGray">Yo tengo las herramientas para desarrollarlo. </p>
        <p className="text-customGray">Contactame y hablemos sobre tu proximo proyecto.</p>
      </div>
      <div className="flex gap-2.5 md:gap-4 m-auto font-semibold">
        <LinkButton>
          <MailIcon /> Mail
        </LinkButton>

        <LinkButton>
          <LinkedinIcon /> Linkedin
        </LinkButton>
      </div>
    </section>
  )
}