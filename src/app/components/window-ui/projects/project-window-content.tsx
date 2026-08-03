import { useState } from 'react'
import { projects } from './project-data-repositpry.ts'
import ProjectShowcase from './project-showcase.tsx'

export default function ProjectWindowContent() {
  const [selectedTab, setSelectedTab] = useState<
    'RWM' | 'Scania' | 'Allverk' | 'Bootlr' | 'Mangomoji'
  >('RWM')

  const tabs = (
    <section className="absolute flex left-0 top-0 gap-4 p-2 w-full overflow-x-auto theme-window-navhandle-tabs">
      <button
        className={`theme-text-font-family ${selectedTab === 'RWM' ? 'opacity-100' : 'opacity-50'}`}
        onClick={() => setSelectedTab('RWM')}
      >
        RWM
      </button>
      <button
        className={`theme-text-font-family ${selectedTab === 'Allverk' ? 'opacity-100' : 'opacity-50'}`}
        onClick={() => setSelectedTab('Allverk')}
      >
        Allverk
      </button>
      <button
        className={`theme-text-font-family ${selectedTab === 'Bootlr' ? 'opacity-100' : 'opacity-50'}`}
        onClick={() => setSelectedTab('Bootlr')}
      >
        Bootlr
      </button>
      <button
        className={`theme-text-font-family ${selectedTab === 'Mangomoji' ? 'opacity-100' : 'opacity-50'}`}
        onClick={() => setSelectedTab('Mangomoji')}
      >
        Mangomoji
      </button>
      <button
        className={`theme-text-font-family ${selectedTab === 'Scania' ? 'opacity-100' : 'opacity-50'}`}
        onClick={() => setSelectedTab('Scania')}
      >
        Scania
      </button>
    </section>
  )

  return (
    <div className="h-full w-full relative p-1 pt-12">
      {tabs}
      {selectedTab === 'RWM' && <ProjectShowcase project={projects.reactWindowManager} />}
      {selectedTab === 'Allverk' && <ProjectShowcase project={projects.allverk} />}
      {selectedTab === 'Bootlr' && <ProjectShowcase project={projects.bootlr} />}
      {selectedTab === 'Mangomoji' && <ProjectShowcase project={projects.mangomoji} />}
      {selectedTab === 'Scania' && <ProjectShowcase project={projects.scania} />}
    </div>
  )
}
