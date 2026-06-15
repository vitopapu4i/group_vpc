"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { useTheme } from "@/components/theme-provider"

export default function HeroNew() {
  const { theme } = useTheme()

  return (
    <section className="relative overflow-hidden border-b border-border">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <Image
          src={theme === "dark" ? "/dark.png" : "/light.png"}
          alt=""
          fill
          priority
          className={`
            object-contain
            object-right
            scale-110
            select-none
            transition-opacity duration-500
            ${theme === "dark" ? "opacity-35" : "opacity-70"}
          `}
        />

        {/* Затемнение только слева под текст */}
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/70 to-transparent" />

        {/* Мягкий градиент сверху и снизу */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-transparent to-background/40" />
      </div>

      <div className="container relative z-10 mx-auto px-4">
        <div className="flex min-h-[85vh] flex-col justify-center py-20 md:py-28">
          {/* Badge */}
          <div className="mb-8">
            <div className="inline-flex items-center rounded-full border border-border bg-card/70 px-5 py-3 backdrop-blur-sm">
              <span className="text-sm text-muted-foreground">
                Indoor Coverage • DAS / ADAS • Telecom Engineering
              </span>
            </div>
          </div>

          {/* Title */}
          <div className="max-w-4xl">
            <h1 className="text-[28px] font-bold leading-[1.1] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
              Телекоммуникационные решения для
              <br />
              <span className="text-primary">
                сложных инфраструктурных объектов
              </span>
            </h1 >

            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl">
              Group VPC проектирует и реализует системы связи для аэропортов,
              метрополитена, стадионов, бизнес-центров, транспортной
              инфраструктуры и крупных промышленных объектов.
            </p>
          </div>

          {/* Buttons */}
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/request"
              className="
                inline-flex
                items-center
                justify-center
                gap-2
                rounded-xl
                bg-primary
                px-8
                py-4
                font-medium
                text-primary-foreground
                transition-all
                hover:opacity-90
              "
            >
              Оставить заявку
              <ArrowRight className="h-5 w-5" />
            </Link>

            <Link
              href="/projects"
              className="
                inline-flex
                items-center
                justify-center
                rounded-xl
                border
                border-border
                bg-card/70
                px-8
                py-4
                font-medium
                backdrop-blur-sm
                transition-colors
                hover:bg-accent
              "
            >
              Смотреть проекты
            </Link>
          </div>

          {/* Stats */}
          <div className="mt-16 grid gap-4 md:grid-cols-3">
            <div className="rounded-2xl border border-border bg-card/60 p-5 backdrop-blur-sm">
              <div className="font-semibold text-primary">
                Проектирование
              </div>
              <p className="mt-2 text-sm text-muted-foreground">
                Разработка систем связи любой сложности
              </p>
            </div>

            <div className="rounded-2xl border border-border bg-card/60 p-5 backdrop-blur-sm">
              <div className="font-semibold text-primary">
                DAS / ADAS
              </div>
              <p className="mt-2 text-sm text-muted-foreground">
                Современные распределённые антенные системы
              </p>
            </div>

            <div className="rounded-2xl border border-border bg-card/60 p-5 backdrop-blur-sm">
              <div className="font-semibold text-primary">
                Реализация
              </div>
              <p className="mt-2 text-sm text-muted-foreground">
                Полный цикл внедрения и сопровождения
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}