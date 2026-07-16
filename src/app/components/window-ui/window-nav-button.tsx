import { WindowRegistration } from '@gustavolmo/react-window-manager'

type Prop = {
  title: string
  Button: WindowRegistration['Button']
}

export default function WindowNavButton({ title, Button }: Prop) {
  return (
    <div className="flex flex-col items-center z-0 h-full">
      <Button
        isOpenClassName="brightness-[135%]"
        isActiveClassName="brightness-200"
        isClosedClassName="brightness-100"
        className="theme-navbar-window-button theme-text-primary"
      >
        {title}
      </Button>
    </div>
  )
}
