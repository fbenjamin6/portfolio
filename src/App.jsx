import { BackgroundGradient } from "./components/BackgroundGradient"
import { Header } from "./components/Header"
import { About } from "./components/sections/About"
import { Contact } from "./components/sections/Contact"
import { Footer } from "./components/sections/Footer"
import { Hero } from "./components/sections/Hero"
import { Projects } from "./components/sections/Projects"

function App() {

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
