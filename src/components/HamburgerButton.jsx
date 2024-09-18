export function HamburgerButton({ handleClick, isOpen }) {
  return (
    <button onClick={handleClick} className="flex flex-col gap-1 sm:hidden ml-auto">
      <div className="w-6 h-[3px] bg-white rounded-xl transition-all duration-300" style={{ transform: isOpen ? 'rotateZ(-45deg) translate(-5px, 5px)' : '' }} />
      <div className="w-6 h-[3px] bg-white rounded-xl transition-all duration-300" style={{ opacity: isOpen ? '0' : '100' }} />
      <div className="w-6 h-[3px] bg-white rounded-xl transition-all duration-300" style={{ transform: isOpen ? 'rotateZ(45deg) translate(-5px, -5px)' : '' }} />
    </button>
  )
}