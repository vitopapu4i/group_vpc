"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { company } from "@/data/company"
import ThemeToggle from "@/components/theme-toggle"

const navLinks = [
  { href: "/", label: "Главная" },
  { href: "/about", label: "О компании" },
  { href: "/services", label: "Услуги" },
  { href: "/projects", label: "Проекты" },
  { href: "/equipment", label: "Оборудование" },
  { href: "/request", label: "Контакты" },
]

export default function HeaderNew() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    setMobileMenuOpen(false)
  }, [pathname])

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }

    return () => {
      document.body.style.overflow = ""
    }
  }, [mobileMenuOpen])

  return (
    <>
      <header className="sticky top-0 z-[80] bg-card/95 backdrop-blur border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 gap-3">
            <Link href="/" className="flex items-center gap-3 min-w-0 relative z-[81]">
              <div className="w-9 h-9 bg-primary rounded flex items-center justify-center shrink-0">
                <span className="text-white font-bold text-sm">VPC</span>
              </div>

              <div className="leading-tight min-w-0">
                <span className="block text-sm sm:text-base font-bold text-foreground truncate">
                  {company.shortName}
                </span>
                <span className="block text-[10px] sm:text-[11px] text-muted-foreground truncate">
                  {company.tagline}
                </span>
              </div>
            </Link>

            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => {
                const isActive =
                  link.href === "/"
                    ? pathname === "/"
                    : pathname === link.href || pathname.startsWith(`${link.href}/`)

                return (
                  <Link
                    key={link.label}
                    href={link.href}
                    className={`text-sm font-medium transition-colors ${
                      isActive
                        ? "text-foreground font-semibold"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {link.label}
                  </Link>
                )
              })}
            </nav>

            <div className="hidden md:flex items-center gap-3 shrink-0">
              <ThemeToggle />

              <Button
                asChild
                className="bg-primary hover:bg-primary/90 text-white rounded-md px-5 py-2 text-sm font-medium"
              >
                <Link href="/request">Оставить заявку</Link>
              </Button>
            </div>

            <div className="md:hidden flex items-center gap-2 shrink-0 relative z-[81]">
              <button
                className="inline-flex items-center justify-center p-2 rounded-md border border-border bg-background"
                onClick={() => setMobileMenuOpen((prev) => !prev)}
                aria-label={mobileMenuOpen ? "Закрыть меню" : "Открыть меню"}
                aria-expanded={mobileMenuOpen}
                type="button"
              >
                {mobileMenuOpen ? (
                  <X className="w-5 h-5 text-foreground" />
                ) : (
                  <Menu className="w-5 h-5 text-foreground" />
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-0 z-[79]">
          <button
            type="button"
            aria-label="Закрыть меню"
            className="absolute inset-0 bg-black/40"
            onClick={() => setMobileMenuOpen(false)}
          />

          <div className="absolute top-16 left-0 right-0 bg-card border-t border-border shadow-2xl">
            <nav className="px-4 py-5 flex flex-col gap-4">
              <div className="flex items-center justify-between gap-4 pb-3 border-b border-border">
                <span className="text-sm text-muted-foreground">Тема</span>
                <ThemeToggle />
              </div>

              {navLinks.map((link) => {
                const isActive =
                  link.href === "/"
                    ? pathname === "/"
                    : pathname === link.href || pathname.startsWith(`${link.href}/`)

                return (
                  <Link
                    key={link.label}
                    href={link.href}
                    className={`text-sm font-medium py-2 ${
                      isActive
                        ? "text-foreground font-semibold"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {link.label}
                  </Link>
                )
              })}

              <Button
                asChild
                className="bg-primary hover:bg-primary/90 text-white rounded-md px-5 py-2 text-sm font-medium w-full mt-2"
              >
                <Link href="/request">Оставить заявку</Link>
              </Button>
            </nav>
          </div>
        </div>
      )}
    </>
  )
}