import { Phone, MessageCircle, Activity } from 'lucide-react';
import DottedMap from 'dotted-map';
import { Area, AreaChart, CartesianGrid } from 'recharts';
import { type ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart';
import { GlowCard } from '@/components/ui/spotlight-card';
import AnimatedSection from './AnimatedSection';

const map = new DottedMap({ height: 55, grid: 'diagonal' });
const points = map.getPoints();

const svgOptions = {
    backgroundColor: 'hsl(var(--background))',
    color: 'hsl(var(--muted-foreground))',
    radius: 0.15,
};

const Map = () => {
    const viewBox = `0 0 120 60`;
    return (
        <svg viewBox={viewBox} style={{ background: svgOptions.backgroundColor }}>
            {points.map((point, index) => (
                <circle key={index} cx={point.x} cy={point.y} r={svgOptions.radius} fill={svgOptions.color} />
            ))}
        </svg>
    );
};

const chartConfig = {
    calls: {
        label: 'AI Handled Calls',
        color: 'hsl(var(--primary))',
    },
    appointments: {
        label: 'Appointments Scheduled',
        color: 'hsl(var(--chart-2))',
    },
} satisfies ChartConfig;

const chartData = [
    { month: 'Jan', calls: 156, appointments: 224 },
    { month: 'Feb', calls: 205, appointments: 310 },
    { month: 'Mar', calls: 280, appointments: 426 },
    { month: 'Apr', calls: 340, appointments: 520 },
    { month: 'May', calls: 420, appointments: 680 },
    { month: 'Jun', calls: 480, appointments: 760 },
];

const MonitoringChart = () => {
    return (
        <ChartContainer className="aspect-auto h-80 md:h-96" config={chartConfig}>
            <AreaChart
                accessibilityLayer
                data={chartData}
                margin={{
                    left: 0,
                    right: 0,
                }}
            >
                <defs>
                    <linearGradient id="fillCalls" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="var(--color-calls)" stopOpacity={0.8} />
                        <stop offset="55%" stopColor="var(--color-calls)" stopOpacity={0.1} />
                    </linearGradient>
                    <linearGradient id="fillAppointments" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="var(--color-appointments)" stopOpacity={0.8} />
                        <stop offset="55%" stopColor="var(--color-appointments)" stopOpacity={0.1} />
                    </linearGradient>
                </defs>
                <CartesianGrid vertical={false} />
                <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
                <Area
                    strokeWidth={2}
                    dataKey="appointments"
                    type="natural"
                    fill="url(#fillAppointments)"
                    fillOpacity={0.4}
                    stroke="var(--color-appointments)"
                    stackId="a"
                />
                <Area
                    strokeWidth={2}
                    dataKey="calls"
                    type="natural"
                    fill="url(#fillCalls)"
                    fillOpacity={0.4}
                    stroke="var(--color-calls)"
                    stackId="a"
                />
            </AreaChart>
        </ChartContainer>
    );
};

export default function CarifyFeatures() {
    return (
        <section className="px-4 py-16 md:py-24 bg-background">
            <div className="container mx-auto">
                <AnimatedSection>
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                            Healthcare AI That Never Sleeps
                        </h2>
                        <p className="text-lg text-muted-foreground">
                            Powerful features designed for modern healthcare practices
                        </p>
                    </div>
                </AnimatedSection>

                <div className="mx-auto grid max-w-6xl gap-4 md:grid-cols-2">
                    <AnimatedSection delay={0.1}>
                        <GlowCard customSize glowColor="blue" className="h-full">
                            <div className="p-6 sm:p-12">
                                <span className="text-muted-foreground flex items-center gap-2">
                                    <Phone className="size-4" />
                                    24/7 Global Availability
                                </span>

                                <p className="mt-8 text-2xl font-semibold">
                                    AI agents serving patients across all time zones, every single day.
                                </p>
                            </div>

                            <div aria-hidden className="relative">
                                <div className="absolute inset-0 z-10 m-auto size-fit">
                                    <div className="rounded-md bg-background/80 backdrop-blur-sm relative flex size-fit w-fit items-center gap-2 border px-3 py-1 text-xs font-medium shadow-lg">
                                        <span className="text-lg">🏥</span> Active in 15+ countries
                                    </div>
                                    <div className="rounded-md bg-background/60 backdrop-blur-sm absolute inset-2 -bottom-2 mx-auto border px-3 py-4 text-xs font-medium shadow-md"></div>
                                </div>

                                <div className="relative overflow-hidden">
                                    <div className="absolute inset-0 z-1 bg-gradient-to-t from-background to-transparent to-75%"></div>
                                    <Map />
                                </div>
                            </div>
                        </GlowCard>
                    </AnimatedSection>

                    <AnimatedSection delay={0.2}>
                        <GlowCard customSize glowColor="green" className="h-full p-6 sm:p-12">
                            <div className="relative z-10">
                                <span className="text-muted-foreground flex items-center gap-2">
                                    <MessageCircle className="size-4" />
                                    Intelligent Patient Communication
                                </span>

                                <p className="my-8 text-2xl font-semibold">
                                    Natural conversations that feel human, powered by healthcare-trained AI.
                                </p>
                            </div>
                            <div aria-hidden className="flex flex-col gap-8">
                                <div>
                                    <div className="flex items-center gap-2">
                                        <span className="flex justify-center items-center size-5 rounded-full border">
                                            <span className="size-3 rounded-full bg-primary" />
                                        </span>
                                        <span className="text-muted-foreground text-xs">Today, 9:30 AM</span>
                                    </div>
                                    <div className="rounded-md bg-background/80 backdrop-blur-sm mt-1.5 w-4/5 border p-3 text-xs">
                                        Hi, I need to schedule a follow-up appointment for next week.
                                    </div>
                                </div>

                                <div>
                                    <div className="rounded-md mb-1 ml-auto w-4/5 bg-primary p-3 text-xs text-primary-foreground">
                                        I'd be happy to help! I have availability on Tuesday at 2 PM or Thursday at 10 AM. Which works better for you?
                                    </div>
                                    <span className="text-muted-foreground block text-right text-xs">9:30 AM</span>
                                </div>
                            </div>
                        </GlowCard>
                    </AnimatedSection>

                    <AnimatedSection delay={0.3}>
                        <div className="col-span-full">
                            <GlowCard customSize glowColor="purple" className="p-12 w-full">
                                <p className="text-center text-4xl font-semibold lg:text-7xl">99.99% Uptime</p>
                                <p className="text-center text-muted-foreground mt-4">Healthcare-grade reliability you can count on</p>
                            </GlowCard>
                        </div>
                    </AnimatedSection>

                    <AnimatedSection delay={0.4}>
                        <div className="col-span-full">
                            <GlowCard customSize glowColor="orange" className="relative w-full">
                                <div className="absolute z-10 max-w-lg px-6 pr-12 pt-6 md:px-12 md:pt-12">
                                    <span className="text-muted-foreground flex items-center gap-2">
                                        <Activity className="size-4" />
                                        Real-Time Analytics
                                    </span>

                                    <p className="my-8 text-2xl font-semibold">
                                        Monitor call volume and appointments in real-time.{' '}
                                        <span className="text-muted-foreground">Track performance and identify trends instantly.</span>
                                    </p>
                                </div>
                                <MonitoringChart />
                            </GlowCard>
                        </div>
                    </AnimatedSection>
                </div>
            </div>
        </section>
    );
}
