import { FilterLines } from "@untitledui/icons"
import { VendorsTable } from "@/components/dashboard/vendors-table"
import { MobilePagination } from "@/components/pagination"
import { SearchInput } from "@/components/search-input"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { useIsMobile } from "@/hooks/use-mobile"

export function VendorMovements() {
  const isMobile = useIsMobile()

  return (
    <section className="flex flex-col gap-6">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
        <div>
          <h2 className="text-md font-semibold text-text-primary">Vendor movements</h2>
          <p className="mt-0.5 text-sm text-text-tertiary">Keep track of vendors and their security ratings.</p>
        </div>
        <div className="flex flex-col gap-3 lg:w-70">
          <SearchInput size={isMobile ? "md" : "sm"} shortcut={isMobile ? null : "⌘K"} />
          {/* Highlighted while filters are applied. */}
          <Button className="bg-bg-secondary lg:hidden">
            <FilterLines data-icon="inline-start" />
            Edit filters
            <Badge variant="modern">3</Badge>
          </Button>
        </div>
      </div>

      <VendorsTable />
      <MobilePagination page={1} pageCount={10} className="lg:hidden" />
    </section>
  )
}
