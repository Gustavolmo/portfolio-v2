import { ReactNode } from 'react'

type Props = {
  onClick: () => void
  children: ReactNode
  isSelected: boolean
}

export default function ThemeButton({ onClick, children, isSelected }: Props) {
  return (
    <section
      onClick={onClick}
      className={`relative w-full p-1 cursor-pointer items-center rounded-xl transition-all border-b-4 border-transparent ${isSelected && 'border-b-zinc-200/50 bg-zinc-600'}`}
    >
      <button className="w-full">{children}</button>
      <span className={`bg-red-500 h-2 w-2 rounded-full absolute bottom-4 right-4 transition-all ${isSelected ? 'opacity-100' : 'opacity-0'}`}></span>
    </section>
  )
}
