import AnimatedSection from '../AnimatedSection'
import { Card, CardContent } from '@/components/ui/card'

export default function AnimatedSectionExample() {
  return (
    <div className="p-8 space-y-8">
      <AnimatedSection>
        <Card>
          <CardContent className="p-6">
            <h3 className="text-xl font-bold">First Animated Card</h3>
            <p className="text-muted-foreground">This card animates into view on scroll</p>
          </CardContent>
        </Card>
      </AnimatedSection>
      <AnimatedSection delay={0.2}>
        <Card>
          <CardContent className="p-6">
            <h3 className="text-xl font-bold">Second Animated Card</h3>
            <p className="text-muted-foreground">This card has a slight delay</p>
          </CardContent>
        </Card>
      </AnimatedSection>
    </div>
  )
}
