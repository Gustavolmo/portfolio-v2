import { WindowRegistration } from '@gustavolmo/react-window-manager'

type Prop = {
  title: string
  Button: WindowRegistration['Button']
}

export default function WindowNavButton({ title, Button }: Prop) {
  return (
    <div className="flex flex-col items-center z-0 h-10">
      <Button
        isOpenClassName="text-zinc-400 bg-white/10"
        isActiveClassName="text-white bg-white/25"
        isClosedClassName="text-zinc-600"
        className="text-zinc-600 text-xs px-4 h-full"
      >
        {title}
      </Button>
    </div>
  )
}
