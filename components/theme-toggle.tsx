"use client"

import { Moon, Sun } from "lucide-react"
import { useTheme } from "@/components/theme-provider"

const options = [
  { value: "light", label: "Светлая", icon: Sun },
  { value: "dark", label: "Тёмная", icon: Moon },
] as const

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme()

  return (
    <div className="flex items-center rounded-full border border-border bg-card p-1">
      {options.map((option) => {
        const Icon = option.icon
        const active = theme === option.value

        return (
          <button
            key={option.value}
            type="button"
            onClick={() => setTheme(option.value)}
            className={`inline-flex items-center gap-2 rounded-full px-3 py-2 text-xs transition-colors ${
              active
                ? "bg-foreground text-background"
                : "text-muted-foreground hover:text-foreground"
            }`}
            aria-label={option.label}
            title={option.label}
          >
            <Icon className="w-4 h-4" />
            <span className="hidden lg:inline">{option.label}</span>
          </button>
        )
      })}
    </div>
  )
}