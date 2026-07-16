import { WorkspaceLayout } from '@gustavolmo/react-window-manager'
import { email, profile, projects, serverStat } from './window-init.tsx'
import { FolderGit2, Mail, Router, UserRound } from 'lucide-react'
import WindowDesktopButton from './components/window-ui/window-desktop-icon.tsx'
import WindowNavButton from './components/window-ui/window-nav-button.tsx'
import NavbarSettings from './components/nav-ui/settings.tsx'
import WindowView from './components/window-ui/window-view.tsx'
import './styles/dark-rays-background.css'
import './styles/clinic-background.css'
import './styles/zen-background.css'
import './styles/cyberpunk-neon-background.css'
import './styles/blackhat-background.css'
import './styles/galaxy-background.css'
import './styles/deluxe-background.css'
import './styles/retro-background.css'
import { useThemeStore } from './app-theme/theme-state.ts'
import ProjectsWindowContent from './components/window-ui/projects/projects-window-content.tsx'

export default function Home() {
  const { selectedBackground } = useThemeStore()

  return (
    <main className="fixed w-full h-full flex flex-col">
      <WorkspaceLayout className="h-full w-full grow">
        <div className={`p-8 md:p-16 w-full h-full ${selectedBackground} mb-12`}>
          <WindowView windowName="Profile" Window={profile.Window}>
            PROFILE
          </WindowView>
          <WindowView windowName="Projects" Window={projects.Window}>
            <ProjectsWindowContent />
          </WindowView>
          <WindowView windowName="Email" Window={email.Window}>
            EMAIL
          </WindowView>
          <WindowView windowName="System" Window={serverStat.Window}>
            SYSTEM
          </WindowView>

          <section
            className="
              max-w-4xl grid w-full gap-8 justify-items-center
              [grid-template-columns:repeat(auto-fit,minmax(120px,1fr))]"
          >
            <WindowDesktopButton title="Profile" Button={profile.Button} Icon={UserRound} />
            <WindowDesktopButton title="Projects" Button={projects.Button} Icon={FolderGit2} />
            <WindowDesktopButton title="Email" Button={email.Button} Icon={Mail} />
            <WindowDesktopButton title="System" Button={serverStat.Button} Icon={Router} />
          </section>
        </div>
      </WorkspaceLayout>

      <nav className="w-full h-12 theme-navbar flex px-4 items-center z-50">
        <section className="flex w-fit overflow-x-auto theme-navbar-tabs">
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
