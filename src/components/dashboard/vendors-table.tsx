import { useState } from "react"
import { ArrowDown, ArrowUp, Edit01, Trash01 } from "@untitledui/icons"
import { TablePagination } from "@/components/pagination"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Progress } from "@/components/ui/progress"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { categoryColors, vendors, type Vendor } from "@/data/vendors"

const dateFormat = new Intl.DateTimeFormat("en-GB", { day: "numeric", month: "short", year: "numeric" })

// Columns hidden on mobile, where only the vendor and rating are shown.
const desktopOnly = "max-lg:hidden"

export function VendorsTable() {
  const [selected, setSelected] = useState(() => new Set(["ephemeral", "stack3d-lab", "warpspeed", "convergence", "sisyphus"]))
  const allSelected = selected.size === vendors.length

  const toggle = (id: string, checked: boolean) =>
    setSelected((prev) => {
      const next = new Set(prev)
      if (checked) next.add(id)
      else next.delete(id)
      return next
    })

  return (
    // Borders are drawn by an overlay so they take no space, matching Figma's inside strokes:
    // a rounded hairline on desktop, a top border on mobile where the table is full-bleed.
    <div className="relative overflow-hidden bg-bg-primary shadow-xs after:pointer-events-none after:absolute after:inset-0 max-lg:-mx-4 max-lg:after:border-t max-lg:after:border-border-secondary lg:rounded-xl lg:after:rounded-xl lg:after:ring-1 lg:after:ring-border-secondary lg:after:ring-inset">
      <Table className="table-fixed">
        <TableHeader>
          <TableRow>
            <TableHead className="max-lg:pl-4">
              <div className="flex items-center gap-3">
                <Checkbox
                  aria-label="Select all vendors"
                  checked={allSelected}
                  indeterminate={selected.size > 0 && !allSelected}
                  onCheckedChange={(checked) => setSelected(new Set(checked ? vendors.map((v) => v.id) : []))}
                />
                <span className="flex items-center gap-1">
                  <span className="lg:hidden">Company</span>
                  <span className={desktopOnly}>Vendor</span>
                  <ArrowDown aria-hidden className="size-3 text-fg-quaternary" />
                </span>
              </div>
            </TableHead>
            <TableHead className="max-lg:w-31 max-lg:pr-5">Rating</TableHead>
            <TableHead className={`w-[94px] ${desktopOnly}`}>
              <span className="sr-only">Change</span>
            </TableHead>
            <TableHead className={`w-[131px] ${desktopOnly}`}>Last assessed</TableHead>
            <TableHead className={`w-[310px] ${desktopOnly}`}>Categories</TableHead>
            <TableHead className={`w-[90px] ${desktopOnly}`}>
              <span className="sr-only">Actions</span>
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {vendors.map((vendor) => (
            <VendorRow
              key={vendor.id}
              vendor={vendor}
              selected={selected.has(vendor.id)}
              onSelectedChange={(checked) => toggle(vendor.id, checked)}
            />
          ))}
        </TableBody>
      </Table>
      <TablePagination page={1} pageCount={10} className={desktopOnly} />
    </div>
  )
}

type VendorRowProps = {
  vendor: Vendor
  selected: boolean
  onSelectedChange: (checked: boolean) => void
}

function VendorRow({ vendor, selected, onSelectedChange }: VendorRowProps) {
  const { name, domain, logo, rating, change, lastAssessed, active, categories, moreCategories } = vendor

  return (
    <TableRow>
      <TableCell className="max-lg:pl-4">
        <div className="flex items-center gap-3">
          <Checkbox aria-label={`Select ${name}`} checked={selected} onCheckedChange={onSelectedChange} />
          {/* Company logos get a hairline drawn over the image edge. */}
          <span className="relative size-10 shrink-0 rounded-full after:absolute after:inset-0 after:rounded-full after:ring-1 after:ring-border-secondary_alt after:ring-inset">
            <img src={logo} alt="" className="size-full rounded-full object-cover" />
          </span>
          {/* Long domains run into the cell padding, as in the design. */}
          <div>
            <p className="font-medium text-text-primary">{name}</p>
            <p>{domain}</p>
          </div>
        </div>
      </TableCell>
      <TableCell className="max-lg:pr-5">
        <div className="flex items-center gap-3">
          <Progress value={rating} aria-label={`${name} rating`} className="flex-1" />
          <span className="font-medium text-text-secondary">{rating}</span>
        </div>
      </TableCell>
      <TableCell className={desktopOnly}>
        <Badge size="xs" color={change >= 0 ? "green" : "red"}>
          {change >= 0 ? <ArrowUp /> : <ArrowDown />}
          {Math.abs(change)}%
        </Badge>
      </TableCell>
      <TableCell className={desktopOnly}>{dateFormat.format(new Date(lastAssessed))}</TableCell>
      <TableCell className={desktopOnly}>
        <div className="flex gap-2">
          <Badge size="xs" color={active ? "green" : "neutral"} dot>
            {active ? "Active" : "Inactive"}
          </Badge>
          {categories.map((category) => (
            <Badge key={category} size="xs" color={categoryColors[category]}>
              {category}
            </Badge>
          ))}
          {moreCategories ? <Badge size="xs">+{moreCategories}</Badge> : null}
        </div>
      </TableCell>
      <TableCell className={`px-4 ${desktopOnly}`}>
        <div className="flex justify-end gap-0.5">
          <Button variant="tertiary" size="icon-xs" aria-label={`Delete ${name}`}>
            <Trash01 />
          </Button>
          <Button variant="tertiary" size="icon-xs" aria-label={`Edit ${name}`}>
            <Edit01 />
          </Button>
        </div>
      </TableCell>
    </TableRow>
  )
}
