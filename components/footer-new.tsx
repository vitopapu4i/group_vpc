import Link from "next/link"
import { MapPin, Phone, Mail, ChevronRight } from "lucide-react"
import { company } from "@/data/company"

const companyLinks = [
  { label: "О компании", href: "/about" },
  { label: "Услуги", href: "/services" },
  { label: "Проекты", href: "/projects" },
  { label: "Оборудование", href: "/equipment" },
  { label: "Контакты", href: "/request" },
]

export default function FooterNew() {
  return (
    <footer className="bg-[#111111] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-14 grid md:grid-cols-2 xl:grid-cols-4 gap-10">
          {/* Компания */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded bg-[#D22630] flex items-center justify-center">
                <span className="text-white font-bold text-sm">VPC</span>
              </div>
              <div>
                <p className="font-bold text-lg leading-none">
                  {company.shortName}
                </p>
                <p className="text-sm text-white/60 mt-1">
                  {company.tagline}
                </p>
              </div>
            </div>

            <p className="text-sm text-white/70 leading-6 mb-6 max-w-sm">
              Проектирование систем связи, indoor coverage, DAS / ADAS,
              поставка оборудования, аудит, измерения и реализация проектов
              для сложных инфраструктурных объектов.
            </p>

            <div className="space-y-3 text-sm text-white/80">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 mt-0.5 text-[#D22630]" />
                <span>{company.address}</span>
              </div>

              <div className="flex items-start gap-3">
                <Phone className="w-4 h-4 mt-0.5 text-[#D22630]" />
                <a
                  href={company.phoneHref}
                  className="hover:text-white transition-colors"
                >
                  {company.phoneDisplay}
                </a>
              </div>

              <div className="flex items-start gap-3">
                <Mail className="w-4 h-4 mt-0.5 text-[#D22630]" />
                <a
                  href={company.emailHref}
                  className="hover:text-white transition-colors"
                >
                  {company.email}
                </a>
              </div>
            </div>
          </div>

          {/* Навигация */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white/90 mb-5">
              Компания
            </h3>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="inline-flex items-center gap-2 text-sm text-white/70 hover:text-white transition-colors"
                  >
                    <ChevronRight className="w-4 h-4 text-[#D22630]" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Направления */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white/90 mb-5">
              Направления
            </h3>
            <ul className="space-y-3">
              {company.directions.map((item) => (
                <li
                  key={item}
                  className="inline-flex items-center gap-2 text-sm text-white/70"
                >
                  <ChevronRight className="w-4 h-4 text-[#D22630]" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Офисы + CTA */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white/90 mb-5">
              Офисы
            </h3>

            <div className="flex flex-wrap gap-2 mb-6">
              {company.offices.map((office) => (
                <span
                  key={office}
                  className="px-3 py-1 rounded-full border border-white/15 text-sm text-white/75"
                >
                  {office}
                </span>
              ))}
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <p className="text-sm font-medium mb-2">Обсудим проект?</p>
              <p className="text-sm text-white/65 leading-6 mb-4">
                Подберём архитектуру решения, оборудование и формат реализации
                под ваш объект.
              </p>

              <Link
                href="/request"
                className="inline-flex items-center justify-center rounded-md bg-[#D22630] hover:bg-[#C42028] px-4 py-2 text-sm font-medium transition-colors"
              >
                Оставить заявку
              </Link>
            </div>
          </div>
        </div>

        {/* Нижняя строка */}
        <div className="border-t border-white/10 py-6 flex flex-col md:flex-row md:items-center md:justify-between gap-3">
          <p className="text-sm text-white/50">
            © 2025 {company.fullName}. Все права защищены.
          </p>

          <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4 text-sm text-white/50">
            <div className="flex items-center gap-2">
              <span>{company.website}</span>
              <span className="hidden md:inline">•</span>
              <span>Indoor coverage / DAS / ADAS / Telecom</span>
            </div>

            <div className="flex items-center gap-2">
              <span className="hidden md:inline">•</span>
              <span className="text-white/40">Разработка сайта:</span>
              <a
                href="v,,"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/70 hover:text-white transition-colors"
              >
                Victor Bannov
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}