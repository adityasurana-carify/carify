import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Quote } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import patient1 from "@assets/generated_images/Happy_patient_on_phone_e396094b.png";
import doctor1 from "@assets/generated_images/Healthcare_professional_portrait_ad27d7e5.png";
import manager1 from "@assets/generated_images/Medical_office_manager_452fbaa7.png";

const testimonials = [
  {
    quote: "Carify has transformed how we handle patient calls. Our staff can now focus on providing exceptional care instead of being stuck on the phone all day.",
    author: "Dr. Sarah Mitchell",
    role: "Chief Medical Officer",
    practice: "Metropolitan Health Center",
    image: doctor1,
    initials: "SM",
  },
  {
    quote: "The ROI was immediate. Within the first month, we saw a 40% reduction in administrative workload and our patient satisfaction scores went up significantly.",
    author: "James Rodriguez",
    role: "Practice Manager",
    practice: "Riverside Medical Group",
    image: manager1,
    initials: "JR",
  },
  {
    quote: "As a patient, I love how easy it is to get quick answers and schedule appointments. The AI is so helpful and always available when I need assistance.",
    author: "Emily Chen",
    role: "Patient",
    practice: "Carify Health User",
    image: patient1,
    initials: "EC",
  },
];

export default function Testimonials() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Trusted by Healthcare Providers
            </h2>
            <p className="text-lg text-muted-foreground">
              Hear from the practices and patients who experience Carify daily
            </p>
          </div>
        </AnimatedSection>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <AnimatedSection key={index} delay={index * 0.1}>
              <Card className="h-full hover-elevate transition-all" data-testid={`card-testimonial-${index}`}>
                <CardContent className="pt-6 space-y-4">
                  <Quote className="h-10 w-10 text-primary/20" />
                  
                  <p className="text-muted-foreground leading-relaxed italic">
                    "{testimonial.quote}"
                  </p>

                  <div className="flex items-center gap-4 pt-4 border-t">
                    <Avatar className="h-12 w-12">
                      <AvatarImage src={testimonial.image} alt={testimonial.author} />
                      <AvatarFallback>{testimonial.initials}</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-semibold text-foreground">{testimonial.author}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                      <p className="text-xs text-muted-foreground">{testimonial.practice}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
