import { createWindowStore, rwm } from '@gustavolmo/react-window-manager'

rwm.workspaceApi.setWsResponsiveBreak('md')

export const profile = createWindowStore()
export const projects = createWindowStore()
export const email = createWindowStore()
export const serverStat = createWindowStore()
export const settings = createWindowStore()
