import Image from "next/image"
import { Github, ExternalLink } from "lucide-react"
import Link from "next/link"

const projects = [
  {
    title: "Fluentile-FullStack Language learning Platform",
    description:  "Fluentile is an innovative PWA online platform that connects language learners with certified tutors from around the world. We keep adding new features with the aim to make language learning fun and easy.",
    image: "/Fluentile.png?height=1500&width=500",
    tech: ["Next.js", "JavaScript", "Bootstrap", "Moment.js", "jQuery"],
    github: "https://github.com",
    demo: "https://www.fluentile.com/",
  },
  {
    title: "All in one Admin Dashboard for Fluentile",
    description: "Fluentile's admin dashboard is the nerve center for managing and optimizing Fluentile. Designed with user-friendliness and efficiency in mind, it empowers administrators with a comprehensive suite of tools and insights",
    image: "/Fluentile_admin_dashboard.png?height=1500&width=500",
    tech: ["Next.js", "JavaScript", "Bootstrap", "Moment.js", "jQuery"],
    github: "https://github.com",
    demo: "https://demo.com",
  },
  {
    title: "LinguaFlow - Hyper-Personalized Multilingual Lesson Architect",
    description: "Meet Lingua Flow - A one-on-one language tutor's companion for creating truly personalized lesson plans and interactive language learning materials that adapt to each student's unique needs and progress. Built from the ground up with Next.js, React.js, Tailwind CSS and Supabase for the backend logic, Lingua Flow offers a sleek and intuitive interface that makes lesson planning a breeze.",
    image: "/linguaflow.png?height=1500&width=500",
    tech: ["Next.js","React.js", "Tailwind", "Supabase"],
    github: "https://github.com/etiennegwiavander/LinguaFlow2",
    demo: "https://linguaflow.online/",
  },
  {
    title: "PurpleTube - A YouTube Clone",
    description: "PurpleTube is a YouTube clone built with React.js and Material UI. It features a clean and intuitive user interface that closely resembles the original YouTube platform.",
    image: "/YouTube_Clone.png?height=1500&width=500",
    tech: ["React.js", "Material ui", "CSS"],
    github: "https://github.com/etiennegwiavander/Youtube_clone_by_Etienne?tab=readme-ov-file",
    demo: "https://purpletube.netlify.app/",
  },
]


export function ProjectsSection() {
  return (
    <section id="projects" className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-12 text-teal-600">Projects 🚀</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.title}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="project-card-image-container">
                <div className="project-card-image">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    width={500}
                    height={1500}
                    className="object-cover w-full"
                  />
                </div>
              </div>
              <div className="p-6 space-y-4">
                <h3 className="text-xl font-bold">{project.title}</h3>
                <p className="text-gray-600">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span key={tech} className="px-3 py-1 bg-gray-100 rounded-full text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4 pt-4">
                  <Link
                    href={project.github}
                    target="_blank"
                    className="flex items-center gap-2 hover:text-blue-600 transition-colors"
                  >
                    <Github size={20} />
                    <span>Code</span>
                  </Link>
                  <Link
                    href={project.demo}
                    target="_blank"
                    className="flex items-center gap-2 hover:text-blue-600 transition-colors"
                  >
                    <ExternalLink size={20} />
                    <span>Demo</span>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}