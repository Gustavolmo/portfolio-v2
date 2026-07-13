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
        className="text-zinc-100 w-fit p-4 rounded-md bg-zinc-600/50"
      >
        <Icon className="h-10 w-10 text-zinc-100" />
      </Button>
      <p className="text-sm text-zinc-200 mt-0.5">{title}</p>
    </div>
  )
}
