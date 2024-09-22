import React from "react";
import { LinkedinIcon, MailIcon } from "../Icons";
import { LinkButton } from "../LinkButton";
import { useTranslation } from "react-i18next";

export function Contact() {
  const { t } = useTranslation()
  return (
    <section id="contact" className="md:my-40 mb-20 sm:mb-32 text-center flex flex-col gap-5 bg-neutral-950/50 rounded-xl border border-neutral-500/20 shadow-[0_0_6px_0_black] py-7 md:py-14 px-1.5">
      <h3 className="text-3xl md:text-4xl font-bold">{t('contact.title')}<span className="text-purple">?</span></h3>
      <div>
        <p className="text-customGray">{t('contact.sub1')} </p>
        <p className="text-customGray">{t('contact.sub2')}</p>
      </div>
      <div className="flex gap-2.5 md:gap-4 m-auto font-semibold">
        <LinkButton href={"mailto:benjamin.federico6@Gmail.com"}>
          <MailIcon /> Mail
        </LinkButton>

        <LinkButton href={"https://www.linkedin.com/in/federicobenjamin/"}>
          <LinkedinIcon /> Linkedin
        </LinkButton>
      </div>
    </section>
  )
}