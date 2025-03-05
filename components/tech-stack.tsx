"use client"

import { useRef, useEffect, useState } from "react"
import { techStack } from "../app/data"

export default function TechStack() {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [isDragging, setIsDragging] = useState(false)
  const [startX, setStartX] = useState(0)
  const [scrollLeft, setScrollLeft] = useState(0)

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      if (scrollRef.current) {
        e.preventDefault()
        scrollRef.current.scrollLeft += e.deltaY
      }
    }

    const currentScrollRef = scrollRef.current
    if (currentScrollRef) {
      currentScrollRef.addEventListener("wheel", handleWheel, { passive: false })
    }

    return () => {
      if (currentScrollRef) {
        currentScrollRef.removeEventListener("wheel", handleWheel)
      }
    }
  }, [])

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    setIsDragging(true)
    setStartX(e.pageX - scrollRef.current!.offsetLeft)
    setScrollLeft(scrollRef.current!.scrollLeft)
  }

  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    setIsDragging(true)
    setStartX(e.touches[0].pageX - scrollRef.current!.offsetLeft)
    setScrollLeft(scrollRef.current!.scrollLeft)
  }

  const handleMouseLeave = () => {
    setIsDragging(false)
  }

  const handleMouseUp = () => {
    setIsDragging(false)
  }

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging) return
    e.preventDefault()
    const x = e.pageX - scrollRef.current!.offsetLeft
    const walk = (x - startX) * 2
    scrollRef.current!.scrollLeft = scrollLeft - walk
  }

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (!isDragging) return
    const x = e.touches[0].pageX - scrollRef.current!.offsetLeft
    const walk = (x - startX) * 2
    scrollRef.current!.scrollLeft = scrollLeft - walk
  }

  return (
    <div>
      <h1 className="ml--10 text-3xl font-bold mb-12 text-teal-600 px-4">My Tech Stack</h1>
      <main className="flex flex-col items-center justify-center p-4 sm:p-8">
        <div className="w-full max-w-4xl">
          
          <div
            ref={scrollRef}
            className="flex overflow-x-auto space-x-6 py-6 px-4 scrollbar-hide tech-stack-container"
            onMouseDown={handleMouseDown}
            onMouseLeave={handleMouseLeave}
            onMouseUp={handleMouseUp}
            onMouseMove={handleMouseMove}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleMouseUp}
            onTouchMove={handleTouchMove}
          >
            {techStack.map((tech) => (
              <div key={tech.name} className="flex-shrink-0 w-28 text-center transition-transform hover:scale-105">
                <div className="bg-white rounded-lg shadow-md p-4 mb-2 h-28 flex items-center justify-center">
                  <div className="w-16 h-16" dangerouslySetInnerHTML={{ __html: tech.logo }} />
                </div>
                <p className="text-sm font-medium truncate">{tech.name}</p>
              </div>
            ))}
          </div>
        </div>
      </main>
      </div>
  )
}

