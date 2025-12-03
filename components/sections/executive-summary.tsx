import { Card } from "@/components/ui/card"
import { TrendingUp, Target, AlertCircle, Award } from "lucide-react"

export default function ExecutiveSummary() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold text-foreground mb-2">Executive Intelligence Brief</h2>
        <p className="text-muted-foreground">Critical findings and recommendations for AAIB sponsorship partnership</p>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="p-6 border-emerald-500/30 bg-emerald-50/50 dark:bg-emerald-950/20">
          <div className="flex items-start justify-between mb-3">
            <h3 className="font-semibold text-foreground">Recommended Investment</h3>
            <TrendingUp className="text-emerald-600 dark:text-emerald-400" size={20} />
          </div>
          <p className="text-2xl font-bold text-emerald-700 dark:text-emerald-300">EGP 2.5-3.5M</p>
          <p className="text-sm text-muted-foreground mt-2">USD $50,000-$70,000 over 3 years</p>
        </Card>

        <Card className="p-6 border-blue-500/30 bg-blue-50/50 dark:bg-blue-950/20">
          <div className="flex items-start justify-between mb-3">
            <h3 className="font-semibold text-foreground">Strategic Alignment</h3>
            <Award className="text-blue-600 dark:text-blue-400" size={20} />
          </div>
          <p className="text-2xl font-bold text-blue-700 dark:text-blue-300">9.2/10</p>
          <p className="text-sm text-muted-foreground mt-2">Exceptional match with AAIB priorities</p>
        </Card>

        <Card className="p-6 border-orange-500/30 bg-orange-50/50 dark:bg-orange-950/20">
          <div className="flex items-start justify-between mb-3">
            <h3 className="font-semibold text-foreground">Success Probability</h3>
            <Target className="text-orange-600 dark:text-orange-400" size={20} />
          </div>
          <p className="text-2xl font-bold text-orange-700 dark:text-orange-300">70-75%</p>
          <p className="text-sm text-muted-foreground mt-2">Strong go/no-go decision</p>
        </Card>
      </div>

      {/* Critical Timing */}
      <Card className="p-6 border-l-4 border-primary">
        <h3 className="text-lg font-semibold text-foreground mb-3 flex items-center gap-2">
          <AlertCircle size={20} className="text-primary" />
          Critical Timing Window
        </h3>
        <div className="space-y-3">
          <div className="flex items-start gap-3">
            <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
            <div>
              <p className="font-medium text-foreground">December 2025 - February 2026</p>
              <p className="text-sm text-muted-foreground">Optimal submission window for Q1 2026 budget allocation</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
            <div>
              <p className="font-medium text-foreground">Before December 15, 2025</p>
              <p className="text-sm text-muted-foreground">Proposal must be submitted to catch budget finalization</p>
            </div>
          </div>
        </div>
      </Card>

      {/* Key Findings */}
      <div className="space-y-3">
        <h3 className="text-lg font-semibold text-foreground">Top Strategic Advantages</h3>
        <div className="grid gap-3">
          {[
            {
              title: "Sustainability Bond Alignment",
              desc: "Direct Category 14 (Education) eligibility under AAIB's $500M framework",
            },
            {
              title: "Massive CSR Gap",
              desc: "Arts/culture receives <1% of banking CSR budget - untapped opportunity",
            },
            {
              title: "Perfect Geographic Overlap",
              desc: "4+ AAIB branches in Maadi + New Cairo align with PBA locations",
            },
            {
              title: "World-Class Credentials",
              desc: "Founders are Principal Dancers at Cairo Opera House - eliminates quality risk",
            },
            {
              title: "Zero Competitor Activity",
              desc: "No major Egyptian bank sponsors ballet - white space for differentiation",
            },
          ].map((item, idx) => (
            <div key={idx} className="flex gap-3 p-3 rounded-lg bg-muted/50 hover:bg-muted transition-colors">
              <div className="w-6 h-6 rounded-full bg-primary/20 text-primary flex items-center justify-center text-sm font-semibold flex-shrink-0">
                {idx + 1}
              </div>
              <div>
                <p className="font-medium text-foreground text-sm">{item.title}</p>
                <p className="text-xs text-muted-foreground">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Primary Decision-Maker */}
      <Card className="p-6 bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20">
        <h3 className="font-semibold text-foreground mb-2">Decision-Maker</h3>
        <p className="text-lg font-bold text-foreground mb-1">Tamer Waheed</p>
        <p className="text-sm text-muted-foreground">
          Vice Chairman & Managing Director, Arab African International Bank
        </p>
      </Card>
    </div>
  )
}
