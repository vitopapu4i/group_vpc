import Link from "next/link"
import {
  ArrowRight,
  Boxes,
  Radio,
  Wrench,
  ScanLine,
  ClipboardCheck,
  FileText,
  Search,
  Calculator,
  MapPinned,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import HeaderNew from "@/components/header-new"
import FooterNew from "@/components/footer-new"
import PageHero from "@/components/page-hero"

const mainServices = [
  {
    title: "Поставка телекоммуникационного оборудования",
    description:
      "Подбор и поставка оборудования для indoor coverage, DAS / ADAS, ретрансляторов, антенн, измерительных комплексов и сопутствующей инфраструктуры.",
    icon: Boxes,
  },
  {
    title: "Поставка измерительного оборудования",
    description:
      "Решения для анализа покрытия, измерения параметров сети, диагностики антенно-фидерных систем и сопровождения эксплуатации.",
    icon: ScanLine,
  },
  {
    title: "Планирование систем связи любой сложности",
    description:
      "Проектирование и моделирование решений для аэропортов, метро, стадионов, бизнес-центров, ЦОД и транспортной инфраструктуры.",
    icon: Radio,
  },
  {
    title: "Реализация проектов под ключ",
    description:
      "Полный цикл внедрения: от выбора архитектуры и поставки оборудования до запуска и подтверждения параметров системы.",
    icon: Wrench,
  },
  {
    title: "Аудит существующих систем связи",
    description:
      "Анализ действующей инфраструктуры, выявление ограничений, проверка качества покрытия и подготовка рекомендаций по развитию системы.",
    icon: ClipboardCheck,
  },
  {
    title: "Обслуживание существующих систем связи",
    description:
      "Диагностика, техническая поддержка, обслуживание и сопровождение уже внедрённых решений.",
    icon: Wrench,
  },
]

const planningStages = [
  {
    title: "Выбор решения",
    description:
      "Подбор архитектуры, максимально соответствующей задаче и бюджету, с пояснением преимуществ и сравнением с альтернативами.",
    icon: Search,
  },
  {
    title: "Оценка бюджета",
    description:
      "Оперативная подготовка оценки затрат на оборудование и работы для понимания реализуемости и окупаемости проекта.",
    icon: Calculator,
  },
  {
    title: "Обследование объекта",
    description:
      "Анализ объекта, чертежей, перегородок, перекрытий и влияния макросети для уточнения объёма оборудования и работ.",
    icon: MapPinned,
  },
  {
    title: "Разработка решения",
    description:
      "Точные расчёты с учётом особенностей объекта и требований технического задания в рамках согласованного бюджета.",
    icon: Radio,
  },
  {
    title: "Проведение измерений",
    description:
      "Полевые измерения уровня покрытия и качества связи до и после реализации системы.",
    icon: ScanLine,
  },
  {
    title: "Технический надзор",
    description:
      "Сопровождение внедрения и контроль выполнения работ в соответствии с проектной моделью.",
    icon: ClipboardCheck,
  },
  {
    title: "Документация",
    description:
      "Подготовка описания решения, входных данных для проектирования и необходимых материалов для согласования.",
    icon: FileText,
  },
]

const industries = [
  "Аэропорты",
  "Метро и тоннели",
  "Стадионы и массовые мероприятия",
  "Бизнес-центры и офисы",
  "ЦОД",
  "Железнодорожный транспорт",
]

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-background">
      <HeaderNew />

      <PageHero
        title="Услуги"
        description="Поставка оборудования, проектирование систем связи, измерения, аудит и реализация телеком-проектов для сложных инфраструктурных объектов."
      />

      <section className="py-16 md:py-20 bg-card border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-6">
            <div className="rounded-2xl border border-border bg-background p-6">
              <p className="text-3xl font-bold text-foreground mb-2">6</p>
              <p className="text-sm text-muted-foreground">Ключевых направлений</p>
            </div>
            <div className="rounded-2xl border border-border bg-background p-6">
              <p className="text-3xl font-bold text-foreground mb-2">7</p>
              <p className="text-sm text-muted-foreground">Этапов проработки решения</p>
            </div>
            <div className="rounded-2xl border border-border bg-background p-6">
              <p className="text-3xl font-bold text-foreground mb-2">Indoor / Transport</p>
              <p className="text-sm text-muted-foreground">Фокус реализации</p>
            </div>
            <div className="rounded-2xl border border-border bg-background p-6">
              <p className="text-3xl font-bold text-foreground mb-2">Telecom</p>
              <p className="text-sm text-muted-foreground">Инженерная специализация</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <p className="text-sm font-medium uppercase tracking-widest text-muted-foreground mb-3">
              Основные направления
            </p>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Что делает VPC
            </h2>
            <div className="w-12 h-0.5 bg-primary mb-4" />
            <p className="text-muted-foreground max-w-3xl leading-7">
              Компания выполняет полный цикл инженерных работ по системам связи:
              от выбора технологии и поставки оборудования до внедрения,
              измерений и сопровождения эксплуатации.
            </p>
          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-8">
            {mainServices.map((service) => {
              const Icon = service.icon

              return (
                <div
                  key={service.title}
                  className="rounded-2xl border border-border bg-card p-6 md:p-7 hover:shadow-lg transition-shadow"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>

                  <h3 className="text-lg font-semibold text-foreground mb-3">
                    {service.title}
                  </h3>

                  <p className="text-sm text-muted-foreground leading-7">
                    {service.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <p className="text-sm font-medium uppercase tracking-widest text-muted-foreground mb-3">
              Проработка решения
            </p>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Этапы работы по планированию систем связи
            </h2>
            <div className="w-12 h-0.5 bg-primary mb-4" />
            <p className="text-muted-foreground max-w-3xl leading-7">
              От обследования объекта и оценки бюджета до измерений и выпуска
              документации — каждый этап направлен на достижение требуемых
              показателей покрытия и качества связи.
            </p>
          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-8">
            {planningStages.map((stage, index) => {
              const Icon = stage.icon

              return (
                <div
                  key={stage.title}
                  className="rounded-2xl border border-border bg-background p-6 md:p-7"
                >
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <span className="text-sm font-medium text-muted-foreground">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>

                  <h3 className="text-lg font-semibold text-foreground mb-3">
                    {stage.title}
                  </h3>

                  <p className="text-sm text-muted-foreground leading-7">
                    {stage.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-[1fr_0.95fr] gap-10 items-start">
            <div>
              <p className="text-sm font-medium uppercase tracking-widest text-muted-foreground mb-3">
                Типы объектов
              </p>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                Где применяются решения VPC
              </h2>
              <div className="w-12 h-0.5 bg-primary mb-5" />
              <p className="text-muted-foreground leading-7 max-w-2xl">
                Услуги компании ориентированы на объекты со сложной архитектурой,
                высокой плотностью пользователей, транспортной спецификой и
                повышенными требованиями к качеству радиопокрытия.
              </p>
            </div>

            <div className="rounded-3xl border border-border bg-card p-6 md:p-8">
              <div className="flex flex-wrap gap-3">
                {industries.map((item) => (
                  <span
                    key={item}
                    className="px-4 py-2 rounded-full border border-border bg-background text-sm text-foreground"
                  >
                    {item}
                  </span>
                ))}
              </div>

              <div className="mt-8 rounded-2xl bg-primary/5 border border-primary/15 p-5">
                <p className="text-sm font-medium text-foreground mb-2">
                  Нужна консультация по объекту?
                </p>
                <p className="text-sm text-muted-foreground leading-7 mb-4">
                  Подберём формат работ: аудит, проектирование, измерения,
                  оборудование или реализация под ключ.
                </p>

                <Link href="/request">
                  <Button className="bg-primary hover:bg-primary/90 text-white">
                    Оставить заявку
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FooterNew />
    </div>
  )
}