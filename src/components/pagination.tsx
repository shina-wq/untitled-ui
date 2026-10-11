import {
  ArrowLeft,
  ArrowRight,
  ChevronDown,
  ChevronLeft,
  ChevronLeftDouble,
  ChevronRight,
  ChevronRightDouble,
} from "@untitledui/icons"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { cn } from "@/lib/utils"

type PaginationProps = {
  page: number
  pageCount: number
  className?: string
}

/** First three and last three pages around an ellipsis, or every page when there are 7 or fewer. */
function pageItems(pageCount: number) {
  const all = Array.from({ length: pageCount }, (_, i) => i + 1)
  return pageCount <= 7 ? all : [...all.slice(0, 3), "ellipsis" as const, ...all.slice(-3)]
}

/** Desktop table footer: page jump, rows per page and page buttons. */
export function TablePagination({ page, pageCount, className }: PaginationProps) {
  return (
    <nav
      aria-label="Pagination"
      className={cn("flex items-center justify-between px-6 pt-3 pb-4 text-sm font-medium text-text-secondary", className)}
    >
      <div className="flex items-center">
        <label className="flex items-center gap-2">
          Page
          <Input defaultValue={page} aria-label="Current page" className="w-9 px-0 text-center" />
          of {pageCount}
        </label>
        <span aria-hidden className="mx-4 h-4 w-px bg-border-secondary" />
        <label className="flex items-center gap-2">
          Rows per page
          <span className="relative">
            <select
              defaultValue={10}
              className="h-9 w-16 appearance-none rounded-md bg-bg-primary pl-3.5 text-text-primary shadow-xs ring-1 ring-border-primary outline-none ring-inset focus-visible:ring-2 focus-visible:ring-border-brand"
            >
              {[10, 20, 50].map((n) => (
                <option key={n}>{n}</option>
              ))}
            </select>
            <ChevronDown
              aria-hidden
              className="pointer-events-none absolute top-1/2 right-2.5 size-4 -translate-y-1/2 text-fg-quaternary"
            />
          </span>
        </label>
      </div>

      <div className="flex items-center gap-4">
        <div className="flex gap-2">
          <Button size="icon-sm" aria-label="First page">
            <ChevronLeftDouble />
          </Button>
          <Button size="icon-sm" aria-label="Previous page">
            <ChevronLeft />
          </Button>
        </div>
        <ol className="flex gap-0.5">
          {pageItems(pageCount).map((item, i) => (
            <li key={i}>
              {item === "ellipsis" ? (
                <span className="flex size-9 items-center justify-center text-text-quaternary">…</span>
              ) : (
                <Button
                  variant="tertiary"
                  size="icon-sm"
                  aria-current={item === page ? "page" : undefined}
                  className="font-medium text-text-quaternary aria-[current=page]:bg-bg-secondary aria-[current=page]:text-text-secondary"
                >
                  {item}
                </Button>
              )}
            </li>
          ))}
        </ol>
        <div className="flex gap-2">
          <Button size="icon-sm" aria-label="Next page">
            <ChevronRight />
          </Button>
          <Button size="icon-sm" aria-label="Last page">
            <ChevronRightDouble />
          </Button>
        </div>
      </div>
    </nav>
  )
}

/** Mobile: previous / "Page x of y" / next. */
export function MobilePagination({ page, pageCount, className }: PaginationProps) {
  return (
    <nav
      aria-label="Pagination"
      className={cn(
        "flex items-center justify-between border-t border-border-secondary pt-4 text-sm font-medium text-text-secondary",
        className
      )}
    >
      <Button size="icon-sm" aria-label="Previous page">
        <ArrowLeft />
      </Button>
      Page {page} of {pageCount}
      <Button size="icon-sm" aria-label="Next page">
        <ArrowRight />
      </Button>
    </nav>
  )
}
