export function TechStack() {
  const technologies = [
    { name: "HTML", color: "bg-orange-500" },
    { name: "CSS", color: "bg-blue-500" },
    { name: "JavaScript", color: "bg-yellow-400" },
    { name: "TypeScript", color: "bg-blue-600" },
    { name: "React", color: "bg-cyan-400" },
    { name: "Next.js", color: "bg-black" },
    { name: "Tailwind", color: "bg-cyan-500" },
    { name: "SASS", color: "bg-pink-500" },
  ]

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h3 className="text-lg font-medium mb-6">Tech Stack</h3>
        <div className="flex flex-wrap gap-4">
          {technologies.map((tech) => (
            <div key={tech.name} className={`${tech.color} text-white px-4 py-2 rounded-md`}>
              {tech.name}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

