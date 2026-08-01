import { DockPosition, WindowRegistration } from '@gustavolmo/react-window-manager'
import { ReactNode } from 'react'

type Prop = {
  windowName: ReactNode
  children: ReactNode
  Window: WindowRegistration['Window']
  windowNavChildren?: ReactNode
  defaultDock?: DockPosition
}

export default function WindowView({
  windowName,
  children,
  Window,
  windowNavChildren,
  defaultDock,
}: Prop) {
  return (
    <Window
      defaultDock={defaultDock}
      navbarChildren={windowNavChildren}
      className="theme-window"
      navbarClassName="theme-window-navhandle overflow-visible"
      windowName={<p className="theme-text-font-family">{windowName}</p>}
    >
      {children}
    </Window>
  )
}
