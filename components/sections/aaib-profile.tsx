import { Card } from "@/components/ui/card"
import { DollarSign, TreePine } from "lucide-react"

export default function AAIBProfile() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold text-foreground mb-2">AAIB Sponsorship Profile</h2>
        <p className="text-muted-foreground">Arab African International Bank - Organizational & Strategic Overview</p>
      </div>

      {/* Company Overview */}
      <Card className="p-6 border-l-4 border-emerald-500">
        <h3 className="text-lg font-bold text-foreground mb-4">Organizational Overview</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          <div>
            <p className="text-sm text-muted-foreground mb-1">Established</p>
            <p className="font-semibold text-foreground">1964</p>
            <p className="text-xs text-muted-foreground">Egypt's first multi-national bank</p>
          </div>
          <div>
            <p className="text-sm text-muted-foreground mb-1">Headquarters</p>
            <p className="font-semibold text-foreground">Cairo, Egypt</p>
            <p className="text-xs text-muted-foreground">44 Abdel Khalek Sarwat Street</p>
          </div>
          <div>
            <p className="text-sm text-muted-foreground mb-1">Branches</p>
            <p className="font-semibold text-foreground">96+ Locations</p>
            <p className="text-xs text-muted-foreground">Egypt, UAE, Lebanon</p>
          </div>
        </div>
      </Card>

      {/* Financial Strength */}
      <Card className="p-6 bg-gradient-to-br from-blue-50/50 to-cyan-50/50 dark:from-blue-950/20 dark:to-cyan-950/20 border-blue-200/50 dark:border-blue-900/50">
        <h3 className="text-lg font-bold text-foreground mb-4 flex items-center gap-2">
          <DollarSign className="text-blue-600 dark:text-blue-400" size={20} />
          Financial Strength (2024)
        </h3>
        <div className="grid grid-cols-2 gap-4">
          {[
            { label: "Total Assets", value: "USD $18.15B" },
            { label: "Net Profit", value: "USD $301M" },
            { label: "Capital Adequacy", value: "21.08%" },
            { label: "Shareholders' Equity", value: "USD $2.6B" },
          ].map((item, idx) => (
            <div key={idx} className="p-3 bg-white/50 dark:bg-black/20 rounded-lg">
              <p className="text-xs text-muted-foreground mb-1">{item.label}</p>
              <p className="font-bold text-foreground">{item.value}</p>
            </div>
          ))}
        </div>
      </Card>

      {/* CSR Framework */}
      <Card className="p-6">
        <h3 className="text-lg font-bold text-foreground mb-4 flex items-center gap-2">
          <TreePine className="text-emerald-600 dark:text-emerald-400" size={20} />
          CSR & Sustainability Framework
        </h3>
        <div className="space-y-4">
          <div>
            <p className="font-semibold text-foreground mb-3">2021-2025 Strategic Pillars</p>
            <div className="grid gap-2">
              {[
                "✓ Stakeholder-Centric Approach",
                "✓ Sustainable Finance Leadership",
                "✓ Operational Excellence",
                "✓ Talent Development",
                "✓ Community Impact",
              ].map((item, idx) => (
                <p key={idx} className="text-sm text-foreground">
                  {item}
                </p>
              ))}
            </div>
          </div>

          <div className="pt-4 border-t border-border">
            <p className="font-semibold text-foreground mb-3">2023-2024 CSR Allocation</p>
            <div className="space-y-2">
              {[
                { cat: "Healthcare", pct: "67%" },
                { cat: "Education (non-arts)", pct: "18%" },
                { cat: "Other", pct: "14%" },
                { cat: "Arts/Culture", pct: "<1%" },
              ].map((item, idx) => (
                <div key={idx} className="flex items-center justify-between">
                  <span className="text-sm text-foreground">{item.cat}</span>
                  <div className="flex items-center gap-3">
                    <div className="w-32 h-2 bg-muted rounded-full overflow-hidden">
                      <div className="h-full bg-primary/70" style={{ width: item.pct === "<1%" ? "2%" : item.pct }} />
                    </div>
                    <span className="text-sm font-semibold text-foreground w-10 text-right">{item.pct}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Card>

      {/* Sustainability Bond */}
      <Card className="p-6 border-l-4 border-purple-500 bg-purple-50/30 dark:bg-purple-950/20">
        <h3 className="text-lg font-bold text-foreground mb-3">Sustainability Bond Framework (November 2024)</h3>
        <div className="space-y-3">
          <div>
            <p className="text-sm text-muted-foreground mb-1">Investment Size</p>
            <p className="text-2xl font-bold text-purple-700 dark:text-purple-300">USD $500 Million</p>
            <p className="text-xs text-muted-foreground">First in Egypt, largest by private African bank</p>
          </div>
          <div className="pt-3 border-t border-border">
            <p className="text-sm font-semibold text-foreground mb-2">Eligible Categories (PBA-Relevant):</p>
            <ul className="space-y-2">
              {[
                "Category 14: Access to Essential Services - Education",
                "Category 16: Employment Generation & Youth Training",
                "Category 19: Women in the Economy",
              ].map((cat, idx) => (
                <li key={idx} className="text-sm text-foreground flex items-start gap-2">
                  <span className="text-purple-600 dark:text-purple-300 font-bold">✓</span>
                  {cat}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Card>

      {/* Key Contacts */}
      <Card className="p-6 bg-muted/50">
        <h3 className="text-lg font-bold text-foreground mb-4">Key Decision-Makers</h3>
        <div className="space-y-4">
          {[
            {
              name: "Tamer Waheed",
              role: "Vice Chairman & Managing Director",
              focus: "Sustainability, Strategic Direction",
            },
            { name: "Board of Directors", role: "Oversight", focus: "Corporate Governance" },
            { name: "Corporate Governance Committee", role: "Board Committee", focus: "CSR Standards, Compliance" },
            { name: "Dalia Akmal", role: "CSR & Sustainability Specialist", focus: "Day-to-day Operations" },
          ].map((person, idx) => (
            <div key={idx} className="p-3 bg-background rounded-lg">
              <p className="font-semibold text-foreground text-sm">{person.name}</p>
              <p className="text-xs text-muted-foreground">{person.role}</p>
              <p className="text-xs text-muted-foreground mt-1">Focus: {person.focus}</p>
            </div>
          ))}
        </div>
      </Card>
    </div>
  )
}
