"use client"

import { ChevronRight, X } from "lucide-react"

const sectionDetails = {
  "executive-summary": {
    title: "Executive Summary",
    description: "Critical findings and strategic recommendations",
    icon: "📊",
  },
  "top-5-insights": {
    title: "Top 5 Strategic Insights",
    description: "Key catalysts and opportunities",
    icon: "💡",
  },
  "aaib-profile": {
    title: "AAIB Sponsorship Profile",
    description: "Partner organization analysis",
    icon: "🏦",
  },
  "pba-assessment": {
    title: "PBA Opportunity Assessment",
    description: "Market position and growth",
    icon: "🩰",
  },
  "sponsorship-architecture": {
    title: "Sponsorship Architecture",
    description: "Partnership structure and tiers",
    icon: "🎯",
  },
  "implementation-playbook": {
    title: "Implementation Playbook",
    description: "Execution roadmap",
    icon: "📋",
  },
  "negotiation-playbook": {
    title: "Negotiation Playbook",
    description: "Objection handling",
    icon: "💼",
  },
}

interface NavigationProps {
  sections: Array<{ id: string; title: string; icon: string; category: string }>
  activeSection: string
  onSelectSection: (id: string) => void
  isOpen: boolean
  onClose: () => void
  filteredCount: number
}

export default function Navigation({
  sections,
  activeSection,
  onSelectSection,
  isOpen,
  onClose,
  filteredCount,
}: NavigationProps) {
  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && <div className="fixed inset-0 z-30 bg-black/20 md:hidden" onClick={onClose} />}

      {/* Navigation Sidebar */}
      <div
        className={`fixed md:relative top-16 left-0 bottom-0 md:top-0 z-40 w-72 md:w-auto md:col-span-1 bg-background border-r border-border/40 overflow-y-auto transition-transform duration-300 md:translate-x-0 ${
          isOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
        }`}
      >
        <div className="p-4 space-y-2">
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-semibold text-sm text-muted-foreground">Sections</h2>
            <button onClick={onClose} className="md:hidden p-1 hover:bg-muted rounded">
              <X size={16} />
            </button>
          </div>

          {sections.map((section) => {
            const detail = sectionDetails[section.id as keyof typeof sectionDetails]
            const isActive = activeSection === section.id

            return (
              <button
                key={section.id}
                onClick={() => onSelectSection(section.id)}
                className={`w-full text-left px-3 py-3 rounded-lg transition-all group ${
                  isActive ? "bg-primary/10 border border-primary/30" : "hover:bg-muted border border-transparent"
                }`}
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-lg">{section.icon}</span>
                      <h3 className={`text-sm font-medium truncate ${isActive ? "text-primary" : "text-foreground"}`}>
                        {section.title}
                      </h3>
                    </div>
                    <p className="text-xs text-muted-foreground">{section.category}</p>
                  </div>
                  {isActive && <ChevronRight size={16} className="text-primary mt-1 flex-shrink-0" />}
                </div>
              </button>
            )
          })}
        </div>
      </div>
    </>
  )
}
