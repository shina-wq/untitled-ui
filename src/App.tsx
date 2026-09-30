import { AppSidebar, Logo } from "@/components/layout/app-sidebar"
import { SidebarInset, SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"

export default function App() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="flex h-14 items-center justify-between px-4 md:hidden">
          <Logo />
          <SidebarTrigger />
        </header>
        <main className="p-4 md:p-8">
          <h1 className="text-lg font-semibold text-text-primary">Organization overview</h1>
        </main>
      </SidebarInset>
    </SidebarProvider>
  )
}