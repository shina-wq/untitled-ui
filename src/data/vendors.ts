import type { BadgeColor } from "@/components/ui/badge"
import cloudwatch from "@/assets/vendors/cloudwatch.png"
import contrastAi from "@/assets/vendors/contrast-ai.png"
import convergence from "@/assets/vendors/convergence.png"
import ephemeral from "@/assets/vendors/ephemeral.png"
import sisyphus from "@/assets/vendors/sisyphus.png"
import stack3dLab from "@/assets/vendors/stack3d-lab.png"
import warpspeed from "@/assets/vendors/warpspeed.png"

export type Category = keyof typeof categoryColors

export const categoryColors = {
  "Customer data": "blue",
  "Business data": "brand",
  "Database access": "slate",
  Admin: "indigo",
  Financials: "pink",
  Salesforce: "orange",
} satisfies Record<string, BadgeColor>

export type Vendor = {
  id: string
  name: string
  domain: string
  logo: string
  /** Security rating, 0-100. */
  rating: number
  /** Rating change since the last assessment, in percent. */
  change: number
  lastAssessed: string
  active: boolean
  categories: Category[]
  /** Categories not shown, rendered as "+N". */
  moreCategories?: number
}

export const vendors: Vendor[] = [
  { id: "ephemeral", name: "Ephemeral", domain: "ephemeral.io", logo: ephemeral, rating: 60, change: 5, lastAssessed: "2027-01-22", active: true, categories: ["Customer data", "Admin"], moreCategories: 4 },
  { id: "stack3d-lab", name: "Stack3d Lab", domain: "stack3dlab.com", logo: stack3dLab, rating: 72, change: -4, lastAssessed: "2027-01-20", active: true, categories: ["Business data", "Admin"], moreCategories: 4 },
  { id: "warpspeed", name: "Warpspeed", domain: "getwarpspeed.com", logo: warpspeed, rating: 78, change: 6, lastAssessed: "2027-01-24", active: true, categories: ["Customer data", "Financials"] },
  { id: "cloudwatch", name: "CloudWatch", domain: "cloudwatch.app", logo: cloudwatch, rating: 38, change: 8, lastAssessed: "2027-01-26", active: true, categories: ["Database access", "Admin"] },
  { id: "contrast-ai", name: "ContrastAI", domain: "contrastai.com", logo: contrastAi, rating: 42, change: -1, lastAssessed: "2027-01-18", active: true, categories: ["Salesforce", "Admin"], moreCategories: 4 },
  { id: "convergence", name: "Convergence", domain: "convergence.io", logo: convergence, rating: 66, change: -6, lastAssessed: "2027-01-28", active: true, categories: ["Business data", "Admin"], moreCategories: 4 },
  { id: "sisyphus", name: "Sisyphus", domain: "sisyphus.com", logo: sisyphus, rating: 91, change: 2, lastAssessed: "2027-01-16", active: false, categories: ["Customer data", "Financials"] },
]
