import { themeApi } from '../../../app-theme/theme-api.ts'
import { useThemeStore } from '../../../app-theme/theme-state.ts'
import { Clock3, Monitor, Palette, Shield, Sparkles } from 'lucide-react'
import ThemeButton from './theme-button.tsx'
import { ColorStyleControl } from './style-controls/color-style-control.tsx'
import { NumberStyleControl } from './style-controls/number-style-control.tsx'
import { SelectStyleControl } from './style-controls/select-style-control.tsx'
import { TextStyleControl } from './style-controls/text-style-control.tsx'

export default function SettingsWindowInnerHtml() {
  return (
    <div className="p-4">
      <article className="overflow-hidden rounded-2xl border border-white/10 bg-zinc-900/90 shadow-2xl shadow-black/20 backdrop-blur-sm">
        <header className="flex items-start gap-3 border-b border-white/10 px-5 py-4 sm:px-6">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/10 text-zinc-100">
            <Palette size={19} strokeWidth={1.8} />
          </div>
          <div>
            <h2 className="font-medium text-zinc-50">Appearance</h2>
            <p className="mt-0.5 text-sm text-zinc-400">
              Personalize the look and feel of your workspace.
            </p>
          </div>
        </header>

        <div className="flex flex-col gap-8 p-5">
          <section>
            <div className="mb-3 flex items-center gap-2">
              <Sparkles size={15} className="text-zinc-400" />
              <div>
                <h3 className="text-sm font-medium text-zinc-100">Theme</h3>
                <p className="text-xs text-zinc-500">Choose a visual style for your desktop.</p>
              </div>
            </div>
            <ThemeSelection />
          </section>
        </div>
      </article>

      <article className="overflow-hidden rounded-2xl border border-white/10 bg-zinc-900/90 shadow-2xl shadow-black/20 backdrop-blur-sm mt-8">
        <div className="flex flex-col gap-8 p-5">
          <section>
            <div className="mb-3 flex items-center gap-2">
              <Palette size={15} className="text-zinc-400" />
              <div>
                <h3 className="text-sm font-medium text-zinc-100">Customize</h3>
                <p className="text-xs text-zinc-500">More controls are on their way.</p>
              </div>
            </div>
            <ThemeCustomization />
          </section>
        </div>
      </article>
    </div>
  )
}

function ThemeSelection() {
  const { selectedTheme } = useThemeStore()
  return (
    <article className="flex w-full flex-wrap gap-3 [&>section]:min-w-32 [&>section]:flex-1 [&>section]:w-auto">
      <ThemeButton
        isSelected={selectedTheme === 'sysAdminDefault'}
        onClick={() => themeApi.setTheme('sysAdminDefault', 'dark-rays-desktop-background')}
      >
        <div className="group flex min-h-32 w-full flex-col justify-between rounded-xl border border-white/10 bg-zinc-950 p-4 text-left transition-colors hover:border-white/25">
          <div className="flex items-center justify-between">
            <Monitor size={18} className="text-zinc-300" />
            <span className="rounded-full bg-white/10 px-2 py-0.5 text-[10px] font-medium uppercase tracking-wider text-zinc-400">
              Default
            </span>
          </div>
          <div>
            <p className="font-mono text-sm font-medium text-white">Admin</p>
            <p className="mt-1 text-xs text-zinc-500">Focused and minimal</p>
          </div>
        </div>
      </ThemeButton>
      <ThemeButton
        isSelected={selectedTheme === 'blackhat'}
        onClick={() => themeApi.setTheme('blackhat', 'blackhat-desktop-background')}
      >
        <div className="group flex min-h-32 w-full flex-col justify-between rounded-xl border border-emerald-950 bg-black p-4 text-left transition-colors hover:border-emerald-700">
          <div className="flex items-center justify-between">
            <Shield size={18} className="text-emerald-400" />
            <span className="rounded-full border border-emerald-900/80 bg-emerald-950/40 px-2 py-0.5 text-[10px] font-medium uppercase tracking-wider text-emerald-500">
              Dark
            </span>
          </div>
          <div>
            <p className="font-mono text-sm font-medium text-emerald-300">Blackhat</p>
            <p className="mt-1 text-xs text-emerald-700">Terminal-inspired</p>
          </div>
        </div>
      </ThemeButton>
      <ThemeButton
        isSelected={selectedTheme === 'retro'}
        onClick={() => themeApi.setTheme('retro', 'retro-desktop-background')}
      >
        <div className="group flex min-h-32 w-full flex-col justify-between rounded-xl border-2 border-b-zinc-900 border-r-zinc-900 border-t-zinc-300 border-l-zinc-300 bg-zinc-600 p-4 text-left transition-colors hover:bg-zinc-500">
          <div className="flex items-center justify-between">
            <Clock3 size={18} className="text-stone-100" />
            <span className="rounded-sm border border-zinc-400 bg-zinc-500 px-2 py-0.5 text-[10px] font-medium uppercase tracking-wider text-stone-100">
              Classic
            </span>
          </div>
          <div>
            <p className="font-sans text-sm font-medium text-stone-50">Retro</p>
            <p className="mt-1 text-xs text-zinc-300">A familiar throwback</p>
          </div>
        </div>
      </ThemeButton>
    </article>
  )
}

