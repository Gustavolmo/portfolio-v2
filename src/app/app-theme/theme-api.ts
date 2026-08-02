import { memoryApi } from '../app-memory/memory-api.ts'
import { BackgroundClass, ThemeName, ThemeProperty } from './model.ts'
import { themeRepository } from './theme-repositpry.ts'
import { useThemeStore } from './theme-state.ts'

export const themeApi = {
  setTheme: (themeName: ThemeName, background: BackgroundClass) => {
    Object.entries(themeRepository[themeName]).forEach(([property, styleValue]) => {
      document.documentElement.style.setProperty(property, styleValue)
      memoryApi.saveStyleProp(property as ThemeProperty, styleValue)
    })

    useThemeStore.setState({ selectedTheme: themeName })
    useThemeStore.setState({ selectedBackground: background })

    memoryApi.saveSelectedThemeName(themeName)
    memoryApi.saveSelectedBackground(background)
  },

  initThemeFromMemory: () => {
    Object.entries(themeRepository.sysAdminDefault).forEach(([property, defaultValue]) => {
      const styleValue = memoryApi.getSavedStyleProp(property as ThemeProperty) ?? defaultValue
      document.documentElement.style.setProperty(property, styleValue)
    })

    const background = memoryApi.getSavedSelectedBackground()
    if (background) useThemeStore.setState({ selectedBackground: background })

    const themeName = memoryApi.getSavedThemeName()
    if (themeName) useThemeStore.setState({ selectedTheme: themeName })
  },
}

export const cssPropertyApi = {
  setStyleProp: (property: ThemeProperty, value: string) => {
    document.documentElement.style.setProperty(property, value)
    memoryApi.saveStyleProp(property, value)
    memoryApi.saveSelectedThemeName('custom')
    useThemeStore.setState({ selectedTheme: 'custom' })
  },

  setBackground: (background: BackgroundClass) => {
    useThemeStore.setState({ selectedBackground: background })
    memoryApi.saveSelectedBackground(background)
  },
}
