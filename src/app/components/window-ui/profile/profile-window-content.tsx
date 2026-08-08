import { BookOpenText } from 'lucide-react'
import { experience, projects, skills } from './profile-data-repository.ts'
import SectionTitle from './profile-section-title.tsx'

export default function ProfileWindowContent() {
  return (
    <article className="theme-text-primary-color theme-text-font-family h-full w-full overflow-y-auto bg-zinc-950/10 p-4">
      <div className="mx-auto max-w-4xl space-y-8 pb-4">
        <header className="flex flex-wrap items-end justify-between gap-4 border border-white/20 bg-zinc-900/10 p-4">
          <div className="min-w-[16rem] grow">
            <p className="text-opacity-55 text-xs uppercase tracking-[0.24em]">Curriculum vitae</p>
            <h1 className="mt-3 text-3xl font-medium tracking-tight">Gustavo L.M. de Oliveira</h1>
            <p className="text-opacity-70 mt-2 text-base">Software Developer · Stockholm, Sweden</p>
          </div>
          <div className="text-opacity-60 min-w-[14rem] text-sm leading-6">
            <a
              target="_blank"
              className="block w-fit hover:opacity-100 underline opacity-80 text-cyan-600"
              href="tel:+46723777908"
            >
              +46 72 377 79 08
            </a>
            <a
              target="_blank"
              className="block w-fit hover:opacity-100 underline opacity-80 text-cyan-600"
              href="mailto:lmo.gustavo@gmail.com"
            >
              lmo.gustavo@gmail.com
            </a>
            <div className="mt-2 flex flex-wrap gap-x-3 gap-y-1">
              <a
                target="_blank"
                className="block w-fit hover:opacity-100 opacity-80 text-cyan-600"
                href="https://www.linkedin.com/in/gustavolmo/"
              >
                LinkedIn
              </a>
              <a
                target="_blank"
                className="block w-fit hover:opacity-100 opacity-80 text-cyan-600"
                href="https://github.com/Gustavolmo"
              >
                GitHub
              </a>
            </div>
          </div>
        </header>

        <section className="border-l-4 bg-zinc-300/10 p-4  shadow-md border border-zinc-950/10">
          <SectionTitle>
            <BookOpenText />
            Summary
          </SectionTitle>
          <p className="text-opacity-90 mt-3 max-w-3xl text-base leading-7">
            Software developer with four years of experience building production applications across
            C#, .NET, TypeScript, React, Go, and PostgreSQL. Builds testable APIs and user-facing
            tools for complex real-world workflows, including CAD-derived vehicle configuration,
            simulation, and interactive spatial visualisation. Combines backend and frontend
            engineering with hands-on stakeholder discovery to turn technical requirements into
            practical products.
          </p>
        </section>

        <section className="border-y border-white/20 bg-zinc-900/10 px-4 py-6">
          <SectionTitle>
            Technical skills
          </SectionTitle>
          <div className="mt-4 flex gap-px flex-wrap">
            {Object.entries(skills).map(([group, entries]) => (
              <div className="p-4 min-w-20 grow" key={group}>
                <h3 className="text-opacity-90 text-sm font-medium">{group}</h3>
                <p className="text-opacity-60 mt-2 text-sm leading-6">{entries.join(' · ')}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <div className="w-full bg-zinc-300/20 p-3 shadow-md border border-zinc-950/10">
            <SectionTitle>Relevant experience</SectionTitle>
          </div>
          <div className="mt-4 divide-y divide-zinc-800 border-y border-white/20">
            {experience.map((item) => (
              <article className="bg-zinc-950/10 px-4 py-5 even:bg-zinc-900/10" key={item.company}>
                <div className="flex flex-wrap justify-between gap-x-6 gap-y-2">
                  <div className="min-w-[14rem] grow">
                    <h3 className="text-opacity-90 font-medium">{item.company}</h3>
                    <p className="text-opacity-70 mt-1 text-sm">{item.role}</p>
                  </div>
                  <p className="text-opacity-55 min-w-[13rem] text-sm leading-6">
                    {item.period}
                    <br />
                    {item.location}
                  </p>
                </div>
                <ul className="text-opacity-70 mt-4 list-disc space-y-1 pl-5 text-sm leading-6">
                  {item.details.map((detail) => (
                    <li key={detail}>{detail}</li>
                  ))}
                </ul>
                {'technologies' in item ? (
                  <p className="text-opacity-60 mt-3 text-sm leading-6">
                    Technologies: {item.technologies}
                  </p>
                ) : null}
              </article>
            ))}
          </div>
        </section>

        <section>
          <div className="w-full bg-zinc-300/20 p-3 shadow-md border border-zinc-950/10">
            <SectionTitle>Selected projects</SectionTitle>
          </div>
          <div className="mt-4 divide-y divide-zinc-800 border-y border-white/20">
            {projects.map((project) => (
              <article className="bg-zinc-950/10 px-4 py-5 even:bg-zinc-900/10" key={project.name}>
                <h3 className="text-opacity-90 font-medium">{project.name}</h3>
                <p className="text-opacity-70 mt-1 text-sm leading-6">{project.description}</p>
                <div className="mt-2 flex flex-wrap gap-x-3 gap-y-1">
                  {(project.links ?? [project.link]).map((link) => (
                    <a
                      key={link}
                      target="_blank"
                      href={link}
                      className="hover:opacity-100 opacity-80 underline text-sm text-cyan-600"
                    >
                      {link.replace('https://', '')}
                    </a>
                  ))}
                </div>
                <ul className="text-opacity-70 mt-4 list-disc space-y-1 pl-5 text-sm leading-6">
                  {project.details.map((detail) => (
                    <li key={detail}>{detail}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="flex flex-wrap gap-px border border-white/20 bg-zinc-900/10">
          <div className="min-w-[16rem] p-4 grow">
            <SectionTitle>Education</SectionTitle>
            <ul className="text-opacity-70 mt-3 space-y-2 text-sm leading-6">
              <li>
                Linnaeus University — Master&apos;s Degree, International Marketing · 2017 - 2018
              </li>
              <li>
                Linnaeus University — Bachelor&apos;s Degree, International Marketing · 2013 - 2016
              </li>
              <li>
                BPP University — Foundation Degree, Business Administration and Management · 2011 -
                2012
              </li>
            </ul>
          </div>
          <div className="min-w-[16rem] p-4 grow">
            <SectionTitle>Languages</SectionTitle>
            <p className="text-opacity-70 mt-3 text-sm leading-6">
              Portuguese — Native · English — Bilingual · Swedish — Professional working proficiency
              · Spanish — Limited working proficiency
            </p>
          </div>
        </section>
      </div>
    </article>
  )
}
