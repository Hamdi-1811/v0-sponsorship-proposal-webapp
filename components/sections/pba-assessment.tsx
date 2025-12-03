import { Card } from "@/components/ui/card"
import { MapPin, Trophy, TrendingUp } from "lucide-react"

export default function PBAAssessment() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold text-foreground mb-2">PBA Opportunity Assessment</h2>
        <p className="text-muted-foreground">Market position, credentials, and growth trajectory</p>
      </div>

      {/* Organization Profile */}
      <Card className="p-6 border-l-4 border-pink-500">
        <h3 className="text-lg font-bold text-foreground mb-4">Premier Ballet Academy Profile</h3>
        <div className="grid grid-cols-2 gap-4">
          {[
            { label: "Founded", value: "2016" },
            { label: "Locations", value: "4 Active (5th Opening Jan 2026)" },
            { label: "Students", value: "200-500+ (Estimated)" },
            { label: "Expansion Rate", value: "5 locations in 8 years" },
          ].map((item, idx) => (
            <div key={idx} className="p-3 bg-muted/50 rounded-lg">
              <p className="text-xs text-muted-foreground mb-1">{item.label}</p>
              <p className="font-semibold text-foreground">{item.value}</p>
            </div>
          ))}
        </div>
      </Card>

      {/* Locations */}
      <Card className="p-6 bg-gradient-to-br from-orange-50/50 to-amber-50/50 dark:from-orange-950/20 dark:to-amber-950/20">
        <h3 className="text-lg font-bold text-foreground mb-4 flex items-center gap-2">
          <MapPin className="text-orange-600 dark:text-orange-400" size={20} />
          Current Locations & Target Demographics
        </h3>
        <div className="space-y-3">
          {[
            { name: "Maadi (Flagship)", addr: "Road 6, Sarayat El Maadi", demo: "Premium Maadi residents" },
            { name: "Mivida, New Cairo", addr: "Gated compound location", demo: "Affluent New Cairo families" },
            { name: "Sheikh Zayed", addr: "Upscale Cairo suburb", demo: "High-income professionals" },
            { name: "New Giza", addr: "Premium development", demo: "Luxury residential segment" },
            { name: "FamBam Mall, New Cairo", addr: "Opening January 2026", demo: "International school families" },
          ].map((loc, idx) => (
            <div key={idx} className="p-3 bg-white/50 dark:bg-black/20 rounded-lg">
              <p className="font-semibold text-foreground text-sm">{loc.name}</p>
              <p className="text-xs text-muted-foreground">{loc.addr}</p>
              <p className="text-xs text-muted-foreground mt-1">📍 {loc.demo}</p>
            </div>
          ))}
        </div>
      </Card>

      {/* Founders' Credentials */}
      <Card className="p-6">
        <h3 className="text-lg font-bold text-foreground mb-4 flex items-center gap-2">
          <Trophy className="text-yellow-600 dark:text-yellow-400" size={20} />
          Founders' World-Class Credentials
        </h3>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="p-4 bg-blue-50/50 dark:bg-blue-950/20 rounded-lg border border-blue-200/50 dark:border-blue-900/50">
            <p className="font-bold text-foreground mb-3">Ahmed Yehia</p>
            <ul className="text-sm space-y-2 text-foreground">
              <li>✓ Deputy Manager, Cairo Opera Ballet Company (2021-present)</li>
              <li>✓ Principal Dancer, Cairo Opera Ballet Company (2000-present, 24+ years)</li>
              <li>✓ First Prize, Best Egyptian Male Ballet Dancer (2000)</li>
              <li>✓ Master's Degree, Institute for Artistic Dance, Belgrade</li>
              <li>✓ International competition judge (Sibiu, Bari, Domenico Modugno)</li>
            </ul>
          </div>

          <div className="p-4 bg-pink-50/50 dark:bg-pink-950/20 rounded-lg border border-pink-200/50 dark:border-pink-900/50">
            <p className="font-bold text-foreground mb-3">Anja Ahcin</p>
            <ul className="text-sm space-y-2 text-foreground">
              <li>✓ Principal Dancer, Cairo Opera Ballet Company (2008-present, 16+ years)</li>
              <li>✓ Graduated Belgrade Ballet School "Lujo Davico" with excellence</li>
              <li>✓ Leading roles in major classical ballets (Romeo & Juliet, Sleeping Beauty)</li>
              <li>✓ International competition judge & guest choreographer</li>
              <li>✓ Professional tenure with National Theater of Belgrade</li>
            </ul>
          </div>
        </div>
      </Card>

      {/* Competitive Position */}
      <Card className="p-6 border-t-4 border-t-primary">
        <h3 className="text-lg font-bold text-foreground mb-4 flex items-center gap-2">
          <TrendingUp className="text-primary" size={20} />
          Competitive Market Position
        </h3>
        <div className="space-y-3">
          <p className="text-sm text-foreground font-semibold">Premium Tier Leader in Professional Ballet Education</p>
          <div className="grid gap-2">
            {[
              { comp: "Easy Talent Academy", pos: "Russian Classical Ballet", edge: "Russian methodology" },
              { comp: "Queen Academy", pos: "World-class education", edge: "International accreditation" },
              { comp: "Little Swan", pos: "Recreational/Local", edge: "Neighborhood convenience" },
              { comp: "Slimnastics Ballet", pos: "Fitness hybrid", edge: "Accessibility & fitness" },
            ].map((item, idx) => (
              <div key={idx} className="flex items-start gap-3 p-3 bg-muted/50 rounded-lg">
                <div className="w-2 h-2 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                <div className="flex-1">
                  <p className="font-medium text-foreground text-sm">{item.comp}</p>
                  <p className="text-xs text-muted-foreground">
                    {item.pos} • {item.edge}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="p-4 mt-4 bg-primary/10 rounded-lg border border-primary/20">
            <p className="text-sm font-semibold text-primary">PBA Unique Advantages</p>
            <ul className="text-xs text-foreground mt-2 space-y-1">
              <li>✓ Cairo Opera House institutional partnership (government backing)</li>
              <li>✓ Principal Dancers as founders (highest professional tier)</li>
              <li>✓ Direct pipeline to Cairo Opera House Main Hall performances</li>
              <li>✓ International competition success (European & Russian competitions)</li>
              <li>✓ 5-location presence vs. single-location competitors</li>
            </ul>
          </div>
        </div>
      </Card>

      {/* Growth Trajectory */}
      <Card className="p-6 bg-emerald-50/50 dark:bg-emerald-950/20 border-emerald-200/50 dark:border-emerald-900/50">
        <h3 className="text-lg font-bold text-foreground mb-4">Growth Trajectory & Scalability</h3>
        <div className="space-y-4">
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 rounded-full bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 flex items-center justify-center font-bold text-sm flex-shrink-0">
              1
            </div>
            <div>
              <p className="font-semibold text-foreground">2016: Founded</p>
              <p className="text-sm text-muted-foreground">Maadi flagship location established</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 rounded-full bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 flex items-center justify-center font-bold text-sm flex-shrink-0">
              2
            </div>
            <div>
              <p className="font-semibold text-foreground">2023-2024: Expansion</p>
              <p className="text-sm text-muted-foreground">Added Mivida, Sheikh Zayed, New Giza locations</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 rounded-full bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 flex items-center justify-center font-bold text-sm flex-shrink-0">
              3
            </div>
            <div>
              <p className="font-semibold text-foreground">Jan 2026: Strategic Opening</p>
              <p className="text-sm text-muted-foreground">FamBam Mall New Cairo (5th location)</p>
            </div>
          </div>
        </div>
        <p className="text-sm text-emerald-700 dark:text-emerald-300 mt-4 p-3 bg-emerald-100/50 dark:bg-emerald-900/30 rounded-lg font-semibold">
          8+ years, 5 locations = Strong growth trajectory & financial health indicator
        </p>
      </Card>
    </div>
  )
}
