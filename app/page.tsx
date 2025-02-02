import { Layout } from "@/components/layout"
import { HeroSection } from "@/components/hero-section"
import  TechStack  from "@/components/tech-stack"
import { AboutSection } from "@/components/about-section"
import { ProjectsSection } from "@/components/projects-section"
import { ContactSection } from "@/components/contact-section"

export default function Home() {
  return (
    <Layout>
      <HeroSection />
      <TechStack />
      <AboutSection />
      <ProjectsSection />
      <ContactSection />
    </Layout>
  )
}

