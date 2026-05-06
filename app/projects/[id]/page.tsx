import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeft, CheckCircle2, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import HeaderNew from "@/components/header-new"
import FooterNew from "@/components/footer-new"
import { projects } from "@/data/projects"

type ProjectDetailPageProps = {
  params: Promise<{
    id: string
  }>
}

export default async function ProjectDetailPage({
  params,
}: ProjectDetailPageProps) {
  const { id } = await params
  const project = projects.find((item) => item.id === id)

  if (!project) {
    notFound()
  }

  const details = project.details ?? {
    intro:
      project.description ||
      "Проект VPC по реализации системы связи для сложного инфраструктурного объекта.",
    task:
      "Обеспечить стабильное покрытие и качество связи с учётом особенностей объекта, требований эксплуатации и высокой нагрузки.",
    solution:
      "Была подобрана инженерная архитектура системы связи, выполнено планирование, подбор компонентов и сопровождение реализации.",
    result:
      "Решение позволило обеспечить требуемые параметры покрытия и подготовить объект к дальнейшему развитию системы связи.",
    works: [
      "Анализ объекта и требований к системе связи",
      "Подбор архитектуры решения",
      "Проектирование и радиопланирование",
      "Подбор системных компонентов",
      "Проверка параметров покрытия",
      "Сопровождение проекта",
    ],
  }

  return (
    <div className="min-h-screen bg-background">
      <HeaderNew />

      <section className="bg-primary text-primary-foreground py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/projects"
            className="inline-flex items-center text-primary-foreground/80 hover:text-primary-foreground text-sm mb-6"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Назад к проектам
          </Link>

          <p className="text-sm uppercase tracking-widest text-primary-foreground/75 mb-3">
            {project.period} / {project.type}
          </p>

          <h1 className="text-3xl md:text-5xl font-bold mb-5">
            {project.title}
          </h1>

          <p className="text-lg text-primary-foreground/85 max-w-3xl leading-8">
            {details.intro}
          </p>
        </div>
      </section>

      <main className="py-16 md:py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-[1fr_0.9fr] gap-10 lg:gap-14 items-start">
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden border border-border bg-card">
              <Image
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                fill
                className="object-cover"
              />
            </div>

            <div className="bg-card rounded-3xl border border-border p-6 md:p-8">
              <h2 className="text-2xl font-semibold text-foreground mb-6">
                Информация о проекте
              </h2>

              <div className="space-y-4">
                {project.operators && (
                  <InfoRow label="Операторы" value={project.operators} />
                )}
                {project.bands && (
                  <InfoRow label="Диапазоны" value={project.bands} />
                )}
                {project.sectors && (
                  <InfoRow label="Секторы" value={project.sectors} />
                )}
                {project.antennas && (
                  <InfoRow label="Антенны" value={project.antennas} />
                )}
                {project.feeder && (
                  <InfoRow label="Feeder" value={project.feeder} />
                )}
                {project.platform && (
                  <InfoRow label="Платформа" value={project.platform} />
                )}
                {project.status && (
                  <InfoRow label="Статус" value={project.status} />
                )}
              </div>
            </div>
          </div>

          <section className="mt-12 grid lg:grid-cols-3 gap-6">
            <TextCard title="Задача" text={details.task} />
            <TextCard title="Решение" text={details.solution} />
            <TextCard title="Результат" text={details.result} />
          </section>

          <section className="mt-12 bg-card rounded-3xl border border-border p-6 md:p-8">
            <h2 className="text-2xl font-semibold text-foreground mb-6">
              Что было выполнено
            </h2>

            <div className="grid md:grid-cols-2 gap-5">
              {details.works.map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                  <p className="text-sm text-muted-foreground leading-7">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </section>

          <section className="mt-12 rounded-3xl border border-border bg-card p-6 md:p-8">
            <div className="grid lg:grid-cols-[1fr_auto] gap-6 items-center">
              <div>
                <h2 className="text-2xl font-semibold text-foreground mb-3">
                  Хотите реализовать похожий проект?
                </h2>
                <p className="text-muted-foreground leading-7">
                  Опишите объект и задачу — мы предложим архитектуру решения,
                  состав системы и формат реализации.
                </p>
              </div>

              <Button asChild className="bg-primary hover:bg-primary/90 text-white">
                <Link href="/request">
                  Обсудить проект
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
            </div>
          </section>
        </div>
      </main>

      <FooterNew />
    </div>
  )
}

function InfoRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 border-b border-border pb-4 last:border-0 last:pb-0">
      <span className="text-sm text-muted-foreground">{label}</span>
      <span className="text-sm font-medium text-foreground sm:text-right">
        {value}
      </span>
    </div>
  )
}

function TextCard({ title, text }: { title: string; text: string }) {
  return (
    <div className="rounded-3xl border border-border bg-card p-6 md:p-8">
      <h2 className="text-xl font-semibold text-foreground mb-4">{title}</h2>
      <p className="text-sm text-muted-foreground leading-7">{text}</p>
    </div>
  )
}