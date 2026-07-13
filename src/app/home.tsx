import { WorkspaceLayout } from '@gustavolmo/react-window-manager'
import { email, profile, projects, serverStat } from './components/window-ui/window-init.tsx'
import { FolderGit2, Mail, Router, UserRound } from 'lucide-react'
import WindowDesktopButton from './components/window-ui/window-desktop-icon.tsx'
import WindowNavButton from './components/window-ui/window-nav-button.tsx'
import NavbarSettings from './components/nav-ui/settings.tsx'
import './styles/background-animation.css'
import WindowView from './components/window-ui/window-view.tsx'

export default function Home() {
  return (
    <main className="fixed w-full h-full flex flex-col">
      <WorkspaceLayout className="h-full w-full grow">
        <div className="p-8 md:p-16 w-full h-full desktop-background mb-12">
          <WindowView title="PROFILE" Window={profile.Window}>
            PROFILE
          </WindowView>
          <WindowView title="PROJECTS" Window={projects.Window}>
            PROJECTS
          </WindowView>
          <WindowView title="EMAIL" Window={email.Window}>
            EMAIL
          </WindowView>
          <WindowView title="SYSTEM" Window={serverStat.Window}>
            SYSTEM
          </WindowView>

          <section
            className="
            max-w-4xl
              grid
              w-full
              gap-8
              justify-items-center
              [grid-template-columns:repeat(auto-fit,minmax(120px,1fr))]"
          >
            <WindowDesktopButton title="Profile" Button={profile.Button} Icon={UserRound} />
            <WindowDesktopButton title="Projects" Button={projects.Button} Icon={FolderGit2} />
            <WindowDesktopButton title="Email" Button={email.Button} Icon={Mail} />
            <WindowDesktopButton title="System" Button={serverStat.Button} Icon={Router} />
          </section>
        </div>
      </WorkspaceLayout>

      <nav className="w-full h-12 bg-zinc-900/90 flex gap-2 px-4 items-center justify-between z-50">
        <section className="flex w-fit overflow-x-auto">
          <WindowNavButton title="Profile" Button={profile.Button} />
          <WindowNavButton title="Projects" Button={projects.Button} />
          <WindowNavButton title="Email" Button={email.Button} />
          <WindowNavButton title="System" Button={serverStat.Button} />
        </section>

        <NavbarSettings />
      </nav>
    </main>
  )
}
