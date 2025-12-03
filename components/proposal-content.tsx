"use client"
import ExecutiveSummary from "@/components/sections/executive-summary"
import TopFiveInsights from "@/components/sections/top-five-insights"
import AAIBProfile from "@/components/sections/aaib-profile"
import PBAAssessment from "@/components/sections/pba-assessment"
import SponsorshipArchitecture from "@/components/sections/sponsorship-architecture"
import ImplementationPlaybook from "@/components/sections/implementation-playbook"
import NegotiationPlaybook from "@/components/sections/negotiation-playbook"

interface ProposalContentProps {
  sectionId: string
}

export default function ProposalContent({ sectionId }: ProposalContentProps) {
  const renderSection = () => {
    switch (sectionId) {
      case "executive-summary":
        return <ExecutiveSummary />
      case "top-5-insights":
        return <TopFiveInsights />
      case "aaib-profile":
        return <AAIBProfile />
      case "pba-assessment":
        return <PBAAssessment />
      case "sponsorship-architecture":
        return <SponsorshipArchitecture />
      case "implementation-playbook":
        return <ImplementationPlaybook />
      case "negotiation-playbook":
        return <NegotiationPlaybook />
      default:
        return <ExecutiveSummary />
    }
  }

  return (
    <div className="space-y-6">
      <div className="animate-in fade-in slide-in-from-bottom-2 duration-500">{renderSection()}</div>
    </div>
  )
}
