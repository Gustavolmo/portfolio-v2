import { rwm } from '@gustavolmo/react-window-manager'
import { Settings, X } from 'lucide-react'
import { useState } from 'react'
import SettingsWindowInnerHtml from '../window-ui/settings/settings-window-inner-html.tsx'

export default function NavbarSettings() {
  const [isSettingsOpen, setIsSettingsOpen] = useState<boolean>(false)

  const { activeWindowId } = rwm.workspaceState()
  const { isDragging, resizeAction } = rwm.windowRegistry[activeWindowId]()

  return (
    <div className="relative z-[100]">
      <section
        className={` ${isDragging || resizeAction ? 'pointer-events-none' : ''}
          absolute p-4 bottom-12 bg-zinc-950/50 backdrop-blur-md
          overflow-y-auto
          rounded-md border border-zinc-800 w-[80vw] h-[520px] sm:w-[500px] sm:h-[60vh]
          transition-all
          ${isSettingsOpen ? 'right-0' : 'right-[-600px]'} 
          `}
      >
        <X
          onClick={() => setIsSettingsOpen(false)}
          className="absolute top-4 right-4 text-zinc-400 cursor-pointer z-[100]"
        />
        <SettingsWindowInnerHtml />
      </section>

      <Settings
        onClick={() => setIsSettingsOpen(!isSettingsOpen)}
        className={`
          ${isSettingsOpen ? 'brightness-100' : 'brightness-50'} 
          theme-navbar-settings-button shrink-0 hover:cursor-pointer`}
      />
    </div>
  )
}
