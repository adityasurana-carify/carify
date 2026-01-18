import { Cpu, Fingerprint, Pencil, Settings2, Sparkles, Zap } from 'lucide-react'

export function Features() {
    return (
        <section className="py-12 md:py-20">
            <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
                <div className="relative z-10 mx-auto max-w-xl space-y-6 text-center md:space-y-12">
                    <h2 className="text-balance text-4xl font-medium lg:text-5xl">Built for Healthcare Excellence</h2>
                    <p className="text-muted-foreground">Carify's AI agents are designed specifically for healthcare operations, combining cutting-edge technology with deep industry expertise to transform patient care.</p>
                </div>

                <div className="relative mx-auto grid max-w-2xl lg:max-w-4xl divide-x divide-y border *:p-12 sm:grid-cols-2 lg:grid-cols-3">
                    <div className="space-y-3">
                        <div className="flex items-center gap-2">
                            <Zap className="size-4 text-primary" />
                            <h3 className="text-sm font-medium">Lightning Fast</h3>
                        </div>
                        <p className="text-sm text-muted-foreground">Instant response times for patient inquiries, reducing wait times by 3x.</p>
                    </div>
                    <div className="space-y-2">
                        <div className="flex items-center gap-2">
                            <Cpu className="size-4 text-primary" />
                            <h3 className="text-sm font-medium">AI-Powered</h3>
                        </div>
                        <p className="text-sm text-muted-foreground">Proprietary models trained on thousands of real healthcare interactions.</p>
                    </div>
                    <div className="space-y-2">
                        <div className="flex items-center gap-2">
                            <Fingerprint className="size-4 text-primary" />
                            <h3 className="text-sm font-medium">HIPAA Compliant</h3>
                        </div>
                        <p className="text-sm text-muted-foreground">Enterprise-grade security protecting patient data at every step.</p>
                    </div>
                    <div className="space-y-2">
                        <div className="flex items-center gap-2">
                            <Pencil className="size-4 text-primary" />
                            <h3 className="text-sm font-medium">Fully Customizable</h3>
                        </div>
                        <p className="text-sm text-muted-foreground">Tailored workflows that match your practice's unique needs.</p>
                    </div>
                    <div className="space-y-2">
                        <div className="flex items-center gap-2">
                            <Settings2 className="size-4 text-primary" />
                            <h3 className="text-sm font-medium">Easy Integration</h3>
                        </div>
                        <p className="text-sm text-muted-foreground">Seamless connection with your existing EHR and IVR systems.</p>
                    </div>
                    <div className="space-y-2">
                        <div className="flex items-center gap-2">
                            <Sparkles className="size-4 text-primary" />
                            <h3 className="text-sm font-medium">24/7 Availability</h3>
                        </div>
                        <p className="text-sm text-muted-foreground">Always-on support handling 75% of calls around the clock.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}
