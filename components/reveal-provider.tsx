"use client"

import { useEffect } from "react"
import { usePathname } from "next/navigation"

export default function RevealProvider() {
  const pathname = usePathname()

  useEffect(() => {
    const items = document.querySelectorAll<HTMLElement>(".reveal")

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible")
            observer.unobserve(entry.target)
          }
        })
      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -40px 0px",
      }
    )

    items.forEach((item) => {
      item.classList.remove("is-visible")
      observer.observe(item)
    })

    const timeout = window.setTimeout(() => {
      document.querySelectorAll<HTMLElement>(".reveal").forEach((item) => {
        const rect = item.getBoundingClientRect()

        if (rect.top < window.innerHeight && rect.bottom > 0) {
          item.classList.add("is-visible")
          observer.unobserve(item)
        }
      })
    }, 80)

    return () => {
      window.clearTimeout(timeout)
      observer.disconnect()
    }
  }, [pathname])

  return null
}