export type EquipmentItem = {
  id: string
  name: string
  category: string
  shortDescription: string
  fullDescription: string
  image: string
  price: string
  specifications: { label: string; value: string }[]
  features: string[]
}

export const equipmentItems: EquipmentItem[] = [
  {
    id: "rau-direct-coupled",
    name: "RAU Direct-Coupled Type",
    category: "Hyperion / ADAS / M-Dots",
    shortDescription: "Преобразует RF-сигналы в цифровой интерфейс CPRI.",
    fullDescription:
      "RAU Direct-Coupled Type используется для получения сигнала от пассивной донорной антенны и преобразования RF в цифровой поток CPRI. Платформа поддерживает текущие стандарты 2G/3G/4G и развитие до 5G NR.",
    image: "/telecom-network.jpg",
    price: "По запросу",
    specifications: [
      { label: "Интерфейс", value: "CPRI" },
      { label: "Поддержка стандартов", value: "2G / 3G / 4G / 5G NR ready" },
      { label: "Количество диапазонов", value: "До 3 диапазонов 2T2R" },
      { label: "Полоса на диапазон", value: "До 100 МГц" },
    ],
    features: [
      "Получение сигнала от пассивной донорной антенны",
      "Полностью цифровая платформа",
      "Подходит для масштабируемых ADAS-решений",
    ],
  },
  {
    id: "rau-wireless-access",
    name: "RAU Wireless-Access Type",
    category: "Hyperion / ADAS / M-Dots",
    shortDescription: "RAU со встроенной активной донорной антенной.",
    fullDescription:
      "Wireless-Access RAU представляет собой совмещённый блок RAU и активной приёмо-передающей донорной антенны с передачей сигнала к HUB по оптическому каналу.",
    image: "/communication-towers.jpg",
    price: "По запросу",
    specifications: [
      { label: "Интерфейс", value: "CPRI / оптический транспорт" },
      { label: "Поддержка стандартов", value: "2G / 3G / 4G / 5G NR ready" },
      { label: "Количество диапазонов", value: "До 3 диапазонов 2T2R" },
      { label: "Полоса на диапазон", value: "До 100 МГц" },
    ],
    features: [
      "Интеграция RAU и донорной антенны",
      "Передача к HUB по оптике",
      "Компактная архитектура для распределённых систем",
    ],
  },
  {
    id: "cpri-hub",
    name: "CPRI HUB",
    category: "Hyperion / ADAS / M-Dots",
    shortDescription: "Центральный оптический узел системы Hyperion M-Dots.",
    fullDescription:
      "CPRI HUB обеспечивает масштабируемое подключение распределённых активных антенных блоков AAU/mRRU по гибридному кабелю на основе протокола CPRI по топологии «звезда».",
    image: "/fiber-optic-cables.jpg",
    price: "По запросу",
    specifications: [
      { label: "Оптические порты", value: "11 × SFP+ 10 Гбит/с" },
      { label: "Топология", value: "Звезда" },
      { label: "Подключаемые блоки", value: "До 8 AAU / mRRU" },
    ],
    features: [
      "Масштабируемая архитектура",
      "Высокая пропускная способность",
      "Поддержка распределённых активных узлов",
    ],
  },
  {
    id: "aau",
    name: "AAU",
    category: "Hyperion / ADAS / M-Dots",
    shortDescription: "Активный антенный модуль для LTE и 5G NR.",
    fullDescription:
      "AAU предназначен для построения распределённых активных систем с поддержкой LTE и 5G NR в нескольких диапазонах и с возможностью питания по композитному кабелю.",
    image: "/telecom-network.jpg",
    price: "По запросу",
    specifications: [
      { label: "Конфигурация", value: "До 3 настраиваемых диапазонов 2T2R MIMO" },
      { label: "LTE Bands", value: "1 / 3 / 7 / 8 / 20 / 28" },
      { label: "5G NR", value: "N38 / N41 / N77 / N78 / N79" },
      { label: "Полоса", value: "До 100 МГц на диапазон" },
      { label: "Выходная мощность", value: "24 дБм на каждый порт" },
      { label: "Габариты", value: "300 × 300 × 86 мм" },
    ],
    features: [
      "Поддержка LTE и 5G NR",
      "2T2R MIMO",
      "Возможность питания от HUB по композитному кабелю",
    ],
  },
  {
    id: "mrru-m",
    name: "mRRU-m",
    category: "Hyperion / ADAS / M-Dots",
    shortDescription: "Модульный удалённый радиомодуль средней мощности.",
    fullDescription:
      "mRRU-m выполнен в модульной архитектуре и позволяет использовать до 3 передатчиков диапазонов 2T2R MIMO для LTE и 5G NR.",
    image: "/telecom-network.jpg",
    price: "По запросу",
    specifications: [
      { label: "Конфигурация", value: "До 3 передатчиков диапазонов 2T2R MIMO" },
      { label: "LTE Bands", value: "1 / 3 / 7 / 8 / 20 / 28" },
      { label: "5G NR", value: "N38 / N41 / N77 / N78 / N79" },
      { label: "Полоса", value: "До 100 МГц" },
      { label: "Выходная мощность", value: "33 дБм на каждый порт" },
    ],
    features: [
      "Модульная конструкция",
      "Подходит для распределённых систем внутри зданий и транспортных объектов",
      "Поддержка MIMO",
    ],
  },
  {
    id: "mrru-h",
    name: "mRRU-h",
    category: "Hyperion / ADAS / M-Dots",
    shortDescription: "Высокомощный удалённый радиомодуль для LTE и 5G NR.",
    fullDescription:
      "mRRU-h предназначен для решений, где требуется более высокая выходная мощность и большая ёмкость по диапазонам.",
    image: "/communication-towers.jpg",
    price: "По запросу",
    specifications: [
      { label: "Конфигурация", value: "До 6 передатчиков диапазонов 2T2R MIMO" },
      { label: "LTE Bands", value: "1 / 3 / 7 / 8 / 20 / 28" },
      { label: "5G NR", value: "N38 / N41 / N77 / N78 / N79" },
      { label: "Полоса", value: "До 100 МГц" },
      { label: "Выходная мощность", value: "46 дБм на каждый порт" },
      { label: "Габариты", value: "480 × 850 × 250 мм" },
    ],
    features: [
      "Высокая мощность",
      "Поддержка многодиапазонных сценариев",
      "Модульная архитектура",
    ],
  },
  {
    id: "hyperion-mini-repeater",
    name: "Hyperion Multi-band Digital Mini Repeater",
    category: "Ретрансляторы Hyperion",
    shortDescription: "Многодиапазонный цифровой мини-ретранслятор.",
    fullDescription:
      "Компактный цифровой репитер для многодиапазонных сетей с настраиваемой полосой пропускания и удалённым мониторингом.",
    image: "/telecom-network.jpg",
    price: "По запросу",
    specifications: [
      { label: "Диапазоны", value: "До 4 диапазонов" },
      { label: "Стандарты", value: "GSM / DCS / UMTS / LTE FDD / LTE TDD" },
      { label: "Коэффициент усиления", value: "70 дБ" },
      { label: "Выходная мощность", value: "До +23 дБм" },
      { label: "Мониторинг", value: "SMS / GPRS / TCP-IP" },
    ],
    features: [
      "Цифровая фильтрация",
      "Гибкая конфигурация по полосе",
      "Удалённый мониторинг",
    ],
  },
  {
    id: "hyperion-in-train-repeater",
    name: "Hyperion 4-Band Digital In-Train Repeater",
    category: "Ретрансляторы Hyperion",
    shortDescription: "Ретранслятор для поездов, включая установку в Сапсан.",
    fullDescription:
      "Решение для железнодорожного транспорта, рассчитанное на монтаж в 19-дюймовую стойку, с поддержкой частотных планов и удалённого мониторинга.",
    image: "/railway-infrastructure.jpg",
    price: "По запросу",
    specifications: [
      { label: "Установка", value: "19” стойка" },
      { label: "Диапазоны", value: "900 / 1800 / 2100 / 2600 МГц" },
      { label: "Коэффициент усиления", value: "80 дБ" },
      { label: "Выходная мощность", value: "До +23 дБм" },
      { label: "Особенность", value: "Смена частотных планов по GPS" },
    ],
    features: [
      "Допуск для установки в Сапсан",
      "Удалённый мониторинг",
      "Оптимизирован для поездов",
    ],
  },
  {
    id: "hyperion-all-in-one-train-repeater",
    name: "Hyperion All in One Train Repeater",
    category: "Ретрансляторы Hyperion",
    shortDescription: "Решение на базе M-DOTS для покрытия внутри состава.",
    fullDescription:
      "Интегрированная система для поездов: один ретранслятор и одна донорная антенна на весь состав.",
    image: "/railway-infrastructure.jpg",
    price: "По запросу",
    specifications: [
      { label: "Платформа", value: "M-DOTS" },
      { label: "Диапазоны", value: "900 / 1800 / 2100 / 2300 / 2600 МГц" },
      { label: "Коэффициент усиления", value: "80 дБ" },
      { label: "Выходная мощность", value: "До +23 дБм" },
    ],
    features: [
      "Один ретранслятор на весь состав",
      "Удалённый мониторинг",
      "Подходит для высокоскоростного транспорта",
    ],
  },
  {
    id: "oran-4g-5g",
    name: "4G & 5G O-RAN",
    category: "O-RAN решения",
    shortDescription: "Открытая архитектура O-RAN для LTE и 5G.",
    fullDescription:
      "Решение O-RAN с поддержкой TDD, высокой производительности, открытой архитектурой и готовностью к интеграции в современные мобильные сети.",
    image: "/communication-towers.jpg",
    price: "По запросу",
    specifications: [
      { label: "Стандарт", value: "3GPP R15 / R16" },
      { label: "Режим", value: "TDD" },
      { label: "Пиковая скорость", value: "До 1.5 Гбит/с DL" },
      { label: "Архитектура", value: "O-RAN 8x и 7-2x / CPRI" },
      { label: "Мощность", value: "AAU 250 мВт × 4 / mRRU 46 дБм × 4" },
    ],
    features: [
      "Открытая архитектура",
      "Высокая чувствительность",
      "Низкое энергопотребление",
    ],
  },
  {
    id: "multiband-antennas",
    name: "Multiband Antennas",
    category: "Антенны",
    shortDescription: "Многодиапазонные антенны для телеком-объектов.",
    fullDescription:
      "Линейка многодиапазонных антенн для indoor/outdoor решений и телеком-инфраструктуры.",
    image: "/communication-towers.jpg",
    price: "По запросу",
    specifications: [{ label: "Тип", value: "Multiband" }],
    features: ["Поддержка нескольких диапазонов", "Для разных сценариев применения"],
  },
  {
    id: "fdd-tdd-antennas",
    name: "FDD + TDD Antennas",
    category: "Антенны",
    shortDescription: "Антенны для совместной работы FDD и TDD диапазонов.",
    fullDescription: "Линейка антенн для объектов, где требуется поддержка FDD и TDD.",
    image: "/communication-towers.jpg",
    price: "По запросу",
    specifications: [{ label: "Тип", value: "FDD + TDD" }],
    features: ["Подходят для LTE и 5G сценариев"],
  },
  {
    id: "indoor-antennas",
    name: "Indoor Antennas",
    category: "Антенны",
    shortDescription: "Антенны для внутреннего покрытия.",
    fullDescription: "Решения для зданий, офисов, ТЦ, стадионов и транспортных узлов.",
    image: "/telecom-network.jpg",
    price: "По запросу",
    specifications: [{ label: "Применение", value: "Indoor coverage" }],
    features: ["Для распределённых систем покрытия"],
  },
  {
    id: "stadium-antennas",
    name: "Stadium Antennas",
    category: "Антенны",
    shortDescription: "Антенны для стадионов и объектов с высокой плотностью пользователей.",
    fullDescription: "Решения для массовых мероприятий и стадионной инфраструктуры.",
    image: "/telecom-network.jpg",
    price: "По запросу",
    specifications: [{ label: "Применение", value: "Стадионы и массовые мероприятия" }],
    features: ["Для high-density сценариев"],
  },
  {
    id: "multi-beam-antennas",
    name: "Multi-beam Antennas",
    category: "Антенны",
    shortDescription: "Многолучевые антенны для оптимизации покрытия.",
    fullDescription: "Антенны для сложных объектов, дорог, мостов, стадионов и специальных сценариев.",
    image: "/communication-towers.jpg",
    price: "По запросу",
    specifications: [{ label: "Тип", value: "Multi-beam" }],
    features: ["Оптимизация диаграммы направленности", "Подходят для протяжённых объектов"],
  },
  {
    id: "multi-sector-tube-antennas",
    name: "Multi-sector Tube Antennas",
    category: "Антенны",
    shortDescription: "Многосекторные трубчатые антенны.",
    fullDescription: "Линейка антенн для специфических инфраструктурных сценариев.",
    image: "/communication-towers.jpg",
    price: "По запросу",
    specifications: [{ label: "Тип", value: "Multi-sector Tube" }],
    features: ["Компактные решения для многосекторного покрытия"],
  },
  {
    id: "lens-antennas",
    name: "Lens Antennas",
    category: "Антенны",
    shortDescription: "Линзовые антенны для дальнего и селективного покрытия.",
    fullDescription:
      "Линзовые антенны применяются для оптимизации покрытия дорог, мостов, железнодорожных участков и массовых мероприятий.",
    image: "/communication-towers.jpg",
    price: "По запросу",
    specifications: [
      { label: "Применение", value: "Дороги, мосты, ЖД, массовые мероприятия" },
      { label: "Типы", value: "Однолучевые и многолучевые" },
    ],
    features: [
      "Узконаправленный луч",
      "Высокое усиление",
      "Сокращение числа БС в протяжённых сценариях",
    ],
  },
  {
    id: "anritsu-mw82119b",
    name: "Anritsu MW82119B",
    category: "Измерительное оборудование",
    shortDescription: "PIM analyzer с дополнительными функциями анализа.",
    fullDescription: "Профессиональный анализатор PIM для полевых измерений и диагностики АФС.",
    image: "/fiber-optic-cables.jpg",
    price: "По запросу",
    specifications: [
      { label: "Тип", value: "PIM analyzer" },
      { label: "Функции", value: "Distance to PIM / PIM vs. Time / Swept PIM" },
    ],
    features: ["Для эксплуатации и диагностики антенно-фидерных систем"],
  },
  {
    id: "anritsu-s332e",
    name: "Anritsu S332E",
    category: "Измерительное оборудование",
    shortDescription: "Site Master для ВЧ-измерений.",
    fullDescription:
      "Прибор для измерений Return Loss, Cable Loss, VSWR, Distance-To-Fault и спектрального анализа.",
    image: "/fiber-optic-cables.jpg",
    price: "По запросу",
    specifications: [
      { label: "Измерения", value: "Return Loss / Cable Loss / VSWR / DTF" },
      { label: "Дополнительно", value: "2-port transmission / spectrum analyzer" },
    ],
    features: ["Полевые измерения антенно-фидерных трактов"],
  },
  {
    id: "anritsu-mt9090a",
    name: "Anritsu MT9090A",
    category: "Измерительное оборудование",
    shortDescription: "Automated Ethernet Tester / Micro OTDR.",
    fullDescription:
      "Карманный прибор для монтажа и обслуживания оптических сетей, включая функции µOTDR.",
    image: "/fiber-optic-cables.jpg",
    price: "По запросу",
    specifications: [
      { label: "Тип", value: "Automated Ethernet Tester / Micro OTDR" },
      { label: "Применение", value: "Оптические сети" },
    ],
    features: ["Компактный формат", "Для монтажа и обслуживания сетей"],
  },
  {
    id: "rohde-schwarz-tsme6",
    name: "Rohde & Schwarz TSME6",
    category: "Измерительное оборудование",
    shortDescription: "Широкополосный сканер для анализа покрытия.",
    fullDescription:
      "Сканер используется в измерительном комплексе анализа покрытия вместе с TEMS Investigation и TEMS Discovery Professional.",
    image: "/telecom-network.jpg",
    price: "По запросу",
    specifications: [
      { label: "Тип", value: "Широкополосный сканер" },
      { label: "ПО", value: "TEMS Investigation / TEMS Discovery Professional" },
    ],
    features: ["Сбор и постобработка результатов измерений"],
  },
  {
    id: "hansen-cable",
    name: "HANSEN Cable & Accessories",
    category: "Кабель и аксессуары",
    shortDescription: "Кабельная продукция и аксессуары HANSEN.",
    fullDescription: "Линейка кабелей и аксессуаров для телекоммуникационных систем.",
    image: "/fiber-optic-cables.jpg",
    price: "По запросу",
    specifications: [{ label: "Категория", value: "Кабель и аксессуары" }],
    features: ["Для телеком-проектов и инфраструктурных решений"],
  },
]

export const equipmentCategories = [
  "Все",
  "Hyperion / ADAS / M-Dots",
  "Ретрансляторы Hyperion",
  "O-RAN решения",
  "Антенны",
  "Измерительное оборудование",
  "Кабель и аксессуары",
] as const