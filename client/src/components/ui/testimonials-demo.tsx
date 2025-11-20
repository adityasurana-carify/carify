import { TestimonialsColumn } from "@/components/ui/testimonials-columns-1";
import { motion } from "motion/react";

const testimonials = [
  {
    text: "Jenny has transformed our insurance verification process. What used to take our staff 15-20 minutes per patient now happens automatically. Our front desk can focus on patient care instead of being stuck on hold.",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
    name: "Dr. Sarah Chen",
    role: "Practice Manager, Family Health Clinic",
  },
  {
    text: "The implementation was seamless. Jenny integrated with our EHR system perfectly and our staff was trained in under 30 minutes. The ROI was immediate - we're processing 40% more patients daily.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    name: "Michael Rodriguez",
    role: "IT Director, Metro Health Network",
  },
  {
    text: "Jenny's accuracy is incredible. No more transcription errors or missed copay information. Our billing department loves the structured data format, and patients appreciate faster check-ins.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
    name: "Lisa Thompson",
    role: "Billing Manager, Riverside Medical",
  },
  {
    text: "As a small practice, we couldn't afford dedicated insurance verification staff. Jenny works 24/7 and handles all our verification needs. It's like having a full-time employee for a fraction of the cost.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    name: "Dr. James Wilson",
    role: "Owner, Wilson Family Practice",
  },
  {
    text: "The HIPAA compliance and security features give us complete peace of mind. Jenny handles sensitive patient information with the same care we would, but with perfect consistency.",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face",
    name: "Amanda Foster",
    role: "Compliance Officer, Regional Health System",
  },
  {
    text: "Jenny's ability to handle complex insurance scenarios is impressive. Even difficult cases with multiple payers or special authorizations are resolved quickly and accurately.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
    name: "Robert Kim",
    role: "Operations Director, Specialty Care Center",
  },
  {
    text: "Our patient satisfaction scores improved significantly after implementing Jenny. Faster check-ins and accurate benefit information mean happier patients and smoother operations.",
    image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=150&h=150&fit=crop&crop=face",
    name: "Dr. Maria Gonzalez",
    role: "Chief Medical Officer, Community Health",
  },
  {
    text: "Jenny has eliminated our insurance verification backlog completely. We used to have a 2-day delay for verifications - now everything is done in real-time before the patient arrives.",
    image: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=150&h=150&fit=crop&crop=face",
    name: "David Park",
    role: "Front Office Supervisor, Urban Clinic",
  },
  {
    text: "The cost savings are remarkable. We've reduced our administrative overhead by 60% while improving accuracy and patient experience. Jenny pays for itself within the first month.",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face",
    name: "Jennifer Adams",
    role: "CFO, Healthcare Partners Group",
  },
];

const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn = testimonials.slice(6, 9);

export const TestimonialsDemo = () => {
  return (
    <section className="bg-background my-20 relative">
      <div className="container z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="flex flex-col items-center justify-center max-w-[540px] mx-auto"
        >
          <div className="flex justify-center">
            <div className="border py-1 px-4 rounded-lg">Testimonials</div>
          </div>

          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold tracking-tighter mt-5 text-center">
            What Healthcare Providers Say
          </h2>
          <p className="text-center mt-5 opacity-75">
            See how Jenny is transforming insurance verification for clinics nationwide.
          </p>
        </motion.div>

        <div className="flex justify-center gap-6 mt-10 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)] max-h-[740px] overflow-hidden">
          <TestimonialsColumn testimonials={firstColumn} duration={15} />
          <TestimonialsColumn testimonials={secondColumn} className="hidden md:block" duration={19} />
          <TestimonialsColumn testimonials={thirdColumn} className="hidden lg:block" duration={17} />
        </div>
      </div>
    </section>
  );
};