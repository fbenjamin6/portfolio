import { useTranslation } from "react-i18next";
import { GitHubIcon, LinkedinIcon } from "../Icons";

export function Footer() {
  const { t } = useTranslation()
  return (
    <footer className="py-6 md:py-9 bg-gradient-to-t from-neutral-900/70 to-transparent px-2.5">
      <div className="max-w-[900px] m-auto flex w-full flex-col h-full justify-center gap-4 md:gap-5 ">
        <ul className="flex gap-4">
          <li>
            <a target="_blank" href="https://www.linkedin.com/in/federicobenjamin/"><LinkedinIcon classes={`w-[30px] h-[30px] transition-colors duration-300 text-customGray hover:text-purple`} /> </a>
          </li>
          <li>
            <a target="_blank" href="https://github.com/fbenjamin6"><GitHubIcon classes={`w-[30px] h-[30px] transition-colors duration-300 text-customGray hover:text-purple`} /> </a>
          </li>
        </ul>
        <span className="text-customGray max-sm:text-sm">{t('footer')}</span>
      </div>
    </footer>
  )
}