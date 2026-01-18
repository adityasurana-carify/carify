import { useId } from 'react';
import { Activity, Heart, Smartphone, TrendingUp, Users, FileText, Stethoscope, Calendar } from 'lucide-react';

const Grid = ({ pattern, size }: { pattern?: number[][]; size?: number }) => {
  const p = pattern ?? [
    [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
    [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
    [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
    [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
    [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
  ];
  return (
    <div className="pointer-events-none absolute left-1/2 top-0 -ml-20 -mt-2 h-full w-full [mask-image:linear-gradient(white,transparent)]">
      <div className="absolute inset-0 bg-gradient-to-r [mask-image:radial-gradient(farthest-side_at_top,white,transparent)] dark:from-zinc-900/30 from-zinc-100/30 to-zinc-300/30 dark:to-zinc-900/30 opacity-100">
        <GridPattern
          width={size ?? 20}
          height={size ?? 20}
          x="-12"
          y="4"
          squares={p}
          className="absolute inset-0 h-full w-full mix-blend-overlay dark:fill-white/10 dark:stroke-white/10 stroke-black/10 fill-black/10"
        />
      </div>
    </div>
  );
};

const GridPattern = ({ width, height, x, y, squares, ...props }: any) => {
  const patternId = useId();
  return (
    <svg aria-hidden="true" {...props}>
      <defs>
        <pattern id={patternId} width={width} height={height} patternUnits="userSpaceOnUse" x={x} y={y}>
          <path d={`M.5 ${height}V.5H${width}`} fill="none" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" strokeWidth={0} fill={`url(#${patternId})`} />
      {squares && (
        <svg x={x} y={y} className="overflow-visible">
          {squares.map(([x, y]: any) => (
            <rect strokeWidth="0" key={`${x}-${y}`} width={width + 1} height={height + 1} x={x * width} y={y * height} />
          ))}
        </svg>
      )}
    </svg>
  );
};

export default function ProgramsGrid() {
  const programs = [
    { name: 'RPM', icon: Activity, desc: 'Remote Patient Monitoring' },
    { name: 'Health Data', icon: FileText, desc: 'Comprehensive Collection' },
    { name: 'Monitoring', icon: Heart, desc: 'Regular Check-ins' },
    { name: 'Remote Care', icon: Stethoscope, desc: 'Virtual Delivery' },
    { name: 'Marketing', icon: TrendingUp, desc: 'Patient Engagement' },
    { name: 'Post Discharge', icon: Calendar, desc: 'Follow-up Care' },
    { name: 'Pre-hospital', icon: Users, desc: 'Admission Prep' },
    { name: 'Device Monitoring', icon: Smartphone, desc: 'Integration Support' }
  ];

  return (
    <div className="py-16 md:py-24">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
          Our Programs
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Choose any program or make a Custom One. Start almost immediately with our 1 month free trial
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 md:gap-6 max-w-7xl mx-auto">
        {programs.map((program) => {
          const Icon = program.icon;
          return (
            <div
              key={program.name}
              className="relative bg-gradient-to-b dark:from-neutral-900 from-neutral-100 dark:to-neutral-950 to-white p-6 rounded-3xl overflow-hidden group hover:scale-105 transition-transform cursor-pointer"
            >
              <Grid size={20} />
              <div className="relative z-20">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <p className="text-base font-bold text-neutral-800 dark:text-white">
                  {program.name}
                </p>
                <p className="text-neutral-600 dark:text-neutral-400 mt-2 text-sm font-normal">
                  {program.desc}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
