import Image from "next/image";

const projects = [
  {
    name: "Lok",
    description: "Blocks distracting apps until the user finishes everything on their list.",
    image: "/Lok.png",
    href: "https://apps.apple.com/us/app/lok/id6761636868",
    github: "https://github.com/ishaanbahl/LockIn",
    tags: ["React Native", "Swift", "XCode", "Custom Shield Configs", "iOS Family Controls API", "Push Notifications"],
  },
  {
    name: "SyllabAI",
    description: "AI parses through course syllabus and sets up a dashboard with all important dates.",
    image: "/SyllabAI.png",
    href: "https://syllabi.gadget.app/",
    github: "https://github.com/joshuasoup/Syllab.ai",
    tags: ["React", "TypeScript", "Supabase", "OAuth"],
  },
  {
    name: "StyleIt",
    description: "Take pics of your wardrobe and use our AI stylist to make fashionable choices.",
    image: "/Styleit.png",
    href: "https://styleitapp.github.io/",
    github: "https://github.com/ishaanbahl/styleit",
    tags: ["React Native", "OpenAI API", "Expo Go", "Supabase"],
  },
  {
    name: "Grantly",
    description: "Set up your profile & find scholarships you're eligible for.",
    image: "/Grantly.png",
    href: "https://grantly-scholarships.vercel.app/",
    github: "https://github.com/ishaanbahl6200/scholarship-scraper",
    tags: ["React", "Gemini API", "MongoDB"],
  },
];

function GithubIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
    </svg>
  );
}

function Tag({ label }: { label: string }) {
  return (
    <span className="px-2.5 py-1 rounded-full bg-gray-100 text-gray-500 text-xs font-medium">
      {label}
    </span>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="px-6 md:px-16 pt-8 pb-24">
      <h2 className="text-2xl font-bold text-gray-900 mb-8 uppercase">Projects</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        {projects.map((project) => (
          <div key={project.name} className="flex flex-col gap-3">
            <a href={project.href} target="_blank" rel="noopener noreferrer" className="relative aspect-[4/3] rounded-2xl overflow-hidden block transition-transform duration-300 hover:scale-105">
              <Image src={project.image} alt={project.name} fill sizes="(max-width: 640px) 100vw, 50vw" className="object-cover" />
            </a>
            <div>
              <div className="flex items-center gap-2">
                <p className="text-gray-900 font-medium text-sm">{project.name}</p>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${project.name} GitHub repository`}
                  className="text-gray-400 hover:text-gray-900 transition-colors"
                >
                  <GithubIcon />
                </a>
              </div>
              <p className="text-gray-400 text-sm mt-1">{project.description}</p>
            </div>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => <Tag key={tag} label={tag} />)}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
