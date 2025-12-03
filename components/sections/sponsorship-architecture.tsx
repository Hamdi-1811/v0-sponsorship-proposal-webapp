import { Card } from "@/components/ui/card"
import { Check, TrendingUp } from "lucide-react"

const tiers = [
  {
    name: "FOUNDING PARTNER",
    recommended: true,
    investment: "EGP 3.5M",
    duration: "3 Years (2026-2028)",
    perYear: "EGP 1.17M",
    scholarships: "30 (10/year)",
    color: "from-amber-500 to-orange-500",
    benefits: [
      'Title Sponsorship: "Premier Ballet Academy - AAIB Performing Arts Program"',
      "Logo on all 5 studio locations, performance programs, website header",
      "30 full scholarships (EGP 30-40K value each)",
      "2 free community performances/year (1,500-2,000 attendees)",
      "15% tuition discount for AAIB employee families",
      "Quarterly KPI reports with sustainability bond alignment",
      "Executive engagement opportunities (Tamer Waheed)",
      "New Cairo branch opening collaboration (Jan 2026)",
    ],
  },
  {
    name: "PREMIERE PARTNER",
    recommended: false,
    investment: "EGP 2.0M",
    duration: "2 Years (2026-2027)",
    perYear: "EGP 1.0M",
    scholarships: "16 (8/year)",
    color: "from-blue-500 to-cyan-500",
    benefits: [
      "Logo on all studio locations and performance programs",
      "16 full scholarships (EGP 30-40K value each)",
      "1 free community performance/year",
      "10% tuition discount for employees",
      "Maadi + New Cairo branch activation only",
      "Semi-annual reports",
      "Annual scholarship ceremony invitation",
    ],
  },
  {
    name: "SUPPORTING PARTNER",
    recommended: false,
    investment: "EGP 750K",
    duration: "1 Year (Pilot 2026)",
    perYear: "EGP 750K",
    scholarships: "5",
    color: "from-slate-500 to-gray-500",
    benefits: [
      "Logo on website and select locations",
      "5 full scholarships (pilot program)",
      "5% tuition discount for employees",
      "Maadi branch activation",
      "Annual impact report",
    ],
  },
]

