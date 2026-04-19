import Image from "next/image"
import Link from "next/link"
import { ChevronRight } from "lucide-react"
import { projects } from "@/data/projects"

const featuredProjects = projects.slice(0, 6)

export default function ProjectsNew() {
  return (
    <section id="projects" className="py-16 md:py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <p className="text-sm font-medium uppercase tracking-widest text-muted-foreground mb-3">
            Проекты
          </p>

          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            Реализованные объекты VPC
          </h2>

          <div className="w-12 h-0.5 bg-primary mb-4" />

          <p className="text-muted-foreground max-w-3xl leading-7">
            Аэропорты, метро, стадионы, бизнес-центры, ЦОД и железнодорожные проекты.
            Решения для indoor coverage, DAS / ADAS и мультиоператорских систем связи.
          </p>
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
          {featuredProjects.map((project) => (
            <article
              key={project.id}
              className="bg-card rounded-2xl overflow-hidden border border-border hover:shadow-xl transition-all duration-300"
            >
              <div className="relative h-56">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className="object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-black/5 to-transparent dark:from-black/50 dark:via-black/10 dark:to-transparent" />

                <div className="absolute left-4 top-4 flex flex-wrap gap-2">
                  <span className="bg-card/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium text-foreground border border-border">
                    {project.type}
                  </span>

                  <span
                    className={`px-3 py-1 rounded-full text-xs font-medium border ${
                      project.status === "ON-AIR"
                        ? "bg-green-500/10 text-green-700 border-green-500/20 dark:text-green-400 dark:border-green-400/20"
                        : "bg-amber-500/10 text-amber-700 border-amber-500/20 dark:text-amber-400 dark:border-amber-400/20"
                    }`}
                  >
                    {project.status}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <p className="text-xs uppercase tracking-wide text-muted-foreground mb-2">
                  {project.period}
                </p>

                <h3 className="text-lg font-semibold text-foreground mb-3 leading-snug">
                  {project.title}
                </h3>

                <div className="space-y-1.5 text-sm text-muted-foreground mb-5">
                  {project.operators && <p>{project.operators}</p>}
                  {project.bands && <p>{project.bands}</p>}
                  {project.platform && <p>Платформа: {project.platform}</p>}
                  {project.description && <p>{project.description}</p>}
                </div>

                <Link
                  href="/projects"
                  className="inline-flex items-center text-sm font-medium text-foreground hover:text-primary transition-colors"
                >
                  Смотреть все проекты
                  <ChevronRight className="w-4 h-4 ml-1" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}