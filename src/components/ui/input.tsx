import * as React from "react"
import { Input as InputPrimitive } from "@base-ui/react/input"
import { cn } from "@/lib/utils"

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <InputPrimitive
      type={type}
      data-slot="input"
      className={cn(
        "h-9 w-full min-w-0 rounded-md bg-bg-primary px-3 text-sm text-text-primary shadow-xs ring-1 ring-border-primary transition-shadow outline-none ring-inset placeholder:text-text-placeholder focus-visible:ring-2 focus-visible:ring-border-brand disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:ring-border-error",
        className
      )}
      {...props}
    />
  )
}

export { Input }
