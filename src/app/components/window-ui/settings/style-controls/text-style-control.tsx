import { ChangeEvent, useState } from 'react'
import { ThemeProperty } from '../../../../app-theme/model.ts'
import { cssPropertyApi } from '../../../../app-theme/theme-api.ts'
import { Braces } from 'lucide-react'
import CssPropertyControlShell from './shared/css-property-control-shell.tsx'
import CssPropertyControlLabel from './shared/css-property-control-label.tsx'

type TextStyleControlProps = {
  property: ThemeProperty
  label: string
  description?: string
  value: string
  placeholder?: string
}

export function TextStyleControl({
  property,
  label,
  description,
  value,
  placeholder,
}: TextStyleControlProps) {
  const [text, setText] = useState(value)

  const updateText = (event: ChangeEvent<HTMLInputElement>) => {
    const nextText = event.target.value
    setText(nextText)
    cssPropertyApi.setStyleProp(property, nextText)
  }

  return (
    <CssPropertyControlShell>
      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white/5 text-opacity-60">
        <Braces size={16} />
      </div>
      <CssPropertyControlLabel label={label} description={description} />
      <input
        aria-label={label}
        className="ml-auto w-40 shrink-0 rounded-lg border border-white/10 bg-black/20 px-3 py-2 text-sm text-opacity-70 outline-none transition-colors placeholder-text-opacity-45 hover:border-white/20 focus:border-white/30"
        type="text"
        value={text}
        placeholder={placeholder}
        onChange={updateText}
      />
    </CssPropertyControlShell>
  )
}