function ThemeCustomization() {
  return (
    <article className="flex flex-col gap-6">
      <section>
        <div className="mb-3">
          <h4 className="text-xs font-medium uppercase tracking-wider text-zinc-500">Desktop & windows</h4>
        </div>
        <div className="flex flex-wrap gap-3 [&>div]:min-w-72 [&>div]:flex-1">
          <ColorStyleControl
            property="--custom-background-color"
            label="Desktop background"
            description="Use a solid color behind your workspace."
            value="#18181b"
          />
          <ColorStyleControl
            property="--window-bg-color"
            label="Window surface"
            description="The base color of application windows."
            value="#ffffff"
          />
          <ColorStyleControl
            property="--window-border-color"
            label="Window border"
            description="A subtle edge around each window."
            value="#52525b"
          />
          <NumberStyleControl
            property="--window-radius"
            label="Window radius"
            description="Round the corners of every window."
            value={2}
            min={0}
            max={32}
            unit="px"
          />
          <NumberStyleControl
            property="--window-border-thickness"
            label="Border thickness"
            description="Set the width of window borders."
            value={1}
            min={0}
            max={8}
            unit="px"
          />
          <SelectStyleControl
            property="--window-border-style"
            label="Border style"
            description="Choose how window borders are drawn."
            value="solid"
            options={[
              { label: 'Solid', value: 'solid' },
              { label: 'Dashed', value: 'dashed' },
              { label: 'Dotted', value: 'dotted' },
              { label: 'Double', value: 'double' },
            ]}
          />
        </div>
      </section>

      <section>
        <div className="mb-3">
          <h4 className="text-xs font-medium uppercase tracking-wider text-zinc-500">Navigation</h4>
        </div>
        <div className="flex flex-wrap gap-3 [&>div]:min-w-72 [&>div]:flex-1">
          <ColorStyleControl
            property="--navbar-bg-color"
            label="Navigation background"
            description="Set the background color of the navigation bar."
            value="#18181b"
          />
          <NumberStyleControl
            property="--navbar-opacity"
            label="Navigation opacity"
            description="Control how transparent the navigation bar is."
            value={100}
            min={0}
            max={100}
            step={5}
            unit="%"
          />
          <SelectStyleControl
            property="--navbar-justify"
            label="Navigation alignment"
            description="Position items across the navigation bar."
            value="space-between"
            options={[
              { label: 'Start', value: 'flex-start' },
              { label: 'Center', value: 'center' },
              { label: 'Space between', value: 'space-between' },
              { label: 'End', value: 'flex-end' },
            ]}
          />
        </div>
      </section>

      <section>
        <div className="mb-3">
          <h4 className="text-xs font-medium uppercase tracking-wider text-zinc-500">Typography</h4>
        </div>
        <div className="flex flex-wrap gap-3 [&>div]:min-w-72 [&>div]:flex-1">
          <ColorStyleControl
            property="--text-primary-color"
            label="Primary text"
            description="The main text color across the interface."
            value="#f4f4f5"
          />
          <TextStyleControl
            property="--text-primary-font-family"
            label="Font family"
            description="Enter a CSS font-family value."
            value="monospace"
            placeholder="e.g. Inter, sans-serif"
          />
        </div>
      </section>
    </article>
  )
}
