import { create } from 'zustand'
import { BackgroundClasse, ThemeState } from './model.ts'

type ThemeStore = {
  selectedTheme: ThemeState
  selectedBackground: BackgroundClasse
}

export const useThemeStore = create<ThemeStore>(() => ({
  selectedTheme: 'sysAdminDefault',
  selectedBackground: 'dark-rays-desktop-background',
}))
