import Link from "next/link"
import {
  Radio,
  Boxes,
  Wrench,
  ScanLine,
  ClipboardCheck,
  ArrowRight,
} from "lucide-react"
import { Button } from "@/components/ui/button"

const services = [
  {
    title: "Поставка телекоммуникационного оборудования",
    description:
      "Подбор и поставка решений для indoor coverage, DAS / ADAS, ретрансляторов, антенн, измерительного оборудования и сопутствующей инфраструктуры.",
    icon: Boxes,
  },
  {
    title: "Планирование систем связи",
    description:
      "Выбор решения, оценка бюджета, обследование объекта, разработка концепции и детальное радиопланирование систем связи любой сложности.",
    icon: Radio,
  },
  {
    title: "Реализация проектов под ключ",
    description:
      "Сопровождение внедрения, технический надзор, координация поставок и работ, запуск системы и подтверждение требуемых параметров.",
    icon: Wrench,
  },
  {
    title: "Измерения и радиообследование",
    description:
      "Полевые измерения покрытия и качества сети до и после внедрения системы с использованием профессионального измерительного оборудования.",
    icon: ScanLine,
  },
  {
    title: "Аудит существующих систем связи",
    description:
      "Анализ текущей инфраструктуры, проверка параметров, выявление ограничений, подготовка рекомендаций по модернизации и развитию.",
    icon: ClipboardCheck,
  },
  {
    title: "Обслуживание существующих систем",
    description:
      "Техническая поддержка, диагностика, обслуживание антенно-фидерных систем и сопровождение уже введённых в эксплуатацию решений.",
    icon: Wrench,
  },
]

export default function ServicesNew() {
  return (
    <section id="services" className="py-16 md:py-24 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 md:mb-14">
          <p className="text-sm font-medium uppercase tracking-widest text-muted-foreground mb-3">
            Услуги
          </p>

          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            Полный цикл работ по системам связи
          </h2>

          <div className="w-12 h-0.5 bg-primary mb-4" />

          <p className="text-muted-foreground max-w-3xl leading-7">
            VPC выполняет поставку оборудования, проектирование, обследование,
            измерения, аудит и реализацию решений для объектов с повышенными
            требованиями к качеству покрытия и надёжности связи.
          </p>
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-8">
          {services.map((service) => {
            const Icon = service.icon

            return (
              <div
                key={service.title}
                className="rounded-2xl border border-border bg-background p-6 md:p-7 hover:shadow-lg transition-shadow"
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

        <div className="mt-10 md:mt-12">
          <Link href="/services">
            <Button
              variant="outline"
              className="border-border hover:border-primary hover:text-primary"
            >
              Все услуги
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}