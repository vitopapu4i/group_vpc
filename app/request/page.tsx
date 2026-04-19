"use client"

import { useState } from "react"
import Link from "next/link"
import {
  ArrowRight,
  Building2,
  Phone,
  Mail,
  MapPin,
  CheckCircle2,
} from "lucide-react"
import HeaderNew from "@/components/header-new"
import FooterNew from "@/components/footer-new"
import PageHero from "@/components/page-hero"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"

const requestTypes = [
  "Поставка оборудования",
  "Планирование систем связи",
  "Измерения и радиообследование",
  "Аудит существующей системы",
  "Реализация проекта под ключ",
  "Обслуживание системы",
]

const objectTypes = [
  "Аэропорт",
  "Метро / тоннели",
  "Стадион / арена",
  "Бизнес-центр / офис",
  "ЦОД",
  "Железнодорожный транспорт",
  "Торговый центр",
  "Промышленный объект",
  "Другое",
]

export default function RequestPage() {
  const [formData, setFormData] = useState({
    company: "",
    name: "",
    phone: "",
    email: "",
    requestType: "",
    objectType: "",
    city: "",
    message: "",
  })

  const [errors, setErrors] = useState<Record<string, string>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))

    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }))
    }
  }

  const validateForm = () => {
    const nextErrors: Record<string, string> = {}

    if (!formData.company.trim()) nextErrors.company = "Укажите компанию"
    if (!formData.name.trim()) nextErrors.name = "Укажите контактное лицо"
    if (!formData.phone.trim()) nextErrors.phone = "Укажите телефон"
    if (!formData.email.trim()) nextErrors.email = "Укажите email"
    if (!formData.requestType.trim()) nextErrors.requestType = "Выберите тип запроса"
    if (!formData.objectType.trim()) nextErrors.objectType = "Выберите тип объекта"
    if (!formData.message.trim()) nextErrors.message = "Опишите задачу"

    setErrors(nextErrors)
    return Object.keys(nextErrors).length === 0
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

      <PageHero
        title="Оставить заявку"
        description="Опишите объект и задачу — мы поможем с выбором архитектуры решения, оборудования и формата реализации проекта."
      />

      <section className="py-16 md:py-20 bg-card border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-6">
            <div className="rounded-2xl border border-border bg-background p-6">
              <Building2 className="w-6 h-6 text-primary mb-3" />
              <p className="text-lg font-semibold text-foreground mb-1">B2B формат</p>
              <p className="text-sm text-muted-foreground leading-7">
                Работаем с корпоративными и инфраструктурными объектами
              </p>
            </div>

            <div className="rounded-2xl border border-border bg-background p-6">
              <Phone className="w-6 h-6 text-primary mb-3" />
              <p className="text-lg font-semibold text-foreground mb-1">Быстрый контакт</p>
              <p className="text-sm text-muted-foreground leading-7">
                Свяжемся для уточнения параметров проекта
              </p>
            </div>

            <div className="rounded-2xl border border-border bg-background p-6">
              <CheckCircle2 className="w-6 h-6 text-primary mb-3" />
              <p className="text-lg font-semibold text-foreground mb-1">Инженерный подход</p>
              <p className="text-sm text-muted-foreground leading-7">
                Подберём решение под ваш объект и ограничения
              </p>
            </div>

            <div className="rounded-2xl border border-border bg-background p-6">
              <MapPin className="w-6 h-6 text-primary mb-3" />
              <p className="text-lg font-semibold text-foreground mb-1">Сложные объекты</p>
              <p className="text-sm text-muted-foreground leading-7">
                Аэропорты, метро, стадионы, ЦОД, транспорт
              </p>
            </div>
          </div>
        </div>
      </section>

      <main className="py-16 md:py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-10 lg:gap-14 items-start">
            <div>
              <p className="text-sm font-medium uppercase tracking-widest text-muted-foreground mb-3">
                Запрос
              </p>

              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                Расскажите о проекте
              </h2>

              <div className="w-12 h-0.5 bg-primary mb-5" />

              <p className="text-muted-foreground leading-7 mb-6">
                Укажите тип объекта, интересующее направление и кратко опишите
                задачу. Это поможет быстрее понять объём работ и подготовить
                подходящий формат взаимодействия.
              </p>

              <div className="rounded-3xl border border-border bg-card p-6 md:p-8">
                <h3 className="text-xl font-semibold text-foreground mb-5">
                  Что можно указать в запросе
                </h3>

                <div className="space-y-4">
                  {[
                    "Тип объекта и его назначение",
                    "Город или регион реализации",
                    "Проблема текущего покрытия или задача нового внедрения",
                    "Нужна поставка оборудования, аудит, проектирование или реализация",
                    "Ограничения по срокам, бюджету или инфраструктуре",
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                      <p className="text-sm text-muted-foreground leading-7">{item}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-8 rounded-2xl bg-primary/5 border border-primary/15 p-5">
                  <p className="text-sm font-medium text-foreground mb-2">
                    Предпочитаете связаться напрямую?
                  </p>

                  <div className="space-y-2 text-sm text-muted-foreground">
                    <p>
                      Телефон:{" "}
                      <a
                        href="tel:+79811046951"
                        className="text-foreground hover:text-primary transition-colors"
                      >
                        +7 981 104 69 51
                      </a>
                    </p>
                    <p>
                      Email:{" "}
                      <a
                        href="mailto:info@groupvpc.com"
                        className="text-foreground hover:text-primary transition-colors"
                      >
                        info@groupvpc.com
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-3xl border border-border bg-card p-6 md:p-8">
              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <h3 className="text-xl font-semibold text-foreground">
                    Форма заявки
                  </h3>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="company">Компания *</Label>
                      <Input
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="Название компании"
                        className={errors.company ? "border-red-500" : ""}
                      />
                      {errors.company && (
                        <p className="text-sm text-red-500">{errors.company}</p>
                      )}
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="name">Контактное лицо *</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Имя и должность"
                        className={errors.name ? "border-red-500" : ""}
                      />
                      {errors.name && (
                        <p className="text-sm text-red-500">{errors.name}</p>
                      )}
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
                        placeholder="+7 ..."
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
                        placeholder="name@company.com"
                        className={errors.email ? "border-red-500" : ""}
                      />
                      {errors.email && (
                        <p className="text-sm text-red-500">{errors.email}</p>
                      )}
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="requestType">Тип запроса *</Label>
                      <select
                        id="requestType"
                        name="requestType"
                        value={formData.requestType}
                        onChange={handleChange}
                        className={`flex h-10 w-full rounded-md border bg-background px-3 py-2 text-sm text-foreground ${
                          errors.requestType ? "border-red-500" : "border-input"
                        }`}
                      >
                        <option value="">Выберите направление</option>
                        {requestTypes.map((item) => (
                          <option key={item} value={item}>
                            {item}
                          </option>
                        ))}
                      </select>
                      {errors.requestType && (
                        <p className="text-sm text-red-500">{errors.requestType}</p>
                      )}
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="objectType">Тип объекта *</Label>
                      <select
                        id="objectType"
                        name="objectType"
                        value={formData.objectType}
                        onChange={handleChange}
                        className={`flex h-10 w-full rounded-md border bg-background px-3 py-2 text-sm text-foreground ${
                          errors.objectType ? "border-red-500" : "border-input"
                        }`}
                      >
                        <option value="">Выберите объект</option>
                        {objectTypes.map((item) => (
                          <option key={item} value={item}>
                            {item}
                          </option>
                        ))}
                      </select>
                      {errors.objectType && (
                        <p className="text-sm text-red-500">{errors.objectType}</p>
                      )}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="city">Город / регион</Label>
                    <Input
                      id="city"
                      name="city"
                      value={formData.city}
                      onChange={handleChange}
                      placeholder="Москва, Санкт-Петербург, Минск и т.д."
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Описание задачи *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      rows={7}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Опишите объект, текущую ситуацию, задачи по покрытию, интересующие услуги, ожидаемые сроки или ограничения."
                      className={errors.message ? "border-red-500" : ""}
                    />
                    {errors.message && (
                      <p className="text-sm text-red-500">{errors.message}</p>
                    )}
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-primary hover:bg-primary/90 text-white py-6 text-base font-semibold"
                  >
                    {isSubmitting ? "Отправка..." : "Отправить заявку"}
                    {!isSubmitting && <ArrowRight className="w-4 h-4 ml-2" />}
                  </Button>

                  <p className="text-xs text-muted-foreground leading-6">
                    Отправляя заявку, вы передаёте контактные данные для связи по
                    вашему проекту.
                  </p>
                </form>
              ) : (
                <div className="rounded-2xl bg-green-500/10 border border-green-500/20 p-6 md:p-8">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-green-600 dark:text-green-400 mt-0.5" />
                    <div>
                      <h3 className="text-xl font-semibold text-green-700 dark:text-green-400 mb-2">
                        Заявка отправлена
                      </h3>
                      <p className="text-sm text-green-700/90 dark:text-green-300 leading-7 mb-5">
                        Спасибо. Мы свяжемся с вами для уточнения параметров
                        проекта, подбора оборудования и обсуждения дальнейших
                        шагов.
                      </p>

                      <Link href="/">
                        <Button className="bg-green-600 hover:bg-green-700 text-white">
                          На главную
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>

      <FooterNew />
    </div>
  )
}