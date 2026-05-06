"use client"

import { useMemo, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Layers3 } from "lucide-react"
import HeaderNew from "@/components/header-new"
import PageHero from "@/components/page-hero"
import FooterNew from "@/components/footer-new"
import { equipmentCategories, equipmentItems } from "@/data/equipment"

export default function EquipmentPage() {
  const [activeCategory, setActiveCategory] =
    useState<(typeof equipmentCategories)[number]>("Все")

  const filteredItems = useMemo(() => {
    if (activeCategory === "Все") return equipmentItems
    return equipmentItems.filter((item) => item.category === activeCategory)
  }, [activeCategory])

  return (
    <div className="min-h-screen bg-background">
      <HeaderNew />

      <PageHero
        title="Системы и решения"
        description="Комплексные решения для сотовой связи, TETRA, поездных ретрансляторов, проектирования, радиоизмерений, аудита и подбора компонентов АФС."
      />

      <section className="py-12 md:py-16 bg-card border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-10 items-start">
            <div>
              <p className="text-sm font-medium uppercase tracking-widest text-muted-foreground mb-3">
                Подход VPC
              </p>

              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                Мы поставляем не отдельные комплектующие, а готовые инженерные решения
              </h2>

              <div className="w-12 h-0.5 bg-primary mb-5" />

              <p className="text-muted-foreground leading-7">
                Раздел объединяет системные решения и услуги: M-DOTS для сотовой
                связи и TETRA, репитерные решения, проектирование, радиоизмерения,
                аудит систем связи и подбор компонентов АФС под требования объекта.
              </p>
            </div>

            <div className="rounded-3xl border border-border bg-background p-6 md:p-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <Layers3 className="w-6 h-6 text-primary" />
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    Решение под объект
                  </h3>

                  <p className="text-sm text-muted-foreground leading-7">
                    Состав системы, оборудование, архитектура, измерения и
                    сопровождение подбираются индивидуально — с учётом объекта,
                    требований заказчика, радиосреды и сценариев эксплуатации.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-8 border-b border-border bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-3">
            {equipmentCategories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 text-sm rounded-full border transition-colors ${
                  activeCategory === cat
                    ? "bg-primary text-white border-primary"
                    : "bg-card text-foreground border-border hover:border-primary/40 hover:text-primary"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item) => (
              <Link
                key={item.id}
                href={`/equipment/${item.id}`}
                className="group bg-card rounded-2xl border border-border overflow-hidden hover:shadow-xl transition-all duration-300"
              >
                <div className="relative h-52 overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />

                  <div className="absolute left-4 top-4">
                    <span className="bg-card/90 border border-border backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium text-foreground">
                      {item.category}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-lg font-semibold text-foreground mb-3 group-hover:text-primary transition-colors leading-snug">
                    {item.name}
                  </h3>

                  <p className="text-sm text-muted-foreground mb-5 line-clamp-4 leading-7">
                    {item.shortDescription}
                  </p>

                  <div className="flex items-center justify-between gap-4">
                    <span className="text-sm font-medium text-foreground">
                      {item.price}
                    </span>

                    <span className="text-sm text-primary flex items-center gap-1 group-hover:gap-2 transition-all">
                      Подробнее
                      <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
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