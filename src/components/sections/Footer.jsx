import { GitHubIcon, LinkedinIcon } from "../Icons";

export function Footer() {
  return (
    <footer className="h-[160px] bg-gradient-to-t from-neutral-900/70 to-transparent px-2.5">
      <div className="max-w-[900px] m-auto flex w-full flex-col h-full justify-center gap-5 ">
        <ul className="flex gap-4">
          <li>
            <a href=""><LinkedinIcon classes={`w-[30px] h-[30px] transition-colors duration-300 text-customGray hover:text-purple`} /> </a>
          </li>
          <li>
            <a href=""><GitHubIcon classes={`w-[30px] h-[30px] transition-colors duration-300 text-customGray hover:text-purple`} /> </a>
          </li>
        </ul>
        <span className="text-customGray max-sm:text-sm">Hecho con 💜. © 2024 Federico Benjamín</span>
      </div>
    </footer>
  )
}