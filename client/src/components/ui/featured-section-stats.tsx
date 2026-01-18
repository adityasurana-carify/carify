"use client";

import {
  AreaChart,
  Area,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

interface FeaturedSectionStatsProps {
  title: string;
  subtitle: string;
  stats: Array<{ value: string; label: string }>;
  chartData?: Array<{ name: string; value: number }>;
}

export default function FeaturedSectionStats({ title, subtitle, stats, chartData }: FeaturedSectionStatsProps) {
  const defaultData = [
    { name: "Jan", value: 20 },
    { name: "Feb", value: 40 },
    { name: "Mar", value: 60 },
    { name: "Apr", value: 80 },
    { name: "May", value: 100 },
    { name: "Jun", value: 130 },
    { name: "Jul", value: 160 },
  ];

  const data = chartData || defaultData;

  return (
    <section className="w-full max-w-6xl mx-auto text-left py-32">
      <div className="px-4">
        <h3 className="text-lg sm:text-xl lg:text-4xl font-medium text-gray-900 dark:text-white mb-16">
          {title}{" "}
          <span className="text-gray-500 dark:text-gray-400 text-sm sm:text-base lg:text-4xl">
            {subtitle}
          </span>
        </h3>

        {/* Stats grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-8">
          {stats.map((stat, index) => (
            <div key={index}>
              <p className="text-3xl font-medium text-gray-900 dark:text-white">{stat.value}</p>
              <p className="text-gray-500 text-md">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Area Chart */}
      <div className="w-full h-48 mt-8">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data}>
            <defs>
              <linearGradient id="colorBlue" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.4} />
                <stop offset="95%" stopColor="#3b82f6" stopOpacity={0} />
              </linearGradient>
            </defs>
            <Tooltip />
            <Area
              type="monotone"
              dataKey="value"
              stroke="#3b82f6"
              strokeWidth={2}
              fillOpacity={1}
              fill="url(#colorBlue)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </section>
  );
}
