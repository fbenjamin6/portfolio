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
    <button onClick={handleClick} className="py-0.5 px-3  md:px-4 rounded-md font-semibold bg-neutral-900/20 border border-black/70 hover:border-purple transition-colors duration-300">
      {language.includes('en') ? 'EN' : 'ES'}
    </button>
  )
}