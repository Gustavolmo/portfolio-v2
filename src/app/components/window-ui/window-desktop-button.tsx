import { WindowRegistration } from '@gustavolmo/react-window-manager'
import { LucideProps } from 'lucide-react'
import { ComponentType } from 'react'

type Prop = {
  title: string
  Button: WindowRegistration['Button']
  Icon: ComponentType<LucideProps>
}

export default function WindowDesktopButton({ title, Button, Icon }: Prop) {
  return (
    <div className="flex flex-col items-center h-fit z-0">
      <Button
        isOpenClassName="brightness-150"
        isActiveClassName="brightness-150"
        isClosedClassName="brightness-100"
        className="theme-desktop-window-icon"
      >
        <Icon className="h-10 w-10 theme-text-primary" />
      </Button>
      <p className="text-sm theme-text-primary mt-0.5">{title}</p>
    </div>
  )
}
