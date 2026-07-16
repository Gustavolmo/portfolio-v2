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
            ${selectedTab === 'theme' ? 'bg-zinc-600/25' : 'bg-zinc-600/0'}
            bg-zinc-600/25 py-2 px-4 rounded-tl-sm`}
        >
          Themes
        </button>
        <button
          onClick={() => setSelectedTab('customize')}
          className={`
            ${selectedTab === 'customize' ? 'bg-zinc-600/25' : 'bg-zinc-600/0'}
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
        isSelected={selectedTheme === 'sysAdminDefault'}
        onClick={() => themeApi.setTheme('sysAdminDefault', 'dark-rays-desktop-background')}
      >
        <p className="flex items-center bg-zinc-950 text-white font-mono h-20 px-4">Admin</p>
      </ThemeButton>
      <ThemeButton
        isSelected={selectedTheme === 'blackhat'}
        onClick={() => themeApi.setTheme('blackhat', 'blackhat-desktop-background')}
      >
        <div className="flex font-mono text-sm items-center bg-black px-4 text-green-300 border border-green-700 h-20">
          Blackhat
        </div>
      </ThemeButton>
      <ThemeButton
        isSelected={selectedTheme === 'cyberpunkNeon'}
        onClick={() => themeApi.setTheme('cyberpunkNeon', 'cyberpunk-neon-desktop-background')}
      >
        <div className="flex font-mono items-center rounded-sm bg-slate-950 px-5 text-cyan-300 border border-fuchsia-400 border-b-4 h-20 shadow-[0_0_4px_rgb(34_211_238_/_0.4)]">
          Neon
        </div>
      </ThemeButton>
      <ThemeButton
        isSelected={selectedTheme === 'zen'}
        onClick={() => themeApi.setTheme('zen', 'zen-desktop-background')}
      >
        <div className="flex font-sans items-center rounded-sm bg-stone-100 px-8 text-emerald-800 border-2 border-emerald-800 h-20">
          Zen
        </div>
      </ThemeButton>
      <ThemeButton
        isSelected={selectedTheme === 'clinic'}
        onClick={() => themeApi.setTheme('clinic', 'clinic-desktop-background')}
      >
        <p className="flex items-center rounded-sm bg-white px-4 text-cyan-500 border-b-4 border-cyan-600 h-20">
          Clinical
        </p>
      </ThemeButton>
    </article>
  )
}

function ThemeCustomization() {
  return <article className="flex flex-wrap items-start bg-zinc-600/25 p-2 text-lg">TBD</article>
}
