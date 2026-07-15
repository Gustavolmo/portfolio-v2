import { WindowRegistration } from '@gustavolmo/react-window-manager'
import { ReactNode } from 'react'

type Prop = {
  title: string
  children: ReactNode
  Window: WindowRegistration['Window']
  windowNavChildren?: ReactNode
}

export default function WindowView({ title, children, Window, windowNavChildren }: Prop) {
  return (
    <Window
      navbarChildren={windowNavChildren}
      className="theme-window"
      navbarClassName="theme-window-navhandle"
      windowName={title}
    >
      {children}
    </Window>
  )
}
