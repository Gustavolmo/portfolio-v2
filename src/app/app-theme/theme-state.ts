import { create } from 'zustand'
import { BackgroundClass, ThemeState } from './model.ts'

type ThemeStore = {
  selectedTheme: ThemeState
  selectedBackground: BackgroundClass
}

export const useThemeStore = create<ThemeStore>(() => ({
  selectedTheme: 'sysAdminDefault',
  selectedBackground: 'dark-rays-desktop-background',
}))
