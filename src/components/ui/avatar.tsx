"use client"

import * as React from "react"
import { Avatar as AvatarPrimitive } from "@base-ui/react/avatar"
import { cn } from "@/lib/utils"

// Untitled UI avatar: outer hairline ring, 1px background gap, then the image.
function Avatar({ className, ...props }: AvatarPrimitive.Root.Props) {
  return (
    <AvatarPrimitive.Root
      data-slot="avatar"
      className={cn(
        "relative flex size-10 shrink-0 rounded-full bg-bg-primary p-px shadow-xs ring-1 ring-border-secondary_alt select-none",
        className
      )}
      {...props}
    />
  )
}

function AvatarImage({ className, ...props }: AvatarPrimitive.Image.Props) {
  return (
    <AvatarPrimitive.Image
      data-slot="avatar-image"
      className={cn("aspect-square size-full rounded-full object-cover", className)}
      {...props}
    />
  )
}

function AvatarFallback({ className, ...props }: AvatarPrimitive.Fallback.Props) {
  return (
    <AvatarPrimitive.Fallback
      data-slot="avatar-fallback"
      className={cn(
        "flex size-full items-center justify-center rounded-full bg-bg-tertiary text-md font-semibold text-text-quaternary",
        className
      )}
      {...props}
    />
  )
}

/** Online status dot, flush with the avatar's bottom-right corner. */
function AvatarStatus({ className, ...props }: React.ComponentProps<"span">) {
  return (
    <span
      data-slot="avatar-status"
      className={cn(
        "absolute right-0 bottom-0 size-2.5 rounded-full border-[1.5px] border-bg-primary bg-fg-success-secondary",
        className
      )}
      {...props}
    />
  )
}

export { Avatar, AvatarImage, AvatarFallback, AvatarStatus }
