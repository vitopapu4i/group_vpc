"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, ArrowRight } from "lucide-react"
import { projects } from "@/data/projects"

function getProjectYear(period: string) {
  const years = period.match(/\d{4}/g)
  return years ? Number(years[years.length - 1]) : 0
}

const sortedProjects = [...projects].sort(
  (a, b) => getProjectYear(b.period) - getProjectYear(a.period)
)

export default function ProjectsNew() {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [activeIndex, setActiveIndex] = useState(0)

  const scrollToIndex = (index: number) => {
    const container = scrollRef.current
    if (!container) return

    const cards = Array.from(container.children) as HTMLElement[]
    const card = cards[index]

    if (!card) return

    container.scrollTo({
      left: card.offsetLeft - 16,
      behavior: "smooth",
    })

    setActiveIndex(index)
  }

  const nextSlide = () => {
    const next =
      activeIndex >= sortedProjects.length - 1
        ? 0
        : activeIndex + 1

    scrollToIndex(next)
  }

  const prevSlide = () => {
    const prev =
      activeIndex <= 0
        ? sortedProjects.length - 1
        : activeIndex - 1

    scrollToIndex(prev)
  }

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide()
    }, 5000)

    return () => clearInterval(interval)
  }, [activeIndex])

  const handleScroll = () => {
    const container = scrollRef.current
    if (!container) return

    const cards = Array.from(container.children) as HTMLElement[]

    const current = cards.reduce(
      (closest, card, index) => {
        const distance = Math.abs(
          container.scrollLeft - card.offsetLeft
        )

        return distance < closest.distance
          ? { index, distance }
          : closest
      },
      {
        index: 0,
        distance: Number.POSITIVE_INFINITY,
      }
    )

    setActiveIndex(current.index)
  }

  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* HEADER */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">

          <div>
            <p className="text-sm uppercase tracking-widest text-muted-foreground mb-3">
              Проекты
            </p>

            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Реализованные решения
            </h2>

            <div className="w-12 h-0.5 bg-primary mb-4" />

            <p className="text-muted-foreground max-w-2xl">
              Опыт реализации проектов для аэропортов, метро, стадионов,
              бизнес-центров и транспортной инфраструктуры.
            </p>
          </div>

          {/* ARROWS */}
          <div className="hidden md:flex items-center gap-3">

            <button
              type="button"
              onClick={prevSlide}
              className="w-11 h-11 rounded-full border border-border bg-card hover:bg-muted flex items-center justify-center transition"
            >
              <ArrowLeft className="w-5 h-5 text-foreground" />
            </button>

            <button
              type="button"
              onClick={nextSlide}
              className="w-11 h-11 rounded-full border border-border bg-card hover:bg-muted flex items-center justify-center transition"
            >
              <ArrowRight className="w-5 h-5 text-foreground" />
            </button>

          </div>
        </div>

        {/* CAROUSEL */}
        <div
          ref={scrollRef}
          onScroll={handleScroll}
          className="flex gap-5 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-4 -mx-4 px-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {sortedProjects.map((project) => (
            <Link
              key={project.id}
              href={`/projects/${project.id}`}
              className="min-w-[280px] sm:min-w-[340px] md:min-w-[380px] snap-start"
            >
              <article className="bg-card border border-border rounded-2xl overflow-hidden hover:shadow-lg transition-shadow">

                {/* IMAGE */}
                <div className="relative h-48">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />

                  <div className="absolute top-3 left-3 flex gap-2 flex-wrap">

                    <span className="bg-card/90 border border-border px-2 py-1 text-xs rounded text-foreground">
                      {project.type}
                    </span>

                    <span className="bg-primary text-white px-2 py-1 text-xs rounded">
                      {project.period}
                    </span>

                  </div>
                </div>

                {/* CONTENT */}
                <div className="p-5">

                  <h3 className="text-base font-semibold text-foreground mb-3 leading-6">
                    {project.title}
                  </h3>

                  <div className="space-y-1 text-sm text-muted-foreground mb-4">
                    {project.operators && <p>{project.operators}</p>}
                    {project.bands && <p>{project.bands}</p>}
                  </div>

                  <span className="inline-flex items-center text-sm font-medium text-primary">
                    Подробнее
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </span>

                </div>

              </article>
            </Link>
          ))}
        </div>

        {/* DOTS */}
        <div className="mt-6 flex items-center justify-center gap-2">
          {sortedProjects.map((project, index) => (
            <button
              key={project.id}
              type="button"
              onClick={() => scrollToIndex(index)}
              className={`h-2 rounded-full transition-all ${
                activeIndex === index
                  ? "w-8 bg-primary"
                  : "w-2 bg-muted-foreground/30"
              }`}
            />
          ))}
        </div>

      </div>
    </section>
  )
}