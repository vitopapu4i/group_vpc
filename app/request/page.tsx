"use client"

import { useState } from "react"
import Link from "next/link"
import {
  ArrowRight,
  Building2,
  CheckCircle2,
  Clock3,
  Mail,
  MapPin,
  Phone,
  Send,
} from "lucide-react"
import HeaderNew from "@/components/header-new"
import FooterNew from "@/components/footer-new"
import PageHero from "@/components/page-hero"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { company } from "@/data/company"



const requestTypes = [
  "Системы M-DOTS",
  "Репитерные решения",
  "Проектирование дизайн-плана",
  "Радиоизмерения",
  "Аудит системы связи",
  "Подбор компонентов АФС",
  "Реализация проекта под ключ",
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
    await new Promise((resolve) => setTimeout(resolve, 1000))
    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  return (
    <div className="min-h-screen bg-background">
      <HeaderNew />

      <PageHero
        title="Контакты"
        description="Свяжитесь с VPC для обсуждения проекта, подбора системного решения, радиоизмерений, аудита или проектирования систем связи."
      />

      <section className="py-16 md:py-20 bg-card border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-[0.95fr_1.05fr] gap-10 lg:gap-14 items-start">
            <div>
              <p className="text-sm font-medium uppercase tracking-widest text-muted-foreground mb-3">
                Офисы
              </p>

              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                Работаем из Москвы и Санкт-Петербурга
              </h2>

              <div className="w-12 h-0.5 bg-primary mb-5" />

              <p className="text-muted-foreground leading-7 max-w-2xl">
                Обсудим объект, требования к покрытию, формат работ и подберём
                подходящее решение: от обследования и дизайн-плана до поставки
                системы и сопровождения внедрения.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-5">
              {company.offices.map((office) => (
                <a
                  key={office.city}
                  href={office.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group rounded-3xl border border-border bg-background p-6 hover:border-primary/40 hover:shadow-lg transition-all"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>

                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    {office.city}
                  </h3>

                  <p className="text-sm text-muted-foreground leading-7 mb-5">
                    {office.address}
                  </p>

                  <span className="inline-flex items-center text-sm font-medium text-primary">
                    Открыть в Яндекс Картах
                    <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      <main className="py-16 md:py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-10 lg:gap-14 items-start">
            <div className="space-y-6">
              <div className="rounded-3xl border border-border bg-card p-6 md:p-8">
                <p className="text-sm font-medium uppercase tracking-widest text-muted-foreground mb-3">
                  Быстрая связь
                </p>

                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                  Напишите или позвоните нам
                </h2>

                <div className="w-12 h-0.5 bg-primary mb-6" />

                <div className="space-y-5">
                  <ContactItem
                    icon={Phone}
                    label="Телефон"
                    value={company.phoneDisplay}
                    href={company.phoneHref}
                  />

                  <ContactItem
                    icon={Mail}
                    label="Email"
                    value={company.email}
                    href={company.emailHref}
                  />

                  <ContactItem
                    icon={Clock3}
                    label="Формат ответа"
                    value="Свяжемся для уточнения параметров проекта"
                  />
                </div>
              </div>

              <div className="rounded-3xl border border-border bg-card p-6 md:p-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                    <Building2 className="w-6 h-6 text-primary" />
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-3">
                      Какие задачи можно обсудить
                    </h3>

                    <div className="space-y-3">
                      {[
                        "M-DOTS, TETRA и репитерные решения",
                        "Проектирование дизайн-планов",
                        "Радиоизмерения и аудит систем связи",
                        "Подбор компонентов АФС под требования объекта",
                        "Реализация проекта под ключ",
                      ].map((item) => (
                        <div key={item} className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                          <p className="text-sm text-muted-foreground leading-7">
                            {item}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-3xl border border-border bg-card p-6 md:p-8">
              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <p className="text-sm font-medium uppercase tracking-widest text-muted-foreground mb-3">
                      Заявка
                    </p>

                    <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                      Расскажите о проекте
                    </h2>

                    <p className="text-sm text-muted-foreground leading-7">
                      Укажите тип объекта, интересующее направление и кратко
                      опишите задачу. Это поможет быстрее подготовить подходящий
                      формат взаимодействия.
                    </p>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <FormField
                      label="Компания *"
                      error={errors.company}
                      input={
                        <Input
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          placeholder="Название компании"
                          className={errors.company ? "border-red-500" : ""}
                        />
                      }
                    />

                    <FormField
                      label="Контактное лицо *"
                      error={errors.name}
                      input={
                        <Input
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Имя и должность"
                          className={errors.name ? "border-red-500" : ""}
                        />
                      }
                    />
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <FormField
                      label="Телефон *"
                      error={errors.phone}
                      input={
                        <Input
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="+7 ..."
                          className={errors.phone ? "border-red-500" : ""}
                        />
                      }
                    />

                    <FormField
                      label="Email *"
                      error={errors.email}
                      input={
                        <Input
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="name@company.com"
                          className={errors.email ? "border-red-500" : ""}
                        />
                      }
                    />
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <FormField
                      label="Тип запроса *"
                      error={errors.requestType}
                      input={
                        <select
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
                      }
                    />

                    <FormField
                      label="Тип объекта *"
                      error={errors.objectType}
                      input={
                        <select
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
                      }
                    />
                  </div>

                  <FormField
                    label="Город / регион"
                    input={
                      <Input
                        name="city"
                        value={formData.city}
                        onChange={handleChange}
                        placeholder="Москва, Санкт-Петербург и т.д."
                      />
                    }
                  />

                  <FormField
                    label="Описание задачи *"
                    error={errors.message}
                    input={
                      <Textarea
                        name="message"
                        rows={7}
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Опишите объект, текущую ситуацию, задачи по покрытию, интересующие услуги, сроки или ограничения."
                        className={errors.message ? "border-red-500" : ""}
                      />
                    }
                  />

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-primary hover:bg-primary/90 text-white py-6 text-base font-semibold"
                  >
                    {isSubmitting ? "Отправка..." : "Отправить заявку"}
                    {!isSubmitting && <Send className="w-4 h-4 ml-2" />}
                  </Button>

                  <p className="text-xs text-muted-foreground leading-6">
                    Отправляя заявку, вы передаёте контактные данные для связи
                    по вашему проекту.
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
                        проекта, подбора решения и обсуждения дальнейших шагов.
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

function ContactItem({
  icon: Icon,
  label,
  value,
  href,
}: {
  icon: typeof Phone
  label: string
  value: string
  href?: string
}) {
  const content = (
    <div className="flex items-start gap-4">
      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
        <Icon className="w-5 h-5 text-primary" />
      </div>
      <div>
        <p className="text-sm text-muted-foreground mb-1">{label}</p>
        <p className="text-base font-medium text-foreground">{value}</p>
      </div>
    </div>
  )

  if (href) {
    return (
      <a href={href} className="block hover:opacity-85 transition-opacity">
        {content}
      </a>
    )
  }

  return content
}

function FormField({
  label,
  input,
  error,
}: {
  label: string
  input: React.ReactNode
  error?: string
}) {
  return (
    <div className="space-y-2">
      <Label>{label}</Label>
      {input}
      {error && <p className="text-sm text-red-500">{error}</p>}
    </div>
  )
}