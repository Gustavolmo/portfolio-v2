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
    <article className="grid w-full grid-cols-[repeat(auto-fit,minmax(92px,1fr))] items-stretch gap-2 bg-zinc-600/25 p-2 text-lg">
      <ThemeButton
        isSelected={selectedTheme === 'sysAdminDefault'}
        onClick={() => themeApi.setTheme('sysAdminDefault', 'dark-rays-desktop-background')}
      >
        <p className="flex h-20 w-full items-center justify-center bg-zinc-950 px-4 font-mono text-white">
          Admin
        </p>
      </ThemeButton>
      <ThemeButton
        isSelected={selectedTheme === 'blackhat'}
        onClick={() => themeApi.setTheme('blackhat', 'blackhat-desktop-background')}
      >
        <div className="flex h-20 w-full items-center justify-center border border-green-700 bg-black px-4 font-mono text-sm text-green-300">
          Blackhat
        </div>
      </ThemeButton>
      <ThemeButton
        isSelected={selectedTheme === 'cyberpunkNeon'}
        onClick={() => themeApi.setTheme('cyberpunkNeon', 'cyberpunk-neon-desktop-background')}
      >
        <div className="flex h-20 w-full items-center justify-center rounded-sm border-2 border-fuchsia-400 bg-zinc-950 px-5 font-mono text-cyan-200 shadow-[0_0_4px_rgb(34_211_238_/_0.4)]">
          Neon
        </div>
      </ThemeButton>
      <ThemeButton
        isSelected={selectedTheme === 'galaxy'}
        onClick={() => themeApi.setTheme('galaxy', 'galaxy-desktop-background')}
      >
        <div className="flex h-20 w-full items-center justify-center rounded-sm border border-b-2 border-zinc-400 bg-black px-4 text-zinc-100">
          Galaxy
        </div>
      </ThemeButton>
      <ThemeButton
        isSelected={selectedTheme === 'deluxe'}
        onClick={() => themeApi.setTheme('deluxe', 'deluxe-desktop-background')}
      >
        <div className="flex h-20 w-full items-center justify-center rounded-md border-2 border-amber-600 border-t-amber-200 border-r-amber-300 bg-stone-950 px-4 font-serif text-amber-200">
          Deluxe
        </div>
      </ThemeButton>
      <ThemeButton
        isSelected={selectedTheme === 'retro'}
        onClick={() => themeApi.setTheme('retro', 'retro-desktop-background')}
      >
        <div className="flex h-20 w-full items-center justify-center border-2 border-b-4 border-r-zinc-900 border-t-zinc-300 border-b-black border-l-zinc-300 bg-zinc-700 px-4 font-sans text-stone-100">
          Retro
        </div>
      </ThemeButton>
      <ThemeButton
        isSelected={selectedTheme === 'zen'}
        onClick={() => themeApi.setTheme('zen', 'zen-desktop-background')}
      >
        <div className="flex h-20 w-full items-center justify-center rounded-sm border-2 border-emerald-800 bg-orange-100 px-8 font-sans">
          <p className="bg-stone-100 border-b-2 border border-orange-200 border-b-green-600 rounded-full p-2">
            Zen
          </p>
        </div>
      </ThemeButton>
      <ThemeButton
        isSelected={selectedTheme === 'clinic'}
        onClick={() => themeApi.setTheme('clinic', 'clinic-desktop-background')}
      >
        <p className="flex h-20 w-full font-sans items-center justify-center rounded-sm border border-cyan-600 bg-white px-4 text-cyan-500 underline underline-offset-4">
          Clinical
        </p>
      </ThemeButton>
    </article>
  )
}

function ThemeCustomization() {
  return (
    <article className="flex flex-wrap items-start bg-zinc-600/25 p-2 text-lg">
      <p className="text-sm text-zinc-200">Coming Soon...</p>
    </article>
  )
}
