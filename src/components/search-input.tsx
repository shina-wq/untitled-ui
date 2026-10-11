import type { ComponentProps } from "react"
import { SearchLg } from "@untitledui/icons"
import { Input } from "@/components/ui/input"
import { cn } from "@/lib/utils"

type SearchInputProps = Omit<ComponentProps<typeof Input>, "size"> & {
  /** `sm`: 36px, 14px text. `md`: 40px, 16px text (used on mobile). */
  size?: "sm" | "md"
  /** Keyboard shortcut hint shown on the right; pass null to hide it. */
  shortcut?: string | null
}

export function SearchInput({ className, size = "sm", shortcut = "⌘K", ...props }: SearchInputProps) {
  const md = size === "md"

  return (
    <div className={cn("relative", className)}>
      <SearchLg
        aria-hidden
        className={cn(
          "pointer-events-none absolute top-1/2 left-3 -translate-y-1/2 text-fg-quaternary",
          md ? "size-5" : "size-4"
        )}
      />
      <Input
        placeholder="Search"
        aria-label="Search"
        className={cn(md ? "h-10 pl-10 text-md" : "pl-9", shortcut && "pr-12")}
        {...props}
      />
      {shortcut && (
        <kbd className="pointer-events-none absolute top-1/2 right-2 -translate-y-1/2 rounded-xs px-1 py-px font-sans text-xs font-medium text-text-quaternary ring-1 ring-border-secondary ring-inset">
          {shortcut}
        </kbd>
      )}
    </div>
  )
}
