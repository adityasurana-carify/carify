import { cn } from "@/utils/utils"
import { CardContent } from "@/components/ui/card";
import { TbHeartPlus } from "react-icons/tb";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export const Highlight = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <span
      className={cn(
        "font-bold bg-emerald-100 text-emerald-700 dark:bg-emerald-700/[0.2] dark:text-emerald-500 px-1 py-0.5",
        className
      )}
    >
      {children}
    </span>
  );
};


const CARDS = [
  {
    id: 0,
    name: "Sarah Chen",
    designation: "Frontend Developer",
    content: (
      <p>
        <Highlight>Carify Health</Highlight> has completely transformed our healthcare operations. The AI agents are beautifully crafted and{" "}
        <Highlight>incredibly easy to integrate</Highlight> into any modern healthcare workflow.
      </p>
    ),
  },
  {
    id: 1,
    name: "Alex Rodriguez",
    designation: "Practice Manager",
    content: (
      <p>
        The <Highlight>automation system</Highlight> behind Carify is both elegant and consistent. From scheduling to patient care, every detail is thoughtfully built with{" "}
        <Highlight>efficiency and reliability</Highlight> in mind.
      </p>
    ),
  },
  {
    id: 2,
    name: "David Kim",
    designation: "Healthcare Administrator",
    content: (
      <p>
        After adopting <Highlight>Carify Health</Highlight>, our team reduced no-shows by 40% and saved 2+ hours daily. The AI-powered features and{" "}
        <Highlight>seamless integration</Highlight> have made it an essential tool in our practice.
      </p>
    ),
  },
];


const integrations = [
  {
    name: "Insurance Verification",
    desc: "Automated benefits verification with real-time eligibility checks",
    icon: "🏥",
  },
  {
    name: "Care Management",
    desc: "Perioperative and preventive care coordination 24/7",
    icon: "💙",
  }
];


export default function RuixenSection() {
  return null;
}

let interval: any;

type Card = {
  id: number;
  name: string;
  designation: string;
  content: React.ReactNode;
};

export const CardStack = ({
  items,
  offset,
  scaleFactor,
}: {
  items: Card[];
  offset?: number;
  scaleFactor?: number;
}) => {
  const CARD_OFFSET = offset || 10;
  const SCALE_FACTOR = scaleFactor || 0.06;
  const [cards, setCards] = useState<Card[]>(items);

  useEffect(() => {
    startFlipping();

    return () => clearInterval(interval);
  }, []);
  const startFlipping = () => {
    interval = setInterval(() => {
      setCards((prevCards: Card[]) => {
        const newArray = [...prevCards]; // create a copy of the array
        newArray.unshift(newArray.pop()!); // move the last element to the front
        return newArray;
      });
    }, 5000);
  };

  return (
    <div className="relative mx-auto h-48 w-full md:h-48 md:w-96 my-4">

      {cards.map((card, index) => {
        return (
          <motion.div
            key={card.id}
            className="absolute dark:bg-black bg-white h-48 w-full md:h-48 md:w-96 rounded-3xl p-4 shadow-xl border border-neutral-200 dark:border-white/[0.1] flex flex-col justify-between"
            style={{
              transformOrigin: "top center",
            }}
            animate={{
              top: index * -CARD_OFFSET,
              scale: 1 - index * SCALE_FACTOR, // decrease scale for cards that are behind
              zIndex: cards.length - index, //  decrease z-index for the cards that are behind
            }}
          >
            <div className="font-normal text-neutral-700 dark:text-neutral-200">
              {card.content}
            </div>
            <div>
              <p className="text-neutral-500 font-medium dark:text-white">
                {card.name}
              </p>
              <p className="text-neutral-400 font-normal dark:text-neutral-200">
                {card.designation}
              </p>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
};
