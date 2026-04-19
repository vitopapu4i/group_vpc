import { Building2, Train, Plane, Trophy, Server, Blocks } from "lucide-react"

const sectors = [
  {
    title: "Аэропорты",
    description: "Пассажирские терминалы и транспортные узлы",
    icon: Plane,
  },
  {
    title: "Метро и тоннели",
    description: "Покрытие станций, перегонов и тоннельной инфраструктуры",
    icon: Train,
  },
  {
    title: "Стадионы и арены",
    description: "High-density объекты и массовые мероприятия",
    icon: Trophy,
  },
  {
    title: "Бизнес-центры",
    description: "Офисные здания и коммерческая недвижимость",
    icon: Building2,
  },
  {
    title: "ЦОД",
    description: "Инженерные объекты с повышенными требованиями",
    icon: Server,
  },
  {
    title: "DAS / ADAS решения",
    description: "Indoor coverage, transport и распределённые системы",
    icon: Blocks,
  },
]

export default function TrustStrip() {
  return (
    <section className="py-14 md:py-18 bg-card border-y border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center">
          <p className="text-sm font-medium uppercase tracking-widest text-muted-foreground mb-3">
            Экспертиза
          </p>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            Где применяются решения VPC
          </h2>
          <p className="text-muted-foreground max-w-3xl mx-auto leading-7">
            Практический опыт компании охватывает объекты со сложной архитектурой,
            высокой плотностью пользователей и повышенными требованиями к качеству покрытия.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-5">
          {sectors.map((sector) => {
            const Icon = sector.icon

            return (
              <div
                key={sector.title}
                className="rounded-2xl border border-border bg-background p-6 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-primary" />
                </div>

                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {sector.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-7">
                  {sector.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}