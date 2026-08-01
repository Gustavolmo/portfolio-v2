type Props = {
  label: string
  description?: string
}

export default function CssPropertyControlLabel({ label, description }: Props) {
  return (
    <div>
      <p className="text-sm font-medium text-zinc-200">{label}</p>
      {description && <p className="mt-0.5 text-xs text-zinc-500">{description}</p>}
    </div>
  )
}