export default function SponsorshipArchitecture() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold text-foreground mb-2">Sponsorship Architecture</h2>
        <p className="text-muted-foreground">
          Three-tier partnership structure with detailed benefits and investment options
        </p>
      </div>

      {/* Tier Comparison */}
      <div className="space-y-4">
        {tiers.map((tier, idx) => (
          <Card
            key={idx}
            className={`p-6 border-2 transition-all ${
              tier.recommended
                ? `border-yellow-500 bg-gradient-to-br from-yellow-50/50 to-orange-50/50 dark:from-yellow-950/20 dark:to-orange-950/20 ring-2 ring-yellow-400/30`
                : "border-border hover:border-border/80"
            }`}
          >
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3
                  className={`text-lg font-bold ${tier.recommended ? "text-yellow-800 dark:text-yellow-200" : "text-foreground"}`}
                >
                  {tier.name}
                </h3>
                {tier.recommended && (
                  <p className="text-xs font-semibold text-yellow-700 dark:text-yellow-300 mt-1">
                    ⭐ RECOMMENDED OPENING OFFER
                  </p>
                )}
              </div>
              <div className="text-right">
                <p className={`text-3xl font-bold bg-gradient-to-r ${tier.color} bg-clip-text text-transparent`}>
                  {tier.investment}
                </p>
                <p className="text-xs text-muted-foreground mt-1">{tier.duration}</p>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-3 mb-6 pb-6 border-b border-border/50">
              <div>
                <p className="text-xs text-muted-foreground mb-1">Per Year</p>
                <p className="font-bold text-foreground">{tier.perYear}</p>
              </div>
              <div>
                <p className="text-xs text-muted-foreground mb-1">Scholarships</p>
                <p className="font-bold text-foreground">{tier.scholarships}</p>
              </div>
              <div>
                <p className="text-xs text-muted-foreground mb-1">Duration</p>
                <p className="font-bold text-foreground">{tier.duration.split("(")[0].trim()}</p>
              </div>
            </div>

            <div>
              <p className="text-sm font-semibold text-foreground mb-3">Key Benefits</p>
              <ul className="space-y-2">
                {tier.benefits.map((benefit, bidx) => (
                  <li key={bidx} className="flex gap-2 text-sm text-foreground">
                    <Check size={16} className="text-primary flex-shrink-0 mt-0.5" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Card>
        ))}
      </div>

      {/* ROI Breakdown */}
      <Card className="p-6 border-l-4 border-primary">
        <h3 className="text-lg font-bold text-foreground mb-4 flex items-center gap-2">
          <TrendingUp className="text-primary" size={20} />
          Tier 1 Investment Breakdown
        </h3>
        <div className="space-y-3">
          {[
            { item: "Scholarships (10/year × EGP 35K)", amount: "EGP 1,050,000", pct: 30 },
            { item: "Community Performances (2/year)", amount: "EGP 450,000", pct: 13 },
            { item: "Brand Activation & Events", amount: "EGP 600,000", pct: 17 },
            { item: "Employee Program Subsidy", amount: "EGP 300,000", pct: 9 },
            { item: "Impact Reporting & Admin", amount: "EGP 150,000", pct: 4 },
            { item: "PBA Operations Support", amount: "EGP 950,000", pct: 27 },
          ].map((row, idx) => (
            <div key={idx} className="flex items-center justify-between">
              <div className="flex-1">
                <p className="text-sm font-medium text-foreground">{row.item}</p>
                <div className="w-full h-2 bg-muted rounded-full mt-1 overflow-hidden">
                  <div className="h-full bg-primary/70" style={{ width: `${row.pct}%` }} />
                </div>
              </div>
              <div className="text-right ml-4">
                <p className="text-sm font-semibold text-foreground">{row.amount}</p>
                <p className="text-xs text-muted-foreground">{row.pct}%</p>
              </div>
            </div>
          ))}
          <div className="pt-4 border-t border-border font-bold text-foreground flex justify-between">
            <span>Total 3-Year Investment</span>
            <span className="text-lg">EGP 3,500,000</span>
          </div>
        </div>
      </Card>

      {/* Media Value */}
      <Card className="p-6 bg-purple-50/50 dark:bg-purple-950/20 border-purple-200/50 dark:border-purple-900/50">
        <h3 className="text-lg font-bold text-foreground mb-4">Media Value Equivalency</h3>
        <p className="text-sm text-muted-foreground mb-4">
          Estimated return on investment through brand exposure and media coverage
        </p>
        <div className="grid md:grid-cols-2 gap-4">
          {[
            { item: "Logo visibility & signage", value: "EGP 1.5M/year" },
            { item: "Cairo Opera House performance title sponsorship", value: "EGP 400K/year" },
            { item: "Press coverage & joint announcements", value: "EGP 150K/year" },
            { item: "Employee & customer engagement value", value: "EGP 250K/year" },
          ].map((item, idx) => (
            <div key={idx} className="p-3 bg-white/50 dark:bg-black/20 rounded-lg">
              <p className="text-sm text-foreground">{item.item}</p>
              <p className="font-bold text-purple-700 dark:text-purple-300">{item.value}</p>
            </div>
          ))}
        </div>
        <div className="mt-4 p-4 bg-purple-100/50 dark:bg-purple-900/30 rounded-lg border border-purple-200/50 dark:border-purple-900/50">
          <p className="font-bold text-purple-900 dark:text-purple-200">Total 3-Year MVE: EGP 3.9M</p>
          <p className="text-sm text-purple-800 dark:text-purple-300 mt-1">11% premium over cash investment</p>
        </div>
      </Card>
    </div>
  )
}
