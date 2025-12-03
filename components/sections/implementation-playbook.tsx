import { Card } from "@/components/ui/card"
import { Calendar, CheckCircle2, Users, Zap } from "lucide-react"

const phases = [
  {
    title: "PHASE 1: LAUNCH (Q1 2026)",
    icon: Zap,
    months: "Jan-Mar 2026",
    milestones: [
      {
        date: "Week 1-2 Jan",
        activity: "Contract signing & press conference",
        impact: '📢 Media announcement "AAIB Becomes First Egyptian Bank to Champion Performing Arts"',
      },
      {
        date: "Week 3-4 Jan",
        activity: "New Cairo branch opening collaboration",
        impact: "🎭 Student performance at AAIB New Cairo grand opening",
      },
      {
        date: "Feb 1-28",
        activity: "Scholarship application launch",
        impact: "📋 Portal activation on AAIB + PBA websites, promotion across 96 branches",
      },
      {
        date: "Mar 1-31",
        activity: "First scholarship selection & announcement",
        impact: "🏆 Public media event at AAIB Maadi branch with Tamer Waheed",
      },
    ],
  },
  {
    title: "PHASE 2: ACTIVATION (Q2-Q4 2026)",
    icon: Users,
    months: "Apr-Dec 2026",
    milestones: [
      {
        date: "Apr-Jun",
        activity: "Branch activation events",
        impact: '🎯 "Banking Meets the Arts" networking events, student mini-performances',
      },
      {
        date: "Jul-Aug",
        activity: "Community performance #1",
        impact: "🎭 Free public showcase at Cairo Opera House, 800-1000 attendees",
      },
      {
        date: "Oct-Dec",
        activity: "The Nutcracker 2026 (title sponsorship)",
        impact: "⭐ AAIB-branded performance, VIP night for board members & high-value customers",
      },
      { date: "Dec 31", activity: "Q4 impact report", impact: "📊 Full-year metrics & Sustainability Bond reporting" },
    ],
  },
  {
    title: "PHASE 3: SUSTAIN & SCALE (2027-2028)",
    icon: CheckCircle2,
    months: "Ongoing",
    milestones: [
      {
        date: "2027",
        activity: "Year 2 scholarships (10 more students)",
        impact: "✓ Total 20 active students, program expansion",
      },
      {
        date: "2027",
        activity: "Geographic expansion",
        impact: "✓ New branch locations get AAIB branding, scaling opportunities",
      },
      {
        date: "2027",
        activity: "Employee volunteer program",
        impact: "✓ AAIB staff engage in costume-making, event ushering",
      },
      {
        date: "2028",
        activity: "Impact evaluation & renewal",
        impact: "✓ Independent assessment, partnership extension negotiations",
      },
    ],
  },
]

export default function ImplementationPlaybook() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold text-foreground mb-2">Implementation Playbook</h2>
        <p className="text-muted-foreground">Detailed execution roadmap with timelines, milestones, and deliverables</p>
      </div>

      {/* Phase Timeline */}
      <div className="space-y-4">
        {phases.map((phase, idx) => {
          const Icon = phase.icon
          return (
            <Card key={idx} className="p-6 border-l-4 border-primary">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-lg font-bold text-foreground">{phase.title}</h3>
                  <p className="text-sm text-muted-foreground mt-1 flex items-center gap-2">
                    <Calendar size={16} />
                    {phase.months}
                  </p>
                </div>
                <Icon className="text-primary/70" size={28} />
              </div>

              <div className="space-y-3">
                {phase.milestones.map((milestone, midx) => (
                  <div key={midx} className="p-4 bg-muted/50 rounded-lg border border-border/50">
                    <div className="flex gap-3 mb-2">
                      <div className="font-semibold text-sm text-primary whitespace-nowrap">{milestone.date}</div>
                      <p className="font-medium text-foreground text-sm">{milestone.activity}</p>
                    </div>
                    <p className="text-xs text-muted-foreground ml-0">{milestone.impact}</p>
                  </div>
                ))}
              </div>
            </Card>
          )
        })}
      </div>

      {/* Communication Plan */}
      <Card className="p-6 bg-blue-50/50 dark:bg-blue-950/20 border-blue-200/50 dark:border-blue-900/50">
        <h3 className="text-lg font-bold text-foreground mb-4">Relationship Management: Communication Cadence</h3>
        <div className="space-y-3">
          {[
            {
              freq: "Monthly",
              task: "Email update with highlights & upcoming events",
              owner: "PBA Program Manager → AAIB CSR",
            },
            {
              freq: "Quarterly",
              task: "Formal report + in-person meeting with KPI review",
              owner: "Joint steering committee",
            },
            {
              freq: "Semi-Annually",
              task: "Executive check-in with strategy review",
              owner: "Tamer Waheed + PBA Founders",
            },
            {
              freq: "Annually",
              task: "Impact report celebration & award ceremony",
              owner: "Public event with media coverage",
            },
          ].map((item, idx) => (
            <div key={idx} className="flex items-start gap-4 p-3 bg-white/50 dark:bg-black/20 rounded-lg">
              <div className="font-bold text-blue-600 dark:text-blue-400 min-w-24">{item.freq}</div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-foreground">{item.task}</p>
                <p className="text-xs text-muted-foreground mt-1">Owned by: {item.owner}</p>
              </div>
            </div>
          ))}
        </div>
      </Card>

      {/* KPI Dashboard */}
      <Card className="p-6">
        <h3 className="text-lg font-bold text-foreground mb-4">KPI Framework & Measurement</h3>
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <h4 className="font-semibold text-foreground text-sm mb-3">Quantitative Metrics</h4>
            <ul className="space-y-2 text-sm">
              {[
                "📊 Scholarships awarded: 30 (target)",
                "👥 Community performance attendance: 6,000+",
                "💼 AAIB employee families enrolled: 50+",
                "📱 Media impressions: 5M+",
                "🏦 New AAIB accounts from referrals: 100+",
              ].map((metric, idx) => (
                <li key={idx} className="text-foreground p-2 bg-muted/50 rounded">
                  {metric}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-foreground text-sm mb-3">Qualitative Metrics</h4>
            <ul className="space-y-2 text-sm">
              {[
                "🎯 Student confidence & skills development",
                "❤️ Family satisfaction & testimonials",
                "🌟 Brand perception improvements",
                "👨‍👩‍👧 Community impact assessments",
                "✅ Employee program participation satisfaction",
              ].map((metric, idx) => (
                <li key={idx} className="text-foreground p-2 bg-muted/50 rounded">
                  {metric}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Card>
    </div>
  )
}
