import { ChangeEvent, useState } from 'react'
import { ThemeProperty } from '../../../../app-theme/model.ts'
import { cssPropertyApi } from '../../../../app-theme/theme-api.ts'
import { Hash } from 'lucide-react'
import CssPropertyControlShell from './shared/css-property-control-shell.tsx'
import CssPropertyControlLabel from './shared/css-property-control-label.tsx'

type Props = {
  property: ThemeProperty
  label: string
  description?: string
  value: number
  min?: number
  max?: number
  step?: number
  unit?: string
}

export function NumberStyleControl({
  property,
  label,
  description,
  value,
  min,
  max,
  step = 1,
  unit = 'px',
}: Props) {
  const [number, setNumber] = useState(value)

  const updateNumber = (event: ChangeEvent<HTMLInputElement>) => {
    const nextNumber = event.target.valueAsNumber
    if (Number.isNaN(nextNumber)) return

    setNumber(nextNumber)
    cssPropertyApi.setStyleProp(property, `${nextNumber}${unit}`)
  }

  return (
    <CssPropertyControlShell>
      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white/5 text-zinc-400">
        <Hash size={16} />
      </div>
      <CssPropertyControlLabel label={label} description={description} />
      <div className="ml-auto flex w-28 shrink-0 overflow-hidden rounded-lg border border-white/10 bg-black/20 focus-within:border-white/25">
        <input
          aria-label={label}
          className="min-w-0 flex-1 bg-transparent px-2 py-2 text-right text-sm text-zinc-100 outline-none"
          type="number"
          value={number}
          min={min}
          max={max}
          step={step}
          onChange={updateNumber}
        />
        {unit && (
          <span className="flex items-center border-l border-white/10 px-2 text-xs text-zinc-500">
            {unit}
          </span>
        )}
      </div>
    </CssPropertyControlShell>
  )
}
