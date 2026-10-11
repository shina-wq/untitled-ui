import { Moon01, Sun } from "@untitledui/icons"
import { Button } from "@/components/ui/button"
import { useTheme } from "@/hooks/use-theme"
import { cn } from "@/lib/utils"

export function ThemeToggle({ className }: { className?: string }) {
  const { theme, toggleTheme } = useTheme()
  const isDark = theme === "dark"

  return (
    <Button
      size="icon-md"
      onClick={toggleTheme}
      aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
      className={cn("rounded-full", className)}
    >
      {isDark ? <Sun /> : <Moon01 />}
    </Button>
  )
}
