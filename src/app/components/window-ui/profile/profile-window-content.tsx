import { BookOpenText, Hammer } from 'lucide-react'
import { experience, projects, skills } from './profile-data-repository.ts'
import SectionTitle from './profile-section-title.tsx'

export default function ProfileWindowContent() {
  return (
    <article className="theme-text-primary-color theme-text-font-family h-full w-full overflow-y-auto p-4">
      <div className="mx-auto max-w-4xl space-y-8 pb-4">
        <header className="flex flex-wrap items-end justify-between gap-4 border-b border-zinc-100/20 pb-6">
          <div className="min-w-[16rem] grow">
            <p className="text-opacity-55 text-xs uppercase tracking-[0.24em]">Curriculum vitae</p>
            <h1 className="mt-3 text-3xl font-medium tracking-tight">Gustavo L.M. de Oliveira</h1>
            <p className="text-opacity-70 mt-2 text-base">
              Full-Stack Software Engineer · Stockholm, Sweden
            </p>
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
          {/* <button
            className="print:hidden border border-zinc-100/20 bg-zinc-950/20 px-3 py-2 text-sm text-opacity-70 transition-opacity hover:opacity-100"
            type="button"
          >
            Print / Save as PDF
          </button> */}
        </header>

        <section>
          <SectionTitle>
            <BookOpenText />
            Summary
          </SectionTitle>
          <p className="text-opacity-90 mt-3 max-w-3xl text-base leading-7">
            Full-stack software engineer building production web applications with Go, C#,
            TypeScript, React, .NET, and PostgreSQL. I combine backend development, frontend
            architecture, product thinking, user research, SEO, and analytics to turn ambiguous
            problems into useful software. Experienced in enterprise environments and independent
            product development, with a strong interest in scalable systems and complex frontend
            state management.
          </p>
        </section>

        <section className="border-y border-zinc-100/15 py-6">
          <SectionTitle>
            <Hammer />
            Technical skills
          </SectionTitle>
          <div className="mt-4 flex flex-wrap gap-x-8 gap-y-5">
            {Object.entries(skills).map(([group, entries]) => (
              <div className="min-w-[12rem] grow basis-[14rem]" key={group}>
                <h3 className="text-opacity-90 text-sm font-medium">{group}</h3>
                <p className="text-opacity-60 mt-2 text-sm leading-6">{entries.join(' · ')}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <div className="w-full p-2 bg-zinc-900/10">
            <SectionTitle>Relevant experience</SectionTitle>
          </div>
          <div className="mt-4 divide-y divide-zinc-100/15 border-y border-zinc-100/15">
            {experience.map((item) => (
              <article className="py-5" key={item.company}>
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
              </article>
            ))}
          </div>
        </section>

        <section>
          <div className="w-full p-2 bg-zinc-900/10">
            <SectionTitle>Selected projects</SectionTitle>
          </div>
          <div className="mt-4 divide-y divide-zinc-100/15 border-y border-zinc-100/15">
            {projects.map((project) => (
              <article className="py-5" key={project.name}>
                <h3 className="text-opacity-90 font-medium">{project.name}</h3>
                <p className="text-opacity-70 mt-1 text-sm leading-6">{project.description}</p>
                <a
                  target="_blank"
                  href={project.link}
                  className="hover:opacity-100 opacity-80 underline mt-2 text-sm text-cyan-600"
                >
                  {project.link}
                </a>
                <ul className="text-opacity-70 mt-4 list-disc space-y-1 pl-5 text-sm leading-6">
                  {project.details.map((detail) => (
                    <li key={detail}>{detail}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="flex flex-wrap gap-x-8 gap-y-6 border-t border-zinc-100/15 p-3 bg-zinc-900/5">
          <div className="min-w-[16rem] grow basis-[22rem]">
            <SectionTitle>Education</SectionTitle>
            <ul className="text-opacity-70 mt-3 space-y-2 text-sm leading-6">
              <li>
                Linnaeus University — Master&apos;s Degree, International Marketing · 2017 — 2018
              </li>
              <li>
                Linnaeus University — Bachelor&apos;s Degree, International Marketing · 2013 — 2016
              </li>
              <li>
                BPP University — Foundation Degree, Business Administration and Management · 2011 —
                2012
              </li>
            </ul>
          </div>
          <div className="min-w-[16rem] grow basis-[22rem]">
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
