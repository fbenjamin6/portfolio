import React, { useEffect, useState } from "react";
import { HamburgerButton } from "./HamburgerButton";
import { useTranslation } from "react-i18next";
import { LanguageSwitcher } from "./LanguageSwitcher";

export function Header() {
  const { t } = useTranslation()
  const [isOnTop, setIsOnTop] = useState(true)

  const handleScroll = () => {
    if (window.scrollY > 80) {
      setIsOnTop(false)
      return
    }
    else {
      setIsOnTop(true)
    }
  }

  useEffect(() => {

    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const [isOpen, setIsOpen] = useState(false)

  const handleClick = () => {
    setIsOpen(!isOpen)
  }

  return (
    <header className={`border-b fixed border-gray-500/20 ${isOpen ? 'max-sm:bg-neutral-900/95' : isOnTop ? 'bg-neutral-900/10' : 'bg-neutral-900/55'} transition-colors duration-500 w-full backdrop-blur z-50`}>
      <nav className={`max-w-[900px]  ${isOpen ? 'h-[230px] sm:h-[60px]' : 'h-[60px] '} items-start sm:items-center md:h-[70px] m-auto px-4 lg:px-0 flex flex-col sm:flex-row sm:justify-between transition-all duration-300 overflow-hidden `}>
        <div className="flex items-center max-sm:w-full">
          <a href="#" className="text-2xl font-semibold py-3 ">
            <img src="/imgs/logo.png" className="w-[90px]" alt="FB logo" />
          </a>
          <HamburgerButton handleClick={handleClick} isOpen={isOpen} />
        </div>
        <ul className="flex max-sm:flex-col gap-3 sm:gap-9 font-bold text-base max-sm:mt-3 ml-auto items-center text-nowrap">
          <li className="w-full text-right">
            <a href="#projects" className=" text-gray-300 hover:text-purple transition-colors duration-200 ">{t('menu.projects')}</a>
          </li>
          <li className="w-full text-right">
            <a href="#about" className=" text-gray-300 hover:text-purple transition-colors duration-200 ">{t('menu.about')}</a>
          </li>
          <li className="w-full text-right">
            <a href="#contact" className=" text-gray-300 hover:text-purple transition-colors duration-200 ">{t('menu.contact')}</a>
          </li>
          <li className="w-full text-right">
            <LanguageSwitcher />
          </li>
        </ul>
      </nav>
    </header>
  )
}