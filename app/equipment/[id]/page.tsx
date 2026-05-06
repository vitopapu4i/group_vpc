"use client"

import { useMemo, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { useParams } from "next/navigation"
import {
  ArrowLeft,
  CheckCircle,
  Package,
  Shield,
  Radio,
  Mail,
  ArrowRight,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import HeaderNew from "@/components/header-new"
import FooterNew from "@/components/footer-new"
import { equipmentItems } from "@/data/equipment"

export default function EquipmentDetailPage() {
  const params = useParams()
  const id = params.id as string

  const solution = useMemo(
    () => equipmentItems.find((item) => item.id === id),
    [id]
  )

  if (!solution) {
    return (
      <div className="min-h-screen bg-background">
        <HeaderNew />
        <main className="max-w-7xl mx-auto px-4 py-20 text-center">
          <h1 className="text-2xl font-bold text-foreground mb-4">
            Решение не найдено
          </h1>
          <Button asChild variant="outline">
            <Link href="/equipment">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Вернуться в раздел
            </Link>
          </Button>
        </main>
        <FooterNew />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background">
      <HeaderNew />

      <section className="bg-primary text-primary-foreground py-16 md:py-20 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/equipment"
            className="inline-flex items-center text-primary-foreground/75 hover:text-primary-foreground text-sm mb-6 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Назад к системам и решениям
          </Link>

          <p className="text-primary-foreground/75 text-sm uppercase tracking-wider mb-3">
            {solution.category}
          </p>

          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            {solution.name}
          </h1>

          <p className="text-primary-foreground/85 text-lg max-w-3xl leading-8">
            {solution.shortDescription}
          </p>
        </div>
      </section>

      <main className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-[0.95fr_1.05fr] gap-10 lg:gap-12 items-start">
            <div>
              <div className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-border bg-card">
                <Image
                  src={solution.image}
                  alt={solution.name}
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            <div className="bg-card rounded-3xl border border-border p-6 md:p-8">
              <div className="mb-7">
                <p className="text-sm text-muted-foreground mb-2">
                  Формат предложения
                </p>
                <p className="text-2xl font-bold text-foreground">
                  {solution.price}
                </p>
              </div>

              <p className="text-muted-foreground leading-8 mb-8">
                {solution.fullDescription}
              </p>

              <div className="grid sm:grid-cols-3 gap-4 mb-8">
                <div className="rounded-xl bg-muted p-4 border border-border">
                  <Package className="w-5 h-5 mb-2 text-primary" />
                  <p className="text-sm font-medium text-foreground">
                    Система
                  </p>
                  <p className="text-xs text-muted-foreground">
                    Под задачу объекта
                  </p>
                </div>

                <div className="rounded-xl bg-muted p-4 border border-border">
                  <Radio className="w-5 h-5 mb-2 text-primary" />
                  <p className="text-sm font-medium text-foreground">
                    Радиопланирование
                  </p>
                  <p className="text-xs text-muted-foreground">
                    Расчёты и измерения
                  </p>
                </div>

                <div className="rounded-xl bg-muted p-4 border border-border">
                  <Shield className="w-5 h-5 mb-2 text-primary" />
                  <p className="text-sm font-medium text-foreground">
                    Сопровождение
                  </p>
                  <p className="text-xs text-muted-foreground">
                    От подбора до внедрения
                  </p>
                </div>
              </div>

              <Button
                asChild
                className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-white"
              >
                <Link href="/request">
                  Запросить консультацию
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 mt-12">
            <section className="bg-card rounded-3xl border border-border p-6 md:p-8">
              <h2 className="text-2xl font-semibold text-foreground mb-6">
                Характеристики решения
              </h2>

              <div className="space-y-4">
                {solution.specifications.map((spec) => (
                  <div
                    key={spec.label}
                    className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 border-b border-border pb-4 last:border-0 last:pb-0"
                  >
                    <span className="text-sm text-muted-foreground">
                      {spec.label}
                    </span>
                    <span className="text-sm font-medium text-foreground sm:text-right">
                      {spec.value}
                    </span>
                  </div>
                ))}
              </div>
            </section>

            <section className="bg-card rounded-3xl border border-border p-6 md:p-8">
              <h2 className="text-2xl font-semibold text-foreground mb-6">
                Ключевые возможности
              </h2>

              <ul className="space-y-4">
                {solution.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                    <span className="text-muted-foreground leading-7">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="mt-8 rounded-2xl bg-primary/5 border border-primary/15 p-5">
                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                  <div>
                    <p className="font-medium text-foreground">
                      Нужен подбор решения под объект?
                    </p>
                    <p className="text-sm text-muted-foreground mt-1 leading-7">
                      Мы можем подобрать архитектуру, состав системы,
                      оборудование и формат работ под требования заказчика.
                    </p>
                  </div>
                </div>
              </div>
            </section>
          </div>

          <section className="mt-12 rounded-3xl border border-border bg-card p-6 md:p-8">
            <div className="grid lg:grid-cols-[1fr_auto] gap-6 items-center">
              <div>
                <h2 className="text-2xl font-semibold text-foreground mb-3">
                  Обсудим применение решения?
                </h2>
                <p className="text-muted-foreground leading-7 max-w-3xl">
                  Опишите объект, задачу по покрытию, требования к связи и
                  ограничения проекта — мы предложим подходящий формат работ.
                </p>
              </div>

              <Button
                asChild
                className="bg-primary hover:bg-primary/90 text-white px-6 py-5"
              >
                <Link href="/request">
                  Оставить заявку
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