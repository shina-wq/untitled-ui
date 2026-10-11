import type { ComponentProps } from "react"
import { SearchLg } from "@untitledui/icons"
import { Input } from "@/components/ui/input"
import { cn } from "@/lib/utils"

type SearchInputProps = ComponentProps<typeof Input> & {
  /** Keyboard shortcut hint shown on the right; pass null to hide it. */
  shortcut?: string | null
}

export function SearchInput({ className, shortcut = "⌘K", ...props }: SearchInputProps) {
  return (
    <div className={cn("relative", className)}>
      <SearchLg
        aria-hidden
        className="pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2 text-fg-quaternary"
      />
      <Input placeholder="Search" aria-label="Search" className={cn("pl-9", shortcut && "pr-12")} {...props} />
      {shortcut && (
        <kbd className="pointer-events-none absolute top-1/2 right-2 -translate-y-1/2 rounded-xs px-1 py-px font-sans text-xs font-medium text-text-quaternary ring-1 ring-border-secondary ring-inset">
          {shortcut}
        </kbd>
      )}
    </div>
  )
}
