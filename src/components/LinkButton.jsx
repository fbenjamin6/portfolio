export function LinkButton({ href, children }) {
  return (
    <a href={href} target="_blank" className="py-2 md:py-2.5 px-3  md:px-4 rounded-md font-semibold bg-neutral-700/10 group border border-black/70 hover:border-purple transition-colors duration-300 cursor-pointer">
      <button className="flex gap-2 md:gap-2.5 max-md:text-sm items-center">{children}</button>
    </a>
  )
}