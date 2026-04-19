import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import HeaderNew from "@/components/header-new"
import PageHero from "@/components/page-hero"
import FooterNew from "@/components/footer-new"
import { projects, projectPeriods } from "@/data/projects"

const statsRow = [
  { value: "2013–2025", label: "Период проектов" },
  { value: "Аэропорты", label: "Транспортные объекты" },
  { value: "Метро", label: "Тоннели и станции" },
  { value: "Стадионы", label: "High-density объекты" },
]

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-background">
      <HeaderNew />

      <PageHero
        title="Реализованные проекты"
        description="Проекты VPC для аэропортов, метро, стадионов, бизнес-центров, ЦОД и скоростного железнодорожного транспорта."
      />

      <section className="bg-card border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 text-center">
            {statsRow.map((s) => (
              <div
                key={s.label}
                className="rounded-2xl border border-border bg-background p-5 md:p-6"
              >
                <div className="text-2xl md:text-3xl font-bold text-foreground">
                  {s.value}
                </div>
                <p className="text-sm text-muted-foreground mt-2">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {projectPeriods.map((period) => {
            const periodProjects = projects.filter((project) => project.period === period)

            return (
              <div key={period}>
                <div className="mb-8">
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                    {period}
                  </h2>
                  <div className="w-16 h-0.5 bg-primary mt-3" />
                </div>

                <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
                  {periodProjects.map((project) => (
                    <article
                      key={project.id}
                      className="bg-card rounded-2xl overflow-hidden border border-border hover:shadow-xl transition-all duration-300"
                    >
                      <div className="relative h-56">
                        <Image
                          src={project.image}
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
                        <h3 className="text-lg font-semibold text-foreground mb-4 leading-snug">
                          {project.title}
                        </h3>

                        <div className="space-y-2 text-sm text-muted-foreground">
                          {project.operators && (
                            <p>
                              <span className="font-medium text-foreground">
                                Операторы:
                              </span>{" "}
                              {project.operators}
                            </p>
                          )}

                          {project.bands && (
                            <p>
                              <span className="font-medium text-foreground">
                                Диапазоны:
                              </span>{" "}
                              {project.bands}
                            </p>
                          )}

                          {project.sectors && (
                            <p>
                              <span className="font-medium text-foreground">
                                Секторы:
                              </span>{" "}
                              {project.sectors}
                            </p>
                          )}

                          {project.antennas && (
                            <p>
                              <span className="font-medium text-foreground">
                                Антенны:
                              </span>{" "}
                              {project.antennas}
                            </p>
                          )}

                          {project.feeder && (
                            <p>
                              <span className="font-medium text-foreground">
                                Feeder:
                              </span>{" "}
                              {project.feeder}
                            </p>
                          )}

                          {project.platform && (
                            <p>
                              <span className="font-medium text-foreground">
                                Платформа:
                              </span>{" "}
                              {project.platform}
                            </p>
                          )}

                          {project.description && (
                            <p className="pt-2 leading-7">{project.description}</p>
                          )}
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </section>

      <section className="py-16 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Обсудим ваш проект?</h2>
          <p className="text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Подберём архитектуру решения, оборудование и формат реализации под ваш объект.
          </p>
          <Link href="/request">
            <Button className="bg-card text-foreground hover:bg-card/90 px-8 py-3 font-semibold">
              Оставить заявку
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </div>
      </section>

      <FooterNew />
    </div>
  )
}