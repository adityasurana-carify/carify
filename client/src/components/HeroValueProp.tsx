import ParallaxSection from "./ParallaxSection";

export default function HeroValueProp() {
  return (
    <section className="py-12 md:py-16 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
        <ParallaxSection className="text-center space-y-6" speed={0.4}>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Built for Modern Healthcare. Designed for Busy Teams.
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
            Your staff shouldn't be buried under voicemails, back-and-forth calls, and administrative drudgery. Our AI Assistants operate with medical-grade accuracy, empathy, and workflow intelligence—so your clinic runs smoother every day.
          </p>
        </ParallaxSection>
      </div>
    </section>
  );
}
