import { AppSidebar } from "@/components/layout/app-sidebar"
import { SidebarInset, SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { Logo } from "@/components/logo"
import { PageHeader } from "./components/layout/page-header"

export default function App() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="flex h-14 items-center justify-between px-4 md:hidden">
            <Logo className="h-8 w-auto text-text-primary" />
          <SidebarTrigger />
        </header>
        <main className="p-4 md:p-8">
          <PageHeader title="Organization Overview" />
        </main>
      </SidebarInset>
    </SidebarProvider>
  )
}