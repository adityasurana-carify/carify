import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What are the work timings of your AI agents?",
    answer: "Our agents work 24/7 instead of set hours like humans. Additionally, our AI can handle multiple calls simultaneously.",
  },
  {
    question: "What happens when your agent doesn't know the answer to questions asked by patients?",
    answer: "When our AI encounters a question it cannot confidently answer, it seamlessly transfers the call to your human staff or schedules a callback, ensuring patients always receive the help they need.",
  },
  {
    question: "Can the AI support different languages like Spanish, Mandarin etc?",
    answer: "Yes, our AI agents are multilingual and can communicate fluently in Spanish, Mandarin, and many other languages, helping you serve diverse patient populations effectively.",
  },
  {
    question: "Can we customize the workflows you provide to suit our practice needs?",
    answer: "Absolutely! All our workflows are fully customizable and can be tailored to match your specific practice requirements, protocols, and patient communication preferences.",
  },
  {
    question: "Can we access the call/message transcripts for quality analysis?",
    answer: "Yes, you have full access to detailed transcripts of all AI interactions, complete with analytics and insights to help you continuously improve your patient communication and service quality.",
  },
  {
    question: "Is it compulsory to have recorded calls for you to implement?",
    answer: "While recorded calls help us train and customize the AI to your specific practice style, they are not mandatory. We can implement effective solutions using industry best practices and your input on typical patient interactions.",
  },
];

export default function FAQAccordion() {
  return (
    <Accordion type="single" collapsible className="w-full" data-testid="accordion-faq">
      {faqs.map((faq, index) => (
        <AccordionItem key={index} value={`item-${index}`} data-testid={`accordion-item-${index}`}>
          <AccordionTrigger className="text-left text-base font-semibold" data-testid={`accordion-trigger-${index}`}>
            {faq.question}
          </AccordionTrigger>
          <AccordionContent className="text-muted-foreground leading-relaxed" data-testid={`accordion-content-${index}`}>
            {faq.answer}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
