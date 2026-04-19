"use client"

import { useMemo, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
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
        title="Оборудование"
        description="Решения Hyperion / ADAS / M-Dots, ретрансляторы, O-RAN, антенны, измерительное оборудование и кабельная продукция."
      />

      <section className="py-8 border-b border-border bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-3">
            {equipmentCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 text-sm rounded-full border transition-colors ${
                  activeCategory === cat
                    ? "bg-foreground text-background border-foreground"
                    : "bg-background text-foreground border-border hover:border-primary/40 hover:text-primary"
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
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredItems.map((item) => (
              <Link
                key={item.id}
                href={`/equipment/${item.id}`}
                className="group bg-card rounded-2xl border border-border overflow-hidden hover:shadow-xl transition-all duration-300"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent dark:from-black/35" />
                </div>

                <div className="p-5">
                  <p className="text-xs text-muted-foreground mb-2">{item.category}</p>

                  <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors leading-snug">
                    {item.name}
                  </h3>

                  <p className="text-sm text-muted-foreground mb-4 line-clamp-3 leading-7">
                    {item.shortDescription}
                  </p>

                  <div className="flex items-center justify-between">
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