import { unitFormat } from "./unit-format.ts"

export default function MemoryMeter({
  label,
  value,
  total,
  color,
}: {
  label: string
  value: number
  total: number
  color: string
}) {
  const percent = total > 0 ? Math.min((value / total) * 100, 100) : 0

  return (
    <div className="min-w-64 flex-1 border border-zinc-800 bg-zinc-900/50 p-3">
      <div className="flex items-baseline justify-between gap-3">
        <p className="text-xs uppercase tracking-widest text-zinc-500">{label}</p>
        <p className="text-sm font-semibold text-zinc-100">{unitFormat.bytes(value)}</p>
      </div>
      <div
        className="mt-3 h-2 overflow-hidden rounded-full bg-zinc-800"
        role="progressbar"
        aria-label={label}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={Math.round(percent)}
      >
        <div className={`h-full rounded-full ${color}`} style={{ width: `${percent}%` }} />
      </div>
      <p className="mt-2 text-xs text-zinc-500">
        {percent.toFixed(1)}% of system memory · {unitFormat.bytes(total)} total
      </p>
    </div>
  )
}
