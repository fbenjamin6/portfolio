import { useTranslation } from "react-i18next";

export function LanguageSwitcher() {
  const { t, i18n } = useTranslation()
  const { language } = i18n

  const handleClick = () => {
    const langToChange = language.includes('en') ? 'es' : 'en'
    i18n.changeLanguage(langToChange)
    window.localStorage.setItem('lang', langToChange)
  }

  return (
    <button onClick={handleClick} className="flex gap-2 py-0.5 px-3 group md:px-2 rounded-md font-semibold bg-neutral-900/20 border border-black/70 hover:border-purple transition-colors duration-300">
      <svg xmlns="http://www.w3.org/2000/svg" className="group-hover:text-purple transition-colors duration-300" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" ><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" /><path d="M3.6 9h16.8" /><path d="M3.6 15h16.8" /><path d="M11.5 3a17 17 0 0 0 0 18" /><path d="M12.5 3a17 17 0 0 1 0 18" /></svg>
      {language.includes('en') ? 'EN' : 'ES'}
    </button>
  )
}