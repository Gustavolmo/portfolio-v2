import { WorkspaceLayout } from '@gustavolmo/react-window-manager'
import { themeApi } from './app-theme/theme-api.ts'
import { email, profile, projects, serverStat, settings } from './window-init.tsx'
import { FolderGit2, Mail, Router, Settings, UserRound } from 'lucide-react'
import WindowDesktopButton from './components/window-ui/window-desktop-button.tsx'
import WindowNavButton from './components/window-ui/window-nav-button.tsx'
import WindowView from './components/window-ui/window-view.tsx'
import './bg-styles/dark-rays-background.css'
import './bg-styles/blackhat-background.css'
import './bg-styles/retro-background.css'
import { useThemeStore } from './app-theme/theme-state.ts'
import ProjectsWindowContent from './components/window-ui/projects/projects-window-content.tsx'
import SettingsWindowInnerHtml from './components/window-ui/settings/settings-window-inner-html.tsx'
import ProfileWindowContent from './components/window-ui/profile/profile-window-content.tsx'

themeApi.initThemeFromMemory()

export default function Home() {
  const { selectedBackground } = useThemeStore()

  return (
    <main className="fixed w-full h-full flex flex-col">
      <WorkspaceLayout className="h-full w-full grow">
        <div className={`p-8 md:p-16 w-full h-full ${selectedBackground} mb-12`}>
          <WindowView windowName="Profile" Window={profile.Window}>
            <ProfileWindowContent />
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
          <WindowView defaultDock="right" windowName="Settings" Window={settings.Window}>
            <SettingsWindowInnerHtml />
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

      <nav className="w-full h-12 border-t border-zinc-500/20 theme-navbar flex px-4 gap-2 items-center z-50">
        <section className="flex w-fit overflow-x-auto theme-navbar-tabs">
          <WindowNavButton title="Profile" Button={profile.Button} />
          <WindowNavButton title="Projects" Button={projects.Button} />
          <WindowNavButton title="Email" Button={email.Button} />
          <WindowNavButton title="System" Button={serverStat.Button} />
        </section>

        <div className="flex items-center justify-center">
          <WindowNavButton
            title={<Settings className="h-5 w-5 theme-navbar-settings-button" />}
            Button={settings.Button}
          />
        </div>
      </nav>
    </main>
  )
}
