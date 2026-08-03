import { CircleOff, Radio, TriangleAlert, type LucideIcon } from 'lucide-react'

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
  url: string
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
    textColor: undefined
  },
  offline: {
    label: 'Offline',
    Icon: CircleOff,
    className: 'bg-red-600 text-red-100 border-white/50',
    textColor: 'text-red-700 bg-red-100'
  },
  disrupted: {
    label: 'Disrupted',
    Icon: TriangleAlert,
    className: 'bg-amber-600 text-amber-100 border-white/50',
    textColor: 'text-amber-700 bg-amber-100'
  },
}

export const projects = {
  reactWindowManager: {
    title: 'React Window Manager',
    category: 'Open-source library',
    status: 'online',
    statusDisclaimer: undefined,
    image: undefined,
    showcaseImage: undefined,
    description: 'A desktop-style window manager for React applications.',
    summary:
      'React Window Manager is the framework powering this portfolio. It provides a workspace for independent, draggable, dockable windows, with external controls and isolated state for every window instance.',
    url: 'https://gustavolmo.github.io/react-window-manager/',
    role: 'Creator & maintainer',
    year: '2025 — present',
    technologies: ['React', 'TypeScript', 'Zustand', 'Vite'],
    highlights: [
      'Designed a reusable windowing API for movable, resizable, and dockable application surfaces.',
      'Built isolated state management so windows can be controlled independently from anywhere in an application.',
      'Created documentation and examples focused on practical adoption and developer experience.',
    ],
  },
} satisfies Record<string, Project>
