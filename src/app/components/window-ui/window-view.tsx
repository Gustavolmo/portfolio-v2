import { WindowRegistration } from '@gustavolmo/react-window-manager'
import { ReactNode } from 'react'

type Prop = {
  windowName: ReactNode
  children: ReactNode
  Window: WindowRegistration['Window']
  windowNavChildren?: ReactNode
}

export default function WindowView({ windowName, children, Window, windowNavChildren }: Prop) {
  return (
    <Window
      navbarChildren={windowNavChildren}
      className="theme-window"
      navbarClassName="theme-window-navhandle overflow-visible"
      windowName={<p className="theme-text-primary">{windowName}</p>}
    >
      {children}
    </Window>
  )
}
