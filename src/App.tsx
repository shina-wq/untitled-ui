import { AppSidebar } from "@/components/layout/app-sidebar"
import { PageHeader } from "@/components/layout/page-header"
import { Logo } from "@/components/logo"
import { ThemeToggle } from "@/components/theme-toggle"
import { SidebarInset, SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"

export default function App() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="flex h-14 items-center justify-between px-4 md:hidden">
          <Logo className="h-6 w-auto text-text-primary" />
          <SidebarTrigger />
        </header>
        <main className="p-4 md:p-8">
          <PageHeader title="Organization overview" />
        </main>
      </SidebarInset>
      <ThemeToggle className="fixed right-4 bottom-4 z-50" />
    </SidebarProvider>
  )
}