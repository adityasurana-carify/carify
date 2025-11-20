import { Testimonials } from "@/components/ui/testimonials"

const testimonials = [
  {
    image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3',
    text: 'Jenny has transformed our patient intake process. We\'ve reduced wait times by 40% and our staff can focus on providing better care.',
    name: 'Dr. Sarah Martinez',
    username: '@dr_sarah_m',
    social: 'https://twitter.com/carifyhealth'
  },
  {
    image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3',
    text: 'Insurance verification used to take hours. Now Jenny handles it instantly, and our denial rates have dropped to nearly zero.',
    name: 'Michael Chen',
    username: '@mike_healthcare',
    social: 'https://twitter.com/carifyhealth'
  },
  {
    image: 'https://images.unsplash.com/photo-1594824804732-ca8db7d1457e?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3',
    text: 'Our no-show rate went from 15% to under 3% after implementing Jenny\'s appointment reminder system. It\'s been incredible.',
    name: 'Lisa Rodriguez',
    username: '@lisa_admin',
    social: 'https://twitter.com/carifyhealth'
  },
  {
    image: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3',
    text: 'Jenny handles 80% of our patient calls now. Our team can finally focus on what matters most - patient care.',
    name: 'Dr. James Wilson',
    username: '@dr_wilson',
    social: 'https://twitter.com/carifyhealth'
  },
  {
    image: 'https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3',
    text: 'The ROI was immediate. We saved 2+ hours per staff member daily and improved patient satisfaction scores significantly.',
    name: 'Amanda Foster',
    username: '@amanda_ops',
    social: 'https://twitter.com/carifyhealth'
  },
  {
    image: 'https://images.unsplash.com/photo-1551601651-2a8555f1a136?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3',
    text: 'Prior authorization approvals that used to take days now happen in minutes. Jenny has revolutionized our workflow.',
    name: 'Dr. Robert Kim',
    username: '@dr_kim_md',
    social: 'https://twitter.com/carifyhealth'
  }
];

export function TestimonialsDemo() {
  return (
    <div className="container py-16">
      <Testimonials 
        testimonials={testimonials}
        title="Trusted by Healthcare Professionals"
        description="See how Jenny is transforming healthcare operations across the country.<br />Real results from real healthcare teams."
        maxDisplayed={6}
      />
    </div>
  )
}