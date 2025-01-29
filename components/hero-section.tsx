"use client"

import Image from "next/image"
import Link from "next/link"
import { Github, Linkedin } from "lucide-react"
import profilepic from "../public/profilePic.png"
import { Button } from "@/components/ui/button"


export function HeroSection() {
  const handleContactClick = () => {
    document.querySelector("#contact")?.scrollIntoView({
      behavior: "smooth",
    })
  }

  const handleDownloadCV = () => {
    const link = document.createElement("a")
    link.href = "Etienne_Gwiavander_CV.pdf"
    link.download = "Etienne_Gwiavander_CV.pdf"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }
  return (
    <section id="home" className="pt-24 pb-10 md:pt-32 md:pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex-1 space-y-6 text-center md:text-start">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold ">
            Hello there <span className="inline-block animate-wave">👋</span>
            </h1>
            <p className="text-gray-600 max-w-xl">
            I am ETIENNE GWIAVANDER LAKIEBUKEH a software develper with 4+ years industry experience.
            </p>
            <div className="flex space-x-4">
              <Link href="linkedin.com/in/etienne-gwiavander-lakiebukeh" target="_blank" className="hover:opacity-80">
                <Linkedin size={24} />
              </Link>
              <Link href="https://github.com/etiennegwiavander" target="_blank" className="hover:opacity-80">
                <Github size={24} />
              </Link>
            </div>
            <div className="flex space-x-4 mt-6 justify-center md:justify-start">
              <Button className="bg-teal-700 hover:bg-teal-600" onClick={handleContactClick}>Contact Me</Button>
              <Button variant="outline" onClick={handleDownloadCV}>
                Download CV
              </Button>
            </div>
          </div>
          <div className="relative w-64 h-64 md:w-80 md:h-80">
            <Image
              src={profilepic}
              alt="Profile"
              fill
              className="rounded-full object-cover"
              priority
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

