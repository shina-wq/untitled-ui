import { Checkbox as CheckboxPrimitive } from "@base-ui/react/checkbox"
import { cn } from "@/lib/utils"

function Checkbox({ className, ...props }: CheckboxPrimitive.Root.Props) {
  return (
    <CheckboxPrimitive.Root
      data-slot="checkbox"
      className={cn(
        "group/checkbox flex size-5 shrink-0 items-center justify-center rounded-sm bg-bg-primary text-fg-white ring-1 ring-border-primary outline-none ring-inset focus-visible:focus-ring data-checked:bg-bg-brand-solid data-checked:ring-bg-brand-solid data-indeterminate:bg-bg-brand-solid data-indeterminate:ring-bg-brand-solid disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      {...props}
    >
      <CheckboxPrimitive.Indicator data-slot="checkbox-indicator">
        <svg viewBox="0 0 14 14" fill="none" aria-hidden className="size-3.5 stroke-current">
          {/* Untitled UI check / minus glyphs */}
          <path
            d="M11.667 3.5 5.25 9.917 2.333 7"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="group-data-indeterminate/checkbox:hidden"
          />
          <path
            d="M2.917 7h8.166"
            strokeWidth="2"
            strokeLinecap="round"
            className="hidden group-data-indeterminate/checkbox:block"
          />
        </svg>
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
  )
}

export { Checkbox }
