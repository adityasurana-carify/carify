import React from "react"
import { cn } from "@/utils/utils"

interface CardContent {
  title: string
  description: string
}

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
        "flex flex-col justify-between",
        className
      )}
    >
      <CornerPlusIcons />
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

interface BentoCardsProps {
  title: string
  subtitle: string
  cards: CardContent[]
  footerTitle?: string
  footerDescription?: string
}

export default function BentoCards({ title, subtitle, cards, footerTitle, footerDescription }: BentoCardsProps) {
  return (
    <section className="bg-white dark:bg-black dark:bg-transparent border border-gray-200 dark:border-gray-800">
      <div className="mx-auto container border border-gray-200 dark:border-gray-800 py-12 border-t-0 px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-6xl font-bold text-black dark:text-white mb-4">
            {title}
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg">
            {subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 auto-rows-auto gap-4">
          {cards.map((card, index) => {
            const spanClasses = [
              "lg:col-span-3 lg:row-span-2",
              "lg:col-span-2 lg:row-span-2",
              "lg:col-span-4 lg:row-span-1",
              "lg:col-span-2 lg:row-span-1",
              "lg:col-span-2 lg:row-span-1",
            ]
            return <PlusCard key={index} {...card} className={spanClasses[index] || ""} />
          })}
        </div>

        {footerTitle && (
          <div className="max-w-2xl ml-auto text-right px-4 mt-6 lg:-mt-20">
            <h2 className="text-4xl md:text-6xl font-bold text-black dark:text-white mb-4">
              {footerTitle}
            </h2>
            {footerDescription && (
              <p className="text-gray-600 dark:text-gray-400 text-lg">
                {footerDescription}
              </p>
            )}
          </div>
        )}
      </div>
    </section>
  )
}
