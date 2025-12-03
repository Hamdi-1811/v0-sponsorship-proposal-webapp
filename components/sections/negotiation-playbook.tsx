import { Card } from "@/components/ui/card"
import { AlertCircle, Zap, Target, TrendingUp } from "lucide-react"

const objections = [
  {
    icon: AlertCircle,
    objection: '"EGP 3.5M is too high"',
    response:
      "EGP 1.17M/year = 0.1% of AAIB's 2023 CSR budget (EGP 1.1B). Media value equivalency: EGP 3.9M (11% ROI). Offer Tier 2 compromise: EGP 2M/2-year.",
  },
  {
    icon: Target,
    objection: '"Arts is not a CSR priority"',
    response:
      "Frame as education access under Sustainability Bond Category 14. Emphasizes youth empowerment, gender equality (SDG 4, 5, 10). Differentiates from competitors (CIB, Banque Misr) who focus on film.",
  },
  {
    icon: TrendingUp,
    objection: '"Reach is too small"',
    response:
      "30 scholarship students + 50+ employee families = 80+ direct beneficiaries. 6,000+ community performance attendees. 5M+ media impressions. 100+ new AAIB accounts (lifetime customer value).",
  },
  {
    icon: Zap,
    objection: '"Measurement too vague"',
    response:
      "Present rigorous KPI framework with quarterly reporting. Offer independent Year 3 evaluation. Propose performance guarantee: refund if scholarship KPIs not met in Year 1.",
  },
]

const concessions = [
  { can: "✓ Budget tier flexibility", cannot: "✗ Reduce scholarship quality below full coverage" },
  { can: "✓ Start with 1-year pilot", cannot: "✗ Remove Cairo Opera House partnership branding" },
  { can: "✓ Flexible payment terms (quarterly or annual)", cannot: "✗ Eliminate founder engagement with AAIB" },
  {
    can: "✓ Limit branding to select locations (Maadi + New Cairo)",
    cannot: "✗ Reduce quarterly reporting commitment",
  },
]

