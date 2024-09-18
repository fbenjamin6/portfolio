import { useEffect, useState } from "react"

export function BackgroundGradient() {
  const [translate, setTranslate] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setTranslate(window.visualViewport.pageTop * 0.25)
    }
    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div onScroll={(e) => console.log(e)} id="backgroundGradient" className=" bottom-0 absoulte overflow-visible fixed h-[200%] w-[200%]  -z-50 transition-all ease-out"
      style={{
        transform: `translateY(${translate}px) translateX(-${translate * 0}px)`
      }}>

    </div>
  )
}