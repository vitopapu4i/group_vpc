import Link from "next/link"
import Image from "next/image"
import { ArrowRight, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"

const advantages = [
  "Проектирование систем связи любой сложности",
  "Решения DAS / ADAS / M-Dots для сложных объектов",
  "Поставка оборудования и инженерная поддержка",
  "Аудит, измерения и реализация под ключ",
]

export default function HeroNew() {
  return (
    <section className="relative overflow-hidden border-b border-border bg-background text-foreground">
      <div className="absolute inset-0 pointer-events-none">
        <Image
          src="/telecom-network.jpg"
          alt="Телекоммуникационная инфраструктура"
          fill
          priority
          className="object-cover opacity-10 dark:opacity-15"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background/95 to-primary/10 dark:from-background dark:via-background/90 dark:to-primary/15" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-12 sm:pt-16 sm:pb-14 md:pt-24 md:pb-20">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-start lg:items-center">
          <div className="min-w-0">
            <p className="inline-flex max-w-full items-center rounded-full border border-border bg-card px-4 py-2 text-[11px] sm:text-sm text-muted-foreground mb-5 sm:mb-6 whitespace-normal">
              Indoor coverage • DAS / ADAS • Telecom engineering
            </p>

            <h1 className="text-[2.2rem] leading-[1.05] sm:text-5xl lg:text-6xl font-bold tracking-tight mb-5 sm:mb-6 text-foreground break-words">
              Телекоммуникационные решения для{" "}
              <span className="text-primary">сложных инфраструктурных объектов</span>
            </h1>

            <p className="text-[15px] sm:text-lg text-muted-foreground leading-8 max-w-2xl mb-7 sm:mb-8">
              Компания проектирует и реализует системы связи для аэропортов, метро,
              стадионов, бизнес-центров, ЦОД и высокоскоростного транспорта:
              от обследования и радиопланирования до поставки оборудования и
              ввода системы в эксплуатацию.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-8 sm:mb-10">
              <Button
                asChild
                className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-primary-foreground px-6 sm:px-7 py-5 sm:py-6 text-base font-semibold"
              >
                <Link href="/request">
                  Оставить заявку
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>

              <Button
                asChild
                variant="outline"
                className="w-full sm:w-auto border-border bg-card text-foreground hover:bg-muted px-6 sm:px-7 py-5 sm:py-6 text-base"
              >
                <Link href="/projects">Смотреть проекты</Link>
              </Button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              {advantages.map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-3 rounded-xl border border-border bg-card p-4 min-w-0"
                >
                  <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                  <span className="text-sm text-muted-foreground leading-6 break-words">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:pl-8 w-full">
            <div className="relative rounded-3xl border border-border bg-card p-4 sm:p-6 lg:p-8 shadow-xl">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                <div className="rounded-2xl bg-muted border border-border p-5">
                  <p className="text-2xl sm:text-3xl font-bold text-foreground mb-1">
                    2013–2025
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Реализованные проекты
                  </p>
                </div>

                <div className="rounded-2xl bg-muted border border-border p-5">
                  <p className="text-2xl sm:text-3xl font-bold text-foreground mb-1">
                    DAS / ADAS
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Indoor и транспортные решения
                  </p>
                </div>

                <div className="rounded-2xl bg-muted border border-border p-5">
                  <p className="text-2xl sm:text-3xl font-bold text-foreground mb-1">
                    5 офисов
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Москва, Прага, Астана, Дубай, Минск
                  </p>
                </div>

                <div className="rounded-2xl bg-muted border border-border p-5">
                  <p className="text-2xl sm:text-3xl font-bold text-foreground mb-1">
                    24/7
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Инженерная и проектная поддержка
                  </p>
                </div>
              </div>

              <div className="rounded-2xl bg-primary/5 border border-primary/15 p-5">
                <p className="text-xs sm:text-sm uppercase tracking-wider text-muted-foreground mb-3">
                  Основные направления
                </p>

                <div className="space-y-3 text-sm text-foreground">
                  <div className="flex items-start justify-between gap-4 border-b border-border pb-3">
                    <span className="leading-6">
                      Поставка телекоммуникационного оборудования
                    </span>
                    <span className="text-muted-foreground shrink-0">01</span>
                  </div>

                  <div className="flex items-start justify-between gap-4 border-b border-border pb-3">
                    <span className="leading-6">Планирование систем связи</span>
                    <span className="text-muted-foreground shrink-0">02</span>
                  </div>

                  <div className="flex items-start justify-between gap-4 border-b border-border pb-3">
                    <span className="leading-6">Реализация проектов под ключ</span>
                    <span className="text-muted-foreground shrink-0">03</span>
                  </div>

                  <div className="flex items-start justify-between gap-4 border-b border-border pb-3">
                    <span className="leading-6">
                      Аудит и обслуживание существующих систем
                    </span>
                    <span className="text-muted-foreground shrink-0">04</span>
                  </div>

                  <div className="flex items-start justify-between gap-4">
                    <span className="leading-6">Измерения и радиообследование</span>
                    <span className="text-muted-foreground shrink-0">05</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}