import { useEffect, useRef, useState } from "react"

export function TechTag({ img, tag, alt }) {
  const liRef = useRef()
  const [width, setWidth] = useState('')
  const [isHover, setIsHover] = useState(false)

  useEffect(() => {
    const newWidth = liRef.current.scrollWidth + 5
    setWidth(newWidth)
  }, [liRef.current?.scrollWidth])




  return (
    <li ref={liRef} className={`techTag overflow-hidden transition-all p-1.5 border border-gray-600/60 bg-neutral-800/30 rounded-full flex items-center gap-1.5 `}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      style={{ width: isHover ? `${width}px` : '34px' }}>
      <img src={img} alt={alt} className="rounded-full w-[18px] lg:w-[20px]" />
      <p className=" font-spaceMono text-[11px] lg:text-xs ">{tag}</p>
    </li >
  )
}

