import { ChangeEvent, useState } from 'react'
import { ThemeProperty } from '../../../../app-theme/model.ts'
import { cssPropertyApi } from '../../../../app-theme/theme-api.ts'
import { ChevronDown } from 'lucide-react'
import CssPropertyControlShell from './shared/css-property-control-shell.tsx'
import CssPropertyControlLabel from './shared/css-property-control-label.tsx'

type SelectStyleControlProps = {
  property: ThemeProperty
  label: string
  description?: string
  value: string
  options: {
    label: string
    value: string
  }[]
}

export function SelectStyleControl({
  property,
  label,
  description,
  value,
  options,
}: SelectStyleControlProps) {
  const [selectedValue, setSelectedValue] = useState(value)

  const updateSelect = (event: ChangeEvent<HTMLSelectElement>) => {
    const nextValue = event.target.value
    setSelectedValue(nextValue)
    cssPropertyApi.setStyleProp(property, nextValue)
  }

  return (
    <CssPropertyControlShell>
      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white/5 text-zinc-400">
        <ChevronDown size={16} />
      </div>
      <CssPropertyControlLabel label={label} description={description} />
      <div className="relative ml-auto w-36 shrink-0">
        <select
          aria-label={label}
          className="w-full appearance-none rounded-lg border border-white/10 bg-black/20 px-3 py-2 pr-8 text-sm text-zinc-200 outline-none transition-colors hover:border-white/20 focus:border-white/30"
          value={selectedValue}
          onChange={updateSelect}
        >
          {options.map((option) => (
            <option className='text-zinc-800' key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        <ChevronDown
          size={14}
          className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-zinc-500"
        />
      </div>
    </CssPropertyControlShell>
  )
}
