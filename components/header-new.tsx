"use client"

import { useState } from "react"
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

  return (
    <header className="sticky top-0 z-50 bg-card/95 backdrop-blur border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 gap-4">
          <Link href="/" className="flex items-center gap-3 shrink-0">
            <div className="w-9 h-9 bg-primary rounded flex items-center justify-center">
              <span className="text-white font-bold text-sm">VPC</span>
            </div>

            <div className="leading-tight">
              <span className="block text-base font-bold text-foreground">
                {company.shortName}
              </span>
              <span className="block text-[11px] text-muted-foreground">
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

          <div className="hidden md:flex items-center gap-3">
            <ThemeToggle />

            <Link href="/request">
              <Button className="bg-primary hover:bg-primary/90 text-white rounded-md px-5 py-2 text-sm font-medium">
                Оставить заявку
              </Button>
            </Link>
          </div>

          <div className="md:hidden flex items-center gap-2">
            <ThemeToggle />

            <button
              className="p-2 rounded-md border border-border bg-background"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
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

      {mobileMenuOpen && (
        <div className="md:hidden bg-card border-t border-border">
          <nav className="flex flex-col px-4 py-4 gap-4">
            {navLinks.map((link) => {
              const isActive =
                link.href === "/"
                  ? pathname === "/"
                  : pathname === link.href || pathname.startsWith(`${link.href}/`)

              return (
                <Link
                  key={link.label}
                  href={link.href}
                  className={`text-sm font-medium ${
                    isActive
                      ? "text-foreground font-semibold"
                      : "text-muted-foreground"
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              )
            })}

            <Link href="/request" onClick={() => setMobileMenuOpen(false)}>
              <Button className="bg-primary hover:bg-primary/90 text-white rounded-md px-5 py-2 text-sm font-medium w-full mt-2">
                Оставить заявку
              </Button>
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}