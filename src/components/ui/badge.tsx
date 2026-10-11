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

const dotColors: Record<BadgeColor, string> = {
  neutral: "bg-utility-neutral-500",
  brand: "bg-utility-brand-500",
  green: "bg-utility-green-500",
  red: "bg-utility-red-500",
  blue: "bg-utility-blue-500",
  indigo: "bg-utility-indigo-500",
  pink: "bg-utility-pink-500",
  orange: "bg-utility-orange-500",
  slate: "bg-utility-slate-500",
}

type BadgeProps = React.ComponentProps<"span"> & {
  /** `pill`: tinted and fully rounded. `modern`: neutral surface where only the dot carries colour. */
  variant?: "pill" | "modern"
  color?: BadgeColor
  dot?: boolean
}

function Badge({ variant = "pill", color = "neutral", dot, className, children, ...props }: BadgeProps) {
  return (
    <span
      data-slot="badge"
      className={cn(
        "inline-flex w-fit shrink-0 items-center gap-1 py-0.5 text-xs font-medium whitespace-nowrap ring-1 ring-inset [&_svg]:size-3 [&_svg]:shrink-0",
        variant === "pill"
          ? cn("rounded-full px-2", pillColors[color], dot && "pl-1.5")
          : "rounded-sm bg-bg-primary px-1.5 text-text-secondary shadow-xs ring-border-primary",
        className
      )}
      {...props}
    >
      {dot && <span aria-hidden className={cn("m-px size-1.5 rounded-full", dotColors[color])} />}
      {children}
    </span>
  )
}

export { Badge, type BadgeColor }
