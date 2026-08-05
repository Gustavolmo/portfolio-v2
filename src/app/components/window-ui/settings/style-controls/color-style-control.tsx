import { useState } from 'react'
import { cssPropertyApi } from '../../../../app-theme/theme-api.ts'
import { Palette } from 'lucide-react'
import CssPropertyControlLabel from './shared/css-property-control-label.tsx'
import CssPropertyControlShell from './shared/css-property-control-shell.tsx'
import { ThemeProperty } from '../../../../app-theme/model.ts'

type Props = {
  value: string
  property: ThemeProperty
  label: string
  description?: string
}

export function ColorStyleControl({ property, label, description, value }: Props) {
  const [color, setColor] = useState(value)

  const updateColor = (nextColor: string) => {
    setColor(nextColor)
    cssPropertyApi.setStyleProp(property, nextColor)

    if (property === '--custom-background-color') {
      cssPropertyApi.setBackground('custom-background-color')
    }
  }

  return (
    <CssPropertyControlShell>
      <section className="flex gap-2 items-center w-full">
        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-zinc-500/10 text-opacity-60">
          <Palette size={16} />
        </div>
        <CssPropertyControlLabel label={label} description={description} />
      </section>
      <label
        className="relative max-w-96 h-9 w-full shrink-0 cursor-pointer overflow-hidden rounded-lg border border-white/15"
        style={{ backgroundColor: color }}
      >
        <input
          aria-label={label}
          className="absolute inset-0 h-full w-full cursor-pointer opacity-0"
          type="color"
          value={color}
          onChange={(event) => updateColor(event.target.value)}
        />
      </label>
    </CssPropertyControlShell>
  )
}
