type Props = {
  label: string
  description?: string
}

export default function CssPropertyControlLabel({ label, description }: Props) {
  return (
    <div>
      <p className="text-sm font-medium text-opacity-75">{label}</p>
      {description && <p className="mt-0.5 text-xs text-opacity-45">{description}</p>}
    </div>
  )
}
