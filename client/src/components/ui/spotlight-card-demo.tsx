import { GlowCard } from "@/components/ui/spotlight-card";

export function SpotlightCardDemo() {
  return (
    <div className="w-screen h-screen flex flex-row items-center justify-center gap-10 bg-background">
      <GlowCard glowColor="blue">
        <div className="p-6 space-y-4">
          <h3 className="text-xl font-semibold">Blue Glow</h3>
          <p className="text-muted-foreground">This card has a blue spotlight effect that follows your cursor.</p>
        </div>
      </GlowCard>
      
      <GlowCard glowColor="purple">
        <div className="p-6 space-y-4">
          <h3 className="text-xl font-semibold">Purple Glow</h3>
          <p className="text-muted-foreground">This card has a purple spotlight effect with transparency.</p>
        </div>
      </GlowCard>
      
      <GlowCard glowColor="green">
        <div className="p-6 space-y-4">
          <h3 className="text-xl font-semibold">Green Glow</h3>
          <p className="text-muted-foreground">This card has a green spotlight effect with blur.</p>
        </div>
      </GlowCard>
    </div>
  );
}