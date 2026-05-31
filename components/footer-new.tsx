import Link from "next/link"
import { MapPin, Phone, Mail, ChevronRight } from "lucide-react"
import { company } from "@/data/company"

const companyLinks = [
  { label: "О компании", href: "/about" },
  { label: "Услуги", href: "/services" },
  { label: "Проекты", href: "/projects" },
  { label: "Системы и решения", href: "/equipment" },
  { label: "Контакты", href: "/request" },
]



export default function FooterNew() {
  return (
    <footer className="bg-card text-foreground border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* MAIN */}
        <div className="py-14 grid md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* О компании */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded bg-primary flex items-center justify-center">
                <span className="text-white font-bold text-sm">VPC</span>
              </div>

              <div>
                <p className="font-bold text-lg leading-none">
                  {company.shortName}
                </p>
                <p className="text-sm text-muted-foreground mt-1">
                  {company.tagline}
                </p>
              </div>
            </div>

            <p className="text-sm text-muted-foreground leading-6 mb-6">
              Проектирование систем связи, indoor coverage, DAS / ADAS,
              поставка решений, аудит и реализация проектов.
            </p>

            <div className="space-y-3 text-sm text-muted-foreground">
              <div className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-primary shrink-0" />
                <a href={company.phoneHref} className="hover:text-foreground">
                  {company.phoneDisplay}
                </a>
              </div>

              <div className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-primary shrink-0" />
                <a href={company.emailHref} className="hover:text-foreground">
                  {company.email}
                </a>
              </div>
            </div>
          </div>

          {/* Навигация */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground mb-5">
              Компания
            </h3>

            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
                  >
                    <ChevronRight className="w-4 h-4 text-primary" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Офисы */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground mb-5">
              Офисы
            </h3>

            <div className="space-y-4">
              {company.offices.map((office) => (
                <a
                  key={office.city}
                  href={office.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 rounded-xl border border-border bg-background p-4 hover:border-primary/40 transition"
                >
                  <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />

                  <div>
                    <p className="text-sm font-medium text-foreground mb-1">
                      {office.city}
                    </p>
                    <p className="text-sm text-muted-foreground leading-6">
                      {office.address}
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div>
            <div className="h-full flex flex-col justify-between rounded-2xl border border-border bg-background p-6">
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-3">
                  Обсудим ваш проект?
                </h3>

                <p className="text-sm text-muted-foreground mb-6 leading-6">
                  Подберём архитектуру решения, оборудование и формат реализации под ваш объект.
                </p>
              </div>

              <Link
                href="/request"
                className="inline-flex items-center justify-center rounded-md bg-primary hover:bg-primary/90 px-4 py-3 text-sm font-medium text-white"
              >
                Оставить заявку
              </Link>
            </div>
          </div>

        </div>

        {/* BOTTOM */}
        <div className="border-t border-border py-6 flex flex-col md:flex-row justify-between gap-3 text-sm text-muted-foreground">
          <p>© 2025 {company.fullName}</p>

          <div className="flex flex-wrap gap-2 md:gap-4">
            <span>{company.website}</span>
            <span className="hidden md:inline">•</span>
            <span>Indoor / DAS / Telecom</span>
            <span className="hidden md:inline">•</span>
            <span className="opacity-70">Разработка:</span>
            <a
              href="https://yourstudio.com"
              target="_blank"
              className="hover:text-foreground"
            >
            Victor Bannov
            </a>
          </div>
        </div>

      </div>
    </footer>
  )
}