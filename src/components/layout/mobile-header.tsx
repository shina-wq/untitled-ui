import { Logo } from "@/components/logo"
import { SidebarTrigger } from "@/components/ui/sidebar"

/** Top bar shown below lg, where the sidebar becomes a sheet. */
export function MobileHeader() {
  return (
    <header className="flex h-14 items-center justify-between border-b border-border-secondary pr-3.5 pl-4 lg:hidden">
      <Logo className="h-6 w-auto text-text-primary" />
      <SidebarTrigger className="[&_svg]:text-fg-secondary" />
    </header>
  )
}
