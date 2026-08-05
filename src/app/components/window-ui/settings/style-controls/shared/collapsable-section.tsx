import { ChevronDown } from "lucide-react"
import { ReactNode, useState } from "react"

type CollapsibleSectionProps = {
  title: string
  description: string
  children: ReactNode
}

export default function CollapsibleSection({
  title,
  description,
  children,
}: CollapsibleSectionProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <section className="border-b border-zinc-400/10 pb-4 last:border-b-0">
      <button
        aria-expanded={isOpen}
        className="flex w-full items-start justify-between gap-4 text-left"
        onClick={() => setIsOpen((open) => !open)}
        type="button"
      >
        <div>
          <h4 className="text-xs font-medium uppercase tracking-wider text-opacity-90">{title}</h4>
          <p className="mt-1 text-xs text-opacity-45">{description}</p>
        </div>
        <ChevronDown
          className={`mt-0.5 shrink-0 text-opacity-60 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
          size={16}
        />
      </button>
      <div
        className={`grid transition-[grid-template-rows] duration-300 ease-out ${isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}
      >
        <div className="overflow-hidden">
          <div
            className={`pt-4 transition-opacity duration-200 ${isOpen ? 'opacity-100 delay-100' : 'opacity-0'}`}
          >
            {children}
          </div>
        </div>
      </div>
    </section>
  )
}
