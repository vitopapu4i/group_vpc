import Link from "next/link"
import {
  CheckCircle2,
  ArrowRight,
  Building2,
  Globe2,
  ShieldCheck,
} from "lucide-react"
import { Button } from "@/components/ui/button"

const advantages = [
  "Возможность предоставления услуг на территории Европы и СНГ",
  "Наличие опытных и сертифицированных специалистов",
  "Подтверждённый опыт достижения заявленных параметров",
  "Подтверждённый опыт реализации крупномасштабных проектов",
  "Возможность предоставления нестандартных решений",
  "Возможность использования оборудования любых производителей",
]

const offices = ["Москва", "Прага", "Астана", "Дубай", "Минск"]

export default function AboutNew() {
  return (
    <section id="about" className="py-16 md:py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-10 lg:gap-14 items-start">
          <div>
            <p className="text-sm font-medium uppercase tracking-widest text-muted-foreground mb-3">
              О компании
            </p>

            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Инженерная экспертиза VPC для сложных объектов связи
            </h2>

            <div className="w-12 h-0.5 bg-primary mb-5" />

            <p className="text-muted-foreground leading-7 mb-5">
              VPC специализируется на проектировании и реализации систем связи
              для объектов, где требуется надёжное покрытие, точное
              радиопланирование и подтверждение параметров после внедрения.
            </p>

            <p className="text-muted-foreground leading-7 mb-8">
              Компания работает с indoor и транспортными решениями, поставляет
              оборудование, выполняет обследование, измерения, аудит и
              сопровождает проекты от концепции до ввода системы в эксплуатацию.
            </p>

            <div className="grid sm:grid-cols-3 gap-4 mb-8">
              <div className="rounded-2xl border border-border bg-card p-5">
                <Building2 className="w-6 h-6 text-primary mb-3" />
                <p className="text-2xl font-bold text-foreground mb-1">5</p>
                <p className="text-sm text-muted-foreground">
                  Офисов и представительств
                </p>
              </div>

              <div className="rounded-2xl border border-border bg-card p-5">
                <Globe2 className="w-6 h-6 text-primary mb-3" />
                <p className="text-2xl font-bold text-foreground mb-1">
                  EU / СНГ
                </p>
                <p className="text-sm text-muted-foreground">
                  География реализации
                </p>
              </div>

              <div className="rounded-2xl border border-border bg-card p-5">
                <ShieldCheck className="w-6 h-6 text-primary mb-3" />
                <p className="text-2xl font-bold text-foreground mb-1">
                  Telecom
                </p>
                <p className="text-sm text-muted-foreground">
                  Фокус на системах связи
                </p>
              </div>
            </div>

            <Link href="/about">
              <Button
                variant="outline"
                className="border-border hover:border-primary hover:text-primary"
              >
                Подробнее о компании
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>

          <div className="space-y-6">
            <div className="rounded-3xl border border-border bg-card p-6 md:p-8">
              <h3 className="text-xl font-semibold text-foreground mb-5">
                Ключевые преимущества
              </h3>

              <div className="space-y-4">
                {advantages.map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                    <p className="text-sm text-muted-foreground leading-7">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-3xl border border-border bg-card p-6 md:p-8">
              <h3 className="text-xl font-semibold text-foreground mb-5">
                Офисы и присутствие
              </h3>

              <div className="flex flex-wrap gap-3">
                {offices.map((office) => (
                  <span
                    key={office}
                    className="px-4 py-2 rounded-full border border-border bg-background text-sm text-foreground"
                  >
                    {office}
                  </span>
                ))}
              </div>

              <p className="text-sm text-muted-foreground leading-7 mt-5">
                Компания ведёт проекты и поддерживает клиентов на территории
                Европы и СНГ, включая поставку решений, инженерную экспертизу и
                сопровождение внедрения.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}