import { Card } from "@/components/ui/card"
import { Zap, TrendingUp, Lightbulb, MapPin, Award } from "lucide-react"

const insights = [
  {
    icon: Zap,
    title: "Perfect Timing Convergence (CRITICAL)",
    points: [
      "PBA New Cairo Branch Opening: January 2026 at FamBam Mall",
      "AAIB Q1 2026 Budget Planning: Currently in process",
      "The Nutcracker Performance: December 26-30, 2025 at Cairo Opera House",
      '$500M Sustainability Bond: Issued November 2024 with "Access to Education" funding',
    ],
    action: "Proposal must be submitted before December 15, 2025 to catch budget allocations",
  },
  {
    icon: TrendingUp,
    title: "Massive CSR Gap in Arts & Culture",
    points: [
      "Egyptian banking sector allocated only EGP 22M (0.56%) to arts/culture",
      "Healthcare receives 67% of CSR budget, Education (non-arts) 18%",
      "Arts & Culture: <1% - MASSIVE OPPORTUNITY",
      "CIB, Banque Misr focus on film festivals; ballet is untapped",
    ],
    action: "AAIB can differentiate from competitors by owning performing arts education niche",
  },
  {
    icon: Lightbulb,
    title: "Sustainability Bond Alignment",
    points: [
      'AAIB\'s $500M Sustainability Bond includes Category 14: "Access to Education"',
      "PBA qualifies for Sustainability Bond-eligible social project classification",
      "Youth empowerment & women in economy (70%+ female students)",
      "Aligns with SDG 4 (Quality Education) and SDG 5 (Gender Equality)",
    ],
    action: "Position as Sustainability Bond-eligible project to unlock dedicated funding",
  },
  {
    icon: MapPin,
    title: "Affluent Maadi-New Cairo Overlap",
    points: [
      "AAIB has 4+ branches in Maadi, branches in New Cairo",
      "PBA Maadi: Road 6, Sarayat El Maadi (premium location)",
      "PBA New Cairo: FamBam Mall (opening Jan 2026)",
      "Student families: International school demographic (EGP 100-400K tuition/year)",
    ],
    action: "Perfect for AAIB branch activation campaigns and customer acquisition",
  },
  {
    icon: Award,
    title: "World-Class Credentials Counter Risk",
    points: [
      "Ahmed Yehia: Deputy Manager Cairo Opera Ballet Company, Principal Dancer (2000-present)",
      "Anja Ahcin: Principal Dancer Cairo Opera Ballet Company (2008-present)",
      "International recognition with competition wins across Europe",
      "Cairo Opera House partnership eliminates quality concerns",
    ],
    action: 'Credentials eliminate "quality risk" objection common with newer organizations',
  },
]

export default function TopFiveInsights() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold text-foreground mb-2">Top 5 Strategic Insights</h2>
        <p className="text-muted-foreground">Key catalysts, opportunities, and competitive advantages</p>
      </div>

      <div className="space-y-4">
        {insights.map((insight, idx) => {
          const Icon = insight.icon
          return (
            <Card key={idx} className="p-6 hover:shadow-lg transition-shadow border-l-4 border-primary/50">
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Icon className="text-primary" size={24} />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-foreground mb-3">{insight.title}</h3>
                  <ul className="space-y-2 mb-4">
                    {insight.points.map((point, pidx) => (
                      <li key={pidx} className="flex gap-2 text-sm">
                        <span className="text-primary font-bold">•</span>
                        <span className="text-foreground">{point}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="p-3 bg-primary/5 rounded-lg border border-primary/20">
                    <p className="text-sm font-medium text-primary">{insight.action}</p>
                  </div>
                </div>
              </div>
            </Card>
          )
        })}
      </div>
    </div>
  )
}
