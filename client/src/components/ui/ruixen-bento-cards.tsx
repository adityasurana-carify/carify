"use client"

import React from "react"
import { cn } from "@/lib/utils"

const cardContents = [
  {
    title: "AI Insurance Coordinator",
    description:
      "Jenny handles insurance verification calls 24/7, eliminating hold times and manual data entry for your front desk staff.",
  },
  {
    title: "HIPAA Compliant",
    description:
      "Built for healthcare with SOC 2 certification and enterprise-grade security to protect patient information.",
  },
  {
    title: "Seamless Integration",
    description:
      "Connect with your existing EHR and PMS systems through our API or web portal. No complex setup required - go live in under 30 days with expert-approved templates and workflows that minimize staff effort while delivering measurable impact.",
  },  
  {
    title: "24/7 Availability",
    description:
      "Our AI agents work around the clock, handling calls even after hours, weekends, and during peak times.",
  },
  {
    title: "Proven Results",
    description:
      "Save 2+ hours daily per staff member while reducing no-shows to less than 5% and handling 75% of calls automatically.",
  },
]


const PlusCard: React.FC<{
  className?: string
  title: string
  description: string
}> = ({
  className = "",
  title,
  description,
}) => {
  return (
    <div
      className={cn(
        "relative border border-dashed border-zinc-400 dark:border-zinc-700 rounded-lg p-6 bg-white dark:bg-zinc-950 min-h-[200px]",
        "flex flex-col justify-between cursor-pointer hover:shadow-lg transition-all duration-300",
        className
      )}
    >
      <CornerPlusIcons />
      {/* Content */}
      <div className="relative z-10 space-y-2">
        <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">
          {title}
        </h3>
        <p className="text-gray-700 dark:text-gray-300">{description}</p>
      </div>
    </div>
  )
}

const CornerPlusIcons = () => (
  <>
    <PlusIcon className="absolute -top-3 -left-3" />
    <PlusIcon className="absolute -top-3 -right-3" />
    <PlusIcon className="absolute -bottom-3 -left-3" />
    <PlusIcon className="absolute -bottom-3 -right-3" />
  </>
)

const PlusIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    width={24}
    height={24}
    strokeWidth="1"
    stroke="currentColor"
    className={`dark:text-white text-black size-6 ${className}`}
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
  </svg>
)

export default function RuixenBentoCards() {
  return (
    <section className="bg-white dark:bg-black dark:bg-transparent border border-gray-200 dark:border-gray-800">
      <div className="mx-auto container border border-gray-200 dark:border-gray-800 py-12 border-t-0 px-4">
        {/* Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 auto-rows-auto gap-4">
          <PlusCard {...cardContents[0]} className="lg:col-span-3 lg:row-span-2" />
          <PlusCard {...cardContents[1]} className="lg:col-span-2 lg:row-span-2" />
          <PlusCard {...cardContents[2]} className="lg:col-span-4 lg:row-span-1" />
          <PlusCard {...cardContents[3]} className="lg:col-span-2 lg:row-span-1" />
          <PlusCard {...cardContents[4]} className="lg:col-span-2 lg:row-span-1" />
        </div>

        {/* Section Footer Heading */}
        <div className="max-w-2xl ml-auto text-right px-4 mt-6 lg:-mt-20">
          <h2 className="text-4xl md:text-6xl font-bold text-black dark:text-white mb-4">
            Built for healthcare. Designed for efficiency.
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg">
            Carify Health gives you the AI-powered tools to transform your practice operations with lightning speed. Each solution is thoughtfully designed to be flexible, reliable, and compliant with healthcare standards.
          </p>
        </div>
      </div>
    </section>
  )
}