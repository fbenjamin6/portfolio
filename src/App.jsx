import { useEffect } from "react"
import { BackgroundGradient } from "./components/BackgroundGradient"
import { Header } from "./components/Header"
import { About } from "./components/sections/About"
import { Contact } from "./components/sections/Contact"
import { Footer } from "./components/sections/Footer"
import { Hero } from "./components/sections/Hero"
import { Projects } from "./components/sections/Projects"
import { useTranslation } from "react-i18next"

function App() {
  const { i18n } = useTranslation()

  useEffect(() => {
    const langLocalStorage = window.localStorage.getItem('lang')
    if (langLocalStorage) {
      i18n.changeLanguage(langLocalStorage)
      return
    }

    const lang = navigator.language
    i18n.changeLanguage(lang)
  }, [])

  return (
    <>
      <BackgroundGradient />
      <Header />
      <main className="max-w-[900px] px-2.5 md:px-4 lg:px-0 m-auto">
        <Hero />
        <Projects />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
