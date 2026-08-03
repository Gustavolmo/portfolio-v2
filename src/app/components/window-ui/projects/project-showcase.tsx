import { ExternalLink } from 'lucide-react'
import { projectStatusDetails, type Project } from './project-data-repositpry.ts'

type Props = {
  project: Project
}

export default function ProjectShowcase({ project }: Props) {
  const status = projectStatusDetails[project.status]
  const StatusIcon = status.Icon

  return (
    <article className="theme-text-primary-color theme-text-font-family h-full w-full overflow-y-auto px-4 py-1">
      <div className="mx-auto max-w-4xl">
        <section>
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div className="min-w-[14rem] flex flex-col w-full gap-2">
              <div
                className={`mt-3 w-fit px-3 pt-0.5 border rounded-full mb-1 ${status.className}`}
              >
                <span className="inline-flex items-center gap-1.5 text-xs font-medium">
                  <StatusIcon size={13} />
                  {status.label}
                </span>
              </div>
              {project.statusDisclaimer && (
                <p
                  className={`mt-2 max-w-sm text-xs leading-5 opacity-80 box-decoration-clone inline mb-4 w-fit px-2 ${status.textColor}`}
                >
                  {project.statusDisclaimer}
                </p>
              )}

              <p className="text-opacity-55 text-xs uppercase tracking-[0.2em]">
                {project.category}
              </p>

              <h1 className="mt-2 text-3xl font-medium tracking-tight">{project.title}</h1>
              <p className="text-opacity-70 mt-2 text-base leading-7">{project.description}</p>
            </div>
            {project.image && (
              <img
                alt={project.image.alt}
                className="h-28 w-44 border border-zinc-100/20 object-cover"
                src={project.image.src}
              />
            )}
          </div>

          <p className="text-opacity-90 mt-6 max-w-3xl leading-7">{project.summary}</p>

          <dl className="mt-6 flex flex-wrap gap-x-8 gap-y-4 border-y border-zinc-100/15 bg-zinc-600/10 p-4 text-sm">
            <div className="min-w-[10rem] grow">
              <dt className="text-opacity-55 text-xs uppercase tracking-[0.16em]">Role</dt>
              <dd className="text-opacity-80 mt-1">{project.role}</dd>
            </div>
            <div className="min-w-[10rem] grow">
              <dt className="text-opacity-55 text-xs uppercase tracking-[0.16em]">Timeline</dt>
              <dd className="text-opacity-80 mt-1">{project.year}</dd>
            </div>
          </dl>

          <a
            className="text-opacity-90 mt-7 inline-flex items-center gap-2 border border-zinc-100/25 bg-zinc-950/20 px-3 py-2 text-sm transition-opacity hover:opacity-70"
            href={project.url}
            rel="noreferrer"
            target="_blank"
          >
            Visit project
            <ExternalLink size={15} />
          </a>

          {project.showcaseImage && (
            <figure className="mt-6">
              <img
                alt={project.showcaseImage.alt}
                className="max-h-[28rem] w-full border border-zinc-100/20 object-cover"
                src={project.showcaseImage.src}
              />
            </figure>
          )}

          <section className="mt-6">
            <h2 className="text-opacity-55 text-xs uppercase tracking-[0.2em]">Highlights</h2>
            <ul className="text-opacity-75 mt-3 list-disc space-y-2 pl-5 text-sm leading-6">
              {project.highlights.map((highlight) => (
                <li key={highlight}>{highlight}</li>
              ))}
            </ul>
          </section>

          <section className="mt-6">
            <h2 className="text-opacity-55 text-xs uppercase tracking-[0.2em]">Built with</h2>
            <ul className="mt-3 flex flex-wrap gap-2">
              {project.technologies.map((technology) => (
                <li
                  className="text-opacity-70 border border-zinc-100/20 bg-zinc-950/20 px-3 py-1.5 text-sm"
                  key={technology}
                >
                  {technology}
                </li>
              ))}
            </ul>
          </section>

          {/* <a
            className="text-opacity-90 mt-7 inline-flex items-center gap-2 border border-zinc-100/25 bg-zinc-950/20 px-3 py-2 text-sm transition-opacity hover:opacity-70"
            href={project.url}
            rel="noreferrer"
            target="_blank"
          >
            Visit project
            <ExternalLink size={15} />
          </a> */}
        </section>
      </div>
    </article>
  )
}
