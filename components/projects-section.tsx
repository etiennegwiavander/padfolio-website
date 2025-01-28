import Image from "next/image"
import { Github, ExternalLink } from "lucide-react"
import Link from "next/link"

const projects = [
  {
    title: "Fluentile-FullStack Language learning Platform",
    description: "A full-stack e-commerce dashboard with real-time analytics and inventory management.",
    image: "/Fluentile.png?height=1500&width=500",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Prisma"],
    github: "https://github.com",
    demo: "https://www.fluentile.com/",
  },
  {
    title: "AI Writing Assistant",
    description: "An AI-powered writing assistant that helps improve your writing style and grammar.",
    image: "/Fluentile_admin_dashboard.png?height=1500&width=500",
    tech: ["React", "OpenAI", "Node.js", "MongoDB"],
    github: "https://github.com",
    demo: "https://demo.com",
  },
  {
    title: "Task Management App",
    description: "A collaborative task management application with real-time updates and team features.",
    image: "/placeholder.svg?height=1500&width=500",
    tech: ["Next.js", "tRPC", "Prisma", "PostgreSQL"],
    github: "https://github.com",
    demo: "https://demo.com",
  },
]


export function ProjectsSection() {
  return (
    <section id="projects" className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-12">Projects 🚀</h2>
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