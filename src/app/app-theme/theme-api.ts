import { themeNames, ThemeProperty } from "./model.ts"
import { themeRepository } from "./theme-repositpry.ts"

export const themeApi = {
  setTheme: (themeName: themeNames) => {
    Object.entries(themeRepository[themeName]).forEach(([property, styleValue]) => {
      cssPropertyApi.updateStyleProp(property as ThemeProperty, styleValue)
    })
  },

  setLatestTheme: () => {
    Object.entries(themeRepository.sysAdmin).forEach(([property, defaultValue]) => {
      const styleValue = cssPropertyApi.getSavedStyleProp(property as ThemeProperty) ?? defaultValue
      cssPropertyApi.updateStyleProp(property as ThemeProperty, styleValue)
    })
  },
}

export const cssPropertyApi = {
  updateStyleProp: (property: ThemeProperty, value: string) => {
    document.documentElement.style.setProperty(property, value)
    localStorage.setItem(property, value)
  },

  getSavedStyleProp: (property: ThemeProperty): string | null => {
    return localStorage.getItem(property)
  },
}

themeApi.setLatestTheme()