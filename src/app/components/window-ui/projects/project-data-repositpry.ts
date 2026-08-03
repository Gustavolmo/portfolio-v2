import { CircleOff, Radio, TriangleAlert, type LucideIcon } from 'lucide-react'
import RWMHero from './assets/RWM-hero.jpg'
import allverkLogo from './assets/ALLVERK-logo.png'
import allverkHero from './assets/ALLVERK-hero.jpg'
import bootlrHero from './assets/bootlr-hero.png'
import bootlrLogo from './assets/bootlr-logo.png'
import mangomojiLogo from './assets/mangomoji-logo.png'
import mangomojiHero from './assets/mangomoji-hero.png'
import scaniaHero from './assets/scania-hero.jpg'

export type ProjectStatus = 'online' | 'offline' | 'disrupted'

export type ProjectImage = {
  src: string
  alt: string
  height?: string
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
    image: { src: allverkLogo, height: 'h-5', alt: 'allverk-logo' },
    showcaseImage: { src: allverkHero, alt: 'allverk-hero' },
    description: 'Sweden`s simplest quotation tool',
    summary:
      'Allverk.se is a public, free website for finding and contacting tradespeople. It features a embedding based search, and AI powered recommendations.',
    URLs: [
      { address: 'https://www.allverk.se/', cta: 'Allverk' },
      { address: 'https://offert.allverk.se', cta: 'Offert.Allverk' },
    ],
    role: 'Founder & maintainer',
    year: '2024 — present',
    technologies: ['Go', 'Encore', 'React', 'RR7', 'TypeScript', 'Zustand', 'Vite'],
    highlights: [
      'allverk.se serves as a branding page, SEO traction, and trust building platform.',
      'offert.allverk.se is a webagency-like Saas delivering structured leads to tradespeople. We leverage AI to compete with wbesite builders while also having the flexibility to create modern and custom pages for our clients.',
    ],
  },
  bootlr: {
    title: 'Bootlr',
    category: 'Saas',
    status: 'offline',
    statusDisclaimer: 'Discontinued, the project is no longer maintained',
    image: { src: bootlrLogo, height: 'h-16', alt: 'bootlr-logo' },
    showcaseImage: { src: bootlrHero, alt: 'bootlr-hero' },
    description: 'AI powered shopping',
    summary:
      'Bootlr was a chat interface with custom MCPs that allows a the model to manipulate the UI, Search products, and answer questions about products.',
    URLs: [],
    role: 'Founder & maintainer',
    year: '2023 — 2024',
    technologies: ['Go', 'Encore', 'Stencil.js', 'TypeScript', 'Zustand', 'Vite'],
    highlights: [
      'Search for products by talking to an LLM.',
      'Ask questions about size, usage, reviews, and available product details.',
      'The LLM is able to highlight and manipualte the UI, as well as incorporate product cards in the chat window.',
    ],
  },
  mangomoji: {
    title: 'Mangomoji',
    category: 'Saas',
    status: 'disrupted',
    statusDisclaimer: 'Discontinued, backend and database no longer active.',
    image: { src: mangomojiLogo, height: 'h-16', alt: 'mangomoji-logo' },
    showcaseImage: { src: mangomojiHero, alt: 'mangomoji-hero' },
    description: 'Emoji powered music',
    summary:
      'Mangomoji was a music interface platform. An LLM would assign an extensive list on songs based on every emoji combination ahead of time. We then would integrate with apple music and spotify to play the songs.',
    URLs: [{ address: 'https://mangomoji.com/app', cta: 'mangomoji.se' }],
    role: 'Co-founder & maintainer',
    year: '2022 — 2023',
    technologies: ['Go', 'Encore', 'React', 'TypeScript', 'MobX', 'Vite'],
    highlights: [
      'Select an emoji combination to find music.',
      'Apple music and Spotify integrations.',
      'Stripe integration for subscriptions and premium features.',
    ],
  },
  scania: {
    title: 'Scania CBO',
    category: 'Work',
    status: 'online',
    statusDisclaimer: undefined,
    image: undefined,
    showcaseImage: { src: scaniaHero, alt: 'mangomoji-hero' },
    description: 'Scania`s vehicle configuration back office',
    summary:
      'As a team, we develop interactive web applications that configure, vizualize and simulate real world vehicles. We also work with cross functional teams to integrate and coordinate new features and requirements.',
    URLs: [],
    role: 'Fullstack Software Developer',
    year: '2024 — present',
    technologies: ['C#', '.NET', 'stencil.js', 'Angular', 'TypeScript'],
    highlights: [
      'Rendering API, transforming CAD data into PNG vehicle images.',
      'ECS-like engine that maps the flat PNG image into image regions, enabling client interaction.',
      'High fidelity software, used by both R&D as well as internal sales teams.',
    ],
  },
} satisfies Record<string, Project>
