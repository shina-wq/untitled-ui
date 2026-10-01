import { FilterLines, Grid01, UploadCloud02 } from "@untitledui/icons"
import { Button } from "@/components/ui/button"

export function PageHeader({ title }: { title: string }) {
  return (
    <div className="flex flex-wrap items-center justify-between gap-4">
      <h1 className="text-lg font-semibold text-text-primary">{title}</h1>
      <div className="flex gap-3">
        <Button variant="outline">
          <FilterLines />
          Filters
          <span className="rounded-md border border-border-secondary px-1.5 text-xs font-medium">3</span>
        </Button>
        <Button variant="outline">
          <Grid01 />
          Customize
        </Button>
        <Button variant="outline">
          <UploadCloud02 />
          Export
        </Button>
      </div>
    </div>
  )
}