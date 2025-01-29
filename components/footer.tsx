import Link from "next/link"
import { Github, Linkedin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p>Copyright © 2025. All rights are reserved</p>
          <div className="flex space-x-4">
            <Link href="linkedin.com/in/etienne-gwiavander-lakiebukeh" target="_blank" className="hover:text-gray-400 transition-colors">
              <Linkedin size={24} />
            </Link>
            <Link href="https://github.com/etiennegwiavander" target="_blank" className="hover:text-gray-400 transition-colors">
              <Github size={24} />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

