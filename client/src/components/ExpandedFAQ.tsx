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
  {
    question: "Is the AI safe for patient interactions?",
    answer: "Yes—every agent complies with industry standards and is designed to follow healthcare communication protocols.",
  },
  {
    question: "Will it replace my staff?",
    answer: "No. It empowers your staff by eliminating repetitive work so they can focus on patient care.",
  },
  {
    question: "How quickly can we go live?",
    answer: "Most organizations launch fully functional workflows in under 30 days.",
  },
  {
    question: "Does it integrate with my EHR/PMS?",
    answer: "Yes. Our platform supports integrations with all major systems and can customize connections as needed.",
  },
];

export default function ExpandedFAQ() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-muted-foreground">
            Everything you need to know about Carify Health
          </p>
        </div>
        
        <Accordion type="single" collapsible className="w-full" data-testid="accordion-expanded-faq">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`} data-testid={`accordion-expanded-item-${index}`}>
              <AccordionTrigger className="text-left text-base font-semibold" data-testid={`accordion-expanded-trigger-${index}`}>
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed" data-testid={`accordion-expanded-content-${index}`}>
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
