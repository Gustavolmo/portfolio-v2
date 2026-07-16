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
      className="relative w-full p-1 cursor-pointer items-center hover:bg-zinc-700"
    >
      <button className="w-full">{children}</button>

      <span className={`${isSelected ? 'bg-red-500' : 'bg-none'} absolute top-0 right-0 h-2 w-2 rounded-full`}></span>
    </section>
  )
}
