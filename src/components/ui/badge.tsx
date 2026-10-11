import * as React from "react"
import { cn } from "@/lib/utils"

type BadgeColor = keyof typeof pillColors

const pillColors = {
  neutral: "bg-utility-neutral-50 text-utility-neutral-700 ring-utility-neutral-200",
  brand: "bg-utility-brand-50 text-utility-brand-700 ring-utility-brand-200",
  green: "bg-utility-green-50 text-utility-green-700 ring-utility-green-200",
  red: "bg-utility-red-50 text-utility-red-700 ring-utility-red-200",
  blue: "bg-utility-blue-50 text-utility-blue-700 ring-utility-blue-200",
  indigo: "bg-utility-indigo-50 text-utility-indigo-700 ring-utility-indigo-200",
  pink: "bg-utility-pink-50 text-utility-pink-700 ring-utility-pink-200",
  orange: "bg-utility-orange-50 text-utility-orange-700 ring-utility-orange-200",
  slate: "bg-utility-slate-50 text-utility-slate-700 ring-utility-slate-200",
}

// Colour of the dot and of leading icons.
const accentColors: Record<BadgeColor, string> = {
  neutral: "[--badge-accent:var(--utility-neutral-500)]",
  brand: "[--badge-accent:var(--utility-brand-500)]",
  green: "[--badge-accent:var(--utility-green-500)]",
  red: "[--badge-accent:var(--utility-red-500)]",
  blue: "[--badge-accent:var(--utility-blue-500)]",
  indigo: "[--badge-accent:var(--utility-indigo-500)]",
  pink: "[--badge-accent:var(--utility-pink-500)]",
  orange: "[--badge-accent:var(--utility-orange-500)]",
  slate: "[--badge-accent:var(--utility-slate-500)]",
}

type BadgeProps = React.ComponentProps<"span"> & {
  /** `pill`: tinted and fully rounded. `modern`: neutral surface where only the dot carries colour. */
  variant?: "pill" | "modern"
  /** `sm`: 8px side padding. `xs`: 6px, used for dense rows such as table cells. */
  size?: "sm" | "xs"
  color?: BadgeColor
  dot?: boolean
}

function Badge({ variant = "pill", size = "sm", color = "neutral", dot, className, children, ...props }: BadgeProps) {
  return (
    <span
      data-slot="badge"
      className={cn(
        "inline-flex w-fit shrink-0 items-center gap-1 py-0.5 text-xs font-medium whitespace-nowrap ring-1 ring-inset [&_svg]:size-3 [&_svg]:shrink-0 [&_svg]:text-(--badge-accent)",
        accentColors[color],
        variant === "pill"
          ? cn("rounded-full has-[>svg:first-child]:pl-1.5", size === "sm" ? "px-2" : "px-1.5", dot && "pl-1.5", pillColors[color])
          : "rounded-sm bg-bg-primary px-1.5 text-text-secondary shadow-xs ring-border-primary",
        className
      )}
      {...props}
    >
      {dot && <span aria-hidden className="m-px size-1.5 rounded-full bg-(--badge-accent)" />}
      {children}
    </span>
  )
}

export { Badge, type BadgeColor }
