import Link from "next/link"
import {
  ArrowRight,
  CheckCircle2,
  Globe2,
  Building2,
  ShieldCheck,
  Briefcase,
  MapPin,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import HeaderNew from "@/components/header-new"
import FooterNew from "@/components/footer-new"
import PageHero from "@/components/page-hero"

const advantages = [
  "Возможность предоставления услуг на территории Европы и СНГ",
  "Наличие опытных и сертифицированных специалистов",
  "Подтверждённый опыт достижения заявленных параметров",
  "Подтверждённый опыт реализации крупномасштабных проектов",
  "Возможность предоставления нестандартных решений",
  "Возможность использования оборудования любых производителей",
  "Возможность предоставления быстрой оценки решений",
]

const offices = [
  { city: "Москва", description: "Основной офис и управление проектами" },
  { city: "Прага", description: "Присутствие в Европе" },
  { city: "Астана", description: "Проекты и поддержка в регионе" },
  { city: "Дубай", description: "Международное присутствие" },
  { city: "Минск", description: "Локальная экспертиза и сопровождение" },
]

const directions = [
  "Поставка телекоммуникационного оборудования",
  "Поставка измерительного оборудования для систем связи",
  "Планирование систем связи любой сложности",
  "Реализация проектов под ключ",
  "Аудит существующих систем связи",
  "Обслуживание существующих систем связи",
]

const milestones = [
  {
    period: "2013–2017",
    title: "Развитие крупных indoor-проектов",
    description:
      "Реализация систем связи для аэропортов, стадионов, бизнес-центров и транспортных объектов.",
  },
  {
    period: "2018–2024",
    title: "Масштабирование инфраструктурной экспертизы",
    description:
      "Проекты для метро, стадионов, распределённых систем покрытия и high-density объектов.",
  },
  {
    period: "2024–2025",
    title: "Новые проекты и развитие решений ADAS",
    description:
      "Дизайн и сопровождение проектов для ЦОД, офисных объектов и транспортной инфраструктуры.",
  },
]

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <HeaderNew />

      <PageHero
        title="О компании"
        description="VPC — телекоммуникационные решения для сложных инфраструктурных объектов: проектирование, поставка оборудования, измерения, аудит и реализация систем связи."
      />

      <section className="py-16 md:py-20 bg-card border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-6">
            <div className="rounded-2xl border border-border bg-background p-6">
              <Building2 className="w-6 h-6 text-primary mb-3" />
              <p className="text-3xl font-bold text-foreground mb-2">5</p>
              <p className="text-sm text-muted-foreground">Офисов и представительств</p>
            </div>

            <div className="rounded-2xl border border-border bg-background p-6">
              <Globe2 className="w-6 h-6 text-primary mb-3" />
              <p className="text-3xl font-bold text-foreground mb-2">EU / СНГ</p>
              <p className="text-sm text-muted-foreground">География присутствия</p>
            </div>

            <div className="rounded-2xl border border-border bg-background p-6">
              <ShieldCheck className="w-6 h-6 text-primary mb-3" />
              <p className="text-3xl font-bold text-foreground mb-2">Telecom</p>
              <p className="text-sm text-muted-foreground">Фокус на системах связи</p>
            </div>

            <div className="rounded-2xl border border-border bg-background p-6">
              <Briefcase className="w-6 h-6 text-primary mb-3" />
              <p className="text-3xl font-bold text-foreground mb-2">Indoor / Transport</p>
              <p className="text-sm text-muted-foreground">Основные типы проектов</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-10 lg:gap-14 items-start">
            <div>
              <p className="text-sm font-medium uppercase tracking-widest text-muted-foreground mb-3">
                Кто мы
              </p>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                Инженерная компания с фокусом на телеком-инфраструктуру
              </h2>
              <div className="w-12 h-0.5 bg-primary mb-5" />

              <p className="text-muted-foreground leading-7 mb-5">
                VPC специализируется на проектировании и реализации систем связи
                для объектов, где критически важны качество покрытия,
                стабильность работы сети и точное выполнение проектных
                параметров.
              </p>

              <p className="text-muted-foreground leading-7 mb-5">
                Компания работает с indoor и транспортными решениями, выполняет
                обследование, радиопланирование, измерения, аудит, поставку
                оборудования и сопровождение внедрения.
              </p>

              <p className="text-muted-foreground leading-7">
                Основной фокус — сложные инфраструктурные объекты: аэропорты,
                метро, стадионы, бизнес-центры, ЦОД и высокоскоростной
                железнодорожный транспорт.
              </p>
            </div>

            <div className="rounded-3xl border border-border bg-card p-6 md:p-8">
              <h3 className="text-xl font-semibold text-foreground mb-5">
                Ключевые преимущества
              </h3>

              <div className="space-y-4">
                {advantages.map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                    <p className="text-sm text-muted-foreground leading-7">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <p className="text-sm font-medium uppercase tracking-widest text-muted-foreground mb-3">
              Направления работы
            </p>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Что делает VPC
            </h2>
            <div className="w-12 h-0.5 bg-primary mb-4" />
            <p className="text-muted-foreground max-w-3xl leading-7">
              Компания предоставляет инженерные и поставочные услуги для
              построения и развития систем связи — от концепции и подбора
              решения до реализации и сопровождения эксплуатации.
            </p>
          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-8">
            {directions.map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-border bg-background p-6 md:p-7"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
                  <CheckCircle2 className="w-6 h-6 text-primary" />
                </div>

                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {item}
                </h3>

                <p className="text-sm text-muted-foreground leading-7">
                  Инженерная экспертиза и практический опыт реализации проектов
                  под задачи конкретного объекта.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-[0.95fr_1.05fr] gap-10 lg:gap-14 items-start">
            <div>
              <p className="text-sm font-medium uppercase tracking-widest text-muted-foreground mb-3">
                География
              </p>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                Офисы и присутствие
              </h2>
              <div className="w-12 h-0.5 bg-primary mb-5" />

              <p className="text-muted-foreground leading-7">
                VPC поддерживает клиентов и реализует проекты на территории
                Европы и СНГ, сочетая инженерную экспертизу, проектную
                поддержку и локальное присутствие в ключевых регионах.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-5">
              {offices.map((office) => (
                <div
                  key={office.city}
                  className="rounded-2xl border border-border bg-card p-6"
                >
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                      <MapPin className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-1">
                        {office.city}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-6">
                        {office.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <p className="text-sm font-medium uppercase tracking-widest text-muted-foreground mb-3">
              Развитие проектов
            </p>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Опыт по ключевым периодам
            </h2>
            <div className="w-12 h-0.5 bg-primary mb-4" />
            <p className="text-muted-foreground max-w-3xl leading-7">
              Практический опыт компании охватывает крупные indoor- и
              транспортные проекты, включая стадионы, метро, аэропорты,
              бизнес-центры и объекты новой инфраструктуры.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {milestones.map((item) => (
              <div
                key={item.period}
                className="rounded-2xl border border-border bg-background p-6 md:p-7"
              >
                <p className="text-sm font-medium text-primary mb-3">{item.period}</p>
                <h3 className="text-lg font-semibold text-foreground mb-3">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-7">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Обсудим ваш объект?</h2>
          <p className="text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Подберём архитектуру решения, оборудование и формат работ под
            задачи вашего проекта.
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