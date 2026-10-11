import { AverageRatingCard } from "@/components/dashboard/average-rating-card"
import { VendorBreakdownCard } from "@/components/dashboard/vendor-breakdown-card"
import { AppSidebar } from "@/components/layout/app-sidebar"
import { MobileHeader } from "@/components/layout/mobile-header"
import { PageHeader } from "@/components/layout/page-header"
import { ThemeToggle } from "@/components/theme-toggle"
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar"

export default function App() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset className="min-w-0">
        <MobileHeader />
        <div className="flex flex-col gap-8 px-4 pt-8 pb-12 lg:px-8">
          <PageHeader title="Organization overview" />
          <section className="flex flex-col gap-6 lg:flex-row">
            <VendorBreakdownCard className="lg:w-90 lg:shrink-0" />
            <AverageRatingCard className="min-w-0 lg:flex-1" />
          </section>
        </div>
      </SidebarInset>
      <ThemeToggle className="fixed right-4 bottom-4 z-50" />
    </SidebarProvider>
  )
}
