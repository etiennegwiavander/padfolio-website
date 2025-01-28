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
            <h2 className="text-2xl font-bold text-teal-600">ABOUT ME</h2>
            <h3 className="text-3xl font-bold">
              Front-end Developer
              <br />
              based in Bamenda, Cameroon
            </h3>
            <p className="text-gray-900">
            With over 4 years of experience in web development and support engineering, I have honed my skills in creating user-friendly and efficient web applications. My journey began with a passion for technology and a desire to solve complex problems. Over the years, I've worked on diverse projects, each contributing to my growth as a developer. From front-end development to back-end integration, my expertise spans across the full stack. I am committed to staying updated with the latest industry trends and continuously improving my skill set. When I'm not coding, I enjoy exploring new tech, reading, and contributing to open-source projects. Let's connect and create something amazing together!
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

