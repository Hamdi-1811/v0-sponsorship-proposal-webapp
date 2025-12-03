"use client"

import { useState, useEffect } from "react"
import { Search, X, ChevronRight } from "lucide-react"
import { Input } from "@/components/ui/input"

interface SearchOverlayProps {
  isOpen: boolean
  onClose: () => void
  onSelectSection: (sectionId: string) => void
  sections: Array<{ id: string; title: string; icon: string; category: string }>
}

export default function SearchOverlay({ isOpen, onClose, onSelectSection, sections }: SearchOverlayProps) {
  const [query, setQuery] = useState("")
  const [results, setResults] = useState(sections)

  useEffect(() => {
    const lowerQuery = query.toLowerCase()
    setResults(
      sections.filter(
        (s) => s.title.toLowerCase().includes(lowerQuery) || s.category.toLowerCase().includes(lowerQuery),
      ),
    )
  }, [query, sections])

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }
    return () => {
      document.body.style.overflow = "unset"
    }
  }, [isOpen])

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-24 bg-black/50 backdrop-blur-sm">
      <div className="w-full max-w-2xl mx-4">
        {/* Search Box */}
        <div className="relative mb-4">
          <div className="relative bg-background rounded-lg border border-border shadow-lg">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" size={20} />
            <Input
              autoFocus
              placeholder="Search sections, categories..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="pl-12 pr-12 py-3 text-lg border-0 focus-visible:ring-0 focus-visible:ring-offset-0"
            />
            <button onClick={onClose} className="absolute right-4 top-1/2 -translate-y-1/2 p-1 hover:bg-muted rounded">
              <X size={20} className="text-muted-foreground" />
            </button>
          </div>
        </div>

        {/* Results */}
        <div className="bg-background rounded-lg border border-border shadow-lg overflow-hidden">
          {results.length > 0 ? (
            <div className="divide-y divide-border max-h-96 overflow-y-auto">
              {results.map((section) => (
                <button
                  key={section.id}
                  onClick={() => {
                    onSelectSection(section.id)
                    onClose()
                  }}
                  className="w-full px-6 py-4 hover:bg-muted transition-colors text-left flex items-center justify-between group"
                >
                  <div className="flex items-center gap-4 flex-1">
                    <span className="text-2xl">{section.icon}</span>
                    <div>
                      <h3 className="font-medium text-foreground group-hover:text-primary transition-colors">
                        {section.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">{section.category}</p>
                    </div>
                  </div>
                  <ChevronRight
                    size={20}
                    className="text-muted-foreground group-hover:text-primary transition-colors"
                  />
                </button>
              ))}
            </div>
          ) : (
            <div className="px-6 py-12 text-center">
              <p className="text-muted-foreground">No sections found matching "{query}"</p>
            </div>
          )}
        </div>

        <p className="text-xs text-muted-foreground text-center mt-4">Press ESC to close</p>
      </div>
    </div>
  )
}
