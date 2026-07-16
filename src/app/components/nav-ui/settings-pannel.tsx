import { useState } from 'react'
import { themeApi } from '../../app-theme/theme-api.ts'
import { useThemeStore } from '../../app-theme/theme-state.ts'
import ThemeButton from './theme-button.tsx'

export default function SettingsPannel() {
  const [selectedTab, setSelectedTab] = useState<'theme' | 'customize'>('theme')

  return (
    <div className="relative">
      <article className="flex text-zinc-200 font-thin text-sm">
        <button
          onClick={() => setSelectedTab('theme')}
          className={`
            ${selectedTab === 'theme' ? 'bg-zinc-600/25' : 'bg-zinc-600/10'}
            bg-zinc-600/25 py-2 px-4 rounded-tl-sm`}
        >
          Themes
        </button>
        <button
          onClick={() => setSelectedTab('customize')}
          className={`
            ${selectedTab === 'customize' ? 'bg-zinc-600/25' : 'bg-zinc-600/10'}
            bg-zinc-600/25 py-2 px-4 rounded-tr-sm `}
        >
          Customize
        </button>
      </article>
      {selectedTab === 'theme' && <ThemeSelection />}
      {selectedTab === 'customize' && <ThemeCustomization />}
    </div>
  )
}

function ThemeSelection() {
  const { selectedTheme } = useThemeStore()
  return (
    <article className="flex flex-wrap items-start bg-zinc-600/25 p-2 text-lg">
      <ThemeButton
        isSelected={selectedTheme === 'clinic'}
        onClick={() => themeApi.setTheme('clinic', 'clinic-desktop-background')}
      >
        <p className="flex items-center rounded-sm bg-white px-2 text-cyan-500 border-b-2 border-cyan-300 h-20">
          Clinical
        </p>
      </ThemeButton>
      <ThemeButton
        isSelected={selectedTheme === 'sysAdminDefault'}
        onClick={() => themeApi.setTheme('sysAdminDefault', 'dark-rays-desktop-background')}
      >
        <p className="flex items-center bg-zinc-950 text-white font-mono h-20">Sys.Admin</p>
      </ThemeButton>
    </article>
  )
}

function ThemeCustomization() {
  return <article className="flex flex-wrap items-start bg-zinc-600/25 p-2 text-lg">TBD</article>
}
