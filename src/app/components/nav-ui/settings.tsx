import { Settings } from 'lucide-react'
import { useState } from 'react'

export default function NavbarSettings() {
  const [isSettingsOpen, setIsSettingsOpen] = useState<boolean>(false)

  return (
    <div className="relative z-[100]">
      <section
        className={`
          absolute p-4  bg-zinc-400/60 
          rounded-md border-b-2 border-b-zinc-200
          bottom-12 transition-all
          ${isSettingsOpen ? 'right-0' : 'right-[-120px]'} 
          `}
      >
        <article className="flex flex-col gap-2">
          <p>option</p>
          <p>option</p>
          <p>option</p>
          <p>option</p>
          <p>option</p>
          <p>option</p>
        </article>
      </section>
      <Settings
        onClick={() => setIsSettingsOpen(!isSettingsOpen)}
        className={`text-zinc-100 shrink-0 hover:cursor-pointer`}
      />
    </div>
  )
}
