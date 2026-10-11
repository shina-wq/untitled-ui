import { Button as ButtonPrimitive } from "@base-ui/react/button"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

// Untitled UI buttons. Text edges get 2px more padding than icon edges, so mark icons
// with data-icon="inline-start" | "inline-end" (shadcn convention) to get the icon-edge padding.
const buttonVariants = cva(
  "inline-flex shrink-0 items-center justify-center gap-1.5 rounded-md text-sm font-semibold whitespace-nowrap transition-colors outline-none select-none focus-visible:focus-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-5",
  {
    variants: {
      variant: {
        secondary:
          "bg-bg-primary text-text-secondary shadow-xs-skeuomorphic ring-1 ring-border-primary ring-inset hover:bg-bg-primary_hover hover:text-text-secondary_hover aria-expanded:bg-bg-primary_hover [&_svg]:text-fg-quaternary hover:[&_svg]:text-fg-quaternary_hover",
        tertiary:
          "text-text-tertiary hover:bg-bg-primary_hover hover:text-text-tertiary_hover [&_svg]:text-fg-quaternary hover:[&_svg]:text-fg-quaternary_hover",
      },
      size: {
        sm: "h-9 px-3.5 has-data-[icon=inline-start]:pl-3 has-data-[icon=inline-end]:pr-3",
        md: "h-10 px-4 has-data-[icon=inline-start]:pl-3.5 has-data-[icon=inline-end]:pr-3.5",
        "icon-xs": "size-7 rounded-sm [&_svg:not([class*='size-'])]:size-4",
        "icon-sm": "size-9",
        "icon-md": "size-10",
      },
    },
    defaultVariants: {
      variant: "secondary",
      size: "sm",
    },
  }
)

function Button({
  className,
  variant,
  size,
  ...props
}: ButtonPrimitive.Props & VariantProps<typeof buttonVariants>) {
  return (
    <ButtonPrimitive
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
