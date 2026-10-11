import { useSyncExternalStore } from "react"

export type Theme = "light" | "dark"

// Keep in sync with the inline script in index.html, which applies the theme before first paint.
const STORAGE_KEY = "theme"
const root = document.documentElement
const systemDark = window.matchMedia("(prefers-color-scheme: dark)")
const listeners = new Set<() => void>()

function applyTheme(theme: Theme) {
  root.classList.toggle("dark", theme === "dark")
  listeners.forEach((listener) => listener())
}

// Follow the OS setting until the user picks a theme explicitly.
systemDark.addEventListener("change", (event) => {
  if (!localStorage.getItem(STORAGE_KEY)) applyTheme(event.matches ? "dark" : "light")
})

function subscribe(listener: () => void) {
  listeners.add(listener)
  return () => listeners.delete(listener)
}

const getTheme = (): Theme => (root.classList.contains("dark") ? "dark" : "light")

export function useTheme() {
  const theme = useSyncExternalStore(subscribe, getTheme)

  const setTheme = (next: Theme) => {
    localStorage.setItem(STORAGE_KEY, next)
    applyTheme(next)
  }

  return { theme, setTheme, toggleTheme: () => setTheme(theme === "dark" ? "light" : "dark") }
}
