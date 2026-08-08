import { ReactNode } from "react";

export default function SectionTitle({ children }: { children: string | ReactNode }) {
  return <h2 className="text-opacity-55 text-xl uppercase tracking-[0.2em]">{children}</h2>
}
