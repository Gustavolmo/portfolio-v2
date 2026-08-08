export const skills = {
  Languages: ['C#', 'Go', 'TypeScript / JavaScript', 'SQL'],
  Technologies: [
    '.NET',
    'React',
    'Next.js',
    'Express.js',
    'Encore',
    'REST APIs',
    'PostgreSQL',
    'MongoDB',
    'AWS',
  ],
  Areas: [
    'Microservices',
    'Automated Testing',
    'CI/CD',
    'Technical Visualisation',
    'Product Development',
    'User Research',
    'Frontend architecture',
  ],
}

export const experience = [
  {
    company: 'Scania Group',
    role: 'Software Developer',
    period: 'January 2024 — Present',
    location: 'Södertälje, Stockholm, Sweden',
    details: [
      'Develop and maintain production .NET microservices and TypeScript applications supporting internal sales, R&D, and body-builder workflows.',
      'Build vehicle configuration and simulation capabilities that consume R&D APIs and CAD-derived data to produce performance information and visual representations.',
      'Rebuilt a data-driven dynamic forms solution with full dependency-injection support, improving testability and maintainability.',
      'Created an ECS-inspired C# backend system that supplies clients with interactive SVG regions and placement data for vehicle imagery.',
      'Write automated tests primarily with xUnit and Jest; contribute to CI/CD fixes and application operation in AWS.',
      'Work with stakeholders to understand vehicle configuration constraints and how bodywork, trailers, equipment, and load carriers affect the final solution.',
    ],
    technologies: 'C# · .NET · TypeScript · REST APIs · SVG · xUnit · Jest · AWS',
  },
  {
    company: 'School of Applied Technology (SALT)',
    role: 'Software Developer',
    period: 'April 2023 — March 2025',
    location: 'Stockholm, Sweden',
    details: [
      'Built full-stack applications in collaborative educational and professional project environments.',
      'Developed frontend and backend solutions with TypeScript, JavaScript, React, Next.js, Express.js, and MongoDB.',
      'Applied agile delivery practices, code reviews, testing, and iterative product development.',
    ],
  },
  {
    company: 'Klarna',
    role: 'Business Operations Specialist (CTO Office)',
    period: 'September 2022 — January 2023',
    location: 'Stockholm, Sweden',
    details: [
      'Supported executive operations within the CTO Office.',
      'Managed calendars, meeting preparation, and executive communications.',
      'Worked closely with engineering and leadership stakeholders.',
    ],
  },
  {
    company: 'Brazilian Air Force',
    role: 'Defence Attaché Office - Administrative Assistant',
    period: 'September 2018 — September 2022',
    location: 'Stockholm, Sweden',
    details: [
      'Produced technical and administrative documentation.',
      'Conducted analysis and reporting on current events and topics of interest.',
      'Coordinated international visits and official events.',
      'Provided translation and interpretation services.',
    ],
  },
]

export const projects = [
  {
    name: 'Allverk',
    description:
      'Product platform for Swedish tradespeople, built from the ground up, with a public search experience and a multi-tenant lead-management application.',
    link: 'https://www.allverk.se',
    links: ['https://www.allverk.se', 'https://offert.allverk.se'],
    details: [
      'Designed and developed the product architecture across backend, frontend, search, email, and customer workflows.',
      'Built offert.allverk.se as a multi-tenant lead-generation funnel, connecting Google Ads, Google Analytics, and a custom single-page landing experience for each tradesperson.',
      'Built Go backend services with Encore, including email functionality, and integrated React Router 7 SSG builds with a custom Go web server; use Zustand on the client and maintain preview, test, and production environments with automated testing.',
      'Built a custom Go vector-search service using in-memory data structures and pointers; reduced average search time to approximately 3 ms, after which embedding-generation network calls became the bottleneck.',
      'Use customer interviews, analytics, prototyping, and interview-analysis methods to understand lead qualification, pricing, and workflow needs without overengineering.',
      'Supports two paying customers, generating a 10% lead conversion rate from approximately SEK 10,000 monthly ad spend per customer and 30-90 leads per month, depending on season.',
    ],
  },
  {
    name: 'React Window Manager',
    description:
      'Open-source React library for desktop-style window management in web applications.',
    link: 'https://gustavolmo.github.io/react-window-manager/',
    details: [
      'Designed and implemented a reusable window management framework.',
      'Focused on complex frontend state management, component APIs, and developer experience.',
      'Published documentation and examples for adoption by other developers.',
    ],
  },
]
