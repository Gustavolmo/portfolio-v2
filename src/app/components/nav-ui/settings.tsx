import { rwm } from '@gustavolmo/react-window-manager'
import { Settings } from 'lucide-react'
import { useState } from 'react'
import { themeApi } from '../../app-theme/theme-api.ts'

export default function NavbarSettings() {
  const [isSettingsOpen, setIsSettingsOpen] = useState<boolean>(false)
  const { activeWindowId } = rwm.workspaceState()
  const { isDragging, resizeAction } = rwm.windowRegistry[activeWindowId]()

  return (
    <div className="relative z-[100]">
      <section
        className={` ${isDragging || resizeAction ? 'pointer-events-none' : ''}
          absolute p-4 bottom-12 bg-zinc-950/50 backdrop-blur-md
          rounded-md border border-zinc-800 w-[80vw] h-[520px] sm:w-[500px] sm:h-[60vh]
          transition-all
          ${isSettingsOpen ? 'right-0' : 'right-[-600px]'} 
          `}
      >
        <article className="flex flex-col gap-2 items-start text-zinc-200">
          <button onClick={() => themeApi.setTheme('clinic', '-')}>clinic</button>
          <button
            onClick={() => themeApi.setTheme('sysAdminDefault', 'dark-rays-desktop-background')}
          >
            sysAdmin <span className='text-xs font-extralight'>(deafult)</span>
          </button>
          <button
            onClick={() => themeApi.setTheme('sysAdminDefault', 'dark-rays-desktop-background')}
          >
            
          </button>
        </article>
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
