import { CircleOff, Radio, TriangleAlert, type LucideIcon } from 'lucide-react'
import RWMHero from './assets/RWM-hero.jpg'
import AllverkLogo from './assets/ALLVERK-logo.png'
import AllverkHero from './assets/ALLVERK-hero.jpg'

export type ProjectStatus = 'online' | 'offline' | 'disrupted'

export type ProjectImage = {
  src: string
  alt: string
}

export type Project = {
  title: string
  category: string
  status: ProjectStatus
  statusDisclaimer?: string
  description: string
  summary: string
  URLs: { address: string; cta: string }[]
  image?: ProjectImage
  showcaseImage?: ProjectImage
  role: string
  year: string
  technologies: string[]
  highlights: string[]
}

export const projectStatusDetails: Record<
  ProjectStatus,
  {
    label: string
    Icon: LucideIcon
    className: string
    textColor?: string
  }
> = {
  online: {
    label: 'Online',
    Icon: Radio,
    className: 'bg-emerald-600 text-emerald-100 border-white/50',
    textColor: 'bg-zinc-200 text-emerald-800',
  },
  offline: {
    label: 'Offline',
    Icon: CircleOff,
    className: 'bg-red-600 text-red-100 border-white/50',
    textColor: 'text-red-700 bg-red-100',
  },
  disrupted: {
    label: 'Disrupted',
    Icon: TriangleAlert,
    className: 'bg-amber-600 text-amber-100 border-white/50',
    textColor: 'text-amber-700 bg-amber-100',
  },
}

export const projects = {
  reactWindowManager: {
    title: 'React Window Manager',
    category: 'Open-source library',
    status: 'online',
    statusDisclaimer: undefined,
    image: undefined,
    showcaseImage: { src: RWMHero, alt: 'react-window-manager' },
    description: 'A desktop-style window manager for React applications.',
    summary:
      'React Window Manager is the framework powering this portfolio. It provides a workspace for independent, draggable, dockable windows, with external controls and isolated state for every window instance.',
    URLs: [{ address: 'https://gustavolmo.github.io/react-window-manager/', cta: 'Documentation' }],
    role: 'Creator & maintainer',
    year: '2025 — present',
    technologies: ['React', 'TypeScript', 'Zustand', 'Vite'],
    highlights: [
      'Reusable and customizable windowing API.',
      'Windows can be controlled, configured and styled independently.',
      'Optional workspace docking slots.',
      'Optional history api, allowing for undo and redo actions (try `ctrl+z` and `shift+ctrl+z`)',
      'The responsive UI with configurable breakpoint shifts from desktop to mobile view.',
      'Multi-window tiling like behavior based on window edge proximity.',
    ],
  },
  allverk: {
    title: 'ALLVERK',
    category: 'Saas',
    status: 'online',
    statusDisclaimer: undefined,
    image: { src: AllverkLogo, alt: 'allverk-logo' },
    showcaseImage: { src: AllverkHero, alt: 'allverk-hero' },
    description: 'Sweden`s simplest quotation tool',
    summary:
      'Allverk.se is a public, free website for finding and contacting tradespeople. It features a embedding based search, and AI powered recommendations.',
    URLs: [
      { address: 'https://www.allverk.se/', cta: 'Allverk' },
      { address: 'https://offert.allverk.se', cta: 'Offert.Allverk' },
    ],
    role: 'Founder & maintainer',
    year: '2024 — present',
    technologies: ['Go', 'Encore', 'React', 'TypeScript', 'Zustand', 'Vite'],
    highlights: [
      'allverk.se serves as a branding page, SEO traction, and trust building platform',
      'offert.allverk.se is a webagency-like Saas delivering structured leads to tradespeople. We leverage AI to compete with wbesite builders while also having the flexibility to create modern and custom pages for our clients',
    ],
  },
} satisfies Record<string, Project>
