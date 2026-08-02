import { ReactNode } from 'react'

type Props = { children: ReactNode }

export default function CssPropertyControlShell({ children }: Props) {
  return (
    <div className="flex items-center gap-3 rounded-xl border border-zinc-800/10 bg-white/[0.03] p-3">
      {children}
    </div>
  )
}
