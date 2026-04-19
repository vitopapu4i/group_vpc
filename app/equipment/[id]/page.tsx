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
  Phone,
  Mail,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import HeaderNew from "@/components/header-new"
import FooterNew from "@/components/footer-new"
import { equipmentItems } from "@/data/equipment"

export default function EquipmentDetailPage() {
  const params = useParams()
  const id = params.id as string

  const equipment = useMemo(
    () => equipmentItems.find((item) => item.id === id),
    [id]
  )

  const [showOrderForm, setShowOrderForm] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    phone: "",
    email: "",
    message: "",
  })

  if (!equipment) {
    return (
      <div className="min-h-screen bg-background">
        <HeaderNew />
        <div className="max-w-7xl mx-auto px-4 py-20 text-center">
          <h1 className="text-2xl font-bold text-foreground mb-4">
            Оборудование не найдено
          </h1>
          <Link href="/equipment">
            <Button variant="outline">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Вернуться в каталог
            </Button>
          </Link>
        </div>
        <FooterNew />
      </div>
    )
  }

  const validateForm = () => {
    const nextErrors: Record<string, string> = {}
    if (!formData.name.trim()) nextErrors.name = "Введите имя"
    if (!formData.phone.trim()) nextErrors.phone = "Введите телефон"
    if (!formData.email.trim()) nextErrors.email = "Введите email"
    setErrors(nextErrors)
    return Object.keys(nextErrors).length === 0
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))

    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }))
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!validateForm()) return

    setIsSubmitting(true)
    await new Promise((resolve) => setTimeout(resolve, 1200))
    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  return (
    <div className="min-h-screen bg-background">
      <HeaderNew />

      <section className="bg-primary text-primary-foreground py-16 md:py-20 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/equipment"
            className="inline-flex items-center text-primary-foreground/70 hover:text-primary-foreground text-sm mb-6 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Назад в каталог
          </Link>

          <p className="text-primary-foreground/70 text-sm uppercase tracking-wider mb-3">
            {equipment.category}
          </p>

          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            {equipment.name}
          </h1>

          <p className="text-primary-foreground/85 text-lg max-w-3xl">
            {equipment.shortDescription}
          </p>
        </div>
      </section>

      <main className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-border bg-card">
                <Image
                  src={equipment.image}
                  alt={equipment.name}
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            <div>
              <div className="bg-card rounded-2xl border border-border p-8">
                <div className="flex items-center justify-between gap-4 mb-6 flex-wrap">
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Стоимость</p>
                    <p className="text-2xl font-bold text-foreground">
                      {equipment.price}
                    </p>
                  </div>

                  <Button
                    className="bg-primary hover:bg-primary/90 text-white"
                    onClick={() => setShowOrderForm((prev) => !prev)}
                  >
                    Запросить информацию
                  </Button>
                </div>

                <p className="text-muted-foreground leading-relaxed mb-8">
                  {equipment.fullDescription}
                </p>

                <div className="grid sm:grid-cols-3 gap-4 mb-8">
                  <div className="rounded-xl bg-muted p-4 border border-border">
                    <Package className="w-5 h-5 mb-2 text-primary" />
                    <p className="text-sm font-medium text-foreground">Поставка</p>
                    <p className="text-xs text-muted-foreground">Под заказ</p>
                  </div>

                  <div className="rounded-xl bg-muted p-4 border border-border">
                    <Shield className="w-5 h-5 mb-2 text-primary" />
                    <p className="text-sm font-medium text-foreground">
                      Подбор решения
                    </p>
                    <p className="text-xs text-muted-foreground">Под ваш проект</p>
                  </div>

                  <div className="rounded-xl bg-muted p-4 border border-border">
                    <Phone className="w-5 h-5 mb-2 text-primary" />
                    <p className="text-sm font-medium text-foreground">
                      Консультация
                    </p>
                    <p className="text-xs text-muted-foreground">
                      Инженерная поддержка
                    </p>
                  </div>
                </div>

                {showOrderForm && (
                  <div className="border-t border-border pt-8">
                    {!isSubmitted ? (
                      <form onSubmit={handleSubmit} className="space-y-5">
                        <h2 className="text-xl font-semibold text-foreground">
                          Запросить информацию / КП
                        </h2>

                        <div className="grid sm:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="name">Имя *</Label>
                            <Input
                              id="name"
                              name="name"
                              value={formData.name}
                              onChange={handleChange}
                              className={errors.name ? "border-red-500" : ""}
                            />
                            {errors.name && (
                              <p className="text-sm text-red-500">{errors.name}</p>
                            )}
                          </div>

                          <div className="space-y-2">
                            <Label htmlFor="company">Компания</Label>
                            <Input
                              id="company"
                              name="company"
                              value={formData.company}
                              onChange={handleChange}
                            />
                          </div>
                        </div>

                        <div className="grid sm:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="phone">Телефон *</Label>
                            <Input
                              id="phone"
                              name="phone"
                              value={formData.phone}
                              onChange={handleChange}
                              className={errors.phone ? "border-red-500" : ""}
                            />
                            {errors.phone && (
                              <p className="text-sm text-red-500">{errors.phone}</p>
                            )}
                          </div>

                          <div className="space-y-2">
                            <Label htmlFor="email">Email *</Label>
                            <Input
                              id="email"
                              name="email"
                              type="email"
                              value={formData.email}
                              onChange={handleChange}
                              className={errors.email ? "border-red-500" : ""}
                            />
                            {errors.email && (
                              <p className="text-sm text-red-500">{errors.email}</p>
                            )}
                          </div>
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="message">Комментарий</Label>
                          <Textarea
                            id="message"
                            name="message"
                            rows={5}
                            value={formData.message}
                            onChange={handleChange}
                            placeholder="Опишите объект, задачу или требуемую конфигурацию."
                          />
                        </div>

                        <Button
                          type="submit"
                          disabled={isSubmitting}
                          className="bg-primary hover:bg-primary/90 text-white"
                        >
                          {isSubmitting ? "Отправка..." : "Отправить запрос"}
                        </Button>
                      </form>
                    ) : (
                      <div className="rounded-xl bg-green-500/10 border border-green-500/20 p-6">
                        <div className="flex items-start gap-3">
                          <CheckCircle className="w-6 h-6 text-green-600 dark:text-green-400 mt-0.5" />
                          <div>
                            <h3 className="font-semibold text-green-700 dark:text-green-400 mb-1">
                              Запрос отправлен
                            </h3>
                            <p className="text-sm text-green-700/90 dark:text-green-300 leading-7">
                              Спасибо. Мы свяжемся с вами для уточнения параметров
                              проекта и подбора конфигурации.
                            </p>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 mt-12">
            <section className="bg-card rounded-2xl border border-border p-8">
              <h2 className="text-2xl font-semibold text-foreground mb-6">
                Характеристики
              </h2>

              <div className="space-y-4">
                {equipment.specifications.map((spec) => (
                  <div
                    key={spec.label}
                    className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 border-b border-border pb-4 last:border-0 last:pb-0"
                  >
                    <span className="text-sm text-muted-foreground">
                      {spec.label}
                    </span>
                    <span className="text-sm font-medium text-foreground">
                      {spec.value}
                    </span>
                  </div>
                ))}
              </div>
            </section>

            <section className="bg-card rounded-2xl border border-border p-8">
              <h2 className="text-2xl font-semibold text-foreground mb-6">
                Ключевые особенности
              </h2>

              <ul className="space-y-4">
                {equipment.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5" />
                    <span className="text-muted-foreground leading-7">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="mt-8 rounded-xl bg-primary/5 border border-primary/15 p-5">
                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-primary mt-0.5" />
                  <div>
                    <p className="font-medium text-foreground">
                      Нужно КП или подбор решения?
                    </p>
                    <p className="text-sm text-muted-foreground mt-1 leading-7">
                      Мы можем подобрать оборудование под конкретный объект и
                      сценарий применения.
                    </p>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>

      <FooterNew />
    </div>
  )
}