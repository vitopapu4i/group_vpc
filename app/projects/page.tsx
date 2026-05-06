import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import HeaderNew from "@/components/header-new"
import PageHero from "@/components/page-hero"
import FooterNew from "@/components/footer-new"
import { projects } from "@/data/projects"

function getProjectYear(period: string) {
  const years = period.match(/\d{4}/g)
  return years ? Number(years[years.length - 1]) : 0
}

const sortedProjects = [...projects].sort(
  (a, b) => getProjectYear(b.period) - getProjectYear(a.period)
)

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-background">
      <HeaderNew />

      <PageHero
        title="Реализованные проекты"
        description="Проекты VPC для аэропортов, метро, стадионов, бизнес-центров, ЦОД и транспортной инфраструктуры."
      />

      <section className="py-16 md:py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
            {sortedProjects.map((project) => (
              <Link
                key={project.id}
                href={`/projects/${project.id}`}
                className="group bg-card rounded-2xl overflow-hidden border border-border hover:shadow-xl transition-all duration-300"
              >
                <div className="relative h-56">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

                  <div className="absolute left-4 top-4 flex flex-wrap gap-2">
                    <span className="bg-card/90 border border-border px-3 py-1 rounded-full text-xs font-medium text-foreground">
                      {project.type}
                    </span>

                    <span className="bg-primary text-white px-3 py-1 rounded-full text-xs font-medium">
                      {project.period}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-lg font-semibold text-foreground mb-4 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>

                  <div className="space-y-2 text-sm text-muted-foreground mb-5">
                    {project.operators && <p>{project.operators}</p>}
                    {project.bands && <p>{project.bands}</p>}
                    {project.platform && <p>Платформа: {project.platform}</p>}
                  </div>

                  <span className="inline-flex items-center text-sm font-medium text-primary">
                    Подробнее
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <FooterNew />
    </div>
  )
}