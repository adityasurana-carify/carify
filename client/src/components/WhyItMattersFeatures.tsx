import { cn } from "@/utils/utils";
import { Clock, UserCheck, Briefcase } from "lucide-react";

export default function WhyItMattersFeatures() {
  const features = [
    {
      title: "More Time for Care",
      description: "Clinicians shouldn't spend half their day on administrative tasks. AI frees them to focus on patient outcomes, not phone lines.",
      icon: <Clock className="h-8 w-8" />,
    },
    {
      title: "Consistent Patient Experience",
      description: "Every patient gets instant attention, clear instructions, and follow-up support—no matter how busy your practice gets.",
      icon: <UserCheck className="h-8 w-8" />,
    },
    {
      title: "Operational Efficiency Without More Hiring",
      description: "Instead of battling staffing shortages, clinics can scale operations confidently with AI handling their repetitive workload.",
      icon: <Briefcase className="h-8 w-8" />,
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 relative z-10 max-w-7xl mx-auto">
      {features.map((feature, index) => (
        <Feature key={feature.title} {...feature} index={index} />
      ))}
    </div>
  );
}

const Feature = ({
  title,
  description,
  icon,
  index,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
}) => {
  return (
    <div
      className={cn(
        "flex flex-col lg:border-r py-10 relative group/feature border-neutral-200",
        index === 0 && "lg:border-l border-neutral-200",
        "lg:border-b border-neutral-200"
      )}
    >
      <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-blue-100 to-transparent pointer-events-none" />
      <div className="mb-4 relative z-10 px-10 text-blue-600">
        {icon}
      </div>
      <div className="text-lg font-bold mb-2 relative z-10 px-10">
        <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-300 group-hover/feature:bg-blue-500 transition-all duration-200 origin-center" />
        <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-neutral-800">
          {title}
        </span>
      </div>
      <p className="text-sm text-neutral-600 max-w-xs relative z-10 px-10">
        {description}
      </p>
    </div>
  );
};
