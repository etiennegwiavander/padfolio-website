import Image from "next/image"
import robot from "../public/about.jpg"

export function AboutSection() {
  return (
    <section id="about" className="py-10 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative h-[300px] md:h-[450px] rounded-lg overflow-hidden">
            <Image src={robot} alt="Workspace" fill className="object-cover" />
          </div>
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-teal-600">About Me 📃</h2>
            <h3 className="text-3xl font-bold">
              Front-end Developer
              <br />
              based in Bamenda, Cameroon
            </h3>
            <p className="text-gray-900">
              I offer a unique combination of five years of Frontend Development experience—with a focus on crafting enterprise-level applications in the EdTech sector—and two years as a Support Engineer. This dual background provides me with a well-rounded perspective on building and maintaining software. Driven by a deep passion for continuous learning and AI, I am eager to leverage my technical skills and growing Artificial Intelligence knowledge to create secure and user-centric digital experiences that deliver tangible business value.
            </p>
            <p className="text-gray-900">
              My main stack currently is React/Next.js in combination with Tailwind CSS and TypeScript.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}