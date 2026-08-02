import { themeApi } from '../../../app-theme/theme-api.ts'
import { useThemeStore } from '../../../app-theme/theme-state.ts'
import { Clock3, Monitor, Palette, Shield, Sparkles } from 'lucide-react'
import ThemeButton from './theme-button.tsx'
import { ColorStyleControl } from './style-controls/color-style-control.tsx'
import { NumberStyleControl } from './style-controls/number-style-control.tsx'
import { SelectStyleControl } from './style-controls/select-style-control.tsx'

export default function SettingsWindowInnerHtml() {
  return (
    <div className="p-4 theme-text-primary-color theme-text-font-family">
      <article className="overflow-hidden border border-zinc-400/10 bg-zinc-900/10">
        <header className="flex items-start gap-3 border-b border-zinc-400/10 px-5 py-4 sm:px-6">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/10 text-opacity-70">
            <Palette size={19} strokeWidth={1.8} />
          </div>
          <div>
            <h2 className="font-medium text-opacity-90">Appearance</h2>
            <p className="mt-0.5 text-sm text-opacity-55">
              Personalize the look and feel of your workspace.
            </p>
          </div>
        </header>

        <div className="flex flex-col gap-8 p-5">
          <section>
            <div className="mb-3 flex items-center gap-2">
              <Sparkles size={15} className="text-opacity-90" />
              <div>
                <h3 className="text-sm font-medium text-opacity-75">Theme</h3>
                <p className="text-xs text-opacity-50">Choose a visual style for your desktop.</p>
              </div>
            </div>
            <ThemeSelection />
          </section>
        </div>
      </article>
      <article className="overflow-hidden border border-zinc-400/10 bg-zinc-900/10 mt-8">
        <div className="flex flex-col gap-8 p-5">
          <section>
            <div className="mb-3 flex items-center gap-2">
              <Palette size={15} className="text-opacity-90" />
              <div>
                <h3 className="text-sm font-medium text-opacity-75">Customize</h3>
                <p className="text-xs text-opacity-50">Fine-tune your interface.</p>
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
        <div className="group flex min-h-32 w-full flex-col justify-between rounded-xl border border-zinc-600 bg-zinc-950 p-4 text-left transition-colors hover:border-white/25">
          <div className="flex items-center justify-between">
            <Monitor size={18} className="text-zinc-300" />
            <span className="rounded-full bg-white/10 px-2  pt-1 pb-0.5 text-[10px] font-medium uppercase tracking-wider text-zinc-400">
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
            <span className="rounded-full border border-emerald-900/80 bg-emerald-950/40 px-2  pt-1 pb-0.5 text-[10px] font-medium uppercase tracking-wider text-emerald-500">
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
            <span className="rounded-sm border border-zinc-400 bg-zinc-500 px-2 pt-1 pb-0.5 text-[10px] font-medium uppercase tracking-wider text-stone-100">
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
          <h4 className="text-xs font-medium uppercase tracking-wider text-opacity-90">
            Desktop & windows
          </h4>
          <p className="mt-1 text-xs text-opacity-45">
            Shape the workspace and every application window.
          </p>
        </div>
        <div className="flex flex-wrap gap-3 [&>div]:min-w-56 [&>div]:flex-1">
          <ColorStyleControl
            property="--custom-background-color"
            label="Desktop background"
            description="Use a solid color behind your workspace."
            value="#18181b"
          />
          <ColorStyleControl
            property="--window-bg-color"
            label="Window background"
            description="The background color of the window."
            value="#ffffff"
          />
          <ColorStyleControl
            property="--window-border-color"
            label="Window border"
            description="The edge around each window."
            value="#52525b"
          />
          <NumberStyleControl
            property="--window-radius"
            label="Window radius"
            description="Round the corners of every window."
            value={2}
            min={0}
            max={20}
            unit="px"
          />
          <NumberStyleControl
            property="--window-border-thickness"
            label="Border thickness"
            description="Set the width of window borders."
            value={1}
            min={0}
            max={32}
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
          <h4 className="text-xs font-medium uppercase tracking-wider text-opacity-90">
            Window title bars
          </h4>
          <p className="mt-1 text-xs text-opacity-45">
            Customize the handle and tabs inside each window.
          </p>
        </div>
        <div className="flex flex-wrap gap-3 [&>div]:min-w-56 [&>div]:flex-1">
          <ColorStyleControl
            property="--window-navhandle-bg-color"
            label="Title bar background"
            description="The surface behind each window title."
            value="#262626"
          />
          <ColorStyleControl
            property="--window-navhandle-title-color"
            label="Title text color"
            description="Set the color of the navigation bar title."
            value="#18181b"
          />
          <ColorStyleControl
            property="--window-navhandle-tabs-bg-color"
            label="Window tabs background"
            description="The background behind tabs within a window."
            value="#18181b"
          />
          <ColorStyleControl
            property="--window-navhandle-tabs-text-color"
            label="Window tabs text color"
            description="The color of each text in a tab."
            value="#18181b"
          />
        </div>
      </section>

      <section>
        <div className="mb-3">
          <h4 className="text-xs font-medium uppercase tracking-wider text-opacity-90">
            Navigation bar
          </h4>
          <p className="mt-1 text-xs text-opacity-45">
            Control the navbar at the bottom of your workspace.
          </p>
        </div>
        <div className="flex flex-wrap gap-3 [&>div]:min-w-56 [&>div]:flex-1">
          <ColorStyleControl
            property="--navbar-bg-color"
            label="Navigation background"
            description="Set the background color of the navigation bar."
            value="#18181b"
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
          <NumberStyleControl
            property="--navbar-tabs-gap"
            label="Tab spacing"
            description="Add space between navigation tabs."
            value={0}
            min={0}
            max={64}
            unit="px"
          />
          <ColorStyleControl
            property="--navbar-settings-button-color"
            label="Settings button color"
            description="The color of the settings shortcut in the navigation bar."
            value="#f4f4f5"
          />
        </div>
      </section>

      <section>
        <div className="mb-3">
          <h4 className="text-xs font-medium uppercase tracking-wider text-opacity-90">
            Navigation buttons
          </h4>
          <p className="mt-1 text-xs text-opacity-45">
            Tune the navbar buttons used to open and switch between windows.
          </p>
        </div>
        <div className="flex flex-wrap gap-3 [&>div]:min-w-56 [&>div]:flex-1">
          <ColorStyleControl
            property="--navbar-window-button-bg"
            label="Button background"
            description="The surface behind each navigation button."
            value="#18181b"
          />
          <ColorStyleControl
            property="--navbar-window-button-color"
            label="Button text"
            description="The color of navigation button labels."
            value="#a1a1aa"
          />
          <NumberStyleControl
            property="--navbar-window-button-font-size"
            label="Label size"
            description="Set the size of navigation button text."
            value={0.75}
            min={0.5}
            max={2}
            step={0.05}
            unit="rem"
          />
          <NumberStyleControl
            property="--navbar-window-button-height"
            label="Button height"
            description="Set the height of each navigation button."
            value={2.25}
            min={1.25}
            max={5}
            step={0.25}
            unit="rem"
          />
          <NumberStyleControl
            property="--navbar-window-button-padding-inline"
            label="Horizontal padding"
            description="Add room on either side of each label."
            value={8}
            min={0}
            max={48}
            unit="px"
          />
          <NumberStyleControl
            property="--navbar-window-button-radius"
            label="Button radius"
            description="Round navigation button corners."
            value={0}
            min={0}
            max={36}
            unit="px"
          />
        </div>
      </section>

      <section>
        <div className="mb-3">
          <h4 className="text-xs font-medium uppercase tracking-wider text-opacity-90">
            Navigation button borders
          </h4>
          <p className="mt-1 text-xs text-opacity-45">
            Each edge is independent for precise treatments.
          </p>
        </div>
        <div className="flex flex-wrap gap-3 [&>div]:min-w-56 [&>div]:flex-1">
          <NumberStyleControl
            property="--navbar-window-button-border-top-width"
            label="Top border width"
            value={0}
            min={0}
            max={8}
            unit="px"
          />
          <NumberStyleControl
            property="--navbar-window-button-border-right-width"
            label="Right border width"
            value={0}
            min={0}
            max={8}
            unit="px"
          />
          <NumberStyleControl
            property="--navbar-window-button-border-bottom-width"
            label="Bottom border width"
            value={0}
            min={0}
            max={8}
            unit="px"
          />
          <NumberStyleControl
            property="--navbar-window-button-border-left-width"
            label="Left border width"
            value={0}
            min={0}
            max={8}
            unit="px"
          />
          <SelectStyleControl
            property="--navbar-window-button-border-top-style"
            label="Top border style"
            value="solid"
            options={[
              { label: 'Solid', value: 'solid' },
              { label: 'Dashed', value: 'dashed' },
              { label: 'Dotted', value: 'dotted' },
              { label: 'Double', value: 'double' },
            ]}
          />
          <SelectStyleControl
            property="--navbar-window-button-border-right-style"
            label="Right border style"
            value="solid"
            options={[
              { label: 'Solid', value: 'solid' },
              { label: 'Dashed', value: 'dashed' },
              { label: 'Dotted', value: 'dotted' },
              { label: 'Double', value: 'double' },
            ]}
          />
          <SelectStyleControl
            property="--navbar-window-button-border-bottom-style"
            label="Bottom border style"
            value="solid"
            options={[
              { label: 'Solid', value: 'solid' },
              { label: 'Dashed', value: 'dashed' },
              { label: 'Dotted', value: 'dotted' },
              { label: 'Double', value: 'double' },
            ]}
          />
          <SelectStyleControl
            property="--navbar-window-button-border-left-style"
            label="Left border style"
            value="solid"
            options={[
              { label: 'Solid', value: 'solid' },
              { label: 'Dashed', value: 'dashed' },
              { label: 'Dotted', value: 'dotted' },
              { label: 'Double', value: 'double' },
            ]}
          />
          <ColorStyleControl
            property="--navbar-window-button-border-top-color"
            label="Top border color"
            value="#18181b"
          />
          <ColorStyleControl
            property="--navbar-window-button-border-right-color"
            label="Right border color"
            value="#18181b"
          />
          <ColorStyleControl
            property="--navbar-window-button-border-bottom-color"
            label="Bottom border color"
            value="#18181b"
          />
          <ColorStyleControl
            property="--navbar-window-button-border-left-color"
            label="Left border color"
            value="#18181b"
          />
        </div>
      </section>

      <section>
        <div className="mb-3">
          <h4 className="text-xs font-medium uppercase tracking-wider text-opacity-90">
            Desktop icons
          </h4>
          <p className="mt-1 text-xs text-opacity-45">
            Style the launchers displayed across the desktop.
          </p>
        </div>
        <div className="flex flex-wrap gap-3 [&>div]:min-w-56 [&>div]:flex-1">
          <ColorStyleControl
            property="--desktop-window-icon-color"
            label="Icon color"
            description="The foreground color used by desktop launchers."
            value="#f4f4f5"
          />
          <NumberStyleControl
            property="--desktop-window-icon-width"
            label="Desktop icon width"
            description="Adjust the width."
            value={32}
            min={32}
            max={200}
            step={1}
          />
          <NumberStyleControl
            property="--desktop-window-icon-padding"
            label="Launcher padding"
            description="Add space around each desktop icon."
            value={1}
            min={0}
            max={4}
            step={0.125}
            unit="rem"
          />
          <NumberStyleControl
            property="--desktop-window-icon-border-radius"
            label="Launcher radius"
            description="Round the desktop launcher corners."
            value={0}
            min={0}
            max={128}
            unit="px"
          />
          <ColorStyleControl
            property="--desktop-window-icon-background"
            label="Launcher background"
            description="The solid background behind every launcher."
            value="#52525b"
          />
        </div>
      </section>

      <section>
        <div className="mb-3">
          <h4 className="text-xs font-medium uppercase tracking-wider text-opacity-90">
            Desktop icon borders
          </h4>
          <p className="mt-1 text-xs text-opacity-45">
            Give each launcher its own beveled, outlined, or borderless edge.
          </p>
        </div>
        <div className="flex flex-wrap gap-3 [&>div]:min-w-56 [&>div]:flex-1">
          <NumberStyleControl
            property="--desktop-window-icon-border-top-width"
            label="Top border width"
            value={0}
            min={0}
            max={8}
            unit="px"
          />
          <SelectStyleControl
            property="--desktop-window-icon-border-top-style"
            label="Top border style"
            value="solid"
            options={[
              { label: 'Solid', value: 'solid' },
              { label: 'Dashed', value: 'dashed' },
              { label: 'Dotted', value: 'dotted' },
              { label: 'Double', value: 'double' },
            ]}
          />
          <ColorStyleControl
            property="--desktop-window-icon-border-top-color"
            label="Top border color"
            value="#ffffff"
          />
          <NumberStyleControl
            property="--desktop-window-icon-border-right-width"
            label="Right border width"
            value={0}
            min={0}
            max={8}
            unit="px"
          />
          <SelectStyleControl
            property="--desktop-window-icon-border-right-style"
            label="Right border style"
            value="solid"
            options={[
              { label: 'Solid', value: 'solid' },
              { label: 'Dashed', value: 'dashed' },
              { label: 'Dotted', value: 'dotted' },
              { label: 'Double', value: 'double' },
            ]}
          />
          <ColorStyleControl
            property="--desktop-window-icon-border-right-color"
            label="Right border color"
            value="#ffffff"
          />
          <NumberStyleControl
            property="--desktop-window-icon-border-bottom-width"
            label="Bottom border width"
            value={0}
            min={0}
            max={8}
            unit="px"
          />
          <SelectStyleControl
            property="--desktop-window-icon-border-bottom-style"
            label="Bottom border style"
            value="solid"
            options={[
              { label: 'Solid', value: 'solid' },
              { label: 'Dashed', value: 'dashed' },
              { label: 'Dotted', value: 'dotted' },
              { label: 'Double', value: 'double' },
            ]}
          />
          <ColorStyleControl
            property="--desktop-window-icon-border-bottom-color"
            label="Bottom border color"
            value="#a1a1aa"
          />
          <NumberStyleControl
            property="--desktop-window-icon-border-left-width"
            label="Left border width"
            value={0}
            min={0}
            max={8}
            unit="px"
          />
          <SelectStyleControl
            property="--desktop-window-icon-border-left-style"
            label="Left border style"
            value="solid"
            options={[
              { label: 'Solid', value: 'solid' },
              { label: 'Dashed', value: 'dashed' },
              { label: 'Dotted', value: 'dotted' },
              { label: 'Double', value: 'double' },
            ]}
          />
          <ColorStyleControl
            property="--desktop-window-icon-border-left-color"
            label="Left border color"
            value="#ffffff"
          />
        </div>
      </section>

      <section>
        <div className="mb-3">
          <h4 className="text-xs font-medium uppercase tracking-wider text-opacity-90">
            Typography
          </h4>
          <p className="mt-1 text-xs text-opacity-45">
            Set the primary type treatment used throughout the interface.
          </p>
        </div>
        <div className="flex flex-wrap gap-3 [&>div]:min-w-56 [&>div]:flex-1">
          <ColorStyleControl
            property="--text-primary-color"
            label="Primary text"
            description="The main text color across the interface."
            value="#f4f4f5"
          />
          <SelectStyleControl
            property="--text-primary-font-family"
            label="Font family"
            description="Choose from the font families available in every browser."
            value="monospace"
            options={[
              { label: 'Monospace', value: 'monospace' },
              { label: 'System UI', value: 'system-ui' },
              { label: 'Sans serif', value: 'sans-serif' },
              { label: 'Serif', value: 'serif' },
              { label: 'Cursive', value: 'cursive' },
              { label: 'Fantasy', value: 'fantasy' },
            ]}
          />
        </div>
      </section>
    </article>
  )
}
