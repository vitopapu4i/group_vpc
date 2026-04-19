"use client"

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react"

type ThemeMode = "light" | "dark"
type ThemeContextType = {
  theme: ThemeMode
  setTheme: (theme: ThemeMode) => void
}

const ThemeContext = createContext<ThemeContextType | null>(null)

function getSystemTheme(): ThemeMode {
  if (typeof window === "undefined") return "light"

  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light"
}

function applyTheme(theme: ThemeMode) {
  const root = document.documentElement
  root.classList.remove("light", "dark")
  root.classList.add(theme)
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setThemeState] = useState<ThemeMode>("light")

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") as ThemeMode | null
    const initialTheme = savedTheme ?? getSystemTheme()

    setThemeState(initialTheme)
    applyTheme(initialTheme)
  }, [])

  const setTheme = (nextTheme: ThemeMode) => {
    setThemeState(nextTheme)
    localStorage.setItem("theme", nextTheme)
    applyTheme(nextTheme)
  }

  const value = useMemo(
    () => ({
      theme,
      setTheme,
    }),
    [theme]
  )

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}

export function useTheme() {
  const context = useContext(ThemeContext)

  if (!context) {
    throw new Error("useTheme must be used within ThemeProvider")
  }

  return context
}