export default function NegotiationPlaybook() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold text-foreground mb-2">Negotiation Playbook</h2>
        <p className="text-muted-foreground">Objection handling, concession strategies, and closing techniques</p>
      </div>

      {/* Objection Handling */}
      <div>
        <h3 className="text-lg font-bold text-foreground mb-4">Anticipated Objections & Evidence-Based Responses</h3>
        <div className="space-y-4">
          {objections.map((obj, idx) => {
            const Icon = obj.icon
            return (
              <Card key={idx} className="p-6 border-l-4 border-orange-500">
                <div className="flex gap-4">
                  <Icon className="text-orange-600 dark:text-orange-400 flex-shrink-0 mt-1" size={24} />
                  <div className="flex-1">
                    <h4 className="font-bold text-foreground mb-2">{obj.objection}</h4>
                    <div className="p-4 bg-emerald-50/50 dark:bg-emerald-950/20 rounded-lg border border-emerald-200/50 dark:border-emerald-900/50">
                      <p className="text-sm text-foreground">
                        <span className="font-semibold text-emerald-700 dark:text-emerald-300">Response: </span>
                        {obj.response}
                      </p>
                    </div>
                  </div>
                </div>
              </Card>
            )
          })}
        </div>
      </div>

      {/* Concession Matrix */}
      <Card className="p-6 border-l-4 border-primary">
        <h3 className="text-lg font-bold text-foreground mb-4">Concession Matrix: What to Give & Hold</h3>
        <div className="space-y-3">
          {concessions.map((item, idx) => (
            <div key={idx} className="grid md:grid-cols-2 gap-4 p-4 bg-muted/50 rounded-lg">
              <div className="text-emerald-700 dark:text-emerald-300 text-sm">{item.can}</div>
              <div className="text-red-700 dark:text-red-300 text-sm">{item.cannot}</div>
            </div>
          ))}
        </div>
      </Card>

      {/* Closing Techniques */}
      <div className="space-y-4">
        <h3 className="text-lg font-bold text-foreground">Closing Techniques</h3>

        {[
          {
            technique: "Assumptive Close",
            description: "Assume the sale has already happened, move to implementation details",
            example:
              '"When we announce the partnership in January, would you prefer a press conference at AAIB headquarters or Cairo Opera House?"',
          },
          {
            technique: "Scarcity Close",
            description: "Create urgency via time or alternative pressure",
            example:
              "\"We're finalizing our 2026 sponsor roster by January 15th. AAIB is our first choice, but CIB's CSR team has shown preliminary interest.\"",
          },
          {
            technique: "Summary Close",
            description: 'Recap all agreed points to build momentum toward "yes"',
            example:
              "\"Let me summarize what we've agreed on: You see value in the Sustainability Bond alignment, geographic synergy, and measurable KPI framework. The only remaining question is budget—and we've offered flexibility.\"",
          },
          {
            technique: "Experiential Close",
            description: "Create emotional connection before asking for commitment",
            example:
              '"Before you make a final decision, I\'d love to invite you to The Nutcracker on December 28th. Experience our students firsthand—1,500 people at Cairo Opera House Main Hall."',
          },
        ].map((item, idx) => (
          <Card key={idx} className="p-6">
            <div className="flex items-start gap-3 mb-3">
              <div className="w-8 h-8 rounded-full bg-primary/20 text-primary flex items-center justify-center font-bold text-sm flex-shrink-0">
                {idx + 1}
              </div>
              <h4 className="font-bold text-foreground text-lg">{item.technique}</h4>
            </div>
            <p className="text-sm text-muted-foreground mb-3">{item.description}</p>
            <div className="p-4 bg-primary/5 rounded-lg border border-primary/20">
              <p className="text-sm font-mono text-foreground italic">"{item.example}"</p>
            </div>
          </Card>
        ))}
      </div>

      {/* Timeline & Probability */}
      <Card className="p-6 bg-gradient-to-br from-purple-50/50 to-pink-50/50 dark:from-purple-950/20 dark:to-pink-950/20 border-purple-200/50 dark:border-purple-900/50">
        <h3 className="text-lg font-bold text-foreground mb-4">Expected Timeline & Success Probability</h3>
        <div className="space-y-3 mb-4">
          {[
            {
              phase: "Dec 15-31: Internal Review",
              time: "CSR Dept → Sustainable Assets Committee → Corporate Governance",
            },
            { phase: "Jan 1-10: Follow-Up Meeting", time: "Address questions, provide additional materials" },
            { phase: "Jan 11-20: Negotiation", time: "Term finalization, budget discussion" },
            { phase: "Jan 21-31: Contract Drafting", time: "Legal review, finalization" },
            { phase: "Feb 1-7: Contract Signing", time: "Press conference, public announcement" },
          ].map((item, idx) => (
            <div key={idx} className="flex items-start gap-3 p-3 bg-white/50 dark:bg-black/20 rounded">
              <div className="font-bold text-purple-600 dark:text-purple-400 text-sm min-w-24">{item.phase}</div>
              <p className="text-sm text-foreground">{item.time}</p>
            </div>
          ))}
        </div>
        <div className="grid md:grid-cols-3 gap-4 pt-4 border-t border-border">
          {[
            { tier: "Tier 1 (EGP 3.5M/3-yr)", prob: "40%" },
            { tier: "Tier 2 (EGP 2M/2-yr)", prob: "60%" },
            { tier: "Overall Success", prob: "70-75%" },
          ].map((item, idx) => (
            <div key={idx} className="p-3 bg-white/50 dark:bg-black/20 rounded-lg text-center">
              <p className="text-sm text-muted-foreground mb-1">{item.tier}</p>
              <p className="font-bold text-lg text-purple-700 dark:text-purple-300">{item.prob}</p>
            </div>
          ))}
        </div>
      </Card>

      {/* BATNA */}
      <Card className="p-6">
        <h3 className="text-lg font-bold text-foreground mb-4">BATNA: Alternative Sponsors If AAIB Declines</h3>
        <div className="space-y-3">
          {[
            {
              bank: "Commercial International Bank (CIB)",
              angle: "Expand your arts portfolio from film/visual arts to performing arts",
            },
            { bank: "Banque Misr", angle: "Complement your film festival sponsorship with performing arts education" },
            { bank: "National Bank of Egypt", angle: "Ballet = living heritage, cultural diplomacy angle" },
            {
              bank: "Alternative: Non-Bank Corporates",
              angle: "Telecom (Vodafone, Orange), Real Estate, Luxury Brands",
            },
          ].map((item, idx) => (
            <div key={idx} className="p-3 bg-muted/50 rounded-lg border border-border/50">
              <p className="font-semibold text-foreground text-sm">{item.bank}</p>
              <p className="text-xs text-muted-foreground mt-1">{item.angle}</p>
            </div>
          ))}
        </div>
      </Card>
    </div>
  )
}
