// type BackgroundClasses = 'dark-rays-desktop-background'
export type ThemeRepository = Record<ThemeProperty, string>

export type themeNames = 'sysAdmin' | 'clinic'

export type ThemeProperty =
  | '--window-radius'
  | '--window-bg-color'
  | '--window-border-color'
  | '--window-border-style'
  | '--window-border-thickness'
  //
  | '--window-navhandle-bg-color'
  | '--window-navhandle-title-color'
  //
  | '--navbar-bg-color'
  | '--navbar-opacity'
  | '--navbar-justify'
  | '--navbar-tabs-gap'
  //
  | '--navbar-window-button-bg'
  | '--navbar-window-button-color'
  | '--navbar-window-button-font-size'
  | '--navbar-window-button-line-height'
  | '--navbar-window-button-height'
  | '--navbar-window-button-padding-inline'
  //
  | '--navbar-settings-button-color'
  //
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
  //
  | '--text-primary-color'
  | '--text-primary-font-family'
