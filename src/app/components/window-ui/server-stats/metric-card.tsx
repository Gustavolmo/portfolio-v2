export default function MetricCard({
  label,
  value,
  accent = 'text-cyan-300',
}: {
  label: string
  value: string | number
  accent?: string
}) {
  return (
    <div className="min-w-32 flex-1 border border-zinc-800 bg-zinc-900/50 px-3 py-2">
      <p className="text-sm uppercase tracking-widest text-zinc-600">{label}</p>
      <p className={`mt-1 text-base font-semibold leading-none ${accent}`}>{value}</p>
    </div>
  )
}
