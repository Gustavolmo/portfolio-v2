import { WorkspaceLayout } from '@gustavolmo/react-window-manager'
import { email, profile, projects, serverStat } from './window-ui/window-init.tsx'
import { FolderGit2, Mail, Router, UserRound } from 'lucide-react'
import WindowDesktopButton from './window-ui/window-desktop-icon.tsx'
import WindowNavButton from './window-ui/window-nav-button.tsx'
import NavbarSettings from './nav-ui/settings.tsx'

export default function Home() {
  return (
    <main className="fixed w-full h-full flex flex-col">
      <WorkspaceLayout className="h-full w-full grow">
        <div className="p-8 md:p-16 w-full h-full desktop-background mb-12">
          <profile.Window windowName="Profile">PROFILE</profile.Window>
          <projects.Window windowName="Projects">PROJECTS</projects.Window>
          <email.Window windowName="Email">EMAIL</email.Window>
          <serverStat.Window windowName="System">SERVER STATS</serverStat.Window>

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
