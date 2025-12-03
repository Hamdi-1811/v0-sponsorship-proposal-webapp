"use client"

import { useState, useMemo } from "react"
import { Search, Menu, X } from "lucide-react"
import { Card } from "@/components/ui/card"
import ProposalContent from "@/components/proposal-content"
import Navigation from "@/components/navigation"
import SearchOverlay from "@/components/search-overlay"

const sections = [
  {
    id: "executive-summary",
    title: "Executive Summary",
    icon: "📊",
    category: "Overview",
  },
  {
    id: "top-5-insights",
    title: "Top 5 Strategic Insights",
    icon: "💡",
    category: "Strategy",
  },
  {
    id: "aaib-profile",
    title: "AAIB Sponsorship Profile",
    icon: "🏦",
    category: "Partner",
  },
  {
    id: "pba-assessment",
    title: "PBA Opportunity Assessment",
    icon: "🩰",
    category: "Proposal",
  },
  {
    id: "sponsorship-architecture",
    title: "Sponsorship Architecture",
    icon: "🎯",
    category: "Terms",
  },
  {
    id: "implementation-playbook",
    title: "Implementation Playbook",
    icon: "📋",
    category: "Execution",
  },
  {
    id: "negotiation-playbook",
    title: "Negotiation Playbook",
    icon: "💼",
    category: "Tactics",
  },
]

const metrics = [
  { label: "Strategic Alignment", value: "9.2/10", color: "from-emerald-500 to-teal-500" },
  { label: "Sponsorship Ask", value: "EGP 2.5-3.5M", color: "from-blue-500 to-cyan-500" },
  { label: "Scholarship Reach", value: "30 Students", color: "from-purple-500 to-pink-500" },
  { label: "Success Probability", value: "70-75%", color: "from-orange-500 to-amber-500" },
]

export default function Page() {
  const [activeSection, setActiveSection] = useState("executive-summary")
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")

  const filteredSections = useMemo(() => {
    if (!searchQuery) return sections
    const query = searchQuery.toLowerCase()
    return sections.filter((s) => s.title.toLowerCase().includes(query) || s.category.toLowerCase().includes(query))
  }, [searchQuery])

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-slate-50 dark:to-slate-950">
      {/* Header */}
      <header className="sticky top-0 z-40 border-b border-border/40 bg-background/95 backdrop-blur-sm supports-[backdrop-filter]:bg-background/60">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center gap-3">
              <button
                onClick={() => setSidebarOpen(!sidebarOpen)}
                className="md:hidden p-2 hover:bg-muted rounded-lg transition-colors"
              >
                {sidebarOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
              <div>
                <h1 className="text-xl font-bold text-foreground">Premier Ballet Academy</h1>
                <p className="text-xs text-muted-foreground">AAIB Sponsorship Proposal</p>
              </div>
            </div>
            <button
              onClick={() => setSearchOpen(true)}
              className="ml-auto md:ml-0 p-2 hover:bg-muted rounded-lg transition-colors"
            >
              <Search size={20} className="text-foreground" />
            </button>
          </div>
        </div>
      </header>

      {/* Search Overlay */}
      {searchOpen && (
        <SearchOverlay
          isOpen={searchOpen}
          onClose={() => setSearchOpen(false)}
          onSelectSection={(sectionId) => {
            setActiveSection(sectionId)
            setSearchOpen(false)
            setSidebarOpen(false)
          }}
          sections={sections}
        />
      )}

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        {/* Metrics Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {metrics.map((metric, idx) => (
            <Card key={idx} className="p-4 border-border/50 hover:border-border/80 transition-colors">
              <div className="text-sm text-muted-foreground mb-2">{metric.label}</div>
              <div className={`text-2xl font-bold bg-gradient-to-r ${metric.color} bg-clip-text text-transparent`}>
                {metric.value}
              </div>
            </Card>
          ))}
        </div>

        {/* Main Content Area */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {/* Sidebar Navigation */}
          <Navigation
            sections={sections}
            activeSection={activeSection}
            onSelectSection={(id) => {
              setActiveSection(id)
              setSidebarOpen(false)
            }}
            isOpen={sidebarOpen}
            onClose={() => setSidebarOpen(false)}
            filteredCount={filteredSections.length}
          />

          {/* Main Content */}
          <div className="md:col-span-3">
            <ProposalContent sectionId={activeSection} />
          </div>
        </div>
      </div>
    </div>
  )
}
