import { BackgroundClass, ThemeName, ThemeProperty, ThemeState } from '../app-theme/model.ts'

export const memoryApi = {
  saveSelectedThemeName: (theme: ThemeName | 'custom') => {
    return localStorage.setItem('selected-theme', theme)
  },

  getSavedThemeName: () => {
    return localStorage.getItem('selected-theme') as ThemeState | null
  },

  saveStyleProp: (prop: ThemeProperty, value: string) => {
    return localStorage.setItem(prop, value)
  },

  getSavedStyleProp: (prop: ThemeProperty) => {
    return localStorage.getItem(prop)
  },

  saveSelectedBackground: (value: string) => {
    return localStorage.setItem('selected-background', value)
  },

  getSavedSelectedBackground: () => {
    return localStorage.getItem('selected-background') as BackgroundClass | null
  },
}
