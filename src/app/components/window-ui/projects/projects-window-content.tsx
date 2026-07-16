import { useState } from 'react'

export default function ProjectsWindowContent() {
  const [selectedTab, setSelectedTab] = useState<'project1' | 'project2'>('project1')

  return (
    <div className="h-full w-full relative pt-8">
      <section className="absolute flex top-0 gap-2 p-2 w-full overflow-x-auto theme-window-navhandle-tabs">
        <button
          className={`theme-text-primary ${selectedTab === 'project1' ? 'opacity-100' : 'opacity-50'}`}
          onClick={() => setSelectedTab('project1')}
        >
          project1
        </button>
        <button
          className={`theme-text-primary ${selectedTab === 'project2' ? 'opacity-100' : 'opacity-50'}`}
          onClick={() => setSelectedTab('project2')}
        >
         <p className='text-opacity-50'>project2</p>
        </button>
      </section>
    </div>
  )
}
