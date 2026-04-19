import Link from "next/link"
import { Phone, Mail, MapPin, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { company } from "@/data/company"

export default function ContactBar() {
  return (
    <section className="bg-card border-t border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid lg:grid-cols-[1.2fr_1fr] gap-8 items-center">
          <div>
            <p className="text-sm font-medium uppercase tracking-widest text-muted-foreground mb-3">
              Контакты
            </p>

            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Обсудим ваш объект и подберём решение
            </h2>

            <div className="w-12 h-0.5 bg-primary mb-5" />

            <p className="text-muted-foreground max-w-2xl leading-7">
              Поможем с выбором архитектуры системы связи, подбором оборудования,
              радиопланированием, измерениями и реализацией проекта для
              аэропортов, метро, стадионов, бизнес-центров, ЦОД и транспортной
              инфраструктуры.
            </p>
          </div>

          <div className="rounded-2xl border border-border bg-background p-6 md:p-8">
            <div className="space-y-5 mb-7">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Телефон</p>
                  <a
                    href={company.phoneHref}
                    className="text-base font-medium text-foreground hover:text-primary transition-colors"
                  >
                    {company.phoneDisplay}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Email</p>
                  <a
                    href={company.emailHref}
                    className="text-base font-medium text-foreground hover:text-primary transition-colors"
                  >
                    {company.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Адрес</p>
                  <p className="text-base font-medium text-foreground">
                    {company.address}
                  </p>
                </div>
              </div>
            </div>

            <Link href="/request">
              <Button className="w-full bg-primary hover:bg-primary/90 text-white py-6 text-base font-semibold">
                Оставить заявку
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}