import React from "react";
import { useTranslation } from "react-i18next";

export function About() {


  const { t } = useTranslation()

  return (
    <section id="about" className="flex flex-col gap-4 pt-8 md:pt-24 mb-28 sm:mb-32 md:mb-48">
      <h3 className="text-3xl md:text-4xl font-bold">{t('about.title')}<span className="text-purple">.</span></h3>
      <p className="text-customGray max-md:text-base">
        {t('about.p1')}
        <span className="text-purple font-medium">{t('about.frontEndDev')}</span>
        {t('about.p2')}
        <span className="text-purple font-medium">JavaScript</span>
        {t('about.p3')}
        <span className="text-purple font-medium">React</span>
        {t('about.p4')}
        <span className="text-purple font-medium">Tailwind</span>
        {t('about.p5')}
      </p>
      <p className='text-customGray ma-md:text-base'>
        {t('about.p6')}
        <span className='text-purple font-medium'>{t('about.solvingProblems')}</span>
        {t('about.p7')}
        <span className='text-purple font-medium'>{t('about.webDev')}</span>
      </p>
    </section>
  )
}