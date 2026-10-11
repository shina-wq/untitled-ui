import { useId } from "react"
import { DotsVertical } from "@untitledui/icons"
import { Area, Bar, CartesianGrid, ComposedChart, Line, ResponsiveContainer, XAxis, YAxis } from "recharts"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { POINTS_PER_MONTH, ratingHistory } from "@/data/rating-history"
import { useIsMobile } from "@/hooks/use-mobile"

const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]

// Each month label sits on the middle data point of that month; mobile shows every other month.
const monthTicks = MONTHS.map((_, month) => month * POINTS_PER_MONTH + POINTS_PER_MONTH / 2)
const mobileMonthTicks = monthTicks.filter((_, month) => month % 2 === 0)

// The design pairs the industry line with chart-3 but its legend dot with chart-2.
const legend = [
  { label: "Your rating", color: "var(--chart-1)" },
  { label: "Industry Average", color: "var(--chart-2)" },
]

const tick = { fill: "var(--utility-neutral-500)", fontSize: 12 }
const axisTitle = { fill: "var(--text-tertiary)", fontSize: 12, fontWeight: 500 }

export function AverageRatingCard({ className }: { className?: string }) {
  const isMobile = useIsMobile()
  const fadeId = useId()

  return (
    <Card className={className}>
      <CardHeader>
        <CardTitle>Average vendor rating</CardTitle>
        <CardDescription>Track how your rating compares to your industry average.</CardDescription>
        <CardAction>
          <Button variant="tertiary" size="icon-sm" aria-label="More options" className="-m-2">
            <DotsVertical />
          </Button>
        </CardAction>
      </CardHeader>

      <CardContent>
        <ul className="flex justify-end gap-3">
          {legend.map(({ label, color }) => (
            <li key={label} className="flex items-center gap-2 text-sm text-text-tertiary">
              <span aria-hidden className="size-2 rounded-full" style={{ backgroundColor: color }} />
              {label}
            </li>
          ))}
        </ul>

        <ResponsiveContainer width="100%" height={isMobile ? 220 : 227}>
          <ComposedChart data={ratingHistory} margin={{ top: 10.5, right: 1, bottom: 0, left: 0 }}>
            <defs>
              <linearGradient id={fadeId} x1="0" y1="0" x2="0" y2="1">
                <stop offset="0" stopColor="var(--utility-neutral-500)" stopOpacity={0.08} />
                <stop offset="1" stopColor="var(--utility-neutral-500)" stopOpacity={0} />
              </linearGradient>
            </defs>

            <CartesianGrid vertical={false} stroke="var(--border-tertiary)" />
            <XAxis
              dataKey="week"
              type="number"
              domain={["dataMin", "dataMax"]}
              ticks={isMobile ? mobileMonthTicks : monthTicks}
              tickFormatter={(week: number) => MONTHS[Math.floor(week / POINTS_PER_MONTH)]}
              axisLine={false}
              tickLine={false}
              tick={tick}
              tickSize={0}
              tickMargin={13}
              height={isMobile ? 25.5 : 52.5}
              label={isMobile ? undefined : { value: "Month", position: "insideBottom", ...axisTitle }}
            />
            <YAxis
              hide={isMobile}
              domain={[0, 100]}
              ticks={[0, 20, 40, 60, 80, 100]}
              axisLine={false}
              tickLine={false}
              tick={tick}
              tickSize={0}
              tickMargin={10}
              width={71}
              label={{ value: "Security rating", angle: -90, position: "insideLeft", offset: 10, textAnchor: "middle", ...axisTitle }}
            />

            {/* Background stripes and fade under "your rating", tucked under the line's halo. */}
            <Bar dataKey="rating" barSize={2} fill="var(--bg-quaternary)" fillOpacity={0.5} isAnimationActive={false} />
            <Area dataKey="rating" type="linear" stroke="none" fill={`url(#${fadeId})`} isAnimationActive={false} />
            <Line dataKey="rating" type="linear" stroke="var(--bg-primary)" strokeWidth={14} dot={false} activeDot={false} isAnimationActive={false} />
            <Line dataKey="rating" type="linear" stroke="var(--chart-1)" strokeWidth={2} dot={false} isAnimationActive={false} />
            <Line dataKey="industry" type="linear" stroke="var(--chart-3)" strokeWidth={2} dot={false} isAnimationActive={false} />
          </ComposedChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  )
}
