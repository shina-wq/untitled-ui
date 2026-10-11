import { DotsVertical } from "@untitledui/icons"
import { Pie, PieChart } from "recharts"
import { Button } from "@/components/ui/button"
import { Card, CardAction, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { vendorBreakdown } from "@/data/vendor-breakdown"

const assessed = vendorBreakdown.reduce((sum, band) => sum + band.share, 0)

// Bands plus a neutral remainder for vendors that haven't been rated yet.
const slices = [
  ...vendorBreakdown.map(({ range, share, color }) => ({ name: range, value: share, fill: color })),
  { name: "Not rated", value: 100 - assessed, fill: "var(--utility-neutral-200)" },
]

export function VendorBreakdownCard({ className }: { className?: string }) {
  return (
    <Card className={className}>
      <CardHeader>
        <CardTitle>Vendor breakdown</CardTitle>
        <CardAction>
          <Button variant="tertiary" size="icon-sm" aria-label="More options" className="-m-2">
            <DotsVertical />
          </Button>
        </CardAction>
      </CardHeader>

      <CardContent className="flex items-start gap-4">
        <PieChart width={200} height={200} className="shrink-0">
          <Pie
            data={slices}
            dataKey="value"
            innerRadius={50}
            outerRadius={100}
            startAngle={90}
            endAngle={-270}
            stroke="none"
            isAnimationActive={false}
          />
        </PieChart>

        <ul className="flex flex-col gap-1">
          {vendorBreakdown.map(({ range, color }) => (
            <li key={range} className="flex items-center gap-2 text-sm text-text-tertiary">
              <span aria-hidden className="size-2 rounded-full" style={{ backgroundColor: color }} />
              {range}
            </li>
          ))}
        </ul>
      </CardContent>

      <CardFooter className="mt-auto justify-end">
        <Button>View full report</Button>
      </CardFooter>
    </Card>
  )
}
