type PageHeroProps = {
  title: string
  description?: string
}

export default function PageHero({ title, description }: PageHeroProps) {
  return (
    <section className="bg-gradient-to-br from-[#D22630] via-[#C42028] to-[#B81C24] text-white py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl md:text-5xl font-bold mb-4">
          {title}
        </h1>

        {description && (
          <p className="text-white/85 text-base md:text-lg max-w-3xl">
            {description}
          </p>
        )}
      </div>
    </section>
  )
}