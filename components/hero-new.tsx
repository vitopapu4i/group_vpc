import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function HeroNew() {
  return (
    <section className="relative overflow-hidden bg-background border-b border-border">
      <div className="absolute inset-0 pointer-events-none">
        <Image
          src="/telecom-network.jpg"
          alt="Телекоммуникационные решения VPC"
          fill
          priority
          className="object-cover opacity-20 dark:opacity-25"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/35" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 min-h-[calc(100vh-64px)] md:min-h-[720px] flex items-center">
        <div className="max-w-3xl py-16 md:py-24">
          <p className="inline-flex rounded-full border border-border bg-card/90 px-4 py-2 text-xs sm:text-sm text-muted-foreground mb-6">
            Indoor coverage • DAS / ADAS • Радиопланирование
          </p>

          <h1 className="text-[2.4rem] leading-[1.05] sm:text-5xl md:text-6xl font-bold tracking-tight text-foreground mb-6">
            Системы связи для сложных инфраструктурных объектов
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-8 max-w-2xl mb-8">
            Проектируем, поставляем и внедряем решения для аэропортов, метро,
            стадионов, бизнес-центров, ЦОД и транспортной инфраструктуры.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
            <Button
              asChild
              className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-white px-7 py-6 text-base font-semibold"
            >
              <Link href="/request">
                Обсудить проект
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>

            <Button
              asChild
              variant="outline"
              className="w-full sm:w-auto bg-card/90 border-border hover:bg-muted px-7 py-6 text-base"
            >
              <Link href="/projects">Смотреть проекты</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}