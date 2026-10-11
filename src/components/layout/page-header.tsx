import { DownloadCloud02, FilterLines, Settings03 } from "@untitledui/icons"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

export function PageHeader({ title }: { title: string }) {
  return (
    <div className="flex flex-wrap items-start gap-4">
      <h1 className="min-w-80 flex-1 text-xl font-semibold text-text-primary">{title}</h1>
      <div className="flex items-center gap-3">
        {/* Highlighted while filters are applied; the count is desktop-only in the design. */}
        <Button className="bg-bg-primary_hover">
          <FilterLines data-icon="inline-start" />
          Filters
          <Badge variant="modern" className="max-lg:hidden">
            3
          </Badge>
        </Button>
        <Button>
          <Settings03 data-icon="inline-start" />
          Customize
        </Button>
        <Button>
          <DownloadCloud02 data-icon="inline-start" />
          Export
        </Button>
      </div>
    </div>
  )
}
