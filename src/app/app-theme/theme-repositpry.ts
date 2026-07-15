import { themeNames, ThemeRepository } from "./model.ts";

export const themeRepository: Record<themeNames, ThemeRepository> = {
  sysAdmin: {
    '--window-radius': '2px',
    '--window-bg-color': 'white',
    '--window-border-color': '#52525b',
    '--window-border-style': 'solid',
    '--window-border-thickness': '1px',

    '--window-navhandle-bg-color': '#262626',
    '--window-navhandle-title-color': 'white',

    '--navbar-bg-color': '#18181b',
    '--navbar-opacity': '10%',
    '--navbar-justify': 'space-between',
    '--navbar-tabs-gap': '0px',

    '--navbar-window-button-bg': '#18181b',
    '--navbar-window-button-color': '#a1a1aa',
    '--navbar-window-button-font-size': '0.75rem',
    '--navbar-window-button-line-height': '1rem',
    '--navbar-window-button-height': '2.25rem',
    '--navbar-window-button-padding-inline': '1rem',

    '--navbar-settings-button-color': '#f4f4f5',

    '--desktop-window-icon-color': '#f4f4f5',
    '--desktop-window-icon-width': 'fit-content',
    '--desktop-window-icon-padding': '1rem',
    '--desktop-window-icon-border-radius': '0.375rem',
    '--desktop-window-icon-background': 'rgb(82 82 91 / 0.5)',

    '--desktop-window-icon-border-top-width': '0',
    '--desktop-window-icon-border-right-width': '0',
    '--desktop-window-icon-border-bottom-width': '2px',
    '--desktop-window-icon-border-left-width': '0',

    '--desktop-window-icon-border-top-style': 'solid',
    '--desktop-window-icon-border-right-style': 'solid',
    '--desktop-window-icon-border-bottom-style': 'solid',
    '--desktop-window-icon-border-left-style': 'solid',

    '--desktop-window-icon-border-top-color': 'transparent',
    '--desktop-window-icon-border-right-color': 'transparent',
    '--desktop-window-icon-border-bottom-color': '#a1a1aa',
    '--desktop-window-icon-border-left-color': 'transparent',

    '--text-primary-color': '#f4f4f5',
    '--text-primary-font-family': 'Arial, Helvetica, sans-serif',
  },

  clinic: {
    '--window-radius': '14px',
    '--window-bg-color': '#f8fafc',
    '--window-border-color': '#bae6fd',
    '--window-border-style': 'solid',
    '--window-border-thickness': '1px',

    '--window-navhandle-bg-color': '#e0f2fe',
    '--window-navhandle-title-color': '#0c4a6e',

    '--navbar-bg-color': '#ffffff',
    '--navbar-opacity': '100%',
    '--navbar-justify': 'space-between',
    '--navbar-tabs-gap': '0.5rem',

    '--navbar-window-button-bg': '#f0f9ff',
    '--navbar-window-button-color': '#0369a1',
    '--navbar-window-button-font-size': '0.75rem',
    '--navbar-window-button-line-height': '1rem',
    '--navbar-window-button-height': '2.5rem',
    '--navbar-window-button-padding-inline': '1rem',

    '--navbar-settings-button-color': '#0284c7',

    '--desktop-window-icon-color': '#075985',
    '--desktop-window-icon-width': 'fit-content',
    '--desktop-window-icon-padding': '1rem',
    '--desktop-window-icon-border-radius': '1rem',
    '--desktop-window-icon-background': 'rgb(224 242 254 / 0.85)',

    '--desktop-window-icon-border-top-width': '1px',
    '--desktop-window-icon-border-right-width': '1px',
    '--desktop-window-icon-border-bottom-width': '3px',
    '--desktop-window-icon-border-left-width': '1px',

    '--desktop-window-icon-border-top-style': 'solid',
    '--desktop-window-icon-border-right-style': 'solid',
    '--desktop-window-icon-border-bottom-style': 'solid',
    '--desktop-window-icon-border-left-style': 'solid',

    '--desktop-window-icon-border-top-color': '#bae6fd',
    '--desktop-window-icon-border-right-color': '#bae6fd',
    '--desktop-window-icon-border-bottom-color': '#38bdf8',
    '--desktop-window-icon-border-left-color': '#bae6fd',

    '--text-primary-color': '#0f172a',
    '--text-primary-font-family': '"Inter", "Segoe UI", Arial, Helvetica, sans-serif',
  },
} as const
