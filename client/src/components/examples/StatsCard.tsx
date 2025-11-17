import StatsCard from '../StatsCard'
import { Phone } from 'lucide-react'

export default function StatsCardExample() {
  return (
    <div className="p-8 max-w-sm">
      <StatsCard
        icon={Phone}
        stat="75%"
        description="We handle 75% of your phone calls"
        testId="card-stat-example"
      />
    </div>
  )
}
