export type ThemeRepository = Record<ThemeProperty, string>
export type BackgroundClass =
  | 'dark-rays-desktop-background'
  | 'blackhat-desktop-background'
  | 'retro-desktop-background'
  | 'brutalist-desktop-background'
  | 'custom-background-color'

export type ThemeState = ThemeName | 'custom'
export type ThemeName = 'sysAdminDefault' | 'blackhat' | 'retro' | 'brutalist'

export type ThemeProperty =
  | '--custom-background-color'
  //.theme-window
  | '--window-radius'
  | '--window-bg-color'
  | '--window-border-color'
  | '--window-border-style'
  | '--window-border-thickness'
  //.theme-window-navhandle
  | '--window-navhandle-bg-color'
  | '--window-navhandle-title-color'
  //.theme-window-navhandle-tabs
  | '--window-navhandle-tabs-bg-color'
  | '--window-navhandle-tabs-text-color'
  //.theme-navbar
  | '--navbar-bg-color'
  | '--navbar-opacity'
  | '--navbar-justify'
  // .theme-navbar-tabs
  | '--navbar-tabs-gap'
  //.theme-navbar-window-button
  | '--navbar-window-button-bg'
  | '--navbar-window-button-color'
  | '--navbar-window-button-font-size'
  | '--navbar-window-button-line-height'
  | '--navbar-window-button-height'
  | '--navbar-window-button-padding-inline'
  | '--navbar-window-button-radius'
  | '--navbar-window-button-border-top-width'
  | '--navbar-window-button-border-right-width'
  | '--navbar-window-button-border-bottom-width'
  | '--navbar-window-button-border-left-width'
  | '--navbar-window-button-border-top-style'
  | '--navbar-window-button-border-right-style'
  | '--navbar-window-button-border-bottom-style'
  | '--navbar-window-button-border-left-style'
  | '--navbar-window-button-border-top-color'
  | '--navbar-window-button-border-right-color'
  | '--navbar-window-button-border-bottom-color'
  | '--navbar-window-button-border-left-color'
  //.theme-navbar-settings-button
  | '--navbar-settings-button-color'
  //.theme-desktop-window-icon
  | '--desktop-window-icon-color'
  | '--desktop-window-icon-width'
  | '--desktop-window-icon-padding'
  | '--desktop-window-icon-border-radius'
  | '--desktop-window-icon-background'
  | '--desktop-window-icon-border-top-width'
  | '--desktop-window-icon-border-right-width'
  | '--desktop-window-icon-border-bottom-width'
  | '--desktop-window-icon-border-left-width'
  | '--desktop-window-icon-border-top-style'
  | '--desktop-window-icon-border-right-style'
  | '--desktop-window-icon-border-bottom-style'
  | '--desktop-window-icon-border-left-style'
  | '--desktop-window-icon-border-top-color'
  | '--desktop-window-icon-border-right-color'
  | '--desktop-window-icon-border-bottom-color'
  | '--desktop-window-icon-border-left-color'
  //.theme-text-primary
  | '--text-primary-color'
  | '--text-primary-font-family'
