type EmailFieldProps = {
  autoComplete?: string
  error?: string
  label: string
  onChange?: (value: string) => void
  optional?: boolean
  placeholder?: string
  readOnly?: boolean
  type?: 'email' | 'text'
  value: string
}

export default function EmailField({
  autoComplete,
  error,
  label,
  onChange,
  optional = false,
  placeholder,
  readOnly = false,
  type = 'text',
  value,
}: EmailFieldProps) {
  const id = `email-${label.toLowerCase()}`

  return (
    <div className="px-4 py-2.5">
      <div className="flex items-center gap-3">
        <label className="text-opacity-55 w-14 shrink-0 text-sm" htmlFor={id}>
          {label}
        </label>
        <input
          autoComplete={autoComplete}
          className="placeholder-text-opacity-45 min-w-0 grow bg-transparent text-sm outline-none read-only:cursor-default"
          id={id}
          onChange={onChange ? (event) => onChange(event.target.value) : undefined}
          placeholder={placeholder}
          readOnly={readOnly}
          type={type}
          value={value}
        />
        {optional && <span className="text-opacity-45 text-xs">optional</span>}
      </div>
      {error && <p className="ml-[4.25rem] mt-1 text-sm text-red-400">{error}</p>}
    </div>
  )
}
