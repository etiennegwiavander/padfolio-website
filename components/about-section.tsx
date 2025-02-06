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
            I have over four years of experience crafting enterprise-level applications. My background also includes two years of professional experience as a Support Engineer, giving me a well-rounded perspective on the software development lifecycle.  Beyond my current roles, I'm an aspiring Cybersecurity Engineer, driven by a deep passion for continuous learning and exploring the ever-evolving landscape of technology.  I'm eager to combine my frontend development skills, support experience, and growing cybersecurity knowledge to create secure and user-friendly digital experiences.
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

